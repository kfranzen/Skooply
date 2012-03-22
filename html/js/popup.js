
//var home_URL = "http://localhost:2404/SkooplyWS/Skooply/scraping/";
var home_URL = "http://184.169.140.17/scraping/";
var post_URL = "http://50.18.13.231/";

var user_to_post = 'gttsoft@gmail.com';
var did_skoop_check = false;

var dialog_width = '555px';
var dialog_height = '415px';
var dialog_border_radius = '6px';

var nav_bar_border_radius = '6px';
var nav_bar_active = '#ec3069';
var nav_bar_disabled = '#cbcbc1';
var nav_bar_complete = '#83b749';
var panel_background_color = '#edede7';

var nav_bar_height = '20px';
var nav_bar_width = '500px';

var top_nav_pos = '70px';
var props_bar_first_pos = '350px';
var props_bar_second_pos = '88px';
var complete_bar_first_pos = '380px';
var complete_bar_second_pos = '116px';

var complete_button_height = '25px';
var complete_button_width = '440px';
var complete_button_text_offset = '200px';

var next_button_top = '245px';

var panel_height = '260px';
var panel_left_offset = '25px';

var input_field_width = '150px';

var skoop_height = '170px';

var styleSansSerifFont = 'Verdana, Arial, Helvetica, sans-serif';

var styleClear = {
   fontSize: '1px',
   margin: '0',
   padding: '0',
   lineHeight: '0',
   height: '1px',
   width: '1px',
   clear: 'both',
   float: 'left',
};

var styleLogo = {

    display: 'block',
    left: '430px', 
    top: '5px', 
    position: 'absolute',
    
};

var styleShadow = {

    display: 'block', 
    textAlign: 'center', 
    //border: 'solid 1px black', 
    height: dialog_height, 
    width: dialog_width, 
    position: 'fixed', 
    left: '149px', 
    top: '119px', 
    float: 'left',
    backgroundColor: 'grey',
    zIndex: '10000000',
    
    opacity: '0.2',
    filter: 'alpha(opacity=20)' 
    
    //'background-color': '#f0f0f0', 
   //'box-shadow': '0px 1px 50px #f0f0f0',
   
};

var stylePopup = {

    display: 'block', 
    textAlign: 'center', 
    borderBottom: 'solid 1px #cbcbc1', 
    height: dialog_height, 
    width: '550px', 
    position: 'fixed', 
    left: '150px', 
    top: '120px', 
    float: 'left',
    backgroundColor: 'white',
    zIndex: '10000000',
 
};

var styleTitle = {

    display: 'block', 
    textAlign: 'left', 
    //border: 'solid 1px black', 
    height: '25px', 
    width: '350px', 
    position: 'absolute', 
    left: '40px', 
    top: '15px', 
    float: 'left',
    backgroundColor: 'white',
    //zIndex: 10000000,
    fontSize: '18px',
    fontWeight: 'bold',
    color: 'black',
};

var styleClose = {

    position: 'absolute', 
    top: '10px', 
    left: '10px',
    
    cursor: 'hand',
	cursor: 'pointer',
    
};

var styleCompleteText = {
    display: 'block',
    fontFamily: styleSansSerifFont,
    fontSize: '11px',
    fontWeight: 'bold',
    position: 'absolute',
    textAlign: 'center',
    top: '5px',
    left: complete_button_text_offset,
};

//************ URL Panel *******************/

var styleNavBarURL = {

    display: 'block',  
    height: nav_bar_height, 
    width: nav_bar_width, 
    position: 'absolute', 
    left: '20px', 
    top: '60px',
    color: 'white',
    
    //border: 'solid 1px black',
    backgroundColor: nav_bar_active,
    textAlign: 'left',
    paddingTop: '5px',
    paddingLeft: '10px',

    //cursor: 'hand',
	//cursor: 'pointer',
	
	zIndex: '10000000',
};

var styleURLPanel = {

    display: 'block', 
    textAlign: 'center', 
    position: 'absolute',
    border: 'solid 1px' + nav_bar_active, 
    height: panel_height, 
    width: nav_bar_width, 
    left: panel_left_offset, 
    top: '70px', 
    float: 'left',
    visible: 'true',
 
    backgroundColor: panel_background_color,
    //zIndex: '10000000',
};

var styleURLSkoopContainer = {

    display: 'block', 
    textAlign: 'center', 
    position: 'absolute',
    //border: 'solid 1px' + nav_bar_active, 
    height: '215px', 
    width: '470px', 
    left: '15px', 
    top: '30px', 
    //float: 'left',
    visible: 'true',
 
    //backgroundColor: panel_background_color,
    //zIndex: '10000000',

};

var styleURL = {

    display: 'block', 
    textAlign: 'left', 
    border: 'solid 1px' + nav_bar_active, 
    height: '25px', 
    width: '450px', 
    position: 'absolute', 
    left: '20px',
    top: '20px', 
    //float: 'left',
    backgroundColor: 'white',
    //zIndex: 10000000
    color: 'black',
    'padding-left': '5px',
};

var styleJoinSkoopText = {

    display: 'block', 
    textAlign: 'left', 
    fontFamily: styleSansSerifFont,
    fontSize: '12px',
    fontWeight: 'bold',
    height: '15px', 
    width: '450px', 
    position: 'absolute', 
    left: '20px',
    top: '15px',
    color: nav_bar_active,
    'padding-left': '5px',
};

var styleURLCompleteButton = {

    display: 'block', 
    textAlign: 'center',
    fontWeight: 'bold',
    color: nav_bar_complete,
    position: 'absolute', 
    border: 'solid 2px' + nav_bar_complete, 
    height: complete_button_height, 
    width: complete_button_width, 
    left: panel_left_offset, 
    top: next_button_top, 
    float: 'left',
    visible: 'true',
    backgroundColor: 'white',
 
    //zIndex: '10000000',
    
    cursor: 'hand',
	cursor: 'pointer',
};

var styleNoSkoops = {

    display: 'block',
    fontWeight: 'bold',
    position: 'absolute',
    textAlign: 'center',
    color: 'black',
    fontSize: '12px',
    top: '110px',
    left: '45px',
    width: '350px',
};

//************ Props Panel *******************/

var styleNavBarProps = {

    display: 'block',  
    height: nav_bar_height, 
    width: nav_bar_width, 
    position: 'absolute', 
    left: '20px', 
    top: props_bar_first_pos,
    color: 'grey',
    
    //border: 'solid 1px black',
    backgroundColor: nav_bar_disabled,
    textAlign: 'left',
    paddingTop: '5px',
    paddingLeft: '10px',
 
    cursor: 'hand',
	cursor: 'pointer',
	
	zIndex: '10000000',
};

var stylePropsPanel = {

    display: 'block', 
    textAlign: 'center', 
    position: 'absolute',
    border: 'solid 1px' + nav_bar_active, 
    height: panel_height, 
    width: nav_bar_width, 
    left: panel_left_offset, 
    top: '100px', 
    float: 'left',
    visible: 'true',
    

    backgroundColor: panel_background_color,
    //zIndex: '10000000',
};

var styleVendor = {

    display: 'block', 
    textAlign: 'left', 
    border: 'solid 1px' + nav_bar_disabled, 
    height: '25px', 
    width: input_field_width, 
    position: 'absolute', 
    left: '320px', 
    top: '20px', 
    //float: 'left',
    backgroundColor: 'white',
    //zIndex: 10000000
    color: 'grey',
    'padding-left': '5px',
};

var styleName = {

    display: 'block', 
    textAlign: 'left', 
    border: 'solid 1px' + nav_bar_active, 
    height: '25px', 
    width: input_field_width, 
    position: 'absolute', 
    left: '160px',
    top: '50px', 
    //float: 'left',
    backgroundColor: 'white',
    //zIndex: 10000000
    color: 'black',
    'padding-left': '5px',
};

var stylePrice = {

    display: 'block', 
    textAlign: 'left', 
    border: 'solid 1px' + nav_bar_active,
    height: '25px', 
    width: input_field_width, 
    left: '160px',
    top: '80px',
    position: 'absolute',
    backgroundColor: 'white', 
    float: 'left',
    color: 'black',
    'padding-left': '5px',
};

var styleCanWaitText = {

    position: 'absolute', 
    fontFamily: styleSansSerifFont,
    fontSize: '9px',
    left: '162px',
    top: '115px',
    fontSize: '9px', 
    color: 'grey'
};

var styleCanWait = {

    display: 'block', 
    textAlign: 'left', 
    border: 'solid 1px' + nav_bar_active,
    height: '25px', 
    width: '90px', 
    left: '220px',
    top: '110px',
    position: 'absolute',
    backgroundColor: 'white', 
    float: 'left',
    color: 'grey',
    'padding-left': '5px',
};

var styleCanWaitDropDown = {

    display: 'block', 
    textAlign: 'left', 
    border: 'solid 1px' + nav_bar_active, 
    height: '27px', 
    width: '155px', 
    position: 'absolute', 
    left: '320px',
    top: '110px', 
    //float: 'left',
    backgroundColor: 'white',
    //zIndex: 10000000
    color: 'black',
    'padding-left': '5px',
};

var styleDiscount = {

    display: 'block', 
    textAlign: 'left', 
    border: 'solid 1px' + nav_bar_active, 
    height: '25px', 
    width: '40px', 
    position: 'absolute', 
    left: '430px', 
    top: '80px', 
    //float: 'left',
    backgroundColor: 'white',
    //zIndex: 10000000
    color: 'black',
    'padding-left': '5px',
};

var styleDiscountText = {
    
    position: 'absolute', 
    fontFamily: styleSansSerifFont,
    fontSize: '9px',
    top: '88px', 
    left: '325px', 
    fontSize: '9px', 
    color: 'grey'
};

var styleStore = {

    display: 'block', 
    textAlign: 'left', 
    border: 'solid 1px' + nav_bar_active, 
    height: '25px', 
    width: input_field_width, 
    position: 'absolute', 
    left: '160px',
    top: '20px', 
    //float: 'left',
    backgroundColor: 'white',
    //zIndex: 10000000
    color: 'black',
    'padding-left': '5px',
};

var styleUPC = {

    display: 'block', 
    textAlign: 'left', 
    border: 'solid 1px' + nav_bar_disabled, 
    height: '25px', 
    width: input_field_width, 
    position: 'absolute', 
    left: '320px',
    top: '50px', 
    //float: 'left',
    backgroundColor: 'white',
    //zIndex: 10000000
    color: 'grey',
    'padding-left': '5px',
};

var styleImage = {

    display: 'block', 
    textAlign: 'left', 
    height: '80px', 
    width: '80px',
    marginLeft: '20px', 
};

var styleImageNext = {
    cursor: 'hand',
	cursor: 'pointer',
	position:'absolute',
	display: 'block',
	top: '0px',
	left: '110px',
};

var styleImagePrev = {
    cursor: 'hand',
	cursor: 'pointer',
	position:'absolute',
	display: 'block',
	top: '0px',
	left: '0px',
};

var styleImageIndexText = {

    //border: 'solid 1px black',
    //height: '20',
    width: '90px',
    position:'absolute',
    fontFamily: styleSansSerifFont,
    fontSize: '9px',
    display: 'block',
    marginTop: '2px',
    marginLeft: '5px',
    marginRight: '5px',
    top: '0px',
	left: '20px',
};

var styleImagePicker = {

    display: 'block', 
    textAlign: 'left', 
    border: 'solid 2px' + nav_bar_active, 
    height: '110px', 
    width: '136px', 
    position: 'absolute', 
    backgroundColor: 'white',
    left: '10px', 
    top: '20px', 
    float: 'left',
};

var styleImagePickerContainer = {

    position:'absolute',
    width: '135px', 
    height: '25px', 
    //border: 'solid 1px black',
};



var stylePropsCompleteButton = {

    display: 'block', 
    textAlign: 'center',
    fontWeight: 'bold',
    color: nav_bar_complete,
    position: 'absolute', 
    border: 'solid 2px' + nav_bar_complete, 
    height: complete_button_height, 
    width: complete_button_width, 
    left: panel_left_offset, 
    top: next_button_top, 
    float: 'left',
    visible: 'true',
    backgroundColor: 'white',
   
    //zIndex: '10000000',
    
    cursor: 'hand',
	cursor: 'pointer',
};


//************ Finish Panel *******************/

var styleNavBarFinish = {

    display: 'block',  
    height: nav_bar_height, 
    width: nav_bar_width, 
    position: 'absolute', 
    left: '20px', 
    top: complete_bar_first_pos,
    color: 'grey',
    
    //border: 'solid 1px black',
    backgroundColor: nav_bar_disabled,
    textAlign: 'left',
    paddingTop: '5px',
    paddingLeft: '10px',
    
    
    cursor: 'hand',
	cursor: 'pointer',
	
	zIndex: '10000000',
};

var styleFinishPanel = {

    display: 'block', 
    textAlign: 'center', 
    position: 'absolute',
    border: 'solid 1px' + nav_bar_active, 
    height: panel_height, 
    width: nav_bar_width, 
    left: panel_left_offset, 
    top: '130px', 
    float: 'left',
    visible: 'true',
    
  
    backgroundColor: panel_background_color,
    //zIndex: '10000000',
};

var styleFinishCompleteButton = {

    display: 'block', 
    textAlign: 'center',
    fontWeight: 'bold',
    color: nav_bar_complete,
    position: 'absolute', 
    border: 'solid 2px' + nav_bar_complete, 
    height: complete_button_height, 
    width: complete_button_width, 
    left: panel_left_offset, 
    top: next_button_top, 
    float: 'left',
    visible: 'true',
    backgroundColor: 'white',
   
    //zIndex: '10000000',
    
    cursor: 'hand',
	cursor: 'pointer',
};

//****************** Join Skoop ****************//

var styleJoinSkoopPanel = {

    display: 'inline-block', 
    marginLeft: '10px', 
    //border: 'solid 1px' + nav_bar_disabled, 
    height: '215px', 
    width: '175px', 
    //position: 'absolute', 
    //top: '50px', 
    float: 'left',
    //backgroundColor: 'white',
    zIndex: '10000000',
    
};

var styleJoinButton = {

    display: 'none', 
    backgroundColor: panel_background_color,
    border: 'solid 1px black', 
    top: '250px',
    left: '250px',
    height: '150px', 
    width: '300px',
    color: 'black', 
    position: 'absolute',
    textAlign: 'center',
    
}

var styleJoinButtonText = {

    display: 'block', 
    top: '40px',
    left: '30px',
    height: '50px', 
    width: '200px',
    color: 'black', 
    position: 'absolute',
    textAlign: 'center',
    
    fontFamily: styleSansSerifFont,
    fontSize: '15px',
    fontWeight: 'bold',
    
}

//****************** Final Skoop ****************//

var styleFinalSkoopPanel = {

    display: 'block', 
    //border: 'solid 1px' + nav_bar_disabled, 
    height: '203px', 
    width: '450px', 
    position: 'absolute', 
    top: '20px',
    left: '20px',
    //zIndex: '10000000',
};

var styleFinalImagePanelSurround = {

    display: 'block', 
    border: 'solid 3px' + nav_bar_disabled, 
    height: '150px', 
    width: '150px', 
    position: 'absolute', 
    top: '0px',
    left: '0px',
    
    opacity: '0.3',
    filter: 'alpha(opacity=30)' 
    //zIndex: '10000000',
};

var styleFinalSocialPanel = {

    display: 'block', 
    //border: 'solid 3px' + nav_bar_disabled, 
    height: '50px', 
    width: '150px', 
    position: 'absolute', 
    top: '153px',
    left: '3px',
    backgroundColor: 'white',
    //zIndex: '10000000',
};

var styleFinalSocialPanelSurround = {

    display: 'block', 
    border: 'solid 3px' + nav_bar_disabled, 
    height: '50px', 
    width: '150px', 
    position: 'absolute', 
    top: '150px',
    left: '0px',
    
    opacity: '0.3',
    filter: 'alpha(opacity=30)' 
    //zIndex: '10000000',
};

var styleFinalImagePanel = {

    display: 'block', 
    //border: 'solid 3px' + nav_bar_disabled, 
    height: '150px', 
    width: '150px', 
    position: 'absolute', 
    top: '3px',
    left: '3px',
    backgroundColor: 'white',
    //zIndex: '10000000',
};

var styleFinalInfoPanel = {

    display: 'block',
    textAlign: 'center',
    height: '203px',
    width: '300px',
    position: 'absolute',
    top: '0px',
    left: '165px',
    backgroundColor: 'white',
    float: 'left',
    visible: 'true',
    //zIndex: '10000000',
};

// Members -------------//

var styleFinalImage = {

    display: 'block',
    position: 'absolute',
    top: '0px',
    left: '0px',
    height: '150px',
    //width: '50px',
};

var stylePercentOffImage = {
    
    display: 'block',
    position: 'absolute',
    top: '5px',
    left: '-5px',
    height: '25px',
    //width: '50px',
};

var styleApprovalImage = {

    display: 'block',
    position: 'absolute',
    top: '126px',
    left: '128px',
    height: '25px',
    width: '25px',
};

var stylePercentOffText = {
    
    display: 'block',
    //border: 'solid 1px black',
    fontFamily: styleSansSerifFont,
    fontSize: '9px', 
    position: 'absolute',
    color: 'white',
    fontWeight: 'bold',
    top: '16px',
    left: '0px',
    height: '15px',
    width: '50px',
    fontSize: '9px',
};

var styleFinalTitleText = {

    display: 'block',
    //border: 'solid 1px black',
    fontFamily: styleSansSerifFont, 
    fontSize: '9px',
    position: 'absolute',
    color: 'grey',
    fontWeight: 'bold',
    top: '155px',
    left: '10px',
    height: '12px',
    width: '140px',
    fontSize: '9px',
    overflow: 'hidden',
    'text-overflow': 'ellipsis',

};

var styleWhatUserText = {

    display: 'block',
    //border: 'solid 1px black', 
    position: 'absolute',
    fontFamily: styleSansSerifFont,
    fontSize: '9px',
    color: 'grey',
    //fontWeight: 'bold',
    top: '170px',
    left: '10px',
    height: '15px',
    width: '140px',
    fontSize: '9px',

};

var styleSocialContainer = {

    display: 'block',
    //border: 'solid 1px black', 
    position: 'absolute',
    color: 'grey',
    //fontWeight: 'bold',
    top: '185px',
    left: '10px',
    height: '20px',
    width: '140px',
    fontSize: '9px',
    backgroundColor: 'transparent',
    float: 'left',
    overflow: 'hidden',
};

var styleAchieveTitle = {

    display: 'block',
    //border: 'solid 1px black', 
    position: 'absolute',
    color: 'grey',
    fontWeight: 'bold',
    top: '10px',
    left: '20px',
    height: '20px',
    width: '350px',
    fontSize: '11px',
};

var styleAchieveBox = {

    display: 'block',
    border: 'solid 3px grey',
    backgroundColor: panel_background_color, 
    position: 'absolute',
    color: 'grey',
    fontWeight: 'bold',
    top: '30px',
    left: '30px',
    height: '50px',
    width: '230px',
    fontSize: '11px',
};

var styleScoresBox = {

    display: 'block',
    //border: 'solid 1px grey',
    //backgroundColor: panel_background_color, 
    position: 'absolute',
    color: 'grey',
    top: '120px',
    left: '30px',
    height: '65px',
    width: '230px',
    fontSize: '11px',
};

// PRICE
/*************************************************************/

getPrice = 
function() {

    var startTime = new Date().getTime();
    var nodes = [];
    var nonZeroRe = /[1-9]/;
    var priceFormatRe = /((?:\$|USD|\&pound\;|\&\#163\;|\&\#xa3\;|\u00A3|\&yen\;|\uFFE5|\&\#165\;|\&\#xa5\;|\u00A5|eur|\&\#8364\;|\&\#x20ac\;)\s*\d[0-9\,\.]*)/gi;
    var textNodeRe = /textnode/i;
    var emRe = /em/;
    var priceRangeRe = /^(\s|to|\d|\.|\$|\-|,)+$/; 
    var priceBonusRe = /club|total|price|sale|now|brightred/i;
    var outOfStockRe = /soldout|currentlyunavailable|outofstock/i;
    var tagRe = /^(h1|h2|h3|b|strong|sale)$/i;
    var anchorTagRe = /^a$/i;

    var penRe = /original|header|items|under|cart|more|nav|upsell/i;
    
    var last = "";
    var lastNode;
    var outOfStockIndex = -1;
    var foundPositivePriceBeforeOOSMsg = 0;

    var performOutOfStockCheck = function(domainStr) {
       var blacklist = new Array("toysrus.com", "babiesrus.com", "walmart.com");

       for (var i = 0; i < blacklist.length; i++) {
         var regex = new RegExp("^(?:www\.)?" + blacklist[i], "i");
         if (regex.test(domainStr)) {
           return false;
         } 
       }

       return true;
    };

    var getParents = function(node) {
        var parents = [];
        var traverse = node;
        while(traverse.parentNode) {
        parents.push(traverse.parentNode);
        traverse = traverse.parentNode;
        }
        return parents;
    };
    
    var findMutualParent = function(first,second) {

        var firstParents = getParents(first);
        var secondParents = getParents(second);

        for(var i = 0; i < firstParents.length; i++) {
        for(var j = 0; j < secondParents.length; j++) {
            if(firstParents[i] === secondParents[j]) {
                return firstParents[i];
                }
            }
        }
        return undefined;
    };
    
    var getStyleFunc = function(node) {
        if(document.defaultView && document.defaultView.getComputedStyle) {
            var computedStyle = document.defaultView.getComputedStyle(node,null);
            return function(propertyName) {
                return computedStyle.getPropertyValue(propertyName);
                };
        } else {
            return function(propertyName) {

                var mapper = {
                    "font-size" : "fontSize",
                    "font-weight" : "fontWeight",
		    "text-decoration" : "textDecoration"
                };
                
                return node.currentStyle[ mapper[propertyName] ? mapper[propertyName] : propertyName ];
                };
        }
    };
    
    
    var getWalker = function() {
        if(document.createTreeWalker) {
        return document.createTreeWalker(document.body,
                                       NodeFilter.SHOW_TEXT,
                                       function(node) {
                                           return NodeFilter.FILTER_ACCEPT;
                                       },
                                       false
                                      );
    
        } else {


        return {
            q : [],
            intialized : 0,
            currentNode : undefined,
            nextNode : function() {
                if(!this.initialized) {
                    this.q.push(document.body);
                    this.initialized = true;
                }
                
                while(this.q.length) {
                    var working = this.q.pop();
                    if(working.nodeType == 3) {
                        this.currentNode = working;
                        return true;
                    } else if(working.childNodes) {


                        if(working.style && 
                           (working.style.visibility == "hidden" || 
                            working.style.display == "none")) {
                            continue;
                        }

                        var children = new Array(working.childNodes.length);
                        for(var i = 0; i < working.childNodes.length; i++) {
                            children[i] = working.childNodes[i];
                        }
                        children.reverse();
                        this.q = this.q.concat(children);
                    }
                }
                return false;
            }
        };
        }
    };

    var getFontSizePx = function(styleFunc) {

        var fontSize = styleFunc("font-size") || "";
        var sizeFactor = emRe.test(fontSize) ? 16 : 1;

        fontSize = fontSize.replace(/px|em|pt/,"");
        fontSize -= 0;

        if(!isNaN(fontSize)) {
            return fontSize * sizeFactor;
        } else {
            return 0;
        }
    };

    var getOffset = function(node) {

	var offset = node.offsetTop;

	while(node.offsetParent) {
	    node = node.offsetParent;
	    offset += node.offsetTop;
	}

	return offset;
    };

    var getScore = function(node, index) {

        var domNode = node.node;
        var styledNode = domNode.nodeType == 3 ? domNode.parentNode : domNode;

        var price = node.price;
        var content = "";

        if(domNode.nodeType == 3) {
            content = domNode.data;
        } else {
            content = domNode.innerText || domNode.textContent;
        }
    
        var score = 0;
        var getStyle = getStyleFunc(styledNode);
	
	var fontWeight = getStyle("font-weight");

        if(getStyle("font-weight") == "bold") {
            score += 1;
        } 

       if(!styledNode.offsetWidth && !styledNode.offsetHeight ||
           getStyle("visibility") == "hidden" ||
           getStyle("display") == "none") {
                           score -= 100;
        }

        var parentsChildrenContent = (domNode.parentNode.innerText || domNode.parentNode.textContent).replace(/\s/g,"");
	var strippedContent = content.replace(/\s+/g,"");
	


            if(!nonZeroRe.test(price)) {
                score -= 100;
            }

	var strippedContentNoPrice = strippedContent.replace(/price|our/ig,"");
        if(strippedContentNoPrice.length < price.length * 2 + 4) {
	    score += 10;
	}

	if(priceRangeRe.test(strippedContent)) {
	    score += 2;
	}

	if(price.indexOf(".") != -1) {
	    score += 2;
	}

	score -= Math.abs(getOffset(styledNode) / 500);

        score += getFontSizePx(getStyle);
       
        if (penRe.test(content)) { score-=4; }
        if (priceBonusRe.test(content)) { score++; }
        domNode = styledNode;

        var parentsWalked = 0;

        while (domNode !== null &&
	       domNode != document.body &&
               parentsWalked++ < 4 ) {


	    if(parentsWalked !== 0) {
		getStyle = getStyleFunc(domNode);
	    }

            if(getStyle("text-decoration") == "line-through") {
		 score -=100;
            }



            for(var i = 0; i < domNode.childNodes.length; i++) {

                if(domNode.childNodes[i].nodeType == 3) {
                    
                    var tnode = domNode.childNodes[i];
                    
                    if(tnode.data) {
                        if(priceBonusRe.test(tnode.data)) {
                            score += 1;
                        }
                        
                        if(penRe.test(tnode.data)) {
                            score -= 1;
                        }
                    }
                }
            }

	    if(anchorTagRe.test(domNode.tagName)) {
		score -=5 ;
	    }
            if (priceBonusRe.test(domNode.getAttribute('class') || 
                                  domNode.getAttribute('className'))) {
                score+=1;
            }

            if (priceBonusRe.test(domNode.id)) {
                score+=1;
            }

            if (tagRe.test(domNode.tagName)) {
                score += 1;
            }

            if (penRe.test(domNode.tagName)) {
                score -= 1;
            }

            if (penRe.test(domNode.id)) {
                score -= 2;
            }
            
            if (penRe.test(domNode.getAttribute('class') ||
                           domNode.getAttribute('className'))) {
                score -= 2;
            }

            domNode = domNode.parentNode;

        }
        
	
        score -= content.length / 100;

        score -= index / 5;

        return score;

    };

    walker = getWalker();


    while(walker.nextNode() && nodes.length < 100) {

        if( nodes.length % 100 === 0 ) {
            if( new Date().getTime() - startTime > 1500 ) {
                return;
            }
        }

        var node = walker.currentNode;
    
        var text = node.data.replace(/\s/g,"");
        priceFormatRe.lastIndex = 0;
        var priceMatch = text.match(priceFormatRe);
        
        //If OutofStockIndex has not been set and we found a OOS string then
        // we set the index to number of price matches found before this match
        if((outOfStockIndex < 0) && outOfStockRe.test(text) && performOutOfStockCheck(document.domain)) {
             outOfStockIndex = nodes.length;
        }	
        if(priceMatch) {

           if (priceMatch[0].match(/\.$/g) && walker.nextNode()) {
             var nextNode = walker.currentNode;
             if (nextNode && nextNode.data) {
               var nextPrice = nextNode.data.replace(/\s/g,"");
               if (nextPrice && isNaN(nextPrice)) {
                 nextPrice = "00";
               }
               priceMatch[0] += nextPrice;
             }
           }
          
           nodes.push(
             {
                "node" : node,
                "price" : priceMatch[0]
             }
           );
           text = "";
        } else if( last !== "" && text !== "") {
           priceMatch = (last + text).match(priceFormatRe);
           if(priceMatch) {
             var mutual = findMutualParent(lastNode,node);
             nodes.push({"node" : mutual, "price" : priceMatch[0]});
           }
        }
    
        lastNode = node;
        last = text;
    }


    var max = undefined;
    var maxNode = undefined;

    for(var i = 0; i < nodes.length; i++) {
        var score = getScore(nodes[i], i);
        //Trying to see if we found a positive price before we found a OOS match
        if((i < outOfStockIndex) && (score > 0)) {
           foundPositivePriceBeforeOOSMsg = 1;
         }
        if(max === undefined || score > max) {
         max = score;
         maxNode = nodes[i];
        }
    }

    if(maxNode && ((outOfStockIndex < 0) || foundPositivePriceBeforeOOSMsg)) {
     return maxNode.price;
    }
};

// TITLE
/*************************************************************/

getTitle = function() {
  var title = window.document.title;
  if(typeof title != "string") {
    return "";
  }
    
  title = title.replace(/\s+/g,' ');
  title = title.replace(/^\s*|\s*$/g,'');
  
  if(document.domain.match(/amazon\.com/) && asin){
    var titleParts = title.split(":");
    if(titleParts[1]){
      title = titleParts[1];
    }
  }
  return title;
};

// IMAGES
/*************************************************************/

sortImage = function(a, b){
	return (b.height*b.width) - (a.height*a.width);
}

getImageLinks = function(includeSrc) {
      var imgs = document.getElementsByTagName('img');
      var imageArray = [];
      for (var i=0;i<imgs.length;i++) {
        var pixelCount = imgs[i].height * imgs[i].width;
        var squareness = 1;
        if (imgs[i].id && imgs[i].id == '__uwl_img_copy__'){
           continue;
        }
        if (imgs[i].id && imgs[i].id == 'uwl_logo'){
           continue;
        }
        
        if (imgs[i].height > imgs[i].width && imgs[i].height > 0) {
          squareness = imgs[i].width / imgs[i].height;
        } else if (imgs[i].width > imgs[i].height && imgs[i].width > 0) {
          squareness = imgs[i].height / imgs[i].width;
        }

        if (pixelCount > 1000 && squareness > 0.5 
            || (includeSrc && imgs[i].src == includeSrc)) {
          var imageIndex = imageArray.length;
          imageArray[imageIndex] = {};
          imageArray[imageIndex].src = imgs[i].src;
          imageArray[imageIndex].height = imgs[i].height;
          imageArray[imageIndex].width = imgs[i].width;
        }
      }
      
      var sortFunc= function(a,b) {
          if (includeSrc) {
             if (a.src == includeSrc && b.src != includeSrc) {
                return -1;
             }
             if (a.src != includeSrc && b.src == includeSrc) {
                return 1;
             }
          }
          return sortImage(a, b);
      };
      imageArray.sort(sortFunc);
      return imageArray;
};

var pop_window = null;
var props_panel = null;
var finish_panel = null;
var retailer_name = null;
var retailer_title = null;
var retailer_price = null;
var image_array = null;
var image_index = 0;

var join_window = null;

function createMainPopup() {

    pop_shadow = shmCreateElement('div', { id: 'main_shadow', valign: 'top', align: 'center'}, styleShadow);
    document.body.appendChild(pop_shadow);
    forceBorder('main_shadow', dialog_border_radius);
    
    pop_window = shmCreateElement('div', { id: 'main_win', valign: 'top', align: 'center'}, stylePopup);
    document.body.appendChild(pop_window);
    forceBorder('main_win', dialog_border_radius);
    
    // make title
    title_div = shmCreateElement('div', { id: 'title_container' }, styleTitle);
    pop_window.appendChild(title_div);
    $("#title_container").html("Create a Skoop"); 
    
    logo = shmCreateElement('img', { id: 'skooply_logo'}, styleLogo);
    pop_window.appendChild(logo);
    logo.src = home_URL + 'skooply_logo_small.jpg';
    //$("#skooply_logo").attr('src',home_URL + 'skooply_logo_small.jpg');
    
    close_dialog = shmCreateElement('img', { id: 'close_dialog'}, styleClose);
    pop_window.appendChild(close_dialog);
    close_dialog.src = home_URL + 'close.gif';
    $("#close_dialog").bind("click", function() { closePopover() });
    
    return pop_window;
}

function createNavBars()
{
    // make bar to enter an URL
    nav_bar_url = shmCreateElement('div', { id: 'nav_bar_url' }, styleNavBarURL);
    pop_window.appendChild(nav_bar_url);
    $('#nav_bar_url').html('Step 1: Enter a product link');
    forceBorder('nav_bar_url', nav_bar_border_radius);
    
    // make bar to put info in
    nav_bar_props = shmCreateElement('div', { id: 'nav_bar_props' }, styleNavBarProps);
    pop_window.appendChild(nav_bar_props);
    $('#nav_bar_props').html('Step 2: Let\'s fill in the blanks');
    forceBorder('nav_bar_props', nav_bar_border_radius);
    
    // make bar to create skoop
    nav_bar_finish = shmCreateElement('div', { id: 'nav_bar_finish' }, styleNavBarFinish);
    pop_window.appendChild(nav_bar_finish);
    $('#nav_bar_finish').html('Step 3: Finish');
    forceBorder('nav_bar_finish', nav_bar_border_radius);
}

function createURLPanel()
{
    url_panel = shmCreateElement('div', { id: 'url_panel', valign: 'top', align: 'center'}, styleURLPanel);
    pop_window.appendChild(url_panel);
    forceBorder('url_panel', nav_bar_border_radius);
    
    
    url_div = shmCreateElement('input', { id: 'url_container' }, styleURL);
    url_panel.appendChild(url_div);
    $("#url_container").val(window.location.href);
    
    
    /*
    url_panel_join_text = shmCreateElement('div', { id: 'url_panel_join_text'}, styleJoinSkoopText);
    url_panel.appendChild(url_panel_join_text);
    $('#url_panel_join_text').html('We found similar skoops! Would you like to join these instead?');
    */
    
    //********* Skoops to add ***************//
    
    url_skoop_container_div = shmCreateElement('div', { id: 'url_skoop_container_div' }, styleURLSkoopContainer);
    url_panel.appendChild(url_skoop_container_div);
    
    // Asynchronously loads the skoops if they exists
    //collectMatchingSkoops(window.location.href);
    
    url_panel_complete_button = shmCreateElement('div', { id: 'url_panel_complete_button', valign: 'top', align: 'center'}, styleURLCompleteButton);
    url_panel.appendChild(url_panel_complete_button);
    $("#url_panel_complete_button").bind("click", function() { doState1() });
    forceBorder('url_panel_complete_button', nav_bar_border_radius);
    
    url_panel_complete_text = shmCreateElement('div', { id: 'url_panel_complete_text'}, styleCompleteText);
    url_panel_complete_button.appendChild(url_panel_complete_text);
    $('#url_panel_complete_text').html('Next');
    
    return url_panel;
}

function createPropsPanel(retailer_name, retailer_title, retailer_price, image_array)
{
    props_panel = shmCreateElement('div', { id: 'props_panel', valign: 'top', align: 'center'}, stylePropsPanel);
    pop_window.appendChild(props_panel);
    forceBorder('props_panel', nav_bar_border_radius);
 
    //***** first column *********//
    
    vendor_div = shmCreateElement('input', { id: 'vendor_container' }, styleVendor);
    props_panel.appendChild(vendor_div);
    $("#vendor_container").val('Enter Manufacturer Here');
    
    name_div = shmCreateElement('input', { id: 'name_container' }, styleName);
    props_panel.appendChild(name_div);
    $("#name_container").val(retailer_title);
    
    price_div = shmCreateElement('input', { id: 'price_container' }, stylePrice);
    props_panel.appendChild(price_div);
    $("#price_container").val(retailer_price);
    
    can_wait_text = shmCreateElement('div', { id: 'can_wait_text' }, styleCanWaitText);
    props_panel.appendChild(can_wait_text);
    $("#can_wait_text").text("I can wait");
    
    can_wait_div = shmCreateElement('input', { id: 'can_wait_container' }, styleCanWait);
    props_panel.appendChild(can_wait_div);
    $("#can_wait_container").val('5');
    
    
    //***** second column *********//
   
    store_div = shmCreateElement('input', { id: 'store_container' }, styleStore);
    props_panel.appendChild(store_div);
    $("#store_container").val(retailer_name);
    
    upc_div = shmCreateElement('input', { id: 'upc_container' }, styleUPC);
    props_panel.appendChild(upc_div);
    $("#upc_container").val('Enter UPC Here');
    
    discount_div = shmCreateElement('input', { id: 'discount_container' }, styleDiscount);
    props_panel.appendChild(discount_div);
    $("#discount_container").val("5%");
    
    discount_text = shmCreateElement('div', { id: 'discount_text' }, styleDiscountText);
    props_panel.appendChild(discount_text);
    $("#discount_text").text("I want a discount of");
    
    can_wait_dd = shmCreateElement('select', { id: 'can_wait_dd' }, styleCanWaitDropDown);
    props_panel.appendChild(can_wait_dd);
    $("#can_wait_dd").html('<option>day(s)</option><option>week(s)</option><option>month(s)</option>');
    
    //******* buttons ************//
    
    props_panel_complete_button = shmCreateElement('div', { id: 'props_panel_complete_button', valign: 'top', align: 'center'}, stylePropsCompleteButton);
    props_panel.appendChild(props_panel_complete_button);
    $("#props_panel_complete_button").bind("click", function() { doState2() });
    forceBorder('props_panel_complete_button', nav_bar_border_radius);
    
    props_panel_complete_text = shmCreateElement('div', { id: 'props_panel_complete_text'}, styleCompleteText);
    props_panel_complete_button.appendChild(props_panel_complete_text);
    $('#props_panel_complete_text').html('Next');
    
    image_picker = createImagePicker(props_panel);
    
    return props_panel;
}

function createFinishPanel()
{
    finish_panel = shmCreateElement('div', { id: 'finish_panel', valign: 'top', align: 'center'}, styleFinishPanel);
    pop_window.appendChild(finish_panel);
    forceBorder('finish_panel', nav_bar_border_radius);
    
    finish_panel_complete_button = shmCreateElement('div', { id: 'finish_panel_complete_button', valign: 'top', align: 'center'}, styleFinishCompleteButton);
    finish_panel.appendChild(finish_panel_complete_button);
    $("#finish_panel_complete_button").bind("click", function() { createSkoop() });
    forceBorder('finish_panel_complete_button', nav_bar_border_radius);
   
    MakeFinalSkoop(finish_panel);
    
    finish_panel_complete_text = shmCreateElement('div', { id: 'finish_panel_complete_text'}, styleCompleteText);
    finish_panel_complete_button.appendChild(finish_panel_complete_text);
    $('#finish_panel_complete_text').html('Skoopit!');
    
    return finish_panel;
}

//******* Skoop Block Functions ***************//

function MakeJoinSkoop(data,parent,i)
{
    
    temp_info_block = shmCreateElement('div', { id: 'join_skoop_container_' + i}, {position: 'absolute', height: '215px', width: '171px', display: 'block', color:'black', fontSize: '11px', textAlign: 'center'});
    parent.appendChild(temp_info_block);
    
    temp_image_panel_surround = shmCreateElement('div', {id: 'final_skoop_image_panel_surround' + i}, styleFinalImagePanelSurround);
    temp_info_block.appendChild(temp_image_panel_surround);
    
    temp_image_panel = shmCreateElement('div', {id: 'final_skoop_image_panel' + i}, styleFinalImagePanel);
    temp_info_block.appendChild(temp_image_panel);
    
    temp_social_panel_surround = shmCreateElement('div', {id: 'final_skoop_social_panel_surround' + i}, styleFinalSocialPanelSurround);
    temp_info_block.appendChild(temp_social_panel_surround);
    
    temp_social_panel = shmCreateElement('div', {id: 'final_skoop_social_panel' + i}, styleFinalSocialPanel);
    temp_info_block.appendChild(temp_social_panel);

    temp_image = shmCreateElement('img', {id: 'temp_skoop_image' + i}, styleFinalImage);
    temp_image_panel.appendChild(temp_image);
    temp_image.src = image_array[image_index].src;
    
    percent_off_image = shmCreateElement('img', {id: 'percent_off_image' + i}, stylePercentOffImage);
    temp_info_block.appendChild(percent_off_image);
    percent_off_image.src = home_URL + 'percent_off.gif';
    
    percent_off_text = shmCreateElement('div', {id: 'percent_off_text' + i}, stylePercentOffText);
    temp_info_block.appendChild(percent_off_text);
    percent_off = handleDiscountText(data['terms']);
    $('#percent_off_text'+i).text(percent_off);
    
    temp_what_user_text = shmCreateElement('div', {id: 'what_user_text'+ i}, styleWhatUserText);
    temp_info_block.appendChild(temp_what_user_text);
    email_split = data['user'].split('@');
    $('#what_user_text'+ i).html('<b>skoop by</b>&nbsp;' + email_split[0]);
    
    temp_title_text = shmCreateElement('div', {id: 'final_title_text'+ i}, styleFinalTitleText);
    temp_info_block.appendChild(temp_title_text);
    temp_title = GetSmallTitle(data['product']);
    $('#final_title_text'+ i).text(temp_title);
    
    /*
    final_social_panel = shmCreateElement('div', {id: 'final_social_panel'}, styleSocialContainer);
    this_skoop.appendChild(final_social_panel);
    panel_html = '<img src=' + home_URL + 'plus.png style=\'float: left\' /><div style=\'width: 20px; float: left\'>1</div>';
    panel_html += '<img src=' + home_URL + 'watcher.png style=\'float: left\' /><div style=\'width: 20px; float: left\'>3</div>';
    panel_html += '<img src=' + home_URL + 'social.png style=\'float: left\' /><div style=\'width: 20px; float: left\'>0</div>';
    panel_html += '<div style=\'width: 0px; float: left\'></div>';
    $('#final_social_panel').html(panel_html);
    
    approval_image = shmCreateElement('img', {id: 'approval_image'}, styleApprovalImage);
    this_skoop.appendChild(approval_image);
    approval_image.src = home_URL + 'approved-skoop.png';
    */
}

function handleDiscountText(data)
{
    if(data==undefined)
    {
        return "Sale!";
    }
    else
    {
        return data['discount'] + "% off";
    }
}

function getRandAcheivment()
{
    var a_array = ["Skoop Master", "Quick Skoop Artist", "Skoopster"];
    var rand=Math.floor(Math.random()*a_array.length);
    return a_array[rand];
}

function reloadFinalSkoopData()
{
    final_image.src = image_array[image_index].src;
    
    percent_off = $("#discount_container").val();
    $('#percent_off_text').text(percent_off + ' off');
    
    final_title = $("#name_container").val();
    final_title = GetSmallTitle(final_title);
    $('#final_title_text').text(final_title);
}

function MakeFinalSkoop(my_parent)
{
    // The final skoop main panel
    this_skoop = shmCreateElement('div', {id: 'final_skoop_panel'}, styleFinalSkoopPanel);
    // NOTE: if you do not join this sucker now, LOTS of CSS will fail to work
    // like border radius, text layout and the like. Probably because it is not visible yet...
    my_parent.appendChild(this_skoop);
    
    //*********** Build some panels *********************//
    
    final_image_panel_surround = shmCreateElement('div', {id: 'final_skoop_image_panel_surround'}, styleFinalImagePanelSurround);
    this_skoop.appendChild(final_image_panel_surround);
    
    final_image_panel = shmCreateElement('div', {id: 'final_skoop_image_panel'}, styleFinalImagePanel);
    this_skoop.appendChild(final_image_panel);
    
    final_social_panel_surround = shmCreateElement('div', {id: 'final_skoop_social_panel_surround'}, styleFinalSocialPanelSurround);
    this_skoop.appendChild(final_social_panel_surround);
    
    final_social_panel = shmCreateElement('div', {id: 'final_skoop_social_panel'}, styleFinalSocialPanel);
    this_skoop.appendChild(final_social_panel);

    final_info_panel = shmCreateElement('div', {id: 'final_info_panel', name: 'final_info_panel', valign: 'top', align: 'center'}, styleFinalInfoPanel);
    this_skoop.appendChild(final_info_panel);
    forceBorder('final_info_panel',nav_bar_border_radius);
    
    //******* Add the members to the image panel *************//
    
    final_image = shmCreateElement('img', {id: 'final_skoop_image'}, styleFinalImage);
    final_image_panel.appendChild(final_image);
    final_image.src = image_array[image_index].src;
    
    percent_off_image = shmCreateElement('img', {id: 'percent_off_image'}, stylePercentOffImage);
    this_skoop.appendChild(percent_off_image);
    percent_off_image.src = home_URL + 'percent_off.gif';
    
    percent_off_text = shmCreateElement('div', {id: 'percent_off_text'}, stylePercentOffText);
    this_skoop.appendChild(percent_off_text);
    percent_off = $("#discount_container").val();
    $('#percent_off_text').text(percent_off + ' off');
    
    what_user_text = shmCreateElement('div', {id: 'what_user_text'}, styleWhatUserText);
    this_skoop.appendChild(what_user_text);
    email_split = user_to_post.split('@');
    $('#what_user_text').html('<b>skoop by</b>&nbsp;' + email_split[0]);
    
    final_title_text = shmCreateElement('div', {id: 'final_title_text'}, styleFinalTitleText);
    this_skoop.appendChild(final_title_text);
    final_title = $("#name_container").val();
    final_title = GetSmallTitle(final_title);
    $('#final_title_text').text(final_title);
    
    final_social_panel = shmCreateElement('div', {id: 'final_social_panel'}, styleSocialContainer);
    this_skoop.appendChild(final_social_panel);
    panel_html = '<img src=' + home_URL + 'plus.png style=\'float: left\' /><div style=\'width: 20px; float: left\'>1</div>';
    panel_html += '<img src=' + home_URL + 'watcher.png style=\'float: left\' /><div style=\'width: 20px; float: left\'>3</div>';
    panel_html += '<img src=' + home_URL + 'social.png style=\'float: left\' /><div style=\'width: 20px; float: left\'>0</div>';
    panel_html += '<div style=\'width: 0px; float: left\'></div>';
    $('#final_social_panel').html(panel_html);
    
    approval_image = shmCreateElement('img', {id: 'approval_image'}, styleApprovalImage);
    this_skoop.appendChild(approval_image);
    approval_image.src = home_URL + 'approved-skoop.png';
    
    //******* Add the members to the image panel *************//
    
    final_achieve_title = shmCreateElement('div', {id: 'final_achieve_title'}, styleAchieveTitle);
    final_info_panel.appendChild(final_achieve_title);
    $('#final_achieve_title').text("You unlocked a new achievement:");
    
    final_achieve_box = shmCreateElement('div', {id: 'final_achieve_box'}, styleAchieveBox);
    final_info_panel.appendChild(final_achieve_box);
    achieve_box_html = '<img src=' + home_URL + 'achieve.gif style=\'height: 50px; width: 50px; float: left\' />';
    achieve_box_html += '<div id=\'acheivement_text\' style=\'position: absolute; top: 15px; left: 70px; color: grey; font-weight: bold; font-size: 11px; float: left\'>' + getRandAcheivment() + '</div>';
    $('#final_achieve_box').html(achieve_box_html);
    
    // NOTE: piggy backed on style from AchieveTitle
    final_scores_title = shmCreateElement('div', {id: 'final_scores_title'}, styleAchieveTitle);
    final_info_panel.appendChild(final_scores_title);
    $('#final_scores_title').css('top','100px');
    $('#final_scores_title').text("Your skooply score so far:");
    
    final_score_box = shmCreateElement('div', {id: 'final_scores_box'}, styleScoresBox);
    final_info_panel.appendChild(final_score_box);
    scores_box_html = '<div style=\'position: absolute; top: 0px; left: 0px; color: grey; font-weight: normal; font-size: 11px; \'>Skoops Created:</div>';
    scores_box_html += '<div style=\'position: absolute; top: 0px; left: 140px; color: grey; font-weight: normal; font-size: 11px; \'>24</div>';
    scores_box_html += '<div style=\'position: absolute; top: 15px; left: 0px; color: grey; font-weight: normal; font-size: 11px; \'>Skoops Awarded:</div>';
    scores_box_html += '<div style=\'position: absolute; top: 15px; left: 140px; color: grey; font-weight: normal; font-size: 11px; \'>10</div>';
    scores_box_html += '<div style=\'position: absolute; top: 30px; left: 0px; color: grey; font-weight: normal; font-size: 11px; \'>Skoops Joined:</div>';
    scores_box_html += '<div style=\'position: absolute; top: 30px; left: 140px; color: grey; font-weight: normal; font-size: 11px; \'>5</div>';
    scores_box_html += '<div style=\'position: absolute; top: 45px; left: 0px; color: grey; font-weight: normal; font-size: 11px; \'>Deepest Discount</div>';
    scores_box_html += '<div style=\'position: absolute; top: 45px; left: 140px; color: grey; font-weight: normal; font-size: 11px; \'>45%</div>';
    scores_box_html += '<div style=\'position: absolute; top: 60px; left: 0px; color: grey; font-weight: normal; font-size: 11px; \'>Fastest Award:</div>';
    scores_box_html += '<div style=\'position: absolute; top: 60px; left: 140px; color: grey; font-weight: normal; font-size: 11px; \'>22 hours</div>';
    $('#final_scores_box').html(scores_box_html);
    
    // Allow them to go back
    $("#nav_bar_props").bind("click", function() { doState1() });
    
    return this_skoop;
}

// Break titles that have colon
function GetSmallTitle(title_in)
{
    title_split = title_in.split(':');
    if(title_split.length>1)
        title_in = title_split[1];
        
    return title_in;
}

//******* Image Picker Functions ***************//

function getImageIndexText()
{
    out = " image ";
    out += (image_index + 1);
    out += " of ";
    out += image_array.length;
    return out;
}

function createImagePicker(parent_to_append)
{
    image_picker = shmCreateElement('div', { id: 'image_picker'}, styleImagePicker);
    parent_to_append.appendChild(image_picker);
    
    image_container = shmCreateElement('img', { id: 'image_container'}, styleImage);
    image_picker.appendChild(image_container);
    $("#image_container").attr('src',image_array[image_index].src);
    
    image_change_container = shmCreateElement('div', { id: 'image_change_container'}, styleImagePickerContainer);
    image_picker.appendChild(image_change_container);
    
    image_change_left = shmCreateElement('img', { id: 'image_change_left'}, styleImagePrev);
    image_change_container.appendChild(image_change_left);
    $("#image_change_left").attr("src", home_URL + 'image_pick_left.png');
    $("#image_change_left").bind("click", function() { changeImage(-1) });
    
    image_change_text = shmCreateElement('div', { id: 'image_change_text'}, styleImageIndexText);
    image_change_container.appendChild(image_change_text);
    $("#image_change_text").html(getImageIndexText());
    
    image_change_right = shmCreateElement('img', { id: 'image_change_right'}, styleImageNext);
    image_change_container.appendChild(image_change_right);
    $("#image_change_right").attr("src", home_URL + 'image_pick_right.png');
    $("#image_change_right").bind("click", function() { changeImage(1) });
    
    empty_div = shmCreateElement('div', {id: 'empty_div'}, styleClear);
    image_change_container.appendChild(empty_div);
    
    return image_picker;
}

function changeImage(direction)
{
    if((direction!=-1)&&(direction!=1))
        return;
        
    image_index += direction;
    
    if(image_index<0)
        image_index = 0;
    if(image_index>image_array.length-1)
        image_index = image_array.length-1;
        
    $("#image_container").attr('src',image_array[image_index].src);
    $("#image_change_text").html(getImageIndexText());
}

//******** Ajax Skoop Functions *************************//

function createSkoop()
{
    url = post_URL + "create";
    args = "";
    
    cur_user = user_to_post;
    cur_image = encodeURIComponent(image_array[image_index].src);
    cur_title = encodeURIComponent($("#name_container").val());
    cur_price = encodeURIComponent($("#price_container").val());
    cur_discount = encodeURIComponent($("#discount_container").val());
    cur_discount = cur_discount.replace("%25","");
    
    cur_url = encodeURIComponent(window.location.href);
    
    url += "?";
    url += "user=" + cur_user;
    url += "&url=" + cur_url; 
    url += "&product=" + cur_title;
    url += "&price=" + cur_price;
    url += "&image=" + cur_image;
    url += "&terms={\"discount\":\"" + cur_discount + "\"}";
    
    doAjaxGet(url, args);
}

function getVendor()
{
    name = "Unknown";
    vendor_url = window.location.href;
    vendor_url = vendor_url.replace("http://","");
    vendor_url = vendor_url.replace("https://","");
    segs = vendor_url.split('/');
    if(segs.length > 0)
    {
        name = segs[0];
    }
    
    return name;
}

function collectMatchingSkoops(href)
{
    url = post_URL;
    url += "get?url=";
    url += encodeURIComponent(href);
    
    doAjaxGet(url, "");
}

//******** Transitions *************************//

function doState0()
{
}

function doState1()
{
    $('#nav_bar_url').css('background-color',nav_bar_complete);
    $('#url_panel').css('display','none');
    
    $('#nav_bar_props').css('top',props_bar_second_pos);
    $('#nav_bar_props').css('background-color',nav_bar_active);
    $('#nav_bar_props').css('color','white');
    
    if(props_panel==undefined)
    {
        createPropsPanel(retailer_name, retailer_title, retailer_price, image_array);
    }
    else
    {
        $('#props_panel').css('display','block');
        $('#finish_panel').css('display','none');
        $('#nav_bar_finish').css('top',complete_bar_first_pos);
    }
}

function doState2()
{
    $('#nav_bar_url').css('background-color',nav_bar_complete);
    $('#url_panel').css('display','none');

    $('#nav_bar_props').css('top',props_bar_second_pos);
    $('#nav_bar_props').css('background-color',nav_bar_complete);
    $('#props_panel').css('display','none');
    
    $('#nav_bar_finish').css('top',complete_bar_second_pos);
    $('#nav_bar_finish').css('background-color',nav_bar_active);
    $('#nav_bar_finish').css('color','white');
    
    if(finish_panel==undefined)
    {
        createFinishPanel();
    }
    else
    {
        reloadFinalSkoopData();
        $('#finish_panel').css('display','block');
    }
    
}

//******** Main Popup **************************//

function showPopover(args){

    retailer_name = getVendor();
    retailer_title = getTitle();
    retailer_price = getPrice();
    image_array = getImageLinks();
    
    pop_window = createMainPopup();

    url_panel = createURLPanel();
        
    createNavBars();
}

function forceBorder(id, radius)
{
    $('#'+id).css('-moz-border-radius',radius);
    $('#'+id).css('-webkit-border-radius', radius);
    $('#'+id).css('-opera-border-radius', radius);
    $('#'+id).css('-khtml-border-radius', radius);
    $('#'+id).css('border-radius', radius);
}

function closePopover()
{
    //$("#main_shadow").hide();
    //$("#main_win").hide();
    
    $("#main_shadow").remove();
    $("#main_win").remove();
}

//******************* Join ********************//

function JoinSkoop(id)
{
    email = "glad@glad.com";
    args = "";

    url = post_URL;
    url += "update?selector={\"_id\":\"";
    url += id;
    url += "\"}&attributes={\"addmembers\":[\"";
    url += email;
    url += "\"]}";
    
    $.getJSON(url,
          function(data) {
            handleJoinState(data);
          });
}

function handleJoinState(data)
{
    if(data["code"] == "202")
    {
        showJoinSuccess();
    }
    else
    {
        showJoinFail();
    }
}

function showJoinSuccess()
{
    join_success = shmCreateElement('div', { id: 'join_result'}, styleJoinButton);
    document.body.appendChild(join_success);
    forceBorder('join_result',nav_bar_border_radius);
    
    join_success_text = shmCreateElement('div', { id: 'join_result_text'}, styleJoinButtonText);
    join_success.appendChild(join_success_text);
    $('#join_result_text').text("You joined the skoop!");
    
    $('#join_result').center();
    
    $('#join_result').fadeIn('slow', function() { 
        var t=setTimeout("hideJoinDlg()",1000);
    });
}

function showJoinFail()
{
}

function hideJoinDlg()
{
    $('#join_result').fadeOut('slow' , function(){});
}

jQuery.fn.center = function() {
    this.css("position","absolute");     
    this.css("top", (($(window).height() - this.outerHeight()) / 2) + $(window).scrollTop() + "px");     
    this.css("left", (($(window).width() - this.outerWidth()) / 2) + $(window).scrollLeft() + "px"); 
}

//********* Transport ****************************//

function handleState(data)
{
    if(!did_skoop_check)
    {
        did_skoop_check = true;
        
        if(data.length > 0)
        {
            $.each( data, function(i) 
            {
                cur_id = 'join_skoop_' + i;
                cur_skoop = shmCreateElement('div', {id: cur_id}, styleJoinSkoopPanel);
                url_skoop_container_div.appendChild(cur_skoop);
                MakeJoinSkoop(data[i],cur_skoop, i);
            }); 
            
            url_skoop_container_div.appendChild(shmCreateElement('div',{},styleClear));
            $('#url_panel_complete_text').css('left','40px');
            $('#url_panel_complete_text').html('No Thanks! I\'d like to create my own skoop -> Next');
        }
        else
        {
            no_skoops_text = shmCreateElement('div', { id: 'no_skoops_test' }, styleNoSkoops);
            url_panel.appendChild(no_skoops_text);
            $('#no_skoops_test').html('No skoops match this link. You are clear to skoop it first! Hit next below to continue.');
            
            doState1();
        }
    }
    else
    {
        //alert(data);
        
        // Set up the box to look like success
        $('#final_achieve_box').css('backgroundColor','white');
        
        $('#acheivement_text').css('color',nav_bar_complete);
        $('#acheivement_text').css('font-size','14px');
        $('#acheivement_text').text('Skoop Success!!!');
        
        $('#final_achieve_title').css('display','none');
        
        // Wire up event for closing the dialog
        $("#finish_panel_complete_button").unbind();
        $("#finish_panel_complete_button").bind("click", function() { closePopover() });
        $("#finish_panel_complete_text").text("Close Dialog");
    }
    
    data = null;
}

function doAjaxGet(url, args)
{
//alert("url: " + url + " - data: " + args);
    $.ajaxSetup ({
        cache: false
    });  
    
    $.getJSON(url, 
           args,
          function(data) {
            handleState(data);
          });
}

//******************* END ********************//

