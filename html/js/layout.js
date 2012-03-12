
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

doLayout = function(){
    
    // Main container
    main_layout = shmCreateElement('div', {id: 'main_layout'}, {position: 'absolute', top: '120px', left: '0px', width: '95%', display: 'block', overflow: 'hidden'});
    document.body.appendChild(main_layout);
    
    $(function() {
	    var getSkoopUrl = 'http://50.18.13.231/get?';
	    getSkoopUrl += 'sort={%22update%22:-1}&limit=20';
	    $("#main_layout").empty();
	    $.getJSON(getSkoopUrl, function(data) {
	    $("#skoopTemplate").tmpl(data).appendTo("#main_layout");
	    }); // .getJSON
	  });
	  
	// no empty div, no flow
    empty_child = shmCreateElement('div', {id: 'empty_child'}, {display: 'inline-block', float: 'left', width: '0px', heigh: '0px'});
    main_layout.appendChild(empty_child);
    
};

doUpdateLayout = function() {

    $(function() {
	    //var getSkoopUrl = 'http://50.18.13.231/get?sort=create&limit=2&callback=?';
	    var getLatestUrl = 'http://50.18.13.231/get?criteria={%22field%22:%22updated%22,%22op%22:%22gt%22,%22values%22:[';
	    getLatestUrl += new Date().getTime();
	    getLatestUrl += ']}&sort={%22update%22:-1}';
	    
	    $.getJSON(getLatestUrl, function(data) {
	        $("#skoopTemplate").tmpl(data).prependTo("#main_layout");
	    }); // .getJSON
	    
	  });
};

$(document).ready(function() {
    doLayout();
    
    window.setInterval(doUpdateLayout, 10000);
});