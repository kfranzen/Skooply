//imagesLoaded plugin to correct jquery.masonry bug regarding image height

(function(a){a.fn.imagesLoaded=function(i){function j(){var b=a(g),k=a(f);if(c)f.length?c.reject(d,b,k):c.resolve(d);a.isFunction(i)&&i.call(e,d,b,k)}function l(b){if(!(b.target.src===m||a.inArray(this,h)!==-1)){h.push(this);b.type==="error"?f.push(this):g.push(this);a.data(this,"imagesLoaded",b.type);o&&c.notify(d.length,h.length,g.length,f.length);if(--n<=0){setTimeout(j);d.unbind(".imagesLoaded",l)}}}var e=this,c=a.isFunction(a.Deferred)?a.Deferred():0,o=a.isFunction(c.notify),d=e.find("img").add(e.filter("img")),
n=d.length,m="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",h=[],g=[],f=[];n||j();d.bind("load.imagesLoaded error.imagesLoaded",l).each(function(){var b=a.data(this,"imagesLoaded");if(b)a(this).triggerHandler(b);else{b=this.src;this.src=m;this.src=b}});return c?c.promise(e):e}})(jQuery);
