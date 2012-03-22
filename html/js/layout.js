
/* Skooply Layout Engine 1.0 */
var elemZeroMemo = {};

var useInline = {
  label: 1,
  span: 1
};

var styleZero = {
  fontWeight: 'normal',
  //color: primaryTxtClr,
  //fontFamily: styleSansSerifFont,
  fontVariant: 'normal',
  margin: '0px',
  padding: '0px',
  //font: '100% ' + styleSansSerifFont,
  fontSize: '100%',
  fontWeight: 'normal',
  fontStyle: 'normal',
  borderCollapse: 'collapse',
  borderWidth: '0px',
  borderSpacing: '0px',
  textAlign: 'left',
  outline: '0',
  float: 'none',
  textTransform: 'none',
  verticalAlign: 'top',
  backgroundColor: 'transparent',
  lineHeight: '130%',
  tableLayout: 'auto',
  minWidth: '0px',
  minHeight: '0px',
  cssFloat: 'none',
  styleFloat: 'none',
  textShadow: 'none',
  width: 'auto'
};

var shmStyleMemo = {};
function shmStyleElement(elt, styles,key) {
  if(key) {
    if(!shmStyleMemo[key]) {
      shmStyleMemo[key] = shmStyleElement(document.createElement("span"),
                                          styles).style.cssText;
    }
    
    elt.style.cssText = elt.style.cssText + shmStyleMemo[key];
    return elt;
  }

  for (var styleName in styles) {
    try {
      elt.style[styleName] = styles[styleName];
    } catch (e) {
      if (elt.currentStyle) {
        elt.currentStyle[styleName] = styles[styleName];
      }
    }
  }
  return elt;
}

function shmCreateElement(tagName, props, styles, children) {
  if(!elemZeroMemo[tagName]) {
    var cached = document.createElement(tagName);
    shmStyleElement(cached, styleZero,"zero");
    if(useInline[tagName]) {
      shmStyleElement(cached, styleInline,"inline");
    }
    elemZeroMemo[tagName] = cached;
  } 
  
  var element = elemZeroMemo[tagName].cloneNode(false);

  if (props) {
    for (var propName in props) {
      element.setAttribute(propName, props[propName]) || eval('element.'+propName+'=props[propName];');
    }
  }
  if (styles) {
    shmStyleElement(element, styles);
  }
  if (children) {
    for( var i = 3; i < arguments.length; i++ ) {
      element.appendChild(arguments[i]);
    }
  }
  return element;
}

var last_update_time = 0;

doLayout = function(){
    
    // Main container
main_layout = shmCreateElement('div', { id: 'main_layout' }, { position: 'absolute', top: '100px', left: '0px', width: '95%', display: 'block', overflow: 'hidden', margin:'10px'});
    document.body.appendChild(main_layout);

    var getSkoopUrl = 'http://50.18.13.231/get?';
    getSkoopUrl += 'sort={%22updated%22:-1}&limit=20&callback=?';
    $("#main_layout").empty();
    $.getJSON(getSkoopUrl, function(data) {
    last_update_time = data[0]['updated']; // Timestamp of first (most recent)
    
    $("#skoopTemplate").tmpl(data).appendTo("#main_layout");
   
   
    }); // .getJSON
	  
	// no empty div, no flow
    empty_child = shmCreateElement('div', {id: 'empty_child'}, {display: 'inline-block', float: 'left', width: '0px', heigh: '0px'});
    main_layout.appendChild(empty_child);
    
};

doUpdateLayout = function() {
    
    var getLatestUrl = 'http://50.18.13.231/get?criteria={%22field%22:%22updated%22,%22op%22:%22gt%22,%22values%22:[';
    getLatestUrl += last_update_time;
    getLatestUrl += ']}&sort={%22updated%22:-1}';
    
    $.getJSON(getLatestUrl, function(data) {
        if(data.length>0)
        {
            if(data[0]['updated']>last_update_time)
            {
                last_update_time = data[0]['updated'];
            }
        }
        $("#skoopTemplate").tmpl(data).prependTo("#main_layout");
    }); // .getJSON
};

$(document).ready(function() {
    doLayout();
    
    window.setInterval(doUpdateLayout, 10000);
});
