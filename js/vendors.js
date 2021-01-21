
!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});

/**
 * Swiper 5.3.8
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://swiperjs.com
 *
 * Copyright 2014-2020 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: April 24, 2020
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).Swiper=t()}(this,(function(){"use strict";var e="undefined"==typeof document?{body:{},addEventListener:function(){},removeEventListener:function(){},activeElement:{blur:function(){},nodeName:""},querySelector:function(){return null},querySelectorAll:function(){return[]},getElementById:function(){return null},createEvent:function(){return{initEvent:function(){}}},createElement:function(){return{children:[],childNodes:[],style:{},setAttribute:function(){},getElementsByTagName:function(){return[]}}},location:{hash:""}}:document,t="undefined"==typeof window?{document:e,navigator:{userAgent:""},location:{},history:{},CustomEvent:function(){return this},addEventListener:function(){},removeEventListener:function(){},getComputedStyle:function(){return{getPropertyValue:function(){return""}}},Image:function(){},Date:function(){},screen:{},setTimeout:function(){},clearTimeout:function(){}}:window,i=function(e){for(var t=0;t<e.length;t+=1)this[t]=e[t];return this.length=e.length,this};function s(s,a){var r=[],n=0;if(s&&!a&&s instanceof i)return s;if(s)if("string"==typeof s){var o,l,d=s.trim();if(d.indexOf("<")>=0&&d.indexOf(">")>=0){var h="div";for(0===d.indexOf("<li")&&(h="ul"),0===d.indexOf("<tr")&&(h="tbody"),0!==d.indexOf("<td")&&0!==d.indexOf("<th")||(h="tr"),0===d.indexOf("<tbody")&&(h="table"),0===d.indexOf("<option")&&(h="select"),(l=e.createElement(h)).innerHTML=d,n=0;n<l.childNodes.length;n+=1)r.push(l.childNodes[n])}else for(o=a||"#"!==s[0]||s.match(/[ .<>:~]/)?(a||e).querySelectorAll(s.trim()):[e.getElementById(s.trim().split("#")[1])],n=0;n<o.length;n+=1)o[n]&&r.push(o[n])}else if(s.nodeType||s===t||s===e)r.push(s);else if(s.length>0&&s[0].nodeType)for(n=0;n<s.length;n+=1)r.push(s[n]);return new i(r)}function a(e){for(var t=[],i=0;i<e.length;i+=1)-1===t.indexOf(e[i])&&t.push(e[i]);return t}s.fn=i.prototype,s.Class=i,s.Dom7=i;var r={addClass:function(e){if(void 0===e)return this;for(var t=e.split(" "),i=0;i<t.length;i+=1)for(var s=0;s<this.length;s+=1)void 0!==this[s]&&void 0!==this[s].classList&&this[s].classList.add(t[i]);return this},removeClass:function(e){for(var t=e.split(" "),i=0;i<t.length;i+=1)for(var s=0;s<this.length;s+=1)void 0!==this[s]&&void 0!==this[s].classList&&this[s].classList.remove(t[i]);return this},hasClass:function(e){return!!this[0]&&this[0].classList.contains(e)},toggleClass:function(e){for(var t=e.split(" "),i=0;i<t.length;i+=1)for(var s=0;s<this.length;s+=1)void 0!==this[s]&&void 0!==this[s].classList&&this[s].classList.toggle(t[i]);return this},attr:function(e,t){var i=arguments;if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(var s=0;s<this.length;s+=1)if(2===i.length)this[s].setAttribute(e,t);else for(var a in e)this[s][a]=e[a],this[s].setAttribute(a,e[a]);return this},removeAttr:function(e){for(var t=0;t<this.length;t+=1)this[t].removeAttribute(e);return this},data:function(e,t){var i;if(void 0!==t){for(var s=0;s<this.length;s+=1)(i=this[s]).dom7ElementDataStorage||(i.dom7ElementDataStorage={}),i.dom7ElementDataStorage[e]=t;return this}if(i=this[0]){if(i.dom7ElementDataStorage&&e in i.dom7ElementDataStorage)return i.dom7ElementDataStorage[e];var a=i.getAttribute("data-"+e);return a||void 0}},transform:function(e){for(var t=0;t<this.length;t+=1){var i=this[t].style;i.webkitTransform=e,i.transform=e}return this},transition:function(e){"string"!=typeof e&&(e+="ms");for(var t=0;t<this.length;t+=1){var i=this[t].style;i.webkitTransitionDuration=e,i.transitionDuration=e}return this},on:function(){for(var e,t=[],i=arguments.length;i--;)t[i]=arguments[i];var a=t[0],r=t[1],n=t[2],o=t[3];function l(e){var t=e.target;if(t){var i=e.target.dom7EventData||[];if(i.indexOf(e)<0&&i.unshift(e),s(t).is(r))n.apply(t,i);else for(var a=s(t).parents(),o=0;o<a.length;o+=1)s(a[o]).is(r)&&n.apply(a[o],i)}}function d(e){var t=e&&e.target&&e.target.dom7EventData||[];t.indexOf(e)<0&&t.unshift(e),n.apply(this,t)}"function"==typeof t[1]&&(a=(e=t)[0],n=e[1],o=e[2],r=void 0),o||(o=!1);for(var h,p=a.split(" "),c=0;c<this.length;c+=1){var u=this[c];if(r)for(h=0;h<p.length;h+=1){var v=p[h];u.dom7LiveListeners||(u.dom7LiveListeners={}),u.dom7LiveListeners[v]||(u.dom7LiveListeners[v]=[]),u.dom7LiveListeners[v].push({listener:n,proxyListener:l}),u.addEventListener(v,l,o)}else for(h=0;h<p.length;h+=1){var f=p[h];u.dom7Listeners||(u.dom7Listeners={}),u.dom7Listeners[f]||(u.dom7Listeners[f]=[]),u.dom7Listeners[f].push({listener:n,proxyListener:d}),u.addEventListener(f,d,o)}}return this},off:function(){for(var e,t=[],i=arguments.length;i--;)t[i]=arguments[i];var s=t[0],a=t[1],r=t[2],n=t[3];"function"==typeof t[1]&&(s=(e=t)[0],r=e[1],n=e[2],a=void 0),n||(n=!1);for(var o=s.split(" "),l=0;l<o.length;l+=1)for(var d=o[l],h=0;h<this.length;h+=1){var p=this[h],c=void 0;if(!a&&p.dom7Listeners?c=p.dom7Listeners[d]:a&&p.dom7LiveListeners&&(c=p.dom7LiveListeners[d]),c&&c.length)for(var u=c.length-1;u>=0;u-=1){var v=c[u];r&&v.listener===r||r&&v.listener&&v.listener.dom7proxy&&v.listener.dom7proxy===r?(p.removeEventListener(d,v.proxyListener,n),c.splice(u,1)):r||(p.removeEventListener(d,v.proxyListener,n),c.splice(u,1))}}return this},trigger:function(){for(var i=[],s=arguments.length;s--;)i[s]=arguments[s];for(var a=i[0].split(" "),r=i[1],n=0;n<a.length;n+=1)for(var o=a[n],l=0;l<this.length;l+=1){var d=this[l],h=void 0;try{h=new t.CustomEvent(o,{detail:r,bubbles:!0,cancelable:!0})}catch(t){(h=e.createEvent("Event")).initEvent(o,!0,!0),h.detail=r}d.dom7EventData=i.filter((function(e,t){return t>0})),d.dispatchEvent(h),d.dom7EventData=[],delete d.dom7EventData}return this},transitionEnd:function(e){var t,i=["webkitTransitionEnd","transitionend"],s=this;function a(r){if(r.target===this)for(e.call(this,r),t=0;t<i.length;t+=1)s.off(i[t],a)}if(e)for(t=0;t<i.length;t+=1)s.on(i[t],a);return this},outerWidth:function(e){if(this.length>0){if(e){var t=this.styles();return this[0].offsetWidth+parseFloat(t.getPropertyValue("margin-right"))+parseFloat(t.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null},outerHeight:function(e){if(this.length>0){if(e){var t=this.styles();return this[0].offsetHeight+parseFloat(t.getPropertyValue("margin-top"))+parseFloat(t.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null},offset:function(){if(this.length>0){var i=this[0],s=i.getBoundingClientRect(),a=e.body,r=i.clientTop||a.clientTop||0,n=i.clientLeft||a.clientLeft||0,o=i===t?t.scrollY:i.scrollTop,l=i===t?t.scrollX:i.scrollLeft;return{top:s.top+o-r,left:s.left+l-n}}return null},css:function(e,i){var s;if(1===arguments.length){if("string"!=typeof e){for(s=0;s<this.length;s+=1)for(var a in e)this[s].style[a]=e[a];return this}if(this[0])return t.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(s=0;s<this.length;s+=1)this[s].style[e]=i;return this}return this},each:function(e){if(!e)return this;for(var t=0;t<this.length;t+=1)if(!1===e.call(this[t],t,this[t]))return this;return this},html:function(e){if(void 0===e)return this[0]?this[0].innerHTML:void 0;for(var t=0;t<this.length;t+=1)this[t].innerHTML=e;return this},text:function(e){if(void 0===e)return this[0]?this[0].textContent.trim():null;for(var t=0;t<this.length;t+=1)this[t].textContent=e;return this},is:function(a){var r,n,o=this[0];if(!o||void 0===a)return!1;if("string"==typeof a){if(o.matches)return o.matches(a);if(o.webkitMatchesSelector)return o.webkitMatchesSelector(a);if(o.msMatchesSelector)return o.msMatchesSelector(a);for(r=s(a),n=0;n<r.length;n+=1)if(r[n]===o)return!0;return!1}if(a===e)return o===e;if(a===t)return o===t;if(a.nodeType||a instanceof i){for(r=a.nodeType?[a]:a,n=0;n<r.length;n+=1)if(r[n]===o)return!0;return!1}return!1},index:function(){var e,t=this[0];if(t){for(e=0;null!==(t=t.previousSibling);)1===t.nodeType&&(e+=1);return e}},eq:function(e){if(void 0===e)return this;var t,s=this.length;return new i(e>s-1?[]:e<0?(t=s+e)<0?[]:[this[t]]:[this[e]])},append:function(){for(var t,s=[],a=arguments.length;a--;)s[a]=arguments[a];for(var r=0;r<s.length;r+=1){t=s[r];for(var n=0;n<this.length;n+=1)if("string"==typeof t){var o=e.createElement("div");for(o.innerHTML=t;o.firstChild;)this[n].appendChild(o.firstChild)}else if(t instanceof i)for(var l=0;l<t.length;l+=1)this[n].appendChild(t[l]);else this[n].appendChild(t)}return this},prepend:function(t){var s,a;for(s=0;s<this.length;s+=1)if("string"==typeof t){var r=e.createElement("div");for(r.innerHTML=t,a=r.childNodes.length-1;a>=0;a-=1)this[s].insertBefore(r.childNodes[a],this[s].childNodes[0])}else if(t instanceof i)for(a=0;a<t.length;a+=1)this[s].insertBefore(t[a],this[s].childNodes[0]);else this[s].insertBefore(t,this[s].childNodes[0]);return this},next:function(e){return this.length>0?e?this[0].nextElementSibling&&s(this[0].nextElementSibling).is(e)?new i([this[0].nextElementSibling]):new i([]):this[0].nextElementSibling?new i([this[0].nextElementSibling]):new i([]):new i([])},nextAll:function(e){var t=[],a=this[0];if(!a)return new i([]);for(;a.nextElementSibling;){var r=a.nextElementSibling;e?s(r).is(e)&&t.push(r):t.push(r),a=r}return new i(t)},prev:function(e){if(this.length>0){var t=this[0];return e?t.previousElementSibling&&s(t.previousElementSibling).is(e)?new i([t.previousElementSibling]):new i([]):t.previousElementSibling?new i([t.previousElementSibling]):new i([])}return new i([])},prevAll:function(e){var t=[],a=this[0];if(!a)return new i([]);for(;a.previousElementSibling;){var r=a.previousElementSibling;e?s(r).is(e)&&t.push(r):t.push(r),a=r}return new i(t)},parent:function(e){for(var t=[],i=0;i<this.length;i+=1)null!==this[i].parentNode&&(e?s(this[i].parentNode).is(e)&&t.push(this[i].parentNode):t.push(this[i].parentNode));return s(a(t))},parents:function(e){for(var t=[],i=0;i<this.length;i+=1)for(var r=this[i].parentNode;r;)e?s(r).is(e)&&t.push(r):t.push(r),r=r.parentNode;return s(a(t))},closest:function(e){var t=this;return void 0===e?new i([]):(t.is(e)||(t=t.parents(e).eq(0)),t)},find:function(e){for(var t=[],s=0;s<this.length;s+=1)for(var a=this[s].querySelectorAll(e),r=0;r<a.length;r+=1)t.push(a[r]);return new i(t)},children:function(e){for(var t=[],r=0;r<this.length;r+=1)for(var n=this[r].childNodes,o=0;o<n.length;o+=1)e?1===n[o].nodeType&&s(n[o]).is(e)&&t.push(n[o]):1===n[o].nodeType&&t.push(n[o]);return new i(a(t))},filter:function(e){for(var t=[],s=0;s<this.length;s+=1)e.call(this[s],s,this[s])&&t.push(this[s]);return new i(t)},remove:function(){for(var e=0;e<this.length;e+=1)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this},add:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var i,a,r=this;for(i=0;i<e.length;i+=1){var n=s(e[i]);for(a=0;a<n.length;a+=1)r[r.length]=n[a],r.length+=1}return r},styles:function(){return this[0]?t.getComputedStyle(this[0],null):{}}};Object.keys(r).forEach((function(e){s.fn[e]=s.fn[e]||r[e]}));var n={deleteProps:function(e){var t=e;Object.keys(t).forEach((function(e){try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}}))},nextTick:function(e,t){return void 0===t&&(t=0),setTimeout(e,t)},now:function(){return Date.now()},getTranslate:function(e,i){var s,a,r;void 0===i&&(i="x");var n=t.getComputedStyle(e,null);return t.WebKitCSSMatrix?((a=n.transform||n.webkitTransform).split(",").length>6&&(a=a.split(", ").map((function(e){return e.replace(",",".")})).join(", ")),r=new t.WebKitCSSMatrix("none"===a?"":a)):s=(r=n.MozTransform||n.OTransform||n.MsTransform||n.msTransform||n.transform||n.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,")).toString().split(","),"x"===i&&(a=t.WebKitCSSMatrix?r.m41:16===s.length?parseFloat(s[12]):parseFloat(s[4])),"y"===i&&(a=t.WebKitCSSMatrix?r.m42:16===s.length?parseFloat(s[13]):parseFloat(s[5])),a||0},parseUrlQuery:function(e){var i,s,a,r,n={},o=e||t.location.href;if("string"==typeof o&&o.length)for(r=(s=(o=o.indexOf("?")>-1?o.replace(/\S*\?/,""):"").split("&").filter((function(e){return""!==e}))).length,i=0;i<r;i+=1)a=s[i].replace(/#\S+/g,"").split("="),n[decodeURIComponent(a[0])]=void 0===a[1]?void 0:decodeURIComponent(a[1])||"";return n},isObject:function(e){return"object"==typeof e&&null!==e&&e.constructor&&e.constructor===Object},extend:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];for(var i=Object(e[0]),s=1;s<e.length;s+=1){var a=e[s];if(null!=a)for(var r=Object.keys(Object(a)),o=0,l=r.length;o<l;o+=1){var d=r[o],h=Object.getOwnPropertyDescriptor(a,d);void 0!==h&&h.enumerable&&(n.isObject(i[d])&&n.isObject(a[d])?n.extend(i[d],a[d]):!n.isObject(i[d])&&n.isObject(a[d])?(i[d]={},n.extend(i[d],a[d])):i[d]=a[d])}}return i}},o={touch:t.Modernizr&&!0===t.Modernizr.touch||!!(t.navigator.maxTouchPoints>0||"ontouchstart"in t||t.DocumentTouch&&e instanceof t.DocumentTouch),pointerEvents:!!t.PointerEvent&&"maxTouchPoints"in t.navigator&&t.navigator.maxTouchPoints>0,observer:"MutationObserver"in t||"WebkitMutationObserver"in t,passiveListener:function(){var e=!1;try{var i=Object.defineProperty({},"passive",{get:function(){e=!0}});t.addEventListener("testPassiveListener",null,i)}catch(e){}return e}(),gestures:"ongesturestart"in t},l=function(e){void 0===e&&(e={});var t=this;t.params=e,t.eventsListeners={},t.params&&t.params.on&&Object.keys(t.params.on).forEach((function(e){t.on(e,t.params.on[e])}))},d={components:{configurable:!0}};l.prototype.on=function(e,t,i){var s=this;if("function"!=typeof t)return s;var a=i?"unshift":"push";return e.split(" ").forEach((function(e){s.eventsListeners[e]||(s.eventsListeners[e]=[]),s.eventsListeners[e][a](t)})),s},l.prototype.once=function(e,t,i){var s=this;if("function"!=typeof t)return s;function a(){for(var i=[],r=arguments.length;r--;)i[r]=arguments[r];s.off(e,a),a.f7proxy&&delete a.f7proxy,t.apply(s,i)}return a.f7proxy=t,s.on(e,a,i)},l.prototype.off=function(e,t){var i=this;return i.eventsListeners?(e.split(" ").forEach((function(e){void 0===t?i.eventsListeners[e]=[]:i.eventsListeners[e]&&i.eventsListeners[e].length&&i.eventsListeners[e].forEach((function(s,a){(s===t||s.f7proxy&&s.f7proxy===t)&&i.eventsListeners[e].splice(a,1)}))})),i):i},l.prototype.emit=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var i,s,a,r=this;if(!r.eventsListeners)return r;"string"==typeof e[0]||Array.isArray(e[0])?(i=e[0],s=e.slice(1,e.length),a=r):(i=e[0].events,s=e[0].data,a=e[0].context||r);var n=Array.isArray(i)?i:i.split(" ");return n.forEach((function(e){if(r.eventsListeners&&r.eventsListeners[e]){var t=[];r.eventsListeners[e].forEach((function(e){t.push(e)})),t.forEach((function(e){e.apply(a,s)}))}})),r},l.prototype.useModulesParams=function(e){var t=this;t.modules&&Object.keys(t.modules).forEach((function(i){var s=t.modules[i];s.params&&n.extend(e,s.params)}))},l.prototype.useModules=function(e){void 0===e&&(e={});var t=this;t.modules&&Object.keys(t.modules).forEach((function(i){var s=t.modules[i],a=e[i]||{};s.instance&&Object.keys(s.instance).forEach((function(e){var i=s.instance[e];t[e]="function"==typeof i?i.bind(t):i})),s.on&&t.on&&Object.keys(s.on).forEach((function(e){t.on(e,s.on[e])})),s.create&&s.create.bind(t)(a)}))},d.components.set=function(e){this.use&&this.use(e)},l.installModule=function(e){for(var t=[],i=arguments.length-1;i-- >0;)t[i]=arguments[i+1];var s=this;s.prototype.modules||(s.prototype.modules={});var a=e.name||Object.keys(s.prototype.modules).length+"_"+n.now();return s.prototype.modules[a]=e,e.proto&&Object.keys(e.proto).forEach((function(t){s.prototype[t]=e.proto[t]})),e.static&&Object.keys(e.static).forEach((function(t){s[t]=e.static[t]})),e.install&&e.install.apply(s,t),s},l.use=function(e){for(var t=[],i=arguments.length-1;i-- >0;)t[i]=arguments[i+1];var s=this;return Array.isArray(e)?(e.forEach((function(e){return s.installModule(e)})),s):s.installModule.apply(s,[e].concat(t))},Object.defineProperties(l,d);var h={updateSize:function(){var e,t,i=this.$el;e=void 0!==this.params.width?this.params.width:i[0].clientWidth,t=void 0!==this.params.height?this.params.height:i[0].clientHeight,0===e&&this.isHorizontal()||0===t&&this.isVertical()||(e=e-parseInt(i.css("padding-left"),10)-parseInt(i.css("padding-right"),10),t=t-parseInt(i.css("padding-top"),10)-parseInt(i.css("padding-bottom"),10),n.extend(this,{width:e,height:t,size:this.isHorizontal()?e:t}))},updateSlides:function(){var e=this.params,i=this.$wrapperEl,s=this.size,a=this.rtlTranslate,r=this.wrongRTL,o=this.virtual&&e.virtual.enabled,l=o?this.virtual.slides.length:this.slides.length,d=i.children("."+this.params.slideClass),h=o?this.virtual.slides.length:d.length,p=[],c=[],u=[];function v(t){return!e.cssMode||t!==d.length-1}var f=e.slidesOffsetBefore;"function"==typeof f&&(f=e.slidesOffsetBefore.call(this));var m=e.slidesOffsetAfter;"function"==typeof m&&(m=e.slidesOffsetAfter.call(this));var g=this.snapGrid.length,b=this.snapGrid.length,w=e.spaceBetween,y=-f,x=0,T=0;if(void 0!==s){var E,S;"string"==typeof w&&w.indexOf("%")>=0&&(w=parseFloat(w.replace("%",""))/100*s),this.virtualSize=-w,a?d.css({marginLeft:"",marginTop:""}):d.css({marginRight:"",marginBottom:""}),e.slidesPerColumn>1&&(E=Math.floor(h/e.slidesPerColumn)===h/this.params.slidesPerColumn?h:Math.ceil(h/e.slidesPerColumn)*e.slidesPerColumn,"auto"!==e.slidesPerView&&"row"===e.slidesPerColumnFill&&(E=Math.max(E,e.slidesPerView*e.slidesPerColumn)));for(var C,M=e.slidesPerColumn,P=E/M,z=Math.floor(h/e.slidesPerColumn),k=0;k<h;k+=1){S=0;var $=d.eq(k);if(e.slidesPerColumn>1){var L=void 0,I=void 0,D=void 0;if("row"===e.slidesPerColumnFill&&e.slidesPerGroup>1){var O=Math.floor(k/(e.slidesPerGroup*e.slidesPerColumn)),A=k-e.slidesPerColumn*e.slidesPerGroup*O,G=0===O?e.slidesPerGroup:Math.min(Math.ceil((h-O*M*e.slidesPerGroup)/M),e.slidesPerGroup);L=(I=A-(D=Math.floor(A/G))*G+O*e.slidesPerGroup)+D*E/M,$.css({"-webkit-box-ordinal-group":L,"-moz-box-ordinal-group":L,"-ms-flex-order":L,"-webkit-order":L,order:L})}else"column"===e.slidesPerColumnFill?(D=k-(I=Math.floor(k/M))*M,(I>z||I===z&&D===M-1)&&(D+=1)>=M&&(D=0,I+=1)):I=k-(D=Math.floor(k/P))*P;$.css("margin-"+(this.isHorizontal()?"top":"left"),0!==D&&e.spaceBetween&&e.spaceBetween+"px")}if("none"!==$.css("display")){if("auto"===e.slidesPerView){var H=t.getComputedStyle($[0],null),B=$[0].style.transform,N=$[0].style.webkitTransform;if(B&&($[0].style.transform="none"),N&&($[0].style.webkitTransform="none"),e.roundLengths)S=this.isHorizontal()?$.outerWidth(!0):$.outerHeight(!0);else if(this.isHorizontal()){var X=parseFloat(H.getPropertyValue("width")),V=parseFloat(H.getPropertyValue("padding-left")),Y=parseFloat(H.getPropertyValue("padding-right")),F=parseFloat(H.getPropertyValue("margin-left")),W=parseFloat(H.getPropertyValue("margin-right")),R=H.getPropertyValue("box-sizing");S=R&&"border-box"===R?X+F+W:X+V+Y+F+W}else{var q=parseFloat(H.getPropertyValue("height")),j=parseFloat(H.getPropertyValue("padding-top")),K=parseFloat(H.getPropertyValue("padding-bottom")),U=parseFloat(H.getPropertyValue("margin-top")),_=parseFloat(H.getPropertyValue("margin-bottom")),Z=H.getPropertyValue("box-sizing");S=Z&&"border-box"===Z?q+U+_:q+j+K+U+_}B&&($[0].style.transform=B),N&&($[0].style.webkitTransform=N),e.roundLengths&&(S=Math.floor(S))}else S=(s-(e.slidesPerView-1)*w)/e.slidesPerView,e.roundLengths&&(S=Math.floor(S)),d[k]&&(this.isHorizontal()?d[k].style.width=S+"px":d[k].style.height=S+"px");d[k]&&(d[k].swiperSlideSize=S),u.push(S),e.centeredSlides?(y=y+S/2+x/2+w,0===x&&0!==k&&(y=y-s/2-w),0===k&&(y=y-s/2-w),Math.abs(y)<.001&&(y=0),e.roundLengths&&(y=Math.floor(y)),T%e.slidesPerGroup==0&&p.push(y),c.push(y)):(e.roundLengths&&(y=Math.floor(y)),(T-Math.min(this.params.slidesPerGroupSkip,T))%this.params.slidesPerGroup==0&&p.push(y),c.push(y),y=y+S+w),this.virtualSize+=S+w,x=S,T+=1}}if(this.virtualSize=Math.max(this.virtualSize,s)+m,a&&r&&("slide"===e.effect||"coverflow"===e.effect)&&i.css({width:this.virtualSize+e.spaceBetween+"px"}),e.setWrapperSize&&(this.isHorizontal()?i.css({width:this.virtualSize+e.spaceBetween+"px"}):i.css({height:this.virtualSize+e.spaceBetween+"px"})),e.slidesPerColumn>1&&(this.virtualSize=(S+e.spaceBetween)*E,this.virtualSize=Math.ceil(this.virtualSize/e.slidesPerColumn)-e.spaceBetween,this.isHorizontal()?i.css({width:this.virtualSize+e.spaceBetween+"px"}):i.css({height:this.virtualSize+e.spaceBetween+"px"}),e.centeredSlides)){C=[];for(var Q=0;Q<p.length;Q+=1){var J=p[Q];e.roundLengths&&(J=Math.floor(J)),p[Q]<this.virtualSize+p[0]&&C.push(J)}p=C}if(!e.centeredSlides){C=[];for(var ee=0;ee<p.length;ee+=1){var te=p[ee];e.roundLengths&&(te=Math.floor(te)),p[ee]<=this.virtualSize-s&&C.push(te)}p=C,Math.floor(this.virtualSize-s)-Math.floor(p[p.length-1])>1&&p.push(this.virtualSize-s)}if(0===p.length&&(p=[0]),0!==e.spaceBetween&&(this.isHorizontal()?a?d.filter(v).css({marginLeft:w+"px"}):d.filter(v).css({marginRight:w+"px"}):d.filter(v).css({marginBottom:w+"px"})),e.centeredSlides&&e.centeredSlidesBounds){var ie=0;u.forEach((function(t){ie+=t+(e.spaceBetween?e.spaceBetween:0)}));var se=(ie-=e.spaceBetween)-s;p=p.map((function(e){return e<0?-f:e>se?se+m:e}))}if(e.centerInsufficientSlides){var ae=0;if(u.forEach((function(t){ae+=t+(e.spaceBetween?e.spaceBetween:0)})),(ae-=e.spaceBetween)<s){var re=(s-ae)/2;p.forEach((function(e,t){p[t]=e-re})),c.forEach((function(e,t){c[t]=e+re}))}}n.extend(this,{slides:d,snapGrid:p,slidesGrid:c,slidesSizesGrid:u}),h!==l&&this.emit("slidesLengthChange"),p.length!==g&&(this.params.watchOverflow&&this.checkOverflow(),this.emit("snapGridLengthChange")),c.length!==b&&this.emit("slidesGridLengthChange"),(e.watchSlidesProgress||e.watchSlidesVisibility)&&this.updateSlidesOffset()}},updateAutoHeight:function(e){var t,i=[],s=0;if("number"==typeof e?this.setTransition(e):!0===e&&this.setTransition(this.params.speed),"auto"!==this.params.slidesPerView&&this.params.slidesPerView>1)if(this.params.centeredSlides)this.visibleSlides.each((function(e,t){i.push(t)}));else for(t=0;t<Math.ceil(this.params.slidesPerView);t+=1){var a=this.activeIndex+t;if(a>this.slides.length)break;i.push(this.slides.eq(a)[0])}else i.push(this.slides.eq(this.activeIndex)[0]);for(t=0;t<i.length;t+=1)if(void 0!==i[t]){var r=i[t].offsetHeight;s=r>s?r:s}s&&this.$wrapperEl.css("height",s+"px")},updateSlidesOffset:function(){for(var e=this.slides,t=0;t<e.length;t+=1)e[t].swiperSlideOffset=this.isHorizontal()?e[t].offsetLeft:e[t].offsetTop},updateSlidesProgress:function(e){void 0===e&&(e=this&&this.translate||0);var t=this.params,i=this.slides,a=this.rtlTranslate;if(0!==i.length){void 0===i[0].swiperSlideOffset&&this.updateSlidesOffset();var r=-e;a&&(r=e),i.removeClass(t.slideVisibleClass),this.visibleSlidesIndexes=[],this.visibleSlides=[];for(var n=0;n<i.length;n+=1){var o=i[n],l=(r+(t.centeredSlides?this.minTranslate():0)-o.swiperSlideOffset)/(o.swiperSlideSize+t.spaceBetween);if(t.watchSlidesVisibility||t.centeredSlides&&t.autoHeight){var d=-(r-o.swiperSlideOffset),h=d+this.slidesSizesGrid[n];(d>=0&&d<this.size-1||h>1&&h<=this.size||d<=0&&h>=this.size)&&(this.visibleSlides.push(o),this.visibleSlidesIndexes.push(n),i.eq(n).addClass(t.slideVisibleClass))}o.progress=a?-l:l}this.visibleSlides=s(this.visibleSlides)}},updateProgress:function(e){if(void 0===e){var t=this.rtlTranslate?-1:1;e=this&&this.translate&&this.translate*t||0}var i=this.params,s=this.maxTranslate()-this.minTranslate(),a=this.progress,r=this.isBeginning,o=this.isEnd,l=r,d=o;0===s?(a=0,r=!0,o=!0):(r=(a=(e-this.minTranslate())/s)<=0,o=a>=1),n.extend(this,{progress:a,isBeginning:r,isEnd:o}),(i.watchSlidesProgress||i.watchSlidesVisibility||i.centeredSlides&&i.autoHeight)&&this.updateSlidesProgress(e),r&&!l&&this.emit("reachBeginning toEdge"),o&&!d&&this.emit("reachEnd toEdge"),(l&&!r||d&&!o)&&this.emit("fromEdge"),this.emit("progress",a)},updateSlidesClasses:function(){var e,t=this.slides,i=this.params,s=this.$wrapperEl,a=this.activeIndex,r=this.realIndex,n=this.virtual&&i.virtual.enabled;t.removeClass(i.slideActiveClass+" "+i.slideNextClass+" "+i.slidePrevClass+" "+i.slideDuplicateActiveClass+" "+i.slideDuplicateNextClass+" "+i.slideDuplicatePrevClass),(e=n?this.$wrapperEl.find("."+i.slideClass+'[data-swiper-slide-index="'+a+'"]'):t.eq(a)).addClass(i.slideActiveClass),i.loop&&(e.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+r+'"]').addClass(i.slideDuplicateActiveClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+r+'"]').addClass(i.slideDuplicateActiveClass));var o=e.nextAll("."+i.slideClass).eq(0).addClass(i.slideNextClass);i.loop&&0===o.length&&(o=t.eq(0)).addClass(i.slideNextClass);var l=e.prevAll("."+i.slideClass).eq(0).addClass(i.slidePrevClass);i.loop&&0===l.length&&(l=t.eq(-1)).addClass(i.slidePrevClass),i.loop&&(o.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+o.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicateNextClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+o.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicateNextClass),l.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicatePrevClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicatePrevClass))},updateActiveIndex:function(e){var t,i=this.rtlTranslate?this.translate:-this.translate,s=this.slidesGrid,a=this.snapGrid,r=this.params,o=this.activeIndex,l=this.realIndex,d=this.snapIndex,h=e;if(void 0===h){for(var p=0;p<s.length;p+=1)void 0!==s[p+1]?i>=s[p]&&i<s[p+1]-(s[p+1]-s[p])/2?h=p:i>=s[p]&&i<s[p+1]&&(h=p+1):i>=s[p]&&(h=p);r.normalizeSlideIndex&&(h<0||void 0===h)&&(h=0)}if(a.indexOf(i)>=0)t=a.indexOf(i);else{var c=Math.min(r.slidesPerGroupSkip,h);t=c+Math.floor((h-c)/r.slidesPerGroup)}if(t>=a.length&&(t=a.length-1),h!==o){var u=parseInt(this.slides.eq(h).attr("data-swiper-slide-index")||h,10);n.extend(this,{snapIndex:t,realIndex:u,previousIndex:o,activeIndex:h}),this.emit("activeIndexChange"),this.emit("snapIndexChange"),l!==u&&this.emit("realIndexChange"),(this.initialized||this.params.runCallbacksOnInit)&&this.emit("slideChange")}else t!==d&&(this.snapIndex=t,this.emit("snapIndexChange"))},updateClickedSlide:function(e){var t=this.params,i=s(e.target).closest("."+t.slideClass)[0],a=!1;if(i)for(var r=0;r<this.slides.length;r+=1)this.slides[r]===i&&(a=!0);if(!i||!a)return this.clickedSlide=void 0,void(this.clickedIndex=void 0);this.clickedSlide=i,this.virtual&&this.params.virtual.enabled?this.clickedIndex=parseInt(s(i).attr("data-swiper-slide-index"),10):this.clickedIndex=s(i).index(),t.slideToClickedSlide&&void 0!==this.clickedIndex&&this.clickedIndex!==this.activeIndex&&this.slideToClickedSlide()}};var p={getTranslate:function(e){void 0===e&&(e=this.isHorizontal()?"x":"y");var t=this.params,i=this.rtlTranslate,s=this.translate,a=this.$wrapperEl;if(t.virtualTranslate)return i?-s:s;if(t.cssMode)return s;var r=n.getTranslate(a[0],e);return i&&(r=-r),r||0},setTranslate:function(e,t){var i=this.rtlTranslate,s=this.params,a=this.$wrapperEl,r=this.wrapperEl,n=this.progress,o=0,l=0;this.isHorizontal()?o=i?-e:e:l=e,s.roundLengths&&(o=Math.floor(o),l=Math.floor(l)),s.cssMode?r[this.isHorizontal()?"scrollLeft":"scrollTop"]=this.isHorizontal()?-o:-l:s.virtualTranslate||a.transform("translate3d("+o+"px, "+l+"px, 0px)"),this.previousTranslate=this.translate,this.translate=this.isHorizontal()?o:l;var d=this.maxTranslate()-this.minTranslate();(0===d?0:(e-this.minTranslate())/d)!==n&&this.updateProgress(e),this.emit("setTranslate",this.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]},translateTo:function(e,t,i,s,a){var r;void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===i&&(i=!0),void 0===s&&(s=!0);var n=this,o=n.params,l=n.wrapperEl;if(n.animating&&o.preventInteractionOnTransition)return!1;var d,h=n.minTranslate(),p=n.maxTranslate();if(d=s&&e>h?h:s&&e<p?p:e,n.updateProgress(d),o.cssMode){var c=n.isHorizontal();return 0===t?l[c?"scrollLeft":"scrollTop"]=-d:l.scrollTo?l.scrollTo(((r={})[c?"left":"top"]=-d,r.behavior="smooth",r)):l[c?"scrollLeft":"scrollTop"]=-d,!0}return 0===t?(n.setTransition(0),n.setTranslate(d),i&&(n.emit("beforeTransitionStart",t,a),n.emit("transitionEnd"))):(n.setTransition(t),n.setTranslate(d),i&&(n.emit("beforeTransitionStart",t,a),n.emit("transitionStart")),n.animating||(n.animating=!0,n.onTranslateToWrapperTransitionEnd||(n.onTranslateToWrapperTransitionEnd=function(e){n&&!n.destroyed&&e.target===this&&(n.$wrapperEl[0].removeEventListener("transitionend",n.onTranslateToWrapperTransitionEnd),n.$wrapperEl[0].removeEventListener("webkitTransitionEnd",n.onTranslateToWrapperTransitionEnd),n.onTranslateToWrapperTransitionEnd=null,delete n.onTranslateToWrapperTransitionEnd,i&&n.emit("transitionEnd"))}),n.$wrapperEl[0].addEventListener("transitionend",n.onTranslateToWrapperTransitionEnd),n.$wrapperEl[0].addEventListener("webkitTransitionEnd",n.onTranslateToWrapperTransitionEnd))),!0}};var c={setTransition:function(e,t){this.params.cssMode||this.$wrapperEl.transition(e),this.emit("setTransition",e,t)},transitionStart:function(e,t){void 0===e&&(e=!0);var i=this.activeIndex,s=this.params,a=this.previousIndex;if(!s.cssMode){s.autoHeight&&this.updateAutoHeight();var r=t;if(r||(r=i>a?"next":i<a?"prev":"reset"),this.emit("transitionStart"),e&&i!==a){if("reset"===r)return void this.emit("slideResetTransitionStart");this.emit("slideChangeTransitionStart"),"next"===r?this.emit("slideNextTransitionStart"):this.emit("slidePrevTransitionStart")}}},transitionEnd:function(e,t){void 0===e&&(e=!0);var i=this.activeIndex,s=this.previousIndex,a=this.params;if(this.animating=!1,!a.cssMode){this.setTransition(0);var r=t;if(r||(r=i>s?"next":i<s?"prev":"reset"),this.emit("transitionEnd"),e&&i!==s){if("reset"===r)return void this.emit("slideResetTransitionEnd");this.emit("slideChangeTransitionEnd"),"next"===r?this.emit("slideNextTransitionEnd"):this.emit("slidePrevTransitionEnd")}}}};var u={slideTo:function(e,t,i,s){var a;void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===i&&(i=!0);var r=this,n=e;n<0&&(n=0);var o=r.params,l=r.snapGrid,d=r.slidesGrid,h=r.previousIndex,p=r.activeIndex,c=r.rtlTranslate,u=r.wrapperEl;if(r.animating&&o.preventInteractionOnTransition)return!1;var v=Math.min(r.params.slidesPerGroupSkip,n),f=v+Math.floor((n-v)/r.params.slidesPerGroup);f>=l.length&&(f=l.length-1),(p||o.initialSlide||0)===(h||0)&&i&&r.emit("beforeSlideChangeStart");var m,g=-l[f];if(r.updateProgress(g),o.normalizeSlideIndex)for(var b=0;b<d.length;b+=1)-Math.floor(100*g)>=Math.floor(100*d[b])&&(n=b);if(r.initialized&&n!==p){if(!r.allowSlideNext&&g<r.translate&&g<r.minTranslate())return!1;if(!r.allowSlidePrev&&g>r.translate&&g>r.maxTranslate()&&(p||0)!==n)return!1}if(m=n>p?"next":n<p?"prev":"reset",c&&-g===r.translate||!c&&g===r.translate)return r.updateActiveIndex(n),o.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),"slide"!==o.effect&&r.setTranslate(g),"reset"!==m&&(r.transitionStart(i,m),r.transitionEnd(i,m)),!1;if(o.cssMode){var w=r.isHorizontal(),y=-g;return c&&(y=u.scrollWidth-u.offsetWidth-y),0===t?u[w?"scrollLeft":"scrollTop"]=y:u.scrollTo?u.scrollTo(((a={})[w?"left":"top"]=y,a.behavior="smooth",a)):u[w?"scrollLeft":"scrollTop"]=y,!0}return 0===t?(r.setTransition(0),r.setTranslate(g),r.updateActiveIndex(n),r.updateSlidesClasses(),r.emit("beforeTransitionStart",t,s),r.transitionStart(i,m),r.transitionEnd(i,m)):(r.setTransition(t),r.setTranslate(g),r.updateActiveIndex(n),r.updateSlidesClasses(),r.emit("beforeTransitionStart",t,s),r.transitionStart(i,m),r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.$wrapperEl[0].removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.$wrapperEl[0].removeEventListener("webkitTransitionEnd",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(i,m))}),r.$wrapperEl[0].addEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.$wrapperEl[0].addEventListener("webkitTransitionEnd",r.onSlideToWrapperTransitionEnd))),!0},slideToLoop:function(e,t,i,s){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===i&&(i=!0);var a=e;return this.params.loop&&(a+=this.loopedSlides),this.slideTo(a,t,i,s)},slideNext:function(e,t,i){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var s=this.params,a=this.animating,r=this.activeIndex<s.slidesPerGroupSkip?1:s.slidesPerGroup;if(s.loop){if(a)return!1;this.loopFix(),this._clientLeft=this.$wrapperEl[0].clientLeft}return this.slideTo(this.activeIndex+r,e,t,i)},slidePrev:function(e,t,i){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var s=this.params,a=this.animating,r=this.snapGrid,n=this.slidesGrid,o=this.rtlTranslate;if(s.loop){if(a)return!1;this.loopFix(),this._clientLeft=this.$wrapperEl[0].clientLeft}function l(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}var d,h=l(o?this.translate:-this.translate),p=r.map((function(e){return l(e)})),c=(n.map((function(e){return l(e)})),r[p.indexOf(h)],r[p.indexOf(h)-1]);return void 0===c&&s.cssMode&&r.forEach((function(e){!c&&h>=e&&(c=e)})),void 0!==c&&(d=n.indexOf(c))<0&&(d=this.activeIndex-1),this.slideTo(d,e,t,i)},slideReset:function(e,t,i){return void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),this.slideTo(this.activeIndex,e,t,i)},slideToClosest:function(e,t,i,s){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),void 0===s&&(s=.5);var a=this.activeIndex,r=Math.min(this.params.slidesPerGroupSkip,a),n=r+Math.floor((a-r)/this.params.slidesPerGroup),o=this.rtlTranslate?this.translate:-this.translate;if(o>=this.snapGrid[n]){var l=this.snapGrid[n];o-l>(this.snapGrid[n+1]-l)*s&&(a+=this.params.slidesPerGroup)}else{var d=this.snapGrid[n-1];o-d<=(this.snapGrid[n]-d)*s&&(a-=this.params.slidesPerGroup)}return a=Math.max(a,0),a=Math.min(a,this.slidesGrid.length-1),this.slideTo(a,e,t,i)},slideToClickedSlide:function(){var e,t=this,i=t.params,a=t.$wrapperEl,r="auto"===i.slidesPerView?t.slidesPerViewDynamic():i.slidesPerView,o=t.clickedIndex;if(i.loop){if(t.animating)return;e=parseInt(s(t.clickedSlide).attr("data-swiper-slide-index"),10),i.centeredSlides?o<t.loopedSlides-r/2||o>t.slides.length-t.loopedSlides+r/2?(t.loopFix(),o=a.children("."+i.slideClass+'[data-swiper-slide-index="'+e+'"]:not(.'+i.slideDuplicateClass+")").eq(0).index(),n.nextTick((function(){t.slideTo(o)}))):t.slideTo(o):o>t.slides.length-r?(t.loopFix(),o=a.children("."+i.slideClass+'[data-swiper-slide-index="'+e+'"]:not(.'+i.slideDuplicateClass+")").eq(0).index(),n.nextTick((function(){t.slideTo(o)}))):t.slideTo(o)}else t.slideTo(o)}};var v={loopCreate:function(){var t=this,i=t.params,a=t.$wrapperEl;a.children("."+i.slideClass+"."+i.slideDuplicateClass).remove();var r=a.children("."+i.slideClass);if(i.loopFillGroupWithBlank){var n=i.slidesPerGroup-r.length%i.slidesPerGroup;if(n!==i.slidesPerGroup){for(var o=0;o<n;o+=1){var l=s(e.createElement("div")).addClass(i.slideClass+" "+i.slideBlankClass);a.append(l)}r=a.children("."+i.slideClass)}}"auto"!==i.slidesPerView||i.loopedSlides||(i.loopedSlides=r.length),t.loopedSlides=Math.ceil(parseFloat(i.loopedSlides||i.slidesPerView,10)),t.loopedSlides+=i.loopAdditionalSlides,t.loopedSlides>r.length&&(t.loopedSlides=r.length);var d=[],h=[];r.each((function(e,i){var a=s(i);e<t.loopedSlides&&h.push(i),e<r.length&&e>=r.length-t.loopedSlides&&d.push(i),a.attr("data-swiper-slide-index",e)}));for(var p=0;p<h.length;p+=1)a.append(s(h[p].cloneNode(!0)).addClass(i.slideDuplicateClass));for(var c=d.length-1;c>=0;c-=1)a.prepend(s(d[c].cloneNode(!0)).addClass(i.slideDuplicateClass))},loopFix:function(){this.emit("beforeLoopFix");var e,t=this.activeIndex,i=this.slides,s=this.loopedSlides,a=this.allowSlidePrev,r=this.allowSlideNext,n=this.snapGrid,o=this.rtlTranslate;this.allowSlidePrev=!0,this.allowSlideNext=!0;var l=-n[t]-this.getTranslate();if(t<s)e=i.length-3*s+t,e+=s,this.slideTo(e,0,!1,!0)&&0!==l&&this.setTranslate((o?-this.translate:this.translate)-l);else if(t>=i.length-s){e=-i.length+t+s,e+=s,this.slideTo(e,0,!1,!0)&&0!==l&&this.setTranslate((o?-this.translate:this.translate)-l)}this.allowSlidePrev=a,this.allowSlideNext=r,this.emit("loopFix")},loopDestroy:function(){var e=this.$wrapperEl,t=this.params,i=this.slides;e.children("."+t.slideClass+"."+t.slideDuplicateClass+",."+t.slideClass+"."+t.slideBlankClass).remove(),i.removeAttr("data-swiper-slide-index")}};var f={setGrabCursor:function(e){if(!(o.touch||!this.params.simulateTouch||this.params.watchOverflow&&this.isLocked||this.params.cssMode)){var t=this.el;t.style.cursor="move",t.style.cursor=e?"-webkit-grabbing":"-webkit-grab",t.style.cursor=e?"-moz-grabbin":"-moz-grab",t.style.cursor=e?"grabbing":"grab"}},unsetGrabCursor:function(){o.touch||this.params.watchOverflow&&this.isLocked||this.params.cssMode||(this.el.style.cursor="")}};var m,g,b,w,y,x,T,E,S,C,M,P,z,k,$,L={appendSlide:function(e){var t=this.$wrapperEl,i=this.params;if(i.loop&&this.loopDestroy(),"object"==typeof e&&"length"in e)for(var s=0;s<e.length;s+=1)e[s]&&t.append(e[s]);else t.append(e);i.loop&&this.loopCreate(),i.observer&&o.observer||this.update()},prependSlide:function(e){var t=this.params,i=this.$wrapperEl,s=this.activeIndex;t.loop&&this.loopDestroy();var a=s+1;if("object"==typeof e&&"length"in e){for(var r=0;r<e.length;r+=1)e[r]&&i.prepend(e[r]);a=s+e.length}else i.prepend(e);t.loop&&this.loopCreate(),t.observer&&o.observer||this.update(),this.slideTo(a,0,!1)},addSlide:function(e,t){var i=this.$wrapperEl,s=this.params,a=this.activeIndex;s.loop&&(a-=this.loopedSlides,this.loopDestroy(),this.slides=i.children("."+s.slideClass));var r=this.slides.length;if(e<=0)this.prependSlide(t);else if(e>=r)this.appendSlide(t);else{for(var n=a>e?a+1:a,l=[],d=r-1;d>=e;d-=1){var h=this.slides.eq(d);h.remove(),l.unshift(h)}if("object"==typeof t&&"length"in t){for(var p=0;p<t.length;p+=1)t[p]&&i.append(t[p]);n=a>e?a+t.length:a}else i.append(t);for(var c=0;c<l.length;c+=1)i.append(l[c]);s.loop&&this.loopCreate(),s.observer&&o.observer||this.update(),s.loop?this.slideTo(n+this.loopedSlides,0,!1):this.slideTo(n,0,!1)}},removeSlide:function(e){var t=this.params,i=this.$wrapperEl,s=this.activeIndex;t.loop&&(s-=this.loopedSlides,this.loopDestroy(),this.slides=i.children("."+t.slideClass));var a,r=s;if("object"==typeof e&&"length"in e){for(var n=0;n<e.length;n+=1)a=e[n],this.slides[a]&&this.slides.eq(a).remove(),a<r&&(r-=1);r=Math.max(r,0)}else a=e,this.slides[a]&&this.slides.eq(a).remove(),a<r&&(r-=1),r=Math.max(r,0);t.loop&&this.loopCreate(),t.observer&&o.observer||this.update(),t.loop?this.slideTo(r+this.loopedSlides,0,!1):this.slideTo(r,0,!1)},removeAllSlides:function(){for(var e=[],t=0;t<this.slides.length;t+=1)e.push(t);this.removeSlide(e)}},I=(m=t.navigator.platform,g=t.navigator.userAgent,b={ios:!1,android:!1,androidChrome:!1,desktop:!1,iphone:!1,ipod:!1,ipad:!1,edge:!1,ie:!1,firefox:!1,macos:!1,windows:!1,cordova:!(!t.cordova&&!t.phonegap),phonegap:!(!t.cordova&&!t.phonegap),electron:!1},w=t.screen.width,y=t.screen.height,x=g.match(/(Android);?[\s\/]+([\d.]+)?/),T=g.match(/(iPad).*OS\s([\d_]+)/),E=g.match(/(iPod)(.*OS\s([\d_]+))?/),S=!T&&g.match(/(iPhone\sOS|iOS)\s([\d_]+)/),C=g.indexOf("MSIE ")>=0||g.indexOf("Trident/")>=0,M=g.indexOf("Edge/")>=0,P=g.indexOf("Gecko/")>=0&&g.indexOf("Firefox/")>=0,z="Win32"===m,k=g.toLowerCase().indexOf("electron")>=0,$="MacIntel"===m,!T&&$&&o.touch&&(1024===w&&1366===y||834===w&&1194===y||834===w&&1112===y||768===w&&1024===y)&&(T=g.match(/(Version)\/([\d.]+)/),$=!1),b.ie=C,b.edge=M,b.firefox=P,x&&!z&&(b.os="android",b.osVersion=x[2],b.android=!0,b.androidChrome=g.toLowerCase().indexOf("chrome")>=0),(T||S||E)&&(b.os="ios",b.ios=!0),S&&!E&&(b.osVersion=S[2].replace(/_/g,"."),b.iphone=!0),T&&(b.osVersion=T[2].replace(/_/g,"."),b.ipad=!0),E&&(b.osVersion=E[3]?E[3].replace(/_/g,"."):null,b.ipod=!0),b.ios&&b.osVersion&&g.indexOf("Version/")>=0&&"10"===b.osVersion.split(".")[0]&&(b.osVersion=g.toLowerCase().split("version/")[1].split(" ")[0]),b.webView=!(!(S||T||E)||!g.match(/.*AppleWebKit(?!.*Safari)/i)&&!t.navigator.standalone)||t.matchMedia&&t.matchMedia("(display-mode: standalone)").matches,b.webview=b.webView,b.standalone=b.webView,b.desktop=!(b.ios||b.android)||k,b.desktop&&(b.electron=k,b.macos=$,b.windows=z,b.macos&&(b.os="macos"),b.windows&&(b.os="windows")),b.pixelRatio=t.devicePixelRatio||1,b);function D(i){var a=this.touchEventsData,r=this.params,o=this.touches;if(!this.animating||!r.preventInteractionOnTransition){var l=i;l.originalEvent&&(l=l.originalEvent);var d=s(l.target);if(("wrapper"!==r.touchEventsTarget||d.closest(this.wrapperEl).length)&&(a.isTouchEvent="touchstart"===l.type,(a.isTouchEvent||!("which"in l)||3!==l.which)&&!(!a.isTouchEvent&&"button"in l&&l.button>0||a.isTouched&&a.isMoved)))if(r.noSwiping&&d.closest(r.noSwipingSelector?r.noSwipingSelector:"."+r.noSwipingClass)[0])this.allowClick=!0;else if(!r.swipeHandler||d.closest(r.swipeHandler)[0]){o.currentX="touchstart"===l.type?l.targetTouches[0].pageX:l.pageX,o.currentY="touchstart"===l.type?l.targetTouches[0].pageY:l.pageY;var h=o.currentX,p=o.currentY,c=r.edgeSwipeDetection||r.iOSEdgeSwipeDetection,u=r.edgeSwipeThreshold||r.iOSEdgeSwipeThreshold;if(!c||!(h<=u||h>=t.screen.width-u)){if(n.extend(a,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=h,o.startY=p,a.touchStartTime=n.now(),this.allowClick=!0,this.updateSize(),this.swipeDirection=void 0,r.threshold>0&&(a.allowThresholdMove=!1),"touchstart"!==l.type){var v=!0;d.is(a.formElements)&&(v=!1),e.activeElement&&s(e.activeElement).is(a.formElements)&&e.activeElement!==d[0]&&e.activeElement.blur();var f=v&&this.allowTouchMove&&r.touchStartPreventDefault;(r.touchStartForcePreventDefault||f)&&l.preventDefault()}this.emit("touchStart",l)}}}}function O(t){var i=this.touchEventsData,a=this.params,r=this.touches,o=this.rtlTranslate,l=t;if(l.originalEvent&&(l=l.originalEvent),i.isTouched){if(!i.isTouchEvent||"mousemove"!==l.type){var d="touchmove"===l.type&&l.targetTouches&&(l.targetTouches[0]||l.changedTouches[0]),h="touchmove"===l.type?d.pageX:l.pageX,p="touchmove"===l.type?d.pageY:l.pageY;if(l.preventedByNestedSwiper)return r.startX=h,void(r.startY=p);if(!this.allowTouchMove)return this.allowClick=!1,void(i.isTouched&&(n.extend(r,{startX:h,startY:p,currentX:h,currentY:p}),i.touchStartTime=n.now()));if(i.isTouchEvent&&a.touchReleaseOnEdges&&!a.loop)if(this.isVertical()){if(p<r.startY&&this.translate<=this.maxTranslate()||p>r.startY&&this.translate>=this.minTranslate())return i.isTouched=!1,void(i.isMoved=!1)}else if(h<r.startX&&this.translate<=this.maxTranslate()||h>r.startX&&this.translate>=this.minTranslate())return;if(i.isTouchEvent&&e.activeElement&&l.target===e.activeElement&&s(l.target).is(i.formElements))return i.isMoved=!0,void(this.allowClick=!1);if(i.allowTouchCallbacks&&this.emit("touchMove",l),!(l.targetTouches&&l.targetTouches.length>1)){r.currentX=h,r.currentY=p;var c=r.currentX-r.startX,u=r.currentY-r.startY;if(!(this.params.threshold&&Math.sqrt(Math.pow(c,2)+Math.pow(u,2))<this.params.threshold)){var v;if(void 0===i.isScrolling)this.isHorizontal()&&r.currentY===r.startY||this.isVertical()&&r.currentX===r.startX?i.isScrolling=!1:c*c+u*u>=25&&(v=180*Math.atan2(Math.abs(u),Math.abs(c))/Math.PI,i.isScrolling=this.isHorizontal()?v>a.touchAngle:90-v>a.touchAngle);if(i.isScrolling&&this.emit("touchMoveOpposite",l),void 0===i.startMoving&&(r.currentX===r.startX&&r.currentY===r.startY||(i.startMoving=!0)),i.isScrolling)i.isTouched=!1;else if(i.startMoving){this.allowClick=!1,a.cssMode||l.preventDefault(),a.touchMoveStopPropagation&&!a.nested&&l.stopPropagation(),i.isMoved||(a.loop&&this.loopFix(),i.startTranslate=this.getTranslate(),this.setTransition(0),this.animating&&this.$wrapperEl.trigger("webkitTransitionEnd transitionend"),i.allowMomentumBounce=!1,!a.grabCursor||!0!==this.allowSlideNext&&!0!==this.allowSlidePrev||this.setGrabCursor(!0),this.emit("sliderFirstMove",l)),this.emit("sliderMove",l),i.isMoved=!0;var f=this.isHorizontal()?c:u;r.diff=f,f*=a.touchRatio,o&&(f=-f),this.swipeDirection=f>0?"prev":"next",i.currentTranslate=f+i.startTranslate;var m=!0,g=a.resistanceRatio;if(a.touchReleaseOnEdges&&(g=0),f>0&&i.currentTranslate>this.minTranslate()?(m=!1,a.resistance&&(i.currentTranslate=this.minTranslate()-1+Math.pow(-this.minTranslate()+i.startTranslate+f,g))):f<0&&i.currentTranslate<this.maxTranslate()&&(m=!1,a.resistance&&(i.currentTranslate=this.maxTranslate()+1-Math.pow(this.maxTranslate()-i.startTranslate-f,g))),m&&(l.preventedByNestedSwiper=!0),!this.allowSlideNext&&"next"===this.swipeDirection&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!this.allowSlidePrev&&"prev"===this.swipeDirection&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),a.threshold>0){if(!(Math.abs(f)>a.threshold||i.allowThresholdMove))return void(i.currentTranslate=i.startTranslate);if(!i.allowThresholdMove)return i.allowThresholdMove=!0,r.startX=r.currentX,r.startY=r.currentY,i.currentTranslate=i.startTranslate,void(r.diff=this.isHorizontal()?r.currentX-r.startX:r.currentY-r.startY)}a.followFinger&&!a.cssMode&&((a.freeMode||a.watchSlidesProgress||a.watchSlidesVisibility)&&(this.updateActiveIndex(),this.updateSlidesClasses()),a.freeMode&&(0===i.velocities.length&&i.velocities.push({position:r[this.isHorizontal()?"startX":"startY"],time:i.touchStartTime}),i.velocities.push({position:r[this.isHorizontal()?"currentX":"currentY"],time:n.now()})),this.updateProgress(i.currentTranslate),this.setTranslate(i.currentTranslate))}}}}}else i.startMoving&&i.isScrolling&&this.emit("touchMoveOpposite",l)}function A(e){var t=this,i=t.touchEventsData,s=t.params,a=t.touches,r=t.rtlTranslate,o=t.$wrapperEl,l=t.slidesGrid,d=t.snapGrid,h=e;if(h.originalEvent&&(h=h.originalEvent),i.allowTouchCallbacks&&t.emit("touchEnd",h),i.allowTouchCallbacks=!1,!i.isTouched)return i.isMoved&&s.grabCursor&&t.setGrabCursor(!1),i.isMoved=!1,void(i.startMoving=!1);s.grabCursor&&i.isMoved&&i.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);var p,c=n.now(),u=c-i.touchStartTime;if(t.allowClick&&(t.updateClickedSlide(h),t.emit("tap click",h),u<300&&c-i.lastClickTime<300&&t.emit("doubleTap doubleClick",h)),i.lastClickTime=n.now(),n.nextTick((function(){t.destroyed||(t.allowClick=!0)})),!i.isTouched||!i.isMoved||!t.swipeDirection||0===a.diff||i.currentTranslate===i.startTranslate)return i.isTouched=!1,i.isMoved=!1,void(i.startMoving=!1);if(i.isTouched=!1,i.isMoved=!1,i.startMoving=!1,p=s.followFinger?r?t.translate:-t.translate:-i.currentTranslate,!s.cssMode)if(s.freeMode){if(p<-t.minTranslate())return void t.slideTo(t.activeIndex);if(p>-t.maxTranslate())return void(t.slides.length<d.length?t.slideTo(d.length-1):t.slideTo(t.slides.length-1));if(s.freeModeMomentum){if(i.velocities.length>1){var v=i.velocities.pop(),f=i.velocities.pop(),m=v.position-f.position,g=v.time-f.time;t.velocity=m/g,t.velocity/=2,Math.abs(t.velocity)<s.freeModeMinimumVelocity&&(t.velocity=0),(g>150||n.now()-v.time>300)&&(t.velocity=0)}else t.velocity=0;t.velocity*=s.freeModeMomentumVelocityRatio,i.velocities.length=0;var b=1e3*s.freeModeMomentumRatio,w=t.velocity*b,y=t.translate+w;r&&(y=-y);var x,T,E=!1,S=20*Math.abs(t.velocity)*s.freeModeMomentumBounceRatio;if(y<t.maxTranslate())s.freeModeMomentumBounce?(y+t.maxTranslate()<-S&&(y=t.maxTranslate()-S),x=t.maxTranslate(),E=!0,i.allowMomentumBounce=!0):y=t.maxTranslate(),s.loop&&s.centeredSlides&&(T=!0);else if(y>t.minTranslate())s.freeModeMomentumBounce?(y-t.minTranslate()>S&&(y=t.minTranslate()+S),x=t.minTranslate(),E=!0,i.allowMomentumBounce=!0):y=t.minTranslate(),s.loop&&s.centeredSlides&&(T=!0);else if(s.freeModeSticky){for(var C,M=0;M<d.length;M+=1)if(d[M]>-y){C=M;break}y=-(y=Math.abs(d[C]-y)<Math.abs(d[C-1]-y)||"next"===t.swipeDirection?d[C]:d[C-1])}if(T&&t.once("transitionEnd",(function(){t.loopFix()})),0!==t.velocity){if(b=r?Math.abs((-y-t.translate)/t.velocity):Math.abs((y-t.translate)/t.velocity),s.freeModeSticky){var P=Math.abs((r?-y:y)-t.translate),z=t.slidesSizesGrid[t.activeIndex];b=P<z?s.speed:P<2*z?1.5*s.speed:2.5*s.speed}}else if(s.freeModeSticky)return void t.slideToClosest();s.freeModeMomentumBounce&&E?(t.updateProgress(x),t.setTransition(b),t.setTranslate(y),t.transitionStart(!0,t.swipeDirection),t.animating=!0,o.transitionEnd((function(){t&&!t.destroyed&&i.allowMomentumBounce&&(t.emit("momentumBounce"),t.setTransition(s.speed),setTimeout((function(){t.setTranslate(x),o.transitionEnd((function(){t&&!t.destroyed&&t.transitionEnd()}))}),0))}))):t.velocity?(t.updateProgress(y),t.setTransition(b),t.setTranslate(y),t.transitionStart(!0,t.swipeDirection),t.animating||(t.animating=!0,o.transitionEnd((function(){t&&!t.destroyed&&t.transitionEnd()})))):t.updateProgress(y),t.updateActiveIndex(),t.updateSlidesClasses()}else if(s.freeModeSticky)return void t.slideToClosest();(!s.freeModeMomentum||u>=s.longSwipesMs)&&(t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses())}else{for(var k=0,$=t.slidesSizesGrid[0],L=0;L<l.length;L+=L<s.slidesPerGroupSkip?1:s.slidesPerGroup){var I=L<s.slidesPerGroupSkip-1?1:s.slidesPerGroup;void 0!==l[L+I]?p>=l[L]&&p<l[L+I]&&(k=L,$=l[L+I]-l[L]):p>=l[L]&&(k=L,$=l[l.length-1]-l[l.length-2])}var D=(p-l[k])/$,O=k<s.slidesPerGroupSkip-1?1:s.slidesPerGroup;if(u>s.longSwipesMs){if(!s.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(D>=s.longSwipesRatio?t.slideTo(k+O):t.slideTo(k)),"prev"===t.swipeDirection&&(D>1-s.longSwipesRatio?t.slideTo(k+O):t.slideTo(k))}else{if(!s.shortSwipes)return void t.slideTo(t.activeIndex);t.navigation&&(h.target===t.navigation.nextEl||h.target===t.navigation.prevEl)?h.target===t.navigation.nextEl?t.slideTo(k+O):t.slideTo(k):("next"===t.swipeDirection&&t.slideTo(k+O),"prev"===t.swipeDirection&&t.slideTo(k))}}}function G(){var e=this.params,t=this.el;if(!t||0!==t.offsetWidth){e.breakpoints&&this.setBreakpoint();var i=this.allowSlideNext,s=this.allowSlidePrev,a=this.snapGrid;this.allowSlideNext=!0,this.allowSlidePrev=!0,this.updateSize(),this.updateSlides(),this.updateSlidesClasses(),("auto"===e.slidesPerView||e.slidesPerView>1)&&this.isEnd&&!this.params.centeredSlides?this.slideTo(this.slides.length-1,0,!1,!0):this.slideTo(this.activeIndex,0,!1,!0),this.autoplay&&this.autoplay.running&&this.autoplay.paused&&this.autoplay.run(),this.allowSlidePrev=s,this.allowSlideNext=i,this.params.watchOverflow&&a!==this.snapGrid&&this.checkOverflow()}}function H(e){this.allowClick||(this.params.preventClicks&&e.preventDefault(),this.params.preventClicksPropagation&&this.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))}function B(){var e=this.wrapperEl,t=this.rtlTranslate;this.previousTranslate=this.translate,this.isHorizontal()?this.translate=t?e.scrollWidth-e.offsetWidth-e.scrollLeft:-e.scrollLeft:this.translate=-e.scrollTop,-0===this.translate&&(this.translate=0),this.updateActiveIndex(),this.updateSlidesClasses();var i=this.maxTranslate()-this.minTranslate();(0===i?0:(this.translate-this.minTranslate())/i)!==this.progress&&this.updateProgress(t?-this.translate:this.translate),this.emit("setTranslate",this.translate,!1)}var N=!1;function X(){}var V={init:!0,direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,preventInteractionOnTransition:!1,edgeSwipeDetection:!1,edgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeMomentumVelocityRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,slidesPerGroupSkip:0,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!1,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopFillGroupWithBlank:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,containerModifierClass:"swiper-container-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0},Y={update:h,translate:p,transition:c,slide:u,loop:v,grabCursor:f,manipulation:L,events:{attachEvents:function(){var t=this.params,i=this.touchEvents,s=this.el,a=this.wrapperEl;this.onTouchStart=D.bind(this),this.onTouchMove=O.bind(this),this.onTouchEnd=A.bind(this),t.cssMode&&(this.onScroll=B.bind(this)),this.onClick=H.bind(this);var r=!!t.nested;if(!o.touch&&o.pointerEvents)s.addEventListener(i.start,this.onTouchStart,!1),e.addEventListener(i.move,this.onTouchMove,r),e.addEventListener(i.end,this.onTouchEnd,!1);else{if(o.touch){var n=!("touchstart"!==i.start||!o.passiveListener||!t.passiveListeners)&&{passive:!0,capture:!1};s.addEventListener(i.start,this.onTouchStart,n),s.addEventListener(i.move,this.onTouchMove,o.passiveListener?{passive:!1,capture:r}:r),s.addEventListener(i.end,this.onTouchEnd,n),i.cancel&&s.addEventListener(i.cancel,this.onTouchEnd,n),N||(e.addEventListener("touchstart",X),N=!0)}(t.simulateTouch&&!I.ios&&!I.android||t.simulateTouch&&!o.touch&&I.ios)&&(s.addEventListener("mousedown",this.onTouchStart,!1),e.addEventListener("mousemove",this.onTouchMove,r),e.addEventListener("mouseup",this.onTouchEnd,!1))}(t.preventClicks||t.preventClicksPropagation)&&s.addEventListener("click",this.onClick,!0),t.cssMode&&a.addEventListener("scroll",this.onScroll),t.updateOnWindowResize?this.on(I.ios||I.android?"resize orientationchange observerUpdate":"resize observerUpdate",G,!0):this.on("observerUpdate",G,!0)},detachEvents:function(){var t=this.params,i=this.touchEvents,s=this.el,a=this.wrapperEl,r=!!t.nested;if(!o.touch&&o.pointerEvents)s.removeEventListener(i.start,this.onTouchStart,!1),e.removeEventListener(i.move,this.onTouchMove,r),e.removeEventListener(i.end,this.onTouchEnd,!1);else{if(o.touch){var n=!("onTouchStart"!==i.start||!o.passiveListener||!t.passiveListeners)&&{passive:!0,capture:!1};s.removeEventListener(i.start,this.onTouchStart,n),s.removeEventListener(i.move,this.onTouchMove,r),s.removeEventListener(i.end,this.onTouchEnd,n),i.cancel&&s.removeEventListener(i.cancel,this.onTouchEnd,n)}(t.simulateTouch&&!I.ios&&!I.android||t.simulateTouch&&!o.touch&&I.ios)&&(s.removeEventListener("mousedown",this.onTouchStart,!1),e.removeEventListener("mousemove",this.onTouchMove,r),e.removeEventListener("mouseup",this.onTouchEnd,!1))}(t.preventClicks||t.preventClicksPropagation)&&s.removeEventListener("click",this.onClick,!0),t.cssMode&&a.removeEventListener("scroll",this.onScroll),this.off(I.ios||I.android?"resize orientationchange observerUpdate":"resize observerUpdate",G)}},breakpoints:{setBreakpoint:function(){var e=this.activeIndex,t=this.initialized,i=this.loopedSlides;void 0===i&&(i=0);var s=this.params,a=this.$el,r=s.breakpoints;if(r&&(!r||0!==Object.keys(r).length)){var o=this.getBreakpoint(r);if(o&&this.currentBreakpoint!==o){var l=o in r?r[o]:void 0;l&&["slidesPerView","spaceBetween","slidesPerGroup","slidesPerGroupSkip","slidesPerColumn"].forEach((function(e){var t=l[e];void 0!==t&&(l[e]="slidesPerView"!==e||"AUTO"!==t&&"auto"!==t?"slidesPerView"===e?parseFloat(t):parseInt(t,10):"auto")}));var d=l||this.originalParams,h=s.slidesPerColumn>1,p=d.slidesPerColumn>1;h&&!p?a.removeClass(s.containerModifierClass+"multirow "+s.containerModifierClass+"multirow-column"):!h&&p&&(a.addClass(s.containerModifierClass+"multirow"),"column"===d.slidesPerColumnFill&&a.addClass(s.containerModifierClass+"multirow-column"));var c=d.direction&&d.direction!==s.direction,u=s.loop&&(d.slidesPerView!==s.slidesPerView||c);c&&t&&this.changeDirection(),n.extend(this.params,d),n.extend(this,{allowTouchMove:this.params.allowTouchMove,allowSlideNext:this.params.allowSlideNext,allowSlidePrev:this.params.allowSlidePrev}),this.currentBreakpoint=o,u&&t&&(this.loopDestroy(),this.loopCreate(),this.updateSlides(),this.slideTo(e-i+this.loopedSlides,0,!1)),this.emit("breakpoint",d)}}},getBreakpoint:function(e){if(e){var i=!1,s=Object.keys(e).map((function(e){if("string"==typeof e&&0===e.indexOf("@")){var i=parseFloat(e.substr(1));return{value:t.innerHeight*i,point:e}}return{value:e,point:e}}));s.sort((function(e,t){return parseInt(e.value,10)-parseInt(t.value,10)}));for(var a=0;a<s.length;a+=1){var r=s[a],n=r.point;r.value<=t.innerWidth&&(i=n)}return i||"max"}}},checkOverflow:{checkOverflow:function(){var e=this.params,t=this.isLocked,i=this.slides.length>0&&e.slidesOffsetBefore+e.spaceBetween*(this.slides.length-1)+this.slides[0].offsetWidth*this.slides.length;e.slidesOffsetBefore&&e.slidesOffsetAfter&&i?this.isLocked=i<=this.size:this.isLocked=1===this.snapGrid.length,this.allowSlideNext=!this.isLocked,this.allowSlidePrev=!this.isLocked,t!==this.isLocked&&this.emit(this.isLocked?"lock":"unlock"),t&&t!==this.isLocked&&(this.isEnd=!1,this.navigation.update())}},classes:{addClasses:function(){var e=this.classNames,t=this.params,i=this.rtl,s=this.$el,a=[];a.push("initialized"),a.push(t.direction),t.freeMode&&a.push("free-mode"),t.autoHeight&&a.push("autoheight"),i&&a.push("rtl"),t.slidesPerColumn>1&&(a.push("multirow"),"column"===t.slidesPerColumnFill&&a.push("multirow-column")),I.android&&a.push("android"),I.ios&&a.push("ios"),t.cssMode&&a.push("css-mode"),a.forEach((function(i){e.push(t.containerModifierClass+i)})),s.addClass(e.join(" "))},removeClasses:function(){var e=this.$el,t=this.classNames;e.removeClass(t.join(" "))}},images:{loadImage:function(e,i,s,a,r,n){var o;function l(){n&&n()}e.complete&&r?l():i?((o=new t.Image).onload=l,o.onerror=l,a&&(o.sizes=a),s&&(o.srcset=s),i&&(o.src=i)):l()},preloadImages:function(){var e=this;function t(){null!=e&&e&&!e.destroyed&&(void 0!==e.imagesLoaded&&(e.imagesLoaded+=1),e.imagesLoaded===e.imagesToLoad.length&&(e.params.updateOnImagesReady&&e.update(),e.emit("imagesReady")))}e.imagesToLoad=e.$el.find("img");for(var i=0;i<e.imagesToLoad.length;i+=1){var s=e.imagesToLoad[i];e.loadImage(s,s.currentSrc||s.getAttribute("src"),s.srcset||s.getAttribute("srcset"),s.sizes||s.getAttribute("sizes"),!0,t)}}}},F={},W=function(e){function t(){for(var i,a,r,l=[],d=arguments.length;d--;)l[d]=arguments[d];1===l.length&&l[0].constructor&&l[0].constructor===Object?r=l[0]:(a=(i=l)[0],r=i[1]),r||(r={}),r=n.extend({},r),a&&!r.el&&(r.el=a),e.call(this,r),Object.keys(Y).forEach((function(e){Object.keys(Y[e]).forEach((function(i){t.prototype[i]||(t.prototype[i]=Y[e][i])}))}));var h=this;void 0===h.modules&&(h.modules={}),Object.keys(h.modules).forEach((function(e){var t=h.modules[e];if(t.params){var i=Object.keys(t.params)[0],s=t.params[i];if("object"!=typeof s||null===s)return;if(!(i in r)||!("enabled"in s))return;!0===r[i]&&(r[i]={enabled:!0}),"object"!=typeof r[i]||"enabled"in r[i]||(r[i].enabled=!0),r[i]||(r[i]={enabled:!1})}}));var p=n.extend({},V);h.useModulesParams(p),h.params=n.extend({},p,F,r),h.originalParams=n.extend({},h.params),h.passedParams=n.extend({},r),h.$=s;var c=s(h.params.el);if(a=c[0]){if(c.length>1){var u=[];return c.each((function(e,i){var s=n.extend({},r,{el:i});u.push(new t(s))})),u}var v,f,m;return a.swiper=h,c.data("swiper",h),a&&a.shadowRoot&&a.shadowRoot.querySelector?(v=s(a.shadowRoot.querySelector("."+h.params.wrapperClass))).children=function(e){return c.children(e)}:v=c.children("."+h.params.wrapperClass),n.extend(h,{$el:c,el:a,$wrapperEl:v,wrapperEl:v[0],classNames:[],slides:s(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:function(){return"horizontal"===h.params.direction},isVertical:function(){return"vertical"===h.params.direction},rtl:"rtl"===a.dir.toLowerCase()||"rtl"===c.css("direction"),rtlTranslate:"horizontal"===h.params.direction&&("rtl"===a.dir.toLowerCase()||"rtl"===c.css("direction")),wrongRTL:"-webkit-box"===v.css("display"),activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:h.params.allowSlideNext,allowSlidePrev:h.params.allowSlidePrev,touchEvents:(f=["touchstart","touchmove","touchend","touchcancel"],m=["mousedown","mousemove","mouseup"],o.pointerEvents&&(m=["pointerdown","pointermove","pointerup"]),h.touchEventsTouch={start:f[0],move:f[1],end:f[2],cancel:f[3]},h.touchEventsDesktop={start:m[0],move:m[1],end:m[2]},o.touch||!h.params.simulateTouch?h.touchEventsTouch:h.touchEventsDesktop),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,formElements:"input, select, option, textarea, button, video, label",lastClickTime:n.now(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:h.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),h.useModules(),h.params.init&&h.init(),h}}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var i={extendedDefaults:{configurable:!0},defaults:{configurable:!0},Class:{configurable:!0},$:{configurable:!0}};return t.prototype.slidesPerViewDynamic=function(){var e=this.params,t=this.slides,i=this.slidesGrid,s=this.size,a=this.activeIndex,r=1;if(e.centeredSlides){for(var n,o=t[a].swiperSlideSize,l=a+1;l<t.length;l+=1)t[l]&&!n&&(r+=1,(o+=t[l].swiperSlideSize)>s&&(n=!0));for(var d=a-1;d>=0;d-=1)t[d]&&!n&&(r+=1,(o+=t[d].swiperSlideSize)>s&&(n=!0))}else for(var h=a+1;h<t.length;h+=1)i[h]-i[a]<s&&(r+=1);return r},t.prototype.update=function(){var e=this;if(e&&!e.destroyed){var t=e.snapGrid,i=e.params;i.breakpoints&&e.setBreakpoint(),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.params.freeMode?(s(),e.params.autoHeight&&e.updateAutoHeight()):(("auto"===e.params.slidesPerView||e.params.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0))||s(),i.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}function s(){var t=e.rtlTranslate?-1*e.translate:e.translate,i=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(i),e.updateActiveIndex(),e.updateSlidesClasses()}},t.prototype.changeDirection=function(e,t){void 0===t&&(t=!0);var i=this.params.direction;return e||(e="horizontal"===i?"vertical":"horizontal"),e===i||"horizontal"!==e&&"vertical"!==e||(this.$el.removeClass(""+this.params.containerModifierClass+i).addClass(""+this.params.containerModifierClass+e),this.params.direction=e,this.slides.each((function(t,i){"vertical"===e?i.style.width="":i.style.height=""})),this.emit("changeDirection"),t&&this.update()),this},t.prototype.init=function(){this.initialized||(this.emit("beforeInit"),this.params.breakpoints&&this.setBreakpoint(),this.addClasses(),this.params.loop&&this.loopCreate(),this.updateSize(),this.updateSlides(),this.params.watchOverflow&&this.checkOverflow(),this.params.grabCursor&&this.setGrabCursor(),this.params.preloadImages&&this.preloadImages(),this.params.loop?this.slideTo(this.params.initialSlide+this.loopedSlides,0,this.params.runCallbacksOnInit):this.slideTo(this.params.initialSlide,0,this.params.runCallbacksOnInit),this.attachEvents(),this.initialized=!0,this.emit("init"))},t.prototype.destroy=function(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0);var i=this,s=i.params,a=i.$el,r=i.$wrapperEl,o=i.slides;return void 0===i.params||i.destroyed||(i.emit("beforeDestroy"),i.initialized=!1,i.detachEvents(),s.loop&&i.loopDestroy(),t&&(i.removeClasses(),a.removeAttr("style"),r.removeAttr("style"),o&&o.length&&o.removeClass([s.slideVisibleClass,s.slideActiveClass,s.slideNextClass,s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),i.emit("destroy"),Object.keys(i.eventsListeners).forEach((function(e){i.off(e)})),!1!==e&&(i.$el[0].swiper=null,i.$el.data("swiper",null),n.deleteProps(i)),i.destroyed=!0),null},t.extendDefaults=function(e){n.extend(F,e)},i.extendedDefaults.get=function(){return F},i.defaults.get=function(){return V},i.Class.get=function(){return e},i.$.get=function(){return s},Object.defineProperties(t,i),t}(l),R={name:"device",proto:{device:I},static:{device:I}},q={name:"support",proto:{support:o},static:{support:o}},j={isEdge:!!t.navigator.userAgent.match(/Edge/g),isSafari:function(){var e=t.navigator.userAgent.toLowerCase();return e.indexOf("safari")>=0&&e.indexOf("chrome")<0&&e.indexOf("android")<0}(),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)},K={name:"browser",proto:{browser:j},static:{browser:j}},U={name:"resize",create:function(){var e=this;n.extend(e,{resize:{resizeHandler:function(){e&&!e.destroyed&&e.initialized&&(e.emit("beforeResize"),e.emit("resize"))},orientationChangeHandler:function(){e&&!e.destroyed&&e.initialized&&e.emit("orientationchange")}}})},on:{init:function(){t.addEventListener("resize",this.resize.resizeHandler),t.addEventListener("orientationchange",this.resize.orientationChangeHandler)},destroy:function(){t.removeEventListener("resize",this.resize.resizeHandler),t.removeEventListener("orientationchange",this.resize.orientationChangeHandler)}}},_={func:t.MutationObserver||t.WebkitMutationObserver,attach:function(e,i){void 0===i&&(i={});var s=this,a=new(0,_.func)((function(e){if(1!==e.length){var i=function(){s.emit("observerUpdate",e[0])};t.requestAnimationFrame?t.requestAnimationFrame(i):t.setTimeout(i,0)}else s.emit("observerUpdate",e[0])}));a.observe(e,{attributes:void 0===i.attributes||i.attributes,childList:void 0===i.childList||i.childList,characterData:void 0===i.characterData||i.characterData}),s.observer.observers.push(a)},init:function(){if(o.observer&&this.params.observer){if(this.params.observeParents)for(var e=this.$el.parents(),t=0;t<e.length;t+=1)this.observer.attach(e[t]);this.observer.attach(this.$el[0],{childList:this.params.observeSlideChildren}),this.observer.attach(this.$wrapperEl[0],{attributes:!1})}},destroy:function(){this.observer.observers.forEach((function(e){e.disconnect()})),this.observer.observers=[]}},Z={name:"observer",params:{observer:!1,observeParents:!1,observeSlideChildren:!1},create:function(){n.extend(this,{observer:{init:_.init.bind(this),attach:_.attach.bind(this),destroy:_.destroy.bind(this),observers:[]}})},on:{init:function(){this.observer.init()},destroy:function(){this.observer.destroy()}}},Q={update:function(e){var t=this,i=t.params,s=i.slidesPerView,a=i.slidesPerGroup,r=i.centeredSlides,o=t.params.virtual,l=o.addSlidesBefore,d=o.addSlidesAfter,h=t.virtual,p=h.from,c=h.to,u=h.slides,v=h.slidesGrid,f=h.renderSlide,m=h.offset;t.updateActiveIndex();var g,b,w,y=t.activeIndex||0;g=t.rtlTranslate?"right":t.isHorizontal()?"left":"top",r?(b=Math.floor(s/2)+a+l,w=Math.floor(s/2)+a+d):(b=s+(a-1)+l,w=a+d);var x=Math.max((y||0)-w,0),T=Math.min((y||0)+b,u.length-1),E=(t.slidesGrid[x]||0)-(t.slidesGrid[0]||0);function S(){t.updateSlides(),t.updateProgress(),t.updateSlidesClasses(),t.lazy&&t.params.lazy.enabled&&t.lazy.load()}if(n.extend(t.virtual,{from:x,to:T,offset:E,slidesGrid:t.slidesGrid}),p===x&&c===T&&!e)return t.slidesGrid!==v&&E!==m&&t.slides.css(g,E+"px"),void t.updateProgress();if(t.params.virtual.renderExternal)return t.params.virtual.renderExternal.call(t,{offset:E,from:x,to:T,slides:function(){for(var e=[],t=x;t<=T;t+=1)e.push(u[t]);return e}()}),void S();var C=[],M=[];if(e)t.$wrapperEl.find("."+t.params.slideClass).remove();else for(var P=p;P<=c;P+=1)(P<x||P>T)&&t.$wrapperEl.find("."+t.params.slideClass+'[data-swiper-slide-index="'+P+'"]').remove();for(var z=0;z<u.length;z+=1)z>=x&&z<=T&&(void 0===c||e?M.push(z):(z>c&&M.push(z),z<p&&C.push(z)));M.forEach((function(e){t.$wrapperEl.append(f(u[e],e))})),C.sort((function(e,t){return t-e})).forEach((function(e){t.$wrapperEl.prepend(f(u[e],e))})),t.$wrapperEl.children(".swiper-slide").css(g,E+"px"),S()},renderSlide:function(e,t){var i=this.params.virtual;if(i.cache&&this.virtual.cache[t])return this.virtual.cache[t];var a=i.renderSlide?s(i.renderSlide.call(this,e,t)):s('<div class="'+this.params.slideClass+'" data-swiper-slide-index="'+t+'">'+e+"</div>");return a.attr("data-swiper-slide-index")||a.attr("data-swiper-slide-index",t),i.cache&&(this.virtual.cache[t]=a),a},appendSlide:function(e){if("object"==typeof e&&"length"in e)for(var t=0;t<e.length;t+=1)e[t]&&this.virtual.slides.push(e[t]);else this.virtual.slides.push(e);this.virtual.update(!0)},prependSlide:function(e){var t=this.activeIndex,i=t+1,s=1;if(Array.isArray(e)){for(var a=0;a<e.length;a+=1)e[a]&&this.virtual.slides.unshift(e[a]);i=t+e.length,s=e.length}else this.virtual.slides.unshift(e);if(this.params.virtual.cache){var r=this.virtual.cache,n={};Object.keys(r).forEach((function(e){var t=r[e],i=t.attr("data-swiper-slide-index");i&&t.attr("data-swiper-slide-index",parseInt(i,10)+1),n[parseInt(e,10)+s]=t})),this.virtual.cache=n}this.virtual.update(!0),this.slideTo(i,0)},removeSlide:function(e){if(null!=e){var t=this.activeIndex;if(Array.isArray(e))for(var i=e.length-1;i>=0;i-=1)this.virtual.slides.splice(e[i],1),this.params.virtual.cache&&delete this.virtual.cache[e[i]],e[i]<t&&(t-=1),t=Math.max(t,0);else this.virtual.slides.splice(e,1),this.params.virtual.cache&&delete this.virtual.cache[e],e<t&&(t-=1),t=Math.max(t,0);this.virtual.update(!0),this.slideTo(t,0)}},removeAllSlides:function(){this.virtual.slides=[],this.params.virtual.cache&&(this.virtual.cache={}),this.virtual.update(!0),this.slideTo(0,0)}},J={name:"virtual",params:{virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,addSlidesBefore:0,addSlidesAfter:0}},create:function(){n.extend(this,{virtual:{update:Q.update.bind(this),appendSlide:Q.appendSlide.bind(this),prependSlide:Q.prependSlide.bind(this),removeSlide:Q.removeSlide.bind(this),removeAllSlides:Q.removeAllSlides.bind(this),renderSlide:Q.renderSlide.bind(this),slides:this.params.virtual.slides,cache:{}}})},on:{beforeInit:function(){if(this.params.virtual.enabled){this.classNames.push(this.params.containerModifierClass+"virtual");var e={watchSlidesProgress:!0};n.extend(this.params,e),n.extend(this.originalParams,e),this.params.initialSlide||this.virtual.update()}},setTranslate:function(){this.params.virtual.enabled&&this.virtual.update()}}},ee={handle:function(i){var s=this.rtlTranslate,a=i;a.originalEvent&&(a=a.originalEvent);var r=a.keyCode||a.charCode;if(!this.allowSlideNext&&(this.isHorizontal()&&39===r||this.isVertical()&&40===r||34===r))return!1;if(!this.allowSlidePrev&&(this.isHorizontal()&&37===r||this.isVertical()&&38===r||33===r))return!1;if(!(a.shiftKey||a.altKey||a.ctrlKey||a.metaKey||e.activeElement&&e.activeElement.nodeName&&("input"===e.activeElement.nodeName.toLowerCase()||"textarea"===e.activeElement.nodeName.toLowerCase()))){if(this.params.keyboard.onlyInViewport&&(33===r||34===r||37===r||39===r||38===r||40===r)){var n=!1;if(this.$el.parents("."+this.params.slideClass).length>0&&0===this.$el.parents("."+this.params.slideActiveClass).length)return;var o=t.innerWidth,l=t.innerHeight,d=this.$el.offset();s&&(d.left-=this.$el[0].scrollLeft);for(var h=[[d.left,d.top],[d.left+this.width,d.top],[d.left,d.top+this.height],[d.left+this.width,d.top+this.height]],p=0;p<h.length;p+=1){var c=h[p];c[0]>=0&&c[0]<=o&&c[1]>=0&&c[1]<=l&&(n=!0)}if(!n)return}this.isHorizontal()?(33!==r&&34!==r&&37!==r&&39!==r||(a.preventDefault?a.preventDefault():a.returnValue=!1),(34!==r&&39!==r||s)&&(33!==r&&37!==r||!s)||this.slideNext(),(33!==r&&37!==r||s)&&(34!==r&&39!==r||!s)||this.slidePrev()):(33!==r&&34!==r&&38!==r&&40!==r||(a.preventDefault?a.preventDefault():a.returnValue=!1),34!==r&&40!==r||this.slideNext(),33!==r&&38!==r||this.slidePrev()),this.emit("keyPress",r)}},enable:function(){this.keyboard.enabled||(s(e).on("keydown",this.keyboard.handle),this.keyboard.enabled=!0)},disable:function(){this.keyboard.enabled&&(s(e).off("keydown",this.keyboard.handle),this.keyboard.enabled=!1)}},te={name:"keyboard",params:{keyboard:{enabled:!1,onlyInViewport:!0}},create:function(){n.extend(this,{keyboard:{enabled:!1,enable:ee.enable.bind(this),disable:ee.disable.bind(this),handle:ee.handle.bind(this)}})},on:{init:function(){this.params.keyboard.enabled&&this.keyboard.enable()},destroy:function(){this.keyboard.enabled&&this.keyboard.disable()}}};var ie={lastScrollTime:n.now(),lastEventBeforeSnap:void 0,recentWheelEvents:[],event:function(){return t.navigator.userAgent.indexOf("firefox")>-1?"DOMMouseScroll":function(){var t="onwheel"in e;if(!t){var i=e.createElement("div");i.setAttribute("onwheel","return;"),t="function"==typeof i.onwheel}return!t&&e.implementation&&e.implementation.hasFeature&&!0!==e.implementation.hasFeature("","")&&(t=e.implementation.hasFeature("Events.wheel","3.0")),t}()?"wheel":"mousewheel"},normalize:function(e){var t=0,i=0,s=0,a=0;return"detail"in e&&(i=e.detail),"wheelDelta"in e&&(i=-e.wheelDelta/120),"wheelDeltaY"in e&&(i=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=i,i=0),s=10*t,a=10*i,"deltaY"in e&&(a=e.deltaY),"deltaX"in e&&(s=e.deltaX),e.shiftKey&&!s&&(s=a,a=0),(s||a)&&e.deltaMode&&(1===e.deltaMode?(s*=40,a*=40):(s*=800,a*=800)),s&&!t&&(t=s<1?-1:1),a&&!i&&(i=a<1?-1:1),{spinX:t,spinY:i,pixelX:s,pixelY:a}},handleMouseEnter:function(){this.mouseEntered=!0},handleMouseLeave:function(){this.mouseEntered=!1},handle:function(e){var t=e,i=this,a=i.params.mousewheel;i.params.cssMode&&t.preventDefault();var r=i.$el;if("container"!==i.params.mousewheel.eventsTarged&&(r=s(i.params.mousewheel.eventsTarged)),!i.mouseEntered&&!r[0].contains(t.target)&&!a.releaseOnEdges)return!0;t.originalEvent&&(t=t.originalEvent);var o=0,l=i.rtlTranslate?-1:1,d=ie.normalize(t);if(a.forceToAxis)if(i.isHorizontal()){if(!(Math.abs(d.pixelX)>Math.abs(d.pixelY)))return!0;o=d.pixelX*l}else{if(!(Math.abs(d.pixelY)>Math.abs(d.pixelX)))return!0;o=d.pixelY}else o=Math.abs(d.pixelX)>Math.abs(d.pixelY)?-d.pixelX*l:-d.pixelY;if(0===o)return!0;if(a.invert&&(o=-o),i.params.freeMode){var h={time:n.now(),delta:Math.abs(o),direction:Math.sign(o)},p=i.mousewheel.lastEventBeforeSnap,c=p&&h.time<p.time+500&&h.delta<=p.delta&&h.direction===p.direction;if(!c){i.mousewheel.lastEventBeforeSnap=void 0,i.params.loop&&i.loopFix();var u=i.getTranslate()+o*a.sensitivity,v=i.isBeginning,f=i.isEnd;if(u>=i.minTranslate()&&(u=i.minTranslate()),u<=i.maxTranslate()&&(u=i.maxTranslate()),i.setTransition(0),i.setTranslate(u),i.updateProgress(),i.updateActiveIndex(),i.updateSlidesClasses(),(!v&&i.isBeginning||!f&&i.isEnd)&&i.updateSlidesClasses(),i.params.freeModeSticky){clearTimeout(i.mousewheel.timeout),i.mousewheel.timeout=void 0;var m=i.mousewheel.recentWheelEvents;m.length>=15&&m.shift();var g=m.length?m[m.length-1]:void 0,b=m[0];if(m.push(h),g&&(h.delta>g.delta||h.direction!==g.direction))m.splice(0);else if(m.length>=15&&h.time-b.time<500&&b.delta-h.delta>=1&&h.delta<=6){var w=o>0?.8:.2;i.mousewheel.lastEventBeforeSnap=h,m.splice(0),i.mousewheel.timeout=n.nextTick((function(){i.slideToClosest(i.params.speed,!0,void 0,w)}),0)}i.mousewheel.timeout||(i.mousewheel.timeout=n.nextTick((function(){i.mousewheel.lastEventBeforeSnap=h,m.splice(0),i.slideToClosest(i.params.speed,!0,void 0,.5)}),500))}if(c||i.emit("scroll",t),i.params.autoplay&&i.params.autoplayDisableOnInteraction&&i.autoplay.stop(),u===i.minTranslate()||u===i.maxTranslate())return!0}}else{var y={time:n.now(),delta:Math.abs(o),direction:Math.sign(o),raw:e},x=i.mousewheel.recentWheelEvents;x.length>=2&&x.shift();var T=x.length?x[x.length-1]:void 0;if(x.push(y),T?(y.direction!==T.direction||y.delta>T.delta)&&i.mousewheel.animateSlider(y):i.mousewheel.animateSlider(y),i.mousewheel.releaseScroll(y))return!0}return t.preventDefault?t.preventDefault():t.returnValue=!1,!1},animateSlider:function(e){return e.delta>=6&&n.now()-this.mousewheel.lastScrollTime<60||(e.direction<0?this.isEnd&&!this.params.loop||this.animating||(this.slideNext(),this.emit("scroll",e.raw)):this.isBeginning&&!this.params.loop||this.animating||(this.slidePrev(),this.emit("scroll",e.raw)),this.mousewheel.lastScrollTime=(new t.Date).getTime(),!1)},releaseScroll:function(e){var t=this.params.mousewheel;if(e.direction<0){if(this.isEnd&&!this.params.loop&&t.releaseOnEdges)return!0}else if(this.isBeginning&&!this.params.loop&&t.releaseOnEdges)return!0;return!1},enable:function(){var e=ie.event();if(this.params.cssMode)return this.wrapperEl.removeEventListener(e,this.mousewheel.handle),!0;if(!e)return!1;if(this.mousewheel.enabled)return!1;var t=this.$el;return"container"!==this.params.mousewheel.eventsTarged&&(t=s(this.params.mousewheel.eventsTarged)),t.on("mouseenter",this.mousewheel.handleMouseEnter),t.on("mouseleave",this.mousewheel.handleMouseLeave),t.on(e,this.mousewheel.handle),this.mousewheel.enabled=!0,!0},disable:function(){var e=ie.event();if(this.params.cssMode)return this.wrapperEl.addEventListener(e,this.mousewheel.handle),!0;if(!e)return!1;if(!this.mousewheel.enabled)return!1;var t=this.$el;return"container"!==this.params.mousewheel.eventsTarged&&(t=s(this.params.mousewheel.eventsTarged)),t.off(e,this.mousewheel.handle),this.mousewheel.enabled=!1,!0}},se={update:function(){var e=this.params.navigation;if(!this.params.loop){var t=this.navigation,i=t.$nextEl,s=t.$prevEl;s&&s.length>0&&(this.isBeginning?s.addClass(e.disabledClass):s.removeClass(e.disabledClass),s[this.params.watchOverflow&&this.isLocked?"addClass":"removeClass"](e.lockClass)),i&&i.length>0&&(this.isEnd?i.addClass(e.disabledClass):i.removeClass(e.disabledClass),i[this.params.watchOverflow&&this.isLocked?"addClass":"removeClass"](e.lockClass))}},onPrevClick:function(e){e.preventDefault(),this.isBeginning&&!this.params.loop||this.slidePrev()},onNextClick:function(e){e.preventDefault(),this.isEnd&&!this.params.loop||this.slideNext()},init:function(){var e,t,i=this.params.navigation;(i.nextEl||i.prevEl)&&(i.nextEl&&(e=s(i.nextEl),this.params.uniqueNavElements&&"string"==typeof i.nextEl&&e.length>1&&1===this.$el.find(i.nextEl).length&&(e=this.$el.find(i.nextEl))),i.prevEl&&(t=s(i.prevEl),this.params.uniqueNavElements&&"string"==typeof i.prevEl&&t.length>1&&1===this.$el.find(i.prevEl).length&&(t=this.$el.find(i.prevEl))),e&&e.length>0&&e.on("click",this.navigation.onNextClick),t&&t.length>0&&t.on("click",this.navigation.onPrevClick),n.extend(this.navigation,{$nextEl:e,nextEl:e&&e[0],$prevEl:t,prevEl:t&&t[0]}))},destroy:function(){var e=this.navigation,t=e.$nextEl,i=e.$prevEl;t&&t.length&&(t.off("click",this.navigation.onNextClick),t.removeClass(this.params.navigation.disabledClass)),i&&i.length&&(i.off("click",this.navigation.onPrevClick),i.removeClass(this.params.navigation.disabledClass))}},ae={update:function(){var e=this.rtl,t=this.params.pagination;if(t.el&&this.pagination.el&&this.pagination.$el&&0!==this.pagination.$el.length){var i,a=this.virtual&&this.params.virtual.enabled?this.virtual.slides.length:this.slides.length,r=this.pagination.$el,n=this.params.loop?Math.ceil((a-2*this.loopedSlides)/this.params.slidesPerGroup):this.snapGrid.length;if(this.params.loop?((i=Math.ceil((this.activeIndex-this.loopedSlides)/this.params.slidesPerGroup))>a-1-2*this.loopedSlides&&(i-=a-2*this.loopedSlides),i>n-1&&(i-=n),i<0&&"bullets"!==this.params.paginationType&&(i=n+i)):i=void 0!==this.snapIndex?this.snapIndex:this.activeIndex||0,"bullets"===t.type&&this.pagination.bullets&&this.pagination.bullets.length>0){var o,l,d,h=this.pagination.bullets;if(t.dynamicBullets&&(this.pagination.bulletSize=h.eq(0)[this.isHorizontal()?"outerWidth":"outerHeight"](!0),r.css(this.isHorizontal()?"width":"height",this.pagination.bulletSize*(t.dynamicMainBullets+4)+"px"),t.dynamicMainBullets>1&&void 0!==this.previousIndex&&(this.pagination.dynamicBulletIndex+=i-this.previousIndex,this.pagination.dynamicBulletIndex>t.dynamicMainBullets-1?this.pagination.dynamicBulletIndex=t.dynamicMainBullets-1:this.pagination.dynamicBulletIndex<0&&(this.pagination.dynamicBulletIndex=0)),o=i-this.pagination.dynamicBulletIndex,d=((l=o+(Math.min(h.length,t.dynamicMainBullets)-1))+o)/2),h.removeClass(t.bulletActiveClass+" "+t.bulletActiveClass+"-next "+t.bulletActiveClass+"-next-next "+t.bulletActiveClass+"-prev "+t.bulletActiveClass+"-prev-prev "+t.bulletActiveClass+"-main"),r.length>1)h.each((function(e,a){var r=s(a),n=r.index();n===i&&r.addClass(t.bulletActiveClass),t.dynamicBullets&&(n>=o&&n<=l&&r.addClass(t.bulletActiveClass+"-main"),n===o&&r.prev().addClass(t.bulletActiveClass+"-prev").prev().addClass(t.bulletActiveClass+"-prev-prev"),n===l&&r.next().addClass(t.bulletActiveClass+"-next").next().addClass(t.bulletActiveClass+"-next-next"))}));else{var p=h.eq(i),c=p.index();if(p.addClass(t.bulletActiveClass),t.dynamicBullets){for(var u=h.eq(o),v=h.eq(l),f=o;f<=l;f+=1)h.eq(f).addClass(t.bulletActiveClass+"-main");if(this.params.loop)if(c>=h.length-t.dynamicMainBullets){for(var m=t.dynamicMainBullets;m>=0;m-=1)h.eq(h.length-m).addClass(t.bulletActiveClass+"-main");h.eq(h.length-t.dynamicMainBullets-1).addClass(t.bulletActiveClass+"-prev")}else u.prev().addClass(t.bulletActiveClass+"-prev").prev().addClass(t.bulletActiveClass+"-prev-prev"),v.next().addClass(t.bulletActiveClass+"-next").next().addClass(t.bulletActiveClass+"-next-next");else u.prev().addClass(t.bulletActiveClass+"-prev").prev().addClass(t.bulletActiveClass+"-prev-prev"),v.next().addClass(t.bulletActiveClass+"-next").next().addClass(t.bulletActiveClass+"-next-next")}}if(t.dynamicBullets){var g=Math.min(h.length,t.dynamicMainBullets+4),b=(this.pagination.bulletSize*g-this.pagination.bulletSize)/2-d*this.pagination.bulletSize,w=e?"right":"left";h.css(this.isHorizontal()?w:"top",b+"px")}}if("fraction"===t.type&&(r.find("."+t.currentClass).text(t.formatFractionCurrent(i+1)),r.find("."+t.totalClass).text(t.formatFractionTotal(n))),"progressbar"===t.type){var y;y=t.progressbarOpposite?this.isHorizontal()?"vertical":"horizontal":this.isHorizontal()?"horizontal":"vertical";var x=(i+1)/n,T=1,E=1;"horizontal"===y?T=x:E=x,r.find("."+t.progressbarFillClass).transform("translate3d(0,0,0) scaleX("+T+") scaleY("+E+")").transition(this.params.speed)}"custom"===t.type&&t.renderCustom?(r.html(t.renderCustom(this,i+1,n)),this.emit("paginationRender",this,r[0])):this.emit("paginationUpdate",this,r[0]),r[this.params.watchOverflow&&this.isLocked?"addClass":"removeClass"](t.lockClass)}},render:function(){var e=this.params.pagination;if(e.el&&this.pagination.el&&this.pagination.$el&&0!==this.pagination.$el.length){var t=this.virtual&&this.params.virtual.enabled?this.virtual.slides.length:this.slides.length,i=this.pagination.$el,s="";if("bullets"===e.type){for(var a=this.params.loop?Math.ceil((t-2*this.loopedSlides)/this.params.slidesPerGroup):this.snapGrid.length,r=0;r<a;r+=1)e.renderBullet?s+=e.renderBullet.call(this,r,e.bulletClass):s+="<"+e.bulletElement+' class="'+e.bulletClass+'"></'+e.bulletElement+">";i.html(s),this.pagination.bullets=i.find("."+e.bulletClass)}"fraction"===e.type&&(s=e.renderFraction?e.renderFraction.call(this,e.currentClass,e.totalClass):'<span class="'+e.currentClass+'"></span> / <span class="'+e.totalClass+'"></span>',i.html(s)),"progressbar"===e.type&&(s=e.renderProgressbar?e.renderProgressbar.call(this,e.progressbarFillClass):'<span class="'+e.progressbarFillClass+'"></span>',i.html(s)),"custom"!==e.type&&this.emit("paginationRender",this.pagination.$el[0])}},init:function(){var e=this,t=e.params.pagination;if(t.el){var i=s(t.el);0!==i.length&&(e.params.uniqueNavElements&&"string"==typeof t.el&&i.length>1&&1===e.$el.find(t.el).length&&(i=e.$el.find(t.el)),"bullets"===t.type&&t.clickable&&i.addClass(t.clickableClass),i.addClass(t.modifierClass+t.type),"bullets"===t.type&&t.dynamicBullets&&(i.addClass(""+t.modifierClass+t.type+"-dynamic"),e.pagination.dynamicBulletIndex=0,t.dynamicMainBullets<1&&(t.dynamicMainBullets=1)),"progressbar"===t.type&&t.progressbarOpposite&&i.addClass(t.progressbarOppositeClass),t.clickable&&i.on("click","."+t.bulletClass,(function(t){t.preventDefault();var i=s(this).index()*e.params.slidesPerGroup;e.params.loop&&(i+=e.loopedSlides),e.slideTo(i)})),n.extend(e.pagination,{$el:i,el:i[0]}))}},destroy:function(){var e=this.params.pagination;if(e.el&&this.pagination.el&&this.pagination.$el&&0!==this.pagination.$el.length){var t=this.pagination.$el;t.removeClass(e.hiddenClass),t.removeClass(e.modifierClass+e.type),this.pagination.bullets&&this.pagination.bullets.removeClass(e.bulletActiveClass),e.clickable&&t.off("click","."+e.bulletClass)}}},re={setTranslate:function(){if(this.params.scrollbar.el&&this.scrollbar.el){var e=this.scrollbar,t=this.rtlTranslate,i=this.progress,s=e.dragSize,a=e.trackSize,r=e.$dragEl,n=e.$el,o=this.params.scrollbar,l=s,d=(a-s)*i;t?(d=-d)>0?(l=s-d,d=0):-d+s>a&&(l=a+d):d<0?(l=s+d,d=0):d+s>a&&(l=a-d),this.isHorizontal()?(r.transform("translate3d("+d+"px, 0, 0)"),r[0].style.width=l+"px"):(r.transform("translate3d(0px, "+d+"px, 0)"),r[0].style.height=l+"px"),o.hide&&(clearTimeout(this.scrollbar.timeout),n[0].style.opacity=1,this.scrollbar.timeout=setTimeout((function(){n[0].style.opacity=0,n.transition(400)}),1e3))}},setTransition:function(e){this.params.scrollbar.el&&this.scrollbar.el&&this.scrollbar.$dragEl.transition(e)},updateSize:function(){if(this.params.scrollbar.el&&this.scrollbar.el){var e=this.scrollbar,t=e.$dragEl,i=e.$el;t[0].style.width="",t[0].style.height="";var s,a=this.isHorizontal()?i[0].offsetWidth:i[0].offsetHeight,r=this.size/this.virtualSize,o=r*(a/this.size);s="auto"===this.params.scrollbar.dragSize?a*r:parseInt(this.params.scrollbar.dragSize,10),this.isHorizontal()?t[0].style.width=s+"px":t[0].style.height=s+"px",i[0].style.display=r>=1?"none":"",this.params.scrollbar.hide&&(i[0].style.opacity=0),n.extend(e,{trackSize:a,divider:r,moveDivider:o,dragSize:s}),e.$el[this.params.watchOverflow&&this.isLocked?"addClass":"removeClass"](this.params.scrollbar.lockClass)}},getPointerPosition:function(e){return this.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].clientX:e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].clientY:e.clientY},setDragPosition:function(e){var t,i=this.scrollbar,s=this.rtlTranslate,a=i.$el,r=i.dragSize,n=i.trackSize,o=i.dragStartPos;t=(i.getPointerPosition(e)-a.offset()[this.isHorizontal()?"left":"top"]-(null!==o?o:r/2))/(n-r),t=Math.max(Math.min(t,1),0),s&&(t=1-t);var l=this.minTranslate()+(this.maxTranslate()-this.minTranslate())*t;this.updateProgress(l),this.setTranslate(l),this.updateActiveIndex(),this.updateSlidesClasses()},onDragStart:function(e){var t=this.params.scrollbar,i=this.scrollbar,s=this.$wrapperEl,a=i.$el,r=i.$dragEl;this.scrollbar.isTouched=!0,this.scrollbar.dragStartPos=e.target===r[0]||e.target===r?i.getPointerPosition(e)-e.target.getBoundingClientRect()[this.isHorizontal()?"left":"top"]:null,e.preventDefault(),e.stopPropagation(),s.transition(100),r.transition(100),i.setDragPosition(e),clearTimeout(this.scrollbar.dragTimeout),a.transition(0),t.hide&&a.css("opacity",1),this.params.cssMode&&this.$wrapperEl.css("scroll-snap-type","none"),this.emit("scrollbarDragStart",e)},onDragMove:function(e){var t=this.scrollbar,i=this.$wrapperEl,s=t.$el,a=t.$dragEl;this.scrollbar.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,t.setDragPosition(e),i.transition(0),s.transition(0),a.transition(0),this.emit("scrollbarDragMove",e))},onDragEnd:function(e){var t=this.params.scrollbar,i=this.scrollbar,s=this.$wrapperEl,a=i.$el;this.scrollbar.isTouched&&(this.scrollbar.isTouched=!1,this.params.cssMode&&(this.$wrapperEl.css("scroll-snap-type",""),s.transition("")),t.hide&&(clearTimeout(this.scrollbar.dragTimeout),this.scrollbar.dragTimeout=n.nextTick((function(){a.css("opacity",0),a.transition(400)}),1e3)),this.emit("scrollbarDragEnd",e),t.snapOnRelease&&this.slideToClosest())},enableDraggable:function(){if(this.params.scrollbar.el){var t=this.scrollbar,i=this.touchEventsTouch,s=this.touchEventsDesktop,a=this.params,r=t.$el[0],n=!(!o.passiveListener||!a.passiveListeners)&&{passive:!1,capture:!1},l=!(!o.passiveListener||!a.passiveListeners)&&{passive:!0,capture:!1};o.touch?(r.addEventListener(i.start,this.scrollbar.onDragStart,n),r.addEventListener(i.move,this.scrollbar.onDragMove,n),r.addEventListener(i.end,this.scrollbar.onDragEnd,l)):(r.addEventListener(s.start,this.scrollbar.onDragStart,n),e.addEventListener(s.move,this.scrollbar.onDragMove,n),e.addEventListener(s.end,this.scrollbar.onDragEnd,l))}},disableDraggable:function(){if(this.params.scrollbar.el){var t=this.scrollbar,i=this.touchEventsTouch,s=this.touchEventsDesktop,a=this.params,r=t.$el[0],n=!(!o.passiveListener||!a.passiveListeners)&&{passive:!1,capture:!1},l=!(!o.passiveListener||!a.passiveListeners)&&{passive:!0,capture:!1};o.touch?(r.removeEventListener(i.start,this.scrollbar.onDragStart,n),r.removeEventListener(i.move,this.scrollbar.onDragMove,n),r.removeEventListener(i.end,this.scrollbar.onDragEnd,l)):(r.removeEventListener(s.start,this.scrollbar.onDragStart,n),e.removeEventListener(s.move,this.scrollbar.onDragMove,n),e.removeEventListener(s.end,this.scrollbar.onDragEnd,l))}},init:function(){if(this.params.scrollbar.el){var e=this.scrollbar,t=this.$el,i=this.params.scrollbar,a=s(i.el);this.params.uniqueNavElements&&"string"==typeof i.el&&a.length>1&&1===t.find(i.el).length&&(a=t.find(i.el));var r=a.find("."+this.params.scrollbar.dragClass);0===r.length&&(r=s('<div class="'+this.params.scrollbar.dragClass+'"></div>'),a.append(r)),n.extend(e,{$el:a,el:a[0],$dragEl:r,dragEl:r[0]}),i.draggable&&e.enableDraggable()}},destroy:function(){this.scrollbar.disableDraggable()}},ne={setTransform:function(e,t){var i=this.rtl,a=s(e),r=i?-1:1,n=a.attr("data-swiper-parallax")||"0",o=a.attr("data-swiper-parallax-x"),l=a.attr("data-swiper-parallax-y"),d=a.attr("data-swiper-parallax-scale"),h=a.attr("data-swiper-parallax-opacity");if(o||l?(o=o||"0",l=l||"0"):this.isHorizontal()?(o=n,l="0"):(l=n,o="0"),o=o.indexOf("%")>=0?parseInt(o,10)*t*r+"%":o*t*r+"px",l=l.indexOf("%")>=0?parseInt(l,10)*t+"%":l*t+"px",null!=h){var p=h-(h-1)*(1-Math.abs(t));a[0].style.opacity=p}if(null==d)a.transform("translate3d("+o+", "+l+", 0px)");else{var c=d-(d-1)*(1-Math.abs(t));a.transform("translate3d("+o+", "+l+", 0px) scale("+c+")")}},setTranslate:function(){var e=this,t=e.$el,i=e.slides,a=e.progress,r=e.snapGrid;t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t,i){e.parallax.setTransform(i,a)})),i.each((function(t,i){var n=i.progress;e.params.slidesPerGroup>1&&"auto"!==e.params.slidesPerView&&(n+=Math.ceil(t/2)-a*(r.length-1)),n=Math.min(Math.max(n,-1),1),s(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t,i){e.parallax.setTransform(i,n)}))}))},setTransition:function(e){void 0===e&&(e=this.params.speed);this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t,i){var a=s(i),r=parseInt(a.attr("data-swiper-parallax-duration"),10)||e;0===e&&(r=0),a.transition(r)}))}},oe={getDistanceBetweenTouches:function(e){if(e.targetTouches.length<2)return 1;var t=e.targetTouches[0].pageX,i=e.targetTouches[0].pageY,s=e.targetTouches[1].pageX,a=e.targetTouches[1].pageY;return Math.sqrt(Math.pow(s-t,2)+Math.pow(a-i,2))},onGestureStart:function(e){var t=this.params.zoom,i=this.zoom,a=i.gesture;if(i.fakeGestureTouched=!1,i.fakeGestureMoved=!1,!o.gestures){if("touchstart"!==e.type||"touchstart"===e.type&&e.targetTouches.length<2)return;i.fakeGestureTouched=!0,a.scaleStart=oe.getDistanceBetweenTouches(e)}a.$slideEl&&a.$slideEl.length||(a.$slideEl=s(e.target).closest("."+this.params.slideClass),0===a.$slideEl.length&&(a.$slideEl=this.slides.eq(this.activeIndex)),a.$imageEl=a.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"),a.$imageWrapEl=a.$imageEl.parent("."+t.containerClass),a.maxRatio=a.$imageWrapEl.attr("data-swiper-zoom")||t.maxRatio,0!==a.$imageWrapEl.length)?(a.$imageEl&&a.$imageEl.transition(0),this.zoom.isScaling=!0):a.$imageEl=void 0},onGestureChange:function(e){var t=this.params.zoom,i=this.zoom,s=i.gesture;if(!o.gestures){if("touchmove"!==e.type||"touchmove"===e.type&&e.targetTouches.length<2)return;i.fakeGestureMoved=!0,s.scaleMove=oe.getDistanceBetweenTouches(e)}s.$imageEl&&0!==s.$imageEl.length&&(i.scale=o.gestures?e.scale*i.currentScale:s.scaleMove/s.scaleStart*i.currentScale,i.scale>s.maxRatio&&(i.scale=s.maxRatio-1+Math.pow(i.scale-s.maxRatio+1,.5)),i.scale<t.minRatio&&(i.scale=t.minRatio+1-Math.pow(t.minRatio-i.scale+1,.5)),s.$imageEl.transform("translate3d(0,0,0) scale("+i.scale+")"))},onGestureEnd:function(e){var t=this.params.zoom,i=this.zoom,s=i.gesture;if(!o.gestures){if(!i.fakeGestureTouched||!i.fakeGestureMoved)return;if("touchend"!==e.type||"touchend"===e.type&&e.changedTouches.length<2&&!I.android)return;i.fakeGestureTouched=!1,i.fakeGestureMoved=!1}s.$imageEl&&0!==s.$imageEl.length&&(i.scale=Math.max(Math.min(i.scale,s.maxRatio),t.minRatio),s.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale("+i.scale+")"),i.currentScale=i.scale,i.isScaling=!1,1===i.scale&&(s.$slideEl=void 0))},onTouchStart:function(e){var t=this.zoom,i=t.gesture,s=t.image;i.$imageEl&&0!==i.$imageEl.length&&(s.isTouched||(I.android&&e.preventDefault(),s.isTouched=!0,s.touchesStart.x="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,s.touchesStart.y="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY))},onTouchMove:function(e){var t=this.zoom,i=t.gesture,s=t.image,a=t.velocity;if(i.$imageEl&&0!==i.$imageEl.length&&(this.allowClick=!1,s.isTouched&&i.$slideEl)){s.isMoved||(s.width=i.$imageEl[0].offsetWidth,s.height=i.$imageEl[0].offsetHeight,s.startX=n.getTranslate(i.$imageWrapEl[0],"x")||0,s.startY=n.getTranslate(i.$imageWrapEl[0],"y")||0,i.slideWidth=i.$slideEl[0].offsetWidth,i.slideHeight=i.$slideEl[0].offsetHeight,i.$imageWrapEl.transition(0),this.rtl&&(s.startX=-s.startX,s.startY=-s.startY));var r=s.width*t.scale,o=s.height*t.scale;if(!(r<i.slideWidth&&o<i.slideHeight)){if(s.minX=Math.min(i.slideWidth/2-r/2,0),s.maxX=-s.minX,s.minY=Math.min(i.slideHeight/2-o/2,0),s.maxY=-s.minY,s.touchesCurrent.x="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,s.touchesCurrent.y="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,!s.isMoved&&!t.isScaling){if(this.isHorizontal()&&(Math.floor(s.minX)===Math.floor(s.startX)&&s.touchesCurrent.x<s.touchesStart.x||Math.floor(s.maxX)===Math.floor(s.startX)&&s.touchesCurrent.x>s.touchesStart.x))return void(s.isTouched=!1);if(!this.isHorizontal()&&(Math.floor(s.minY)===Math.floor(s.startY)&&s.touchesCurrent.y<s.touchesStart.y||Math.floor(s.maxY)===Math.floor(s.startY)&&s.touchesCurrent.y>s.touchesStart.y))return void(s.isTouched=!1)}e.preventDefault(),e.stopPropagation(),s.isMoved=!0,s.currentX=s.touchesCurrent.x-s.touchesStart.x+s.startX,s.currentY=s.touchesCurrent.y-s.touchesStart.y+s.startY,s.currentX<s.minX&&(s.currentX=s.minX+1-Math.pow(s.minX-s.currentX+1,.8)),s.currentX>s.maxX&&(s.currentX=s.maxX-1+Math.pow(s.currentX-s.maxX+1,.8)),s.currentY<s.minY&&(s.currentY=s.minY+1-Math.pow(s.minY-s.currentY+1,.8)),s.currentY>s.maxY&&(s.currentY=s.maxY-1+Math.pow(s.currentY-s.maxY+1,.8)),a.prevPositionX||(a.prevPositionX=s.touchesCurrent.x),a.prevPositionY||(a.prevPositionY=s.touchesCurrent.y),a.prevTime||(a.prevTime=Date.now()),a.x=(s.touchesCurrent.x-a.prevPositionX)/(Date.now()-a.prevTime)/2,a.y=(s.touchesCurrent.y-a.prevPositionY)/(Date.now()-a.prevTime)/2,Math.abs(s.touchesCurrent.x-a.prevPositionX)<2&&(a.x=0),Math.abs(s.touchesCurrent.y-a.prevPositionY)<2&&(a.y=0),a.prevPositionX=s.touchesCurrent.x,a.prevPositionY=s.touchesCurrent.y,a.prevTime=Date.now(),i.$imageWrapEl.transform("translate3d("+s.currentX+"px, "+s.currentY+"px,0)")}}},onTouchEnd:function(){var e=this.zoom,t=e.gesture,i=e.image,s=e.velocity;if(t.$imageEl&&0!==t.$imageEl.length){if(!i.isTouched||!i.isMoved)return i.isTouched=!1,void(i.isMoved=!1);i.isTouched=!1,i.isMoved=!1;var a=300,r=300,n=s.x*a,o=i.currentX+n,l=s.y*r,d=i.currentY+l;0!==s.x&&(a=Math.abs((o-i.currentX)/s.x)),0!==s.y&&(r=Math.abs((d-i.currentY)/s.y));var h=Math.max(a,r);i.currentX=o,i.currentY=d;var p=i.width*e.scale,c=i.height*e.scale;i.minX=Math.min(t.slideWidth/2-p/2,0),i.maxX=-i.minX,i.minY=Math.min(t.slideHeight/2-c/2,0),i.maxY=-i.minY,i.currentX=Math.max(Math.min(i.currentX,i.maxX),i.minX),i.currentY=Math.max(Math.min(i.currentY,i.maxY),i.minY),t.$imageWrapEl.transition(h).transform("translate3d("+i.currentX+"px, "+i.currentY+"px,0)")}},onTransitionEnd:function(){var e=this.zoom,t=e.gesture;t.$slideEl&&this.previousIndex!==this.activeIndex&&(t.$imageEl&&t.$imageEl.transform("translate3d(0,0,0) scale(1)"),t.$imageWrapEl&&t.$imageWrapEl.transform("translate3d(0,0,0)"),e.scale=1,e.currentScale=1,t.$slideEl=void 0,t.$imageEl=void 0,t.$imageWrapEl=void 0)},toggle:function(e){var t=this.zoom;t.scale&&1!==t.scale?t.out():t.in(e)},in:function(e){var t,i,s,a,r,n,o,l,d,h,p,c,u,v,f,m,g=this.zoom,b=this.params.zoom,w=g.gesture,y=g.image;(w.$slideEl||(this.params.virtual&&this.params.virtual.enabled&&this.virtual?w.$slideEl=this.$wrapperEl.children("."+this.params.slideActiveClass):w.$slideEl=this.slides.eq(this.activeIndex),w.$imageEl=w.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"),w.$imageWrapEl=w.$imageEl.parent("."+b.containerClass)),w.$imageEl&&0!==w.$imageEl.length)&&(w.$slideEl.addClass(""+b.zoomedSlideClass),void 0===y.touchesStart.x&&e?(t="touchend"===e.type?e.changedTouches[0].pageX:e.pageX,i="touchend"===e.type?e.changedTouches[0].pageY:e.pageY):(t=y.touchesStart.x,i=y.touchesStart.y),g.scale=w.$imageWrapEl.attr("data-swiper-zoom")||b.maxRatio,g.currentScale=w.$imageWrapEl.attr("data-swiper-zoom")||b.maxRatio,e?(f=w.$slideEl[0].offsetWidth,m=w.$slideEl[0].offsetHeight,s=w.$slideEl.offset().left+f/2-t,a=w.$slideEl.offset().top+m/2-i,o=w.$imageEl[0].offsetWidth,l=w.$imageEl[0].offsetHeight,d=o*g.scale,h=l*g.scale,u=-(p=Math.min(f/2-d/2,0)),v=-(c=Math.min(m/2-h/2,0)),(r=s*g.scale)<p&&(r=p),r>u&&(r=u),(n=a*g.scale)<c&&(n=c),n>v&&(n=v)):(r=0,n=0),w.$imageWrapEl.transition(300).transform("translate3d("+r+"px, "+n+"px,0)"),w.$imageEl.transition(300).transform("translate3d(0,0,0) scale("+g.scale+")"))},out:function(){var e=this.zoom,t=this.params.zoom,i=e.gesture;i.$slideEl||(this.params.virtual&&this.params.virtual.enabled&&this.virtual?i.$slideEl=this.$wrapperEl.children("."+this.params.slideActiveClass):i.$slideEl=this.slides.eq(this.activeIndex),i.$imageEl=i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"),i.$imageWrapEl=i.$imageEl.parent("."+t.containerClass)),i.$imageEl&&0!==i.$imageEl.length&&(e.scale=1,e.currentScale=1,i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),i.$slideEl.removeClass(""+t.zoomedSlideClass),i.$slideEl=void 0)},enable:function(){var e=this.zoom;if(!e.enabled){e.enabled=!0;var t=!("touchstart"!==this.touchEvents.start||!o.passiveListener||!this.params.passiveListeners)&&{passive:!0,capture:!1},i=!o.passiveListener||{passive:!1,capture:!0},s="."+this.params.slideClass;o.gestures?(this.$wrapperEl.on("gesturestart",s,e.onGestureStart,t),this.$wrapperEl.on("gesturechange",s,e.onGestureChange,t),this.$wrapperEl.on("gestureend",s,e.onGestureEnd,t)):"touchstart"===this.touchEvents.start&&(this.$wrapperEl.on(this.touchEvents.start,s,e.onGestureStart,t),this.$wrapperEl.on(this.touchEvents.move,s,e.onGestureChange,i),this.$wrapperEl.on(this.touchEvents.end,s,e.onGestureEnd,t),this.touchEvents.cancel&&this.$wrapperEl.on(this.touchEvents.cancel,s,e.onGestureEnd,t)),this.$wrapperEl.on(this.touchEvents.move,"."+this.params.zoom.containerClass,e.onTouchMove,i)}},disable:function(){var e=this.zoom;if(e.enabled){this.zoom.enabled=!1;var t=!("touchstart"!==this.touchEvents.start||!o.passiveListener||!this.params.passiveListeners)&&{passive:!0,capture:!1},i=!o.passiveListener||{passive:!1,capture:!0},s="."+this.params.slideClass;o.gestures?(this.$wrapperEl.off("gesturestart",s,e.onGestureStart,t),this.$wrapperEl.off("gesturechange",s,e.onGestureChange,t),this.$wrapperEl.off("gestureend",s,e.onGestureEnd,t)):"touchstart"===this.touchEvents.start&&(this.$wrapperEl.off(this.touchEvents.start,s,e.onGestureStart,t),this.$wrapperEl.off(this.touchEvents.move,s,e.onGestureChange,i),this.$wrapperEl.off(this.touchEvents.end,s,e.onGestureEnd,t),this.touchEvents.cancel&&this.$wrapperEl.off(this.touchEvents.cancel,s,e.onGestureEnd,t)),this.$wrapperEl.off(this.touchEvents.move,"."+this.params.zoom.containerClass,e.onTouchMove,i)}}},le={loadInSlide:function(e,t){void 0===t&&(t=!0);var i=this,a=i.params.lazy;if(void 0!==e&&0!==i.slides.length){var r=i.virtual&&i.params.virtual.enabled?i.$wrapperEl.children("."+i.params.slideClass+'[data-swiper-slide-index="'+e+'"]'):i.slides.eq(e),n=r.find("."+a.elementClass+":not(."+a.loadedClass+"):not(."+a.loadingClass+")");!r.hasClass(a.elementClass)||r.hasClass(a.loadedClass)||r.hasClass(a.loadingClass)||(n=n.add(r[0])),0!==n.length&&n.each((function(e,n){var o=s(n);o.addClass(a.loadingClass);var l=o.attr("data-background"),d=o.attr("data-src"),h=o.attr("data-srcset"),p=o.attr("data-sizes");i.loadImage(o[0],d||l,h,p,!1,(function(){if(null!=i&&i&&(!i||i.params)&&!i.destroyed){if(l?(o.css("background-image",'url("'+l+'")'),o.removeAttr("data-background")):(h&&(o.attr("srcset",h),o.removeAttr("data-srcset")),p&&(o.attr("sizes",p),o.removeAttr("data-sizes")),d&&(o.attr("src",d),o.removeAttr("data-src"))),o.addClass(a.loadedClass).removeClass(a.loadingClass),r.find("."+a.preloaderClass).remove(),i.params.loop&&t){var e=r.attr("data-swiper-slide-index");if(r.hasClass(i.params.slideDuplicateClass)){var s=i.$wrapperEl.children('[data-swiper-slide-index="'+e+'"]:not(.'+i.params.slideDuplicateClass+")");i.lazy.loadInSlide(s.index(),!1)}else{var n=i.$wrapperEl.children("."+i.params.slideDuplicateClass+'[data-swiper-slide-index="'+e+'"]');i.lazy.loadInSlide(n.index(),!1)}}i.emit("lazyImageReady",r[0],o[0]),i.params.autoHeight&&i.updateAutoHeight()}})),i.emit("lazyImageLoad",r[0],o[0])}))}},load:function(){var e=this,t=e.$wrapperEl,i=e.params,a=e.slides,r=e.activeIndex,n=e.virtual&&i.virtual.enabled,o=i.lazy,l=i.slidesPerView;function d(e){if(n){if(t.children("."+i.slideClass+'[data-swiper-slide-index="'+e+'"]').length)return!0}else if(a[e])return!0;return!1}function h(e){return n?s(e).attr("data-swiper-slide-index"):s(e).index()}if("auto"===l&&(l=0),e.lazy.initialImageLoaded||(e.lazy.initialImageLoaded=!0),e.params.watchSlidesVisibility)t.children("."+i.slideVisibleClass).each((function(t,i){var a=n?s(i).attr("data-swiper-slide-index"):s(i).index();e.lazy.loadInSlide(a)}));else if(l>1)for(var p=r;p<r+l;p+=1)d(p)&&e.lazy.loadInSlide(p);else e.lazy.loadInSlide(r);if(o.loadPrevNext)if(l>1||o.loadPrevNextAmount&&o.loadPrevNextAmount>1){for(var c=o.loadPrevNextAmount,u=l,v=Math.min(r+u+Math.max(c,u),a.length),f=Math.max(r-Math.max(u,c),0),m=r+l;m<v;m+=1)d(m)&&e.lazy.loadInSlide(m);for(var g=f;g<r;g+=1)d(g)&&e.lazy.loadInSlide(g)}else{var b=t.children("."+i.slideNextClass);b.length>0&&e.lazy.loadInSlide(h(b));var w=t.children("."+i.slidePrevClass);w.length>0&&e.lazy.loadInSlide(h(w))}}},de={LinearSpline:function(e,t){var i,s,a,r,n,o=function(e,t){for(s=-1,i=e.length;i-s>1;)e[a=i+s>>1]<=t?s=a:i=a;return i};return this.x=e,this.y=t,this.lastIndex=e.length-1,this.interpolate=function(e){return e?(n=o(this.x,e),r=n-1,(e-this.x[r])*(this.y[n]-this.y[r])/(this.x[n]-this.x[r])+this.y[r]):0},this},getInterpolateFunction:function(e){this.controller.spline||(this.controller.spline=this.params.loop?new de.LinearSpline(this.slidesGrid,e.slidesGrid):new de.LinearSpline(this.snapGrid,e.snapGrid))},setTranslate:function(e,t){var i,s,a=this,r=a.controller.control;function n(e){var t=a.rtlTranslate?-a.translate:a.translate;"slide"===a.params.controller.by&&(a.controller.getInterpolateFunction(e),s=-a.controller.spline.interpolate(-t)),s&&"container"!==a.params.controller.by||(i=(e.maxTranslate()-e.minTranslate())/(a.maxTranslate()-a.minTranslate()),s=(t-a.minTranslate())*i+e.minTranslate()),a.params.controller.inverse&&(s=e.maxTranslate()-s),e.updateProgress(s),e.setTranslate(s,a),e.updateActiveIndex(),e.updateSlidesClasses()}if(Array.isArray(r))for(var o=0;o<r.length;o+=1)r[o]!==t&&r[o]instanceof W&&n(r[o]);else r instanceof W&&t!==r&&n(r)},setTransition:function(e,t){var i,s=this,a=s.controller.control;function r(t){t.setTransition(e,s),0!==e&&(t.transitionStart(),t.params.autoHeight&&n.nextTick((function(){t.updateAutoHeight()})),t.$wrapperEl.transitionEnd((function(){a&&(t.params.loop&&"slide"===s.params.controller.by&&t.loopFix(),t.transitionEnd())})))}if(Array.isArray(a))for(i=0;i<a.length;i+=1)a[i]!==t&&a[i]instanceof W&&r(a[i]);else a instanceof W&&t!==a&&r(a)}},he={makeElFocusable:function(e){return e.attr("tabIndex","0"),e},addElRole:function(e,t){return e.attr("role",t),e},addElLabel:function(e,t){return e.attr("aria-label",t),e},disableEl:function(e){return e.attr("aria-disabled",!0),e},enableEl:function(e){return e.attr("aria-disabled",!1),e},onEnterKey:function(e){var t=this.params.a11y;if(13===e.keyCode){var i=s(e.target);this.navigation&&this.navigation.$nextEl&&i.is(this.navigation.$nextEl)&&(this.isEnd&&!this.params.loop||this.slideNext(),this.isEnd?this.a11y.notify(t.lastSlideMessage):this.a11y.notify(t.nextSlideMessage)),this.navigation&&this.navigation.$prevEl&&i.is(this.navigation.$prevEl)&&(this.isBeginning&&!this.params.loop||this.slidePrev(),this.isBeginning?this.a11y.notify(t.firstSlideMessage):this.a11y.notify(t.prevSlideMessage)),this.pagination&&i.is("."+this.params.pagination.bulletClass)&&i[0].click()}},notify:function(e){var t=this.a11y.liveRegion;0!==t.length&&(t.html(""),t.html(e))},updateNavigation:function(){if(!this.params.loop&&this.navigation){var e=this.navigation,t=e.$nextEl,i=e.$prevEl;i&&i.length>0&&(this.isBeginning?this.a11y.disableEl(i):this.a11y.enableEl(i)),t&&t.length>0&&(this.isEnd?this.a11y.disableEl(t):this.a11y.enableEl(t))}},updatePagination:function(){var e=this,t=e.params.a11y;e.pagination&&e.params.pagination.clickable&&e.pagination.bullets&&e.pagination.bullets.length&&e.pagination.bullets.each((function(i,a){var r=s(a);e.a11y.makeElFocusable(r),e.a11y.addElRole(r,"button"),e.a11y.addElLabel(r,t.paginationBulletMessage.replace(/\{\{index\}\}/,r.index()+1))}))},init:function(){this.$el.append(this.a11y.liveRegion);var e,t,i=this.params.a11y;this.navigation&&this.navigation.$nextEl&&(e=this.navigation.$nextEl),this.navigation&&this.navigation.$prevEl&&(t=this.navigation.$prevEl),e&&(this.a11y.makeElFocusable(e),this.a11y.addElRole(e,"button"),this.a11y.addElLabel(e,i.nextSlideMessage),e.on("keydown",this.a11y.onEnterKey)),t&&(this.a11y.makeElFocusable(t),this.a11y.addElRole(t,"button"),this.a11y.addElLabel(t,i.prevSlideMessage),t.on("keydown",this.a11y.onEnterKey)),this.pagination&&this.params.pagination.clickable&&this.pagination.bullets&&this.pagination.bullets.length&&this.pagination.$el.on("keydown","."+this.params.pagination.bulletClass,this.a11y.onEnterKey)},destroy:function(){var e,t;this.a11y.liveRegion&&this.a11y.liveRegion.length>0&&this.a11y.liveRegion.remove(),this.navigation&&this.navigation.$nextEl&&(e=this.navigation.$nextEl),this.navigation&&this.navigation.$prevEl&&(t=this.navigation.$prevEl),e&&e.off("keydown",this.a11y.onEnterKey),t&&t.off("keydown",this.a11y.onEnterKey),this.pagination&&this.params.pagination.clickable&&this.pagination.bullets&&this.pagination.bullets.length&&this.pagination.$el.off("keydown","."+this.params.pagination.bulletClass,this.a11y.onEnterKey)}},pe={init:function(){if(this.params.history){if(!t.history||!t.history.pushState)return this.params.history.enabled=!1,void(this.params.hashNavigation.enabled=!0);var e=this.history;e.initialized=!0,e.paths=pe.getPathValues(),(e.paths.key||e.paths.value)&&(e.scrollToSlide(0,e.paths.value,this.params.runCallbacksOnInit),this.params.history.replaceState||t.addEventListener("popstate",this.history.setHistoryPopState))}},destroy:function(){this.params.history.replaceState||t.removeEventListener("popstate",this.history.setHistoryPopState)},setHistoryPopState:function(){this.history.paths=pe.getPathValues(),this.history.scrollToSlide(this.params.speed,this.history.paths.value,!1)},getPathValues:function(){var e=t.location.pathname.slice(1).split("/").filter((function(e){return""!==e})),i=e.length;return{key:e[i-2],value:e[i-1]}},setHistory:function(e,i){if(this.history.initialized&&this.params.history.enabled){var s=this.slides.eq(i),a=pe.slugify(s.attr("data-history"));t.location.pathname.includes(e)||(a=e+"/"+a);var r=t.history.state;r&&r.value===a||(this.params.history.replaceState?t.history.replaceState({value:a},null,a):t.history.pushState({value:a},null,a))}},slugify:function(e){return e.toString().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},scrollToSlide:function(e,t,i){if(t)for(var s=0,a=this.slides.length;s<a;s+=1){var r=this.slides.eq(s);if(pe.slugify(r.attr("data-history"))===t&&!r.hasClass(this.params.slideDuplicateClass)){var n=r.index();this.slideTo(n,e,i)}}else this.slideTo(0,e,i)}},ce={onHashCange:function(){var t=e.location.hash.replace("#","");if(t!==this.slides.eq(this.activeIndex).attr("data-hash")){var i=this.$wrapperEl.children("."+this.params.slideClass+'[data-hash="'+t+'"]').index();if(void 0===i)return;this.slideTo(i)}},setHash:function(){if(this.hashNavigation.initialized&&this.params.hashNavigation.enabled)if(this.params.hashNavigation.replaceState&&t.history&&t.history.replaceState)t.history.replaceState(null,null,"#"+this.slides.eq(this.activeIndex).attr("data-hash")||"");else{var i=this.slides.eq(this.activeIndex),s=i.attr("data-hash")||i.attr("data-history");e.location.hash=s||""}},init:function(){if(!(!this.params.hashNavigation.enabled||this.params.history&&this.params.history.enabled)){this.hashNavigation.initialized=!0;var i=e.location.hash.replace("#","");if(i)for(var a=0,r=this.slides.length;a<r;a+=1){var n=this.slides.eq(a);if((n.attr("data-hash")||n.attr("data-history"))===i&&!n.hasClass(this.params.slideDuplicateClass)){var o=n.index();this.slideTo(o,0,this.params.runCallbacksOnInit,!0)}}this.params.hashNavigation.watchState&&s(t).on("hashchange",this.hashNavigation.onHashCange)}},destroy:function(){this.params.hashNavigation.watchState&&s(t).off("hashchange",this.hashNavigation.onHashCange)}},ue={run:function(){var e=this,t=e.slides.eq(e.activeIndex),i=e.params.autoplay.delay;t.attr("data-swiper-autoplay")&&(i=t.attr("data-swiper-autoplay")||e.params.autoplay.delay),clearTimeout(e.autoplay.timeout),e.autoplay.timeout=n.nextTick((function(){e.params.autoplay.reverseDirection?e.params.loop?(e.loopFix(),e.slidePrev(e.params.speed,!0,!0),e.emit("autoplay")):e.isBeginning?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(e.slideTo(e.slides.length-1,e.params.speed,!0,!0),e.emit("autoplay")):(e.slidePrev(e.params.speed,!0,!0),e.emit("autoplay")):e.params.loop?(e.loopFix(),e.slideNext(e.params.speed,!0,!0),e.emit("autoplay")):e.isEnd?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(e.slideTo(0,e.params.speed,!0,!0),e.emit("autoplay")):(e.slideNext(e.params.speed,!0,!0),e.emit("autoplay")),e.params.cssMode&&e.autoplay.running&&e.autoplay.run()}),i)},start:function(){return void 0===this.autoplay.timeout&&(!this.autoplay.running&&(this.autoplay.running=!0,this.emit("autoplayStart"),this.autoplay.run(),!0))},stop:function(){return!!this.autoplay.running&&(void 0!==this.autoplay.timeout&&(this.autoplay.timeout&&(clearTimeout(this.autoplay.timeout),this.autoplay.timeout=void 0),this.autoplay.running=!1,this.emit("autoplayStop"),!0))},pause:function(e){this.autoplay.running&&(this.autoplay.paused||(this.autoplay.timeout&&clearTimeout(this.autoplay.timeout),this.autoplay.paused=!0,0!==e&&this.params.autoplay.waitForTransition?(this.$wrapperEl[0].addEventListener("transitionend",this.autoplay.onTransitionEnd),this.$wrapperEl[0].addEventListener("webkitTransitionEnd",this.autoplay.onTransitionEnd)):(this.autoplay.paused=!1,this.autoplay.run())))}},ve={setTranslate:function(){for(var e=this.slides,t=0;t<e.length;t+=1){var i=this.slides.eq(t),s=-i[0].swiperSlideOffset;this.params.virtualTranslate||(s-=this.translate);var a=0;this.isHorizontal()||(a=s,s=0);var r=this.params.fadeEffect.crossFade?Math.max(1-Math.abs(i[0].progress),0):1+Math.min(Math.max(i[0].progress,-1),0);i.css({opacity:r}).transform("translate3d("+s+"px, "+a+"px, 0px)")}},setTransition:function(e){var t=this,i=t.slides,s=t.$wrapperEl;if(i.transition(e),t.params.virtualTranslate&&0!==e){var a=!1;i.transitionEnd((function(){if(!a&&t&&!t.destroyed){a=!0,t.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],i=0;i<e.length;i+=1)s.trigger(e[i])}}))}}},fe={setTranslate:function(){var e,t=this.$el,i=this.$wrapperEl,a=this.slides,r=this.width,n=this.height,o=this.rtlTranslate,l=this.size,d=this.params.cubeEffect,h=this.isHorizontal(),p=this.virtual&&this.params.virtual.enabled,c=0;d.shadow&&(h?(0===(e=i.find(".swiper-cube-shadow")).length&&(e=s('<div class="swiper-cube-shadow"></div>'),i.append(e)),e.css({height:r+"px"})):0===(e=t.find(".swiper-cube-shadow")).length&&(e=s('<div class="swiper-cube-shadow"></div>'),t.append(e)));for(var u=0;u<a.length;u+=1){var v=a.eq(u),f=u;p&&(f=parseInt(v.attr("data-swiper-slide-index"),10));var m=90*f,g=Math.floor(m/360);o&&(m=-m,g=Math.floor(-m/360));var b=Math.max(Math.min(v[0].progress,1),-1),w=0,y=0,x=0;f%4==0?(w=4*-g*l,x=0):(f-1)%4==0?(w=0,x=4*-g*l):(f-2)%4==0?(w=l+4*g*l,x=l):(f-3)%4==0&&(w=-l,x=3*l+4*l*g),o&&(w=-w),h||(y=w,w=0);var T="rotateX("+(h?0:-m)+"deg) rotateY("+(h?m:0)+"deg) translate3d("+w+"px, "+y+"px, "+x+"px)";if(b<=1&&b>-1&&(c=90*f+90*b,o&&(c=90*-f-90*b)),v.transform(T),d.slideShadows){var E=h?v.find(".swiper-slide-shadow-left"):v.find(".swiper-slide-shadow-top"),S=h?v.find(".swiper-slide-shadow-right"):v.find(".swiper-slide-shadow-bottom");0===E.length&&(E=s('<div class="swiper-slide-shadow-'+(h?"left":"top")+'"></div>'),v.append(E)),0===S.length&&(S=s('<div class="swiper-slide-shadow-'+(h?"right":"bottom")+'"></div>'),v.append(S)),E.length&&(E[0].style.opacity=Math.max(-b,0)),S.length&&(S[0].style.opacity=Math.max(b,0))}}if(i.css({"-webkit-transform-origin":"50% 50% -"+l/2+"px","-moz-transform-origin":"50% 50% -"+l/2+"px","-ms-transform-origin":"50% 50% -"+l/2+"px","transform-origin":"50% 50% -"+l/2+"px"}),d.shadow)if(h)e.transform("translate3d(0px, "+(r/2+d.shadowOffset)+"px, "+-r/2+"px) rotateX(90deg) rotateZ(0deg) scale("+d.shadowScale+")");else{var C=Math.abs(c)-90*Math.floor(Math.abs(c)/90),M=1.5-(Math.sin(2*C*Math.PI/360)/2+Math.cos(2*C*Math.PI/360)/2),P=d.shadowScale,z=d.shadowScale/M,k=d.shadowOffset;e.transform("scale3d("+P+", 1, "+z+") translate3d(0px, "+(n/2+k)+"px, "+-n/2/z+"px) rotateX(-90deg)")}var $=j.isSafari||j.isUiWebView?-l/2:0;i.transform("translate3d(0px,0,"+$+"px) rotateX("+(this.isHorizontal()?0:c)+"deg) rotateY("+(this.isHorizontal()?-c:0)+"deg)")},setTransition:function(e){var t=this.$el;this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),this.params.cubeEffect.shadow&&!this.isHorizontal()&&t.find(".swiper-cube-shadow").transition(e)}},me={setTranslate:function(){for(var e=this.slides,t=this.rtlTranslate,i=0;i<e.length;i+=1){var a=e.eq(i),r=a[0].progress;this.params.flipEffect.limitRotation&&(r=Math.max(Math.min(a[0].progress,1),-1));var n=-180*r,o=0,l=-a[0].swiperSlideOffset,d=0;if(this.isHorizontal()?t&&(n=-n):(d=l,l=0,o=-n,n=0),a[0].style.zIndex=-Math.abs(Math.round(r))+e.length,this.params.flipEffect.slideShadows){var h=this.isHorizontal()?a.find(".swiper-slide-shadow-left"):a.find(".swiper-slide-shadow-top"),p=this.isHorizontal()?a.find(".swiper-slide-shadow-right"):a.find(".swiper-slide-shadow-bottom");0===h.length&&(h=s('<div class="swiper-slide-shadow-'+(this.isHorizontal()?"left":"top")+'"></div>'),a.append(h)),0===p.length&&(p=s('<div class="swiper-slide-shadow-'+(this.isHorizontal()?"right":"bottom")+'"></div>'),a.append(p)),h.length&&(h[0].style.opacity=Math.max(-r,0)),p.length&&(p[0].style.opacity=Math.max(r,0))}a.transform("translate3d("+l+"px, "+d+"px, 0px) rotateX("+o+"deg) rotateY("+n+"deg)")}},setTransition:function(e){var t=this,i=t.slides,s=t.activeIndex,a=t.$wrapperEl;if(i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),t.params.virtualTranslate&&0!==e){var r=!1;i.eq(s).transitionEnd((function(){if(!r&&t&&!t.destroyed){r=!0,t.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],i=0;i<e.length;i+=1)a.trigger(e[i])}}))}}},ge={setTranslate:function(){for(var e=this.width,t=this.height,i=this.slides,a=this.$wrapperEl,r=this.slidesSizesGrid,n=this.params.coverflowEffect,l=this.isHorizontal(),d=this.translate,h=l?e/2-d:t/2-d,p=l?n.rotate:-n.rotate,c=n.depth,u=0,v=i.length;u<v;u+=1){var f=i.eq(u),m=r[u],g=(h-f[0].swiperSlideOffset-m/2)/m*n.modifier,b=l?p*g:0,w=l?0:p*g,y=-c*Math.abs(g),x=n.stretch;"string"==typeof x&&-1!==x.indexOf("%")&&(x=parseFloat(n.stretch)/100*m);var T=l?0:x*g,E=l?x*g:0;Math.abs(E)<.001&&(E=0),Math.abs(T)<.001&&(T=0),Math.abs(y)<.001&&(y=0),Math.abs(b)<.001&&(b=0),Math.abs(w)<.001&&(w=0);var S="translate3d("+E+"px,"+T+"px,"+y+"px)  rotateX("+w+"deg) rotateY("+b+"deg)";if(f.transform(S),f[0].style.zIndex=1-Math.abs(Math.round(g)),n.slideShadows){var C=l?f.find(".swiper-slide-shadow-left"):f.find(".swiper-slide-shadow-top"),M=l?f.find(".swiper-slide-shadow-right"):f.find(".swiper-slide-shadow-bottom");0===C.length&&(C=s('<div class="swiper-slide-shadow-'+(l?"left":"top")+'"></div>'),f.append(C)),0===M.length&&(M=s('<div class="swiper-slide-shadow-'+(l?"right":"bottom")+'"></div>'),f.append(M)),C.length&&(C[0].style.opacity=g>0?g:0),M.length&&(M[0].style.opacity=-g>0?-g:0)}}(o.pointerEvents||o.prefixedPointerEvents)&&(a[0].style.perspectiveOrigin=h+"px 50%")},setTransition:function(e){this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}},be={init:function(){var e=this.params.thumbs,t=this.constructor;e.swiper instanceof t?(this.thumbs.swiper=e.swiper,n.extend(this.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),n.extend(this.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1})):n.isObject(e.swiper)&&(this.thumbs.swiper=new t(n.extend({},e.swiper,{watchSlidesVisibility:!0,watchSlidesProgress:!0,slideToClickedSlide:!1})),this.thumbs.swiperCreated=!0),this.thumbs.swiper.$el.addClass(this.params.thumbs.thumbsContainerClass),this.thumbs.swiper.on("tap",this.thumbs.onThumbClick)},onThumbClick:function(){var e=this.thumbs.swiper;if(e){var t=e.clickedIndex,i=e.clickedSlide;if(!(i&&s(i).hasClass(this.params.thumbs.slideThumbActiveClass)||null==t)){var a;if(a=e.params.loop?parseInt(s(e.clickedSlide).attr("data-swiper-slide-index"),10):t,this.params.loop){var r=this.activeIndex;this.slides.eq(r).hasClass(this.params.slideDuplicateClass)&&(this.loopFix(),this._clientLeft=this.$wrapperEl[0].clientLeft,r=this.activeIndex);var n=this.slides.eq(r).prevAll('[data-swiper-slide-index="'+a+'"]').eq(0).index(),o=this.slides.eq(r).nextAll('[data-swiper-slide-index="'+a+'"]').eq(0).index();a=void 0===n?o:void 0===o?n:o-r<r-n?o:n}this.slideTo(a)}}},update:function(e){var t=this.thumbs.swiper;if(t){var i="auto"===t.params.slidesPerView?t.slidesPerViewDynamic():t.params.slidesPerView,s=this.params.thumbs.autoScrollOffset,a=s&&!t.params.loop;if(this.realIndex!==t.realIndex||a){var r,n,o=t.activeIndex;if(t.params.loop){t.slides.eq(o).hasClass(t.params.slideDuplicateClass)&&(t.loopFix(),t._clientLeft=t.$wrapperEl[0].clientLeft,o=t.activeIndex);var l=t.slides.eq(o).prevAll('[data-swiper-slide-index="'+this.realIndex+'"]').eq(0).index(),d=t.slides.eq(o).nextAll('[data-swiper-slide-index="'+this.realIndex+'"]').eq(0).index();r=void 0===l?d:void 0===d?l:d-o==o-l?o:d-o<o-l?d:l,n=this.activeIndex>this.previousIndex?"next":"prev"}else n=(r=this.realIndex)>this.previousIndex?"next":"prev";a&&(r+="next"===n?s:-1*s),t.visibleSlidesIndexes&&t.visibleSlidesIndexes.indexOf(r)<0&&(t.params.centeredSlides?r=r>o?r-Math.floor(i/2)+1:r+Math.floor(i/2)-1:r>o&&(r=r-i+1),t.slideTo(r,e?0:void 0))}var h=1,p=this.params.thumbs.slideThumbActiveClass;if(this.params.slidesPerView>1&&!this.params.centeredSlides&&(h=this.params.slidesPerView),this.params.thumbs.multipleActiveThumbs||(h=1),h=Math.floor(h),t.slides.removeClass(p),t.params.loop||t.params.virtual&&t.params.virtual.enabled)for(var c=0;c<h;c+=1)t.$wrapperEl.children('[data-swiper-slide-index="'+(this.realIndex+c)+'"]').addClass(p);else for(var u=0;u<h;u+=1)t.slides.eq(this.realIndex+u).addClass(p)}}},we=[R,q,K,U,Z,J,te,{name:"mousewheel",params:{mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarged:"container"}},create:function(){n.extend(this,{mousewheel:{enabled:!1,enable:ie.enable.bind(this),disable:ie.disable.bind(this),handle:ie.handle.bind(this),handleMouseEnter:ie.handleMouseEnter.bind(this),handleMouseLeave:ie.handleMouseLeave.bind(this),animateSlider:ie.animateSlider.bind(this),releaseScroll:ie.releaseScroll.bind(this),lastScrollTime:n.now(),lastEventBeforeSnap:void 0,recentWheelEvents:[]}})},on:{init:function(){!this.params.mousewheel.enabled&&this.params.cssMode&&this.mousewheel.disable(),this.params.mousewheel.enabled&&this.mousewheel.enable()},destroy:function(){this.params.cssMode&&this.mousewheel.enable(),this.mousewheel.enabled&&this.mousewheel.disable()}}},{name:"navigation",params:{navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock"}},create:function(){n.extend(this,{navigation:{init:se.init.bind(this),update:se.update.bind(this),destroy:se.destroy.bind(this),onNextClick:se.onNextClick.bind(this),onPrevClick:se.onPrevClick.bind(this)}})},on:{init:function(){this.navigation.init(),this.navigation.update()},toEdge:function(){this.navigation.update()},fromEdge:function(){this.navigation.update()},destroy:function(){this.navigation.destroy()},click:function(e){var t,i=this.navigation,a=i.$nextEl,r=i.$prevEl;!this.params.navigation.hideOnClick||s(e.target).is(r)||s(e.target).is(a)||(a?t=a.hasClass(this.params.navigation.hiddenClass):r&&(t=r.hasClass(this.params.navigation.hiddenClass)),!0===t?this.emit("navigationShow",this):this.emit("navigationHide",this),a&&a.toggleClass(this.params.navigation.hiddenClass),r&&r.toggleClass(this.params.navigation.hiddenClass))}}},{name:"pagination",params:{pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:function(e){return e},formatFractionTotal:function(e){return e},bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",modifierClass:"swiper-pagination-",currentClass:"swiper-pagination-current",totalClass:"swiper-pagination-total",hiddenClass:"swiper-pagination-hidden",progressbarFillClass:"swiper-pagination-progressbar-fill",progressbarOppositeClass:"swiper-pagination-progressbar-opposite",clickableClass:"swiper-pagination-clickable",lockClass:"swiper-pagination-lock"}},create:function(){n.extend(this,{pagination:{init:ae.init.bind(this),render:ae.render.bind(this),update:ae.update.bind(this),destroy:ae.destroy.bind(this),dynamicBulletIndex:0}})},on:{init:function(){this.pagination.init(),this.pagination.render(),this.pagination.update()},activeIndexChange:function(){(this.params.loop||void 0===this.snapIndex)&&this.pagination.update()},snapIndexChange:function(){this.params.loop||this.pagination.update()},slidesLengthChange:function(){this.params.loop&&(this.pagination.render(),this.pagination.update())},snapGridLengthChange:function(){this.params.loop||(this.pagination.render(),this.pagination.update())},destroy:function(){this.pagination.destroy()},click:function(e){this.params.pagination.el&&this.params.pagination.hideOnClick&&this.pagination.$el.length>0&&!s(e.target).hasClass(this.params.pagination.bulletClass)&&(!0===this.pagination.$el.hasClass(this.params.pagination.hiddenClass)?this.emit("paginationShow",this):this.emit("paginationHide",this),this.pagination.$el.toggleClass(this.params.pagination.hiddenClass))}}},{name:"scrollbar",params:{scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag"}},create:function(){n.extend(this,{scrollbar:{init:re.init.bind(this),destroy:re.destroy.bind(this),updateSize:re.updateSize.bind(this),setTranslate:re.setTranslate.bind(this),setTransition:re.setTransition.bind(this),enableDraggable:re.enableDraggable.bind(this),disableDraggable:re.disableDraggable.bind(this),setDragPosition:re.setDragPosition.bind(this),getPointerPosition:re.getPointerPosition.bind(this),onDragStart:re.onDragStart.bind(this),onDragMove:re.onDragMove.bind(this),onDragEnd:re.onDragEnd.bind(this),isTouched:!1,timeout:null,dragTimeout:null}})},on:{init:function(){this.scrollbar.init(),this.scrollbar.updateSize(),this.scrollbar.setTranslate()},update:function(){this.scrollbar.updateSize()},resize:function(){this.scrollbar.updateSize()},observerUpdate:function(){this.scrollbar.updateSize()},setTranslate:function(){this.scrollbar.setTranslate()},setTransition:function(e){this.scrollbar.setTransition(e)},destroy:function(){this.scrollbar.destroy()}}},{name:"parallax",params:{parallax:{enabled:!1}},create:function(){n.extend(this,{parallax:{setTransform:ne.setTransform.bind(this),setTranslate:ne.setTranslate.bind(this),setTransition:ne.setTransition.bind(this)}})},on:{beforeInit:function(){this.params.parallax.enabled&&(this.params.watchSlidesProgress=!0,this.originalParams.watchSlidesProgress=!0)},init:function(){this.params.parallax.enabled&&this.parallax.setTranslate()},setTranslate:function(){this.params.parallax.enabled&&this.parallax.setTranslate()},setTransition:function(e){this.params.parallax.enabled&&this.parallax.setTransition(e)}}},{name:"zoom",params:{zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}},create:function(){var e=this,t={enabled:!1,scale:1,currentScale:1,isScaling:!1,gesture:{$slideEl:void 0,slideWidth:void 0,slideHeight:void 0,$imageEl:void 0,$imageWrapEl:void 0,maxRatio:3},image:{isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},velocity:{x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0}};"onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach((function(i){t[i]=oe[i].bind(e)})),n.extend(e,{zoom:t});var i=1;Object.defineProperty(e.zoom,"scale",{get:function(){return i},set:function(t){if(i!==t){var s=e.zoom.gesture.$imageEl?e.zoom.gesture.$imageEl[0]:void 0,a=e.zoom.gesture.$slideEl?e.zoom.gesture.$slideEl[0]:void 0;e.emit("zoomChange",t,s,a)}i=t}})},on:{init:function(){this.params.zoom.enabled&&this.zoom.enable()},destroy:function(){this.zoom.disable()},touchStart:function(e){this.zoom.enabled&&this.zoom.onTouchStart(e)},touchEnd:function(e){this.zoom.enabled&&this.zoom.onTouchEnd(e)},doubleTap:function(e){this.params.zoom.enabled&&this.zoom.enabled&&this.params.zoom.toggle&&this.zoom.toggle(e)},transitionEnd:function(){this.zoom.enabled&&this.params.zoom.enabled&&this.zoom.onTransitionEnd()},slideChange:function(){this.zoom.enabled&&this.params.zoom.enabled&&this.params.cssMode&&this.zoom.onTransitionEnd()}}},{name:"lazy",params:{lazy:{enabled:!1,loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"}},create:function(){n.extend(this,{lazy:{initialImageLoaded:!1,load:le.load.bind(this),loadInSlide:le.loadInSlide.bind(this)}})},on:{beforeInit:function(){this.params.lazy.enabled&&this.params.preloadImages&&(this.params.preloadImages=!1)},init:function(){this.params.lazy.enabled&&!this.params.loop&&0===this.params.initialSlide&&this.lazy.load()},scroll:function(){this.params.freeMode&&!this.params.freeModeSticky&&this.lazy.load()},resize:function(){this.params.lazy.enabled&&this.lazy.load()},scrollbarDragMove:function(){this.params.lazy.enabled&&this.lazy.load()},transitionStart:function(){this.params.lazy.enabled&&(this.params.lazy.loadOnTransitionStart||!this.params.lazy.loadOnTransitionStart&&!this.lazy.initialImageLoaded)&&this.lazy.load()},transitionEnd:function(){this.params.lazy.enabled&&!this.params.lazy.loadOnTransitionStart&&this.lazy.load()},slideChange:function(){this.params.lazy.enabled&&this.params.cssMode&&this.lazy.load()}}},{name:"controller",params:{controller:{control:void 0,inverse:!1,by:"slide"}},create:function(){n.extend(this,{controller:{control:this.params.controller.control,getInterpolateFunction:de.getInterpolateFunction.bind(this),setTranslate:de.setTranslate.bind(this),setTransition:de.setTransition.bind(this)}})},on:{update:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},resize:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},observerUpdate:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},setTranslate:function(e,t){this.controller.control&&this.controller.setTranslate(e,t)},setTransition:function(e,t){this.controller.control&&this.controller.setTransition(e,t)}}},{name:"a11y",params:{a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}"}},create:function(){var e=this;n.extend(e,{a11y:{liveRegion:s('<span class="'+e.params.a11y.notificationClass+'" aria-live="assertive" aria-atomic="true"></span>')}}),Object.keys(he).forEach((function(t){e.a11y[t]=he[t].bind(e)}))},on:{init:function(){this.params.a11y.enabled&&(this.a11y.init(),this.a11y.updateNavigation())},toEdge:function(){this.params.a11y.enabled&&this.a11y.updateNavigation()},fromEdge:function(){this.params.a11y.enabled&&this.a11y.updateNavigation()},paginationUpdate:function(){this.params.a11y.enabled&&this.a11y.updatePagination()},destroy:function(){this.params.a11y.enabled&&this.a11y.destroy()}}},{name:"history",params:{history:{enabled:!1,replaceState:!1,key:"slides"}},create:function(){n.extend(this,{history:{init:pe.init.bind(this),setHistory:pe.setHistory.bind(this),setHistoryPopState:pe.setHistoryPopState.bind(this),scrollToSlide:pe.scrollToSlide.bind(this),destroy:pe.destroy.bind(this)}})},on:{init:function(){this.params.history.enabled&&this.history.init()},destroy:function(){this.params.history.enabled&&this.history.destroy()},transitionEnd:function(){this.history.initialized&&this.history.setHistory(this.params.history.key,this.activeIndex)},slideChange:function(){this.history.initialized&&this.params.cssMode&&this.history.setHistory(this.params.history.key,this.activeIndex)}}},{name:"hash-navigation",params:{hashNavigation:{enabled:!1,replaceState:!1,watchState:!1}},create:function(){n.extend(this,{hashNavigation:{initialized:!1,init:ce.init.bind(this),destroy:ce.destroy.bind(this),setHash:ce.setHash.bind(this),onHashCange:ce.onHashCange.bind(this)}})},on:{init:function(){this.params.hashNavigation.enabled&&this.hashNavigation.init()},destroy:function(){this.params.hashNavigation.enabled&&this.hashNavigation.destroy()},transitionEnd:function(){this.hashNavigation.initialized&&this.hashNavigation.setHash()},slideChange:function(){this.hashNavigation.initialized&&this.params.cssMode&&this.hashNavigation.setHash()}}},{name:"autoplay",params:{autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1}},create:function(){var e=this;n.extend(e,{autoplay:{running:!1,paused:!1,run:ue.run.bind(e),start:ue.start.bind(e),stop:ue.stop.bind(e),pause:ue.pause.bind(e),onVisibilityChange:function(){"hidden"===document.visibilityState&&e.autoplay.running&&e.autoplay.pause(),"visible"===document.visibilityState&&e.autoplay.paused&&(e.autoplay.run(),e.autoplay.paused=!1)},onTransitionEnd:function(t){e&&!e.destroyed&&e.$wrapperEl&&t.target===this&&(e.$wrapperEl[0].removeEventListener("transitionend",e.autoplay.onTransitionEnd),e.$wrapperEl[0].removeEventListener("webkitTransitionEnd",e.autoplay.onTransitionEnd),e.autoplay.paused=!1,e.autoplay.running?e.autoplay.run():e.autoplay.stop())}}})},on:{init:function(){this.params.autoplay.enabled&&(this.autoplay.start(),document.addEventListener("visibilitychange",this.autoplay.onVisibilityChange))},beforeTransitionStart:function(e,t){this.autoplay.running&&(t||!this.params.autoplay.disableOnInteraction?this.autoplay.pause(e):this.autoplay.stop())},sliderFirstMove:function(){this.autoplay.running&&(this.params.autoplay.disableOnInteraction?this.autoplay.stop():this.autoplay.pause())},touchEnd:function(){this.params.cssMode&&this.autoplay.paused&&!this.params.autoplay.disableOnInteraction&&this.autoplay.run()},destroy:function(){this.autoplay.running&&this.autoplay.stop(),document.removeEventListener("visibilitychange",this.autoplay.onVisibilityChange)}}},{name:"effect-fade",params:{fadeEffect:{crossFade:!1}},create:function(){n.extend(this,{fadeEffect:{setTranslate:ve.setTranslate.bind(this),setTransition:ve.setTransition.bind(this)}})},on:{beforeInit:function(){if("fade"===this.params.effect){this.classNames.push(this.params.containerModifierClass+"fade");var e={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};n.extend(this.params,e),n.extend(this.originalParams,e)}},setTranslate:function(){"fade"===this.params.effect&&this.fadeEffect.setTranslate()},setTransition:function(e){"fade"===this.params.effect&&this.fadeEffect.setTransition(e)}}},{name:"effect-cube",params:{cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}},create:function(){n.extend(this,{cubeEffect:{setTranslate:fe.setTranslate.bind(this),setTransition:fe.setTransition.bind(this)}})},on:{beforeInit:function(){if("cube"===this.params.effect){this.classNames.push(this.params.containerModifierClass+"cube"),this.classNames.push(this.params.containerModifierClass+"3d");var e={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0};n.extend(this.params,e),n.extend(this.originalParams,e)}},setTranslate:function(){"cube"===this.params.effect&&this.cubeEffect.setTranslate()},setTransition:function(e){"cube"===this.params.effect&&this.cubeEffect.setTransition(e)}}},{name:"effect-flip",params:{flipEffect:{slideShadows:!0,limitRotation:!0}},create:function(){n.extend(this,{flipEffect:{setTranslate:me.setTranslate.bind(this),setTransition:me.setTransition.bind(this)}})},on:{beforeInit:function(){if("flip"===this.params.effect){this.classNames.push(this.params.containerModifierClass+"flip"),this.classNames.push(this.params.containerModifierClass+"3d");var e={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};n.extend(this.params,e),n.extend(this.originalParams,e)}},setTranslate:function(){"flip"===this.params.effect&&this.flipEffect.setTranslate()},setTransition:function(e){"flip"===this.params.effect&&this.flipEffect.setTransition(e)}}},{name:"effect-coverflow",params:{coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0}},create:function(){n.extend(this,{coverflowEffect:{setTranslate:ge.setTranslate.bind(this),setTransition:ge.setTransition.bind(this)}})},on:{beforeInit:function(){"coverflow"===this.params.effect&&(this.classNames.push(this.params.containerModifierClass+"coverflow"),this.classNames.push(this.params.containerModifierClass+"3d"),this.params.watchSlidesProgress=!0,this.originalParams.watchSlidesProgress=!0)},setTranslate:function(){"coverflow"===this.params.effect&&this.coverflowEffect.setTranslate()},setTransition:function(e){"coverflow"===this.params.effect&&this.coverflowEffect.setTransition(e)}}},{name:"thumbs",params:{thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-container-thumbs"}},create:function(){n.extend(this,{thumbs:{swiper:null,init:be.init.bind(this),update:be.update.bind(this),onThumbClick:be.onThumbClick.bind(this)}})},on:{beforeInit:function(){var e=this.params.thumbs;e&&e.swiper&&(this.thumbs.init(),this.thumbs.update(!0))},slideChange:function(){this.thumbs.swiper&&this.thumbs.update()},update:function(){this.thumbs.swiper&&this.thumbs.update()},resize:function(){this.thumbs.swiper&&this.thumbs.update()},observerUpdate:function(){this.thumbs.swiper&&this.thumbs.update()},setTransition:function(e){var t=this.thumbs.swiper;t&&t.setTransition(e)},beforeDestroy:function(){var e=this.thumbs.swiper;e&&this.thumbs.swiperCreated&&e&&e.destroy()}}}];return void 0===W.use&&(W.use=W.Class.use,W.installModule=W.Class.installModule),W.use(we),W}));
// Jexcel core object

var jexcel = (function(el, options) {
    // Create jexcel object
    var obj = {};
    obj.options = {};

    if (! (el instanceof Element || el instanceof HTMLDocument)) {
        console.error('JEXCEL: el is not a valid DOM element');
        return false;
    } else if (el.tagName == 'TABLE') {
        if (options = jexcel.createFromTable(el, options)) {
            var div = document.createElement('div');
            el.parentNode.insertBefore(div, el);
            el.remove();
            el = div;
        } else {
            console.error('JEXCEL: el is not a valid DOM element');
            return false;
        }
    }

    // Loading default configuration
    var defaults = {
        // External data
        url:null,
        // Ajax options
        method: 'GET',
        requestVariables: null,
        // Data
        data:null,
        // Custom sorting handler
        sorting:null,
        // Copy behavior
        copyCompatibility:false,
        root:null,
        // Rows and columns definitions
        rows:[],
        columns:[],
        // Deprected legacy options
        colHeaders:[],
        colWidths:[],
        colAlignments:[],
        nestedHeaders:null,
        // Column width that is used by default
        defaultColWidth:50,
        defaultColAlign:'center',
        // Spare rows and columns
        minSpareRows:0,
        minSpareCols:0,
        // Minimal table dimensions
        minDimensions:[0,0],
        // Allow Export
        allowExport:true,
        // @type {boolean} - Include the header titles on download
        includeHeadersOnDownload:false,
        // @type {boolean} - Include the header titles on copy
        includeHeadersOnCopy:false,
        // Allow column sorting
        columnSorting:true,
        // Allow column dragging
        columnDrag:false,
        // Allow column resizing
        columnResize:true,
        // Allow row resizing
        rowResize:false,
        // Allow row dragging
        rowDrag:true,
        // Allow table edition
        editable:true,
        // Allow new rows
        allowInsertRow:true,
        // Allow new rows
        allowManualInsertRow:true,
        // Allow new columns
        allowInsertColumn:true,
        // Allow new rows
        allowManualInsertColumn:true,
        // Allow row delete
        allowDeleteRow:true,
        // Allow deleting of all rows
        allowDeletingAllRows:false,
        // Allow column delete
        allowDeleteColumn:true,
        // Allow rename column
        allowRenameColumn:true,
        // Allow comments
        allowComments:false,
        // Global wrap
        wordWrap:false,
        // Image options
        imageOptions: null,
        // CSV source
        csv:null,
        // Filename
        csvFileName:'jexcel',
        // Consider first line as header
        csvHeaders:true,
        // Delimiters
        csvDelimiter:',',
        // First row as header
        parseTableFirstRowAsHeader:false,
        parseTableAutoCellType:false,
        // Disable corner selection
        selectionCopy:true,
        // Merged cells
        mergeCells:{},
        // Create toolbar
        toolbar:null,
        // Allow search
        search:false,
        // Create pagination
        pagination:false,
        paginationOptions:null,
        // Full screen
        fullscreen:false,
        // Lazy loading
        lazyLoading:false,
        loadingSpin:false,
        // Table overflow
        tableOverflow:false,
        tableHeight:'300px',
        tableWidth:null,
        textOverflow:false,
        // Meta
        meta: null,
        // Style
        style:null,
        // Execute formulas
        parseFormulas:true,
        autoIncrement:true,
        autoCasting:true,
        // Security
        secureFormulas:true,
        stripHTML:true,
        stripHTMLOnCopy:false,
        // Filters
        filters:false,
        footers:null,
        // Event handles
        onundo:null,
        onredo:null,
        onload:null,
        onchange:null,
        oncomments:null,
        onbeforechange:null,
        onafterchanges:null,
        onbeforeinsertrow: null,
        oninsertrow:null,
        onbeforeinsertcolumn: null,
        oninsertcolumn:null,
        onbeforedeleterow:null,
        ondeleterow:null,
        onbeforedeletecolumn:null,
        ondeletecolumn:null,
        onmoverow:null,
        onmovecolumn:null,
        onresizerow:null,
        onresizecolumn:null,
        onsort:null,
        onselection:null,
        oncopy:null,
        onpaste:null,
        onbeforepaste:null,
        onmerge:null,
        onfocus:null,
        onblur:null,
        onchangeheader:null,
        oncreateeditor:null,
        oneditionstart:null,
        oneditionend:null,
        onchangestyle:null,
        onchangemeta:null,
        onchangepage:null,
        onbeforesave:null,
        onsave:null,
        // Global event dispatcher
        onevent:null,
        // Persistance
        persistance:false,
        // Customize any cell behavior
        updateTable:null,
        // Detach the HTML table when calling updateTable
        detachForUpdates: false,
        freezeColumns:null,
        // Texts
        text:{
            noRecordsFound: 'No records found',
            showingPage: 'Showing page {0} of {1} entries',
            show: 'Show ',
            search: 'Search',
            entries: ' entries',
            columnName: 'Column name',
            insertANewColumnBefore: 'Insert a new column before',
            insertANewColumnAfter: 'Insert a new column after',
            deleteSelectedColumns: 'Delete selected columns',
            renameThisColumn: 'Rename this column',
            orderAscending: 'Order ascending',
            orderDescending: 'Order descending',
            insertANewRowBefore: 'Insert a new row before',
            insertANewRowAfter: 'Insert a new row after',
            deleteSelectedRows: 'Delete selected rows',
            editComments: 'Edit comments',
            addComments: 'Add comments',
            comments: 'Comments',
            clearComments: 'Clear comments',
            copy: 'Copy...',
            paste: 'Paste...',
            saveAs: 'Save as...',
            about: 'About',
            areYouSureToDeleteTheSelectedRows: 'Are you sure to delete the selected rows?',
            areYouSureToDeleteTheSelectedColumns: 'Are you sure to delete the selected columns?',
            thisActionWillDestroyAnyExistingMergedCellsAreYouSure: 'This action will destroy any existing merged cells. Are you sure?',
            thisActionWillClearYourSearchResultsAreYouSure: 'This action will clear your search results. Are you sure?',
            thereIsAConflictWithAnotherMergedCell: 'There is a conflict with another merged cell',
            invalidMergeProperties: 'Invalid merged properties',
            cellAlreadyMerged: 'Cell already merged',
            noCellsSelected: 'No cells selected',
        },
        // About message
        about:"jExcel CE Spreadsheet\nVersion 4.5.0\nWebsite: https://bossanova.uk/jexcel/v3",
    };

    // Loading initial configuration from user
    for (var property in defaults) {
        if (options && options.hasOwnProperty(property)) {
            if (property === 'text') {
                obj.options[property] = defaults[property];
                for (var textKey in options[property]) {
                    if (options[property].hasOwnProperty(textKey)){
                        obj.options[property][textKey] = options[property][textKey];
                    }
                }
            } else {
                obj.options[property] = options[property];
            }
        } else {
            obj.options[property] = defaults[property];
        }
    }

    // Global elements
    obj.el = el;
    obj.corner = null;
    obj.contextMenu = null;
    obj.textarea = null;
    obj.ads = null;
    obj.content = null;
    obj.table = null;
    obj.thead = null;
    obj.tbody = null;
    obj.rows = [];
    obj.results = null;
    obj.searchInput = null;
    obj.toolbar = null;
    obj.pagination = null;
    obj.pageNumber = null;
    obj.headerContainer = null;
    obj.colgroupContainer = null;

    // Containers
    obj.headers = [];
    obj.records = [];
    obj.history = [];
    obj.formula = [];
    obj.colgroup = [];
    obj.selection = [];
    obj.highlighted  = [];
    obj.selectedCell = null;
    obj.selectedContainer = null;
    obj.style = [];
    obj.data = null;
    obj.filter = null;
    obj.filters = [];

    // Internal controllers
    obj.cursor = null;
    obj.historyIndex = -1;
    obj.ignoreEvents = false;
    obj.ignoreHistory = false;
    obj.edition = null;
    obj.hashString = null;
    obj.resizing = null;
    obj.dragging = null;

    // Lazy loading
    if (obj.options.lazyLoading == true && (obj.options.tableOverflow == false && obj.options.fullscreen == false)) {
        console.error('JEXCEL: The lazyloading only works when tableOverflow = yes or fullscreen = yes');
        obj.options.lazyLoading = false;
    }
    
    /**
     * Activate/Disable fullscreen 
     * use programmatically : table.fullscreen(); or table.fullscreen(true); or table.fullscreen(false);
     * @Param {boolean} activate
     */
    obj.fullscreen = function(activate) {
        // If activate not defined, get reverse options.fullscreen
        if (activate == null) {
            activate = ! obj.options.fullscreen;
        }

        // If change
        if (obj.options.fullscreen != activate) {
            obj.options.fullscreen = activate;

            // Test LazyLoading conflict
            if (activate == true) {
                el.classList.add('fullscreen');
            } else {
                el.classList.remove('fullscreen');
            }
        } 
    }

    /**
     * Trigger events
     */
    obj.dispatch = function(event) {
        // Dispatch events
        if (! obj.ignoreEvents) {
            // Call global event
            if (typeof(obj.options.onevent) == 'function') {
                var ret = obj.options.onevent.apply(this, arguments);
            }
            // Call specific events
            if (typeof(obj.options[event]) == 'function') {
                var ret = obj.options[event].apply(this, Array.prototype.slice.call(arguments, 1));
            }
        }

        // Persistance
        if (event == 'onafterchanges' && obj.options.persistance) {
            var url = obj.options.persistance == true ? obj.options.url : obj.options.persistance;
            var data = obj.prepareJson(arguments[2]);
            obj.save(url, data);
        }

        return ret;
    }

    /**
     * Prepare the jexcel table
     * 
     * @Param config
     */
    obj.prepareTable = function() {
        // Loading initial data from remote sources
        var results = [];

        // Number of columns
        var size = obj.options.columns.length;

        if (obj.options.data && typeof(obj.options.data[0]) !== 'undefined') {
            // Data keys
            var keys = Object.keys(obj.options.data[0]);

            if (keys.length > size) {
                size = keys.length;
            }
        }

        // Minimal dimensions
        if (obj.options.minDimensions[0] > size) {
            size = obj.options.minDimensions[0];
        }

        // Requests
        var multiple = [];

        // Preparations
        for (var i = 0; i < size; i++) {
            // Deprected options. You should use only columns
            if (! obj.options.colHeaders[i]) {
                obj.options.colHeaders[i] = '';
            }
            if (! obj.options.colWidths[i]) {
                obj.options.colWidths[i] = obj.options.defaultColWidth;
            }
            if (! obj.options.colAlignments[i]) {
                obj.options.colAlignments[i] = obj.options.defaultColAlign;
            }

            // Default column description
            if (! obj.options.columns[i]) {
                obj.options.columns[i] = { type:'text' };
            } else if (! obj.options.columns[i].type) {
                obj.options.columns[i].type = 'text';
            }
            if (! obj.options.columns[i].name) {
                obj.options.columns[i].name = keys && keys[i] ? keys[i] : i;
            }
            if (! obj.options.columns[i].source) {
                obj.options.columns[i].source = [];
            }
            if (! obj.options.columns[i].options) {
                obj.options.columns[i].options = [];
            }
            if (! obj.options.columns[i].editor) {
                obj.options.columns[i].editor = null;
            }
            if (! obj.options.columns[i].allowEmpty) {
                obj.options.columns[i].allowEmpty = false;
            }
            if (! obj.options.columns[i].title) {
                obj.options.columns[i].title = obj.options.colHeaders[i] ? obj.options.colHeaders[i] : '';
            }
            if (! obj.options.columns[i].width) {
                obj.options.columns[i].width = obj.options.colWidths[i] ? obj.options.colWidths[i] : obj.options.defaultColWidth;
            }
            if (! obj.options.columns[i].align) {
                obj.options.columns[i].align = obj.options.colAlignments[i] ? obj.options.colAlignments[i] : 'center';
            }

            // Pre-load initial source for json autocomplete
            if (obj.options.columns[i].type == 'autocomplete' || obj.options.columns[i].type == 'dropdown') {
                // if remote content
                if (obj.options.columns[i].url) {
                    multiple.push({
                        url: obj.options.columns[i].url,
                        index: i,
                        method: 'GET',
                        dataType: 'json',
                        success: function(data) {
                            var source = [];
                            for (var i = 0; i < data.length; i++) {
                                obj.options.columns[this.index].source.push(data[i]);
                            }
                        }
                    });
                }
            } else if (obj.options.columns[i].type == 'calendar') {
                // Default format for date columns
                if (! obj.options.columns[i].options.format) {
                    obj.options.columns[i].options.format = 'DD/MM/YYYY';
                }
            }
        }

        // Create the table when is ready
        if (! multiple.length) {
            obj.createTable();
        } else {
            jSuites.ajax(multiple, function() {
                obj.createTable();
            });
        }
    }

    obj.createTable = function() {
        // Elements
        obj.table = document.createElement('table');
        obj.thead = document.createElement('thead');
        obj.tbody = document.createElement('tbody');

        // Create headers controllers
        obj.headers = [];
        obj.colgroup = [];

        // Create table container
        obj.content = document.createElement('div');
        obj.content.classList.add('jexcel_content');
        obj.content.onscroll = function(e) {
            obj.scrollControls(e);
        }
        obj.content.onwheel = function(e) {
            obj.wheelControls(e);
        }

        // Create toolbar object
        obj.toolbar = document.createElement('div');
        obj.toolbar.classList.add('jexcel_toolbar');

        // Search
        var searchContainer = document.createElement('div');
        var searchText = document.createTextNode((obj.options.text.search) + ': ');
        obj.searchInput = document.createElement('input');
        obj.searchInput.classList.add('jexcel_search');
        searchContainer.appendChild(searchText);
        searchContainer.appendChild(obj.searchInput);
        obj.searchInput.onfocus = function() {
            obj.resetSelection();
        }

        // Pagination select option
        var paginationUpdateContainer = document.createElement('div');

        if (obj.options.pagination > 0 && obj.options.paginationOptions && obj.options.paginationOptions.length > 0) {
            obj.paginationDropdown = document.createElement('select');
            obj.paginationDropdown.classList.add('jexcel_pagination_dropdown');
            obj.paginationDropdown.onchange = function() {
                obj.options.pagination = parseInt(this.value);
                obj.page(0);
            }

            for (var i = 0; i < obj.options.paginationOptions.length; i++) {
                var temp = document.createElement('option');
                temp.value = obj.options.paginationOptions[i];
                temp.innerHTML = obj.options.paginationOptions[i];
                obj.paginationDropdown.appendChild(temp);
            }

            // Set initial pagination value
            obj.paginationDropdown.value = obj.options.pagination;

            paginationUpdateContainer.appendChild(document.createTextNode(obj.options.text.show));
            paginationUpdateContainer.appendChild(obj.paginationDropdown);
            paginationUpdateContainer.appendChild(document.createTextNode(obj.options.text.entries));
        }

        // Filter and pagination container
        var filter = document.createElement('div');
        filter.classList.add('jexcel_filter');
        filter.appendChild(paginationUpdateContainer);
        filter.appendChild(searchContainer);

        // Colsgroup
        obj.colgroupContainer = document.createElement('colgroup');
        var tempCol = document.createElement('col');
        tempCol.setAttribute('width', '50');
        obj.colgroupContainer.appendChild(tempCol);

        // Nested
        if (obj.options.nestedHeaders && obj.options.nestedHeaders.length > 0) {
            // Flexible way to handle nestedheaders
            if (obj.options.nestedHeaders[0] && obj.options.nestedHeaders[0][0]) {
                for (var j = 0; j < obj.options.nestedHeaders.length; j++) {
                    obj.thead.appendChild(obj.createNestedHeader(obj.options.nestedHeaders[j]));
                }
            } else {
                obj.thead.appendChild(obj.createNestedHeader(obj.options.nestedHeaders));
            }
        }

        // Row
        obj.headerContainer = document.createElement('tr');
        var tempCol = document.createElement('td');
        tempCol.classList.add('jexcel_selectall');
        obj.headerContainer.appendChild(tempCol);

        for (var i = 0; i < obj.options.columns.length; i++) {
            // Create header
            obj.createCellHeader(i);
            // Append cell to the container
            obj.headerContainer.appendChild(obj.headers[i]);
            obj.colgroupContainer.appendChild(obj.colgroup[i]);
        }

        obj.thead.appendChild(obj.headerContainer);

        // Filters
        if (obj.options.filters == true) {
            obj.filter = document.createElement('tr');
            var td = document.createElement('td');
            obj.filter.appendChild(td);

            for (var i = 0; i < obj.options.columns.length; i++) {
                var td = document.createElement('td');
                td.innerHTML = '&nbsp;';
                td.setAttribute('data-x', i);
                td.className = 'jexcel_column_filter';
                if (obj.options.columns[i].type == 'hidden') {
                    td.style.display = 'none';
                }
                obj.filter.appendChild(td);
            }

            obj.thead.appendChild(obj.filter);
        }

        // Content table
        obj.table = document.createElement('table');
        obj.table.classList.add('jexcel');
        obj.table.setAttribute('cellpadding', '0');
        obj.table.setAttribute('cellspacing', '0');
        obj.table.setAttribute('unselectable', 'yes');
        //obj.table.setAttribute('onselectstart', 'return false');
        obj.table.appendChild(obj.colgroupContainer);
        obj.table.appendChild(obj.thead);
        obj.table.appendChild(obj.tbody);

        if (! obj.options.textOverflow) {
            obj.table.classList.add('jexcel_overflow');
        }

        // Spreadsheet corner
        obj.corner = document.createElement('div');
        obj.corner.className = 'jexcel_corner';
        obj.corner.setAttribute('unselectable', 'on');
        obj.corner.setAttribute('onselectstart', 'return false');

        if (obj.options.selectionCopy == false) {
            obj.corner.style.display = 'none';
        }

        // Textarea helper
        obj.textarea = document.createElement('textarea');
        obj.textarea.className = 'jexcel_textarea';
        obj.textarea.id = 'jexcel_textarea';
        obj.textarea.tabIndex = '-1';

        // Contextmenu container
        obj.contextMenu = document.createElement('div');
        obj.contextMenu.className = 'jexcel_contextmenu';

        // Create element
        jSuites.contextmenu(obj.contextMenu, {
            onclick:function() {
                obj.contextMenu.contextmenu.close(false);
            }
        });

        // Powered by jExcel
        var ads = document.createElement('a');
        ads.setAttribute('href', 'https://bossanova.uk/jexcel/');
        obj.ads = document.createElement('div');
        obj.ads.className = 'jexcel_about';
        try {
            if (typeof(sessionStorage) !== "undefined" && ! sessionStorage.getItem('jexcel')) {
                sessionStorage.setItem('jexcel', true);
                var img = document.createElement('img');
                img.src = '//bossanova.uk/jexcel/logo.png';
                ads.appendChild(img);
            }
        } catch (exception) {
        }
        var span = document.createElement('span');
        span.innerHTML = 'Jexcel spreadsheet';
        ads.appendChild(span);
        obj.ads.appendChild(ads);

        // Create table container TODO: frozen columns
        var container = document.createElement('div');
        container.classList.add('jexcel_table');

        // Pagination
        obj.pagination = document.createElement('div');
        obj.pagination.classList.add('jexcel_pagination');
        var paginationInfo = document.createElement('div');
        var paginationPages = document.createElement('div');
        obj.pagination.appendChild(paginationInfo);
        obj.pagination.appendChild(paginationPages);

        // Hide pagination if not in use
        if (! obj.options.pagination) {
            obj.pagination.style.display = 'none';
        }

        // Append containers to the table
        if (obj.options.search == true) {
            el.appendChild(filter);
        }

        // Elements
        obj.content.appendChild(obj.table);
        obj.content.appendChild(obj.corner);
        obj.content.appendChild(obj.textarea);

        el.appendChild(obj.toolbar);
        el.appendChild(obj.content);
        el.appendChild(obj.pagination);
        el.appendChild(obj.contextMenu);
        el.appendChild(obj.ads);
        el.classList.add('jexcel_container');

        // Create toolbar
        if (obj.options.toolbar && obj.options.toolbar.length) {
            obj.createToolbar();
        }

        // Fullscreen
        if (obj.options.fullscreen == true) {
            el.classList.add('fullscreen');
        } else {
            // Overflow
            if (obj.options.tableOverflow == true) {
                if (obj.options.tableHeight) {
                    obj.content.style['overflow-y'] = 'auto';
                    obj.content.style.maxHeight = obj.options.tableHeight;
                }
                if (obj.options.tableWidth) {
                    obj.content.style['overflow-x'] = 'auto';
                    obj.content.style.width = obj.options.tableWidth;
                }
            }
        }

        // With toolbars
        if (obj.options.tableOverflow != true && obj.options.toolbar) {
            el.classList.add('with-toolbar');
        }

        // Actions
        if (obj.options.columnDrag == true) {
            obj.thead.classList.add('draggable');
        }
        if (obj.options.columnResize == true) {
            obj.thead.classList.add('resizable');
        }
        if (obj.options.rowDrag == true) {
            obj.tbody.classList.add('draggable');
        }
        if (obj.options.rowResize == true) {
            obj.tbody.classList.add('resizable');
        }

        // Load data
        obj.setData();

        // Style
        if (obj.options.style) {
            obj.setStyle(obj.options.style, null, null, 1, 1);
        }
    }

    /**
     * Refresh the data
     * 
     * @return void
     */
    obj.refresh = function() {
        if (obj.options.url) {
            // Loading
            if (obj.options.loadingSpin == true) {
                jSuites.loading.show();
            }

            jSuites.ajax({
                url: obj.options.url,
                method: obj.options.method,
                data: obj.options.requestVariables,
                dataType: 'json',
                success: function(result) {
                    // Data
                    obj.options.data = (result.data) ? result.data : result;
                    // Prepare table
                    obj.setData();
                    // Hide spin
                    if (obj.options.loadingSpin == true) {
                        jSuites.loading.hide();
                    }
                }
            });
        } else {
            obj.setData();
        }
    }

    /**
     * Set data
     * 
     * @param array data In case no data is sent, default is reloaded
     * @return void
     */
    obj.setData = function(data) {
        // Update data
        if (data) {
            if (typeof(data) == 'string') {
                data = JSON.parse(data);
            }

            obj.options.data = data;
        }

        // Data
        if (! obj.options.data) {
            obj.options.data = [];
        }

        // Prepare data
        if (obj.options.data && obj.options.data[0]) {
            if (! Array.isArray(obj.options.data[0])) {
                var data = [];
                for (var j = 0; j < obj.options.data.length; j++) {
                    var row = [];
                    for (var i = 0; i < obj.options.columns.length; i++) {
                        row[i] = obj.options.data[j][obj.options.columns[i].name];
                    }
                    data.push(row);
                }

                obj.options.data = data;
            }
        }

        // Adjust minimal dimensions
        var j = 0;
        var i = 0;
        var size_i = obj.options.columns.length;
        var size_j = obj.options.data.length;
        var min_i = obj.options.minDimensions[0];
        var min_j = obj.options.minDimensions[1];
        var max_i = min_i > size_i ? min_i : size_i;
        var max_j = min_j > size_j ? min_j : size_j;

        for (j = 0; j < max_j; j++) {
            for (i = 0; i < max_i; i++) {
                if (obj.options.data[j] == undefined) {
                    obj.options.data[j] = [];
                }

                if (obj.options.data[j][i] == undefined) {
                    obj.options.data[j][i] = '';
                }
            }
        }

        // Reset containers
        obj.rows = [];
        obj.results = null;
        obj.records = [];
        obj.history = [];

        // Reset internal controllers
        obj.historyIndex = -1;

        // Reset data
        obj.tbody.innerHTML = '';

        // Lazy loading
        if (obj.options.lazyLoading == true) {
            // Load only 100 records
            var startNumber = 0
            var finalNumber = obj.options.data.length < 100 ? obj.options.data.length : 100;

            if (obj.options.pagination) {
                obj.options.pagination = false;
                console.error('JEXCEL: Pagination will be disable due the lazyLoading');
            }
        } else if (obj.options.pagination) {
            // Pagination
            if (! obj.pageNumber) {
                obj.pageNumber = 0;
            }
            var quantityPerPage = obj.options.pagination;
            startNumber = (obj.options.pagination * obj.pageNumber);
            finalNumber = (obj.options.pagination * obj.pageNumber) + obj.options.pagination;

            if (obj.options.data.length < finalNumber) {
                finalNumber = obj.options.data.length;
            }
        } else {
            var startNumber = 0;
            var finalNumber = obj.options.data.length;
        }

        // Append nodes to the HTML
        for (j = 0; j < obj.options.data.length; j++) {
            // Create row
            var tr = obj.createRow(j, obj.options.data[j]);
            // Append line to the table
            if (j >= startNumber && j < finalNumber) {
                obj.tbody.appendChild(tr);
            }
        }

        if (obj.options.lazyLoading == true) {
            // Do not create pagination with lazyloading activated
        } else if (obj.options.pagination) {
            obj.updatePagination();
        }

        // Merge cells
        if (obj.options.mergeCells) {
            var keys = Object.keys(obj.options.mergeCells);
            for (var i = 0; i < keys.length; i++) {
                var num = obj.options.mergeCells[keys[i]];
                obj.setMerge(keys[i], num[0], num[1], 1);
            }
        }

        // Updata table with custom configurations if applicable
        obj.updateTable();

        // Onload
        obj.dispatch('onload', el, obj);
    }

    /**
     * Get the whole table data
     * 
     * @param bool get highlighted cells only
     * @return array data
     */
    obj.getData = function(highlighted, dataOnly) {
        // Control vars
        var dataset = [];
        var px = 0;
        var py = 0;

        // Data type
        var dataType = dataOnly == true || obj.options.copyCompatibility == false ? true : false;

        // Column and row length
        var x = obj.options.columns.length
        var y = obj.options.data.length

        // Go through the columns to get the data
        for (var j = 0; j < y; j++) {
            px = 0;
            for (var i = 0; i < x; i++) {
                // Cell selected or fullset
                if (! highlighted || obj.records[j][i].classList.contains('highlight')) {
                    // Get value
                    if (! dataset[py]) {
                        dataset[py] = [];
                    }
                    if (! dataType) {
                        dataset[py][px] = obj.records[j][i].innerHTML;
                    } else {
                        dataset[py][px] = obj.options.data[j][i];
                    }
                    px++;
                }
            }
            if (px > 0) {
                py++;
            }
       }

       return dataset;
    }

    /**
     * Get json data by row number
     *
     * @param integer row number
     * @return object
     */
    obj.getJsonRow = function(rowNumber) {
        var rowData = obj.options.data[rowNumber];
        var x = obj.options.columns.length

        var row = {};
        for (var i = 0; i < x; i++) {
            if (! obj.options.columns[i].name) {
                obj.options.columns[i].name = i;
            }
            row[obj.options.columns[i].name] = rowData[i];
        }

        return row;
    }

    /**
     * Get the whole table data
     * 
     * @param bool highlighted cells only
     * @return string value
     */
    obj.getJson = function(highlighted) {
        // Control vars
        var data = [];

        // Column and row length
        var x = obj.options.columns.length
        var y = obj.options.data.length

        // Go through the columns to get the data
        for (var j = 0; j < y; j++) {
            var row = null;
            for (var i = 0; i < x; i++) {
                if (! highlighted || obj.records[j][i].classList.contains('highlight')) {
                    if (row == null) {
                        row = {};
                    }
                    if (! obj.options.columns[i].name) {
                        obj.options.columns[i].name = i;
                    }
                    row[obj.options.columns[i].name] = obj.options.data[j][i];
                }
            }

            if (row != null) {
                data.push(row);
            }
       }

       return data;
    }

    /**
     * Prepare JSON in the correct format
     */
    obj.prepareJson = function(data) {
        var rows = [];
        for (var i = 0; i < data.length; i++) {
            var x = data[i].x;
            var y = data[i].y;
            var k = obj.options.columns[x].name ? obj.options.columns[x].name : x;

            // Create row
            if (! rows[y]) {
                rows[y] = {
                    row: y,
                    data: {},
                };
            }
            rows[y].data[k] = data[i].newValue;
        }

        // Filter rows
        return rows.filter(function (el) {
            return el != null;
        });
    }

    /**
     * Post json to a remote server
     */
    obj.save = function(url, data) {
        // Parse anything in the data before sending to the server
        var ret = obj.dispatch('onbeforesave', el, obj, data);

            if (ret) {
                var data = ret;
            } else {
                if (ret === false) {
                    return false;
                }
            }

            // Remove update
        jSuites.ajax({
            url: url,
            method: 'POST',
            dataType: 'json',
            data: { data: JSON.stringify(data) },
            success: function(result) {
                // Event
                obj.dispatch('onsave', el, obj, data);
            }
        });
    }

    /**
     * Get a row data by rowNumber
     */
    obj.getRowData = function(rowNumber) {
        return obj.options.data[rowNumber];
    }

    /**
     * Set a row data by rowNumber
     */
    obj.setRowData = function(rowNumber, data) {
        for (var i = 0; i < obj.headers.length; i++) {
            // Update cell
            var columnName = jexcel.getColumnNameFromId([ i, rowNumber ]);
            // Set value
            if (data[i] != null) {
                obj.setValue(columnName, data[i]);
            }
        }
    }

    /**
     * Get a column data by columnNumber
     */
    obj.getColumnData = function(columnNumber) {
        var dataset = [];
        // Go through the rows to get the data
        for (var j = 0; j < obj.options.data.length; j++) {
            dataset.push(obj.options.data[j][columnNumber]);
        }
        return dataset;
    }

    /**
     * Set a column data by colNumber
     */
    obj.setColumnData = function(colNumber, data) {
        for (var j = 0; j < obj.rows.length; j++) {
            // Update cell
            var columnName = jexcel.getColumnNameFromId([ colNumber, j ]);
            // Set value
            if (data[j] != null) {
                obj.setValue(columnName, data[j]);
            }
        }
    }

    /**
     * Create row
     */
    obj.createRow = function(j, data) {
        // Create container
        if (! obj.records[j]) {
            obj.records[j] = [];
        }
        // Default data
        if (! data) {
            var data = obj.options.data[j];
        }
        // New line of data to be append in the table
        obj.rows[j] = document.createElement('tr');
        obj.rows[j].setAttribute('data-y', j);
        // Index
        var index = null;
        // Definitions
        if (obj.options.rows[j]) {
            if (obj.options.rows[j].height) {
                obj.rows[j].style.height = obj.options.rows[j].height;
            }
            if (obj.options.rows[j].title) {
                index = obj.options.rows[j].title;
            }
        }
        if (! index) {
            index = parseInt(j + 1);
        }
        // Row number label
        var td = document.createElement('td');
        td.innerHTML = index;
        td.setAttribute('data-y', j);
        td.className = 'jexcel_row';
        obj.rows[j].appendChild(td);

        // Data columns
        for (var i = 0; i < obj.options.columns.length; i++) {
            // New column of data to be append in the line
            obj.records[j][i] = obj.createCell(i, j, data[i]);
            // Add column to the row
            obj.rows[j].appendChild(obj.records[j][i]);
        }

        // Add row to the table body
        return obj.rows[j];
    }

    obj.parseValue = function(i, j, value) {
        if ((''+value).substr(0,1) == '=' && obj.options.parseFormulas == true) {
            value = obj.executeFormula(value, i, j)
        }
        if (obj.options.columns[i].mask) {
            var decimal = obj.options.columns[i].decimal || '.';
            value = '' + jSuites.mask.run(value, obj.options.columns[i].mask, decimal);
        }

        return value;
    }

    /**
     * Create cell
     */
    obj.createCell = function(i, j, value) {
        // Create cell and properties
        var td = document.createElement('td');
        td.setAttribute('data-x', i);
        td.setAttribute('data-y', j);

        // Security
        if ((''+value).substr(0,1) == '=' && obj.options.secureFormulas == true) {
            var val = secureFormula(value);
            if (val != value) {
                // Update the data container
                value = val;
            }
        }

        // Custom column
        if (obj.options.columns[i].editor) {
            if (obj.options.stripHTML === false || obj.options.columns[i].stripHTML === false) {
                td.innerHTML =  value;
            } else {
                td.innerText = value;
            }
            if (typeof(obj.options.columns[i].editor.createCell) == 'function') {
                td = obj.options.columns[i].editor.createCell(td);
            }
        } else {
            // Hidden column
            if (obj.options.columns[i].type == 'hidden') {
                td.style.display = 'none';
                td.innerText = value;
            } else if (obj.options.columns[i].type == 'checkbox' || obj.options.columns[i].type == 'radio') {
                // Create input
                var element = document.createElement('input');
                element.type = obj.options.columns[i].type;
                element.name = 'c' + i;
                element.checked = (value == 1 || value == true || value == 'true') ? true : false;
                element.onclick = function() {
                    obj.setValue(td, this.checked);
                }

                if (obj.options.columns[i].readOnly == true || obj.options.editable == false) {
                    element.setAttribute('disabled', 'disabled');
                }

                // Append to the table
                td.appendChild(element);
                // Make sure the values are correct
                obj.options.data[j][i] = element.checked;
            } else if (obj.options.columns[i].type == 'calendar') {
                // Try formatted date
                var formatted = jSuites.calendar.extractDateFromString(value, obj.options.columns[i].options.format);
                // Create calendar cell
                td.innerText = jSuites.calendar.getDateString(formatted ? formatted : value, obj.options.columns[i].options.format);
            } else if (obj.options.columns[i].type == 'dropdown' || obj.options.columns[i].type == 'autocomplete') {
                // Create dropdown cell
                td.classList.add('jexcel_dropdown');
                td.innerText = obj.getDropDownValue(i, value);
            } else if (obj.options.columns[i].type == 'color') {
                if (obj.options.columns[i].render == 'square') {
                    var color = document.createElement('div');
                    color.className = 'color';
                    color.style.backgroundColor = value;
                    td.appendChild(color);
                } else {
                    td.style.color = value;
                    td.innerText = value;
                }
            } else if (obj.options.columns[i].type == 'image') {
                if (value && value.substr(0, 10) == 'data:image') {
                    var img = document.createElement('img');
                    img.src = value;
                    td.appendChild(img);
                }
            } else {
                if (obj.options.columns[i].type == 'html') {
                    td.innerHTML = stripScript(obj.parseValue(i, j, value));
                } else {
                    if (obj.options.stripHTML === false || obj.options.columns[i].stripHTML === false) {
                        td.innerHTML = stripScript(obj.parseValue(i, j, value));
                    } else {
                        td.innerText = obj.parseValue(i, j, value);
                    }
                }
            }
        }

        // Readonly
        if (obj.options.columns[i].readOnly == true) {
            td.className = 'readonly';
        }

        // Text align
        var colAlign = obj.options.columns[i].align ? obj.options.columns[i].align : 'center';
        td.style.textAlign = colAlign;

        // Wrap option
        if (obj.options.columns[i].wordWrap != false && (obj.options.wordWrap == true || obj.options.columns[i].wordWrap == true || td.innerHTML.length > 200)) {
            td.style.whiteSpace = 'pre-wrap';
        }

        // Overflow
        if (i > 0) {
            if (this.options.textOverflow == true) {
                if (value || td.innerHTML) {
                    obj.records[j][i-1].style.overflow = 'hidden';
                } else {
                    if (i == obj.options.columns.length - 1) {
                        td.style.overflow = 'hidden';
                    }
                }
            }
        }
        return td;
    }

    obj.createCellHeader = function(colNumber) {
        // Create col global control
        var colWidth = obj.options.columns[colNumber].width ? obj.options.columns[colNumber].width : obj.options.defaultColWidth;
        var colAlign = obj.options.columns[colNumber].align ? obj.options.columns[colNumber].align : obj.options.defaultColAlign;

        // Create header cell
        obj.headers[colNumber] = document.createElement('td');
        if (obj.options.stripHTML) {
            obj.headers[colNumber].innerText = obj.options.columns[colNumber].title ? obj.options.columns[colNumber].title : jexcel.getColumnName(colNumber);
        } else {
            obj.headers[colNumber].innerHTML = obj.options.columns[colNumber].title ? obj.options.columns[colNumber].title : jexcel.getColumnName(colNumber);
        }
        obj.headers[colNumber].setAttribute('data-x', colNumber);
        obj.headers[colNumber].style.textAlign = colAlign;
        if (obj.options.columns[colNumber].title) {
            obj.headers[colNumber].setAttribute('title', obj.options.columns[colNumber].textContent);
        }

        // Width control
        obj.colgroup[colNumber] = document.createElement('col');
        obj.colgroup[colNumber].setAttribute('width', colWidth);

        // Hidden column
        if (obj.options.columns[colNumber].type == 'hidden') {
            obj.headers[colNumber].style.display = 'none';
            obj.colgroup[colNumber].style.display = 'none';
        }
    }

    /**
     * Update a nested header title
     */
    obj.updateNestedHeader = function(x, y, title) {
        if (obj.options.nestedHeaders[y][x].title) {
            obj.options.nestedHeaders[y][x].title = title;
            obj.options.nestedHeaders[y].element.children[x+1].innerText = title;
        }
    }

    /**
     * Create a nested header object
     */
    obj.createNestedHeader = function(nestedInformation) {
        var tr = document.createElement('tr');
        tr.classList.add('jexcel_nested');
        var td = document.createElement('td');
        tr.appendChild(td);
        // Element
        nestedInformation.element = tr;

        var headerIndex = 0;
        for (var i = 0; i < nestedInformation.length; i++) {
            // Default values
            if (! nestedInformation[i].colspan) {
                nestedInformation[i].colspan = 1;
            }
            if (! nestedInformation[i].align) {
                nestedInformation[i].align = 'center';
            }
            if (! nestedInformation[i].title) {
                nestedInformation[i].title = '';
            }

            // Number of columns
            var numberOfColumns = nestedInformation[i].colspan;

            // Classes container
            var column = [];
            // Header classes for this cell
            for (var x = 0; x < numberOfColumns; x++) {
                if (obj.options.columns[headerIndex] && obj.options.columns[headerIndex].type == 'hidden') {
                    numberOfColumns++;
                }
                column.push(headerIndex);
                headerIndex++;
            }

            // Created the nested cell
            var td = document.createElement('td');
            td.setAttribute('data-column', column.join(','));
            td.setAttribute('colspan', nestedInformation[i].colspan);
            td.setAttribute('align', nestedInformation[i].align);
            td.innerText = nestedInformation[i].title;
            tr.appendChild(td);
        }

        return tr;
    }

    /**
     * Create toolbar
     */
    obj.createToolbar = function(toolbar) {
        if (toolbar) {
            obj.options.toolbar = toolbar;
        } else {
            var toolbar = obj.options.toolbar;
        }

        for (var i = 0; i < toolbar.length; i++) {
            if (toolbar[i].type == 'i') {
                var toolbarItem = document.createElement('i');
                toolbarItem.classList.add('jexcel_toolbar_item');
                toolbarItem.classList.add('material-icons');
                toolbarItem.setAttribute('data-k', toolbar[i].k);
                toolbarItem.setAttribute('data-v', toolbar[i].v);
                toolbarItem.setAttribute('id', toolbar[i].id);

                // Tooltip
                if (toolbar[i].tooltip) {
                    toolbarItem.setAttribute('title', toolbar[i].tooltip);
                }
                // Handle click
                if (toolbar[i].onclick && typeof(toolbar[i].onclick)) {
                    toolbarItem.onclick = (function (a) {
                        var b = a;
                        return function () {
                            toolbar[b].onclick(el, obj, this);
                        };
                    })(i);
                } else {
                    toolbarItem.onclick = function() {
                        var k = this.getAttribute('data-k');
                        var v = this.getAttribute('data-v');
                        obj.setStyle(obj.highlighted, k, v);
                    }
                }
                // Append element
                toolbarItem.innerText = toolbar[i].content;
                obj.toolbar.appendChild(toolbarItem);
            } else if (toolbar[i].type == 'select') {
               var toolbarItem = document.createElement('select');
               toolbarItem.classList.add('jexcel_toolbar_item');
               toolbarItem.setAttribute('data-k', toolbar[i].k);
               // Tooltip
               if (toolbar[i].tooltip) {
                   toolbarItem.setAttribute('title', toolbar[i].tooltip);
               }
               // Handle onchange
               if (toolbar[i].onchange && typeof(toolbar[i].onchange)) {
                   toolbarItem.onchange = toolbar[i].onchange;
               } else {
                   toolbarItem.onchange = function() {
                       var k = this.getAttribute('data-k');
                       obj.setStyle(obj.highlighted, k, this.value);
                   }
               }
               // Add options to the dropdown
               for(var j = 0; j < toolbar[i].v.length; j++) {
                    var toolbarDropdownOption = document.createElement('option');
                    toolbarDropdownOption.value = toolbar[i].v[j];
                    toolbarDropdownOption.innerText = toolbar[i].v[j];
                    toolbarItem.appendChild(toolbarDropdownOption);
               }
               obj.toolbar.appendChild(toolbarItem);
            } else if (toolbar[i].type == 'color') {
                 var toolbarItem = document.createElement('i');
                 toolbarItem.classList.add('jexcel_toolbar_item');
                 toolbarItem.classList.add('material-icons');
                 toolbarItem.setAttribute('data-k', toolbar[i].k);
                 toolbarItem.setAttribute('data-v', '');
                 // Tooltip
                 if (toolbar[i].tooltip) {
                     toolbarItem.setAttribute('title', toolbar[i].tooltip);
                 }
                 obj.toolbar.appendChild(toolbarItem);
                 toolbarItem.innerText = toolbar[i].content;
                 jSuites.color(toolbarItem, {
                     onchange:function(o, v) {
                         var k = o.getAttribute('data-k');
                         obj.setStyle(obj.highlighted, k, v);
                     }
                 });
            }
        }
    }

    /**
     * Merge cells
     * @param cellName
     * @param colspan
     * @param rowspan
     * @param ignoreHistoryAndEvents
     */
    obj.setMerge = function(cellName, colspan, rowspan, ignoreHistoryAndEvents) {
        var test = false;

        if (! cellName) {
            if (! obj.highlighted.length) {
                alert(obj.options.text.noCellsSelected);
                return null;
            } else {
                var x1 = parseInt(obj.highlighted[0].getAttribute('data-x'));
                var y1 = parseInt(obj.highlighted[0].getAttribute('data-y'));
                var x2 = parseInt(obj.highlighted[obj.highlighted.length-1].getAttribute('data-x'));
                var y2 = parseInt(obj.highlighted[obj.highlighted.length-1].getAttribute('data-y'));
                var cellName = jexcel.getColumnNameFromId([ x1, y1 ]);
                var colspan = (x2 - x1) + 1;
                var rowspan = (y2 - y1) + 1;
            }
        }

        var cell = jexcel.getIdFromColumnName(cellName, true);

        if (obj.options.mergeCells[cellName]) {
            if (obj.records[cell[1]][cell[0]].getAttribute('data-merged')) {
                test = obj.options.text.cellAlreadyMerged;
            }
        } else if ((! colspan || colspan < 2) && (! rowspan || rowspan < 2)) {
            test = obj.options.text.invalidMergeProperties;
        } else {
            var cells = [];
            for (var j = cell[1]; j < cell[1] + rowspan; j++) {
                for (var i = cell[0]; i < cell[0] + colspan; i++) {
                    var columnName = jexcel.getColumnNameFromId([i, j]);
                    if (obj.records[j][i].getAttribute('data-merged')) {
                        test = obj.options.text.thereIsAConflictWithAnotherMergedCell;
                    }
                }
            }
        }

        if (test) {
            alert(test);
        } else {
            // Add property
            if (colspan > 1) {
                obj.records[cell[1]][cell[0]].setAttribute('colspan', colspan);
            } else {
                colspan = 1;
            }
            if (rowspan > 1) {
                obj.records[cell[1]][cell[0]].setAttribute('rowspan', rowspan);
            } else {
                rowspan = 1;
            }
            // Keep links to the existing nodes
            obj.options.mergeCells[cellName] = [ colspan, rowspan, [] ];
            // Mark cell as merged
            obj.records[cell[1]][cell[0]].setAttribute('data-merged', 'true');
            // Overflow
            obj.records[cell[1]][cell[0]].style.overflow = 'hidden';
            // History data
            var data = [];
            // Adjust the nodes
            for (var y = cell[1]; y < cell[1] + rowspan; y++) {
                for (var x = cell[0]; x < cell[0] + colspan; x++) {
                    if (! (cell[0] == x && cell[1] == y)) {
                        data.push(obj.options.data[y][x]);
                        obj.updateCell(x, y, '', true);
                        obj.options.mergeCells[cellName][2].push(obj.records[y][x]);
                        obj.records[y][x].style.display = 'none';
                        obj.records[y][x] = obj.records[cell[1]][cell[0]];
                    }
                }
            }
            // In the initialization is not necessary keep the history
            obj.updateSelection(obj.records[cell[1]][cell[0]]);

            if (! ignoreHistoryAndEvents) {
                obj.setHistory({
                    action:'setMerge',
                    column:cellName,
                    colspan:colspan,
                    rowspan:rowspan,
                    data:data,
                });

                obj.dispatch('onmerge', el, cellName, colspan, rowspan);
            }
        }
    }

    /**
     * Merge cells
     * @param cellName
     * @param colspan
     * @param rowspan
     * @param ignoreHistoryAndEvents
     */
    obj.getMerge = function(cellName) {
        var data = {};
        if (cellName) {
            if (obj.options.mergeCells[cellName]) {
                data = [ obj.options.mergeCells[cellName][0], obj.options.mergeCells[cellName][1] ];
            } else {
                data = null;
            }
        } else {
            if (obj.options.mergeCells) {
                var mergedCells = obj.options.mergeCells;
                var keys = Object.keys(obj.options.mergeCells);
                for (var i = 0; i < keys.length; i++) {
                    data[keys[i]] = [ obj.options.mergeCells[keys[i]][0], obj.options.mergeCells[keys[i]][1] ];
                }
            }
        }

        return data;
    }

    /**
     * Remove merge by cellname
     * @param cellName
     */
    obj.removeMerge = function(cellName, data, keepOptions) {
        if (obj.options.mergeCells[cellName]) {
            var cell = jexcel.getIdFromColumnName(cellName, true);
            obj.records[cell[1]][cell[0]].removeAttribute('colspan');
            obj.records[cell[1]][cell[0]].removeAttribute('rowspan');
            obj.records[cell[1]][cell[0]].removeAttribute('data-merged');
            var info = obj.options.mergeCells[cellName];

            var index = 0;
            for (var j = 0; j < info[1]; j++) {
                for (var i = 0; i < info[0]; i++) {
                    if (j > 0 || i > 0) {
                        obj.records[cell[1]+j][cell[0]+i] = info[2][index];
                        obj.records[cell[1]+j][cell[0]+i].style.display = '';
                        // Recover data
                        if (data && data[index]) {
                            obj.updateCell(cell[0]+i, cell[1]+j, data[index]);
                        }
                        index++;
                    }
                }
            }

            // Update selection
            obj.updateSelection(obj.records[cell[1]][cell[0]], obj.records[cell[1]+j-1][cell[0]+i-1]);

            if (! keepOptions) {
                delete(obj.options.mergeCells[cellName]);
            }
        }
    }

    /**
     * Remove all merged cells
     */
    obj.destroyMerged = function(keepOptions) {
        // Remove any merged cells
        if (obj.options.mergeCells) {
            var mergedCells = obj.options.mergeCells;
            var keys = Object.keys(obj.options.mergeCells);
            for (var i = 0; i < keys.length; i++) {
                obj.removeMerge(keys[i], null, keepOptions);
            }
        }
    }

    /**
     * Is column merged
     */
    obj.isColMerged = function(x, insertBefore) {
        var cols = [];
        // Remove any merged cells
        if (obj.options.mergeCells) {
            var keys = Object.keys(obj.options.mergeCells);
            for (var i = 0; i < keys.length; i++) {
                var info = jexcel.getIdFromColumnName(keys[i], true);
                var colspan = obj.options.mergeCells[keys[i]][0];
                var x1 = info[0];
                var x2 = info[0] + (colspan > 1 ? colspan - 1 : 0);

                if (insertBefore == null) {
                    if ((x1 <= x && x2 >= x)) {
                        cols.push(keys[i]);
                    }
                } else {
                    if (insertBefore) {
                        if ((x1 < x && x2 >= x)) {
                            cols.push(keys[i]);
                        }
                    } else {
                        if ((x1 <= x && x2 > x)) {
                            cols.push(keys[i]);
                        }
                    }
                }
            }
        }

        return cols;
    }

    /**
     * Is rows merged
     */
    obj.isRowMerged = function(y, insertBefore) {
        var rows = [];
        // Remove any merged cells
        if (obj.options.mergeCells) {
            var keys = Object.keys(obj.options.mergeCells);
            for (var i = 0; i < keys.length; i++) {
                var info = jexcel.getIdFromColumnName(keys[i], true);
                var rowspan = obj.options.mergeCells[keys[i]][1];
                var y1 = info[1];
                var y2 = info[1] + (rowspan > 1 ? rowspan - 1 : 0);

                if (insertBefore == null) {
                    if ((y1 <= y && y2 >= y)) {
                        rows.push(keys[i]);
                    }
                } else {
                    if (insertBefore) {
                        if ((y1 < y && y2 >= y)) {
                            rows.push(keys[i]);
                        }
                    } else {
                        if ((y1 <= y && y2 > y)) {
                            rows.push(keys[i]);
                        }
                    }
                }
            }
        }

        return rows;
    }

    /**
     * Open the column filter
     */
    obj.openFilter = function(columnId) {
        if (! obj.options.filters) {
            console.log('JEXCEL: filters not enabled.');
        } else {
            // Make sure is integer
            columnId = parseInt(columnId);
            // Reset selection
            obj.resetSelection();
            // Load options
            var optionsFiltered = [];
            if (obj.options.columns[columnId].type == 'checkbox') {
                optionsFiltered.push({ id: 'true', name: 'True' });
                optionsFiltered.push({ id: 'false', name: 'False' });
            } else {
                var options = [];
                var hasBlanks = false;
                for (var j = 0; j < obj.options.data.length; j++) {
                    var k = obj.options.data[j][columnId];
                    var v = obj.records[j][columnId].innerHTML;
                    if (k && v) {
                        options[k] = v;
                    } else {
                        var hasBlanks = true;
                    }
                }
                var keys = Object.keys(options);
                var optionsFiltered = [];
                for (var j = 0; j < keys.length; j++) {
                    optionsFiltered.push({ id: keys[j], name: options[keys[j]] });
                }
                // Has blank options
                if (hasBlanks) {
                    optionsFiltered.push({ value: '', id: '', name: '(Blanks)' });
                }
            }

            // Create dropdown
            var div = document.createElement('div');
            obj.filter.children[columnId + 1].innerHTML = '';
            obj.filter.children[columnId + 1].appendChild(div);
            obj.filter.children[columnId + 1].style.paddingLeft = '0px';
            obj.filter.children[columnId + 1].style.paddingRight = '0px';
            obj.filter.children[columnId + 1].style.overflow = 'initial';

            var opt = {
                data: optionsFiltered,
                multiple: true,
                autocomplete: true,
                opened: true,
                value: obj.filters[columnId] !== undefined ? obj.filters[columnId] : null,
                width:'100%',
                position: (obj.options.tableOverflow == true || obj.options.fullscreen == true) ? true : false,
                onclose: function(o) {
                    obj.resetFilters();
                    obj.filters[columnId] = o.dropdown.getValue(true);
                    obj.filter.children[columnId + 1].innerHTML = o.dropdown.getText();
                    obj.filter.children[columnId + 1].style.paddingLeft = '';
                    obj.filter.children[columnId + 1].style.paddingRight = '';
                    obj.filter.children[columnId + 1].style.overflow = '';
                    obj.closeFilter(columnId);
                    obj.refreshSelection();
                }
            };

            // Dynamic dropdown
            jSuites.dropdown(div, opt);
        }
    }

    obj.resetFilters = function() {
        if (obj.options.filters) {
            for (var i = 0; i < obj.filter.children.length; i++) {
                obj.filter.children[i].innerHTML = '&nbsp;';
                obj.filters[i] = null;
            }
        }
    }

    obj.closeFilter = function(columnId) {
        if (! columnId) {
            for (var i = 0; i < obj.filter.children.length; i++) {
                if (obj.filters[i]) {
                    columnId = i;
                }
            }
        }

        // Search filter
        var search = function(query, x, y) {
                for (var i = 0; i < query.length; i++) {
                    if ((query[i] == '' && // Blank matching
                        ((obj.options.data[y][x] === false) || // Unchecked checkbox
                        (''+obj.options.data[y][x]) == '')) || // Blank non-checkbox value
                        ((query[i] != '' && // Normal non-blank filtering
                        ((''+obj.options.data[y][x]).search(query[i]) >= 0 ||
                        (''+obj.records[y][x].innerHTML).search(query[i]) >= 0)))) {
                        return true;
                    }
                }
            return false;
        }

        var query = obj.filters[columnId];
        obj.results = [];
        for (var j = 0; j < obj.options.data.length; j++) {
            if (search(query, columnId, j)) {
                obj.results.push(j);
            }
        }
        if (! obj.results.length) {
            obj.results = null;
        }

        obj.updateResult();
    }

    /**
     * Open the editor
     * 
     * @param object cell
     * @return void
     */
    obj.openEditor = function(cell, empty, e) {
        // Get cell position
        var y = cell.getAttribute('data-y');
        var x = cell.getAttribute('data-x');

        // On edition start
        obj.dispatch('oneditionstart', el, cell, x, y);

        // Overflow
        if (x > 0) {
            obj.records[y][x-1].style.overflow = 'hidden';
        }

        // Create editor
        var createEditor = function(type) {
            // Cell information
            var info = cell.getBoundingClientRect();

            // Create dropdown
            var editor = document.createElement(type);
            editor.style.width = (info.width) + 'px';
            editor.style.height = (info.height - 2) + 'px';
            editor.style.minHeight = (info.height - 2) + 'px';

            // Edit cell
            cell.classList.add('editor');
            cell.innerHTML = '';
            cell.appendChild(editor);

            // On edition start
            obj.dispatch('oncreateeditor', el, cell, x, y, editor);

            return editor;
        }

        // Readonly
        if (cell.classList.contains('readonly') == true) {
            // Do nothing
        } else {
            // Holder
            obj.edition = [ obj.records[y][x], obj.records[y][x].innerHTML, x, y ];

            // If there is a custom editor for it
            if (obj.options.columns[x].editor) {
                // Custom editors
                obj.options.columns[x].editor.openEditor(cell, el, empty, e);
            } else {
                // Native functions
                if (obj.options.columns[x].type == 'hidden') {
                    // Do nothing
                } else if (obj.options.columns[x].type == 'checkbox' || obj.options.columns[x].type == 'radio') {
                    // Get value
                    var value = cell.children[0].checked ? false : true;
                    // Toogle value
                    obj.setValue(cell, value);
                    // Do not keep edition open
                    obj.edition = null;
                } else if (obj.options.columns[x].type == 'dropdown' || obj.options.columns[x].type == 'autocomplete') {
                    // Get current value
                    var value = obj.options.data[y][x];
                    if (obj.options.columns[x].multiple && !Array.isArray(value)) {
                        value = value.split(';');
                    }

                    // Create dropdown
                    if (typeof(obj.options.columns[x].filter) == 'function') {
                        var source = obj.options.columns[x].filter(el, cell, x, y, obj.options.columns[x].source);
                    } else {
                        var source = obj.options.columns[x].source;
                    }

                    // Do not change the original source
                    var data = [];
                    for (var j = 0; j < source.length; j++) {
                        data.push(source[j]);
                    }

                    // Create editor
                    var editor = createEditor('div');
                    var options = {
                        data: data,
                        multiple: obj.options.columns[x].multiple ? true : false,
                        autocomplete: obj.options.columns[x].autocomplete || obj.options.columns[x].type == 'autocomplete' ? true : false,
                        opened:true,
                        value: value,
                        width:'100%',
                        height:editor.style.minHeight,
                        position: (obj.options.tableOverflow == true || obj.options.fullscreen == true) ? true : false,
                        onclose:function() {
                            obj.closeEditor(cell, true);
                        }
                    };
                    if (obj.options.columns[x].options && obj.options.columns[x].options.type) {
                        options.type = obj.options.columns[x].options.type;
                    }
                    jSuites.dropdown(editor, options);
                } else if (obj.options.columns[x].type == 'calendar' || obj.options.columns[x].type == 'color') {
                    // Value
                    var value = obj.options.data[y][x];
                    // Create editor
                    var editor = createEditor('input');
                    editor.value = value;

                    if (obj.options.tableOverflow == true || obj.options.fullscreen == true) {
                        obj.options.columns[x].options.position = true;
                    }
                    obj.options.columns[x].options.value = obj.options.data[y][x];
                    obj.options.columns[x].options.opened = true;
                    obj.options.columns[x].options.onclose = function(el, value) {
                        obj.closeEditor(cell, true);
                    }
                    // Current value
                    if (obj.options.columns[x].type == 'color') {
                        jSuites.color(editor, obj.options.columns[x].options);
                    } else {
                        jSuites.calendar(editor, obj.options.columns[x].options);
                    }
                    // Focus on editor
                    editor.focus();
                } else if (obj.options.columns[x].type == 'html') {
                    var value = obj.options.data[y][x];
                    // Create editor
                    var editor = createEditor('div');
                    editor.style.position = 'relative';
                    var div = document.createElement('div');
                    div.classList.add('jexcel_richtext');
                    editor.appendChild(div);
                    jSuites.editor(div, {
                        focus: true,
                        value: value,
                    });
                    var rect = cell.getBoundingClientRect();
                    var rectContent = div.getBoundingClientRect();
                    if (window.innerHeight < rect.bottom + rectContent.height) {
                        div.style.top = (rect.top - (rectContent.height + 2)) + 'px';
                    } else {
                        div.style.top = (rect.top) + 'px';
                    }
                } else if (obj.options.columns[x].type == 'image') {
                    // Value
                    var img = cell.children[0];
                    // Create editor
                    var editor = createEditor('div');
                    editor.style.position = 'relative';
                    var div = document.createElement('div');
                    div.classList.add('jclose');
                    if (img && img.src) {
                        div.appendChild(img);
                    }
                    editor.appendChild(div);
                    jSuites.image(div, obj.options.imageOptions);
                    var rect = cell.getBoundingClientRect();
                    var rectContent = div.getBoundingClientRect();
                    if (window.innerHeight < rect.bottom + rectContent.height) {
                        div.style.top = (rect.top - (rectContent.height + 2)) + 'px';
                    } else {
                        div.style.top = (rect.top) + 'px';
                    }
                } else {
                    // Value
                    var value = empty == true ? '' : obj.options.data[y][x];

                    // Basic editor
                    if (obj.options.columns[x].wordWrap != false && (obj.options.wordWrap == true || obj.options.columns[x].wordWrap == true)) {
                        var editor = createEditor('textarea');
                    } else {
                        var editor = createEditor('input');
                        // Mask
                        if (obj.options.columns[x].mask) {
                            editor.setAttribute('data-mask', obj.options.columns[x].mask);
                        }
                    }

                    editor.onblur = function() {
                        obj.closeEditor(cell, true);
                    };
                    editor.focus();
                    editor.value = value;
                    editor.scrollLeft = editor.scrollWidth;
                }
            }
        }
    }

    /**
     * Close the editor and save the information
     * 
     * @param object cell
     * @param boolean save
     * @return void
     */
    obj.closeEditor = function(cell, save) {
        var x = parseInt(cell.getAttribute('data-x'));
        var y = parseInt(cell.getAttribute('data-y'));

        // Get cell properties
        if (save == true) {
            // If custom editor
            if (obj.options.columns[x].editor) {
                // Custom editor
                var value = obj.options.columns[x].editor.closeEditor(cell, save);
            } else {
                // Native functions
                if (obj.options.columns[x].type == 'checkbox' || obj.options.columns[x].type == 'radio' || obj.options.columns[x].type == 'hidden') {
                    // Do nothing
                } else if (obj.options.columns[x].type == 'dropdown' || obj.options.columns[x].type == 'autocomplete') {
                    var value = cell.children[0].dropdown.close(true);
                } else if (obj.options.columns[x].type == 'calendar') {
                    var value = cell.children[0].calendar.close(true);
                } else if (obj.options.columns[x].type == 'color') {
                    var value = cell.children[0].color.close(true);
                } else if (obj.options.columns[x].type == 'html') {
                    var value = cell.children[0].children[0].editor.getData();
                } else if (obj.options.columns[x].type == 'image') {
                    var img = cell.children[0].children[0].children[0];
                    var value = img && img.tagName == 'IMG' ? img.src : '';
                } else if (obj.options.columns[x].type == 'numeric') {
                    var value = cell.children[0].value;
                    if (value.substr(0,1) != '=') {
                        if (value == '') {
                            value = obj.options.columns[x].allowEmpty ? '' : 0;
                        }
                    }
                    cell.children[0].onblur = null;
                } else {
                    var value = cell.children[0].value;
                    cell.children[0].onblur = null;
                }
            }

            // Ignore changes if the value is the same
            if (obj.options.data[y][x] == value) {
                cell.innerHTML = obj.edition[1];
            } else {
                obj.setValue(cell, value);
            }
        } else {
            if (obj.options.columns[x].editor) {
                // Custom editor
                obj.options.columns[x].editor.closeEditor(cell, save);
            } else {
                if (obj.options.columns[x].type == 'dropdown' || obj.options.columns[x].type == 'autocomplete') {
                    cell.children[0].dropdown.close(true);
                } else if (obj.options.columns[x].type == 'calendar') {
                    cell.children[0].calendar.close(true);
                } else if (obj.options.columns[x].type == 'color') {
                    cell.children[0].color.close(true);
                } else {
                    cell.children[0].onblur = null;
                }
            }

            // Restore value
            cell.innerHTML = obj.edition && obj.edition[1] ? obj.edition[1] : '';
        }

        // On edition end
        obj.dispatch('oneditionend', el, cell, x, y, value, save);

        // Remove editor class
        cell.classList.remove('editor');

        // Finish edition
        obj.edition = null;
    }

    /**
     * Get the cell object
     * 
     * @param object cell
     * @return string value
     */
    obj.getCell = function(cell) {
        // Convert in case name is excel liked ex. A10, BB92
        cell = jexcel.getIdFromColumnName(cell, true);
        var x = cell[0];
        var y = cell[1];

        return obj.records[y][x];
    }

    /**
     * Get the cell object from coords
     * 
     * @param object cell
     * @return string value
     */
    obj.getCellFromCoords = function(x, y) {
        return obj.records[y][x];
    }

    /**
     * Get label
     * 
     * @param object cell
     * @return string value
     */
    obj.getLabel = function(cell) {
        // Convert in case name is excel liked ex. A10, BB92
        cell = jexcel.getIdFromColumnName(cell, true);
        var x = cell[0];
        var y = cell[1];

        return obj.records[y][x].innerHTML;
    }

    /**
     * Get labelfrom coords
     * 
     * @param object cell
     * @return string value
     */
    obj.getLabelFromCoords = function(x, y) {
        return obj.records[y][x].innerHTML;
    }

    /**
     * Get the value from a cell
     * 
     * @param object cell
     * @return string value
     */
    obj.getValue = function(cell, processedValue) {
        if (typeof(cell) == 'object') {
            var x = cell.getAttribute('data-x');
            var y = cell.getAttribute('data-y');
        } else {
            cell = jexcel.getIdFromColumnName(cell, true);
            var x = cell[0];
            var y = cell[1];
        }

        var value = null;

        if (x != null && y != null) {
            if (obj.records[y] && obj.records[y][x] && (processedValue || obj.options.copyCompatibility == true)) {
                value = obj.records[y][x].innerHTML;
            } else {
                if (obj.options.data[y] && obj.options.data[y][x] != 'undefined') {
                    value = obj.options.data[y][x];
                }
            }
        }

        return value;
    }

    /**
     * Get the value from a coords
     * 
     * @param int x
     * @param int y
     * @return string value
     */
    obj.getValueFromCoords = function(x, y, processedValue) {
        var value = null;

        if (x != null && y != null) {
            if ((obj.records[y] && obj.records[y][x]) && processedValue || obj.options.copyCompatibility == true) {
                value = obj.records[y][x].innerHTML;
            } else {
                if (obj.options.data[y] && obj.options.data[y][x] != 'undefined') {
                    value = obj.options.data[y][x];
                }
            }
        }

        return value;
    }

    /**
     * Set a cell value
     * 
     * @param mixed cell destination cell
     * @param string value value
     * @return void
     */
    obj.setValue = function(cell, value, force) {
        var records = [];

        if (typeof(cell) == 'string') {
            var columnId = jexcel.getIdFromColumnName(cell, true);
            var x = columnId[0];
            var y = columnId[1];

            // Update cell
            records.push(obj.updateCell(x, y, value, force));

            // Update all formulas in the chain
            obj.updateFormulaChain(x, y, records);
        } else {
            var x = null;
            var y = null;
            if (cell && cell.getAttribute) {
                var x = cell.getAttribute('data-x');
                var y = cell.getAttribute('data-y');
            }

            // Update cell
            if (x != null && y != null) {
                records.push(obj.updateCell(x, y, value, force));

                // Update all formulas in the chain
                obj.updateFormulaChain(x, y, records);
            } else {
                var keys = Object.keys(cell);
                if (keys.length > 0) {
                    for (var i = 0; i < keys.length; i++) {
                        if (typeof(cell[i]) == 'string') {
                            var columnId = jexcel.getIdFromColumnName(cell[i], true);
                            var x = columnId[0];
                            var y = columnId[1];
                        } else {
                            if (cell[i].x != null && cell[i].y != null) {
                                var x = cell[i].x;
                                var y = cell[i].y;
                                // Flexible setup
                                if (cell[i].newValue != null) {
                                    value = cell[i].newValue;
                                } else if (cell[i].value != null) {
                                    value = cell[i].value;
                                }
                            } else {
                                var x = cell[i].getAttribute('data-x');
                                var y = cell[i].getAttribute('data-y');
                            }
                        }

                         // Update cell
                        if (x != null && y != null) {
                            records.push(obj.updateCell(x, y, value, force));

                            // Update all formulas in the chain
                            obj.updateFormulaChain(x, y, records);
                        }
                    }
                }
            }
        }

        // Update history
        obj.setHistory({
            action:'setValue',
            records:records,
            selection:obj.selectedCell,
        });

        // Update table with custom configurations if applicable
        obj.updateTable();

        // On after changes
        obj.onafterchanges(el, records);
    }

    /**
     * Set a cell value based on coordinates
     * 
     * @param int x destination cell
     * @param int y destination cell
     * @param string value
     * @return void
     */
    obj.setValueFromCoords = function(x, y, value, force) {
        var records = [];
        records.push(obj.updateCell(x, y, value, force));

        // Update all formulas in the chain
        obj.updateFormulaChain(x, y, records);

        // Update history
        obj.setHistory({
            action:'setValue',
            records:records,
            selection:obj.selectedCell,
        });

        // Update table with custom configurations if applicable
        obj.updateTable();

        // On after changes
        obj.onafterchanges(el, records);
    }

    /**
     * Toogle
     */
    obj.setCheckRadioValue = function() {
        var records = [];
        var keys = Object.keys(obj.highlighted);
        for (var i = 0; i < keys.length; i++) {
            var x = obj.highlighted[i].getAttribute('data-x');
            var y = obj.highlighted[i].getAttribute('data-y');

            if (obj.options.columns[x].type == 'checkbox' || obj.options.columns[x].type == 'radio') {
                // Update cell
                records.push(obj.updateCell(x, y, ! obj.options.data[y][x]));
            }
        }

        if (records.length) {
            // Update history
            obj.setHistory({
                action:'setValue',
                records:records,
                selection:obj.selectedCell,
            });

            // On after changes
            obj.onafterchanges(el, records);
        }
    }

    /**
     * Strip tags
     */
     var stripScript = function(a) {
        var b = new Option;
        b.innerHTML = a;
        var c = null;
        for (a = b.getElementsByTagName('script'); c=a[0];) c.parentNode.removeChild(c);
        return b.innerHTML;
    }

    /**
     * Update cell content
     * 
     * @param object cell
     * @return void
     */
    obj.updateCell = function(x, y, value, force) {
        // Changing value depending on the column type
        if (obj.records[y][x].classList.contains('readonly') == true && ! force) {
            // Do nothing
            var record = {
                x: x,
                y: y,
                col: x,
                row: y
            }
        } else {
            // Security
            if ((''+value).substr(0,1) == '=' && obj.options.secureFormulas == true) {
                var val = secureFormula(value);
                if (val != value) {
                    // Update the data container
                    value = val;
                }
            }

            // On change
            var val = obj.dispatch('onbeforechange', el, obj.records[y][x], x, y, value);

            // If you return something this will overwrite the value
            if (val != undefined) {
                value = val;
            }

            if (obj.options.columns[x].editor && typeof(obj.options.columns[x].editor.updateCell) == 'function') {
                value = obj.options.columns[x].editor.updateCell(obj.records[y][x], value, force);
            }

            // History format
            var record = {
                x: x,
                y: y,
                col: x,
                row: y,
                newValue: value,
                oldValue: obj.options.data[y][x],
            }

            if (obj.options.columns[x].editor) {
                // Update data and cell
                obj.options.data[y][x] = value;
            } else {
                // Native functions
                if (obj.options.columns[x].type == 'checkbox' || obj.options.columns[x].type == 'radio') {
                    // Unchecked all options
                    if (obj.options.columns[x].type == 'radio') {
                        for (var j = 0; j < obj.options.data.length; j++) {
                            obj.options.data[j][x] = false;
                        }
                    }

                    // Update data and cell
                    obj.records[y][x].children[0].checked = (value == 1 || value == true || value == 'true' || value == 'TRUE') ? true : false;
                    obj.options.data[y][x] = obj.records[y][x].children[0].checked;
                } else if (obj.options.columns[x].type == 'dropdown' || obj.options.columns[x].type == 'autocomplete') {
                    // Update data and cell
                    obj.options.data[y][x] = value;
                    obj.records[y][x].innerText = obj.getDropDownValue(x, value);
                } else if (obj.options.columns[x].type == 'calendar') {
                    // Update calendar
                    var formatted = jSuites.calendar.extractDateFromString(value, obj.options.columns[x].options.format);
                    // Update data and cell
                    obj.options.data[y][x] = value;
                    obj.records[y][x].innerText = jSuites.calendar.getDateString(formatted ? formatted : value, obj.options.columns[x].options.format);
                } else if (obj.options.columns[x].type == 'color') {
                    // Update color
                    obj.options.data[y][x] = value;
                    // Render
                    if (obj.options.columns[x].render == 'square') {
                        var color = document.createElement('div');
                        color.className = 'color';
                        color.style.backgroundColor = value;
                        obj.records[y][x].innerText = '';
                        obj.records[y][x].appendChild(color);
                    } else {
                    obj.records[y][x].style.color = value;
                        obj.records[y][x].innerText = value;
                    }
                } else if (obj.options.columns[x].type == 'image') {
                    value = ''+value;
                    obj.options.data[y][x] = value;
                    obj.records[y][x].innerHTML = '';
                    if (value && value.substr(0, 10) == 'data:image') {
                        var img = document.createElement('img');
                        img.src = value;
                        obj.records[y][x].appendChild(img);
                    }
                } else {
                    // Update data and cell
                    obj.options.data[y][x] = value;
                    // Label
                    if (obj.options.columns[x].type == 'html') {
                        obj.records[y][x].innerHTML = stripScript(obj.parseValue(x, y, value));
                    } else {
                        if (obj.options.stripHTML === false || obj.options.columns[x].stripHTML === false) {
                            obj.records[y][x].innerHTML = stripScript(obj.parseValue(x, y, value));
                        } else {
                            obj.records[y][x].innerText = obj.parseValue(x, y, value);
                        }
                    }
                    // Handle big text inside a cell
                    if (obj.options.columns[x].wordWrap != false && (obj.options.wordWrap == true || obj.options.columns[x].wordWrap == true || obj.records[y][x].innerHTML.length > 200)) {
                        obj.records[y][x].style.whiteSpace = 'pre-wrap';
                    } else {
                        obj.records[y][x].style.whiteSpace = '';
                    }
                }
            }

            // Overflow
            if (x > 0) {
                if (value) {
                    obj.records[y][x-1].style.overflow = 'hidden';
                } else {
                    obj.records[y][x-1].style.overflow = '';
                }
            }

            // On change
            obj.dispatch('onchange', el, (obj.records[y] && obj.records[y][x] ? obj.records[y][x] : null), x, y, value, record.oldValue);
        }

        return record;
    }

    /**
     * Helper function to copy data using the corner icon
     */
    obj.copyData = function(o, d) {
        // Get data from all selected cells
        var data = obj.getData(true, true);

        // Selected cells
        var h = obj.selectedContainer;

        // Cells
        var x1 = parseInt(o.getAttribute('data-x'));
        var y1 = parseInt(o.getAttribute('data-y'));
        var x2 = parseInt(d.getAttribute('data-x'));
        var y2 = parseInt(d.getAttribute('data-y'));

        // Records
        var records = [];
        var breakControl = false;

        if (h[0] == x1) {
            // Vertical copy
            if (y1 < h[1]) {
                var rowNumber = y1 - h[1];
            } else {
                var rowNumber = 1;
            }
            var colNumber = 0;
        } else {
            if (x1 < h[0]) {
                var colNumber = x1 - h[0];
            } else {
                var colNumber = 1;
            }
            var rowNumber = 0;
        }

        // Copy data procedure
        var posx = 0;
        var posy = 0;

        for (var j = y1; j <= y2; j++) {
            // Skip hidden rows
            if (obj.rows[j] && obj.rows[j].style.display == 'none') {
                continue;
            }

            // Controls
            if (data[posy] == undefined) {
                posy = 0;
            }
            posx = 0;

            // Data columns
            if (h[0] != x1) {
                if (x1 < h[0]) {
                    var colNumber = x1 - h[0];
                } else {
                    var colNumber = 1;
                }
            }
            // Data columns
            for (var i = x1; i <= x2; i++) {
                // Update non-readonly
                if (obj.records[j][i] && ! obj.records[j][i].classList.contains('readonly') && obj.records[j][i].style.display != 'none' && breakControl == false) {
                    // Stop if contains value
                    if (! obj.selection.length) {
                        if (obj.options.data[j][i] != '') {
                            breakControl = true;
                            continue;
                        }
                    }

                    // Column
                    if (data[posy] == undefined) {
                        posx = 0;
                    } else if (data[posy][posx] == undefined) {
                        posx = 0;
                    }

                    // Value
                    var value = data[posy][posx];

                    if (value && ! data[1] && obj.options.autoIncrement == true) {
                        if (obj.options.columns[i].type == 'text' || obj.options.columns[i].type == 'number') {
                            if ((''+value).substr(0,1) == '=') {
                                var tokens = value.match(/([A-Z]+[0-9]+)/g);

                                if (tokens) {
                                    var affectedTokens = [];
                                    for (var index = 0; index < tokens.length; index++) {
                                        var position = jexcel.getIdFromColumnName(tokens[index], 1);
                                        position[0] += colNumber;
                                        position[1] += rowNumber;
                                        if (position[1] < 0) {
                                            position[1] = 0;
                                        }
                                        var token = jexcel.getColumnNameFromId([position[0], position[1]]);

                                        if (token != tokens[index]) {
                                            affectedTokens[tokens[index]] = token;
                                        }
                                    }
                                    // Update formula
                                    if (affectedTokens) {
                                        value = obj.updateFormula(value, affectedTokens)
                                    }
                                }
                            } else {
                                if (value == Number(value)) {
                                    value = Number(value) + rowNumber;
                                }
                            }
                        } else if (obj.options.columns[i].type == 'calendar') {
                            var date = new Date(value);
                            date.setDate(date.getDate() + rowNumber);
                            value = date.getFullYear() + '-' + jexcel.doubleDigitFormat(parseInt(date.getMonth() + 1)) + '-' + jexcel.doubleDigitFormat(date.getDate()) + ' ' + '00:00:00';
                        }
                    }

                    records.push(obj.updateCell(i, j, value));

                    // Update all formulas in the chain
                    obj.updateFormulaChain(i, j, records);
                }
                posx++;
                if (h[0] != x1) {
                    colNumber++;
                }
            }
            posy++;
            rowNumber++;
        }

        // Update history
        obj.setHistory({
            action:'setValue',
            records:records,
            selection:obj.selectedCell,
        });

        // Update table with custom configuration if applicable
        obj.updateTable();

        // On after changes
        obj.onafterchanges(el, records);
    }

    /**
     * Refresh current selection
     */
    obj.refreshSelection = function() {
        if (obj.selectedCell) {
            obj.updateSelectionFromCoords(obj.selectedCell[0], obj.selectedCell[1], obj.selectedCell[2], obj.selectedCell[3]);
        }
    }

    /**
     * Move coords to A1 in case ovelaps with an excluded cell
     */
    obj.conditionalSelectionUpdate = function(type, o, d) {
        if (type == 1) {
            if (obj.selectedCell && ((o >= obj.selectedCell[1] && o <= obj.selectedCell[3]) || (d >= obj.selectedCell[1] && d <= obj.selectedCell[3]))) {
                obj.resetSelection();
                return;
            }
        } else {
            if (obj.selectedCell && ((o >= obj.selectedCell[0] && o <= obj.selectedCell[2]) || (d >= obj.selectedCell[0] && d <= obj.selectedCell[2]))) {
                obj.resetSelection();
                return;
            }
        }
    }

    /**
     * Clear table selection
     */
    obj.resetSelection = function(blur) {
        // Remove style
        if (! obj.highlighted.length) {
            var previousStatus = 0;
        } else {
            var previousStatus = 1;

            for (var i = 0; i < obj.highlighted.length; i++) {
                obj.highlighted[i].classList.remove('highlight');
                obj.highlighted[i].classList.remove('highlight-left');
                obj.highlighted[i].classList.remove('highlight-right');
                obj.highlighted[i].classList.remove('highlight-top');
                obj.highlighted[i].classList.remove('highlight-bottom');
                obj.highlighted[i].classList.remove('highlight-selected');

                var px = parseInt(obj.highlighted[i].getAttribute('data-x'));
                var py = parseInt(obj.highlighted[i].getAttribute('data-y'));

                // Check for merged cells
                if (obj.highlighted[i].getAttribute('data-merged')) {
                    var colspan = parseInt(obj.highlighted[i].getAttribute('colspan'));
                    var rowspan = parseInt(obj.highlighted[i].getAttribute('rowspan'));
                    var ux = colspan > 0 ? px + (colspan - 1) : px;
                    var uy = rowspan > 0 ? py + (rowspan - 1): py;
                } else {
                    var ux = px;
                    var uy = py;
                }

                // Remove selected from headers
                for (var j = px; j <= ux; j++) {
                    if (obj.headers[j]) {
                        obj.headers[j].classList.remove('selected');
                    }
                }

                // Remove selected from rows
                for (var j = py; j <= uy; j++) {
                    if (obj.rows[j]) {
                        obj.rows[j].classList.remove('selected');
                    }
                }
            }
        }

        // Reset highlighed cells
        obj.highlighted = [];

        // Reset
        obj.selectedCell = null;

        // Hide corner
        obj.corner.style.top = '-2000px';
        obj.corner.style.left = '-2000px';

        if (blur == true && previousStatus == 1) {
            obj.dispatch('onblur', el);
        }

        return previousStatus;
    }

    /**
     * Update selection based on two cells
     */
    obj.updateSelection = function(el1, el2, origin) {
        var x1 = el1.getAttribute('data-x');
        var y1 = el1.getAttribute('data-y');
        if (el2) {
            var x2 = el2.getAttribute('data-x');
            var y2 = el2.getAttribute('data-y');
        } else {
            var x2 = x1;
            var y2 = y1;
        }

        obj.updateSelectionFromCoords(x1, y1, x2, y2, origin);
    }

    /**
     * Update selection from coords
     */
    obj.updateSelectionFromCoords = function(x1, y1, x2, y2, origin) {
        // Reset Selection
        var updated = null;
        var previousState = obj.resetSelection();

        // Same element
        if (x2 == null) {
            x2 = x1;
        }
        if (y2 == null) {
            y2 = y1;
        }

        // Selection must be within the existing data
        if (x1 >= obj.headers.length) {
            x1 = obj.headers.length - 1;
        }
        if (y1 >= obj.rows.length) {
            y1 = obj.rows.length - 1;
        }
        if (x2 >= obj.headers.length) {
            x2 = obj.headers.length - 1;
        }
        if (y2 >= obj.rows.length) {
            y2 = obj.rows.length - 1;
        }

        // Keep selected cell
        obj.selectedCell = [x1, y1, x2, y2];

        // Select cells
        if (x1 != null) {
            // Add selected cell
            if (obj.records[y1][x1]) {
                obj.records[y1][x1].classList.add('highlight-selected');
            }

            // Origin & Destination
            if (parseInt(x1) < parseInt(x2)) {
                var px = parseInt(x1);
                var ux = parseInt(x2);
            } else {
                var px = parseInt(x2);
                var ux = parseInt(x1);
            }

            if (parseInt(y1) < parseInt(y2)) {
                var py = parseInt(y1);
                var uy = parseInt(y2);
            } else {
                var py = parseInt(y2);
                var uy = parseInt(y1);
            }

            // Verify merged columns
            for (var i = px; i <= ux; i++) {
                for (var j = py; j <= uy; j++) {
                    if (obj.records[j][i] && obj.records[j][i].getAttribute('data-merged')) {
                        var x = parseInt(obj.records[j][i].getAttribute('data-x'));
                        var y = parseInt(obj.records[j][i].getAttribute('data-y'));
                        var colspan = parseInt(obj.records[j][i].getAttribute('colspan'));
                        var rowspan = parseInt(obj.records[j][i].getAttribute('rowspan'));

                        if (colspan > 1) {
                            if (x < px) {
                                px = x;
                            }
                            if (x + colspan > ux) {
                                ux = x + colspan - 1;
                            }
                        }

                        if (rowspan) {
                            if (y < py) {
                                py = y;

                            }
                            if (y + rowspan > uy) {
                                uy = y + rowspan - 1;
                            }
                        }
                    }
                }
            }

            // Limits
            var borderLeft = null;
            var borderRight = null;
            var borderTop = null;
            var borderBottom = null;

            // Vertical limits
            for (var j = py; j <= uy; j++) {
                if (obj.rows[j].style.display != 'none') {
                    if (borderTop == null) {
                        borderTop = j;
                    }
                    borderBottom = j;
                }
            }

            // Redefining styles
            for (var i = px; i <= ux; i++) {
                for (var j = py; j <= uy; j++) {
                    if (obj.rows[j].style.display != 'none' && obj.records[j][i].style.display != 'none') {
                        obj.records[j][i].classList.add('highlight');
                        obj.highlighted.push(obj.records[j][i]);
                    }
                }

                // Horizontal limits
                if (obj.options.columns[i].type != 'hidden') {
                    if (borderLeft == null) {
                        borderLeft = i;
                    }
                    borderRight = i;
                }
            }

            // Create borders
            if (! borderLeft) {
                borderLeft = 0;
            }
            if (! borderRight) {
                borderRight = 0;
            }
            for (var i = borderLeft; i <= borderRight; i++) {
                if (obj.options.columns[i].type != 'hidden') {
                    // Top border
                    if (obj.records[borderTop] && obj.records[borderTop][i]) {
                        obj.records[borderTop][i].classList.add('highlight-top');
                    }
                    // Bottom border
                    if (obj.records[borderBottom] && obj.records[borderBottom][i]) {
                        obj.records[borderBottom][i].classList.add('highlight-bottom');
                    }
                    // Add selected from headers
                    obj.headers[i].classList.add('selected');
                }
            }

            for (var j = borderTop; j <= borderBottom; j++) {
                if (obj.rows[j] && obj.rows[j].style.display != 'none') {
                    // Left border
                    obj.records[j][borderLeft].classList.add('highlight-left');
                    // Right border
                    obj.records[j][borderRight].classList.add('highlight-right');
                    // Add selected from rows
                    obj.rows[j].classList.add('selected');
                }
            }

            obj.selectedContainer = [ borderLeft, borderTop, borderRight, borderBottom ];
        }

        // Handle events
        if (previousState == 0) {
            obj.dispatch('onfocus', el);

            obj.removeCopyingSelection();
        }

        obj.dispatch('onselection', el, borderLeft, borderTop, borderRight, borderBottom, origin);

        // Find corner cell
        obj.updateCornerPosition();
    }

    /**
     * Remove copy selection
     * 
     * @return void
     */
    obj.removeCopySelection = function() {
        // Remove current selection
        for (var i = 0; i < obj.selection.length; i++) {
            obj.selection[i].classList.remove('selection');
            obj.selection[i].classList.remove('selection-left');
            obj.selection[i].classList.remove('selection-right');
            obj.selection[i].classList.remove('selection-top');
            obj.selection[i].classList.remove('selection-bottom');
        }

        obj.selection = [];
    }

    /**
     * Update copy selection
     * 
     * @param int x, y
     * @return void
     */
    obj.updateCopySelection = function(x3, y3) {
        // Remove selection
        obj.removeCopySelection();

        // Get elements first and last
        var x1 = obj.selectedContainer[0];
        var y1 = obj.selectedContainer[1];
        var x2 = obj.selectedContainer[2];
        var y2 = obj.selectedContainer[3];

        if (x3 != null && y3 != null) {
            if (x3 - x2 > 0) {
                var px = parseInt(x2) + 1;
                var ux = parseInt(x3);
            } else {
                var px = parseInt(x3);
                var ux = parseInt(x1) - 1;
            }

            if (y3 - y2 > 0) {
                var py = parseInt(y2) + 1;
                var uy = parseInt(y3);
            } else {
                var py = parseInt(y3);
                var uy = parseInt(y1) - 1;
            }

           if (ux - px <= uy - py) {
                var px = parseInt(x1);
                var ux = parseInt(x2);
            } else {
                var py = parseInt(y1);
                var uy = parseInt(y2);
            }

            for (var j = py; j <= uy; j++) {
                for (var i = px; i <= ux; i++) {
                    if (obj.records[j][i] && obj.rows[j].style.display != 'none' && obj.records[j][i].style.display != 'none') {
                        obj.records[j][i].classList.add('selection');
                        obj.records[py][i].classList.add('selection-top');
                        obj.records[uy][i].classList.add('selection-bottom');
                        obj.records[j][px].classList.add('selection-left');
                        obj.records[j][ux].classList.add('selection-right');

                        // Persist selected elements
                        obj.selection.push(obj.records[j][i]);
                    }
                }
            }
        }
    }

    /**
     * Update corner position
     * 
     * @return void
     */
    obj.updateCornerPosition = function() {
        // If any selected cells
        if (! obj.highlighted.length) {
            obj.corner.style.top = '-2000px';
            obj.corner.style.left = '-2000px';
        } else {
            // Get last cell
            var last = obj.highlighted[obj.highlighted.length-1];

            var contentRect = obj.content.getBoundingClientRect();
            var x1 = contentRect.left;
            var y1 = contentRect.top;

            var lastRect = last.getBoundingClientRect();
            var x2 = lastRect.left;
            var y2 = lastRect.top;
            var w2 = lastRect.width;
            var h2 = lastRect.height;

            var x = (x2 - x1) + obj.content.scrollLeft + w2 - 4;
            var y = (y2 - y1) + obj.content.scrollTop + h2 - 4;

            // Place the corner in the correct place
            obj.corner.style.top = y + 'px';
            obj.corner.style.left = x + 'px';

            if (obj.options.freezeColumns) {
                var width = obj.getFreezeWidth();
                if (x2 - x1 + w2 < width) {
                    obj.corner.style.display = 'none';
                } else {
                    if (obj.options.selectionCopy == true) {
                        obj.corner.style.display = '';
                    }
                }
            } else {
                if (obj.options.selectionCopy == true) {
                    obj.corner.style.display = '';
                }
            }
        }
    }

    /**
     * Update scroll position based on the selection
     */
    obj.updateScroll = function(direction) {
        // jExcel Container information
        var contentRect = obj.content.getBoundingClientRect();
        var x1 = contentRect.left;
        var y1 = contentRect.top;
        var w1 = contentRect.width;
        var h1 = contentRect.height;

        // Direction Left or Up
        var reference = obj.records[obj.selectedCell[3]][obj.selectedCell[2]];

        // Reference
        var referenceRect = reference.getBoundingClientRect();
        var x2 = referenceRect.left;
        var y2 = referenceRect.top;
        var w2 = referenceRect.width;
        var h2 = referenceRect.height;

        // Direction
        if (direction == 0 || direction == 1) {
            var x = (x2 - x1) + obj.content.scrollLeft;
            var y = (y2 - y1) + obj.content.scrollTop - 2;
        } else {
            var x = (x2 - x1) + obj.content.scrollLeft + w2;
            var y = (y2 - y1) + obj.content.scrollTop + h2;
        }

        // Top position check
        if (y > (obj.content.scrollTop + 30) && y < (obj.content.scrollTop + h1)) {
            // In the viewport
        } else {
            // Out of viewport
            if (y < obj.content.scrollTop + 30) {
                obj.content.scrollTop = y - h2;
            } else {
                obj.content.scrollTop = y - (h1 - 2);
            }
        }

        // Freeze columns? 
        var freezed = obj.getFreezeWidth();

        // Left position check - TODO: change that to the bottom border of the element
        if (x > (obj.content.scrollLeft + freezed) && x < (obj.content.scrollLeft + w1)) {
            // In the viewport
        } else {
            // Out of viewport
            if (x < obj.content.scrollLeft + 30) {
                obj.content.scrollLeft = x;
                if (obj.content.scrollLeft < 50) {
                    obj.content.scrollLeft = 0;
                }
            } else if (x < obj.content.scrollLeft + freezed) {
                obj.content.scrollLeft = x - freezed - 1;
            } else {
                obj.content.scrollLeft = x - (w1 - 20);
            }
        }
    }

    /**
     * Get the column width
     * 
     * @param int column column number (first column is: 0)
     * @return int current width
     */
    obj.getWidth = function(column) {
        if (! column) {
            // Get all headers
            var data = [];
            for (var i = 0; i < obj.headers.length; i++) {
                data.push(obj.options.columns[i].width);
            }
        } else {
            // In case the column is an object
            if (typeof(column) == 'object') {
                column = $(column).getAttribute('data-x');
            }

            data = obj.colgroup[column].getAttribute('width')
        }

        return data;
    }


    /**
     * Set the column width
     * 
     * @param int column number (first column is: 0)
     * @param int new column width
     * @param int old column width
     */
    obj.setWidth = function (column, width, oldWidth) {
        if (width) {
            if (Array.isArray(column)) {
                // Oldwidth
                if (! oldWidth) {
                    var oldWidth = [];
                }
                // Set width
                for (var i = 0; i < column.length; i++) {
                    if (! oldWidth[i]) {
                        oldWidth[i] = obj.colgroup[column[i]].getAttribute('width');
                    }
                    var w = Array.isArray(width) && width[i] ? width[i] : width;
                    obj.colgroup[column[i]].setAttribute('width', w);
                    obj.options.columns[column[i]].width = w;
                }
            } else {
                // Oldwidth
                if (! oldWidth) {
                    oldWidth = obj.colgroup[column].getAttribute('width');
                }
                // Set width
                obj.colgroup[column].setAttribute('width', width);
                obj.options.columns[column].width = width;
            }

            // Keeping history of changes
            obj.setHistory({
                action:'setWidth',
                column:column,
                oldValue:oldWidth,
                newValue:width,
            });

            // On resize column
            obj.dispatch('onresizecolumn', el, column, width, oldWidth);

            // Update corner position
            obj.updateCornerPosition();
        }
    }

    /**
     * Set the row height
     * 
     * @param row - row number (first row is: 0)
     * @param height - new row height
     * @param oldHeight - old row height
     */
    obj.setHeight = function (row, height, oldHeight) {
        if (height > 0) {
            // In case the column is an object
            if (typeof(row) == 'object') {
                row = row.getAttribute('data-y');
            }

            // Oldwidth
            if (! oldHeight) {
                oldHeight = obj.rows[row].getAttribute('height');

                if (! oldHeight) {
                    var rect = obj.rows[row].getBoundingClientRect();
                    oldHeight = rect.height;
                }
            }

            // Integer
            height = parseInt(height);

            // Set width
            obj.rows[row].style.height = height + 'px';

            // Keep options updated
            if (! obj.options.rows[row]) {
                obj.options.rows[row] = {};
            }
            obj.options.rows[row].height = height;

            // Keeping history of changes
            obj.setHistory({
                action:'setHeight',
                row:row,
                oldValue:oldHeight,
                newValue:height,
            });

            // On resize column
            obj.dispatch('onresizerow', el, row, height, oldHeight);

            // Update corner position
            obj.updateCornerPosition();
        }
    }

    /**
     * Get the row height
     * 
     * @param row - row number (first row is: 0)
     * @return height - current row height
     */
    obj.getHeight = function(row) {
        if (! row) {
            // Get height of all rows
            var data = [];
            for (var j = 0; j < obj.rows.length; j++) {
                var h = obj.rows[j].style.height;
                if (h) {
                    data[j] = h;
                }
            }
        } else {
            // In case the row is an object
            if (typeof(row) == 'object') {
                row = $(row).getAttribute('data-y');
            }

            var data = obj.rows[row].style.height;
        }

        return data;
    }

    obj.setFooter = function(data) {
        if (data) {
            obj.options.footers = data;
        }

        if (obj.options.footers) {
            if (! obj.tfoot) {
                obj.tfoot = document.createElement('tfoot');
                obj.table.appendChild(obj.tfoot);
            } 

            for (var j = 0; j < obj.options.footers.length; j++) {
                if (obj.tfoot.children[j]) {
                    var tr = obj.tfoot.children[j];
                } else {
                    var tr = document.createElement('tr');
                    var td = document.createElement('td');
                    tr.appendChild(td);
                    obj.tfoot.appendChild(tr);
                }
                for (var i = 0; i < obj.headers.length; i++) {
                    if (! obj.options.footers[j][i]) {
                        obj.options.footers[j][i] = '';
                    }
                    if (obj.tfoot.children[j].children[i+1]) {
                        var td = obj.tfoot.children[j].children[i+1];
                    } else {
                        var td = document.createElement('td');
                        tr.appendChild(td);

                        // Text align
                        var colAlign = obj.options.columns[i].align ? obj.options.columns[i].align : 'center';
                        td.style.textAlign = colAlign;
                    }
                    td.innerText = obj.parseValue(i, j, obj.options.footers[j][i]);
                }
            }
        }
    }

    /**
     * Get the column title
     * 
     * @param column - column number (first column is: 0)
     * @param title - new column title
     */
    obj.getHeader = function(column) {
        return obj.headers[column].innerText;
    }

    /**
     * Set the column title
     * 
     * @param column - column number (first column is: 0)
     * @param title - new column title
     */
    obj.setHeader = function(column, newValue) {
        if (obj.headers[column]) {
            var oldValue = obj.headers[column].innerText;

            if (! newValue) {
                newValue = prompt(obj.options.text.columnName, oldValue)
            }

            if (newValue) {
                obj.headers[column].innerText = newValue;
                // Keep the title property
                obj.headers[column].setAttribute('title', newValue);
                // Update title
                obj.options.columns[column].title = newValue;
            }

            obj.setHistory({
                action: 'setHeader',
                column: column,
                oldValue: oldValue,
                newValue: newValue
            });

            // On onchange header
            obj.dispatch('onchangeheader', el, column, oldValue, newValue);
        }
    }

    /**
     * Get the headers
     * 
     * @param asArray
     * @return mixed
     */
    obj.getHeaders = function (asArray) {
        var title = [];

        for (var i = 0; i < obj.headers.length; i++) {
            title.push(obj.getHeader(i));
        }

        return asArray ? title : title.join(obj.options.csvDelimiter);
    }

    /**
     * Get meta information from cell(s)
     * 
     * @return integer
     */
    obj.getMeta = function(cell, key) {
        if (! cell) {
            return obj.options.meta;
        } else {
            if (key) {
                return obj.options.meta[cell] && obj.options.meta[cell][key] ? obj.options.meta[cell][key] : null;
            } else {
                return obj.options.meta[cell] ? obj.options.meta[cell] : null;
            }
        }
    }

    /**
     * Set meta information to cell(s)
     * 
     * @return integer
     */
    obj.setMeta = function(o, k, v) {
        if (! obj.options.meta) {
            obj.options.meta = {}
        }

        if (k && v) {
            // Set data value
            if (! obj.options.meta[o]) {
                obj.options.meta[o] = {};
            }
            obj.options.meta[o][k] = v;
        } else {
            // Apply that for all cells
            var keys = Object.keys(o);
            for (var i = 0; i < keys.length; i++) {
                if (! obj.options.meta[keys[i]]) {
                    obj.options.meta[keys[i]] = {};
                }

                var prop = Object.keys(o[keys[i]]);
                for (var j = 0; j < prop.length; j++) {
                    obj.options.meta[keys[i]][prop[j]] = o[keys[i]][prop[j]];
                }
            }
        }

        obj.dispatch('onchangemeta', el, o, k, v);
    }

    /**
     * Update meta information
     * 
     * @return integer
     */
    obj.updateMeta = function(affectedCells) {
        if (obj.options.meta) {
            var newMeta = {};
            var keys = Object.keys(obj.options.meta);
            for (var i = 0; i < keys.length; i++) {
                if (affectedCells[keys[i]]) {
                    newMeta[affectedCells[keys[i]]] = obj.options.meta[keys[i]];
                } else {
                    newMeta[keys[i]] = obj.options.meta[keys[i]];
                }
            }
            // Update meta information
            obj.options.meta = newMeta;
        }
    }

    /**
     * Get style information from cell(s)
     * 
     * @return integer
     */
    obj.getStyle = function(cell, key) {
        // Cell
        if (! cell) {
            // Control vars
            var data = {};

            // Column and row length
            var x = obj.options.data[0].length;
            var y = obj.options.data.length;

            // Go through the columns to get the data
            for (var j = 0; j < y; j++) {
                for (var i = 0; i < x; i++) {
                    // Value
                    var v = key ? obj.records[j][i].style[key] : obj.records[j][i].getAttribute('style');

                    // Any meta data for this column?
                    if (v) {
                        // Column name
                        var k = jexcel.getColumnNameFromId([i, j]);
                        // Value
                        data[k] = v;
                    }
                }
            }

           return data;
        } else {
            cell = jexcel.getIdFromColumnName(cell, true);

            return key ? obj.records[cell[1]][cell[0]].style[key] : obj.records[cell[1]][cell[0]].getAttribute('style');
        }
    },

    obj.resetStyle = function(o, ignoreHistoryAndEvents) {
        var keys = Object.keys(o);
        for (var i = 0; i < keys.length; i++) {
            // Position
            var cell = jexcel.getIdFromColumnName(keys[i], true);
            if (obj.records[cell[1]] && obj.records[cell[1]][cell[0]]) {
                obj.records[cell[1]][cell[0]].setAttribute('style', '');
            }
        }
        obj.setStyle(o, null, null, null, ignoreHistoryAndEvents);
    }

    /**
     * Set meta information to cell(s)
     * 
     * @return integer
     */
    obj.setStyle = function(o, k, v, force, ignoreHistoryAndEvents) {
        var newValue = {};
        var oldValue = {};

        // Apply style
        var applyStyle = function(cellId, key, value) {
            // Position
            var cell = jexcel.getIdFromColumnName(cellId, true);

            if (obj.records[cell[1]] && obj.records[cell[1]][cell[0]] && (obj.records[cell[1]][cell[0]].classList.contains('readonly')==false || force)) {
                // Current value
                var currentValue = obj.records[cell[1]][cell[0]].style[key];

                // Change layout
                if (currentValue == value && ! force) {
                    value = '';
                    obj.records[cell[1]][cell[0]].style[key] = '';
                } else {
                    obj.records[cell[1]][cell[0]].style[key] = value;
                }

                // History
                if (! oldValue[cellId]) {
                    oldValue[cellId] = [];
                }
                if (! newValue[cellId]) {
                    newValue[cellId] = [];
                }

                oldValue[cellId].push([key + ':' + currentValue]);
                newValue[cellId].push([key + ':' + value]);
            }
        }

        if (k && v) {
            // Get object from string
            if (typeof(o) == 'string') {
                applyStyle(o, k, v);
            } else {
                // Avoid duplications
                var oneApplication = [];
                // Apply that for all cells
                for (var i = 0; i < o.length; i++) {
                    var x = o[i].getAttribute('data-x');
                    var y = o[i].getAttribute('data-y');
                    var cellName = jexcel.getColumnNameFromId([x, y]);
                    // This happens when is a merged cell
                    if (! oneApplication[cellName]) {
                        applyStyle(cellName, k, v);
                        oneApplication[cellName] = true;
                    }
                }
            }
        } else {
            var keys = Object.keys(o);
            for (var i = 0; i < keys.length; i++) {
                var style = o[keys[i]];
                if (typeof(style) == 'string') {
                    style = style.split(';');
                }
                for (var j = 0; j < style.length; j++) {
                    if (typeof(style[j]) == 'string') {
                        style[j] = style[j].split(':');
                    }
                    // Apply value
                    if (style[j][0].trim()) {
                        applyStyle(keys[i], style[j][0].trim(), style[j][1]);
                    }
                }
            }
        }

        var keys = Object.keys(oldValue);
        for (var i = 0; i < keys.length; i++) {
            oldValue[keys[i]] = oldValue[keys[i]].join(';');
        }
        var keys = Object.keys(newValue);
        for (var i = 0; i < keys.length; i++) {
            newValue[keys[i]] = newValue[keys[i]].join(';');
        }

        if (! ignoreHistoryAndEvents) {
            // Keeping history of changes
            obj.setHistory({
                action: 'setStyle',
                oldValue: oldValue,
                newValue: newValue,
            });
        }

        obj.dispatch('onchangestyle', el, o, k, v);
    }

    /**
     * Get cell comments, null cell for all
     */
    obj.getComments = function(cell, withAuthor) {
        if (cell) {
            if (typeof(cell) == 'string') {
                var cell = jexcel.getIdFromColumnName(cell, true);
            }

            if (withAuthor) {
                return [obj.records[cell[1]][cell[0]].getAttribute('title'), obj.records[cell[1]][cell[0]].getAttribute('author')];
            } else {
                return obj.records[cell[1]][cell[0]].getAttribute('title') || '';
            }
        } else {
            var data = {};
            for (var j = 0; j < obj.options.data.length; j++) {
                for (var i = 0; i < obj.options.columns.length; i++) {
                    var comments = obj.records[j][i].getAttribute('title');
                    if (comments) {
                        var cell = jexcel.getColumnNameFromId([i, j]);
                        data[cell] = comments;
                    }
                }
            }
            return data;
        }
    }

    /**
     * Set cell comments
     */
    obj.setComments = function(cellId, comments, author) {
        if (typeof(cellId) == 'string') {
            var cell = jexcel.getIdFromColumnName(cellId, true);
        } else {
            var cell = cellId;
        }

        // Keep old value
        var title = obj.records[cell[1]][cell[0]].getAttribute('title');
        var author = obj.records[cell[1]][cell[0]].getAttribute('data-author');
        var oldValue = [ title, author ];

        // Set new values
        obj.records[cell[1]][cell[0]].setAttribute('title', comments ? comments : '');
        obj.records[cell[1]][cell[0]].setAttribute('data-author', author ? author : '');

        // Remove class if there is no comment
        if (comments) {
            obj.records[cell[1]][cell[0]].classList.add('jexcel_comments');
        } else {
            obj.records[cell[1]][cell[0]].classList.remove('jexcel_comments');
        }

        // Save history
        obj.setHistory({
            action:'setComments',
            column: cellId,
            newValue: [ comments, author ],
            oldValue: oldValue,
        });

        // Set comments
        obj.dispatch('oncomments', el, comments, title);
    }

    /**
     * Get table config information
     */
    obj.getConfig = function() {
        var options = obj.options;
        options.style = obj.getStyle();
        options.mergeCells = obj.getMerge();
        options.comments = obj.getComments();

        return options;
    }

    /**
     * Sort data and reload table
     */
    obj.orderBy = function(column, order) {
        if (column >= 0) {
            // Merged cells
            if (Object.keys(obj.options.mergeCells).length > 0) {
                if (! confirm(obj.options.text.thisActionWillDestroyAnyExistingMergedCellsAreYouSure)) {
                    return false;
                } else {
                    // Remove merged cells
                    obj.destroyMerged();
                }
            }

            // Direction
            if (order == null) {
                order = obj.headers[column].classList.contains('arrow-down') ? 1 : 0;
            } else {
                order = order ? 1 : 0;
            }

            // Test order
            var temp = [];
                if (obj.options.columns[column].type == 'number' || obj.options.columns[column].type == 'percentage' || obj.options.columns[column].type == 'autonumber' || obj.options.columns[column].type == 'color') {
                    for (var j = 0; j < obj.options.data.length; j++) {
                        temp[j] = [ j, Number(obj.options.data[j][column]) ];
                    }
                } else if (obj.options.columns[column].type == 'calendar' || obj.options.columns[column].type == 'checkbox' || obj.options.columns[column].type == 'radio') {
                for (var j = 0; j < obj.options.data.length; j++) {
                    temp[j] = [ j, obj.options.data[j][column] ];
                }
            } else {
                for (var j = 0; j < obj.options.data.length; j++) {
                    temp[j] = [ j, obj.records[j][column].innerText.toLowerCase() ];
                }
            }

            // Default sorting method
            if (typeof(obj.options.sorting) !== 'function') {
                obj.options.sorting = function(direction) {
                    return function(a, b) {
                        var valueA = a[1];
                        var valueB = b[1];

                        if (! direction) {
                            return (valueA === '' && valueB !== '') ? 1 : (valueA !== '' && valueB === '') ? -1 : (valueA > valueB) ? 1 : (valueA < valueB) ? -1 :  0;
                        } else {
                            return (valueA === '' && valueB !== '') ? 1 : (valueA !== '' && valueB === '') ? -1 : (valueA > valueB) ? -1 : (valueA < valueB) ? 1 :  0;
                        }
                    }
                }
            }

            temp = temp.sort(obj.options.sorting(order));

            // Save history
            var newValue = [];
            for (var j = 0; j < temp.length; j++) {
                newValue[j] = temp[j][0];
            }

            // Save history
            obj.setHistory({
                action: 'orderBy',
                rows: newValue,
                column: column,
                order: order,
            });

            // Update order
            obj.updateOrderArrow(column, order);
            obj.updateOrder(newValue);

            // On sort event
            obj.dispatch('onsort', el, column, order);

            return true;
        }
    }

    /**
     * Update order arrow
     */
    obj.updateOrderArrow = function(column, order) {
        // Remove order
        for (var i = 0; i < obj.headers.length; i++) {
            obj.headers[i].classList.remove('arrow-up');
            obj.headers[i].classList.remove('arrow-down');
        }

        // No order specified then toggle order
        if (order) {
            obj.headers[column].classList.add('arrow-up');
        } else {
            obj.headers[column].classList.add('arrow-down');
        }
    }

    /**
     * Update rows position
     */
    obj.updateOrder = function(rows) {
        // History
        var data = []
        for (var j = 0; j < rows.length; j++) {
            data[j] = obj.options.data[rows[j]];
        }
        obj.options.data = data;

        var data = []
        for (var j = 0; j < rows.length; j++) {
            data[j] = obj.records[rows[j]];
        }
        obj.records = data;

        var data = []
        for (var j = 0; j < rows.length; j++) {
            data[j] = obj.rows[rows[j]];
        }
        obj.rows = data;

        // Update references
        obj.updateTableReferences();

        // Redo search
        if (obj.results && obj.results.length) {
            if (obj.searchInput.value) {
                obj.search(obj.searchInput.value);
            } else {
                obj.closeFilter();
            }
        } else {
            // Create page
            obj.results = null;
            obj.pageNumber = 0;

            if (obj.options.pagination > 0) {
                obj.page(0);
            } else if (obj.options.lazyLoading == true) {
                obj.loadPage(0);
            } else {
                for (var j = 0; j < obj.rows.length; j++) {
                    obj.tbody.appendChild(obj.rows[j]);
                }
            }
        }
    }

    /**
     * Move row
     * 
     * @return void
     */
    obj.moveRow = function(o, d, ignoreDom) {
        if (Object.keys(obj.options.mergeCells).length > 0) {
            if (o > d) {
                var insertBefore = 1;
            } else {
                var insertBefore = 0;
            }

            if (obj.isRowMerged(o).length || obj.isRowMerged(d, insertBefore).length) {
                if (! confirm(obj.options.text.thisActionWillDestroyAnyExistingMergedCellsAreYouSure)) {
                    return false;
                } else {
                    obj.destroyMerged();
                }
            }
        }

        if (obj.options.search == true) {
            if (obj.results && obj.results.length != obj.rows.length) {
                if (confirm(obj.options.text.thisActionWillClearYourSearchResultsAreYouSure)) {
                    obj.resetSearch();
                } else {
                    return false;
                }
            }

            obj.results = null;
        }

        if (! ignoreDom) {
            if (Array.prototype.indexOf.call(obj.tbody.children, obj.rows[d]) >= 0) {
                if (o > d) {
                    obj.tbody.insertBefore(obj.rows[o], obj.rows[d]);
                } else {
                    obj.tbody.insertBefore(obj.rows[o], obj.rows[d].nextSibling);
                }
            } else {
                obj.tbody.removeChild(obj.rows[o]);
            }
        }

        // Place references in the correct position
        obj.rows.splice(d, 0, obj.rows.splice(o, 1)[0]);
        obj.records.splice(d, 0, obj.records.splice(o, 1)[0]);
        obj.options.data.splice(d, 0, obj.options.data.splice(o, 1)[0]);

        // Respect pagination
        if (obj.options.pagination > 0 && obj.tbody.children.length != obj.options.pagination) {
            obj.page(obj.pageNumber);
        }

        // Keeping history of changes
        obj.setHistory({
            action:'moveRow',
            oldValue: o,
            newValue: d,
        });

        // Update table references
        obj.updateTableReferences();

        // Events
        obj.dispatch('onmoverow', el, o, d);
    }

    /**
     * Insert a new row
     * 
     * @param mixed - number of blank lines to be insert or a single array with the data of the new row
     * @param rowNumber
     * @param insertBefore
     * @return void
     */
    obj.insertRow = function(mixed, rowNumber, insertBefore) {
        // Configuration
        if (obj.options.allowInsertRow == true) {
            // Records
            var records = [];

            // Data to be insert
            var data = [];

            // The insert could be lead by number of rows or the array of data
            if (mixed > 0) {
                var numOfRows = mixed;
            } else {
                var numOfRows = 1;

                if (mixed) {
                    data = mixed;
                }
            }

            // Direction
            var insertBefore = insertBefore ? true : false;

            // Current column number
            var lastRow = obj.options.data.length - 1;

            if (rowNumber == undefined || rowNumber >= parseInt(lastRow) || rowNumber < 0) {
                rowNumber = lastRow;
            }

            // Onbeforeinsertrow
            if (obj.dispatch('onbeforeinsertrow', el, rowNumber, numOfRows, insertBefore) === false) {
                console.log('onbeforeinsertrow returned false');

                return false;
            }

            // Merged cells
            if (Object.keys(obj.options.mergeCells).length > 0) {
                if (obj.isRowMerged(rowNumber, insertBefore).length) {
                    if (! confirm(obj.options.text.thisActionWillDestroyAnyExistingMergedCellsAreYouSure)) {
                        return false;
                    } else {
                        obj.destroyMerged();
                    }
                }
            }

            // Clear any search
            if (obj.options.search == true) {
                if (obj.results && obj.results.length != obj.rows.length) {
                    if (confirm(obj.options.text.thisActionWillClearYourSearchResultsAreYouSure)) {
                        obj.resetSearch();
                    } else {
                        return false;
                    }
                }

                obj.results = null;
            }

            // Insertbefore
            var rowIndex = (! insertBefore) ? rowNumber + 1 : rowNumber;

            // Keep the current data
            var currentRecords = obj.records.splice(rowIndex);
            var currentData = obj.options.data.splice(rowIndex);
            var currentRows = obj.rows.splice(rowIndex);

            // Adding lines
            var rowRecords = [];
            var rowData = [];
            var rowNode = [];

            for (var row = rowIndex; row < (numOfRows + rowIndex); row++) {
                // Push data to the data container
                obj.options.data[row] = [];
                for (var col = 0; col < obj.options.columns.length; col++) {
                    obj.options.data[row][col]  = data[col] ? data[col] : '';
                }
                // Create row
                var tr = obj.createRow(row, obj.options.data[row]);
                // Append node
                if (currentRows[0]) {
                    if (Array.prototype.indexOf.call(obj.tbody.children, currentRows[0]) >= 0) {
                        obj.tbody.insertBefore(tr, currentRows[0]);
                    }
                } else {
                    if (Array.prototype.indexOf.call(obj.tbody.children, obj.rows[rowNumber]) >= 0) {
                        obj.tbody.appendChild(tr);
                    }
                }
                // Record History
                rowRecords.push(obj.records[row]);
                rowData.push(obj.options.data[row]);
                rowNode.push(tr);
            }

            // Copy the data back to the main data
            Array.prototype.push.apply(obj.records, currentRecords);
            Array.prototype.push.apply(obj.options.data, currentData);
            Array.prototype.push.apply(obj.rows, currentRows);

            // Respect pagination
            if (obj.options.pagination > 0) {
                obj.page(obj.pageNumber);
            }

            // Keep history
            obj.setHistory({
                action: 'insertRow',
                rowNumber: rowNumber,
                numOfRows: numOfRows,
                insertBefore: insertBefore,
                rowRecords: rowRecords,
                rowData: rowData,
                rowNode: rowNode,
            });

            // Remove table references
            obj.updateTableReferences();

            // Events
            obj.dispatch('oninsertrow', el, rowNumber, numOfRows, rowRecords, insertBefore);
        }
    }

    /**
     * Delete a row by number
     * 
     * @param integer rowNumber - row number to be excluded
     * @param integer numOfRows - number of lines
     * @return void
     */
    obj.deleteRow = function(rowNumber, numOfRows) {
        // Global Configuration
        if (obj.options.allowDeleteRow == true) {
            if (obj.options.allowDeletingAllRows == true || obj.options.data.length > 1) {
                // Delete row definitions
                if (rowNumber == undefined) {
                    var number = obj.getSelectedRows();

                    if (! number[0]) {
                        rowNumber = obj.options.data.length - 1;
                        numOfRows = 1;
                    } else {
                        rowNumber = parseInt(number[0].getAttribute('data-y'));
                        numOfRows = number.length;
                    }
                }

                // Last column
                var lastRow = obj.options.data.length - 1;

                if (rowNumber == undefined || rowNumber > lastRow || rowNumber < 0) {
                    rowNumber = lastRow;
                }

                if (! numOfRows) {
                    numOfRows = 1;
                }

                // Do not delete more than the number of recoreds
                if (rowNumber + numOfRows >= obj.options.data.length) {
                    numOfRows = obj.options.data.length - rowNumber;
                }

                // Onbeforedeleterow
                if (obj.dispatch('onbeforedeleterow', el, rowNumber, numOfRows) === false) {
                    console.log('onbeforedeleterow returned false');
                    return false;
                }

                if (parseInt(rowNumber) > -1) {
                    // Merged cells
                    var mergeExists = false;
                    if (Object.keys(obj.options.mergeCells).length > 0) {
                        for (var row = rowNumber; row < rowNumber + numOfRows; row++) {
                            if (obj.isRowMerged(row, false).length) {
                                mergeExists = true;
                            }
                        }
                    }
                    if (mergeExists) {
                        if (! confirm(obj.options.text.thisActionWillDestroyAnyExistingMergedCellsAreYouSure)) {
                            return false;
                        } else {
                            obj.destroyMerged();
                        }
                    }

                    // Clear any search
                    if (obj.options.search == true) {
                        if (obj.results && obj.results.length != obj.rows.length) {
                            if (confirm(obj.options.text.thisActionWillClearYourSearchResultsAreYouSure)) {
                                obj.resetSearch();
                            } else {
                                return false;
                            }
                        }

                        obj.results = null;
                    }

                    // If delete all rows, and set allowDeletingAllRows false, will stay one row
                    if (obj.options.allowDeletingAllRows == false && lastRow + 1 === numOfRows) {
                        numOfRows--;
                        console.error('JEXCEL. It is not possible to delete the last row');
                    }

                    // Remove node
                    for (var row = rowNumber; row < rowNumber + numOfRows; row++) {
                        if (Array.prototype.indexOf.call(obj.tbody.children, obj.rows[row]) >= 0) {
                            obj.rows[row].className = '';
                            obj.rows[row].parentNode.removeChild(obj.rows[row]);
                        }
                    }

                    // Remove data
                    var rowRecords = obj.records.splice(rowNumber, numOfRows);
                    var rowData = obj.options.data.splice(rowNumber, numOfRows);
                    var rowNode = obj.rows.splice(rowNumber, numOfRows);

                    // Respect pagination
                    if (obj.options.pagination > 0 && obj.tbody.children.length != obj.options.pagination) {
                        obj.page(obj.pageNumber);
                    }

                    // Remove selection
                    obj.conditionalSelectionUpdate(1, rowNumber, (rowNumber + numOfRows) - 1);

                    // Keep history
                    obj.setHistory({
                        action: 'deleteRow',
                        rowNumber: rowNumber,
                        numOfRows: numOfRows,
                        insertBefore: 1,
                        rowRecords: rowRecords,
                        rowData: rowData,
                        rowNode: rowNode
                    });

                    // Remove table references
                    obj.updateTableReferences();

                    // Events
                    obj.dispatch('ondeleterow', el, rowNumber, numOfRows, rowRecords);
                }
            } else {
                console.error('JEXCEL. It is not possible to delete the last row');
            }
        }
    }


    /**
     * Move column
     * 
     * @return void
     */
    obj.moveColumn = function(o, d) {
        if (Object.keys(obj.options.mergeCells).length > 0) {
            if (o > d) {
                var insertBefore = 1;
            } else {
                var insertBefore = 0;
            }

            if (obj.isColMerged(o).length || obj.isColMerged(d, insertBefore).length) {
                if (! confirm(obj.options.text.thisActionWillDestroyAnyExistingMergedCellsAreYouSure)) {
                    return false;
                } else {
                    obj.destroyMerged();
                }
            }
        }

        var o = parseInt(o);
        var d = parseInt(d);

        if (o > d) {
            obj.headerContainer.insertBefore(obj.headers[o], obj.headers[d]);
            obj.colgroupContainer.insertBefore(obj.colgroup[o], obj.colgroup[d]);

            for (var j = 0; j < obj.rows.length; j++) {
                obj.rows[j].insertBefore(obj.records[j][o], obj.records[j][d]);
            }
        } else {
            obj.headerContainer.insertBefore(obj.headers[o], obj.headers[d].nextSibling);
            obj.colgroupContainer.insertBefore(obj.colgroup[o], obj.colgroup[d].nextSibling);

            for (var j = 0; j < obj.rows.length; j++) {
                obj.rows[j].insertBefore(obj.records[j][o], obj.records[j][d].nextSibling);
            }
        }

        obj.options.columns.splice(d, 0, obj.options.columns.splice(o, 1)[0]);
        obj.headers.splice(d, 0, obj.headers.splice(o, 1)[0]);
        obj.colgroup.splice(d, 0, obj.colgroup.splice(o, 1)[0]);

        for (var j = 0; j < obj.rows.length; j++) {
            obj.options.data[j].splice(d, 0, obj.options.data[j].splice(o, 1)[0]);
            obj.records[j].splice(d, 0, obj.records[j].splice(o, 1)[0]);
        }

        // Update footers position
        if (obj.options.footers) {
            for (var j = 0; j < obj.options.footers.length; j++) {
                obj.options.footers[j].splice(d, 0, obj.options.footers[j].splice(o, 1)[0]);
            }
        }

        // Keeping history of changes
        obj.setHistory({
            action:'moveColumn',
            oldValue: o,
            newValue: d,
        });

        // Update table references
        obj.updateTableReferences();

        // Events
        obj.dispatch('onmovecolumn', el, o, d);
    }

    /**
     * Insert a new column
     * 
     * @param mixed - num of columns to be added or data to be added in one single column
     * @param int columnNumber - number of columns to be created
     * @param bool insertBefore
     * @param object properties - column properties
     * @return void
     */
    obj.insertColumn = function(mixed, columnNumber, insertBefore, properties) {
        // Configuration
        if (obj.options.allowInsertColumn == true) {
            // Records
            var records = [];

            // Data to be insert
            var data = [];

            // The insert could be lead by number of rows or the array of data
            if (mixed > 0) {
                var numOfColumns = mixed;
            } else {
                var numOfColumns = 1;

                if (mixed) {
                    data = mixed;
                }
            }

            // Direction
            var insertBefore = insertBefore ? true : false;

            // Current column number
            var lastColumn = obj.options.columns.length - 1;

            // Confirm position
            if (columnNumber == undefined || columnNumber >= parseInt(lastColumn) || columnNumber < 0) {
                columnNumber = lastColumn;
            }

            // Onbeforeinsertcolumn
            if (obj.dispatch('onbeforeinsertcolumn', el, columnNumber, numOfColumns, insertBefore) === false) {
                console.log('onbeforeinsertcolumn returned false');

                return false;
            }

            // Merged cells
            if (Object.keys(obj.options.mergeCells).length > 0) {
                if (obj.isColMerged(columnNumber, insertBefore).length) {
                    if (! confirm(obj.options.text.thisActionWillDestroyAnyExistingMergedCellsAreYouSure)) {
                        return false;
                    } else {
                        obj.destroyMerged();
                    }
                }
            }

            // Create default properties
            if (! properties) {
                properties = [];
            }

            for (var i = 0; i < numOfColumns; i++) {
                if (! properties[i]) {
                    properties[i] = { type:'text', source:[], options:[], width:obj.options.defaultColWidth, align:obj.options.defaultColAlign };
                }
            }

            // Insert before
            var columnIndex = (! insertBefore) ? columnNumber + 1 : columnNumber;
            obj.options.columns = jexcel.injectArray(obj.options.columns, columnIndex, properties);

            // Open space in the containers
            var currentHeaders = obj.headers.splice(columnIndex);
            var currentColgroup = obj.colgroup.splice(columnIndex);

            // History
            var historyHeaders = [];
            var historyColgroup = [];
            var historyRecords = [];
            var historyData = [];
            var historyFooters = [];

            // Add new headers
            for (var col = columnIndex; col < (numOfColumns + columnIndex); col++) {
                obj.createCellHeader(col);
                obj.headerContainer.insertBefore(obj.headers[col], obj.headerContainer.children[col+1]);
                obj.colgroupContainer.insertBefore(obj.colgroup[col], obj.colgroupContainer.children[col+1]);

                historyHeaders.push(obj.headers[col]);
                historyColgroup.push(obj.colgroup[col]);
            }

            // Add new footer cells
            if (obj.options.footers) {
                for (var j = 0; j < obj.options.footers.length; j++) {
                    historyFooters[j] = [];
                    for (var i = 0; i < numOfColumns; i++) {
                        historyFooters[j].push('');
                    }
                    obj.options.footers[j].splice(columnIndex, 0, historyFooters[j]);
                }
            }

            // Adding visual columns
            for (var row = 0; row < obj.options.data.length; row++) {
                // Keep the current data
                var currentData = obj.options.data[row].splice(columnIndex);
                var currentRecord = obj.records[row].splice(columnIndex);

                // History
                historyData[row] = [];
                historyRecords[row] = [];

                for (var col = columnIndex; col < (numOfColumns + columnIndex); col++) {
                    // New value
                    var value = data[row] ? data[row] : '';
                    obj.options.data[row][col] = value;
                    // New cell
                    var td = obj.createCell(col, row, obj.options.data[row][col]);
                    obj.records[row][col] = td;
                    // Add cell to the row
                    if (obj.rows[row]) {
                        obj.rows[row].insertBefore(td, obj.rows[row].children[col+1]);
                    }

                    // Record History
                    historyData[row].push(value);
                    historyRecords[row].push(td);
                }

                // Copy the data back to the main data
                Array.prototype.push.apply(obj.options.data[row], currentData);
                Array.prototype.push.apply(obj.records[row], currentRecord);
            }

            Array.prototype.push.apply(obj.headers, currentHeaders);
            Array.prototype.push.apply(obj.colgroup, currentColgroup);

            // Adjust nested headers
            if (obj.options.nestedHeaders && obj.options.nestedHeaders.length > 0) {
                // Flexible way to handle nestedheaders
                if (obj.options.nestedHeaders[0] && obj.options.nestedHeaders[0][0]) {
                    for (var j = 0; j < obj.options.nestedHeaders.length; j++) {
                        var colspan = parseInt(obj.options.nestedHeaders[j][obj.options.nestedHeaders[j].length-1].colspan) + numOfColumns;
                        obj.options.nestedHeaders[j][obj.options.nestedHeaders[j].length-1].colspan = colspan;
                        obj.thead.children[j].children[obj.thead.children[j].children.length-1].setAttribute('colspan', colspan);
                    }
                } else {
                    var colspan = parseInt(obj.options.nestedHeaders[0].colspan) + numOfColumns;
                    obj.options.nestedHeaders[0].colspan = colspan;
                    obj.thead.children[0].children[obj.thead.children[0].children.length-1].setAttribute('colspan', colspan);
                }
            }

            // Keep history
            obj.setHistory({
                action: 'insertColumn',
                columnNumber:columnNumber,
                numOfColumns:numOfColumns,
                insertBefore:insertBefore,
                columns:properties,
                headers:historyHeaders,
                colgroup:historyColgroup,
                records:historyRecords,
                footers:historyFooters,
                data:historyData,
            });

            // Remove table references
            obj.updateTableReferences();

            // Events
            obj.dispatch('oninsertcolumn', el, columnNumber, numOfColumns, historyRecords, insertBefore);
        }
    }

    /**
     * Delete a column by number
     * 
     * @param integer columnNumber - reference column to be excluded
     * @param integer numOfColumns - number of columns to be excluded from the reference column
     * @return void
     */
    obj.deleteColumn = function(columnNumber, numOfColumns) {
        // Global Configuration
        if (obj.options.allowDeleteColumn == true) {
            if (obj.headers.length > 1) {
                // Delete column definitions
                if (columnNumber == undefined) {
                    var number = obj.getSelectedColumns(true);

                    if (! number.length) {
                        // Remove last column
                        columnNumber = obj.headers.length - 1;
                        numOfColumns = 1;
                    } else {
                        // Remove selected
                        columnNumber = parseInt(number[0]);
                        numOfColumns = parseInt(number.length);
                    }
                }

                // Lasat column
                var lastColumn = obj.options.data[0].length - 1;

                if (columnNumber == undefined || columnNumber > lastColumn || columnNumber < 0) {
                    columnNumber = lastColumn;
                }

                // Minimum of columns to be delete is 1
                if (! numOfColumns) {
                    numOfColumns = 1;
                }

                // Can't delete more than the limit of the table
                if (numOfColumns > obj.options.data[0].length - columnNumber) {
                    numOfColumns = obj.options.data[0].length - columnNumber;
                }

                // onbeforedeletecolumn
               if (obj.dispatch('onbeforedeletecolumn', el, columnNumber, numOfColumns) === false) {
                  console.log('onbeforedeletecolumn returned false');
                  return false;
               }

                // Can't remove the last column
                if (parseInt(columnNumber) > -1) {
                    // Merged cells
                    var mergeExists = false;
                    if (Object.keys(obj.options.mergeCells).length > 0) {
                        for (var col = columnNumber; col < columnNumber + numOfColumns; col++) {
                            if (obj.isColMerged(col, false).length) {
                                mergeExists = true;
                            }
                        }
                    }
                    if (mergeExists) {
                        if (! confirm(obj.options.text.thisActionWillDestroyAnyExistingMergedCellsAreYouSure)) {
                            return false;
                        } else {
                            obj.destroyMerged();
                        }
                    }

                    // Delete the column properties
                    var columns = obj.options.columns.splice(columnNumber, numOfColumns);

                    for (var col = columnNumber; col < columnNumber + numOfColumns; col++) {
                        obj.colgroup[col].className = '';
                        obj.headers[col].className = '';
                        obj.colgroup[col].parentNode.removeChild(obj.colgroup[col]);
                        obj.headers[col].parentNode.removeChild(obj.headers[col]);
                    }

                    var historyHeaders = obj.headers.splice(columnNumber, numOfColumns);
                    var historyColgroup = obj.colgroup.splice(columnNumber, numOfColumns);
                    var historyRecords = [];
                    var historyData = [];
                    var historyFooters = [];

                    for (var row = 0; row < obj.options.data.length; row++) {
                        for (var col = columnNumber; col < columnNumber + numOfColumns; col++) {
                            obj.records[row][col].className = '';
                            obj.records[row][col].parentNode.removeChild(obj.records[row][col]);
                        }
                    }

                    // Delete headers
                    for (var row = 0; row < obj.options.data.length; row++) {
                        // History
                        historyData[row] = obj.options.data[row].splice(columnNumber, numOfColumns);
                        historyRecords[row] = obj.records[row].splice(columnNumber, numOfColumns);
                    }

                    // Delete footers
                    if (obj.options.footers) {
                        for (var row = 0; row < obj.options.footers.length; row++) {
                            historyFooters[row] = obj.options.footers[row].splice(columnNumber, numOfColumns);
                        }
                    }

                    // Remove selection
                    obj.conditionalSelectionUpdate(0, columnNumber, (columnNumber + numOfColumns) - 1);

                    // Adjust nested headers
                    if (obj.options.nestedHeaders && obj.options.nestedHeaders.length > 0) {
                        // Flexible way to handle nestedheaders
                        if (obj.options.nestedHeaders[0] && obj.options.nestedHeaders[0][0]) {
                            for (var j = 0; j < obj.options.nestedHeaders.length; j++) {
                                var colspan = parseInt(obj.options.nestedHeaders[j][obj.options.nestedHeaders[j].length-1].colspan) - numOfColumns;
                                obj.options.nestedHeaders[j][obj.options.nestedHeaders[j].length-1].colspan = colspan;
                                obj.thead.children[j].children[obj.thead.children[j].children.length-1].setAttribute('colspan', colspan);
                            }
                        } else {
                            var colspan = parseInt(obj.options.nestedHeaders[0].colspan) - numOfColumns;
                            obj.options.nestedHeaders[0].colspan = colspan;
                            obj.thead.children[0].children[obj.thead.children[0].children.length-1].setAttribute('colspan', colspan);
                        }
                    }

                    // Keeping history of changes
                    obj.setHistory({
                        action:'deleteColumn',
                        columnNumber:columnNumber,
                        numOfColumns:numOfColumns,
                        insertBefore: 1,
                        columns:columns,
                        headers:historyHeaders,
                        colgroup:historyColgroup,
                        records:historyRecords,
                        footers:historyFooters,
                        data:historyData,
                    });

                    // Update table references
                    obj.updateTableReferences();

                    // Delete
                    obj.dispatch('ondeletecolumn', el, columnNumber, numOfColumns, historyRecords);
                }
            } else {
                console.error('JEXCEL. It is not possible to delete the last column');
            }
        }
    }

    /**
     * Get seleted rows numbers
     * 
     * @return array
     */
    obj.getSelectedRows = function(asIds) {
        var rows = [];
        // Get all selected rows
        for (var j = 0; j < obj.rows.length; j++) {
            if (obj.rows[j].classList.contains('selected')) {
                if (asIds) {
                    rows.push(j);
                } else {
                    rows.push(obj.rows[j]);
                }
            }
        }

        return rows;
    },

    /**
     * Get seleted column numbers
     * 
     * @return array
     */
    obj.getSelectedColumns = function() {
        var cols = [];
        // Get all selected cols
        for (var i = 0; i < obj.headers.length; i++) {
            if (obj.headers[i].classList.contains('selected')) {
                cols.push(i);
            }
        }

        return cols;
    }

    /**
     * Get highlighted
     * 
     * @return array
     */
    obj.getHighlighted = function() {
        return obj.highlighted;
    }

    /**
     * Update cell references
     * 
     * @return void
     */
    obj.updateTableReferences = function() {
        // Update headers
        for (var i = 0; i < obj.headers.length; i++) {
            var x = obj.headers[i].getAttribute('data-x');

            if (x != i) {
                // Update coords
                obj.headers[i].setAttribute('data-x', i);
                // Title
                if (! obj.headers[i].getAttribute('title')) {
                    obj.headers[i].innerHTML = jexcel.getColumnName(i);
                }
            }
        }

        // Update all rows
        for (var j = 0; j < obj.rows.length; j++) {
            if (obj.rows[j]) {
                var y = obj.rows[j].getAttribute('data-y');

                if (y != j) {
                    // Update coords
                    obj.rows[j].setAttribute('data-y', j);
                    obj.rows[j].children[0].setAttribute('data-y', j);
                    // Row number
                    obj.rows[j].children[0].innerHTML = j + 1;
                }
            }
        }

        // Regular cells affected by this change
        var affectedTokens = [];
        var mergeCellUpdates = [];

        // Update cell
        var updatePosition = function(x,y,i,j) {
            if (x != i) {
                obj.records[j][i].setAttribute('data-x', i);
            }
            if (y != j) {
                obj.records[j][i].setAttribute('data-y', j);
            }

            // Other updates
            if (x != i || y != j) {
                var columnIdFrom = jexcel.getColumnNameFromId([x, y]);
                var columnIdTo = jexcel.getColumnNameFromId([i, j]);
                affectedTokens[columnIdFrom] = columnIdTo;
            }
        }

        for (var j = 0; j < obj.records.length; j++) {
            for (var i = 0; i < obj.records[0].length; i++) {
                if (obj.records[j][i]) {
                    // Current values
                    var x = obj.records[j][i].getAttribute('data-x');
                    var y = obj.records[j][i].getAttribute('data-y');

                    // Update column
                    if (obj.records[j][i].getAttribute('data-merged')) {
                        var columnIdFrom = jexcel.getColumnNameFromId([x, y]);
                        var columnIdTo = jexcel.getColumnNameFromId([i, j]);
                        if (mergeCellUpdates[columnIdFrom] == null) {
                            if (columnIdFrom == columnIdTo) {
                                mergeCellUpdates[columnIdFrom] = false;
                            } else {
                                var totalX = parseInt(i - x);
                                var totalY = parseInt(j - y);
                                mergeCellUpdates[columnIdFrom] = [ columnIdTo, totalX, totalY ];
                            }
                        }
                    } else {
                        updatePosition(x,y,i,j);
                    }
                }
            }
        }

        // Update merged if applicable
        var keys = Object.keys(mergeCellUpdates);
        if (keys.length) {
            for (var i = 0; i < keys.length; i++) {
                if (mergeCellUpdates[keys[i]]) {
                    var info = jexcel.getIdFromColumnName(keys[i], true)
                    var x = info[0];
                    var y = info[1];
                    updatePosition(x,y,x + mergeCellUpdates[keys[i]][1],y + mergeCellUpdates[keys[i]][2]);

                    var columnIdFrom = keys[i];
                    var columnIdTo = mergeCellUpdates[keys[i]][0];
                    for (var j = 0; j < obj.options.mergeCells[columnIdFrom][2].length; j++) {
                        var x = parseInt(obj.options.mergeCells[columnIdFrom][2][j].getAttribute('data-x'));
                        var y = parseInt(obj.options.mergeCells[columnIdFrom][2][j].getAttribute('data-y'));
                        obj.options.mergeCells[columnIdFrom][2][j].setAttribute('data-x', x + mergeCellUpdates[keys[i]][1]);
                        obj.options.mergeCells[columnIdFrom][2][j].setAttribute('data-y', y + mergeCellUpdates[keys[i]][2]);
                    }

                    obj.options.mergeCells[columnIdTo] = obj.options.mergeCells[columnIdFrom];
                    delete(obj.options.mergeCells[columnIdFrom]);
                }
            }
        }

        // Update formulas
        obj.updateFormulas(affectedTokens);

        // Update meta data
        obj.updateMeta(affectedTokens);

        // Refresh selection
        obj.refreshSelection();

        // Update table with custom configuration if applicable
        obj.updateTable();
    }

    /**
     * Custom settings for the cells
     */
    obj.updateTable = function() {
        // Check for spare
        if (obj.options.minSpareRows > 0) {
            var numBlankRows = 0;
            for (var j = obj.rows.length - 1; j >= 0; j--) {
                var test = false;
                for (var i = 0; i < obj.headers.length; i++) {
                    if (obj.options.data[j][i]) {
                        test = true;
                    }
                }
                if (test) {
                    break;
                } else {
                    numBlankRows++;
                }
            }

            if (obj.options.minSpareRows - numBlankRows > 0) {
                obj.insertRow(obj.options.minSpareRows - numBlankRows)
            }
        }

        if (obj.options.minSpareCols > 0) {
            var numBlankCols = 0;
            for (var i = obj.headers.length - 1; i >= 0 ; i--) {
                var test = false;
                for (var j = 0; j < obj.rows.length; j++) {
                    if (obj.options.data[j][i]) {
                        test = true;
                    }
                }
                if (test) {
                    break;
                } else {
                    numBlankCols++;
                }
            }

            if (obj.options.minSpareCols - numBlankCols > 0) {
                obj.insertColumn(obj.options.minSpareCols - numBlankCols)
            }
        }

        // Customizations by the developer
        if (typeof(obj.options.updateTable) == 'function') {
            if (obj.options.detachForUpdates) {
                el.removeChild(obj.content);
            }

            for (var j = 0; j < obj.rows.length; j++) {
                for (var i = 0; i < obj.headers.length; i++) {
                    obj.options.updateTable(el, obj.records[j][i], i, j, obj.options.data[j][i], obj.records[j][i].innerText, jexcel.getColumnNameFromId([i, j]));
                }
            }

            if (obj.options.detachForUpdates) {
                el.insertBefore(obj.content, obj.pagination);
            }
        }

        // Update footers
        if (obj.options.footers) {
            obj.setFooter();
        }

        // Update corner position
        setTimeout(function() {
            obj.updateCornerPosition();
        },0);
    }

    /**
     * Readonly
     */
    obj.isReadOnly = function(cell) {
        if (cell = obj.getCell(cell)) {
            return cell.classList.contains('readonly') ? true : false;
        }
    }

    /**
     * Readonly
    */
    obj.setReadOnly = function(cell, state) {
        if (cell = obj.getCell(cell)) {
            if (state) {
                cell.classList.add('readonly');
            } else {
                cell.classList.remove('readonly');
            }
        }
    }

    /**
     * Show row
     */
    obj.showRow = function(rowNumber) {
        obj.rows[rowNumber].style.display = '';
    }

    /**
     * Hide row
     */
    obj.hideRow = function(rowNumber) {
        obj.rows[rowNumber].style.display = 'none';
    }

    /**
     * Show column
     */
    obj.showColumn = function(colNumber) {
        obj.headers[colNumber].style.display = '';
        obj.colgroup[colNumber].style.display = '';
        for (var j = 0; j < obj.options.data.length; j++) {
            obj.records[j][colNumber].style.display = '';
        }
    }

    /**
     * Hide column
     */
    obj.hideColumn = function(colNumber) {
        obj.headers[colNumber].style.display = 'none';
        obj.colgroup[colNumber].style.display = 'none';
        for (var j = 0; j < obj.options.data.length; j++) {
            obj.records[j][colNumber].style.display = 'none';
        }
    }

    /**
     * Show index column
     */
    obj.showIndex = function() {
        obj.table.classList.remove('jexcel_hidden_index');
    }

    /**
     * Hide index column
     */
    obj.hideIndex = function() {
        obj.table.classList.add('jexcel_hidden_index');
    }

    /**
     * Update all related cells in the chain
     */
    var chainLoopProtection = [];

    obj.updateFormulaChain = function(x, y, records) {
        var cellId = jexcel.getColumnNameFromId([x, y]);
        if (obj.formula[cellId] && obj.formula[cellId].length > 0) {
            if (chainLoopProtection[cellId]) {
                obj.records[y][x].innerHTML = '#ERROR';
                obj.formula[cellId] = '';
            } else {
                // Protection
                chainLoopProtection[cellId] = true;

                for (var i = 0; i < obj.formula[cellId].length; i++) {
                    var cell = jexcel.getIdFromColumnName(obj.formula[cellId][i], true);
                    // Update cell
                    var value = ''+obj.options.data[cell[1]][cell[0]];
                    if (value.substr(0,1) == '=') {
                        records.push(obj.updateCell(cell[0], cell[1], value, true));
                    } else {
                        // No longer a formula, remove from the chain
                        Object.keys(obj.formula)[i] = null;
                    }
                    obj.updateFormulaChain(cell[0], cell[1], records);
                }
            }
        }

        chainLoopProtection = [];
    }

    /**
     * Update formulas
     */
    obj.updateFormulas = function(referencesToUpdate) {
        // Update formulas
        for (var j = 0; j < obj.options.data.length; j++) {
            for (var i = 0; i < obj.options.data[0].length; i++) {
                var value = '' + obj.options.data[j][i];
                // Is formula
                if (value.substr(0,1) == '=') {
                    // Replace tokens
                    var newFormula = obj.updateFormula(value, referencesToUpdate);
                    if (newFormula != value) {
                        obj.options.data[j][i] = newFormula;
                    }
                }
            }
        }

        // Update formula chain
        var formula = [];
        var keys = Object.keys(obj.formula);
        for (var j = 0; j < keys.length; j++) {
            // Current key and values
            var key = keys[j];
            var value = obj.formula[key];
            // Update key
            if (referencesToUpdate[key]) {
                key = referencesToUpdate[key];
            }
            // Update values
            formula[key] = [];
            for (var i = 0; i < value.length; i++) {
                var letter = value[i];
                if (referencesToUpdate[letter]) {
                    letter = referencesToUpdate[letter];
                }
                formula[key].push(letter);
            }
        }
        obj.formula = formula;
    }

    /**
     * Update formula
     */
    obj.updateFormula = function(formula, referencesToUpdate) {
        var testLetter = /[A-Z]/;
        var testNumber = /[0-9]/;

        var newFormula = '';
        var letter = null;
        var number = null;
        var token = '';

        for (var index = 0; index < formula.length; index++) {
            if (testLetter.exec(formula[index])) {
                letter = 1;
                number = 0;
                token += formula[index];
            } else if (testNumber.exec(formula[index])) {
                number = letter ? 1 : 0;
                token += formula[index];
            } else {
                if (letter && number) {
                    token = referencesToUpdate[token] ? referencesToUpdate[token] : token;
                }
                newFormula += token;
                newFormula += formula[index];
                letter = 0;
                number = 0;
                token = '';
            }
        }

        if (token) {
            if (letter && number) {
                token = referencesToUpdate[token] ? referencesToUpdate[token] : token;
            }
            newFormula += token;
        }

        return newFormula;
    }
    
    /**
    * Secure formula
    */
    var secureFormula = function(oldValue) {
        var newValue = '';
        var inside = 0;

        for (var i = 0; i < oldValue.length; i++) {
            if (oldValue[i] == '"') {
                if (inside == 0) {
                    inside = 1;
                } else {
                    inside = 0;
                }
            }

            if (inside == 1) {
                newValue += oldValue[i];
             } else {
                newValue += oldValue[i].toUpperCase();
            }
        }

        return newValue;
    }

    /**
     * Parse formulas
     */
    obj.executeFormula = function(expression, x, y) {

        var formulaResults = [];
        var formulaLoopProtection = [];

        // Execute formula with loop protection
        var execute = function(expression, x, y) {
         // Parent column identification
            var parentId = jexcel.getColumnNameFromId([x, y]);

            // Code protection
            if (formulaLoopProtection[parentId]) {
                console.error('Reference loop detected');
                return '#ERROR';
            }

            formulaLoopProtection[parentId] = true;

            // Convert range tokens
            var tokensUpdate = function(tokens) {
                for (var index = 0; index < tokens.length; index++) {
                    var f = [];
                    var token = tokens[index].split(':');
                    var e1 = jexcel.getIdFromColumnName(token[0], true);
                    var e2 = jexcel.getIdFromColumnName(token[1], true);

                    if (e1[0] <= e2[0]) {
                        var x1 = e1[0];
                        var x2 = e2[0];
                    } else {
                        var x1 = e2[0];
                        var x2 = e1[0];
                    }

                    if (e1[1] <= e2[1]) {
                        var y1 = e1[1];
                        var y2 = e2[1];
                    } else {
                        var y1 = e2[1];
                        var y2 = e1[1];
                    }

                    for (var j = y1; j <= y2; j++) {
                        for (var i = x1; i <= x2; i++) {
                            f.push(jexcel.getColumnNameFromId([i, j]));
                        }
                    }

                    expression = expression.replace(tokens[index], f.join(','));
                }
            }

            // Range with $ remove $
            expression = expression.replace(/\$?([A-Z])+\$?([0-9])+/g, "$1$2");

            var tokens = expression.match(/([A-Z]+[0-9]+)\:([A-Z]+[0-9]+)/g);
            if (tokens && tokens.length) {
                tokensUpdate(tokens);
            }

            // String
            var evalstring = '';

            // Get tokens
            var tokens = expression.match(/([A-Z]+[0-9]+)/g);

            // Direct self-reference protection
            if (tokens && tokens.indexOf(parentId) > -1) {
                console.error('Self Reference detected');
                return '#ERROR';
            } else {
                if (tokens) {
                    for (var i = 0; i < tokens.length; i++) {
                        // Keep chain
                        if (! obj.formula[tokens[i]]) {
                            obj.formula[tokens[i]] = [];
                        }
                        // Is already in the register
                        if (obj.formula[tokens[i]].indexOf(parentId) < 0) {
                            obj.formula[tokens[i]].push(parentId);
                        }

                        // Do not calculate again
                        if (eval('typeof(' + tokens[i] + ') == "undefined"')) {
                            // Coords
                            var position = jexcel.getIdFromColumnName(tokens[i], 1);
                            // Get value
                            if (typeof(obj.options.data[position[1]]) != 'undefined' && typeof(obj.options.data[position[1]][position[0]]) != 'undefined') {
                                var value = obj.options.data[position[1]][position[0]];
                            } else {
                                var value = '';
                            }
                            // Get column data
                            if ((''+value).substr(0,1) == '=') {
                                if (formulaResults[tokens[i]]) {
                                    value = formulaResults[tokens[i]];
                                } else {
                                    value = execute(value, position[0], position[1]);
                                    formulaResults[tokens[i]] = value;
                                }
                            }
                            // Type!
                            if ((''+value).trim() == '') {
                                // Null
                                evalstring += "var " + tokens[i] + " = null;";
                            } else {
                                if (value == Number(value) && obj.options.autoCasting == true) {
                                    // Number
                                    evalstring += "var " + tokens[i] + " = " + Number(value) + ";";
                                } else {
                                    // Trying any formatted number
                                    var number = obj.parseNumber(value, position[0])
                                    if (obj.options.autoCasting == true && number) {
                                        // Render as number
                                        evalstring += "var " + tokens[i] + " = " + number + ";";
                                    } else {
                                        // Render as string
                                        evalstring += "var " + tokens[i] + " = '" + value + "';";
                                    }
                                }
                            }
                        }
                    }
                }

                // Convert formula to javascript
                try {
                    evalstring += "function COLUMN() { return parseInt(x) + 1; }; function ROW() { return parseInt(y) + 1; }; function CELL() { return parentId; }; function TABLE() { return obj; }; function VALUE(col, row) { return obj.records[row-1][col-1].innerHTML; }; function THISROWCELL(col) { var id = jexcel.getIdFromColumnName(col+(parseInt(y)+1), true); return obj.records[id[1]][id[0]].innerHTML; }";

                    var res = eval(evalstring + expression.substr(1));
                } catch (e) {
                    var res = '#ERROR';
                }

                return res;
            }
        }

        return execute(expression, x, y);
    }

    /**
     * Trying to extract a number from a string
     */
    obj.parseNumber = function(value, columnNumber) {
        // Decimal point
        var decimal = columnNumber && obj.options.columns[columnNumber].decimal ? obj.options.columns[columnNumber].decimal : '.';

        // Parse both parts of the number
        var number = ('' + value);
        number = number.split(decimal);
        number[0] = number[0].match(/[+-]?[0-9]/g);
        if (number[0]) {
            number[0] = number[0].join('');
        }
        if (number[1]) {
            number[1] = number[1].match(/[0-9]*/g).join('');
        }

        // Is a valid number
        if (number[0] && Number(number[0]) >= 0) {
            if (! number[1]) {
                var value = Number(number[0] + '.00');
            } else {
                var value = Number(number[0] + '.' + number[1]);
            }
        } else {
            var value = null;
        }

        return value;
    }

    /**
     * Get row number
     */
    obj.row = function(cell) {
    }

    /**
     * Get col number
     */
    obj.col = function(cell) {
    }

    obj.up = function(shiftKey, ctrlKey) {
        if (shiftKey) {
            if (obj.selectedCell[3] > 0) {
                obj.up.visible(1, ctrlKey ? 0 : 1)
            }
        } else {
            if (obj.selectedCell[1] > 0) {
                obj.up.visible(0, ctrlKey ? 0 : 1)
            }
            obj.selectedCell[2] = obj.selectedCell[0];
            obj.selectedCell[3] = obj.selectedCell[1];
        }

        // Update selection
        obj.updateSelectionFromCoords(obj.selectedCell[0], obj.selectedCell[1], obj.selectedCell[2], obj.selectedCell[3]);

        // Change page
        if (obj.options.lazyLoading == true) {
            if (obj.selectedCell[1] == 0 || obj.selectedCell[3] == 0) {
                obj.loadPage(0);
                obj.updateSelectionFromCoords(obj.selectedCell[0], obj.selectedCell[1], obj.selectedCell[2], obj.selectedCell[3]);
            } else {
                if (obj.loadValidation()) {
                    obj.updateSelectionFromCoords(obj.selectedCell[0], obj.selectedCell[1], obj.selectedCell[2], obj.selectedCell[3]);
                } else {
                    var item = parseInt(obj.tbody.firstChild.getAttribute('data-y'));
                    if (obj.selectedCell[1] - item < 30) {
                        obj.loadUp();
                        obj.updateSelectionFromCoords(obj.selectedCell[0], obj.selectedCell[1], obj.selectedCell[2], obj.selectedCell[3]);
                    }
                }
            }
        } else if (obj.options.pagination > 0) {
            var pageNumber = obj.whichPage(obj.selectedCell[3]);
            if (pageNumber != obj.pageNumber) {
                obj.page(pageNumber);
            }
        }

        obj.updateScroll(1);
    }

    obj.up.visible = function(group, direction) {
        if (group == 0) {
            var x = parseInt(obj.selectedCell[0]);
            var y = parseInt(obj.selectedCell[1]);
        } else {
            var x = parseInt(obj.selectedCell[2]);
            var y = parseInt(obj.selectedCell[3]);
        }

        if (direction == 0) {
            for (var j = 0; j < y; j++) {
                if (obj.records[j][x].style.display != 'none' && obj.rows[j].style.display != 'none') {
                    y = j;
                    break;
                }
            }
        } else {
            y = obj.up.get(x, y);
        }

        if (group == 0) {
            obj.selectedCell[0] = x;
            obj.selectedCell[1] = y;
        } else {
            obj.selectedCell[2] = x;
            obj.selectedCell[3] = y;
        }
    }

    obj.up.get = function(x, y) {
        var x = parseInt(x);
        var y = parseInt(y);
        for (var j = (y - 1); j >= 0; j--) {
            if (obj.records[j][x].style.display != 'none' && obj.rows[j].style.display != 'none') {
                if (obj.records[j][x].getAttribute('data-merged')) {
                    if (obj.records[j][x] == obj.records[y][x]) {
                        continue;
                    }
                }
                y = j;
                break;
            }
        }

        return y;
    }

    obj.down = function(shiftKey, ctrlKey) {
        if (shiftKey) {
            if (obj.selectedCell[3] < obj.records.length - 1) {
                obj.down.visible(1, ctrlKey ? 0 : 1)
            }
        } else {
            if (obj.selectedCell[1] < obj.records.length - 1) {
                obj.down.visible(0, ctrlKey ? 0 : 1)
            }
            obj.selectedCell[2] = obj.selectedCell[0];
            obj.selectedCell[3] = obj.selectedCell[1];
        }

        obj.updateSelectionFromCoords(obj.selectedCell[0], obj.selectedCell[1], obj.selectedCell[2], obj.selectedCell[3]);

        // Change page
        if (obj.options.lazyLoading == true) {
            if ((obj.selectedCell[1] == obj.records.length - 1 || obj.selectedCell[3] == obj.records.length - 1)) {
                obj.loadPage(-1);
                obj.updateSelectionFromCoords(obj.selectedCell[0], obj.selectedCell[1], obj.selectedCell[2], obj.selectedCell[3]);
            } else {
                if (obj.loadValidation()) {
                    obj.updateSelectionFromCoords(obj.selectedCell[0], obj.selectedCell[1], obj.selectedCell[2], obj.selectedCell[3]);
                } else {
                    var item = parseInt(obj.tbody.lastChild.getAttribute('data-y'));
                    if (item - obj.selectedCell[3] < 30) {
                        obj.loadDown();
                        obj.updateSelectionFromCoords(obj.selectedCell[0], obj.selectedCell[1], obj.selectedCell[2], obj.selectedCell[3]);
                    }
                }
            }
        } else if (obj.options.pagination > 0) {
            var pageNumber = obj.whichPage(obj.selectedCell[3]);
            if (pageNumber != obj.pageNumber) {
                obj.page(pageNumber);
            }
        }

        obj.updateScroll(3);
    }

    obj.down.visible = function(group, direction) {
        if (group == 0) {
            var x = parseInt(obj.selectedCell[0]);
            var y = parseInt(obj.selectedCell[1]);
        } else {
            var x = parseInt(obj.selectedCell[2]);
            var y = parseInt(obj.selectedCell[3]);
        }

        if (direction == 0) {
            for (var j = obj.rows.length - 1; j > y; j--) {
                if (obj.records[j][x].style.display != 'none' && obj.rows[j].style.display != 'none') {
                    y = j;
                    break;
                }
            }
        } else {
            y = obj.down.get(x, y);
        }

        if (group == 0) {
            obj.selectedCell[0] = x;
            obj.selectedCell[1] = y;
        } else {
            obj.selectedCell[2] = x;
            obj.selectedCell[3] = y;
        }
    }

    obj.down.get = function(x, y) {
        var x = parseInt(x);
        var y = parseInt(y);
        for (var j = (y + 1); j < obj.rows.length; j++) {
            if (obj.records[j][x].style.display != 'none' && obj.rows[j].style.display != 'none') {
                if (obj.records[j][x].getAttribute('data-merged')) {
                    if (obj.records[j][x] == obj.records[y][x]) {
                        continue;
                    }
                }
                y = j;
                break;
            }
        }

        return y;
    }

    obj.right = function(shiftKey, ctrlKey) {
        if (shiftKey) {
            if (obj.selectedCell[2] < obj.headers.length - 1) {
                obj.right.visible(1, ctrlKey ? 0 : 1)
            }
        } else {
            if (obj.selectedCell[0] < obj.headers.length - 1) {
                obj.right.visible(0, ctrlKey ? 0 : 1)
            }
            obj.selectedCell[2] = obj.selectedCell[0];
            obj.selectedCell[3] = obj.selectedCell[1];
        }

        obj.updateSelectionFromCoords(obj.selectedCell[0], obj.selectedCell[1], obj.selectedCell[2], obj.selectedCell[3]);
        obj.updateScroll(2);
    }

    obj.right.visible = function(group, direction) {
        if (group == 0) {
            var x = parseInt(obj.selectedCell[0]);
            var y = parseInt(obj.selectedCell[1]);
        } else {
            var x = parseInt(obj.selectedCell[2]);
            var y = parseInt(obj.selectedCell[3]);
        }

        if (direction == 0) {
            for (var i = obj.headers.length - 1; i > x; i--) {
                if (obj.records[y][i].style.display != 'none') {
                    x = i;
                    break;
                }
            }
        } else {
            x = obj.right.get(x, y);
        }

        if (group == 0) {
            obj.selectedCell[0] = x;
            obj.selectedCell[1] = y;
        } else {
            obj.selectedCell[2] = x;
            obj.selectedCell[3] = y;
        }
    }

    obj.right.get = function(x, y) {
        var x = parseInt(x);
        var y = parseInt(y);

        for (var i = (x + 1); i < obj.headers.length; i++) {
            if (obj.records[y][i].style.display != 'none') {
                if (obj.records[y][i].getAttribute('data-merged')) {
                    if (obj.records[y][i] == obj.records[y][x]) {
                        continue;
                    }
                }
                x = i;
                break;
            }
        }

        return x;
    }

    obj.left = function(shiftKey, ctrlKey) {
        if (shiftKey) {
            if (obj.selectedCell[2] > 0) {
                obj.left.visible(1, ctrlKey ? 0 : 1)
            }
        } else {
            if (obj.selectedCell[0] > 0) {
                obj.left.visible(0, ctrlKey ? 0 : 1)
            }
            obj.selectedCell[2] = obj.selectedCell[0];
            obj.selectedCell[3] = obj.selectedCell[1];
        }

        obj.updateSelectionFromCoords(obj.selectedCell[0], obj.selectedCell[1], obj.selectedCell[2], obj.selectedCell[3]);
        obj.updateScroll(0);
    }

    obj.left.visible = function(group, direction) {
        if (group == 0) {
            var x = parseInt(obj.selectedCell[0]);
            var y = parseInt(obj.selectedCell[1]);
        } else {
            var x = parseInt(obj.selectedCell[2]);
            var y = parseInt(obj.selectedCell[3]);
        }

        if (direction == 0) {
            for (var i = 0; i < x; i++) {
                if (obj.records[y][i].style.display != 'none') {
                    x = i;
                    break;
                }
            }
        } else {
            x = obj.left.get(x, y);
        }

        if (group == 0) {
            obj.selectedCell[0] = x;
            obj.selectedCell[1] = y;
        } else {
            obj.selectedCell[2] = x;
            obj.selectedCell[3] = y;
        }
    }

    obj.left.get = function(x, y) {
        var x = parseInt(x);
        var y = parseInt(y);
        for (var i = (x - 1); i >= 0; i--) {
            if (obj.records[y][i].style.display != 'none') {
                if (obj.records[y][i].getAttribute('data-merged')) {
                    if (obj.records[y][i] == obj.records[y][x]) {
                        continue;
                    }
                }
                x = i;
                break;
            }
        }

        return x;
    }

    obj.first = function(shiftKey, ctrlKey) {
        if (shiftKey) {
            if (ctrlKey) {
                obj.selectedCell[3] = 0;
            } else {
                obj.left.visible(1, 0);
            }
        } else {
            if (ctrlKey) {
                obj.selectedCell[1] = 0;
            } else {
                obj.left.visible(0, 0);
            }
            obj.selectedCell[2] = obj.selectedCell[0];
            obj.selectedCell[3] = obj.selectedCell[1];
        }

        // Change page
        if (obj.options.lazyLoading == true && (obj.selectedCell[1] == 0 || obj.selectedCell[3] == 0)) {
            obj.loadPage(0);
        } else if (obj.options.pagination > 0) {
            var pageNumber = obj.whichPage(obj.selectedCell[3]);
            if (pageNumber != obj.pageNumber) {
                obj.page(pageNumber);
            }
        }

        obj.updateSelectionFromCoords(obj.selectedCell[0], obj.selectedCell[1], obj.selectedCell[2], obj.selectedCell[3]);
        obj.updateScroll(1);
    }

    obj.last = function(shiftKey, ctrlKey) {
        if (shiftKey) {
            if (ctrlKey) {
                obj.selectedCell[3] = obj.records.length - 1;
            } else {
                obj.right.visible(1, 0);
            }
        } else {
            if (ctrlKey) {
                obj.selectedCell[1] = obj.records.length - 1;
            } else {
                obj.right.visible(0, 0);
            }
            obj.selectedCell[2] = obj.selectedCell[0];
            obj.selectedCell[3] = obj.selectedCell[1];
        }

        // Change page
        if (obj.options.lazyLoading == true && (obj.selectedCell[1] == obj.records.length - 1 || obj.selectedCell[3] == obj.records.length - 1)) {
            obj.loadPage(-1);
        } else if (obj.options.pagination > 0) {
            var pageNumber = obj.whichPage(obj.selectedCell[3]);
            if (pageNumber != obj.pageNumber) {
                obj.page(pageNumber);
            }
        }

        obj.updateSelectionFromCoords(obj.selectedCell[0], obj.selectedCell[1], obj.selectedCell[2], obj.selectedCell[3]);
        obj.updateScroll(3);
    }

    obj.selectAll = function() {
        if (! obj.selectedCell) {
            obj.selectedCell = [];
        }

        obj.selectedCell[0] = 0;
        obj.selectedCell[1] = 0;
        obj.selectedCell[2] = obj.headers.length - 1;
        obj.selectedCell[3] = obj.records.length - 1;

        obj.updateSelectionFromCoords(obj.selectedCell[0], obj.selectedCell[1], obj.selectedCell[2], obj.selectedCell[3]);
    }

    /**
     * Go to a page in a lazyLoading
     */
    obj.loadPage = function(pageNumber) {
        // Search
        if (obj.options.search == true && obj.results) {
            var results = obj.results;
        } else {
            var results = obj.rows;
        }

        // Per page
        var quantityPerPage = 100;

        // pageNumber
        if (pageNumber == null || pageNumber == -1) {
            // Last page
            pageNumber = Math.ceil(results.length / quantityPerPage) - 1;
        }

        var startRow = (pageNumber * quantityPerPage);
        var finalRow = (pageNumber * quantityPerPage) + quantityPerPage;
        if (finalRow > results.length) {
            finalRow = results.length;
        }
        startRow = finalRow - 100;
        if (startRow < 0) {
            startRow = 0;
        }

        // Appeding items
        for (var j = startRow; j < finalRow; j++) {
            if (obj.options.search == true && obj.results) {
                obj.tbody.appendChild(obj.rows[results[j]]);
            } else {
                obj.tbody.appendChild(obj.rows[j]);
            }

            if (obj.tbody.children.length > quantityPerPage) {
                obj.tbody.removeChild(obj.tbody.firstChild);
            }
        }
    }

    obj.loadUp = function() {
        // Search
        if (obj.options.search == true && obj.results) {
            var results = obj.results;
        } else {
            var results = obj.rows;
        }
        var test = 0;
        if (results.length > 100) {
            // Get the first element in the page
            var item = parseInt(obj.tbody.firstChild.getAttribute('data-y'));
            if (obj.options.search == true && obj.results) {
                item = results.indexOf(item);
            }
            if (item > 0) {
                for (var j = 0; j < 30; j++) {
                    item = item - 1;
                    if (item > -1) {
                        if (obj.options.search == true && obj.results) {
                            obj.tbody.insertBefore(obj.rows[results[item]], obj.tbody.firstChild);
                        } else {
                            obj.tbody.insertBefore(obj.rows[item], obj.tbody.firstChild);
                        }
                        if (obj.tbody.children.length > 100) {
                            obj.tbody.removeChild(obj.tbody.lastChild);
                            test = 1;
                        }
                    }
                }
            }
        }
        return test;
    }

    obj.loadDown = function() {
        // Search
        if (obj.options.search == true && obj.results) {
            var results = obj.results;
        } else {
            var results = obj.rows;
        }
        var test = 0;
        if (results.length > 100) {
            // Get the last element in the page
            var item = parseInt(obj.tbody.lastChild.getAttribute('data-y'));
            if (obj.options.search == true && obj.results) {
                item = results.indexOf(item);
            }
            if (item < obj.rows.length - 1) {
                for (var j = 0; j <= 30; j++) {
                    if (item < results.length) {
                        if (obj.options.search == true && obj.results) {
                            obj.tbody.appendChild(obj.rows[results[item]]);
                        } else {
                            obj.tbody.appendChild(obj.rows[item]);
                        }
                        if (obj.tbody.children.length > 100) {
                            obj.tbody.removeChild(obj.tbody.firstChild);
                            test = 1;
                        }
                    }
                    item = item + 1;
                }
            }
        }

        return test;
    }

    obj.loadValidation = function() {
        if (obj.selectedCell) {
            var currentPage = parseInt(obj.tbody.firstChild.getAttribute('data-y')) / 100;
            var selectedPage = parseInt(obj.selectedCell[3] / 100);
            var totalPages = parseInt(obj.rows.length / 100);

            if (currentPage != selectedPage && selectedPage <= totalPages) {
                if (! Array.prototype.indexOf.call(obj.tbody.children, obj.rows[obj.selectedCell[3]])) {
                    obj.loadPage(selectedPage);
                    return true;
                }
            }
        }

        return false;
    }

    /**
     * Reset search
     */
    obj.resetSearch = function() {
        obj.searchInput.value = '';
        obj.search('');
        obj.results = null;
    }

    /**
     * Search
     */
    obj.search = function(query) {
        // Query
        if (query) {
            var query = query.toLowerCase();
        }

        // Reset any filter
        if (obj.options.filters) {
            obj.resetFilters();
        }

        // Reset selection
        obj.resetSelection();

        // Total of results
        obj.pageNumber = 0;
        obj.results = [];

        if (query) {
            // Search filter
            var search = function(item, query, index) {
                for (var i = 0; i < item.length; i++) {
                    if ((''+item[i]).toLowerCase().search(query) >= 0 ||
                        (''+obj.records[index][i].innerHTML).toLowerCase().search(query) >= 0) {
                        return true;
                    }
                }
                return false;
            }

            // Result
            var addToResult = function(k) {
                if (obj.results.indexOf(k) == -1) {
                    obj.results.push(k);
                }
            }

            // Filter
            var data = obj.options.data.filter(function(v, k) {
                if (search(v, query, k)) {
                    // Merged rows found
                    var rows = obj.isRowMerged(k);
                    if (rows.length) {
                        for (var i = 0; i < rows.length; i++) {
                            var row = jexcel.getIdFromColumnName(rows[i], true);
                            for (var j = 0; j < obj.options.mergeCells[rows[i]][1]; j++) {
                                addToResult(row[1]+j);
                            }
                        }
                    } else {
                        // Normal row found
                        addToResult(k);
                    }
                    return true;
                } else {
                    return false;
                }
            });
        } else {
            obj.results = null;
        }

        return obj.updateResult();
    }

    obj.updateResult = function() {
        var total = 0;
        var index = 0;

        // Page 1
        if (obj.options.lazyLoading == true) {
            total = 100;
        } else if (obj.options.pagination > 0) {
            total = obj.options.pagination;
        } else {
            if (obj.results) {
                total = obj.results.length;
            } else {
                total = obj.rows.length;
            }
        }

        // Reset current nodes
        while (obj.tbody.firstChild) {
            obj.tbody.removeChild(obj.tbody.firstChild);
        }

        // Hide all records from the table
        for (var j = 0; j < obj.rows.length; j++) {
            if (! obj.results || obj.results.indexOf(j) > -1) {
                if (index < total) {
                    obj.tbody.appendChild(obj.rows[j]);
                    index++;
                }
                obj.rows[j].style.display = '';
            } else {
                obj.rows[j].style.display = 'none';
            }
        }

        // Update pagination
        if (obj.options.pagination > 0) {
            obj.updatePagination();
        }

        obj.updateCornerPosition();

        return total;
    }

    /**
     * Which page the cell is
     */
    obj.whichPage = function(cell) {
        // Search
        if (obj.options.search == true && obj.results) {
            cell = obj.results.indexOf(cell);
        }

        return (Math.ceil((parseInt(cell) + 1) / parseInt(obj.options.pagination))) - 1;
    }

    /**
     * Go to page
     */
    obj.page = function(pageNumber) {
        var oldPage = obj.pageNumber;

        // Search
        if (obj.options.search == true && obj.results) {
            var results = obj.results;
        } else {
            var results = obj.rows;
        }

        // Per page
        var quantityPerPage = parseInt(obj.options.pagination);

        // pageNumber
        if (pageNumber == null || pageNumber == -1) {
            // Last page
            pageNumber = Math.ceil(results.length / quantityPerPage) - 1;
        }

        // Page number
        obj.pageNumber = pageNumber;

        var startRow = (pageNumber * quantityPerPage);
        var finalRow = (pageNumber * quantityPerPage) + quantityPerPage;
        if (finalRow > results.length) {
            finalRow = results.length;
        }
        if (startRow < 0) {
            startRow = 0;
        }

        // Reset container
        while (obj.tbody.firstChild) {
            obj.tbody.removeChild(obj.tbody.firstChild);
        }

        // Appeding items
        for (var j = startRow; j < finalRow; j++) {
            if (obj.options.search == true && obj.results) {
                obj.tbody.appendChild(obj.rows[results[j]]);
            } else {
                obj.tbody.appendChild(obj.rows[j]);
            }
        }

        if (obj.options.pagination > 0) {
            obj.updatePagination();
        }

        // Update corner position
        obj.updateCornerPosition();

        // Events
        obj.dispatch('onchangepage', el, pageNumber, oldPage);
    }

    /**
     * Update the pagination
     */
    obj.updatePagination = function() {
        // Reset container
        obj.pagination.children[0].innerHTML = '';
        obj.pagination.children[1].innerHTML = '';

        // Start pagination
        if (obj.options.pagination) {
            // Searchable
            if (obj.options.search == true && obj.results) {
                var results = obj.results.length;
            } else {
                var results = obj.rows.length;
            }

            if (! results) {
                // No records found
                obj.pagination.children[0].innerHTML = obj.options.text.noRecordsFound;
            } else {
                // Pagination container
                var quantyOfPages = Math.ceil(results / obj.options.pagination);

                if (obj.pageNumber < 6) {
                    var startNumber = 1;
                    var finalNumber = quantyOfPages < 10 ? quantyOfPages : 10;
                } else if (quantyOfPages - obj.pageNumber < 5) {
                    var startNumber = quantyOfPages - 9;
                    var finalNumber = quantyOfPages;
                    if (startNumber < 1) {
                        startNumber = 1;
                    }
                } else {
                    var startNumber = obj.pageNumber - 4;
                    var finalNumber = obj.pageNumber + 5;
                }

                // First
                if (startNumber > 1) {
                    var paginationItem = document.createElement('div');
                    paginationItem.className = 'jexcel_page';
                    paginationItem.innerHTML = '<';
                    paginationItem.title = 1;
                    obj.pagination.children[1].appendChild(paginationItem);
                }

                // Get page links
                for (var i = startNumber; i <= finalNumber; i++) {
                    var paginationItem = document.createElement('div');
                    paginationItem.className = 'jexcel_page';
                    paginationItem.innerHTML = i;
                    obj.pagination.children[1].appendChild(paginationItem);

                    if (obj.pageNumber == (i-1)) {
                        paginationItem.classList.add('jexcel_page_selected');
                    }
                }

                // Last
                if (finalNumber < quantyOfPages) {
                    var paginationItem = document.createElement('div');
                    paginationItem.className = 'jexcel_page';
                    paginationItem.innerHTML = '>';
                    paginationItem.title = quantyOfPages;
                    obj.pagination.children[1].appendChild(paginationItem);
                }

                // Text
                var format = function(format) {
                    var args = Array.prototype.slice.call(arguments, 1);
                    return format.replace(/{(\d+)}/g, function(match, number) {
                      return typeof args[number] != 'undefined'
                        ? args[number]
                        : match
                      ;
                    });
                };

                obj.pagination.children[0].innerHTML = format(obj.options.text.showingPage, obj.pageNumber + 1, quantyOfPages)
            }
        }
    }

    /**
     * Download CSV table
     * 
     * @return null
     */
    obj.download = function(includeHeaders) {
        if (obj.options.allowExport == false) {
            console.error('Export not allowed');
        } else {
            // Data
            var data = '';
            if (includeHeaders == true || obj.options.includeHeadersOnDownload == true) {
                data += obj.getHeaders().replace(/\s+/gm,' ');
                data += "\r\n";
            }

            // Get data
            data += obj.copy(false, obj.options.csvDelimiter, true);

            // Download element
            var blob = new Blob(["\uFEFF"+data], {type: 'text/csv;charset=utf-8;'});

            // IE Compatibility
            if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                window.navigator.msSaveOrOpenBlob(blob, obj.options.csvFileName + '.csv');
            } else {
                // Download element
                var pom = document.createElement('a');
                var url = URL.createObjectURL(blob);
                pom.href = url;
                pom.setAttribute('download', obj.options.csvFileName + '.csv');
                document.body.appendChild(pom);
                pom.click();
                pom.parentNode.removeChild(pom);
            }
        }
    }

    /**
     * Initializes a new history record for undo/redo
     * 
     * @return null
     */
    obj.setHistory = function(changes) {
        if (obj.ignoreHistory != true) {
            // Increment and get the current history index
            var index = ++obj.historyIndex;

            // Slice the array to discard undone changes
            obj.history = (obj.history = obj.history.slice(0, index + 1));

            // Keep history
            obj.history[index] = changes;
        }
    }

    /**
     * Copy method
     * 
     * @param bool highlighted - Get only highlighted cells
     * @param delimiter - \t default to keep compatibility with excel
     * @return string value
     */
    obj.copy = function(highlighted, delimiter, returnData) {
        if (! delimiter) {
            delimiter = "\t";
        }

        // Controls
        var header = [];
        var col = [];
        var colLabel = [];
        var row = [];
        var rowLabel = [];
        var x = obj.options.data[0].length
        var y = obj.options.data.length
        var tmp = '';
        var copyHeader = obj.options.includeHeadersOnCopy;

        // Reset container
        obj.style = [];

        // Go through the columns to get the data
        for (var j = 0; j < y; j++) {
            col = [];
            colLabel = [];

            for (var i = 0; i < x; i++) {
                // If cell is highlighted
                if (! highlighted || obj.records[j][i].classList.contains('highlight')) {
                    if (copyHeader == true) {
                        header.push(obj.headers[i].innerText);
                    }
                    // Values
                    var value = obj.options.data[j][i];
                    if (value.match && (value.match(/,/g) || value.match(/\n/) || value.match(/\"/))) {
                        value = value.replace(new RegExp('"', 'g'), '""');
                        value = '"' + value + '"';
                    }
                    col.push(value);

                    // Labels
                    if (obj.options.columns[i].type == 'checkbox' || obj.options.columns[i].type == 'radio') {
                        var label = value;
                    } else {
                        if (obj.options.stripHTMLOnCopy == true) {
                            var label = obj.records[j][i].innerText;
                        } else {
                            var label = obj.records[j][i].innerHTML;
                        }
                        if (label.match && (label.match(/,/g) || label.match(/\n/) || label.match(/\"/))) {
                            // Scape double quotes
                            label = label.replace(new RegExp('"', 'g'), '""');
                            label = '"' + label + '"';
                        }
                    }
                    colLabel.push(label);

                    // Get style
                    tmp = obj.records[j][i].getAttribute('style');
                    tmp = tmp.replace('display: none;', '');
                    obj.style.push(tmp ? tmp : '');
                }
            }

            if (col.length) {
                if (copyHeader) {
                    row.push(header.join(delimiter));
                }
                row.push(col.join(delimiter));
            }
            if (colLabel.length) {
                if (copyHeader) {
                    rowLabel.push(header.join(delimiter));
                }
                rowLabel.push(colLabel.join(delimiter));
            }
            copyHeader = false;
        }

        // Final string
        var str = row.join("\r\n");
        var strLabel = rowLabel.join("\r\n");

        // Create a hidden textarea to copy the values
        if (! returnData) {
            if (obj.options.copyCompatibility == true) {
                obj.textarea.value = strLabel;
            } else {
                obj.textarea.value = str;
            }
            obj.textarea.select();
            document.execCommand("copy");
        }

        // Keep data
        if (obj.options.copyCompatibility == true) {
            obj.data = strLabel;
        } else {
            obj.data = str;
        }
        // Keep non visible information
        obj.hashString = obj.hash(obj.data);

        // Any exiting border should go
        obj.removeCopyingSelection();

        // Border
        if (obj.highlighted) {
            for (var i = 0; i < obj.highlighted.length; i++) {
                obj.highlighted[i].classList.add('copying');
                if (obj.highlighted[i].classList.contains('highlight-left')) {
                    obj.highlighted[i].classList.add('copying-left');
                }
                if (obj.highlighted[i].classList.contains('highlight-right')) {
                    obj.highlighted[i].classList.add('copying-right');
                }
                if (obj.highlighted[i].classList.contains('highlight-top')) {
                    obj.highlighted[i].classList.add('copying-top');
                }
                if (obj.highlighted[i].classList.contains('highlight-bottom')) {
                    obj.highlighted[i].classList.add('copying-bottom');
                }
            }
        }

        // Paste event
        obj.dispatch('oncopy', el, obj.options.copyCompatibility == true ? rowLabel : row, obj.hashString);

        return obj.data;
    }

    /**
     * jExcel paste method
     * 
     * @param integer row number
     * @return string value
     */
    obj.paste = function(x, y, data) {
        // Paste filter
        var ret = obj.dispatch('onbeforepaste', el, data, x, y);

        if (ret === false) {
            return false;
        } else if (ret) {
            var data = ret;
        }

        // Controls
        var hash = obj.hash(data);
        var style = (hash == obj.hashString) ? obj.style : null;

        // Depending on the behavior
        if (obj.options.copyCompatibility == true && hash == obj.hashString) {
            var data = obj.data;
        }

        // Split new line
        var data = obj.parseCSV(data, "\t");

        if (x != null && y != null && data) {
            // Records
            var i = 0;
            var j = 0;
            var records = [];
            var newStyle = {};
            var oldStyle = {};
            var styleIndex = 0;

            // Index
            var colIndex = parseInt(x);
            var rowIndex = parseInt(y);
            var row = null;

            // Go through the columns to get the data
            while (row = data[j]) {
                i = 0;
                colIndex = parseInt(x);

                while (row[i] != null) {
                    // Update and keep history
                    var record = obj.updateCell(colIndex, rowIndex, row[i]);
                    // Keep history
                    records.push(record);
                    // Update all formulas in the chain
                    obj.updateFormulaChain(colIndex, rowIndex, records);
                    // Style
                    if (style && style[styleIndex]) {
                        var columnName = jexcel.getColumnNameFromId([colIndex, rowIndex]);
                        newStyle[columnName] = style[styleIndex];
                        oldStyle[columnName] = obj.getStyle(columnName);
                        obj.records[rowIndex][colIndex].setAttribute('style', style[styleIndex]);
                        styleIndex++
                    }
                    i++;
                    if (row[i] != null) {
                        if (colIndex >= obj.headers.length - 1) {
                            obj.insertColumn();
                        }
                        colIndex = obj.right.get(colIndex, rowIndex);
                    }
                }

                j++;
                if (data[j]) {
                    if (rowIndex >= obj.rows.length-1) {
                        obj.insertRow();
                    }
                    rowIndex = obj.down.get(x, rowIndex);
                }
            }

            // Select the new cells
            obj.updateSelectionFromCoords(x, y, colIndex, rowIndex);

            // Update history
            obj.setHistory({
                action:'setValue',
                records:records,
                selection:obj.selectedCell,
                newStyle:newStyle,
                oldStyle:oldStyle,
            });

            // Update table
            obj.updateTable();

            // Paste event
            obj.dispatch('onpaste', el, data);

            // On after changes
            obj.onafterchanges(el, records);
        }

        obj.removeCopyingSelection();
    }

    /**
     * Remove copying border
     */
    obj.removeCopyingSelection = function() {
        var copying = document.querySelectorAll('.jexcel .copying');
        for (var i = 0; i < copying.length; i++) {
            copying[i].classList.remove('copying');
            copying[i].classList.remove('copying-left');
            copying[i].classList.remove('copying-right');
            copying[i].classList.remove('copying-top');
            copying[i].classList.remove('copying-bottom');
        }
    }

    /**
     * Process row
     */
    obj.historyProcessRow = function(type, historyRecord) {
        var rowIndex = (! historyRecord.insertBefore) ? historyRecord.rowNumber + 1 : historyRecord.rowNumber;

        if (obj.options.search == true) {
            if (obj.results && obj.results.length != obj.rows.length) {
                obj.resetSearch();
            }
        }

        // Remove row
        if (type == 1) {
            var numOfRows = historyRecord.numOfRows;
            // Remove nodes
            for (var j = rowIndex; j < (numOfRows + rowIndex); j++) {
                obj.rows[j].parentNode.removeChild(obj.rows[j]);
            }
            // Remove references
            obj.records.splice(rowIndex, numOfRows);
            obj.options.data.splice(rowIndex, numOfRows);
            obj.rows.splice(rowIndex, numOfRows);

            obj.conditionalSelectionUpdate(1, rowIndex, (numOfRows + rowIndex) - 1);
        } else {
            // Insert data
            obj.records = jexcel.injectArray(obj.records, rowIndex, historyRecord.rowRecords);
            obj.options.data = jexcel.injectArray(obj.options.data, rowIndex, historyRecord.rowData);
            obj.rows = jexcel.injectArray(obj.rows, rowIndex, historyRecord.rowNode);
            // Insert nodes
            var index = 0
            for (var j = rowIndex; j < (historyRecord.numOfRows + rowIndex); j++) {
                obj.tbody.insertBefore(historyRecord.rowNode[index], obj.tbody.children[j]);
                index++;
            }
        }

        // Respect pagination
        if (obj.options.pagination > 0) {
            obj.page(obj.pageNumber);
        }

        obj.updateTableReferences();
    }

    /**
     * Process column
     */
    obj.historyProcessColumn = function(type, historyRecord) {
        var columnIndex = (! historyRecord.insertBefore) ? historyRecord.columnNumber + 1 : historyRecord.columnNumber;

        // Remove column
        if (type == 1) {
            var numOfColumns = historyRecord.numOfColumns;

            obj.options.columns.splice(columnIndex, numOfColumns);
            for (var i = columnIndex; i < (numOfColumns + columnIndex); i++) {
                obj.headers[i].parentNode.removeChild(obj.headers[i]);
                obj.colgroup[i].parentNode.removeChild(obj.colgroup[i]);
            }
            obj.headers.splice(columnIndex, numOfColumns);
            obj.colgroup.splice(columnIndex, numOfColumns);
            for (var j = 0; j < historyRecord.data.length; j++) {
                for (var i = columnIndex; i < (numOfColumns + columnIndex); i++) {
                    obj.records[j][i].parentNode.removeChild(obj.records[j][i]);
                }
                obj.records[j].splice(columnIndex, numOfColumns);
                obj.options.data[j].splice(columnIndex, numOfColumns);
            }
            // Process footers
            if (obj.options.footers) {
                for (var j = 0; j < obj.options.footers.length; j++) {
                    obj.options.footers[j].splice(columnIndex, numOfColumns);
                }
            }
        } else {
            // Insert data
            obj.options.columns = jexcel.injectArray(obj.options.columns, columnIndex, historyRecord.columns);
            obj.headers = jexcel.injectArray(obj.headers, columnIndex, historyRecord.headers);
            obj.colgroup = jexcel.injectArray(obj.colgroup, columnIndex, historyRecord.colgroup);

            var index = 0
            for (var i = columnIndex; i < (historyRecord.numOfColumns + columnIndex); i++) {
                obj.headerContainer.insertBefore(historyRecord.headers[index], obj.headerContainer.children[i+1]);
                obj.colgroupContainer.insertBefore(historyRecord.colgroup[index], obj.colgroupContainer.children[i+1]);
                index++;
            }

            for (var j = 0; j < historyRecord.data.length; j++) {
                obj.options.data[j] = jexcel.injectArray(obj.options.data[j], columnIndex, historyRecord.data[j]);
                obj.records[j] = jexcel.injectArray(obj.records[j], columnIndex, historyRecord.records[j]);
                var index = 0
                for (var i = columnIndex; i < (historyRecord.numOfColumns + columnIndex); i++) {
                    obj.rows[j].insertBefore(historyRecord.records[j][index], obj.rows[j].children[i+1]);
                    index++;
                }
            }
            // Process footers
            if (obj.options.footers) {
                for (var j = 0; j < obj.options.footers.length; j++) {
                    obj.options.footers[j] = jexcel.injectArray(obj.options.footers[j], columnIndex, historyRecord.footers[j]);
                }
            }
        }

        // Adjust nested headers
        if (obj.options.nestedHeaders && obj.options.nestedHeaders.length > 0) {
            // Flexible way to handle nestedheaders
            if (obj.options.nestedHeaders[0] && obj.options.nestedHeaders[0][0]) {
                for (var j = 0; j < obj.options.nestedHeaders.length; j++) {
                    if (type == 1) {
                        var colspan = parseInt(obj.options.nestedHeaders[j][obj.options.nestedHeaders[j].length-1].colspan) - historyRecord.numOfColumns;
                    } else {
                        var colspan = parseInt(obj.options.nestedHeaders[j][obj.options.nestedHeaders[j].length-1].colspan) + historyRecord.numOfColumns;
                    }
                    obj.options.nestedHeaders[j][obj.options.nestedHeaders[j].length-1].colspan = colspan;
                    obj.thead.children[j].children[obj.thead.children[j].children.length-1].setAttribute('colspan', colspan);
                }
            } else {
                if (type == 1) {
                    var colspan = parseInt(obj.options.nestedHeaders[0].colspan) - historyRecord.numOfColumns;
                } else {
                    var colspan = parseInt(obj.options.nestedHeaders[0].colspan) + historyRecord.numOfColumns;
                }
                obj.options.nestedHeaders[0].colspan = colspan;
                obj.thead.children[0].children[obj.thead.children[0].children.length-1].setAttribute('colspan', colspan);
            }
        }

        obj.updateTableReferences();
    }

    /**
     * Undo last action
     */
    obj.undo = function() {
        // Ignore events and history
        var ignoreEvents = obj.ignoreEvents ? true : false;
        var ignoreHistory = obj.ignoreHistory ? true : false;

        obj.ignoreEvents = true;
        obj.ignoreHistory = true;

        // Records
        var records = [];

        // Update cells
        if (obj.historyIndex >= 0) {
            // History
            var historyRecord = obj.history[obj.historyIndex--];

            if (historyRecord.action == 'insertRow') {
                obj.historyProcessRow(1, historyRecord);
            } else if (historyRecord.action == 'deleteRow') {
                obj.historyProcessRow(0, historyRecord);
            } else if (historyRecord.action == 'insertColumn') {
                obj.historyProcessColumn(1, historyRecord);
            } else if (historyRecord.action == 'deleteColumn') {
                obj.historyProcessColumn(0, historyRecord);
            } else if (historyRecord.action == 'moveRow') {
                obj.moveRow(historyRecord.newValue, historyRecord.oldValue);
            } else if (historyRecord.action == 'moveColumn') {
                obj.moveColumn(historyRecord.newValue, historyRecord.oldValue);
            } else if (historyRecord.action == 'setMerge') {
                obj.removeMerge(historyRecord.column, historyRecord.data);
            } else if (historyRecord.action == 'setStyle') {
                obj.setStyle(historyRecord.oldValue, null, null, 1);
            } else if (historyRecord.action == 'setWidth') {
                obj.setWidth(historyRecord.column, historyRecord.oldValue);
            } else if (historyRecord.action == 'setHeight') {
                obj.setHeight(historyRecord.row, historyRecord.oldValue);
            } else if (historyRecord.action == 'setHeader') {
                obj.setHeader(historyRecord.column, historyRecord.oldValue);
            } else if (historyRecord.action == 'setComments') {
                obj.setComments(historyRecord.column, historyRecord.oldValue[0], historyRecord.oldValue[1]);
            } else if (historyRecord.action == 'orderBy') {
                var rows = [];
                for (var j = 0; j < historyRecord.rows.length; j++) {
                    rows[historyRecord.rows[j]] = j;
                }
                obj.updateOrderArrow(historyRecord.column, historyRecord.order ? 0 : 1);
                obj.updateOrder(rows);
            } else if (historyRecord.action == 'setValue') {
                // Redo for changes in cells
                for (var i = 0; i < historyRecord.records.length; i++) {
                    records.push({
                        x: historyRecord.records[i].x,
                        y: historyRecord.records[i].y,
                        newValue: historyRecord.records[i].oldValue,
                    });

                    if (historyRecord.oldStyle) {
                        obj.resetStyle(historyRecord.oldStyle);
                    }
                }
                // Update records
                obj.setValue(records);

                // Update selection
                if (historyRecord.selection) {
                    obj.updateSelectionFromCoords(historyRecord.selection[0], historyRecord.selection[1], historyRecord.selection[2], historyRecord.selection[3]);
                }
            }
        }
        obj.ignoreEvents = ignoreEvents;
        obj.ignoreHistory = ignoreHistory;

        // Events
        obj.dispatch('onundo', el, historyRecord);
    }

    /**
     * Redo previously undone action
     */
    obj.redo = function() {
        // Ignore events and history
        var ignoreEvents = obj.ignoreEvents ? true : false;
        var ignoreHistory = obj.ignoreHistory ? true : false;

        obj.ignoreEvents = true;
        obj.ignoreHistory = true;

        // Records
        var records = [];

        // Update cells
        if (obj.historyIndex < obj.history.length - 1) {
            // History
            var historyRecord = obj.history[++obj.historyIndex];

            if (historyRecord.action == 'insertRow') {
                obj.historyProcessRow(0, historyRecord);
            } else if (historyRecord.action == 'deleteRow') {
                obj.historyProcessRow(1, historyRecord);
            } else if (historyRecord.action == 'insertColumn') {
                obj.historyProcessColumn(0, historyRecord);
            } else if (historyRecord.action == 'deleteColumn') {
                obj.historyProcessColumn(1, historyRecord);
            } else if (historyRecord.action == 'moveRow') {
                obj.moveRow(historyRecord.oldValue, historyRecord.newValue);
            } else if (historyRecord.action == 'moveColumn') {
                obj.moveColumn(historyRecord.oldValue, historyRecord.newValue);
            } else if (historyRecord.action == 'setMerge') {
                obj.setMerge(historyRecord.column, historyRecord.colspan, historyRecord.rowspan, 1);
            } else if (historyRecord.action == 'setStyle') {
                obj.setStyle(historyRecord.newValue, null, null, 1);
            } else if (historyRecord.action == 'setWidth') {
                obj.setWidth(historyRecord.column, historyRecord.newValue);
            } else if (historyRecord.action == 'setHeight') {
                obj.setHeight(historyRecord.row, historyRecord.newValue);
            } else if (historyRecord.action == 'setHeader') {
                obj.setHeader(historyRecord.column, historyRecord.newValue);
            } else if (historyRecord.action == 'setComments') {
                obj.setComments(historyRecord.column, historyRecord.newValue[0], historyRecord.newValue[1]);
            } else if (historyRecord.action == 'orderBy') {
                obj.updateOrderArrow(historyRecord.column, historyRecord.order);
                obj.updateOrder(historyRecord.rows);
            } else if (historyRecord.action == 'setValue') {
                obj.setValue(historyRecord.records);
                // Redo for changes in cells
                for (var i = 0; i < historyRecord.records.length; i++) {
                    if (historyRecord.oldStyle) {
                        obj.resetStyle(historyRecord.newStyle);
                    }
                }
                // Update selection
                if (historyRecord.selection) {
                    obj.updateSelectionFromCoords(historyRecord.selection[0], historyRecord.selection[1], historyRecord.selection[2], historyRecord.selection[3]);
                }
            }
        }
        obj.ignoreEvents = ignoreEvents;
        obj.ignoreHistory = ignoreHistory;

        // Events
        obj.dispatch('onredo', el, historyRecord);
    }

    /**
     * Get dropdown value from key
     */
    obj.getDropDownValue = function(column, key) {
        var value = [];

        if (obj.options.columns[column] && obj.options.columns[column].source) {
            // Create array from source
            var combo = [];
            var source = obj.options.columns[column].source;

            for (var i = 0; i < source.length; i++) {
                if (typeof(source[i]) == 'object') {
                    combo[source[i].id] = source[i].name;
                } else {
                    combo[source[i]] = source[i];
                }
            }

            // Guarantee single multiple compatibility
            var keys = Array.isArray(key) ? key : ('' + key).split(';');

            for (var i = 0; i < keys.length; i++) {
                if (typeof(keys[i]) === 'object') {
                    value.push(combo[keys[i].id]);
                } else {
                    if (combo[keys[i]]) {
                        value.push(combo[keys[i]]);
                    }
                }
            }
        } else {
            console.error('Invalid column');
        }

        return (value.length > 0) ? value.join('; ') : '';
    }

    /**
     * From starckoverflow contributions
     */
    obj.parseCSV = function(str, delimiter) {
        // Remove last line break
        str = str.replace(/\r?\n$|\r$|\n$/g, "");
        // Last caracter is the delimiter
        if (str.charCodeAt(str.length-1) == 9) {
            str += "\0";
        }
        // user-supplied delimeter or default comma
        delimiter = (delimiter || ",");

        var arr = [];
        var quote = false;  // true means we're inside a quoted field
        // iterate over each character, keep track of current row and column (of the returned array)
        for (var row = 0, col = 0, c = 0; c < str.length; c++) {
            var cc = str[c], nc = str[c+1];
            arr[row] = arr[row] || [];
            arr[row][col] = arr[row][col] || '';

            // If the current character is a quotation mark, and we're inside a quoted field, and the next character is also a quotation mark, add a quotation mark to the current column and skip the next character
            if (cc == '"' && quote && nc == '"') { arr[row][col] += cc; ++c; continue; }  

            // If it's just one quotation mark, begin/end quoted field
            if (cc == '"') { quote = !quote; continue; }

            // If it's a comma and we're not in a quoted field, move on to the next column
            if (cc == delimiter && !quote) { ++col; continue; }

            // If it's a newline (CRLF) and we're not in a quoted field, skip the next character and move on to the next row and move to column 0 of that new row
            if (cc == '\r' && nc == '\n' && !quote) { ++row; col = 0; ++c; continue; }

            // If it's a newline (LF or CR) and we're not in a quoted field, move on to the next row and move to column 0 of that new row
            if (cc == '\n' && !quote) { ++row; col = 0; continue; }
            if (cc == '\r' && !quote) { ++row; col = 0; continue; }

            // Otherwise, append the current character to the current column
            arr[row][col] += cc;
        }
        return arr;
    }

    obj.hash = function(str) {
        var hash = 0, i, chr;

        if (str.length === 0) {
            return hash;
        } else {
            for (i = 0; i < str.length; i++) {
              chr = str.charCodeAt(i);
              hash = ((hash << 5) - hash) + chr;
              hash |= 0;
            }
        }
        return hash;
    }

    obj.onafterchanges = function(el, records) {
        // Events
        obj.dispatch('onafterchanges', el, records);
    }

    obj.destroy = function() {
        jexcel.destroy(el);
    }

    /**
     * Initialization method
     */
    obj.init = function() {
        jexcel.current = obj;

        // Build handlers
        if (typeof(jexcel.build) == 'function') {
            if (obj.options.root) {
                jexcel.build(obj.options.root);
            } else {
                jexcel.build(document);
                jexcel.build = null;
            }
        }

        // Event
        el.setAttribute('tabindex', 1);
        el.addEventListener('focus', function(e) {
            if (jexcel.current && ! obj.selectedCell) {
                obj.updateSelectionFromCoords(0,0,0,0);
                obj.left();
            }
        });

        // Load the table data based on an CSV file
        if (obj.options.csv) {
            // Loading
            if (obj.options.loadingSpin == true) {
                jSuites.loading.show();
            }

            // Load CSV file
            jSuites.ajax({
                url: obj.options.csv,
                method: obj.options.method,
                data: obj.options.requestVariables,
                dataType: 'text',
                success: function(result) {
                    // Convert data
                    var newData = obj.parseCSV(result, obj.options.csvDelimiter)

                    // Headers
                    if (obj.options.csvHeaders == true && newData.length > 0) {
                        var headers = newData.shift();
                        for(var i = 0; i < headers.length; i++) {
                            if (! obj.options.columns[i]) {
                                obj.options.columns[i] = { type:'text', align:obj.options.defaultColAlign, width:obj.options.defaultColWidth };
                            }
                            // Precedence over pre-configurated titles
                            if (typeof obj.options.columns[i].title === 'undefined') {
                              obj.options.columns[i].title = headers[i];
                            }
                        }
                    }
                    // Data
                    obj.options.data = newData;
                    // Prepare table
                    obj.prepareTable();
                    // Hide spin
                    if (obj.options.loadingSpin == true) {
                        jSuites.loading.hide();
                    }
                }
            });
        } else if (obj.options.url) {
            // Loading
            if (obj.options.loadingSpin == true) {
                jSuites.loading.show();
            }

            jSuites.ajax({
                url: obj.options.url,
                    method: obj.options.method,
                    data: obj.options.requestVariables,
                dataType: 'json',
                success: function(result) {
                    // Data
                    obj.options.data = (result.data) ? result.data : result;
                    // Prepare table
                    obj.prepareTable();
                    // Hide spin
                    if (obj.options.loadingSpin == true) {
                        jSuites.loading.hide();
                    }
                }
            });
        } else {
            // Prepare table
            obj.prepareTable();
        }
    }

    // Context menu
    if (options && options.contextMenu != null) {
        obj.options.contextMenu = options.contextMenu;
    } else {
        obj.options.contextMenu = function(el, x, y, e) {
            var items = [];

            if (y == null) {
                // Insert a new column
                if (obj.options.allowInsertColumn == true) {
                    items.push({
                        title:obj.options.text.insertANewColumnBefore,
                        onclick:function() {
                            obj.insertColumn(1, parseInt(x), 1);
                        }
                    });
                }

                if (obj.options.allowInsertColumn == true) {
                    items.push({
                        title:obj.options.text.insertANewColumnAfter,
                        onclick:function() {
                            obj.insertColumn(1, parseInt(x), 0);
                        }
                    });
                }

                // Delete a column
                if (obj.options.allowDeleteColumn == true) {
                    items.push({
                        title:obj.options.text.deleteSelectedColumns,
                        onclick:function() {
                            obj.deleteColumn(obj.getSelectedColumns().length ? undefined : parseInt(x));
                        }
                    });
                }

                // Rename column
                if (obj.options.allowRenameColumn == true) {
                    items.push({
                        title:obj.options.text.renameThisColumn,
                        onclick:function() {
                            obj.setHeader(x);
                        }
                    });
                }

                // Sorting
                if (obj.options.columnSorting == true) {
                    // Line
                    items.push({ type:'line' });

                    items.push({
                        title:obj.options.text.orderAscending,
                        onclick:function() {
                            obj.orderBy(x, 0);
                        }
                    });
                    items.push({
                        title:obj.options.text.orderDescending,
                        onclick:function() {
                            obj.orderBy(x, 1);
                        }
                    });
                }
            } else {
                // Insert new row
                if (obj.options.allowInsertRow == true) {
                    items.push({
                        title:obj.options.text.insertANewRowBefore,
                        onclick:function() {
                            obj.insertRow(1, parseInt(y), 1);
                        }
                    });

                    items.push({
                        title:obj.options.text.insertANewRowAfter,
                        onclick:function() {
                            obj.insertRow(1, parseInt(y));
                        }
                    });
                }

                if (obj.options.allowDeleteRow == true) {
                    items.push({
                        title:obj.options.text.deleteSelectedRows,
                        onclick:function() {
                            obj.deleteRow(obj.getSelectedRows().length ? undefined : parseInt(y));
                        }
                    });
                }

                if (x) {
                    if (obj.options.allowComments == true) {
                        items.push({ type:'line' });

                        var title = obj.records[y][x].getAttribute('title') || '';

                        items.push({
                            title: title ? obj.options.text.editComments : obj.options.text.addComments,
                            onclick:function() {
                                var comment = prompt(obj.options.text.comments, title);
                                if (comment) {
                                    obj.setComments([ x, y ], comment);
                                }
                            }
                        });

                        if (title) {
                            items.push({
                                title:obj.options.text.clearComments,
                                onclick:function() {
                                    obj.setComments([ x, y ], '');
                                }
                            });
                        }
                    }
                }
            }

            // Line
            items.push({ type:'line' });

            // Copy
            items.push({
                title:obj.options.text.copy,
                shortcut:'Ctrl + C',
                onclick:function() {
                    obj.copy(true);
                }
            });

            // Paste
            if (navigator && navigator.clipboard) {
                items.push({
                    title:obj.options.text.paste,
                    shortcut:'Ctrl + V',
                    onclick:function() {
                        if (obj.selectedCell) {
                            navigator.clipboard.readText().then(function(text) {
                                if (text) {
                                    jexcel.current.paste(obj.selectedCell[0], obj.selectedCell[1], text);
                                }
                            });
                        }
                    }
                });
            }

            // Save
            if (obj.options.allowExport) {
                items.push({
                    title: obj.options.text.saveAs,
                    shortcut: 'Ctrl + S',
                    onclick: function () {
                        obj.download();
                    }
                });
            }

            // About
            if (obj.options.about) {
                items.push({
                    title:obj.options.text.about,
                    onclick:function() {
                        alert(obj.options.about);
                    }
                });
            }

            return items;
        }
    }

    obj.scrollControls = function(e) {
        obj.wheelControls();

        if (obj.options.freezeColumns > 0 && obj.content.scrollLeft != scrollLeft) {
            obj.updateFreezePosition();
        }

        // Close editor
        if (obj.options.lazyLoading == true || obj.options.tableOverflow == true) {
            if (obj.edition && e.target.className.substr(0,9) != 'jdropdown') {
                obj.closeEditor(obj.edition[0], true);
            }
        }
    }

    obj.wheelControls = function(e) {
        if (obj.options.lazyLoading == true) {
            if (jexcel.timeControlLoading == null) {
                jexcel.timeControlLoading = setTimeout(function() {
                    if (obj.content.scrollTop + obj.content.clientHeight >= obj.content.scrollHeight) {
                        if (obj.loadDown()) {
                            if (obj.content.scrollTop + obj.content.clientHeight > obj.content.scrollHeight - 10) {
                                obj.content.scrollTop = obj.content.scrollTop - obj.content.clientHeight;
                            }
                            obj.updateCornerPosition();
                        }
                    } else if (obj.content.scrollTop <= obj.content.clientHeight) {
                        if (obj.loadUp()) {
                            if (obj.content.scrollTop < 10) {
                                obj.content.scrollTop = obj.content.scrollTop + obj.content.clientHeight;
                            }
                            obj.updateCornerPosition();
                        }
                    }

                    jexcel.timeControlLoading = null;
                }, 100);
            }
        }
    }

    // Get width of all freezed cells together
    obj.getFreezeWidth = function() {
        var width = 0;
        if (obj.options.freezeColumns > 0) {
            for (var i = 0; i < obj.options.freezeColumns; i++) {
                width += parseInt(obj.options.columns[i].width);
            }
        }
        return width;
    }

    var scrollLeft = 0;

    obj.updateFreezePosition = function() {
        scrollLeft = obj.content.scrollLeft;
        var width = 0;
        if (scrollLeft > 50) {
            for (var i = 0; i < obj.options.freezeColumns; i++) {
                if (i > 0) {
                    width += parseInt(obj.options.columns[i-1].width);
                }
                obj.headers[i].classList.add('jexcel_freezed');
                obj.headers[i].style.left = width + 'px';
                for (var j = 0; j < obj.rows.length; j++) {
                    if (obj.rows[j] && obj.records[j][i]) {
                        var shifted = (scrollLeft + (i > 0 ? obj.records[j][i-1].style.width : 0)) - 51 + 'px';
                        obj.records[j][i].classList.add('jexcel_freezed');
                        obj.records[j][i].style.left = shifted;
                    }
                }
            }
        } else {
            for (var i = 0; i < obj.options.freezeColumns; i++) {
                obj.headers[i].classList.remove('jexcel_freezed');
                obj.headers[i].style.left = '';
                for (var j = 0; j < obj.rows.length; j++) {
                    if (obj.records[j][i]) {
                        obj.records[j][i].classList.remove('jexcel_freezed');
                        obj.records[j][i].style.left = '';
                    }
                }
            }
        }

        // Place the corner in the correct place
        obj.updateCornerPosition();
    }

    el.addEventListener("DOMMouseScroll", obj.wheelControls);
    el.addEventListener("mousewheel", obj.wheelControls);

    el.jexcel = obj;

    obj.init();

    return obj;
});

jexcel.current = null;
jexcel.timeControl = null;
jexcel.timeControlLoading = null;

jexcel.destroy = function(element, destroyEventHandlers) {
    if (element.jexcel) {
        var root = element.jexcel.options.root ? element.jexcel.options.root : document;
        element.removeEventListener("DOMMouseScroll", element.jexcel.scrollControls);
        element.removeEventListener("mousewheel", element.jexcel.scrollControls);
        element.jexcel = null;
        element.innerHTML = '';

        if (destroyEventHandlers) {
            root.removeEventListener("mouseup", jexcel.mouseUpControls);
            root.removeEventListener("mousedown", jexcel.mouseDownControls);
            root.removeEventListener("mousemove", jexcel.mouseMoveControls);
            root.removeEventListener("mouseover", jexcel.mouseOverControls);
            root.removeEventListener("dblclick", jexcel.doubleClickControls);
            root.removeEventListener("paste", jexcel.pasteControls);
            root.removeEventListener("contextmenu", jexcel.contextMenuControls);
            root.removeEventListener("touchstart", jexcel.touchStartControls);
            root.removeEventListener("touchend", jexcel.touchEndControls);
            root.removeEventListener("touchcancel", jexcel.touchEndControls);
            document.removeEventListener("keydown", jexcel.keyDownControls);
            jexcel = null;
        }
    }
}

jexcel.build = function(root) {
    root.addEventListener("mouseup", jexcel.mouseUpControls);
    root.addEventListener("mousedown", jexcel.mouseDownControls);
    root.addEventListener("mousemove", jexcel.mouseMoveControls);
    root.addEventListener("mouseover", jexcel.mouseOverControls);
    root.addEventListener("dblclick", jexcel.doubleClickControls);
    root.addEventListener("paste", jexcel.pasteControls);
    root.addEventListener("contextmenu", jexcel.contextMenuControls);
    root.addEventListener("touchstart", jexcel.touchStartControls);
    root.addEventListener("touchend", jexcel.touchEndControls);
    root.addEventListener("touchcancel", jexcel.touchEndControls);
    root.addEventListener("touchmove", jexcel.touchEndControls);
    document.addEventListener("keydown", jexcel.keyDownControls);
}

/**
 * Events
 */
jexcel.keyDownControls = function(e) {
    if (jexcel.current) {
        if (jexcel.current.edition) {
            if (e.which == 27) {
                // Escape
                if (jexcel.current.edition) {
                    // Exit without saving
                    jexcel.current.closeEditor(jexcel.current.edition[0], false);
                }
                e.preventDefault();
            } else if (e.which == 13) {
                // Enter
                if (jexcel.current.options.columns[jexcel.current.edition[2]].type == 'calendar') {
                    jexcel.current.closeEditor(jexcel.current.edition[0], true);
                } else if (jexcel.current.options.columns[jexcel.current.edition[2]].type == 'dropdown' ||
                           jexcel.current.options.columns[jexcel.current.edition[2]].type == 'autocomplete') {
                    // Do nothing
                } else {
                    // Alt enter -> do not close editor
                    if ((jexcel.current.options.wordWrap == true ||
                         jexcel.current.options.columns[jexcel.current.edition[2]].wordWrap == true ||
                         jexcel.current.options.data[jexcel.current.edition[3]][jexcel.current.edition[2]].length > 200) && e.altKey) {
                        // Add new line to the editor
                        var editorTextarea = jexcel.current.edition[0].children[0];
                        var editorValue = jexcel.current.edition[0].children[0].value;
                        var editorIndexOf = editorTextarea.selectionStart;
                        editorValue = editorValue.slice(0, editorIndexOf) + "\n" + editorValue.slice(editorIndexOf);
                        editorTextarea.value = editorValue;
                        editorTextarea.focus();
                        editorTextarea.selectionStart = editorIndexOf + 1;
                        editorTextarea.selectionEnd = editorIndexOf + 1;
                    } else {
                        jexcel.current.edition[0].children[0].blur();
                    }
                }
            } else if (e.which == 9) {
                // Tab
                if (jexcel.current.options.columns[jexcel.current.edition[2]].type == 'calendar') {
                    jexcel.current.closeEditor(jexcel.current.edition[0], true);
                } else {
                    jexcel.current.edition[0].children[0].blur();
                }
            }
        }

        if (! jexcel.current.edition && jexcel.current.selectedCell) {
            // Which key
            if (e.which == 37) {
                jexcel.current.left(e.shiftKey, e.ctrlKey);
                e.preventDefault();
            } else if (e.which == 39) {
                jexcel.current.right(e.shiftKey, e.ctrlKey);
                e.preventDefault();
            } else if (e.which == 38) {
                jexcel.current.up(e.shiftKey, e.ctrlKey);
                e.preventDefault();
            } else if (e.which == 40) {
                jexcel.current.down(e.shiftKey, e.ctrlKey);
                e.preventDefault();
            } else if (e.which == 36) {
                jexcel.current.first(e.shiftKey, e.ctrlKey);
                e.preventDefault();
            } else if (e.which == 35) {
                jexcel.current.last(e.shiftKey, e.ctrlKey);
                e.preventDefault();
            } else if (e.which == 32) {
                if (jexcel.current.options.editable == true) {
                    jexcel.current.setCheckRadioValue();
                }
                e.preventDefault();
            } else if (e.which == 46) {
                // Delete
                if (jexcel.current.options.editable == true) {
                    if (jexcel.current.selectedRow) {
                        if (jexcel.current.options.allowDeleteRow == true) {
                            if (confirm(jexcel.current.options.text.areYouSureToDeleteTheSelectedRows)) {
                                jexcel.current.deleteRow();
                            }
                        }
                    } else if (jexcel.current.selectedHeader) {
                        if (jexcel.current.options.allowDeleteColumn == true) {
                            if (confirm(jexcel.current.options.text.areYouSureToDeleteTheSelectedColumns)) {
                                jexcel.current.deleteColumn();
                            }
                        }
                    } else {
                        // Change value
                        jexcel.current.setValue(jexcel.current.highlighted, '');
                    }
                }
            } else if (e.which == 13) {
                // Move cursor
                if (e.shiftKey) {
                    jexcel.current.up();
                } else {
                    if (jexcel.current.options.allowInsertRow == true) {
                        if (jexcel.current.options.allowManualInsertRow == true) {
                            if (jexcel.current.selectedCell[1] == jexcel.current.options.data.length - 1) {
                                // New record in case selectedCell in the last row
                                jexcel.current.insertRow();
                            }
                        }
                    }

                    jexcel.current.down();
                }
                e.preventDefault();
            } else if (e.which == 9) {
                // Tab
                if (e.shiftKey) {
                    jexcel.current.left();
                } else {
                    if (jexcel.current.options.allowInsertColumn == true) {
                        if (jexcel.current.options.allowManualInsertColumn == true) {
                            if (jexcel.current.selectedCell[0] == jexcel.current.options.data[0].length - 1) {
                                // New record in case selectedCell in the last column
                                jexcel.current.insertColumn();
                            }
                        }
                    }

                    jexcel.current.right();
                }
                e.preventDefault();
            } else {
                if ((e.ctrlKey || e.metaKey) && ! e.shiftKey) {
                    if (e.which == 65) {
                        // Ctrl + A
                        jexcel.current.selectAll();
                        e.preventDefault();
                    } else if (e.which == 83) {
                        // Ctrl + S
                        jexcel.current.download();
                        e.preventDefault();
                    } else if (e.which == 89) {
                        // Ctrl + Y
                        jexcel.current.redo();
                        e.preventDefault();
                    } else if (e.which == 90) {
                        // Ctrl + Z
                        jexcel.current.undo();
                        e.preventDefault();
                    } else if (e.which == 67) {
                        // Ctrl + C
                        jexcel.current.copy(true);
                        e.preventDefault();
                    } else if (e.which == 67) {
                        // Ctrl + C
                        jexcel.current.copy(true);
                        e.preventDefault();
                    } else if (e.which == 88) {
                        // Ctrl + X
                        if (jexcel.current.options.editable == true) {
                            jexcel.cutControls();
                        } else {
                            jexcel.copyControls();
                        }
                        e.preventDefault();
                    } else if (e.which == 86) {
                        // Ctrl + V
                        jexcel.pasteControls();
                    }
                } else {
                    if (jexcel.current.selectedCell) {
                        if (jexcel.current.options.editable == true) {
                            var rowId = jexcel.current.selectedCell[1];
                            var columnId = jexcel.current.selectedCell[0];

                            // If is not readonly
                            if (jexcel.current.options.columns[columnId].type != 'readonly') {
                                // Characters able to start a edition
                                if (e.keyCode == 32) {
                                    // Space
                                    if (jexcel.current.options.columns[columnId].type == 'checkbox' ||
                                        jexcel.current.options.columns[columnId].type == 'radio') {
                                        e.preventDefault();
                                    } else {
                                        // Start edition
                                        jexcel.current.openEditor(jexcel.current.records[rowId][columnId], true);
                                    }
                                } else if (e.keyCode == 113) {
                                    // Start edition with current content F2
                                    jexcel.current.openEditor(jexcel.current.records[rowId][columnId], false);
                                } else if ((e.keyCode == 8) ||
                                           (e.keyCode >= 48 && e.keyCode <= 57) ||
                                           (e.keyCode >= 96 && e.keyCode <= 111) ||
                                           (e.keyCode >= 187 && e.keyCode <= 190) ||
                                           ((String.fromCharCode(e.keyCode) == e.key || String.fromCharCode(e.keyCode).toLowerCase() == e.key.toLowerCase()) && jexcel.validLetter(String.fromCharCode(e.keyCode)))) {
                                    // Start edition
                                    jexcel.current.openEditor(jexcel.current.records[rowId][columnId], true);
                                    // Prevent entries in the calendar
                                    if (jexcel.current.options.columns[columnId].type == 'calendar') {
                                        e.preventDefault();
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } else {
            if (e.target.classList.contains('jexcel_search')) {
                if (jexcel.timeControl) {
                    clearTimeout(jexcel.timeControl);
                }

                jexcel.timeControl = setTimeout(function() {
                    jexcel.current.search(e.target.value);
                }, 200);
            }
        }
    }
}

jexcel.isMouseAction = false;

jexcel.mouseDownControls = function(e) {
    e = e || window.event;
    if (e.buttons) {
        var mouseButton = e.buttons;
    } else if (e.button) {
        var mouseButton = e.button;
    } else {
        var mouseButton = e.which;
    }

    // Get elements
    var jexcelTable = jexcel.getElement(e.target);

    if (jexcelTable[0]) {
        if (jexcel.current != jexcelTable[0].jexcel) {
            if (jexcel.current) {
                if (jexcel.current.edition) {
                    jexcel.current.closeEditor(jexcel.current.edition[0], true);
                }
                jexcel.current.resetSelection();
            }
            jexcel.current = jexcelTable[0].jexcel;
        }
    } else {
        if (jexcel.current) {
            if (jexcel.current.edition) {
                jexcel.current.closeEditor(jexcel.current.edition[0], true);
            }
            
            jexcel.current.resetSelection(true);
            jexcel.current = null;
        }
    }

    if (jexcel.current && mouseButton == 1) {
        if (e.target.classList.contains('jexcel_selectall')) {
            if (jexcel.current) {
                jexcel.current.selectAll();
            }
        } else if (e.target.classList.contains('jexcel_corner')) {
            if (jexcel.current.options.editable == true) {
                jexcel.current.selectedCorner = true;
            }
        } else {
            // Header found
            if (jexcelTable[1] == 1) {
                var columnId = e.target.getAttribute('data-x');
                if (columnId) {
                    // Update cursor
                    var info = e.target.getBoundingClientRect();
                    if (jexcel.current.options.columnResize == true && info.width - e.offsetX < 6) {
                        // Resize helper
                        jexcel.current.resizing = {
                            mousePosition: e.pageX,
                            column: columnId,
                            width: info.width,
                        };

                        // Border indication
                        jexcel.current.headers[columnId].classList.add('resizing');
                        for (var j = 0; j < jexcel.current.records.length; j++) {
                            if (jexcel.current.records[j][columnId]) {
                                jexcel.current.records[j][columnId].classList.add('resizing');
                            }
                        }
                    } else if (jexcel.current.options.columnDrag == true && info.height - e.offsetY < 6) {
                        if (jexcel.current.isColMerged(columnId).length) {
                            console.error('JEXCEL: This column is part of a merged cell.');
                        } else {
                            // Reset selection
                            jexcel.current.resetSelection();
                            // Drag helper
                            jexcel.current.dragging = {
                                element: e.target,
                                column:columnId,
                                destination:columnId,
                            };
                            // Border indication
                            jexcel.current.headers[columnId].classList.add('dragging');
                            for (var j = 0; j < jexcel.current.records.length; j++) {
                                if (jexcel.current.records[j][columnId]) {
                                    jexcel.current.records[j][columnId].classList.add('dragging');
                                }
                            }
                        }
                    } else {
                        if (jexcel.current.selectedHeader && (e.shiftKey || e.ctrlKey)) {
                            var o = jexcel.current.selectedHeader;
                            var d = columnId;
                        } else {
                            // Press to rename
                            if (jexcel.current.selectedHeader == columnId && jexcel.current.options.allowRenameColumn == true) {
                                jexcel.timeControl = setTimeout(function() {
                                    jexcel.current.setHeader(columnId);
                                }, 800);
                            }

                            // Keep track of which header was selected first
                            jexcel.current.selectedHeader = columnId;

                            // Update selection single column
                            var o = columnId;
                            var d = columnId;
                        }

                        // Update selection
                        jexcel.current.updateSelectionFromCoords(o, 0, d, jexcel.current.options.data.length - 1);
                    }
                } else {
                    if (e.target.parentNode.classList.contains('jexcel_nested')) {
                        if (e.target.getAttribute('data-column')) {
                            var column = e.target.getAttribute('data-column').split(',');
                            var c1 = parseInt(column[0]);
                            var c2 = parseInt(column[column.length-1]);
                        } else {
                            var c1 = 0;
                            var c2 = jexcel.current.options.columns.length - 1;
                        }
                        jexcel.current.updateSelectionFromCoords(c1, 0, c2, jexcel.current.options.data.length - 1);
                    }
                }
            } else {
                jexcel.current.selectedHeader = false;
            }

            // Body found
            if (jexcelTable[1] == 2) {
                var rowId = e.target.getAttribute('data-y');
                
                if (e.target.classList.contains('jexcel_row')) {
                    var info = e.target.getBoundingClientRect();
                    if (jexcel.current.options.rowResize == true && info.height - e.offsetY < 6) {
                        // Resize helper
                        jexcel.current.resizing = {
                            element: e.target.parentNode,
                            mousePosition: e.pageY,
                            row: rowId,
                            height: info.height,
                        };
                        // Border indication
                        e.target.parentNode.classList.add('resizing');
                    } else if (jexcel.current.options.rowDrag == true && info.width - e.offsetX < 6) {
                        if (jexcel.current.isRowMerged(rowId).length) {
                            console.error('JEXCEL: This row is part of a merged cell');
                        } else if (jexcel.current.options.search == true && jexcel.current.results) {
                            console.error('JEXCEL: Please clear your search before perform this action');
                        } else {
                            // Reset selection
                            jexcel.current.resetSelection();
                            // Drag helper
                            jexcel.current.dragging = {
                                element: e.target.parentNode,
                                row:rowId,
                                destination:rowId,
                            };
                            // Border indication
                            e.target.parentNode.classList.add('dragging');
                        }
                    } else {
                        if (jexcel.current.selectedRow && (e.shiftKey || e.ctrlKey)) {
                            var o = jexcel.current.selectedRow;
                            var d = rowId;
                        } else {
                            // Keep track of which header was selected first
                            jexcel.current.selectedRow = rowId;

                            // Update selection single column
                            var o = rowId;
                            var d = rowId;
                        }

                        // Update selection
                        jexcel.current.updateSelectionFromCoords(0, o, jexcel.current.options.data[0].length - 1, d);
                    }
                } else {
                    // Jclose
                    if (e.target.classList.contains('jclose') && e.target.clientWidth - e.offsetX < 50 && e.offsetY < 50) {
                        jexcel.current.closeEditor(jexcel.current.edition[0], true);
                    } else {
                        var getCellCoords = function(element) {
                            var x = element.getAttribute('data-x');
                            var y = element.getAttribute('data-y');
                            if (x && y) {
                                return [x, y];
                            } else {
                                if (element.parentNode) {
                                    return getCellCoords(element.parentNode);
                                }
                            }
                        };

                        var position = getCellCoords(e.target);
                        if (position) {

                            var columnId = position[0];
                            var rowId = position[1];
                            // Close edition
                            if (jexcel.current.edition) {
                                if (jexcel.current.edition[2] != columnId || jexcel.current.edition[3] != rowId) {
                                    jexcel.current.closeEditor(jexcel.current.edition[0], true);
                                }
                            }

                            if (! jexcel.current.edition) {
                                // Update cell selection
                                if (e.shiftKey) {
                                    jexcel.current.updateSelectionFromCoords(jexcel.current.selectedCell[0], jexcel.current.selectedCell[1], columnId, rowId);
                                } else {
                                    jexcel.current.updateSelectionFromCoords(columnId, rowId);
                                }
                            }

                            // No full row selected
                            jexcel.current.selectedHeader = null;
                            jexcel.current.selectedRow = null;
                        }
                    }
                }
            } else {
                jexcel.current.selectedRow = false;
            }

            // Pagination
            if (e.target.classList.contains('jexcel_page')) {
                if (e.target.innerText == '<') {
                    jexcel.current.page(0);
                } else if (e.target.innerText == '>') {
                    jexcel.current.page(e.target.getAttribute('title') - 1);
                } else {
                    jexcel.current.page(e.target.innerText - 1);
                }
            }
        }

        if (jexcel.current.edition) {
            jexcel.isMouseAction = false;
        } else {
            jexcel.isMouseAction = true;
        }
    } else {
        jexcel.isMouseAction = false;
    }
}

jexcel.mouseUpControls = function(e) {
    if (jexcel.current) {
        // Update cell size
        if (jexcel.current.resizing) {
            // Columns to be updated
            if (jexcel.current.resizing.column) {
                // New width
                var newWidth = jexcel.current.colgroup[jexcel.current.resizing.column].getAttribute('width');
                // Columns
                var columns = jexcel.current.getSelectedColumns();
                if (columns.length > 1) {
                    var currentWidth = [];
                    for (var i = 0; i < columns.length; i++) {
                        currentWidth.push(parseInt(jexcel.current.colgroup[columns[i]].getAttribute('width')));
                    }
                    // Previous width
                    var index = columns.indexOf(parseInt(jexcel.current.resizing.column));
                    currentWidth[index] = jexcel.current.resizing.width;
                    jexcel.current.setWidth(columns, newWidth, currentWidth);
                } else {
                    jexcel.current.setWidth(jexcel.current.resizing.column, newWidth, jexcel.current.resizing.width);
                }
                // Remove border
                jexcel.current.headers[jexcel.current.resizing.column].classList.remove('resizing');
                for (var j = 0; j < jexcel.current.records.length; j++) {
                    if (jexcel.current.records[j][jexcel.current.resizing.column]) {
                        jexcel.current.records[j][jexcel.current.resizing.column].classList.remove('resizing');
                    }
                }
            } else {
                // Remove Class
                jexcel.current.rows[jexcel.current.resizing.row].children[0].classList.remove('resizing');
                var newHeight = jexcel.current.rows[jexcel.current.resizing.row].getAttribute('height');
                jexcel.current.setHeight(jexcel.current.resizing.row, newHeight, jexcel.current.resizing.height);
                // Remove border
                jexcel.current.resizing.element.classList.remove('resizing');
            }
            // Reset resizing helper
            jexcel.current.resizing = null;
        } else if (jexcel.current.dragging) {
            // Reset dragging helper
            if (jexcel.current.dragging) {
                if (jexcel.current.dragging.column) {
                    // Target
                    var columnId = e.target.getAttribute('data-x');
                    // Remove move style
                    jexcel.current.headers[jexcel.current.dragging.column].classList.remove('dragging');
                    for (var j = 0; j < jexcel.current.rows.length; j++) {
                        if (jexcel.current.records[j][jexcel.current.dragging.column]) {
                            jexcel.current.records[j][jexcel.current.dragging.column].classList.remove('dragging');
                        }
                    }
                    for (var i = 0; i < jexcel.current.headers.length; i++) {
                        jexcel.current.headers[i].classList.remove('dragging-left');
                        jexcel.current.headers[i].classList.remove('dragging-right');
                    }
                    // Update position
                    if (columnId) {
                        if (jexcel.current.dragging.column != jexcel.current.dragging.destination) {
                            jexcel.current.moveColumn(jexcel.current.dragging.column, jexcel.current.dragging.destination);
                        }
                    }
                } else {
                    if (jexcel.current.dragging.element.nextSibling) {
                        var position = parseInt(jexcel.current.dragging.element.nextSibling.getAttribute('data-y'));
                        if (jexcel.current.dragging.row < position) {
                            position -= 1;
                        }
                    } else {
                        var position = parseInt(jexcel.current.dragging.element.previousSibling.getAttribute('data-y'));
                    }
                        if (jexcel.current.dragging.row != jexcel.current.dragging.destination) {
                        jexcel.current.moveRow(jexcel.current.dragging.row, position, true);
                    }
                    jexcel.current.dragging.element.classList.remove('dragging');
                }
                jexcel.current.dragging = null;
            }
        } else {
            // Close any corner selection
            if (jexcel.current.selectedCorner) {
                jexcel.current.selectedCorner = false;

                // Data to be copied
                if (jexcel.current.selection.length > 0) {
                    // Copy data
                    jexcel.current.copyData(jexcel.current.selection[0], jexcel.current.selection[jexcel.current.selection.length - 1]);

                    // Remove selection
                    jexcel.current.removeCopySelection();
                }
            }
        }
    }

    // Clear any time control
    if (jexcel.timeControl) {
        clearTimeout(jexcel.timeControl);
        jexcel.timeControl = null;
    }

    // Mouse up
    jexcel.isMouseAction = false;
}

// Mouse move controls
jexcel.mouseMoveControls = function(e) {
    e = e || window.event;
    if (e.buttons) {
        var mouseButton = e.buttons;
    } else if (e.button) {
        var mouseButton = e.button;
    } else {
        var mouseButton = e.which;
    }

    if (! mouseButton) {
        jexcel.isMouseAction = false;
    }

    if (jexcel.current) {
        if (jexcel.isMouseAction == true) {
            // Resizing is ongoing
            if (jexcel.current.resizing) {
                if (jexcel.current.resizing.column) {
                    var width = e.pageX - jexcel.current.resizing.mousePosition;

                    if (jexcel.current.resizing.width + width > 0) {
                        var tempWidth = jexcel.current.resizing.width + width;
                        jexcel.current.colgroup[jexcel.current.resizing.column].setAttribute('width', tempWidth);

                        jexcel.current.updateCornerPosition();
                    }
                } else {
                    var height = e.pageY - jexcel.current.resizing.mousePosition;

                    if (jexcel.current.resizing.height + height > 0) {
                        var tempHeight = jexcel.current.resizing.height + height;
                        jexcel.current.rows[jexcel.current.resizing.row].setAttribute('height', tempHeight);

                        jexcel.current.updateCornerPosition();
                    }
                }
            }
        } else {
            var x = e.target.getAttribute('data-x');
            var y = e.target.getAttribute('data-y');
            var rect = e.target.getBoundingClientRect();

            if (jexcel.current.cursor) {
                jexcel.current.cursor.style.cursor = '';
                jexcel.current.cursor = null;
            }

            if (e.target.parentNode.parentNode && e.target.parentNode.parentNode.className) {
                if (e.target.parentNode.parentNode.classList.contains('resizable')) {
                    if (e.target && x && ! y && (rect.width - (e.clientX - rect.left) < 6)) {
                        jexcel.current.cursor = e.target;
                        jexcel.current.cursor.style.cursor = 'col-resize';
                    } else if (e.target && ! x && y && (rect.height - (e.clientY - rect.top) < 6)) {
                        jexcel.current.cursor = e.target;
                        jexcel.current.cursor.style.cursor = 'row-resize';
                    }
                }

                if (e.target.parentNode.parentNode.classList.contains('draggable')) {
                    if (e.target && ! x && y && (rect.width - (e.clientX - rect.left) < 6)) {
                        jexcel.current.cursor = e.target;
                        jexcel.current.cursor.style.cursor = 'move';
                    } else if (e.target && x && ! y && (rect.height - (e.clientY - rect.top) < 6)) {
                        jexcel.current.cursor = e.target;
                        jexcel.current.cursor.style.cursor = 'move';
                    }
                }
            }
        }
    }
}

jexcel.mouseOverControls = function(e) {
    e = e || window.event;
    if (e.buttons) {
        var mouseButton = e.buttons;
    } else if (e.button) {
        var mouseButton = e.button;
    } else {
        var mouseButton = e.which;
    }

    if (! mouseButton) {
        jexcel.isMouseAction = false;
    }

    if (jexcel.current && jexcel.isMouseAction == true) {
        // Get elements
        var jexcelTable = jexcel.getElement(e.target);

        if (jexcelTable[0]) {
            // Avoid cross reference
            if (jexcel.current != jexcelTable[0].jexcel) {
                if (jexcel.current) {
                    return false;
                }
            }

            var columnId = e.target.getAttribute('data-x');
            var rowId = e.target.getAttribute('data-y');

            if (jexcel.current.dragging) {
                if (jexcel.current.dragging.column) {
                    if (columnId) {
                        if (jexcel.current.isColMerged(columnId).length) {
                            console.error('JEXCEL: This column is part of a merged cell.');
                        } else {
                            for (var i = 0; i < jexcel.current.headers.length; i++) {
                                jexcel.current.headers[i].classList.remove('dragging-left');
                                jexcel.current.headers[i].classList.remove('dragging-right');
                            }

                            if (jexcel.current.dragging.column == columnId) {
                                jexcel.current.dragging.destination = parseInt(columnId);
                            } else {
                                if (e.target.clientWidth / 2 > e.offsetX) {
                                    if (jexcel.current.dragging.column < columnId) {
                                        jexcel.current.dragging.destination = parseInt(columnId) - 1;
                                    } else {
                                        jexcel.current.dragging.destination = parseInt(columnId);
                                    }
                                    jexcel.current.headers[columnId].classList.add('dragging-left');
                                } else {
                                    if (jexcel.current.dragging.column < columnId) {
                                        jexcel.current.dragging.destination = parseInt(columnId);
                                    } else {
                                        jexcel.current.dragging.destination = parseInt(columnId) + 1;
                                    }
                                    jexcel.current.headers[columnId].classList.add('dragging-right');
                                }
                            }
                        }
                    }
                } else {
                    if (rowId) {
                        if (jexcel.current.isRowMerged(rowId).length) {
                            console.error('JEXCEL: This row is part of a merged cell.');
                        } else {
                            var target = (e.target.clientHeight / 2 > e.offsetY) ? e.target.parentNode.nextSibling : e.target.parentNode;
                            if (jexcel.current.dragging.element != target) {
                                e.target.parentNode.parentNode.insertBefore(jexcel.current.dragging.element, target);
                                jexcel.current.dragging.destination = Array.prototype.indexOf.call(jexcel.current.dragging.element.parentNode.children, jexcel.current.dragging.element);
                            }
                        }
                    }
                }
            } else if (jexcel.current.resizing) {
            } else {
                // Header found
                if (jexcelTable[1] == 1) {
                    if (jexcel.current.selectedHeader) {
                        var columnId = e.target.getAttribute('data-x');
                        var o = jexcel.current.selectedHeader;
                        var d = columnId;
                        // Update selection
                        jexcel.current.updateSelectionFromCoords(o, 0, d, jexcel.current.options.data.length - 1);
                    }
                }

                // Body found
                if (jexcelTable[1] == 2) {
                    if (e.target.classList.contains('jexcel_row')) {
                        if (jexcel.current.selectedRow) {
                            var o = jexcel.current.selectedRow;
                            var d = rowId;
                            // Update selection
                            jexcel.current.updateSelectionFromCoords(0, o, jexcel.current.options.data[0].length - 1, d);
                        }
                    } else {
                        // Do not select edtion is in progress
                        if (! jexcel.current.edition) {
                            if (columnId && rowId) {
                                if (jexcel.current.selectedCorner) {
                                    jexcel.current.updateCopySelection(columnId, rowId);
                                } else {
                                    if (jexcel.current.selectedCell) {
                                        jexcel.current.updateSelectionFromCoords(jexcel.current.selectedCell[0], jexcel.current.selectedCell[1], columnId, rowId);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    // Clear any time control
    if (jexcel.timeControl) {
        clearTimeout(jexcel.timeControl);
        jexcel.timeControl = null;
    }
}

/**
 * Double click event handler: controls the double click in the corner, cell edition or column re-ordering.
 */
jexcel.doubleClickControls = function(e) {
    // Jexcel is selected
    if (jexcel.current) {
        // Corner action
        if (e.target.classList.contains('jexcel_corner')) {
            // Any selected cells
            if (jexcel.current.highlighted.length > 0) {
                // Copy from this
                var x1 = jexcel.current.highlighted[0].getAttribute('data-x');
                var y1 = parseInt(jexcel.current.highlighted[jexcel.current.highlighted.length - 1].getAttribute('data-y')) + 1;
                // Until this
                var x2 = jexcel.current.highlighted[jexcel.current.highlighted.length - 1].getAttribute('data-x');
                var y2 = jexcel.current.records.length - 1
                // Execute copy
                jexcel.current.copyData(jexcel.current.records[y1][x1], jexcel.current.records[y2][x2]);
            }
        } else if (e.target.classList.contains('jexcel_column_filter')) {
            // Column
            var columnId = e.target.getAttribute('data-x');
            // Open filter
            jexcel.current.openFilter(columnId);
            
        } else {
            // Get table
            var jexcelTable = jexcel.getElement(e.target);

            // Double click over header
            if (jexcelTable[1] == 1 && jexcel.current.options.columnSorting == true) {
                // Check valid column header coords
                var columnId = e.target.getAttribute('data-x');
                if (columnId) {
                    jexcel.current.orderBy(columnId);
                }
            }

            // Double click over body
            if (jexcelTable[1] == 2 && jexcel.current.options.editable == true) {
                if (! jexcel.current.edition) {
                    var getCellCoords = function(element) {
                        if (element.parentNode) {
                            var x = element.getAttribute('data-x');
                            var y = element.getAttribute('data-y');
                            if (x && y) {
                                return element;
                            } else {
                                return getCellCoords(element.parentNode);
                            }
                        }
                    }
                    var cell = getCellCoords(e.target);
                    if (cell && cell.classList.contains('highlight')) {
                        jexcel.current.openEditor(cell);
                    }
                }
            }
        }
    }
}

jexcel.copyControls = function(e) {
    if (jexcel.current && jexcel.copyControls.enabled) {
        if (! jexcel.current.edition) {
            jexcel.current.copy(true);
        }
    }
}

jexcel.cutControls = function(e) {
    if (jexcel.current) {
        if (! jexcel.current.edition) {
            jexcel.current.copy(true);
            if (jexcel.current.options.editable == true) {
                jexcel.current.setValue(jexcel.current.highlighted, '');
            }
        }
    }
}

jexcel.pasteControls = function(e) {
    if (jexcel.current && jexcel.current.selectedCell) {
        if (! jexcel.current.edition) {
            if (jexcel.current.options.editable == true) {
                if (e && e.clipboardData) {
                    jexcel.current.paste(jexcel.current.selectedCell[0], jexcel.current.selectedCell[1], e.clipboardData.getData('text'));
                    e.preventDefault();
                } else if (window.clipboardData) {
                    jexcel.current.paste(jexcel.current.selectedCell[0], jexcel.current.selectedCell[1], window.clipboardData.getData('text'));
                }
            }
        }
    }
}

jexcel.contextMenuControls = function(e) {
    e = e || window.event;
    if ("buttons" in e) {
        var mouseButton = e.buttons;
    } else {
        var mouseButton = e.which || e.button;
    }

    if (jexcel.current) {
        if (jexcel.current.edition) {
            e.preventDefault();
        } else if (jexcel.current.options.contextMenu) {
            jexcel.current.contextMenu.contextmenu.close();

            if (jexcel.current) {
                var x = e.target.getAttribute('data-x');
                var y = e.target.getAttribute('data-y');

                if (x || y) {
                    if ((x < parseInt(jexcel.current.selectedCell[0])) || (x > parseInt(jexcel.current.selectedCell[2])) ||
                        (y < parseInt(jexcel.current.selectedCell[1])) || (y > parseInt(jexcel.current.selectedCell[3])))
                    {
                        jexcel.current.updateSelectionFromCoords(x, y, x, y);
                    }

                    // Table found
                    var items = jexcel.current.options.contextMenu(jexcel.current, x, y, e);
                    // The id is depending on header and body
                    jexcel.current.contextMenu.contextmenu.open(e, items);
                    // Avoid the real one
                    e.preventDefault();
                }
            }
        }
    }
}

jexcel.touchStartControls = function(e) {
    var jexcelTable = jexcel.getElement(e.target);

    if (jexcelTable[0]) {
        if (jexcel.current != jexcelTable[0].jexcel) {
            if (jexcel.current) {
                jexcel.current.resetSelection();
            }
            jexcel.current = jexcelTable[0].jexcel;
        }
    } else {
        if (jexcel.current) {
            jexcel.current.resetSelection();
            jexcel.current = null;
        }
    }

    if (jexcel.current) {
        if (! jexcel.current.edition) {
            var columnId = e.target.getAttribute('data-x');
            var rowId = e.target.getAttribute('data-y');

            if (columnId && rowId) {
                jexcel.current.updateSelectionFromCoords(columnId, rowId);

                jexcel.timeControl = setTimeout(function() {
                    // Keep temporary reference to the element
                    if (jexcel.current.options.columns[columnId].type == 'color') {
                        jexcel.tmpElement = null;
                    } else {
                        jexcel.tmpElement = e.target;
                    }
                    jexcel.current.openEditor(e.target, false, e);
                }, 500);
            }
        }
    }
}

jexcel.touchEndControls = function(e) {
    // Clear any time control
    if (jexcel.timeControl) {
        clearTimeout(jexcel.timeControl);
        jexcel.timeControl = null;
        // Element
        if (jexcel.tmpElement && jexcel.tmpElement.children[0].tagName == 'INPUT') {
            jexcel.tmpElement.children[0].focus();
        }
        jexcel.tmpElement = null;
    }
}

/**
 * Jexcel extensions
 */

jexcel.tabs = function(tabs, result) {
    var instances = [];
    // Create tab container
    if (! tabs.classList.contains('jexcel_tabs')) {
        tabs.innerHTML = '';
        tabs.classList.add('jexcel_tabs')
        tabs.jexcel = [];

        var div = document.createElement('div');
        var headers = tabs.appendChild(div);
        var div = document.createElement('div');
        var content = tabs.appendChild(div);
    } else {
        var headers = tabs.children[0];
        var content = tabs.children[1];
    }

    var spreadsheet = []
    var link = [];
    for (var i = 0; i < result.length; i++) {
        // Spreadsheet container
        spreadsheet[i] = document.createElement('div');
        spreadsheet[i].classList.add('jexcel_tab');
        var worksheet = jexcel(spreadsheet[i], result[i]);
        content.appendChild(spreadsheet[i]);
        instances[i] = tabs.jexcel.push(worksheet);

        // Tab link
        link[i] = document.createElement('div');
        link[i].classList.add('jexcel_tab_link');
        link[i].setAttribute('data-spreadsheet', tabs.jexcel.length-1);
        link[i].innerHTML = result[i].sheetName;
        link[i].onclick = function() {
            for (var j = 0; j < headers.children.length; j++) {
                headers.children[j].classList.remove('selected');
                content.children[j].style.display = 'none';
            }
            var i = this.getAttribute('data-spreadsheet');
            content.children[i].style.display = 'block';
            headers.children[i].classList.add('selected')
        }
        headers.appendChild(link[i]);
    }

    // First tab
    for (var j = 0; j < headers.children.length; j++) {
        headers.children[j].classList.remove('selected');
        content.children[j].style.display = 'none';
    }
    headers.children[headers.children.length - 1].classList.add('selected');
    content.children[headers.children.length - 1].style.display = 'block';

    return instances;
}

// Compability to older versions
jexcel.createTabs = jexcel.tabs;

jexcel.fromSpreadsheet = function(file, __callback) {
    var convert = function(workbook) {
        var spreadsheets = [];
        workbook.SheetNames.forEach(function(sheetName) {
            var spreadsheet = {};
            spreadsheet.rows = [];
            spreadsheet.columns = [];
            spreadsheet.data = [];
            spreadsheet.style = {};
            spreadsheet.sheetName = sheetName;

            // Column widths
            var temp = workbook.Sheets[sheetName]['!cols'];
            if (temp && temp.length) {
                for (var i = 0; i < temp.length; i++) {
                    spreadsheet.columns[i] = {};
                    if (temp[i] && temp[i].wpx) {
                        spreadsheet.columns[i].width = temp[i].wpx + 'px';
                    }
                 }
            }
            // Rows heights
            var temp = workbook.Sheets[sheetName]['!rows'];
            if (temp && temp.length) {
                for (var i = 0; i < temp.length; i++) {
                    if (temp[i] && temp[i].hpx) {
                        spreadsheet.rows[i] = {};
                        spreadsheet.rows[i].height = temp[i].hpx + 'px';
                    }
                }
            }
            // Merge cells
            var temp = workbook.Sheets[sheetName]['!merges'];
            if (temp && temp.length > 0) {
                spreadsheet.mergeCells = [];
                for (var i = 0; i < temp.length; i++) {
                    var x1 = temp[i].s.c;
                    var y1 = temp[i].s.r;
                    var x2 = temp[i].e.c;
                    var y2 = temp[i].e.r;
                    var key = jexcel.getColumnNameFromId([x1,y1]);
                    spreadsheet.mergeCells[key] = [ x2-x1+1, y2-y1+1 ];
                }
            }
            // Data container
            var max_x = 0;
            var max_y = 0;
            var temp = Object.keys(workbook.Sheets[sheetName]);
            for (var i = 0; i < temp.length; i++) {
                if (temp[i].substr(0,1) != '!') {
                    var cell = workbook.Sheets[sheetName][temp[i]];
                    var info = jexcel.getIdFromColumnName(temp[i], true);
                    if (! spreadsheet.data[info[1]]) {
                        spreadsheet.data[info[1]] = [];
                    }
                    spreadsheet.data[info[1]][info[0]] = cell.f ? '=' + cell.f : cell.w;
                    if (max_x < info[0]) {
                        max_x = info[0];
                    }
                    if (max_y < info[1]) {
                        max_y = info[1];
                    }
                    // Style
                    if (cell.style && Object.keys(cell.style).length > 0) {
                        spreadsheet.style[temp[i]] = cell.style;
                    }
                    if (cell.s && cell.s.fgColor) {
                        if (spreadsheet.style[temp[i]]) {
                            spreadsheet.style[temp[i]] += ';';
                        }
                        spreadsheet.style[temp[i]] += 'background-color:#' + cell.s.fgColor.rgb;
                    }
                }
            }
            var numColumns = spreadsheet.columns;
            for (var j = 0; j <= max_y; j++) {
                for (var i = 0; i <= max_x; i++) {
                    if (! spreadsheet.data[j]) {
                        spreadsheet.data[j] = [];
                    }
                    if (! spreadsheet.data[j][i]) {
                        if (numColumns < i) {
                            spreadsheet.data[j][i] = '';
                        }
                    }
                }
            }
            spreadsheets.push(spreadsheet);
        });

        return spreadsheets;
    }

    var oReq;
    oReq = new XMLHttpRequest();
    oReq.open("GET", file, true);

    if(typeof Uint8Array !== 'undefined') {
        oReq.responseType = "arraybuffer";
        oReq.onload = function(e) {
            var arraybuffer = oReq.response;
            var data = new Uint8Array(arraybuffer);
            var wb = XLSX.read(data, {type:"array", cellFormula:true, cellStyles:true });
            __callback(convert(wb))
        };
    } else {
        oReq.setRequestHeader("Accept-Charset", "x-user-defined");  
        oReq.onreadystatechange = function() { if(oReq.readyState == 4 && oReq.status == 200) {
            var ff = convertResponseBodyToText(oReq.responseBody);
            var wb = XLSX.read(ff, {type:"binary", cellFormula:true, cellStyles:true });
            __callback(convert(wb))
        }};
    }

    oReq.send();
}

/**
 * Valid international letter
 */

jexcel.validLetter = function (text) {
    var regex = /([\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC-\u0400-\u04FF']+)/g;
    return text.match(regex) ? 1 : 0;
}

/**
 * Helper injectArray
 */
jexcel.injectArray = function(o, idx, arr) {
    return o.slice(0, idx).concat(arr).concat(o.slice(idx));
}

/**
 * Get letter based on a number
 * 
 * @param integer i
 * @return string letter
 */
jexcel.getColumnName = function(i) {
    var letter = '';
    if (i > 701) {
        letter += String.fromCharCode(64 + parseInt(i / 676));
        letter += String.fromCharCode(64 + parseInt((i % 676) / 26));
    } else if (i > 25) {
        letter += String.fromCharCode(64 + parseInt(i / 26));
    }
    letter += String.fromCharCode(65 + (i % 26));

    return letter;
}

/**
 * Convert excel like column to jexcel id
 * 
 * @param string id
 * @return string id
 */
jexcel.getIdFromColumnName = function (id, arr) {
    // Get the letters
    var t = /^[a-zA-Z]+/.exec(id);

    if (t) {
        // Base 26 calculation
        var code = 0;
        for (var i = 0; i < t[0].length; i++) {
            code += parseInt(t[0].charCodeAt(i) - 64) * Math.pow(26, (t[0].length - 1 - i));
        }
        code--;
        // Make sure jexcel starts on zero
        if (code < 0) {
            code = 0;
        }

        // Number
        var number = parseInt(/[0-9]+$/.exec(id));
        if (number > 0) {
            number--;
        }

        if (arr == true) {
            id = [ code, number ];
        } else {
            id = code + '-' + number;
        }
    }

    return id;
}

/**
 * Convert jexcel id to excel like column name
 * 
 * @param string id
 * @return string id
 */
jexcel.getColumnNameFromId = function (cellId) {
    if (! Array.isArray(cellId)) {
        cellId = cellId.split('-');
    }

    return jexcel.getColumnName(parseInt(cellId[0])) + (parseInt(cellId[1]) + 1);
}

/**
 * Verify element inside jexcel table
 * 
 * @param string id
 * @return string id
 */
jexcel.getElement = function(element) {
    var jexcelSection = 0;
    var jexcelElement = 0;

    function path (element) {
        if (element.className) {
            if (element.classList.contains('jexcel_container')) {
                jexcelElement = element;
            }
        }

        if (element.tagName == 'THEAD') {
            jexcelSection = 1;
        } else if (element.tagName == 'TBODY') {
            jexcelSection = 2;
        }

        if (element.parentNode) {
            if (! jexcelElement) {
                path(element.parentNode);
            }
        }
    }

    path(element);

    return [ jexcelElement, jexcelSection ];
}

jexcel.doubleDigitFormat = function(v) {
    v = ''+v;
    if (v.length == 1) {
        v = '0'+v;
    }
    return v;
}

jexcel.createFromTable = function(el, options) {
    if (el.tagName != 'TABLE') {
        console.log('Element is not a table');
    } else {
        // Configuration
        if (! options) {
            options = {};
        }
        options.columns = [];
        options.data = [];

        // Colgroup
        var colgroup = el.querySelectorAll('colgroup > col');
        if (colgroup.length) {
            // Get column width
            for (var i = 0; i < colgroup.length; i++) {
                var width = colgroup[i].style.width;
                if (! width) {
                    var width = colgroup[i].getAttribute('width');
                }
                // Set column width
                if (width) {
                    if (! options.columns[i]) {
                        options.columns[i] = {}
                    }
                    options.columns[i].width = width;
                }
            }
        }

        // Parse header
        var parseHeader = function(header) {
            // Get width information
            var info = header.getBoundingClientRect();
            var width = info.width > 50 ? info.width : 50;

            // Create column option
            if (! options.columns[i]) {
                options.columns[i] = {};
            } 
            if (header.getAttribute('data-celltype')) {
                options.columns[i].type = header.getAttribute('data-celltype');
            } else {
                options.columns[i].type = 'text';
            }
            options.columns[i].width = width + 'px';
            options.columns[i].title = header.innerHTML;
            options.columns[i].align = header.style.textAlign || 'center';
        }

        // Headers
        var headers = el.querySelectorAll('thead > tr');
        if (headers.length) {
            // Get the last row in the thead
            headers = headers[headers.length-1].children;
            // Go though the headers
            for (var i = 0; i < headers.length; i++) {
                parseHeader(headers[i]);
            }
        }

        // Content
        var rowNumber = 0;
        var mergeCells = {};
        var rows = {};
        var style = {};

        var content = el.querySelectorAll('table > tr, tbody tr');
        for (var j = 0; j < content.length; j++) {
            options.data[rowNumber] = [];
            if (options.parseTableFirstRowAsHeader == true && j == 0) {
                for (var i = 0; i < content[j].children.length; i++) {
                    parseHeader(content[j].children[i]);
                }
            } else {
                for (var i = 0; i < content[j].children.length; i++) {
                    // WickedGrid formula compatibility
                    var value = content[j].children[i].getAttribute('data-formula');
                    if (value) {
                        if (value.substr(0,1) != '=') {
                            value = '=' + value;
                        }
                    } else {
                        var value = content[j].children[i].innerHTML;
                    }
                    options.data[rowNumber].push(value);

                    // Key
                    var cellName = jexcel.getColumnNameFromId([ i, j ]);

                    // Merged cells
                    var mergedColspan = parseInt(content[j].children[i].getAttribute('colspan')) || 0;
                    var mergedRowspan = parseInt(content[j].children[i].getAttribute('rowspan')) || 0;
                    if (mergedColspan || mergedRowspan) {
                        mergeCells[cellName] = [ mergedColspan || 1, mergedRowspan || 1 ];
                    }

                    // Avoid problems with hidden cells
                    if (s = content[j].children[i].style && content[j].children[i].style.display == 'none') {
                        content[j].children[i].style.display = '';
                    }
                    // Get style
                    var s = content[j].children[i].getAttribute('style');
                    if (s) {
                        style[cellName] = s;
                    }
                    // Bold
                    if (content[j].children[i].classList.contains('styleBold')) {
                        if (style[cellName]) {
                            style[cellName] += '; font-weight:bold;';
                        } else {
                            style[cellName] = 'font-weight:bold;';
                        }
                    }
                }

                // Row Height
                if (content[j].style && content[j].style.height) {
                    rows[j] = { height: content[j].style.height };
                }

                // Index
                rowNumber++;
            }
        }

        // Style
        if (Object.keys(style).length > 0) {
            //options.style = style;
        }
        // Merged
        if (Object.keys(mergeCells).length > 0) {
            options.mergeCells = mergeCells;
        }
        // Row height
        if (Object.keys(rows).length > 0) {
            options.rows = rows;
        }

        // TODO: data-hiddencolumns="3,4"
        
        // I guess in terms the better column type
        if (options.parseTableAutoCellType == true) {
            var pattern = [];
            for (var i = 0; i < options.columns.length; i++) {
                var test = true;
                var testCalendar = true;
                pattern[i] = [];
                for (var j = 0; j < options.data.length; j++) {
                    var value = options.data[j][i];
                    if (! pattern[i][value]) {
                        pattern[i][value] = 0;
                    }
                    pattern[i][value]++;
                    if (value.length > 25) {
                        test = false;
                    }
                    if (value.length == 10) {
                        if (! (value.substr(4,1) == '-' && value.substr(7,1) == '-')) {
                            testCalendar = false;
                        }
                    } else {
                        testCalendar = false;
                    }
                }

                var keys = Object.keys(pattern[i]).length;
                if (testCalendar) {
                    options.columns[i].type = 'calendar';
                } else if (test == true && keys > 1 && keys <= parseInt(options.data.length * 0.1)) {
                    options.columns[i].type = 'dropdown';
                    options.columns[i].source = Object.keys(pattern[i]);
                }
            }
        }

        return options;
    }
}

/**
 * Jquery Support
 */
if (typeof(jQuery) != 'undefined') {
    (function($){
        $.fn.jexcel = function(method) {
            var spreadsheetContainer = $(this).get(0);
            if (! spreadsheetContainer.jexcel) {
                return jexcel($(this).get(0), arguments[0]);
            } else {
                return spreadsheetContainer.jexcel[method].apply(this, Array.prototype.slice.call( arguments, 1 ));
            }
        };

    })(jQuery);
}
// Based on sutoiku work (https://github.com/sutoiku)

var error = (function() {
        var exports = {};
    
        exports.nil = new Error('#NULL!');
    exports.div0 = new Error('#DIV/0!');
    exports.value = new Error('#VALUE!');
    exports.ref = new Error('#REF!');
    exports.name = new Error('#NAME?');
    exports.num = new Error('#NUM!');
    exports.na = new Error('#N/A');
    exports.error = new Error('#ERROR!');
    exports.data = new Error('#GETTING_DATA');

    return exports;
})();

var utils = (function() {
    var exports = {};

    exports.flattenShallow = function(array) {
        if (!array || !array.reduce) {
            return array;
        }

        return array.reduce(function(a, b) {
            var aIsArray = Array.isArray(a);
            var bIsArray = Array.isArray(b);

            if (aIsArray && bIsArray) {
                return a.concat(b);
            }
            if (aIsArray) {
                a.push(b);

                return a;
            }
            if (bIsArray) {
                return [ a ].concat(b);
            }

            return [ a, b ];
        });
    };

    exports.isFlat = function(array) {
        if (!array) {
            return false;
        }

        for (var i = 0; i < array.length; ++i) {
            if (Array.isArray(array[i])) {
                return false;
            }
        }

        return true;
    };

    exports.flatten = function() {
        var result = exports.argsToArray.apply(null, arguments);

        while (!exports.isFlat(result)) {
            result = exports.flattenShallow(result);
        }

        return result;
    };

    exports.argsToArray = function(args) {
        var result = [];

        exports.arrayEach(args, function(value) {
            result.push(value);
        });

        return result;
    };

    exports.numbers = function() {
        var possibleNumbers = this.flatten.apply(null, arguments);
        return possibleNumbers.filter(function(el) {
            return typeof el === 'number';
        });
    };

    exports.cleanFloat = function(number) {
        var power = 1e14;
        return Math.round(number * power) / power;
    };

    exports.parseBool = function(bool) {
        if (typeof bool === 'boolean') {
            return bool;
        }

        if (bool instanceof Error) {
            return bool;
        }

        if (typeof bool === 'number') {
            return bool !== 0;
        }

        if (typeof bool === 'string') {
            var up = bool.toUpperCase();
            if (up === 'TRUE') {
                return true;
            }

            if (up === 'FALSE') {
                return false;
            }
        }

        if (bool instanceof Date && !isNaN(bool)) {
            return true;
        }

        return error.value;
    };

    exports.parseNumber = function(string) {
        if (string === undefined || string === '') {
            return error.value;
        }
        if (!isNaN(string)) {
            return parseFloat(string);
        }

        return error.value;
    };

    exports.parseNumberArray = function(arr) {
        var len;

        if (!arr || (len = arr.length) === 0) {
            return error.value;
        }

        var parsed;

        while (len--) {
            parsed = exports.parseNumber(arr[len]);
            if (parsed === error.value) {
                return parsed;
            }
            arr[len] = parsed;
        }

        return arr;
    };

    exports.parseMatrix = function(matrix) {
        var n;

        if (!matrix || (n = matrix.length) === 0) {
            return error.value;
        }
        var pnarr;

        for (var i = 0; i < matrix.length; i++) {
            pnarr = exports.parseNumberArray(matrix[i]);
            matrix[i] = pnarr;

            if (pnarr instanceof Error) {
                return pnarr;
            }
        }

        return matrix;
    };

    var d1900 = new Date(Date.UTC(1900, 0, 1));
    exports.parseDate = function(date) {
        if (!isNaN(date)) {
            if (date instanceof Date) {
                return new Date(date);
            }
            var d = parseInt(date, 10);
            if (d < 0) {
                return error.num;
            }
            if (d <= 60) {
                return new Date(d1900.getTime() + (d - 1) * 86400000);
            }
            return new Date(d1900.getTime() + (d - 2) * 86400000);
        }
        if (typeof date === 'string') {
            date = new Date(date);
            if (!isNaN(date)) {
                return date;
            }
        }
        return error.value;
    };

    exports.parseDateArray = function(arr) {
        var len = arr.length;
        var parsed;
        while (len--) {
            parsed = this.parseDate(arr[len]);
            if (parsed === error.value) {
                return parsed;
            }
            arr[len] = parsed;
        }
        return arr;
    };

    exports.anyIsError = function() {
        var n = arguments.length;
        while (n--) {
            if (arguments[n] instanceof Error) {
                return true;
            }
        }
        return false;
    };

    exports.arrayValuesToNumbers = function(arr) {
        var n = arr.length;
        var el;
        while (n--) {
            el = arr[n];
            if (typeof el === 'number') {
                continue;
            }
            if (el === true) {
                arr[n] = 1;
                continue;
            }
            if (el === false) {
                arr[n] = 0;
                continue;
            }
            if (typeof el === 'string') {
                var number = this.parseNumber(el);
                if (number instanceof Error) {
                    arr[n] = 0;
                } else {
                    arr[n] = number;
                }
            }
        }
        return arr;
    };

    exports.rest = function(array, idx) {
        idx = idx || 1;
        if (!array || typeof array.slice !== 'function') {
            return array;
        }
        return array.slice(idx);
    };

    exports.initial = function(array, idx) {
        idx = idx || 1;
        if (!array || typeof array.slice !== 'function') {
            return array;
        }
        return array.slice(0, array.length - idx);
    };

    exports.arrayEach = function(array, iteratee) {
        var index = -1, length = array.length;

        while (++index < length) {
            if (iteratee(array[index], index, array) === false) {
                break;
            }
        }

        return array;
    };

    exports.transpose = function(matrix) {
        if (!matrix) {
            return error.value;
        }

        return matrix[0].map(function(col, i) {
            return matrix.map(function(row) {
                return row[i];
            });
        });
    };

    return exports;
})();

jexcel.methods = {};

jexcel.methods.datetime = (function() {
    var exports = {};

    var d1900 = new Date(1900, 0, 1);
    var WEEK_STARTS = [
        undefined,
        0,
        1,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        1,
        2,
        3,
        4,
        5,
        6,
        0
    ];
    var WEEK_TYPES = [
        [],
        [1, 2, 3, 4, 5, 6, 7],
        [7, 1, 2, 3, 4, 5, 6],
        [6, 0, 1, 2, 3, 4, 5],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [7, 1, 2, 3, 4, 5, 6],
        [6, 7, 1, 2, 3, 4, 5],
        [5, 6, 7, 1, 2, 3, 4],
        [4, 5, 6, 7, 1, 2, 3],
        [3, 4, 5, 6, 7, 1, 2],
        [2, 3, 4, 5, 6, 7, 1],
        [1, 2, 3, 4, 5, 6, 7]
    ];
    var WEEKEND_TYPES = [
        [],
        [6, 0],
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 4],
        [4, 5],
        [5, 6],
        undefined,
        undefined,
        undefined, [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
        [4, 4],
        [5, 5],
        [6, 6]
    ];

    exports.DATE = function(year, month, day) {
        year = utils.parseNumber(year);
        month = utils.parseNumber(month);
        day = utils.parseNumber(day);
        if (utils.anyIsError(year, month, day)) {
            return error.value;
        }
        if (year < 0 || month < 0 || day < 0) {
            return error.num;
        }
        var date = new Date(year, month - 1, day);
        return date;
    };

    exports.DATEVALUE = function(date_text) {
        if (typeof date_text !== 'string') {
            return error.value;
        }
        var date = Date.parse(date_text);
        if (isNaN(date)) {
            return error.value;
        }
        if (date <= -2203891200000) {
            return (date - d1900) / 86400000 + 1;
        }
        return (date - d1900) / 86400000 + 2;
    };

    exports.DAY = function(serial_number) {
        var date = utils.parseDate(serial_number);
        if (date instanceof Error) {
            return date;
        }
        return date.getDate();
    };

    exports.DAYS = function(end_date, start_date) {
        end_date = utils.parseDate(end_date);
        start_date = utils.parseDate(start_date);
        if (end_date instanceof Error) {
            return end_date;
        }
        if (start_date instanceof Error) {
            return start_date;
        }
        return serial(end_date) - serial(start_date);
    };

    exports.DAYS360 = function(start_date, end_date, method) {
    };

    exports.EDATE = function(start_date, months) {
        start_date = utils.parseDate(start_date);
        if (start_date instanceof Error) {
            return start_date;
        }
        if (isNaN(months)) {
            return error.value;
        }
        months = parseInt(months, 10);
        start_date.setMonth(start_date.getMonth() + months);
        return serial(start_date);
    };

    exports.EOMONTH = function(start_date, months) {
        start_date = utils.parseDate(start_date);
        if (start_date instanceof Error) {
            return start_date;
        }
        if (isNaN(months)) {
            return error.value;
        }
        months = parseInt(months, 10);
        return serial(new Date(start_date.getFullYear(), start_date.getMonth() + months + 1, 0));
    };

    exports.HOUR = function(serial_number) {
        serial_number = utils.parseDate(serial_number);
        if (serial_number instanceof Error) {
            return serial_number;
        }
        return serial_number.getHours();
    };

    exports.INTERVAL = function(second) {
        if (typeof second !== 'number' && typeof second !== 'string') {
            return error.value;
        } else {
            second = parseInt(second, 10);
        }

        var year  = Math.floor(second/946080000);
        second    = second%946080000;
        var month = Math.floor(second/2592000);
        second    = second%2592000;
        var day   = Math.floor(second/86400);
        second    = second%86400;

        var hour  = Math.floor(second/3600);
        second    = second%3600;
        var min   = Math.floor(second/60);
        second    = second%60;
        var sec   = second;

        year  = (year  > 0) ? year  + 'Y' : '';
        month = (month > 0) ? month + 'M' : '';
        day   = (day   > 0) ? day   + 'D' : '';
        hour  = (hour  > 0) ? hour  + 'H' : '';
        min   = (min   > 0) ? min   + 'M' : '';
        sec   = (sec   > 0) ? sec   + 'S' : '';

        return 'P' + year + month + day + 'T' + hour + min + sec;
    };

    exports.ISOWEEKNUM = function(date) {
        date = utils.parseDate(date);
        if (date instanceof Error) {
            return date;
        }

        date.setHours(0, 0, 0);
        date.setDate(date.getDate() + 4 - (date.getDay() || 7));
        var yearStart = new Date(date.getFullYear(), 0, 1);
        return Math.ceil((((date - yearStart) / 86400000) + 1) / 7);
    };

    exports.MINUTE = function(serial_number) {
        serial_number = utils.parseDate(serial_number);
        if (serial_number instanceof Error) {
            return serial_number;
        }
        return serial_number.getMinutes();
    };

    exports.MONTH = function(serial_number) {
        serial_number = utils.parseDate(serial_number);
        if (serial_number instanceof Error) {
            return serial_number;
        }
        return serial_number.getMonth() + 1;
    };

    exports.NETWORKDAYS = function(start_date, end_date, holidays) {
    };

    exports.NETWORKDAYS.INTL = function(start_date, end_date, weekend, holidays) {
    };

    exports.NOW = function() {
        return new Date();
    };

    exports.SECOND = function(serial_number) {
        serial_number = utils.parseDate(serial_number);
        if (serial_number instanceof Error) {
            return serial_number;
        }
        return serial_number.getSeconds();
    };

    exports.TIME = function(hour, minute, second) {
        hour = utils.parseNumber(hour);
        minute = utils.parseNumber(minute);
        second = utils.parseNumber(second);
        if (utils.anyIsError(hour, minute, second)) {
            return error.value;
        }
        if (hour < 0 || minute < 0 || second < 0) {
            return error.num;
        }
        return (3600 * hour + 60 * minute + second) / 86400;
    };

    exports.TIMEVALUE = function(time_text) {
        time_text = utils.parseDate(time_text);
        if (time_text instanceof Error) {
            return time_text;
        }
        return (3600 * time_text.getHours() + 60 * time_text.getMinutes() + time_text.getSeconds()) / 86400;
    };

    exports.TODAY = function() {
        return new Date();
    };

    exports.WEEKDAY = function(serial_number, return_type) {
        serial_number = utils.parseDate(serial_number);
        if (serial_number instanceof Error) {
            return serial_number;
        }
        if (return_type === undefined) {
            return_type = 1;
        }
        var day = serial_number.getDay();
        return WEEK_TYPES[return_type][day];
    };

    exports.WEEKNUM = function(serial_number, return_type) {
    };

    exports.WORKDAY = function(start_date, days, holidays) {
    };

    exports.WORKDAY.INTL = function(start_date, days, weekend, holidays) {
    };

    exports.YEAR = function(serial_number) {
        serial_number = utils.parseDate(serial_number);
        if (serial_number instanceof Error) {
            return serial_number;
        }
        return serial_number.getFullYear();
    };

    function isLeapYear(year) {
        return new Date(year, 1, 29).getMonth() === 1;
    }

    exports.YEARFRAC = function(start_date, end_date, basis) {
    };

    function serial(date) {
        var addOn = (date > -2203891200000)?2:1;
        return (date - d1900) / 86400000 + addOn;
    }

    return exports;
})();

jexcel.methods.database = (function() {
    var exports = {};

    function compact(array) {
        if (!array) {
            return array;
        }
        var result = [];
        for (var i = 0; i < array.length; ++i) {
            if (!array[i]) {
                continue;
            }
            result.push(array[i]);
        }
        return result;
    }

    exports.FINDFIELD = function(database, title) {
        var index = null;
        for (var i = 0; i < database.length; i++) {
            if (database[i][0] === title) {
                index = i;
                break;
            }
        }

        // Return error if the input field title is incorrect
        if (index == null) {
            return error.value;
        }
        return index;
    };

    function findResultIndex(database, criterias) {
        var matches = {};
        for (var i = 1; i < database[0].length; ++i) {
            matches[i] = true;
        }
        var maxCriteriaLength = criterias[0].length;
        for (i = 1; i < criterias.length; ++i) {
            if (criterias[i].length > maxCriteriaLength) {
                maxCriteriaLength = criterias[i].length;
            }
        }

        for (var k = 1; k < database.length; ++k) {
            for (var l = 1; l < database[k].length; ++l) {
                var currentCriteriaResult = false;
                var hasMatchingCriteria = false;
                for (var j = 0; j < criterias.length; ++j) {
                    var criteria = criterias[j];
                    if (criteria.length < maxCriteriaLength) {
                        continue;
                    }

                    var criteriaField = criteria[0];
                    if (database[k][0] !== criteriaField) {
                        continue;
                    }
                    hasMatchingCriteria = true;
                    for (var p = 1; p < criteria.length; ++p) {
                        currentCriteriaResult = currentCriteriaResult
                                || eval(database[k][l] + criteria[p]); // jshint
                                                                        // ignore:line
                    }
                }
                if (hasMatchingCriteria) {
                    matches[l] = matches[l] && currentCriteriaResult;
                }
            }
        }

        var result = [];
        for (var n = 0; n < database[0].length; ++n) {
            if (matches[n]) {
                result.push(n - 1);
            }
        }
        return result;
    }

    // Database functions
    exports.DAVERAGE = function(database, field, criteria) {
        // Return error if field is not a number and not a string
        if (isNaN(field) && (typeof field !== "string")) {
            return error.value;
        }
        var resultIndexes = findResultIndex(database, criteria);
        var targetFields = [];
        if (typeof field === "string") {
            var index = exports.FINDFIELD(database, field);
            targetFields = utils.rest(database[index]);
        } else {
            targetFields = utils.rest(database[field]);
        }
        var sum = 0;
        for (var i = 0; i < resultIndexes.length; i++) {
            sum += targetFields[resultIndexes[i]];
        }
        return resultIndexes.length === 0 ? error.div0 : sum / resultIndexes.length;
    };

    exports.DCOUNT = function(database, field, criteria) {
    };

    exports.DCOUNTA = function(database, field, criteria) {
    };

    exports.DGET = function(database, field, criteria) {
        // Return error if field is not a number and not a string
        if (isNaN(field) && (typeof field !== "string")) {
            return error.value;
        }
        var resultIndexes = findResultIndex(database, criteria);
        var targetFields = [];
        if (typeof field === "string") {
            var index = exports.FINDFIELD(database, field);
            targetFields = utils.rest(database[index]);
        } else {
            targetFields = utils.rest(database[field]);
        }
        // Return error if no record meets the criteria
        if (resultIndexes.length === 0) {
            return error.value;
        }
        // Returns the #NUM! error value because more than one record meets the
        // criteria
        if (resultIndexes.length > 1) {
            return error.num;
        }

        return targetFields[resultIndexes[0]];
    };

    exports.DMAX = function(database, field, criteria) {
        // Return error if field is not a number and not a string
        if (isNaN(field) && (typeof field !== "string")) {
            return error.value;
        }
        var resultIndexes = findResultIndex(database, criteria);
        var targetFields = [];
        if (typeof field === "string") {
            var index = exports.FINDFIELD(database, field);
            targetFields = utils.rest(database[index]);
        } else {
            targetFields = utils.rest(database[field]);
        }
        var maxValue = targetFields[resultIndexes[0]];
        for (var i = 1; i < resultIndexes.length; i++) {
            if (maxValue < targetFields[resultIndexes[i]]) {
                maxValue = targetFields[resultIndexes[i]];
            }
        }
        return maxValue;
    };

    exports.DMIN = function(database, field, criteria) {
        // Return error if field is not a number and not a string
        if (isNaN(field) && (typeof field !== "string")) {
            return error.value;
        }
        var resultIndexes = findResultIndex(database, criteria);
        var targetFields = [];
        if (typeof field === "string") {
            var index = exports.FINDFIELD(database, field);
            targetFields = utils.rest(database[index]);
        } else {
            targetFields = utils.rest(database[field]);
        }
        var minValue = targetFields[resultIndexes[0]];
        for (var i = 1; i < resultIndexes.length; i++) {
            if (minValue > targetFields[resultIndexes[i]]) {
                minValue = targetFields[resultIndexes[i]];
            }
        }
        return minValue;
    };

    exports.DPRODUCT = function(database, field, criteria) {
        // Return error if field is not a number and not a string
        if (isNaN(field) && (typeof field !== "string")) {
            return error.value;
        }
        var resultIndexes = findResultIndex(database, criteria);
        var targetFields = [];
        if (typeof field === "string") {
            var index = exports.FINDFIELD(database, field);
            targetFields = utils.rest(database[index]);
        } else {
            targetFields = utils.rest(database[field]);
        }
        var targetValues = [];
        for (var i = 0; i < resultIndexes.length; i++) {
            targetValues[i] = targetFields[resultIndexes[i]];
        }
        targetValues = compact(targetValues);
        var result = 1;
        for (i = 0; i < targetValues.length; i++) {
            result *= targetValues[i];
        }
        return result;
    };

    exports.DSTDEV = function(database, field, criteria) {
    };

    exports.DSTDEVP = function(database, field, criteria) {
    };

    exports.DSUM = function(database, field, criteria) {
    };

    exports.DVAR = function(database, field, criteria) {
    };

    exports.DVARP = function(database, field, criteria) {
    };

    exports.MATCH = function(lookupValue, lookupArray, matchType) {
        if (!lookupValue && !lookupArray) {
            return error.na;
        }
        if (arguments.length === 2) {
            matchType = 1;
        }
        if (!(lookupArray instanceof Array)) {
            return error.na;
        }
        if (matchType !== -1 && matchType !== 0 && matchType !== 1) {
            return error.na;
        }

        var index;
        var indexValue;

        for (var idx = 0; idx < lookupArray.length; idx++) {
            if (matchType === 1) {
                if (lookupArray[idx] === lookupValue) {
                    return idx + 1;
                } else if (lookupArray[idx] < lookupValue) {
                    if (!indexValue) {
                        index = idx + 1;
                        indexValue = lookupArray[idx];
                    } else if (lookupArray[idx] > indexValue) {
                        index = idx + 1;
                        indexValue = lookupArray[idx];
                    }
                }
            } else if (matchType === 0) {
                if (typeof lookupValue === 'string') {
                    lookupValue = lookupValue.replace(/\?/g, '.');
                    if (lookupArray[idx].toLowerCase().match(lookupValue.toLowerCase())) {
                        return idx + 1;
                    }
                } else {
                    if (lookupArray[idx] === lookupValue) {
                        return idx + 1;
                    }
                }
            } else if (matchType === -1) {
                if (lookupArray[idx] === lookupValue) {
                    return idx + 1;
                } else if (lookupArray[idx] > lookupValue) {
                    if (!indexValue) {
                        index = idx + 1;
                        indexValue = lookupArray[idx];
                    } else if (lookupArray[idx] < indexValue) {
                        index = idx + 1;
                        indexValue = lookupArray[idx];
                    }
                }
            }
        }

        return index ? index : error.na;
    };

    return exports;
})();

jexcel.methods.engineering = (function() {
    var exports = {};

    function isValidBinaryNumber(number) {
        return (/^[01]{1,10}$/).test(number);
    }

    exports.BESSELI = function(x, n) {
    };

    exports.BESSELJ = function(x, n) {
    };

    exports.BESSELK = function(x, n) {
    };

    exports.BESSELY = function(x, n) {
    };

    exports.BIN2DEC = function(number) {
        // Return error if number is not binary or contains more than 10
        // characters (10 digits)
        if (!isValidBinaryNumber(number)) {
            return error.num;
        }

        // Convert binary number to decimal
        var result = parseInt(number, 2);

        // Handle negative numbers
        var stringified = number.toString();
        if (stringified.length === 10 && stringified.substring(0, 1) === '1') {
            return parseInt(stringified.substring(1), 2) - 512;
        } else {
            return result;
        }
    };

    exports.BIN2HEX = function(number, places) {
        // Return error if number is not binary or contains more than 10
        // characters (10 digits)
        if (!isValidBinaryNumber(number)) {
            return error.num;
        }

        // Ignore places and return a 10-character hexadecimal number if number
        // is negative
        var stringified = number.toString();
        if (stringified.length === 10 && stringified.substring(0, 1) === '1') {
            return (1099511627264 + parseInt(stringified.substring(1), 2)).toString(16);
        }

        // Convert binary number to hexadecimal
        var result = parseInt(number, 2).toString(16);

        // Return hexadecimal number using the minimum number of characters
        // necessary if places is undefined
        if (places === undefined) {
            return result;
        } else {
            // Return error if places is nonnumeric
            if (isNaN(places)) {
              return error.value;
            }

            // Return error if places is negative
            if (places < 0) {
              return error.num;
            }

            // Truncate places in case it is not an integer
            places = Math.floor(places);

            // Pad return value with leading 0s (zeros) if necessary (using
            // Underscore.string)
            return (places >= result.length) ? REPT('0', places - result.length) + result : error.num;
        }
    };

    exports.BIN2OCT = function(number, places) {
        // Return error if number is not binary or contains more than 10
        // characters (10 digits)
        if (!isValidBinaryNumber(number)) {
            return error.num;
        }

        // Ignore places and return a 10-character octal number if number is
        // negative
        var stringified = number.toString();
        if (stringified.length === 10 && stringified.substring(0, 1) === '1') {
            return (1073741312 + parseInt(stringified.substring(1), 2)).toString(8);
        }

        // Convert binary number to octal
        var result = parseInt(number, 2).toString(8);

        // Return octal number using the minimum number of characters necessary
        // if places is undefined
        if (places === undefined) {
            return result;
        } else {
            // Return error if places is nonnumeric
            if (isNaN(places)) {
              return error.value;
            }

            // Return error if places is negative
            if (places < 0) {
              return error.num;
            }

            // Truncate places in case it is not an integer
            places = Math.floor(places);

            // Pad return value with leading 0s (zeros) if necessary (using
            // Underscore.string)
            return (places >= result.length) ? REPT('0', places - result.length) + result : error.num;
        }
    };

    exports.BITAND = function(number1, number2) {
        // Return error if either number is a non-numeric value
        number1 = utils.parseNumber(number1);
        number2 = utils.parseNumber(number2);
        if (utils.anyIsError(number1, number2)) {
            return error.value;
        }

        // Return error if either number is less than 0
        if (number1 < 0 || number2 < 0) {
            return error.num;
        }

        // Return error if either number is a non-integer
        if (Math.floor(number1) !== number1 || Math.floor(number2) !== number2) {
            return error.num;
        }

        // Return error if either number is greater than (2^48)-1
        if (number1 > 281474976710655 || number2 > 281474976710655) {
            return error.num;
        }

        // Return bitwise AND of two numbers
        return number1 & number2;
    };

    exports.BITLSHIFT = function(number, shift) {
        number = utils.parseNumber(number);
        shift = utils.parseNumber(shift);
        if (utils.anyIsError(number, shift)) {
            return error.value;
        }

        // Return error if number is less than 0
        if (number < 0) {
            return error.num;
        }

        // Return error if number is a non-integer
        if (Math.floor(number) !== number) {
            return error.num;
        }

        // Return error if number is greater than (2^48)-1
        if (number > 281474976710655) {
            return error.num;
        }

        // Return error if the absolute value of shift is greater than 53
        if (Math.abs(shift) > 53) {
            return error.num;
        }

        // Return number shifted by shift bits to the left or to the right if
        // shift is negative
        return (shift >= 0) ? number << shift : number >> -shift;
    };

    exports.BITOR = function(number1, number2) {
        number1 = utils.parseNumber(number1);
        number2 = utils.parseNumber(number2);
        if (utils.anyIsError(number1, number2)) {
            return error.value;
        }

        // Return error if either number is less than 0
        if (number1 < 0 || number2 < 0) {
            return error.num;
        }

        // Return error if either number is a non-integer
        if (Math.floor(number1) !== number1 || Math.floor(number2) !== number2) {
            return error.num;
        }

        // Return error if either number is greater than (2^48)-1
        if (number1 > 281474976710655 || number2 > 281474976710655) {
            return error.num;
        }

        // Return bitwise OR of two numbers
        return number1 | number2;
    };

    exports.BITRSHIFT = function(number, shift) {
        number = utils.parseNumber(number);
        shift = utils.parseNumber(shift);
        if (utils.anyIsError(number, shift)) {
            return error.value;
        }

        // Return error if number is less than 0
        if (number < 0) {
            return error.num;
        }

        // Return error if number is a non-integer
        if (Math.floor(number) !== number) {
            return error.num;
        }

        // Return error if number is greater than (2^48)-1
        if (number > 281474976710655) {
            return error.num;
        }

        // Return error if the absolute value of shift is greater than 53
        if (Math.abs(shift) > 53) {
            return error.num;
        }

        // Return number shifted by shift bits to the right or to the left if
        // shift is negative
        return (shift >= 0) ? number >> shift : number << -shift;
    };

    exports.BITXOR = function(number1, number2) {
        number1 = utils.parseNumber(number1);
        number2 = utils.parseNumber(number2);
        if (utils.anyIsError(number1, number2)) {
            return error.value;
        }

        // Return error if either number is less than 0
        if (number1 < 0 || number2 < 0) {
            return error.num;
        }

        // Return error if either number is a non-integer
        if (Math.floor(number1) !== number1 || Math.floor(number2) !== number2) {
            return error.num;
        }

        // Return error if either number is greater than (2^48)-1
        if (number1 > 281474976710655 || number2 > 281474976710655) {
            return error.num;
        }

        // Return bitwise XOR of two numbers
        return number1 ^ number2;
    };

    exports.COMPLEX = function(real, imaginary, suffix) {
        real = utils.parseNumber(real);
        imaginary = utils.parseNumber(imaginary);
        if (utils.anyIsError(real, imaginary)) {
            return real;
        }

        // Set suffix
        suffix = (suffix === undefined) ? 'i' : suffix;

        // Return error if suffix is neither "i" nor "j"
        if (suffix !== 'i' && suffix !== 'j') {
            return error.value;
        }

        // Return complex number
        if (real === 0 && imaginary === 0) {
            return 0;
        } else if (real === 0) {
            return (imaginary === 1) ? suffix : imaginary.toString() + suffix;
        } else if (imaginary === 0) {
            return real.toString();
        } else {
            var sign = (imaginary > 0) ? '+' : '';
            return real.toString() + sign + ((imaginary === 1) ? suffix : imaginary.toString() + suffix);
        }
    };

    exports.CONVERT = function(number, from_unit, to_unit) {
        number = utils.parseNumber(number);
        if (number instanceof Error) {
            return number;
        }

        // List of units supported by CONVERT and units defined by the
        // International System of Units
        // [Name, Symbol, Alternate symbols, Quantity, ISU, CONVERT, Conversion
        // ratio]
        var units = [
            ["a.u. of action", "?", null, "action", false, false, 1.05457168181818e-34],
            ["a.u. of charge", "e", null, "electric_charge", false, false, 1.60217653141414e-19],
            ["a.u. of energy", "Eh", null, "energy", false, false, 4.35974417757576e-18],
            ["a.u. of length", "a?", null, "length", false, false, 5.29177210818182e-11],
            ["a.u. of mass", "m?", null, "mass", false, false, 9.10938261616162e-31],
            ["a.u. of time", "?/Eh", null, "time", false, false, 2.41888432650516e-17],
            ["admiralty knot", "admkn", null, "speed", false, true, 0.514773333],
            ["ampere", "A", null, "electric_current", true, false, 1],
            ["ampere per meter", "A/m", null, "magnetic_field_intensity", true, false, 1],
            ["ångström", "Å", ["ang"], "length", false, true, 1e-10],
            ["are", "ar", null, "area", false, true, 100],
            ["astronomical unit", "ua", null, "length", false, false, 1.49597870691667e-11],
            ["bar", "bar", null, "pressure", false, false, 100000],
            ["barn", "b", null, "area", false, false, 1e-28],
            ["becquerel", "Bq", null, "radioactivity", true, false, 1],
            ["bit", "bit", ["b"], "information", false, true, 1],
            ["btu", "BTU", ["btu"], "energy", false, true, 1055.05585262],
            ["byte", "byte", null, "information", false, true, 8],
            ["candela", "cd", null, "luminous_intensity", true, false, 1],
            ["candela per square metre", "cd/m?", null, "luminance", true, false, 1],
            ["coulomb", "C", null, "electric_charge", true, false, 1],
            ["cubic ångström", "ang3", ["ang^3"], "volume", false, true, 1e-30],
            ["cubic foot", "ft3", ["ft^3"], "volume", false, true, 0.028316846592],
            ["cubic inch", "in3", ["in^3"], "volume", false, true, 0.000016387064],
            ["cubic light-year", "ly3", ["ly^3"], "volume", false, true, 8.46786664623715e-47],
            ["cubic metre", "m?", null, "volume", true, true, 1],
            ["cubic mile", "mi3", ["mi^3"], "volume", false, true, 4168181825.44058],
            ["cubic nautical mile", "Nmi3", ["Nmi^3"], "volume", false, true, 6352182208],
            ["cubic Pica", "Pica3", ["Picapt3", "Pica^3", "Picapt^3"], "volume", false, true, 7.58660370370369e-8],
            ["cubic yard", "yd3", ["yd^3"], "volume", false, true, 0.764554857984],
            ["cup", "cup", null, "volume", false, true, 0.0002365882365],
            ["dalton", "Da", ["u"], "mass", false, false, 1.66053886282828e-27],
            ["day", "d", ["day"], "time", false, true, 86400],
            ["degree", "°", null, "angle", false, false, 0.0174532925199433],
            ["degrees Rankine", "Rank", null, "temperature", false, true, 0.555555555555556],
            ["dyne", "dyn", ["dy"], "force", false, true, 0.00001],
            ["electronvolt", "eV", ["ev"], "energy", false, true, 1.60217656514141],
            ["ell", "ell", null, "length", false, true, 1.143],
            ["erg", "erg", ["e"], "energy", false, true, 1e-7],
            ["farad", "F", null, "electric_capacitance", true, false, 1],
            ["fluid ounce", "oz", null, "volume", false, true, 0.0000295735295625],
            ["foot", "ft", null, "length", false, true, 0.3048],
            ["foot-pound", "flb", null, "energy", false, true, 1.3558179483314],
            ["gal", "Gal", null, "acceleration", false, false, 0.01],
            ["gallon", "gal", null, "volume", false, true, 0.003785411784],
            ["gauss", "G", ["ga"], "magnetic_flux_density", false, true, 1],
            ["grain", "grain", null, "mass", false, true, 0.0000647989],
            ["gram", "g", null, "mass", false, true, 0.001],
            ["gray", "Gy", null, "absorbed_dose", true, false, 1],
            ["gross registered ton", "GRT", ["regton"], "volume", false, true, 2.8316846592],
            ["hectare", "ha", null, "area", false, true, 10000],
            ["henry", "H", null, "inductance", true, false, 1],
            ["hertz", "Hz", null, "frequency", true, false, 1],
            ["horsepower", "HP", ["h"], "power", false, true, 745.69987158227],
            ["horsepower-hour", "HPh", ["hh", "hph"], "energy", false, true, 2684519.538],
            ["hour", "h", ["hr"], "time", false, true, 3600],
            ["imperial gallon (U.K.)", "uk_gal", null, "volume", false, true, 0.00454609],
            ["imperial hundredweight", "lcwt", ["uk_cwt", "hweight"], "mass", false, true, 50.802345],
            ["imperial quart (U.K)", "uk_qt", null, "volume", false, true, 0.0011365225],
            ["imperial ton", "brton", ["uk_ton", "LTON"], "mass", false, true, 1016.046909],
            ["inch", "in", null, "length", false, true, 0.0254],
            ["international acre", "uk_acre", null, "area", false, true, 4046.8564224],
            ["IT calorie", "cal", null, "energy", false, true, 4.1868],
            ["joule", "J", null, "energy", true, true, 1],
            ["katal", "kat", null, "catalytic_activity", true, false, 1],
            ["kelvin", "K", ["kel"], "temperature", true, true, 1],
            ["kilogram", "kg", null, "mass", true, true, 1],
            ["knot", "kn", null, "speed", false, true, 0.514444444444444],
            ["light-year", "ly", null, "length", false, true, 9460730472580800],
            ["litre", "L", ["l", "lt"], "volume", false, true, 0.001],
            ["lumen", "lm", null, "luminous_flux", true, false, 1],
            ["lux", "lx", null, "illuminance", true, false, 1],
            ["maxwell", "Mx", null, "magnetic_flux", false, false, 1e-18],
            ["measurement ton", "MTON", null, "volume", false, true, 1.13267386368],
            ["meter per hour", "m/h", ["m/hr"], "speed", false, true, 0.00027777777777778],
            ["meter per second", "m/s", ["m/sec"], "speed", true, true, 1],
            ["meter per second squared", "m?s??", null, "acceleration", true, false, 1],
            ["parsec", "pc", ["parsec"], "length", false, true, 30856775814671900],
            ["meter squared per second", "m?/s", null, "kinematic_viscosity", true, false, 1],
            ["metre", "m", null, "length", true, true, 1],
            ["miles per hour", "mph", null, "speed", false, true, 0.44704],
            ["millimetre of mercury", "mmHg", null, "pressure", false, false, 133.322],
            ["minute", "?", null, "angle", false, false, 0.000290888208665722],
            ["minute", "min", ["mn"], "time", false, true, 60],
            ["modern teaspoon", "tspm", null, "volume", false, true, 0.000005],
            ["mole", "mol", null, "amount_of_substance", true, false, 1],
            ["morgen", "Morgen", null, "area", false, true, 2500],
            ["n.u. of action", "?", null, "action", false, false, 1.05457168181818e-34],
            ["n.u. of mass", "m?", null, "mass", false, false, 9.10938261616162e-31],
            ["n.u. of speed", "c?", null, "speed", false, false, 299792458],
            ["n.u. of time", "?/(me?c??)", null, "time", false, false, 1.28808866778687e-21],
            ["nautical mile", "M", ["Nmi"], "length", false, true, 1852],
            ["newton", "N", null, "force", true, true, 1],
            ["œrsted", "Oe ", null, "magnetic_field_intensity", false, false, 79.5774715459477],
            ["ohm", "Ω", null, "electric_resistance", true, false, 1],
            ["ounce mass", "ozm", null, "mass", false, true, 0.028349523125],
            ["pascal", "Pa", null, "pressure", true, false, 1],
            ["pascal second", "Pa?s", null, "dynamic_viscosity", true, false, 1],
            ["pferdestärke", "PS", null, "power", false, true, 735.49875],
            ["phot", "ph", null, "illuminance", false, false, 0.0001],
            ["pica (1/6 inch)", "pica", null, "length", false, true, 0.00035277777777778],
            ["pica (1/72 inch)", "Pica", ["Picapt"], "length", false, true, 0.00423333333333333],
            ["poise", "P", null, "dynamic_viscosity", false, false, 0.1],
            ["pond", "pond", null, "force", false, true, 0.00980665],
            ["pound force", "lbf", null, "force", false, true, 4.4482216152605],
            ["pound mass", "lbm", null, "mass", false, true, 0.45359237],
            ["quart", "qt", null, "volume", false, true, 0.000946352946],
            ["radian", "rad", null, "angle", true, false, 1],
            ["second", "?", null, "angle", false, false, 0.00000484813681109536],
            ["second", "s", ["sec"], "time", true, true, 1],
            ["short hundredweight", "cwt", ["shweight"], "mass", false, true, 45.359237],
            ["siemens", "S", null, "electrical_conductance", true, false, 1],
            ["sievert", "Sv", null, "equivalent_dose", true, false, 1],
            ["slug", "sg", null, "mass", false, true, 14.59390294],
            ["square ångström", "ang2", ["ang^2"], "area", false, true, 1e-20],
            ["square foot", "ft2", ["ft^2"], "area", false, true, 0.09290304],
            ["square inch", "in2", ["in^2"], "area", false, true, 0.00064516],
            ["square light-year", "ly2", ["ly^2"], "area", false, true, 8.95054210748189e+31],
            ["square meter", "m?", null, "area", true, true, 1],
            ["square mile", "mi2", ["mi^2"], "area", false, true, 2589988.110336],
            ["square nautical mile", "Nmi2", ["Nmi^2"], "area", false, true, 3429904],
            ["square Pica", "Pica2", ["Picapt2", "Pica^2", "Picapt^2"], "area", false, true, 0.00001792111111111],
            ["square yard", "yd2", ["yd^2"], "area", false, true, 0.83612736],
            ["statute mile", "mi", null, "length", false, true, 1609.344],
            ["steradian", "sr", null, "solid_angle", true, false, 1],
            ["stilb", "sb", null, "luminance", false, false, 0.0001],
            ["stokes", "St", null, "kinematic_viscosity", false, false, 0.0001],
            ["stone", "stone", null, "mass", false, true, 6.35029318],
            ["tablespoon", "tbs", null, "volume", false, true, 0.0000147868],
            ["teaspoon", "tsp", null, "volume", false, true, 0.00000492892],
            ["tesla", "T", null, "magnetic_flux_density", true, true, 1],
            ["thermodynamic calorie", "c", null, "energy", false, true, 4.184],
            ["ton", "ton", null, "mass", false, true, 907.18474],
            ["tonne", "t", null, "mass", false, false, 1000],
            ["U.K. pint", "uk_pt", null, "volume", false, true, 0.00056826125],
            ["U.S. bushel", "bushel", null, "volume", false, true, 0.03523907],
            ["U.S. oil barrel", "barrel", null, "volume", false, true, 0.158987295],
            ["U.S. pint", "pt", ["us_pt"], "volume", false, true, 0.000473176473],
            ["U.S. survey mile", "survey_mi", null, "length", false, true, 1609.347219],
            ["U.S. survey/statute acre", "us_acre", null, "area", false, true, 4046.87261],
            ["volt", "V", null, "voltage", true, false, 1],
            ["watt", "W", null, "power", true, true, 1],
            ["watt-hour", "Wh", ["wh"], "energy", false, true, 3600],
            ["weber", "Wb", null, "magnetic_flux", true, false, 1],
            ["yard", "yd", null, "length", false, true, 0.9144],
            ["year", "yr", null, "time", false, true, 31557600]
        ];

        // Binary prefixes
        // [Name, Prefix power of 2 value, Previx value, Abbreviation, Derived
        // from]
        var binary_prefixes = {
            Yi: ["yobi", 80, 1208925819614629174706176, "Yi", "yotta"],
            Zi: ["zebi", 70, 1180591620717411303424, "Zi", "zetta"],
            Ei: ["exbi", 60, 1152921504606846976, "Ei", "exa"],
            Pi: ["pebi", 50, 1125899906842624, "Pi", "peta"],
            Ti: ["tebi", 40, 1099511627776, "Ti", "tera"],
            Gi: ["gibi", 30, 1073741824, "Gi", "giga"],
            Mi: ["mebi", 20, 1048576, "Mi", "mega"],
            ki: ["kibi", 10, 1024, "ki", "kilo"]
        };

        // Unit prefixes
        // [Name, Multiplier, Abbreviation]
        var unit_prefixes = {
            Y: ["yotta", 1e+24, "Y"],
            Z: ["zetta", 1e+21, "Z"],
            E: ["exa", 1e+18, "E"],
            P: ["peta", 1e+15, "P"],
            T: ["tera", 1e+12, "T"],
            G: ["giga", 1e+09, "G"],
            M: ["mega", 1e+06, "M"],
            k: ["kilo", 1e+03, "k"],
            h: ["hecto", 1e+02, "h"],
            e: ["dekao", 1e+01, "e"],
            d: ["deci", 1e-01, "d"],
            c: ["centi", 1e-02, "c"],
            m: ["milli", 1e-03, "m"],
            u: ["micro", 1e-06, "u"],
            n: ["nano", 1e-09, "n"],
            p: ["pico", 1e-12, "p"],
            f: ["femto", 1e-15, "f"],
            a: ["atto", 1e-18, "a"],
            z: ["zepto", 1e-21, "z"],
            y: ["yocto", 1e-24, "y"]
        };

        // Initialize units and multipliers
        var from = null;
        var to = null;
        var base_from_unit = from_unit;
        var base_to_unit = to_unit;
        var from_multiplier = 1;
        var to_multiplier = 1;
        var alt;

        // Lookup from and to units
        for (var i = 0; i < units.length; i++) {
            alt = (units[i][2] === null) ? [] : units[i][2];
            if (units[i][1] === base_from_unit || alt.indexOf(base_from_unit) >= 0) {
              from = units[i];
            }
            if (units[i][1] === base_to_unit || alt.indexOf(base_to_unit) >= 0) {
              to = units[i];
            }
        }

        // Lookup from prefix
        if (from === null) {
            var from_binary_prefix = binary_prefixes[from_unit.substring(0, 2)];
            var from_unit_prefix = unit_prefixes[from_unit.substring(0, 1)];

            // Handle dekao unit prefix (only unit prefix with two characters)
            if (from_unit.substring(0, 2) === 'da') {
              from_unit_prefix = ["dekao", 1e+01, "da"];
            }

            // Handle binary prefixes first (so that 'Yi' is processed before
            // 'Y')
            if (from_binary_prefix) {
              from_multiplier = from_binary_prefix[2];
              base_from_unit = from_unit.substring(2);
            } else if (from_unit_prefix) {
              from_multiplier = from_unit_prefix[1];
              base_from_unit = from_unit.substring(from_unit_prefix[2].length);
            }

            // Lookup from unit
            for (var j = 0; j < units.length; j++) {
              alt = (units[j][2] === null) ? [] : units[j][2];
              if (units[j][1] === base_from_unit || alt.indexOf(base_from_unit) >= 0) {
                  from = units[j];
              }
            }
        }

        // Lookup to prefix
        if (to === null) {
            var to_binary_prefix = binary_prefixes[to_unit.substring(0, 2)];
            var to_unit_prefix = unit_prefixes[to_unit.substring(0, 1)];

            // Handle dekao unit prefix (only unit prefix with two characters)
            if (to_unit.substring(0, 2) === 'da') {
              to_unit_prefix = ["dekao", 1e+01, "da"];
            }

            // Handle binary prefixes first (so that 'Yi' is processed before
            // 'Y')
            if (to_binary_prefix) {
              to_multiplier = to_binary_prefix[2];
              base_to_unit = to_unit.substring(2);
            } else if (to_unit_prefix) {
              to_multiplier = to_unit_prefix[1];
              base_to_unit = to_unit.substring(to_unit_prefix[2].length);
            }

            // Lookup to unit
            for (var k = 0; k < units.length; k++) {
              alt = (units[k][2] === null) ? [] : units[k][2];
              if (units[k][1] === base_to_unit || alt.indexOf(base_to_unit) >= 0) {
                  to = units[k];
              }
            }
        }

        // Return error if a unit does not exist
        if (from === null || to === null) {
            return error.na;
        }

        // Return error if units represent different quantities
        if (from[3] !== to[3]) {
            return error.na;
        }

        // Return converted number
        return number * from[6] * from_multiplier / (to[6] * to_multiplier);
    };

    exports.DEC2BIN = function(number, places) {
        number = utils.parseNumber(number);
        if (number instanceof Error) {
            return number;
        }

        // Return error if number is not decimal, is lower than -512, or is
        // greater than 511
        if (!/^-?[0-9]{1,3}$/.test(number) || number < -512 || number > 511) {
            return error.num;
        }

        // Ignore places and return a 10-character binary number if number is
        // negative
        if (number < 0) {
            return '1' + REPT('0', 9 - (512 + number).toString(2).length) + (512 + number).toString(2);
        }

        // Convert decimal number to binary
        var result = parseInt(number, 10).toString(2);

        // Return binary number using the minimum number of characters necessary
        // if places is undefined
        if (typeof places === 'undefined') {
            return result;
        } else {
            // Return error if places is nonnumeric
            if (isNaN(places)) {
              return error.value;
            }

            // Return error if places is negative
            if (places < 0) {
              return error.num;
            }

            // Truncate places in case it is not an integer
            places = Math.floor(places);

            // Pad return value with leading 0s (zeros) if necessary (using
            // Underscore.string)
            return (places >= result.length) ? REPT('0', places - result.length) + result : error.num;
        }
    };

    exports.DEC2HEX = function(number, places) {
        number = utils.parseNumber(number);
        if (number instanceof Error) {
            return number;
        }

        // Return error if number is not decimal, is lower than -549755813888,
        // or is greater than 549755813887
        if (!/^-?[0-9]{1,12}$/.test(number) || number < -549755813888 || number > 549755813887) {
            return error.num;
        }

        // Ignore places and return a 10-character hexadecimal number if number
        // is negative
        if (number < 0) {
            return (1099511627776 + number).toString(16);
        }

        // Convert decimal number to hexadecimal
        var result = parseInt(number, 10).toString(16);

        // Return hexadecimal number using the minimum number of characters
        // necessary if places is undefined
        if (typeof places === 'undefined') {
            return result;
        } else {
            // Return error if places is nonnumeric
            if (isNaN(places)) {
              return error.value;
            }

            // Return error if places is negative
            if (places < 0) {
              return error.num;
            }

            // Truncate places in case it is not an integer
            places = Math.floor(places);

            // Pad return value with leading 0s (zeros) if necessary (using
            // Underscore.string)
            return (places >= result.length) ? REPT('0', places - result.length) + result : error.num;
        }
    };

    exports.DEC2OCT = function(number, places) {
        number = utils.parseNumber(number);
        if (number instanceof Error) {
            return number;
        }

        // Return error if number is not decimal, is lower than -549755813888,
        // or is greater than 549755813887
        if (!/^-?[0-9]{1,9}$/.test(number) || number < -536870912 || number > 536870911) {
            return error.num;
        }

        // Ignore places and return a 10-character octal number if number is
        // negative
        if (number < 0) {
            return (1073741824 + number).toString(8);
        }

        // Convert decimal number to octal
        var result = parseInt(number, 10).toString(8);

        // Return octal number using the minimum number of characters necessary
        // if places is undefined
        if (typeof places === 'undefined') {
            return result;
        } else {
            // Return error if places is nonnumeric
            if (isNaN(places)) {
              return error.value;
            }

            // Return error if places is negative
            if (places < 0) {
              return error.num;
            }

            // Truncate places in case it is not an integer
            places = Math.floor(places);

            // Pad return value with leading 0s (zeros) if necessary (using
            // Underscore.string)
            return (places >= result.length) ? REPT('0', places - result.length) + result : error.num;
        }
    };

    exports.DELTA = function(number1, number2) {
        // Set number2 to zero if undefined
        number2 = (number2 === undefined) ? 0 : number2;
        number1 = utils.parseNumber(number1);
        number2 = utils.parseNumber(number2);
        if (utils.anyIsError(number1, number2)) {
            return error.value;
        }

        // Return delta
        return (number1 === number2) ? 1 : 0;
    };

    exports.ERF = function(lower_bound, upper_bound) {
    };

    exports.ERF.PRECISE = function() {
    };

    exports.ERFC = function(x) {
    };

    exports.ERFC.PRECISE = function() {
    };

    exports.GESTEP = function(number, step) {
        step = step || 0;
        number = utils.parseNumber(number);
        if (utils.anyIsError(step, number)) {
            return number;
        }

        // Return delta
        return (number >= step) ? 1 : 0;
    };

    exports.HEX2BIN = function(number, places) {
        // Return error if number is not hexadecimal or contains more than ten
        // characters (10 digits)
        if (!/^[0-9A-Fa-f]{1,10}$/.test(number)) {
            return error.num;
        }

        // Check if number is negative
        var negative = (number.length === 10 && number.substring(0, 1).toLowerCase() === 'f') ? true : false;

        // Convert hexadecimal number to decimal
        var decimal = (negative) ? parseInt(number, 16) - 1099511627776 : parseInt(number, 16);

        // Return error if number is lower than -512 or greater than 511
        if (decimal < -512 || decimal > 511) {
            return error.num;
        }

        // Ignore places and return a 10-character binary number if number is
        // negative
        if (negative) {
            return '1' + REPT('0', 9 - (512 + decimal).toString(2).length) + (512 + decimal).toString(2);
        }

        // Convert decimal number to binary
        var result = decimal.toString(2);

        // Return binary number using the minimum number of characters necessary
        // if places is undefined
        if (places === undefined) {
            return result;
        } else {
            // Return error if places is nonnumeric
            if (isNaN(places)) {
              return error.value;
            }

            // Return error if places is negative
            if (places < 0) {
              return error.num;
            }

            // Truncate places in case it is not an integer
            places = Math.floor(places);

            // Pad return value with leading 0s (zeros) if necessary (using
            // Underscore.string)
            return (places >= result.length) ? REPT('0', places - result.length) + result : error.num;
        }
    };

    exports.HEX2DEC = function(number) {
        // Return error if number is not hexadecimal or contains more than ten
        // characters (10 digits)
        if (!/^[0-9A-Fa-f]{1,10}$/.test(number)) {
            return error.num;
        }

        // Convert hexadecimal number to decimal
        var decimal = parseInt(number, 16);

        // Return decimal number
        return (decimal >= 549755813888) ? decimal - 1099511627776 : decimal;
    };

    exports.HEX2OCT = function(number, places) {
        // Return error if number is not hexadecimal or contains more than ten
        // characters (10 digits)
        if (!/^[0-9A-Fa-f]{1,10}$/.test(number)) {
            return error.num;
        }

        // Convert hexadecimal number to decimal
        var decimal = parseInt(number, 16);

        // Return error if number is positive and greater than 0x1fffffff
        // (536870911)
        if (decimal > 536870911 && decimal < 1098974756864) {
            return error.num;
        }

        // Ignore places and return a 10-character octal number if number is
        // negative
        if (decimal >= 1098974756864) {
            return (decimal - 1098437885952).toString(8);
        }

        // Convert decimal number to octal
        var result = decimal.toString(8);

        // Return octal number using the minimum number of characters necessary
        // if places is undefined
        if (places === undefined) {
            return result;
        } else {
            // Return error if places is nonnumeric
            if (isNaN(places)) {
              return error.value;
            }

            // Return error if places is negative
            if (places < 0) {
              return error.num;
            }

            // Truncate places in case it is not an integer
            places = Math.floor(places);

            // Pad return value with leading 0s (zeros) if necessary (using
            // Underscore.string)
            return (places >= result.length) ? REPT('0', places - result.length) + result : error.num;
        }
    };

    exports.IMABS = function(inumber) {
        // Lookup real and imaginary coefficients using exports.js
        // [http://formulajs.org]
        var x = exports.IMREAL(inumber);
        var y = exports.IMAGINARY(inumber);

        // Return error if either coefficient is not a number
        if (utils.anyIsError(x, y)) {
            return error.value;
        }

        // Return absolute value of complex number
        return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    };

    exports.IMAGINARY = function(inumber) {
        if (inumber === undefined || inumber === true || inumber === false) {
            return error.value;
        }

        // Return 0 if inumber is equal to 0
        if (inumber === 0 || inumber === '0') {
            return 0;
        }

        // Handle special cases
        if (['i', 'j'].indexOf(inumber) >= 0) {
            return 1;
        }

        // Normalize imaginary coefficient
        inumber = inumber.replace('+i', '+1i').replace('-i', '-1i').replace('+j', '+1j').replace('-j', '-1j');

        // Lookup sign
        var plus = inumber.indexOf('+');
        var minus = inumber.indexOf('-');
        if (plus === 0) {
            plus = inumber.indexOf('+', 1);
        }

        if (minus === 0) {
            minus = inumber.indexOf('-', 1);
        }

        // Lookup imaginary unit
        var last = inumber.substring(inumber.length - 1, inumber.length);
        var unit = (last === 'i' || last === 'j');

        if (plus >= 0 || minus >= 0) {
            // Return error if imaginary unit is neither i nor j
            if (!unit) {
              return error.num;
            }

            // Return imaginary coefficient of complex number
            if (plus >= 0) {
              return (isNaN(inumber.substring(0, plus)) || isNaN(inumber.substring(plus + 1, inumber.length - 1))) ?
                  error.num :
                  Number(inumber.substring(plus + 1, inumber.length - 1));
            } else {
              return (isNaN(inumber.substring(0, minus)) || isNaN(inumber.substring(minus + 1, inumber.length - 1))) ?
                  error.num :
                  -Number(inumber.substring(minus + 1, inumber.length - 1));
            }
        } else {
            if (unit) {
              return (isNaN(inumber.substring(0, inumber.length - 1))) ? error.num : inumber.substring(0, inumber.length - 1);
            } else {
              return (isNaN(inumber)) ? error.num : 0;
            }
        }
    };

    exports.IMARGUMENT = function(inumber) {
        // Lookup real and imaginary coefficients using exports.js
        // [http://formulajs.org]
        var x = exports.IMREAL(inumber);
        var y = exports.IMAGINARY(inumber);

        // Return error if either coefficient is not a number
        if (utils.anyIsError(x, y)) {
            return error.value;
        }

        // Return error if inumber is equal to zero
        if (x === 0 && y === 0) {
            return error.div0;
        }

        // Return PI/2 if x is equal to zero and y is positive
        if (x === 0 && y > 0) {
            return Math.PI / 2;
        }

        // Return -PI/2 if x is equal to zero and y is negative
        if (x === 0 && y < 0) {
            return -Math.PI / 2;
        }

        // Return zero if x is negative and y is equal to zero
        if (y === 0 && x > 0) {
            return 0;
        }

        // Return zero if x is negative and y is equal to zero
        if (y === 0 && x < 0) {
            return -Math.PI;
        }

        // Return argument of complex number
        if (x > 0) {
            return Math.atan(y / x);
        } else if (x < 0 && y >= 0) {
            return Math.atan(y / x) + Math.PI;
        } else {
            return Math.atan(y / x) - Math.PI;
        }
    };

    exports.IMCONJUGATE = function(inumber) {
        // Lookup real and imaginary coefficients using exports.js
        // [http://formulajs.org]
        var x = exports.IMREAL(inumber);
        var y = exports.IMAGINARY(inumber);

        if (utils.anyIsError(x, y)) {
            return error.value;
        }

        // Lookup imaginary unit
        var unit = inumber.substring(inumber.length - 1);
        unit = (unit === 'i' || unit === 'j') ? unit : 'i';

        // Return conjugate of complex number
        return (y !== 0) ? exports.COMPLEX(x, -y, unit) : inumber;
    };

    exports.IMCOS = function(inumber) {
        // Lookup real and imaginary coefficients using exports.js
        // [http://formulajs.org]
        var x = exports.IMREAL(inumber);
        var y = exports.IMAGINARY(inumber);

        if (utils.anyIsError(x, y)) {
            return error.value;
        }

        // Lookup imaginary unit
        var unit = inumber.substring(inumber.length - 1);
        unit = (unit === 'i' || unit === 'j') ? unit : 'i';

        // Return cosine of complex number
        return exports.COMPLEX(Math.cos(x) * (Math.exp(y) + Math.exp(-y)) / 2, -Math.sin(x) * (Math.exp(y) - Math.exp(-y)) / 2, unit);
    };

    exports.IMCOSH = function(inumber) {
        // Lookup real and imaginary coefficients using exports.js
        // [http://formulajs.org]
        var x = exports.IMREAL(inumber);
        var y = exports.IMAGINARY(inumber);

        if (utils.anyIsError(x, y)) {
            return error.value;
        }

        // Lookup imaginary unit
        var unit = inumber.substring(inumber.length - 1);
        unit = (unit === 'i' || unit === 'j') ? unit : 'i';

        // Return hyperbolic cosine of complex number
        return exports.COMPLEX(Math.cos(y) * (Math.exp(x) + Math.exp(-x)) / 2, Math.sin(y) * (Math.exp(x) - Math.exp(-x)) / 2, unit);
    };

    exports.IMCOT = function(inumber) {
        // Lookup real and imaginary coefficients using Formula.js
        // [http://formulajs.org]
        var x = exports.IMREAL(inumber);
        var y = exports.IMAGINARY(inumber);

        if (utils.anyIsError(x, y)) {
            return error.value;
        }

        // Return cotangent of complex number
        return exports.IMDIV(exports.IMCOS(inumber), exports.IMSIN(inumber));
    };

    exports.IMDIV = function(inumber1, inumber2) {
        // Lookup real and imaginary coefficients using Formula.js
        // [http://formulajs.org]
        var a = exports.IMREAL(inumber1);
        var b = exports.IMAGINARY(inumber1);
        var c = exports.IMREAL(inumber2);
        var d = exports.IMAGINARY(inumber2);

        if (utils.anyIsError(a, b, c, d)) {
            return error.value;
        }

        // Lookup imaginary unit
        var unit1 = inumber1.substring(inumber1.length - 1);
        var unit2 = inumber2.substring(inumber2.length - 1);
        var unit = 'i';
        if (unit1 === 'j') {
            unit = 'j';
        } else if (unit2 === 'j') {
            unit = 'j';
        }

        // Return error if inumber2 is null
        if (c === 0 && d === 0) {
            return error.num;
        }

        // Return exponential of complex number
        var den = c * c + d * d;
        return exports.COMPLEX((a * c + b * d) / den, (b * c - a * d) / den, unit);
    };

    exports.IMEXP = function(inumber) {
        // Lookup real and imaginary coefficients using Formula.js
        // [http://formulajs.org]
        var x = exports.IMREAL(inumber);
        var y = exports.IMAGINARY(inumber);

        if (utils.anyIsError(x, y)) {
            return error.value;
        }

        // Lookup imaginary unit
        var unit = inumber.substring(inumber.length - 1);
        unit = (unit === 'i' || unit === 'j') ? unit : 'i';

        // Return exponential of complex number
        var e = Math.exp(x);
        return exports.COMPLEX(e * Math.cos(y), e * Math.sin(y), unit);
    };

    exports.IMLN = function(inumber) {
        // Lookup real and imaginary coefficients using Formula.js
        // [http://formulajs.org]
        var x = exports.IMREAL(inumber);
        var y = exports.IMAGINARY(inumber);

        if (utils.anyIsError(x, y)) {
            return error.value;
        }

        // Lookup imaginary unit
        var unit = inumber.substring(inumber.length - 1);
        unit = (unit === 'i' || unit === 'j') ? unit : 'i';

        // Return exponential of complex number
        return exports.COMPLEX(Math.log(Math.sqrt(x * x + y * y)), Math.atan(y / x), unit);
    };

    exports.IMLOG10 = function(inumber) {
        // Lookup real and imaginary coefficients using Formula.js
        // [http://formulajs.org]
        var x = exports.IMREAL(inumber);
        var y = exports.IMAGINARY(inumber);

        if (utils.anyIsError(x, y)) {
            return error.value;
        }

        // Lookup imaginary unit
        var unit = inumber.substring(inumber.length - 1);
        unit = (unit === 'i' || unit === 'j') ? unit : 'i';

        // Return exponential of complex number
        return exports.COMPLEX(Math.log(Math.sqrt(x * x + y * y)) / Math.log(10), Math.atan(y / x) / Math.log(10), unit);
    };

    exports.IMLOG2 = function(inumber) {
        // Lookup real and imaginary coefficients using Formula.js
        // [http://formulajs.org]
        var x = exports.IMREAL(inumber);
        var y = exports.IMAGINARY(inumber);

        if (utils.anyIsError(x, y)) {
            return error.value;
        }

        // Lookup imaginary unit
        var unit = inumber.substring(inumber.length - 1);
        unit = (unit === 'i' || unit === 'j') ? unit : 'i';

        // Return exponential of complex number
        return exports.COMPLEX(Math.log(Math.sqrt(x * x + y * y)) / Math.log(2), Math.atan(y / x) / Math.log(2), unit);
    };

    exports.IMPOWER = function(inumber, number) {
        number = utils.parseNumber(number);
        var x = exports.IMREAL(inumber);
        var y = exports.IMAGINARY(inumber);
        if (utils.anyIsError(number, x, y)) {
            return error.value;
        }

        // Lookup imaginary unit
        var unit = inumber.substring(inumber.length - 1);
        unit = (unit === 'i' || unit === 'j') ? unit : 'i';

        // Calculate power of modulus
        var p = Math.pow(exports.IMABS(inumber), number);

        // Calculate argument
        var t = exports.IMARGUMENT(inumber);

        // Return exponential of complex number
        return exports.COMPLEX(p * Math.cos(number * t), p * Math.sin(number * t), unit);
    };

    exports.IMPRODUCT = function() {
        // Initialize result
        var result = arguments[0];

        // Loop on all numbers
        for (var i = 1; i < arguments.length; i++) {
            // Lookup coefficients of two complex numbers
            var a = exports.IMREAL(result);
            var b = exports.IMAGINARY(result);
            var c = exports.IMREAL(arguments[i]);
            var d = exports.IMAGINARY(arguments[i]);

            if (utils.anyIsError(a, b, c, d)) {
              return error.value;
            }

            // Complute product of two complex numbers
            result = exports.COMPLEX(a * c - b * d, a * d + b * c);
        }

        // Return product of complex numbers
        return result;
    };

    exports.IMREAL = function(inumber) {
        if (inumber === undefined || inumber === true || inumber === false) {
            return error.value;
        }

        // Return 0 if inumber is equal to 0
        if (inumber === 0 || inumber === '0') {
            return 0;
        }

        // Handle special cases
        if (['i', '+i', '1i', '+1i', '-i', '-1i', 'j', '+j', '1j', '+1j', '-j', '-1j'].indexOf(inumber) >= 0) {
            return 0;
        }

        // Lookup sign
        var plus = inumber.indexOf('+');
        var minus = inumber.indexOf('-');
        if (plus === 0) {
            plus = inumber.indexOf('+', 1);
        }
        if (minus === 0) {
            minus = inumber.indexOf('-', 1);
        }

        // Lookup imaginary unit
        var last = inumber.substring(inumber.length - 1, inumber.length);
        var unit = (last === 'i' || last === 'j');

        if (plus >= 0 || minus >= 0) {
            // Return error if imaginary unit is neither i nor j
            if (!unit) {
              return error.num;
            }

            // Return real coefficient of complex number
            if (plus >= 0) {
              return (isNaN(inumber.substring(0, plus)) || isNaN(inumber.substring(plus + 1, inumber.length - 1))) ?
                  error.num :
                  Number(inumber.substring(0, plus));
            } else {
              return (isNaN(inumber.substring(0, minus)) || isNaN(inumber.substring(minus + 1, inumber.length - 1))) ?
                  error.num :
                  Number(inumber.substring(0, minus));
            }
        } else {
            if (unit) {
              return (isNaN(inumber.substring(0, inumber.length - 1))) ? error.num : 0;
            } else {
              return (isNaN(inumber)) ? error.num : inumber;
            }
        }
    };

    exports.IMSEC = function(inumber) {
        // Return error if inumber is a logical value
        if (inumber === true || inumber === false) {
            return error.value;
        }

        // Lookup real and imaginary coefficients using Formula.js
        // [http://formulajs.org]
        var x = exports.IMREAL(inumber);
        var y = exports.IMAGINARY(inumber);

        if (utils.anyIsError(x, y)) {
            return error.value;
        }

        // Return secant of complex number
        return exports.IMDIV('1', exports.IMCOS(inumber));
    };

    exports.IMSECH = function(inumber) {
        // Lookup real and imaginary coefficients using Formula.js
        // [http://formulajs.org]
        var x = exports.IMREAL(inumber);
        var y = exports.IMAGINARY(inumber);

        if (utils.anyIsError(x, y)) {
            return error.value;
        }

        // Return hyperbolic secant of complex number
        return exports.IMDIV('1', exports.IMCOSH(inumber));
    };

    exports.IMSIN = function(inumber) {
        // Lookup real and imaginary coefficients using Formula.js
        // [http://formulajs.org]
        var x = exports.IMREAL(inumber);
        var y = exports.IMAGINARY(inumber);

        if (utils.anyIsError(x, y)) {
            return error.value;
        }

        // Lookup imaginary unit
        var unit = inumber.substring(inumber.length - 1);
        unit = (unit === 'i' || unit === 'j') ? unit : 'i';

        // Return sine of complex number
        return exports.COMPLEX(Math.sin(x) * (Math.exp(y) + Math.exp(-y)) / 2, Math.cos(x) * (Math.exp(y) - Math.exp(-y)) / 2, unit);
    };

    exports.IMSINH = function(inumber) {
        // Lookup real and imaginary coefficients using Formula.js
        // [http://formulajs.org]
        var x = exports.IMREAL(inumber);
        var y = exports.IMAGINARY(inumber);

        if (utils.anyIsError(x, y)) {
            return error.value;
        }

        // Lookup imaginary unit
        var unit = inumber.substring(inumber.length - 1);
        unit = (unit === 'i' || unit === 'j') ? unit : 'i';

        // Return hyperbolic sine of complex number
        return exports.COMPLEX(Math.cos(y) * (Math.exp(x) - Math.exp(-x)) / 2, Math.sin(y) * (Math.exp(x) + Math.exp(-x)) / 2, unit);
    };

    exports.IMSQRT = function(inumber) {
        // Lookup real and imaginary coefficients using Formula.js
        // [http://formulajs.org]
        var x = exports.IMREAL(inumber);
        var y = exports.IMAGINARY(inumber);

        if (utils.anyIsError(x, y)) {
            return error.value;
        }

        // Lookup imaginary unit
        var unit = inumber.substring(inumber.length - 1);
        unit = (unit === 'i' || unit === 'j') ? unit : 'i';

        // Calculate power of modulus
        var s = Math.sqrt(exports.IMABS(inumber));

        // Calculate argument
        var t = exports.IMARGUMENT(inumber);

        // Return exponential of complex number
        return exports.COMPLEX(s * Math.cos(t / 2), s * Math.sin(t / 2), unit);
    };

    exports.IMCSC = function (inumber) {
        // Return error if inumber is a logical value
        if (inumber === true || inumber === false) {
            return error.value;
        }

        // Lookup real and imaginary coefficients using Formula.js
        // [http://formulajs.org]
        var x = exports.IMREAL(inumber);
        var y = exports.IMAGINARY(inumber);

        // Return error if either coefficient is not a number
        if (utils.anyIsError(x, y)) {
            return error.num;
        }

        // Return cosecant of complex number
        return exports.IMDIV('1', exports.IMSIN(inumber));
    };

    exports.IMCSCH = function (inumber) {
        // Return error if inumber is a logical value
        if (inumber === true || inumber === false) {
            return error.value;
        }

        // Lookup real and imaginary coefficients using Formula.js
        // [http://formulajs.org]
        var x = exports.IMREAL(inumber);
        var y = exports.IMAGINARY(inumber);

        // Return error if either coefficient is not a number
        if (utils.anyIsError(x, y)) {
            return error.num;
        }

        // Return hyperbolic cosecant of complex number
        return exports.IMDIV('1', exports.IMSINH(inumber));
    };

    exports.IMSUB = function(inumber1, inumber2) {
        // Lookup real and imaginary coefficients using Formula.js
        // [http://formulajs.org]
        var a = this.IMREAL(inumber1);
        var b = this.IMAGINARY(inumber1);
        var c = this.IMREAL(inumber2);
        var d = this.IMAGINARY(inumber2);

        if (utils.anyIsError(a, b, c, d)) {
            return error.value;
        }

        // Lookup imaginary unit
        var unit1 = inumber1.substring(inumber1.length - 1);
        var unit2 = inumber2.substring(inumber2.length - 1);
        var unit = 'i';
        if (unit1 === 'j') {
            unit = 'j';
        } else if (unit2 === 'j') {
            unit = 'j';
        }

        // Return _ of two complex numbers
        return this.COMPLEX(a - c, b - d, unit);
    };

    exports.IMSUM = function() {
        var args = utils.flatten(arguments);

        // Initialize result
        var result = args[0];

        // Loop on all numbers
        for (var i = 1; i < args.length; i++) {
            // Lookup coefficients of two complex numbers
            var a = this.IMREAL(result);
            var b = this.IMAGINARY(result);
            var c = this.IMREAL(args[i]);
            var d = this.IMAGINARY(args[i]);

            if (utils.anyIsError(a, b, c, d)) {
              return error.value;
            }

            // Complute product of two complex numbers
            result = this.COMPLEX(a + c, b + d);
        }

        // Return sum of complex numbers
        return result;
    };

    exports.IMTAN = function(inumber) {
        // Return error if inumber is a logical value
        if (inumber === true || inumber === false) {
            return error.value;
        }

        // Lookup real and imaginary coefficients using Formula.js
        // [http://formulajs.org]
        var x = exports.IMREAL(inumber);
        var y = exports.IMAGINARY(inumber);

        if (utils.anyIsError(x, y)) {
            return error.value;
        }

        // Return tangent of complex number
        return this.IMDIV(this.IMSIN(inumber), this.IMCOS(inumber));
    };

    exports.OCT2BIN = function(number, places) {
        // Return error if number is not hexadecimal or contains more than ten
        // characters (10 digits)
        if (!/^[0-7]{1,10}$/.test(number)) {
            return error.num;
        }

        // Check if number is negative
        var negative = (number.length === 10 && number.substring(0, 1) === '7') ? true : false;

        // Convert octal number to decimal
        var decimal = (negative) ? parseInt(number, 8) - 1073741824 : parseInt(number, 8);

        // Return error if number is lower than -512 or greater than 511
        if (decimal < -512 || decimal > 511) {
            return error.num;
        }

        // Ignore places and return a 10-character binary number if number is
        // negative
        if (negative) {
            return '1' + REPT('0', 9 - (512 + decimal).toString(2).length) + (512 + decimal).toString(2);
        }

        // Convert decimal number to binary
        var result = decimal.toString(2);

        // Return binary number using the minimum number of characters necessary
        // if places is undefined
        if (typeof places === 'undefined') {
            return result;
        } else {
            // Return error if places is nonnumeric
            if (isNaN(places)) {
              return error.value;
            }

            // Return error if places is negative
            if (places < 0) {
              return error.num;
            }

            // Truncate places in case it is not an integer
            places = Math.floor(places);

            // Pad return value with leading 0s (zeros) if necessary (using
            // Underscore.string)
            return (places >= result.length) ? REPT('0', places - result.length) + result : error.num;
        }
    };

    exports.OCT2DEC = function(number) {
        // Return error if number is not octal or contains more than ten
        // characters (10 digits)
        if (!/^[0-7]{1,10}$/.test(number)) {
            return error.num;
        }

        // Convert octal number to decimal
        var decimal = parseInt(number, 8);

        // Return decimal number
        return (decimal >= 536870912) ? decimal - 1073741824 : decimal;
    };

    exports.OCT2HEX = function(number, places) {
        // Return error if number is not octal or contains more than ten
        // characters (10 digits)
        if (!/^[0-7]{1,10}$/.test(number)) {
            return error.num;
        }

        // Convert octal number to decimal
        var decimal = parseInt(number, 8);

        // Ignore places and return a 10-character octal number if number is
        // negative
        if (decimal >= 536870912) {
            return 'ff' + (decimal + 3221225472).toString(16);
        }

        // Convert decimal number to hexadecimal
        var result = decimal.toString(16);

        // Return hexadecimal number using the minimum number of characters
        // necessary if places is undefined
        if (places === undefined) {
            return result;
        } else {
            // Return error if places is nonnumeric
            if (isNaN(places)) {
              return error.value;
            }

            // Return error if places is negative
            if (places < 0) {
              return error.num;
            }

            // Truncate places in case it is not an integer
            places = Math.floor(places);

            // Pad return value with leading 0s (zeros) if necessary (using
            // Underscore.string)
            return (places >= result.length) ? REPT('0', places - result.length) + result : error.num;
        }
    };

    return exports;
})();

jexcel.methods.financial = (function() {
    var exports = {};

    function validDate(d) {
        return d && d.getTime && !isNaN(d.getTime());
    }

    function ensureDate(d) {
        return (d instanceof Date)?d:new Date(d);
    }

    exports.ACCRINT = function(issue, first, settlement, rate, par, frequency, basis) {
        // Return error if either date is invalid
        issue        = ensureDate(issue);
        first        = ensureDate(first);
        settlement = ensureDate(settlement);
        if (!validDate(issue) || !validDate(first) || !validDate(settlement)) {
            return '#VALUE!';
        }

        // Return error if either rate or par are lower than or equal to zero
        if (rate <= 0 || par <= 0) {
            return '#NUM!';
        }

        // Return error if frequency is neither 1, 2, or 4
        if ([1, 2, 4].indexOf(frequency) === -1) {
            return '#NUM!';
        }

        // Return error if basis is neither 0, 1, 2, 3, or 4
        if ([0, 1, 2, 3, 4].indexOf(basis) === -1) {
            return '#NUM!';
        }

        // Return error if settlement is before or equal to issue
        if (settlement <= issue) {
            return '#NUM!';
        }

        // Set default values
        par   = par   || 0;
        basis = basis || 0;

        // Compute accrued interest
        return par * rate * YEARFRAC(issue, settlement, basis);
    };

    exports.ACCRINTM = null;

    exports.AMORDEGRC = null;

    exports.AMORLINC = null;

    exports.COUPDAYBS = null;

    exports.COUPDAYS = null;

    exports.COUPDAYSNC = null;

    exports.COUPNCD = null;

    exports.COUPNUM = null;

    exports.COUPPCD = null;

    exports.CUMIPMT = function(rate, periods, value, start, end, type) {
        // Credits: algorithm inspired by Apache OpenOffice
        // Credits: Hannes Stiebitzhofer for the translations of function and
            // variable names
        // Requires exports.FV() and exports.PMT() from exports.js
            // [http://stoic.com/exports/]

        rate = utils.parseNumber(rate);
        periods = utils.parseNumber(periods);
        value = utils.parseNumber(value);
        if (utils.anyIsError(rate, periods, value)) {
            return error.value;
        }

        // Return error if either rate, periods, or value are lower than or
            // equal to zero
        if (rate <= 0 || periods <= 0 || value <= 0) {
            return error.num;
        }

        // Return error if start < 1, end < 1, or start > end
        if (start < 1 || end < 1 || start > end) {
            return error.num;
        }

        // Return error if type is neither 0 nor 1
        if (type !== 0 && type !== 1) {
            return error.num;
        }

        // Compute cumulative interest
        var payment = exports.PMT(rate, periods, value, 0, type);
        var interest = 0;

        if (start === 1) {
            if (type === 0) {
                interest = -value;
                start++;
            }
        }

        for (var i = start; i <= end; i++) {
            if (type === 1) {
                interest += exports.FV(rate, i - 2, payment, value, 1) - payment;
            } else {
                interest += exports.FV(rate, i - 1, payment, value, 0);
            }
        }
        interest *= rate;

        // Return cumulative interest
        return interest;
    };

    exports.CUMPRINC = function(rate, periods, value, start, end, type) {
        // Credits: algorithm inspired by Apache OpenOffice
        // Credits: Hannes Stiebitzhofer for the translations of function and
            // variable names

        rate = utils.parseNumber(rate);
        periods = utils.parseNumber(periods);
        value = utils.parseNumber(value);
        if (utils.anyIsError(rate, periods, value)) {
            return error.value;
        }

        // Return error if either rate, periods, or value are lower than or
            // equal to zero
        if (rate <= 0 || periods <= 0 || value <= 0) {
            return error.num;
        }

        // Return error if start < 1, end < 1, or start > end
        if (start < 1 || end < 1 || start > end) {
            return error.num;
        }

        // Return error if type is neither 0 nor 1
        if (type !== 0 && type !== 1) {
            return error.num;
        }

        // Compute cumulative principal
        var payment = exports.PMT(rate, periods, value, 0, type);
        var principal = 0;
        if (start === 1) {
            if (type === 0) {
                principal = payment + value * rate;
            } else {
                principal = payment;
            }
            start++;
        }
        for (var i = start; i <= end; i++) {
            if (type > 0) {
                principal += payment - (exports.FV(rate, i - 2, payment, value, 1) - payment) * rate;
            } else {
                principal += payment - exports.FV(rate, i - 1, payment, value, 0) * rate;
            }
        }

        // Return cumulative principal
        return principal;
    };

    exports.DB = function(cost, salvage, life, period, month) {
        // Initialize month
        month = (month === undefined) ? 12 : month;

        cost = utils.parseNumber(cost);
        salvage = utils.parseNumber(salvage);
        life = utils.parseNumber(life);
        period = utils.parseNumber(period);
        month = utils.parseNumber(month);
        if (utils.anyIsError(cost, salvage, life, period, month)) {
            return error.value;
        }

        // Return error if any of the parameters is negative
        if (cost < 0 || salvage < 0 || life < 0 || period < 0) {
            return error.num;
        }

        // Return error if month is not an integer between 1 and 12
        if ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].indexOf(month) === -1) {
            return error.num;
        }

        // Return error if period is greater than life
        if (period > life) {
            return error.num;
        }

        // Return 0 (zero) if salvage is greater than or equal to cost
        if (salvage >= cost) {
            return 0;
        }

        // Rate is rounded to three decimals places
        var rate = (1 - Math.pow(salvage / cost, 1 / life)).toFixed(3);

        // Compute initial depreciation
        var initial = cost * rate * month / 12;

        // Compute total depreciation
        var total = initial;
        var current = 0;
        var ceiling = (period === life) ? life - 1 : period;
        for (var i = 2; i <= ceiling; i++) {
            current = (cost - total) * rate;
            total += current;
        }

        // Depreciation for the first and last periods are special cases
        if (period === 1) {
            // First period
            return initial;
        } else if (period === life) {
            // Last period
            return (cost - total) * rate;
        } else {
            return current;
        }
    };

    exports.DDB = function(cost, salvage, life, period, factor) {
        // Initialize factor
        factor = (factor === undefined) ? 2 : factor;

        cost = utils.parseNumber(cost);
        salvage = utils.parseNumber(salvage);
        life = utils.parseNumber(life);
        period = utils.parseNumber(period);
        factor = utils.parseNumber(factor);
        if (utils.anyIsError(cost, salvage, life, period, factor)) {
            return error.value;
        }

        // Return error if any of the parameters is negative or if factor is
            // null
        if (cost < 0 || salvage < 0 || life < 0 || period < 0 || factor <= 0) {
            return error.num;
        }

        // Return error if period is greater than life
        if (period > life) {
            return error.num;
        }

        // Return 0 (zero) if salvage is greater than or equal to cost
        if (salvage >= cost) {
            return 0;
        }

        // Compute depreciation
        var total = 0;
        var current = 0;
        for (var i = 1; i <= period; i++) {
            current = Math.min((cost - total) * (factor / life), (cost - salvage - total));
            total += current;
        }

        // Return depreciation
        return current;
    };

    exports.DISC = null;

    exports.DOLLARDE = function(dollar, fraction) {
        // Credits: algorithm inspired by Apache OpenOffice

        dollar = utils.parseNumber(dollar);
        fraction = utils.parseNumber(fraction);
        if (utils.anyIsError(dollar, fraction)) {
            return error.value;
        }

        // Return error if fraction is negative
        if (fraction < 0) {
            return error.num;
        }

        // Return error if fraction is greater than or equal to 0 and less than
            // 1
        if (fraction >= 0 && fraction < 1) {
            return error.div0;
        }

        // Truncate fraction if it is not an integer
        fraction = parseInt(fraction, 10);

        // Compute integer part
        var result = parseInt(dollar, 10);

        // Add decimal part
        result += (dollar % 1) * Math.pow(10, Math.ceil(Math.log(fraction) / Math.LN10)) / fraction;

        // Round result
        var power = Math.pow(10, Math.ceil(Math.log(fraction) / Math.LN2) + 1);
        result = Math.round(result * power) / power;

        // Return converted dollar price
        return result;
    };

    exports.DOLLARFR = function(dollar, fraction) {
        // Credits: algorithm inspired by Apache OpenOffice

        dollar = utils.parseNumber(dollar);
        fraction = utils.parseNumber(fraction);
        if (utils.anyIsError(dollar, fraction)) {
            return error.value;
        }

        // Return error if fraction is negative
        if (fraction < 0) {
            return error.num;
        }

        // Return error if fraction is greater than or equal to 0 and less than
            // 1
        if (fraction >= 0 && fraction < 1) {
            return error.div0;
        }

        // Truncate fraction if it is not an integer
        fraction = parseInt(fraction, 10);

        // Compute integer part
        var result = parseInt(dollar, 10);

        // Add decimal part
        result += (dollar % 1) * Math.pow(10, -Math.ceil(Math.log(fraction) / Math.LN10)) * fraction;

        // Return converted dollar price
        return result;
    };

    exports.DURATION = null;

    exports.EFFECT = function(rate, periods) {
        rate = utils.parseNumber(rate);
        periods = utils.parseNumber(periods);
        if (utils.anyIsError(rate, periods)) {
            return error.value;
        }

        // Return error if rate <=0 or periods < 1
        if (rate <= 0 || periods < 1) {
            return error.num;
        }

        // Truncate periods if it is not an integer
        periods = parseInt(periods, 10);

        // Return effective annual interest rate
        return Math.pow(1 + rate / periods, periods) - 1;
    };

    exports.FV = function(rate, periods, payment, value, type) {
        // Credits: algorithm inspired by Apache OpenOffice

        value = value || 0;
        type = type || 0;

        rate = utils.parseNumber(rate);
        periods = utils.parseNumber(periods);
        payment = utils.parseNumber(payment);
        value = utils.parseNumber(value);
        type = utils.parseNumber(type);
        if (utils.anyIsError(rate, periods, payment, value, type)) {
            return error.value;
        }

        // Return future value
        var result;
        if (rate === 0) {
            result = value + payment * periods;
        } else {
            var term = Math.pow(1 + rate, periods);
            if (type === 1) {
                result = value * term + payment * (1 + rate) * (term - 1) / rate;
            } else {
                result = value * term + payment * (term - 1) / rate;
            }
        }
        return -result;
    };

    exports.FVSCHEDULE = function(principal, schedule) {
        principal = utils.parseNumber(principal);
        schedule = utils.parseNumberArray(utils.flatten(schedule));
        if (utils.anyIsError(principal, schedule)) {
            return error.value;
        }

        var n = schedule.length;
        var future = principal;

        // Apply all interests in schedule
        for (var i = 0; i < n; i++) {
            // Apply scheduled interest
            future *= 1 + schedule[i];
        }

        // Return future value
        return future;
    };

    exports.INTRATE = null;

    exports.IPMT = function(rate, period, periods, present, future, type) {
        // Credits: algorithm inspired by Apache OpenOffice

        future = future || 0;
        type = type || 0;

        rate = utils.parseNumber(rate);
        period = utils.parseNumber(period);
        periods = utils.parseNumber(periods);
        present = utils.parseNumber(present);
        future = utils.parseNumber(future);
        type = utils.parseNumber(type);
        if (utils.anyIsError(rate, period, periods, present, future, type)) {
            return error.value;
        }

        // Compute payment
        var payment = exports.PMT(rate, periods, present, future, type);

        // Compute interest
        var interest;
        if (period === 1) {
            if (type === 1) {
                interest = 0;
            } else {
                interest = -present;
            }
        } else {
            if (type === 1) {
                interest = exports.FV(rate, period - 2, payment, present, 1) - payment;
            } else {
                interest = exports.FV(rate, period - 1, payment, present, 0);
            }
        }

        // Return interest
        return interest * rate;
    };

    exports.IRR = function(values, guess) {
        // Credits: algorithm inspired by Apache OpenOffice

        guess = guess || 0;

        values = utils.parseNumberArray(utils.flatten(values));
        guess = utils.parseNumber(guess);
        if (utils.anyIsError(values, guess)) {
            return error.value;
        }

        // Calculates the resulting amount
        var irrResult = function(values, dates, rate) {
            var r = rate + 1;
            var result = values[0];
            for (var i = 1; i < values.length; i++) {
                result += values[i] / Math.pow(r, (dates[i] - dates[0]) / 365);
            }
            return result;
        };

        // Calculates the first derivation
        var irrResultDeriv = function(values, dates, rate) {
            var r = rate + 1;
            var result = 0;
            for (var i = 1; i < values.length; i++) {
                var frac = (dates[i] - dates[0]) / 365;
                result -= frac * values[i] / Math.pow(r, frac + 1);
            }
            return result;
        };

        // Initialize dates and check that values contains at least one positive
            // value and one negative value
        var dates = [];
        var positive = false;
        var negative = false;
        for (var i = 0; i < values.length; i++) {
            dates[i] = (i === 0) ? 0 : dates[i - 1] + 365;
            if (values[i] > 0) {
                positive = true;
            }
            if (values[i] < 0) {
                negative = true;
            }
        }

        // Return error if values does not contain at least one positive value
            // and one negative value
        if (!positive || !negative) {
            return error.num;
        }

        // Initialize guess and resultRate
        guess = (guess === undefined) ? 0.1 : guess;
        var resultRate = guess;

        // Set maximum epsilon for end of iteration
        var epsMax = 1e-10;

        // Implement Newton's method
        var newRate, epsRate, resultValue;
        var contLoop = true;
        do {
            resultValue = irrResult(values, dates, resultRate);
            newRate = resultRate - resultValue / irrResultDeriv(values, dates, resultRate);
            epsRate = Math.abs(newRate - resultRate);
            resultRate = newRate;
            contLoop = (epsRate > epsMax) && (Math.abs(resultValue) > epsMax);
        } while (contLoop);

        // Return internal rate of return
        return resultRate;
    };

    exports.ISPMT = function(rate, period, periods, value) {
        rate = utils.parseNumber(rate);
        period = utils.parseNumber(period);
        periods = utils.parseNumber(periods);
        value = utils.parseNumber(value);
        if (utils.anyIsError(rate, period, periods, value)) {
            return error.value;
        }

        // Return interest
        return value * rate * (period / periods - 1);
    };

    exports.MDURATION = null;

    exports.MIRR = function(values, finance_rate, reinvest_rate) {
        values = utils.parseNumberArray(utils.flatten(values));
        finance_rate = utils.parseNumber(finance_rate);
        reinvest_rate = utils.parseNumber(reinvest_rate);
        if (utils.anyIsError(values, finance_rate, reinvest_rate)) {
            return error.value;
        }

        // Initialize number of values
        var n = values.length;

        // Lookup payments (negative values) and incomes (positive values)
        var payments = [];
        var incomes = [];
        for (var i = 0; i < n; i++) {
            if (values[i] < 0) {
                payments.push(values[i]);
            } else {
                incomes.push(values[i]);
            }
        }

        // Return modified internal rate of return
        var num = -exports.NPV(reinvest_rate, incomes) * Math.pow(1 + reinvest_rate, n - 1);
        var den = exports.NPV(finance_rate, payments) * (1 + finance_rate);
        return Math.pow(num / den, 1 / (n - 1)) - 1;
    };

    exports.NOMINAL = function(rate, periods) {
        rate = utils.parseNumber(rate);
        periods = utils.parseNumber(periods);
        if (utils.anyIsError(rate, periods)) {
            return error.value;
        }

        // Return error if rate <=0 or periods < 1
        if (rate <= 0 || periods < 1) {
            return error.num;
        }

        // Truncate periods if it is not an integer
        periods = parseInt(periods, 10);

        // Return nominal annual interest rate
        return (Math.pow(rate + 1, 1 / periods) - 1) * periods;
    };

    exports.NPER = function(rate, payment, present, future, type) {
        type = (type === undefined) ? 0 : type;
        future = (future === undefined) ? 0 : future;

        rate = utils.parseNumber(rate);
        payment = utils.parseNumber(payment);
        present = utils.parseNumber(present);
        future = utils.parseNumber(future);
        type = utils.parseNumber(type);
        if (utils.anyIsError(rate, payment, present, future, type)) {
            return error.value;
        }

        // Return number of periods
        var num = payment * (1 + rate * type) - future * rate;
        var den = (present * rate + payment * (1 + rate * type));
        return Math.log(num / den) / Math.log(1 + rate);
    };

    exports.NPV = function() {
        var args = utils.parseNumberArray(utils.flatten(arguments));
        if (args instanceof Error) {
            return args;
        }

        // Lookup rate
        var rate = args[0];

        // Initialize net present value
        var value = 0;

        // Loop on all values
        for (var j = 1; j < args.length; j++) {
            value += args[j] / Math.pow(1 + rate, j);
        }

        // Return net present value
        return value;
    };

    exports.ODDFPRICE = null;

    exports.ODDFYIELD = null;

    exports.ODDLPRICE = null;

    exports.ODDLYIELD = null;

    exports.PDURATION = function(rate, present, future) {
        rate = utils.parseNumber(rate);
        present = utils.parseNumber(present);
        future = utils.parseNumber(future);
        if (utils.anyIsError(rate, present, future)) {
            return error.value;
        }

        // Return error if rate <=0
        if (rate <= 0) {
            return error.num;
        }

        // Return number of periods
        return (Math.log(future) - Math.log(present)) / Math.log(1 + rate);
    };

    exports.PMT = function(rate, periods, present, future, type) {
        // Credits: algorithm inspired by Apache OpenOffice

        future = future || 0;
        type = type || 0;

        rate = utils.parseNumber(rate);
        periods = utils.parseNumber(periods);
        present = utils.parseNumber(present);
        future = utils.parseNumber(future);
        type = utils.parseNumber(type);
        if (utils.anyIsError(rate, periods, present, future, type)) {
            return error.value;
        }

        // Return payment
        var result;
        if (rate === 0) {
            result = (present + future) / periods;
        } else {
            var term = Math.pow(1 + rate, periods);
            if (type === 1) {
                result = (future * rate / (term - 1) + present * rate / (1 - 1 / term)) / (1 + rate);
            } else {
                result = future * rate / (term - 1) + present * rate / (1 - 1 / term);
            }
        }
        return -result;
    };

    exports.PPMT = function(rate, period, periods, present, future, type) {
        future = future || 0;
        type = type || 0;

        rate = utils.parseNumber(rate);
        periods = utils.parseNumber(periods);
        present = utils.parseNumber(present);
        future = utils.parseNumber(future);
        type = utils.parseNumber(type);
        if (utils.anyIsError(rate, periods, present, future, type)) {
            return error.value;
        }

        return exports.PMT(rate, periods, present, future, type) - exports.IPMT(rate, period, periods, present, future, type);
    };

    exports.PRICE = null;

    exports.PRICEDISC = null;

    exports.PRICEMAT = null;

    exports.PV = function(rate, periods, payment, future, type) {
        future = future || 0;
        type = type || 0;

        rate = utils.parseNumber(rate);
        periods = utils.parseNumber(periods);
        payment = utils.parseNumber(payment);
        future = utils.parseNumber(future);
        type = utils.parseNumber(type);
        if (utils.anyIsError(rate, periods, payment, future, type)) {
            return error.value;
        }

        // Return present value
        if (rate === 0) {
            return -payment * periods - future;
        } else {
            return (((1 - Math.pow(1 + rate, periods)) / rate) * payment * (1 + rate * type) - future) / Math.pow(1 + rate, periods);
        }
    };

    exports.RATE = function(periods, payment, present, future, type, guess) {
        // Credits: rabugento

        guess = (guess === undefined) ? 0.01 : guess;
        future = (future === undefined) ? 0 : future;
        type = (type === undefined) ? 0 : type;

        periods = utils.parseNumber(periods);
        payment = utils.parseNumber(payment);
        present = utils.parseNumber(present);
        future = utils.parseNumber(future);
        type = utils.parseNumber(type);
        guess = utils.parseNumber(guess);
        if (utils.anyIsError(periods, payment, present, future, type, guess)) {
            return error.value;
        }

        // Set maximum epsilon for end of iteration
        var epsMax = 1e-6;

        // Set maximum number of iterations
        var iterMax = 100;
        var iter = 0;
        var close = false;
        var rate = guess;

        while (iter < iterMax && !close) {
            var t1 = Math.pow(rate + 1, periods);
            var t2 = Math.pow(rate + 1, periods - 1);

            var f1 = future + t1 * present + payment * (t1 - 1) * (rate * type + 1) / rate;
            var f2 = periods * t2 * present - payment * (t1 - 1) *(rate * type + 1) / Math.pow(rate,2);
            var f3 = periods * payment * t2 * (rate * type + 1) / rate + payment * (t1 - 1) * type / rate;

            var newRate = rate - f1 / (f2 + f3);

            if (Math.abs(newRate - rate) < epsMax) close = true;
            iter++
            rate = newRate;
        }

        if (!close) return Number.NaN + rate;
        return rate;
    };

    // TODO
    exports.RECEIVED = null;

    exports.RRI = function(periods, present, future) {
        periods = utils.parseNumber(periods);
        present = utils.parseNumber(present);
        future = utils.parseNumber(future);
        if (utils.anyIsError(periods, present, future)) {
            return error.value;
        }

        // Return error if periods or present is equal to 0 (zero)
        if (periods === 0 || present === 0) {
            return error.num;
        }

        // Return equivalent interest rate
        return Math.pow(future / present, 1 / periods) - 1;
    };

    exports.SLN = function(cost, salvage, life) {
        cost = utils.parseNumber(cost);
        salvage = utils.parseNumber(salvage);
        life = utils.parseNumber(life);
        if (utils.anyIsError(cost, salvage, life)) {
            return error.value;
        }

        // Return error if life equal to 0 (zero)
        if (life === 0) {
            return error.num;
        }

        // Return straight-line depreciation
        return (cost - salvage) / life;
    };

    exports.SYD = function(cost, salvage, life, period) {
        // Return error if any of the parameters is not a number
        cost = utils.parseNumber(cost);
        salvage = utils.parseNumber(salvage);
        life = utils.parseNumber(life);
        period = utils.parseNumber(period);
        if (utils.anyIsError(cost, salvage, life, period)) {
            return error.value;
        }

        // Return error if life equal to 0 (zero)
        if (life === 0) {
            return error.num;
        }

        // Return error if period is lower than 1 or greater than life
        if (period < 1 || period > life) {
            return error.num;
        }

        // Truncate period if it is not an integer
        period = parseInt(period, 10);

        // Return straight-line depreciation
        return ((cost - salvage) * (life - period + 1) * 2) / (life * (life + 1));
    };

    exports.TBILLEQ = function(settlement, maturity, discount) {
        settlement = utils.parseDate(settlement);
        maturity = utils.parseDate(maturity);
        discount = utils.parseNumber(discount);
        if (utils.anyIsError(settlement, maturity, discount)) {
            return error.value;
        }

        // Return error if discount is lower than or equal to zero
        if (discount <= 0) {
            return error.num;
        }

        // Return error if settlement is greater than maturity
        if (settlement > maturity) {
            return error.num;
        }

        // Return error if maturity is more than one year after settlement
        if (maturity - settlement > 365 * 24 * 60 * 60 * 1000) {
            return error.num;
        }

        // Return bond-equivalent yield
        return (365 * discount) / (360 - discount * DAYS360(settlement, maturity, false));
    };

    exports.TBILLPRICE = function(settlement, maturity, discount) {
        settlement = utils.parseDate(settlement);
        maturity = utils.parseDate(maturity);
        discount = utils.parseNumber(discount);
        if (utils.anyIsError(settlement, maturity, discount)) {
            return error.value;
        }

        // Return error if discount is lower than or equal to zero
        if (discount <= 0) {
            return error.num;
        }

        // Return error if settlement is greater than maturity
        if (settlement > maturity) {
            return error.num;
        }

        // Return error if maturity is more than one year after settlement
        if (maturity - settlement > 365 * 24 * 60 * 60 * 1000) {
            return error.num;
        }

        // Return bond-equivalent yield
        return 100 * (1 - discount * DAYS360(settlement, maturity, false) / 360);
    };

    exports.TBILLYIELD = function(settlement, maturity, price) {
        settlement = utils.parseDate(settlement);
        maturity = utils.parseDate(maturity);
        price = utils.parseNumber(price);
        if (utils.anyIsError(settlement, maturity, price)) {
            return error.value;
        }

        // Return error if price is lower than or equal to zero
        if (price <= 0) {
            return error.num;
        }

        // Return error if settlement is greater than maturity
        if (settlement > maturity) {
            return error.num;
        }

        // Return error if maturity is more than one year after settlement
        if (maturity - settlement > 365 * 24 * 60 * 60 * 1000) {
            return error.num;
        }

        // Return bond-equivalent yield
        return (100 - price) * 360 / (price * DAYS360(settlement, maturity, false));
    };

    exports.VDB = null;

    exports.XIRR = function(values, dates, guess) {
        // Credits: algorithm inspired by Apache OpenOffice

        values = utils.parseNumberArray(utils.flatten(values));
        dates = utils.parseDateArray(utils.flatten(dates));
        guess = utils.parseNumber(guess);
        if (utils.anyIsError(values, dates, guess)) {
            return error.value;
        }

        // Calculates the resulting amount
        var irrResult = function(values, dates, rate) {
            var r = rate + 1;
            var result = values[0];
            for (var i = 1; i < values.length; i++) {
                result += values[i] / Math.pow(r, DAYS(dates[i], dates[0]) / 365);
            }
            return result;
        };

        // Calculates the first derivation
        var irrResultDeriv = function(values, dates, rate) {
            var r = rate + 1;
            var result = 0;
            for (var i = 1; i < values.length; i++) {
                var frac = DAYS(dates[i], dates[0]) / 365;
                result -= frac * values[i] / Math.pow(r, frac + 1);
            }
            return result;
        };

        // Check that values contains at least one positive value and one
            // negative value
        var positive = false;
        var negative = false;
        for (var i = 0; i < values.length; i++) {
            if (values[i] > 0) {
                positive = true;
            }
            if (values[i] < 0) {
                negative = true;
            }
        }

        // Return error if values does not contain at least one positive value
            // and one negative value
        if (!positive || !negative) {
            return error.num;
        }

        // Initialize guess and resultRate
        guess = guess || 0.1;
        var resultRate = guess;

        // Set maximum epsilon for end of iteration
        var epsMax = 1e-10;

        // Implement Newton's method
        var newRate, epsRate, resultValue;
        var contLoop = true;
        do {
            resultValue = irrResult(values, dates, resultRate);
            newRate = resultRate - resultValue / irrResultDeriv(values, dates, resultRate);
            epsRate = Math.abs(newRate - resultRate);
            resultRate = newRate;
            contLoop = (epsRate > epsMax) && (Math.abs(resultValue) > epsMax);
        } while (contLoop);

        // Return internal rate of return
        return resultRate;
    };

    exports.XNPV = function(rate, values, dates) {
        rate = utils.parseNumber(rate);
        values = utils.parseNumberArray(utils.flatten(values));
        dates = utils.parseDateArray(utils.flatten(dates));
        if (utils.anyIsError(rate, values, dates)) {
            return error.value;
        }

        var result = 0;
        for (var i = 0; i < values.length; i++) {
            result += values[i] / Math.pow(1 + rate, DAYS(dates[i], dates[0]) / 365);
        }
        return result;
    };

    exports.YIELD = null;

    exports.YIELDDISC = null;

    exports.YIELDMAT = null;

    return exports;
})();

jexcel.methods.information = (function() {
    var exports = {};
    exports.CELL = null;

    exports.ERROR = {};
    exports.ERROR.TYPE = function(error_val) {
        switch (error_val) {
            case error.nil: return 1;
            case error.div0: return 2;
            case error.value: return 3;
            case error.ref: return 4;
            case error.name: return 5;
            case error.num: return 6;
            case error.na: return 7;
            case error.data: return 8;
        }
        return error.na;
    };

    exports.INFO = null;

    exports.ISBLANK = function(value) {
        return value === null;
    };

    exports.ISBINARY = function (number) {
        return (/^[01]{1,10}$/).test(number);
    };

    exports.ISERR = function(value) {
        return ([error.value, error.ref, error.div0, error.num, error.name, error.nil]).indexOf(value) >= 0 ||
            (typeof value === 'number' && (isNaN(value) || !isFinite(value)));
    };

    exports.ISERROR = function(value) {
        return exports.ISERR(value) || value === error.na;
    };

    exports.ISEVEN = function(number) {
        return (Math.floor(Math.abs(number)) & 1) ? false : true;
    };

    // TODO
    exports.ISFORMULA = null;

    exports.ISLOGICAL = function(value) {
        return value === true || value === false;
    };

    exports.ISNA = function(value) {
        return value === error.na;
    };

    exports.ISNONTEXT = function(value) {
        return typeof(value) !== 'string';
    };

    exports.ISNUMBER = function(value) {
        return typeof(value) === 'number' && !isNaN(value) && isFinite(value);
    };

    exports.ISODD = function(number) {
        return (Math.floor(Math.abs(number)) & 1) ? true : false;
    };

    exports.ISREF = null;

    exports.ISTEXT = function(value) {
        return typeof(value) === 'string';
    };

    exports.N = function(value) {
        if (this.ISNUMBER(value)) {
            return value;
        }
        if (value instanceof Date) {
            return value.getTime();
        }
        if (value === true) {
            return 1;
        }
        if (value === false) {
            return 0;
        }
        if (this.ISERROR(value)) {
            return value;
        }
        return 0;
    };

    exports.NA = function() {
        return error.na;
    };

    exports.SHEET = null;

    exports.SHEETS = null;

    exports.TYPE = function(value) {
        if (this.ISNUMBER(value)) {
            return 1;
        }
        if (this.ISTEXT(value)) {
            return 2;
        }
        if (this.ISLOGICAL(value)) {
            return 4;
        }
        if (this.ISERROR(value)) {
            return 16;
        }
        if (Array.isArray(value)) {
            return 64;
        }
    };

    return exports;
})();

jexcel.methods.logical = (function() {
    var exports = {};

    exports.AND = function() {
        var args = utils.flatten(arguments);
        var result = true;
        for (var i = 0; i < args.length; i++) {
            if (!args[i]) {
                result = false;
            }
        }
        return result;
    };

    exports.CHOOSE = function() {
        if (arguments.length < 2) {
            return error.na;
        }

        var index = arguments[0];
        if (index < 1 || index > 254) {
            return error.value;
        }

        if (arguments.length < index + 1) {
            return error.value;
        }

        return arguments[index];
    };

    exports.FALSE = function() {
        return false;
    };

    exports.IF = function(test, then_value, otherwise_value) {
        return test ? then_value : otherwise_value;
    };

    exports.IFERROR = function(value, valueIfError) {
        if (ISERROR(value)) {
            return valueIfError;
        }
        return value;
    };

    exports.IFNA = function(value, value_if_na) {
        return value === error.na ? value_if_na : value;
    };

    exports.NOT = function(logical) {
        return !logical;
    };

    exports.OR = function() {
        var args = utils.flatten(arguments);
        var result = false;
        for (var i = 0; i < args.length; i++) {
            if (args[i]) {
                result = true;
            }
        }
        return result;
    };

    exports.TRUE = function() {
        return true;
    };

    exports.XOR = function() {
        var args = utils.flatten(arguments);
        var result = 0;
        for (var i = 0; i < args.length; i++) {
            if (args[i]) {
                result++;
            }
        }
        return (Math.floor(Math.abs(result)) & 1) ? true : false;
    };

    exports.SWITCH = function() {
        var result;
        if (arguments.length > 0)  {
            var targetValue = arguments[0];
            var argc = arguments.length - 1;
            var switchCount = Math.floor(argc / 2);
            var switchSatisfied = false;
            var defaultClause = argc % 2 === 0 ? null : arguments[arguments.length - 1];

            if (switchCount) {
                for (var index = 0; index < switchCount; index++) {
                    if (targetValue === arguments[index * 2 + 1]) {
                      result = arguments[index * 2 + 2];
                      switchSatisfied = true;
                      break;
                    }
                }
            }

            if (!switchSatisfied && defaultClause) {
                result = defaultClause;
            }
        }

        return result;
    };

    return exports;
})();

jexcel.methods.math = (function() {
    var exports = {};

    exports.ABS = function(number) {
        number = utils.parseNumber(number);
        if (number instanceof Error) {
            return number;
        }
        return Math.abs(utils.parseNumber(number));
    };

    exports.ACOS = function(number) {
        number = utils.parseNumber(number);
        if (number instanceof Error) {
            return number;
        }
        return Math.acos(number);
    };

    exports.ACOSH = function(number) {
        number = utils.parseNumber(number);
        if (number instanceof Error) {
            return number;
        }
        return Math.log(number + Math.sqrt(number * number - 1));
    };

    exports.ACOT = function(number) {
        number = utils.parseNumber(number);
        if (number instanceof Error) {
            return number;
        }
        return Math.atan(1 / number);
    };

    exports.ACOTH = function(number) {
        number = utils.parseNumber(number);
        if (number instanceof Error) {
            return number;
        }
        return 0.5 * Math.log((number + 1) / (number - 1));
    };

    exports.AGGREGATE = null

    exports.ARABIC = function(text) {
        // Credits: Rafa? Kukawski
        if (!/^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/.test(text)) {
            return error.value;
        }
        var r = 0;
        text.replace(/[MDLV]|C[MD]?|X[CL]?|I[XV]?/g, function(i) {
            r += {
                M: 1000,
                CM: 900,
                D: 500,
                CD: 400,
                C: 100,
                XC: 90,
                L: 50,
                XL: 40,
                X: 10,
                IX: 9,
                V: 5,
                IV: 4,
                I: 1
            }[i];
        });
        return r;
    };

    exports.ASIN = function(number) {
        number = utils.parseNumber(number);
        if (number instanceof Error) {
            return number;
        }
        return Math.asin(number);
    };

    exports.ASINH = function(number) {
        number = utils.parseNumber(number);
        if (number instanceof Error) {
            return number;
        }
        return Math.log(number + Math.sqrt(number * number + 1));
    };

    exports.ATAN = function(number) {
        number = utils.parseNumber(number);
        if (number instanceof Error) {
            return number;
        }
        return Math.atan(number);
    };

    exports.ATAN2 = function(number_x, number_y) {
        number_x = utils.parseNumber(number_x);
        number_y = utils.parseNumber(number_y);
        if (utils.anyIsError(number_x, number_y)) {
            return error.value;
        }
        return Math.atan2(number_x, number_y);
    };

    exports.ATANH = function(number) {
        number = utils.parseNumber(number);
        if (number instanceof Error) {
            return number;
        }
        return Math.log((1 + number) / (1 - number)) / 2;
    };

    exports.BASE = function(number, radix, min_length) {
        min_length = min_length || 0;

        number = utils.parseNumber(number);
        radix = utils.parseNumber(radix);
        min_length = utils.parseNumber(min_length);
        if (utils.anyIsError(number, radix, min_length)) {
            return error.value;
        }
        min_length = (min_length === undefined) ? 0 : min_length;
        var result = number.toString(radix);
        return new Array(Math.max(min_length + 1 - result.length, 0)).join('0') + result;
    };

    exports.CEILING = function(number, significance, mode) {
        significance = (significance === undefined) ? 1 : significance;
        mode = (mode === undefined) ? 0 : mode;

        number = utils.parseNumber(number);
        significance = utils.parseNumber(significance);
        mode = utils.parseNumber(mode);
        if (utils.anyIsError(number, significance, mode)) {
            return error.value;
        }
        if (significance === 0) {
            return 0;
        }

        significance = Math.abs(significance);
        if (number >= 0) {
            return Math.ceil(number / significance) * significance;
        } else {
            if (mode === 0) {
                return -1 * Math.floor(Math.abs(number) / significance) * significance;
            } else {
                return -1 * Math.ceil(Math.abs(number) / significance) * significance;
            }
        }
    };

    exports.CEILING.MATH = exports.CEILING;

    exports.CEILING.PRECISE = exports.CEILING;

    exports.COMBIN = function(number, number_chosen) {
        number = utils.parseNumber(number);
        number_chosen = utils.parseNumber(number_chosen);
        if (utils.anyIsError(number, number_chosen)) {
            return error.value;
        }
        return exports.FACT(number) / (exports.FACT(number_chosen) * exports.FACT(number - number_chosen));
    };

    exports.COMBINA = function(number, number_chosen) {
        number = utils.parseNumber(number);
        number_chosen = utils.parseNumber(number_chosen);
        if (utils.anyIsError(number, number_chosen)) {
            return error.value;
        }
        return (number === 0 && number_chosen === 0) ? 1 : exports.COMBIN(number + number_chosen - 1, number - 1);
    };

    exports.COS = function(number) {
        number = utils.parseNumber(number);
        if (number instanceof Error) {
            return number;
        }
        return Math.cos(number);
    };

    exports.COSH = function(number) {
        number = utils.parseNumber(number);
        if (number instanceof Error) {
            return number;
        }
        return (Math.exp(number) + Math.exp(-number)) / 2;
    };

    exports.COT = function(number) {
        number = utils.parseNumber(number);
        if (number instanceof Error) {
            return number;
        }
        return 1 / Math.tan(number);
    };

    exports.COTH = function(number) {
        number = utils.parseNumber(number);
        if (number instanceof Error) {
            return number;
        }
        var e2 = Math.exp(2 * number);
        return (e2 + 1) / (e2 - 1);
    };

    exports.CSC = function(number) {
        number = utils.parseNumber(number);
        if (number instanceof Error) {
            return number;
        }
        return 1 / Math.sin(number);
    };

    exports.CSCH = function(number) {
        number = utils.parseNumber(number);
        if (number instanceof Error) {
            return number;
        }
        return 2 / (Math.exp(number) - Math.exp(-number));
    };

    exports.DECIMAL = function(number, radix) {
        if (arguments.length < 1) {
            return error.value;
        }


        return parseInt(number, radix);
    };

    exports.DEGREES = function(number) {
        number = utils.parseNumber(number);
        if (number instanceof Error) {
            return number;
        }
        return number * 180 / Math.PI;
    };

    exports.EVEN = function(number) {
        number = utils.parseNumber(number);
        if (number instanceof Error) {
            return number;
        }
        return exports.CEILING(number, -2, -1);
    };

    exports.EXP = Math.exp;

    var MEMOIZED_FACT = [];
    exports.FACT = function(number) {
        number = utils.parseNumber(number);
        if (number instanceof Error) {
            return number;
        }
        var n = Math.floor(number);
        if (n === 0 || n === 1) {
            return 1;
        } else if (MEMOIZED_FACT[n] > 0) {
            return MEMOIZED_FACT[n];
        } else {
            MEMOIZED_FACT[n] = exports.FACT(n - 1) * n;
            return MEMOIZED_FACT[n];
        }
    };

    exports.FACTDOUBLE = function(number) {
        number = utils.parseNumber(number);
        if (number instanceof Error) {
            return number;
        }
        var n = Math.floor(number);
        if (n <= 0) {
            return 1;
        } else {
            return n * exports.FACTDOUBLE(n - 2);
        }
    };

    exports.FLOOR = function(number, significance, mode) {
        significance = (significance === undefined) ? 1 : significance;
        mode = (mode === undefined) ? 0 : mode;

        number = utils.parseNumber(number);
        significance = utils.parseNumber(significance);
        mode = utils.parseNumber(mode);
        if (utils.anyIsError(number, significance, mode)) {
            return error.value;
        }
        if (significance === 0) {
            return 0;
        }

        significance = Math.abs(significance);
        if (number >= 0) {
            return Math.floor(number / significance) * significance;
        } else {
            if (mode === 0) {
                return -1 * Math.ceil(Math.abs(number) / significance) * significance;
            } else {
                return -1 * Math.floor(Math.abs(number) / significance) * significance;
            }
        }
    };

    exports.FLOOR.MATH = exports.FLOOR;

    exports.GCD = null;

    exports.INT = function(number) {
        number = utils.parseNumber(number);
        if (number instanceof Error) {
            return number;
        }
        return Math.floor(number);
    };

    exports.LCM = function() {
        // Credits: Jonas Raoni Soares Silva
        var o = utils.parseNumberArray(utils.flatten(arguments));
        if (o instanceof Error) {
            return o;
        }
        for (var i, j, n, d, r = 1;
            (n = o.pop()) !== undefined;) {
            while (n > 1) {
                if (n % 2) {
                    for (i = 3, j = Math.floor(Math.sqrt(n)); i <= j && n % i; i += 2) {
                      //empty
                    }
                    d = (i <= j) ? i : n;
                } else {
                    d = 2;
                }
                for (n /= d, r *= d, i = o.length; i;
                    (o[--i] % d) === 0 && (o[i] /= d) === 1 && o.splice(i, 1)) {
                    //empty
                }
            }
        }
        return r;
    };

    exports.LN = function(number) {
        number = utils.parseNumber(number);
        if (number instanceof Error) {
            return number;
        }
        return Math.log(number);
    };

    exports.LOG = function(number, base) {
        number = utils.parseNumber(number);
        base = (base === undefined) ? 10 : utils.parseNumber(base);

        if (utils.anyIsError(number, base)) {
            return error.value;
        }

        return Math.log(number) / Math.log(base);
    };

    exports.LOG10 = function(number) {
        number = utils.parseNumber(number);
        if (number instanceof Error) {
            return number;
        }
        return Math.log(number) / Math.log(10);
    };

    exports.MDETERM = null;

    exports.MINVERSE = null;

    exports.MMULT = null;

    exports.MOD = function(dividend, divisor) {
        dividend = utils.parseNumber(dividend);
        divisor = utils.parseNumber(divisor);
        if (utils.anyIsError(dividend, divisor)) {
            return error.value;
        }
        if (divisor === 0) {
            return error.div0;
        }
        var modulus = Math.abs(dividend % divisor);
        return (divisor > 0) ? modulus : -modulus;
    };

    exports.MROUND = function(number, multiple) {
        number = utils.parseNumber(number);
        multiple = utils.parseNumber(multiple);
        if (utils.anyIsError(number, multiple)) {
            return error.value;
        }
        if (number * multiple < 0) {
            return error.num;
        }

        return Math.round(number / multiple) * multiple;
    };

    exports.MULTINOMIAL = function() {
        var args = utils.parseNumberArray(utils.flatten(arguments));
        if (args instanceof Error) {
            return args;
        }
        var sum = 0;
        var divisor = 1;
        for (var i = 0; i < args.length; i++) {
            sum += args[i];
            divisor *= exports.FACT(args[i]);
        }
        return exports.FACT(sum) / divisor;
    };

    exports.MUNIT = null;

    exports.ODD = function(number) {
        number = utils.parseNumber(number);
        if (number instanceof Error) {
            return number;
        }
        var temp = Math.ceil(Math.abs(number));
        temp = (temp & 1) ? temp : temp + 1;
        return (number > 0) ? temp : -temp;
    };

    exports.PI = function() {
        return Math.PI;
    };

    exports.POWER = function(number, power) {
        number = utils.parseNumber(number);
        power = utils.parseNumber(power);
        if (utils.anyIsError(number, power)) {
            return error.value;
        }
        var result = Math.pow(number, power);
        if (isNaN(result)) {
            return error.num;
        }

        return result;
    };

    exports.PRODUCT = function() {
        var args = utils.parseNumberArray(utils.flatten(arguments));
        if (args instanceof Error) {
            return args;
        }
        var result = 1;
        for (var i = 0; i < args.length; i++) {
            result *= args[i];
        }
        return result;
    };

    exports.QUOTIENT = function(numerator, denominator) {
        numerator = utils.parseNumber(numerator);
        denominator = utils.parseNumber(denominator);
        if (utils.anyIsError(numerator, denominator)) {
            return error.value;
        }
        return parseInt(numerator / denominator, 10);
    };

    exports.RADIANS = function(number) {
        number = utils.parseNumber(number);
        if (number instanceof Error) {
            return number;
        }
        return number * Math.PI / 180;
    };

    exports.RAND = function() {
        return Math.random();
    };

    exports.RANDBETWEEN = function(bottom, top) {
        bottom = utils.parseNumber(bottom);
        top = utils.parseNumber(top);
        if (utils.anyIsError(bottom, top)) {
            return error.value;
        }
        // Creative Commons Attribution 3.0 License
        // Copyright (c) 2012 eqcode
        return bottom + Math.ceil((top - bottom + 1) * Math.random()) - 1;
    };

    exports.ROMAN = null;

    exports.ROUND = function(number, digits) {
        number = utils.parseNumber(number);
        digits = utils.parseNumber(digits);
        if (utils.anyIsError(number, digits)) {
            return error.value;
        }
        return Math.round(number * Math.pow(10, digits)) / Math.pow(10, digits);
    };

    exports.ROUNDDOWN = function(number, digits) {
        number = utils.parseNumber(number);
        digits = utils.parseNumber(digits);
        if (utils.anyIsError(number, digits)) {
            return error.value;
        }
        var sign = (number > 0) ? 1 : -1;
        return sign * (Math.floor(Math.abs(number) * Math.pow(10, digits))) / Math.pow(10, digits);
    };

    exports.ROUNDUP = function(number, digits) {
        number = utils.parseNumber(number);
        digits = utils.parseNumber(digits);
        if (utils.anyIsError(number, digits)) {
            return error.value;
        }
        var sign = (number > 0) ? 1 : -1;
        return sign * (Math.ceil(Math.abs(number) * Math.pow(10, digits))) / Math.pow(10, digits);
    };

    exports.SEC = function(number) {
        number = utils.parseNumber(number);
        if (number instanceof Error) {
            return number;
        }
        return 1 / Math.cos(number);
    };

    exports.SECH = function(number) {
        number = utils.parseNumber(number);
        if (number instanceof Error) {
            return number;
        }
        return 2 / (Math.exp(number) + Math.exp(-number));
    };

    exports.SERIESSUM = function(x, n, m, coefficients) {
        x = utils.parseNumber(x);
        n = utils.parseNumber(n);
        m = utils.parseNumber(m);
        coefficients = utils.parseNumberArray(coefficients);
        if (utils.anyIsError(x, n, m, coefficients)) {
            return error.value;
        }
        var result = coefficients[0] * Math.pow(x, n);
        for (var i = 1; i < coefficients.length; i++) {
            result += coefficients[i] * Math.pow(x, n + i * m);
        }
        return result;
    };

    exports.SIGN = function(number) {
        number = utils.parseNumber(number);
        if (number instanceof Error) {
            return number;
        }
        if (number < 0) {
            return -1;
        } else if (number === 0) {
            return 0;
        } else {
            return 1;
        }
    };

    exports.SIN = function(number) {
        number = utils.parseNumber(number);
        if (number instanceof Error) {
            return number;
        }
        return Math.sin(number);
    };

    exports.SINH = function(number) {
        number = utils.parseNumber(number);
        if (number instanceof Error) {
            return number;
        }
        return (Math.exp(number) - Math.exp(-number)) / 2;
    };

    exports.SQRT = function(number) {
        number = utils.parseNumber(number);
        if (number instanceof Error) {
            return number;
        }
        if (number < 0) {
            return error.num;
        }
        return Math.sqrt(number);
    };

    exports.SQRTPI = function(number) {
        number = utils.parseNumber(number);
        if (number instanceof Error) {
            return number;
        }
        return Math.sqrt(number * Math.PI);
    };

    exports.SUBTOTAL = null;

    exports.ADD = function (num1, num2) {
        if (arguments.length !== 2) {
            return error.na;
        }

        num1 = utils.parseNumber(num1);
        num2 = utils.parseNumber(num2);
        if (utils.anyIsError(num1, num2)) {
            return error.value;
        }

        return num1 + num2;
    };

    exports.MINUS = function (num1, num2) {
        if (arguments.length !== 2) {
            return error.na;
        }

        num1 = utils.parseNumber(num1);
        num2 = utils.parseNumber(num2);
        if (utils.anyIsError(num1, num2)) {
            return error.value;
        }

        return num1 - num2;
    };

    exports.DIVIDE = function (dividend, divisor) {
        if (arguments.length !== 2) {
            return error.na;
        }

        dividend = utils.parseNumber(dividend);
        divisor = utils.parseNumber(divisor);
        if (utils.anyIsError(dividend, divisor)) {
            return error.value;
        }

        if (divisor === 0) {
            return error.div0;
        }

        return dividend / divisor;
    };

    exports.MULTIPLY = function (factor1, factor2) {
        if (arguments.length !== 2) {
            return error.na;
        }

        factor1 = utils.parseNumber(factor1);
        factor2 = utils.parseNumber(factor2);
        if (utils.anyIsError(factor1, factor2)) {
            return error.value;
        }

        return factor1 * factor2;
    };

    exports.GTE = function (num1, num2) {
        if (arguments.length !== 2) {
            return error.na;
        }

        num1 = utils.parseNumber(num1);
        num2 = utils.parseNumber(num2);
        if (utils.anyIsError(num1, num2)) {
            return error.error;
        }

        return num1 >= num2;
    };

    exports.LT = function (num1, num2) {
        if (arguments.length !== 2) {
            return error.na;
        }

        num1 = utils.parseNumber(num1);
        num2 = utils.parseNumber(num2);
        if (utils.anyIsError(num1, num2)) {
            return error.error;
        }

        return num1 < num2;
    };

    exports.LTE = function (num1, num2) {
        if (arguments.length !== 2) {
            return error.na;
        }

        num1 = utils.parseNumber(num1);
        num2 = utils.parseNumber(num2);
        if (utils.anyIsError(num1, num2)) {
            return error.error;
        }

        return num1 <= num2;
    };

    exports.EQ = function (value1, value2) {
        if (arguments.length !== 2) {
            return error.na;
        }

        return value1 === value2;
    };

    exports.NE = function (value1, value2) {
        if (arguments.length !== 2) {
            return error.na;
        }

        return value1 !== value2;
    };

    exports.POW = function (base, exponent) {
        if (arguments.length !== 2) {
            return error.na;
        }

        base = utils.parseNumber(base);
        exponent = utils.parseNumber(exponent);
        if (utils.anyIsError(base, exponent)) {
            return error.error;
        }

        return exports.POWER(base, exponent);
    };

    exports.SUM = function() {
        var result = 0;
        var argsKeys = Object.keys(arguments);
        for (var i = 0; i < argsKeys.length; ++i) {
            var elt = arguments[argsKeys[i]];
            if (typeof elt === 'number') {
                result += elt;
            } else if (typeof elt === 'string') {
                var parsed = parseFloat(elt);
                !isNaN(parsed) && (result += parsed);
            } else if (Array.isArray(elt)) {
                result += exports.SUM.apply(null, elt);
            }
        }
        return result;
    };

    exports.SUMIF = function(range, criteria) {
        range = utils.parseNumberArray(utils.flatten(range));
        if (range instanceof Error) {
            return range;
        }
        var result = 0;
        for (var i = 0; i < range.length; i++) {
            result += (eval(range[i] + criteria)) ? range[i] : 0; // jshint ignore:line
        }
        return result;
    };

    exports.SUMIFS = function() {
        var args = utils.argsToArray(arguments);
        var range = utils.parseNumberArray(utils.flatten(args.shift()));
        if (range instanceof Error) {
            return range;
        }
        var criteria = args;

        var n_range_elements = range.length;
        var n_criterias = criteria.length;

        var result = 0;
        for (var i = 0; i < n_range_elements; i++) {
            var el = range[i];
            var condition = '';
            for (var c = 0; c < n_criterias; c++) {
                condition += el + criteria[c];
                if (c !== n_criterias - 1) {
                    condition += '&&';
                }
            }
            if (eval(condition)) { // jshint ignore:line
                result += el;
            }
        }
        return result;
    };

    exports.SUMPRODUCT = null;

    exports.SUMSQ = function() {
        var numbers = utils.parseNumberArray(utils.flatten(arguments));
        if (numbers instanceof Error) {
            return numbers;
        }
        var result = 0;
        var length = numbers.length;
        for (var i = 0; i < length; i++) {
            result += (ISNUMBER(numbers[i])) ? numbers[i] * numbers[i] : 0;
        }
        return result;
    };

    exports.SUMX2MY2 = function(array_x, array_y) {
        array_x = utils.parseNumberArray(utils.flatten(array_x));
        array_y = utils.parseNumberArray(utils.flatten(array_y));
        if (utils.anyIsError(array_x, array_y)) {
            return error.value;
        }
        var result = 0;
        for (var i = 0; i < array_x.length; i++) {
            result += array_x[i] * array_x[i] - array_y[i] * array_y[i];
        }
        return result;
    };

    exports.SUMX2PY2 = function(array_x, array_y) {
        array_x = utils.parseNumberArray(utils.flatten(array_x));
        array_y = utils.parseNumberArray(utils.flatten(array_y));
        if (utils.anyIsError(array_x, array_y)) {
            return error.value;
        }
        var result = 0;
        array_x = utils.parseNumberArray(utils.flatten(array_x));
        array_y = utils.parseNumberArray(utils.flatten(array_y));
        for (var i = 0; i < array_x.length; i++) {
            result += array_x[i] * array_x[i] + array_y[i] * array_y[i];
        }
        return result;
    };

    exports.SUMXMY2 = function(array_x, array_y) {
        array_x = utils.parseNumberArray(utils.flatten(array_x));
        array_y = utils.parseNumberArray(utils.flatten(array_y));
        if (utils.anyIsError(array_x, array_y)) {
            return error.value;
        }
        var result = 0;
        array_x = utils.flatten(array_x);
        array_y = utils.flatten(array_y);
        for (var i = 0; i < array_x.length; i++) {
            result += Math.pow(array_x[i] - array_y[i], 2);
        }
        return result;
    };

    exports.TAN = function(number) {
        number = utils.parseNumber(number);
        if (number instanceof Error) {
            return number;
        }
        return Math.tan(number);
    };

    exports.TANH = function(number) {
        number = utils.parseNumber(number);
        if (number instanceof Error) {
            return number;
        }
        var e2 = Math.exp(2 * number);
        return (e2 - 1) / (e2 + 1);
    };

    exports.TRUNC = function(number, digits) {
        digits = (digits === undefined) ? 0 : digits;
        number = utils.parseNumber(number);
        digits = utils.parseNumber(digits);
        if (utils.anyIsError(number, digits)) {
            return error.value;
        }
        var sign = (number > 0) ? 1 : -1;
        return sign * (Math.floor(Math.abs(number) * Math.pow(10, digits))) / Math.pow(10, digits);
    };

    return exports;
})();

jexcel.methods.misc = (function() {
    var exports = {};

    exports.UNIQUE = function () {
        var result = [];
        for (var i = 0; i < arguments.length; ++i) {
            var hasElement = false;
            var element = arguments[i];

            // Check if we've already seen this element.
            for (var j = 0; j < result.length; ++j) {
                hasElement = result[j] === element;
                if (hasElement) { break; }
            }

            // If we did not find it, add it to the result.
            if (!hasElement) {
                result.push(element);
            }
        }
        return result;
    };

    exports.FLATTEN = utils.flatten;

    exports.ARGS2ARRAY = function () {
        return Array.prototype.slice.call(arguments, 0);
    };

    exports.REFERENCE = function (context, reference) {
        try {
            var path = reference.split('.');
            var result = context;
            for (var i = 0; i < path.length; ++i) {
                var step = path[i];
                if (step[step.length - 1] === ']') {
                    var opening = step.indexOf('[');
                    var index = step.substring(opening + 1, step.length - 1);
                    result = result[step.substring(0, opening)][index];
                } else {
                    result = result[step];
                }
            }
            return result;
        } catch (error) {}
    };

    exports.JOIN = function (array, separator) {
        return array.join(separator);
    };

    exports.NUMBERS = function () {
        var possibleNumbers = utils.flatten(arguments);
        return possibleNumbers.filter(function (el) {
            return typeof el === 'number';
        });
    };

    exports.NUMERAL = null;

    return exports;
})();

jexcel.methods.text = (function() {
    var exports = {};

    exports.ASC = null;

    exports.BAHTTEXT = null;

    exports.CHAR = function(number) {
        number = utils.parseNumber(number);
        if (number instanceof Error) {
            return number;
        }
        return String.fromCharCode(number);
    };

    exports.CLEAN = function(text) {
        text = text || '';
        var re = /[\0-\x1F]/g;
        return text.replace(re, "");
    };

    exports.CODE = function(text) {
        text = text || '';
        return text.charCodeAt(0);
    };

    exports.CONCATENATE = function() {
        var args = utils.flatten(arguments);

        var trueFound = 0;
        while ((trueFound = args.indexOf(true)) > -1) {
            args[trueFound] = 'TRUE';
        }

        var falseFound = 0;
        while ((falseFound = args.indexOf(false)) > -1) {
            args[falseFound] = 'FALSE';
        }

        return args.join('');
    };

    exports.DBCS = null;

    exports.DOLLAR = null;

    exports.EXACT = function(text1, text2) {
        return text1 === text2;
    };

    exports.FIND = function(find_text, within_text, position) {
        position = (position === undefined) ? 0 : position;
        return within_text ? within_text.indexOf(find_text, position - 1) + 1 : null;
    };

    exports.FIXED = null;

    exports.HTML2TEXT = function (value) {
        var result = '';

        if (value) {
            if (value instanceof Array) {
                value.forEach(function (line) {
                    if (result !== '') {
                      result += '\n';
                    }
                    result += (line.replace(/<(?:.|\n)*?>/gm, ''));
                });
            } else {
                result = value.replace(/<(?:.|\n)*?>/gm, '');
            }
        }

        return result;
    };

    exports.LEFT = function(text, number) {
        number = (number === undefined) ? 1 : number;
        number = utils.parseNumber(number);
        if (number instanceof Error || typeof text !== 'string') {
            return error.value;
        }
        return text ? text.substring(0, number) : null;
    };

    exports.LEN = function(text) {
        if (arguments.length === 0) {
            return error.error;
        }

        if (typeof text === 'string') {
            return text ? text.length : 0;
        }

        if (text.length) {
            return text.length;
        }

        return error.value;
    };

    exports.LOWER = function(text) {
        if (typeof text !== 'string') {
            return error.value;
        }
        return text ? text.toLowerCase() : text;
    };

    exports.MID = function(text, start, number) {
        start = utils.parseNumber(start);
        number = utils.parseNumber(number);
        if (utils.anyIsError(start, number) || typeof text !== 'string') {
            return number;
        }

        var begin = start - 1;
        var end = begin + number;

        return text.substring(begin, end);
    };

    exports.NUMBERVALUE = null;

    exports.PRONETIC = null;

    exports.PROPER = function(text) {
        if (text === undefined || text.length === 0) {
            return error.value;
        }
        if (text === true) {
            text = 'TRUE';
        }
        if (text === false) {
            text = 'FALSE';
        }
        if (isNaN(text) && typeof text === 'number') {
            return error.value;
        }
        if (typeof text === 'number') {
            text = '' + text;
        }

        return text.replace(/\w\S*/g, function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };

    exports.REGEXEXTRACT = function (text, regular_expression) {
        var match = text.match(new RegExp(regular_expression));
        return match ? (match[match.length > 1 ? match.length - 1 : 0]) : null;
    };

    exports.REGEXMATCH = function (text, regular_expression, full) {
        var match = text.match(new RegExp(regular_expression));
        return full ? match : !!match;
    };

    exports.REGEXREPLACE = function (text, regular_expression, replacement) {
        return text.replace(new RegExp(regular_expression), replacement);
    };

    exports.REPLACE = function(text, position, length, new_text) {
        position = utils.parseNumber(position);
        length = utils.parseNumber(length);
        if (utils.anyIsError(position, length) ||
            typeof text !== 'string' ||
            typeof new_text !== 'string') {
            return error.value;
        }
        return text.substr(0, position - 1) + new_text + text.substr(position - 1 + length);
    };

    exports.REPT = function(text, number) {
        number = utils.parseNumber(number);
        if (number instanceof Error) {
            return number;
        }
        return new Array(number + 1).join(text);
    };

    exports.RIGHT = function(text, number) {
        number = (number === undefined) ? 1 : number;
        number = utils.parseNumber(number);
        if (number instanceof Error) {
            return number;
        }
        return text ? text.substring(text.length - number) : null;
    };

    exports.SEARCH = function(find_text, within_text, position) {
        var foundAt;
        if (typeof find_text !== 'string' || typeof within_text !== 'string') {
            return error.value;
        }
        position = (position === undefined) ? 0 : position;
        foundAt = within_text.toLowerCase().indexOf(find_text.toLowerCase(), position - 1)+1;
        return (foundAt === 0)?error.value:foundAt;
    };

    exports.SPLIT = function (text, separator) {
        return text.split(separator);
    };

    exports.SUBSTITUTE = function(text, old_text, new_text, occurrence) {
        if (!text || !old_text || !new_text) {
            return text;
        } else if (occurrence === undefined) {
            return text.replace(new RegExp(old_text, 'g'), new_text);
        } else {
            var index = 0;
            var i = 0;
            while (text.indexOf(old_text, index) > 0) {
                index = text.indexOf(old_text, index + 1);
                i++;
                if (i === occurrence) {
                    return text.substring(0, index) + new_text + text.substring(index + old_text.length);
                }
            }
        }
    };

    exports.T = function(value) {
        return (typeof value === "string") ? value : '';
    };

    exports.TEXT = null;

    exports.TRIM = function(text) {
        if (typeof text !== 'string') {
            return error.value;
        }
        return text.replace(/ +/g, ' ').trim();
    };

    exports.UNICHAR = exports.CHAR;

    exports.UNICODE = exports.CODE;

    exports.UPPER = function(text) {
        if (typeof text !== 'string') {
            return error.value;
        }
        return text.toUpperCase();
    };

    exports.VALUE = null;

    return exports;
})();

jexcel.methods.stats = (function() {
    var exports = {};

    var SQRT2PI = 2.5066282746310002;

    exports.AVEDEV = null;

    exports.AVERAGE = function() {
        var range = utils.numbers(utils.flatten(arguments));
        var n = range.length;
        var sum = 0;
        var count = 0;
        for (var i = 0; i < n; i++) {
            sum += range[i];
            count += 1;
        }
        return sum / count;
    };

    exports.AVERAGEA = function() {
        var range = utils.flatten(arguments);
        var n = range.length;
        var sum = 0;
        var count = 0;
        for (var i = 0; i < n; i++) {
            var el = range[i];
            if (typeof el === 'number') {
                sum += el;
            }
            if (el === true) {
                sum++;
            }
            if (el !== null) {
                count++;
            }
        }
        return sum / count;
    };

    exports.AVERAGEIF = function(range, criteria, average_range) {
        average_range = average_range || range;
        range = utils.flatten(range);
        average_range = utils.parseNumberArray(utils.flatten(average_range));
        if (average_range instanceof Error) {
            return average_range;
        }
        var average_count = 0;
        var result = 0;
        for (var i = 0; i < range.length; i++) {
            if (eval(range[i] + criteria)) { // jshint ignore:line
                result += average_range[i];
                average_count++;
            }
        }
        return result / average_count;
    };

    exports.AVERAGEIFS = null;

    exports.COUNT = function() {
        return utils.numbers(utils.flatten(arguments)).length;
    };

    exports.COUNTA = function() {
        var range = utils.flatten(arguments);
        return range.length - exports.COUNTBLANK(range);
    };

    exports.COUNTIN = function (range, value) {
        var result = 0;
        for (var i = 0; i < range.length; i++) {
            if (range[i] === value) {
                result++;
            }
        }
        return result;
    };

    exports.COUNTBLANK = function() {
        var range = utils.flatten(arguments);
        var blanks = 0;
        var element;
        for (var i = 0; i < range.length; i++) {
            element = range[i];
            if (element === null || element === '') {
                blanks++;
            }
        }
        return blanks;
    };

    exports.COUNTIF = function(range, criteria) {
        range = utils.flatten(range);
        if (!/[<>=!]/.test(criteria)) {
            criteria = '=="' + criteria + '"';
        }
        var matches = 0;
        for (var i = 0; i < range.length; i++) {
            if (typeof range[i] !== 'string') {
                if (eval(range[i] + criteria)) { // jshint ignore:line
                    matches++;
                }
            } else {
                if (eval('"' + range[i] + '"' + criteria)) { // jshint ignore:line
                    matches++;
                }
            }
        }
        return matches;
    };

    exports.COUNTIFS = function() {
        var args = utils.argsToArray(arguments);
        var results = new Array(utils.flatten(args[0]).length);
        for (var i = 0; i < results.length; i++) {
            results[i] = true;
        }
        for (i = 0; i < args.length; i += 2) {
            var range = utils.flatten(args[i]);
            var criteria = args[i + 1];
            if (!/[<>=!]/.test(criteria)) {
                criteria = '=="' + criteria + '"';
            }
            for (var j = 0; j < range.length; j++) {
                if (typeof range[j] !== 'string') {
                    results[j] = results[j] && eval(range[j] + criteria); // jshint ignore:line
                } else {
                    results[j] = results[j] && eval('"' + range[j] + '"' + criteria); // jshint ignore:line
                }
            }
        }
        var result = 0;
        for (i = 0; i < results.length; i++) {
            if (results[i]) {
                result++;
            }
        }
        return result;
    };

    exports.COUNTUNIQUE = function () {
        return UNIQUE.apply(null, utils.flatten(arguments)).length;
    };

    exports.FISHER = function(x) {
        x = utils.parseNumber(x);
        if (x instanceof Error) {
            return x;
        }
        return Math.log((1 + x) / (1 - x)) / 2;
    };

    exports.FISHERINV = function(y) {
        y = utils.parseNumber(y);
        if (y instanceof Error) {
            return y;
        }
        var e2y = Math.exp(2 * y);
        return (e2y - 1) / (e2y + 1);
    };

    exports.FREQUENCY = function(data, bins) {
        data = utils.parseNumberArray(utils.flatten(data));
        bins = utils.parseNumberArray(utils.flatten(bins));
        if (utils.anyIsError(data, bins)) {
            return error.value;
        }
        var n = data.length;
        var b = bins.length;
        var r = [];
        for (var i = 0; i <= b; i++) {
            r[i] = 0;
            for (var j = 0; j < n; j++) {
                if (i === 0) {
                    if (data[j] <= bins[0]) {
                        r[0] += 1;
                    }
                } else if (i < b) {
                    if (data[j] > bins[i - 1] && data[j] <= bins[i]) {
                        r[i] += 1;
                    }
                } else if (i === b) {
                    if (data[j] > bins[b - 1]) {
                        r[b] += 1;
                    }
                }
            }
        }
        return r;
    };

    exports.LARGE = function(range, k) {
        range = utils.parseNumberArray(utils.flatten(range));
        k = utils.parseNumber(k);
        if (utils.anyIsError(range, k)) {
            return range;
        }
        return range.sort(function(a, b) {
            return b - a;
        })[k - 1];
    };

    exports.MAX = function() {
        var range = utils.numbers(utils.flatten(arguments));
        return (range.length === 0) ? 0 : Math.max.apply(Math, range);
    };

    exports.MAXA = function() {
        var range = utils.arrayValuesToNumbers(utils.flatten(arguments));
        return (range.length === 0) ? 0 : Math.max.apply(Math, range);
    };

    exports.MIN = function() {
        var range = utils.numbers(utils.flatten(arguments));
        return (range.length === 0) ? 0 : Math.min.apply(Math, range);
    };

    exports.MINA = function() {
        var range = utils.arrayValuesToNumbers(utils.flatten(arguments));
        return (range.length === 0) ? 0 : Math.min.apply(Math, range);
    };

    exports.MODE = {};

    exports.MODE.MULT = function() {
        // Credits: Roönaän
        var range = utils.parseNumberArray(utils.flatten(arguments));
        if (range instanceof Error) {
            return range;
        }
        var n = range.length;
        var count = {};
        var maxItems = [];
        var max = 0;
        var currentItem;

        for (var i = 0; i < n; i++) {
            currentItem = range[i];
            count[currentItem] = count[currentItem] ? count[currentItem] + 1 : 1;
            if (count[currentItem] > max) {
                max = count[currentItem];
                maxItems = [];
            }
            if (count[currentItem] === max) {
                maxItems[maxItems.length] = currentItem;
            }
        }
        return maxItems;
    };

    exports.MODE.SNGL = function() {
        var range = utils.parseNumberArray(utils.flatten(arguments));
        if (range instanceof Error) {
            return range;
        }
        return exports.MODE.MULT(range).sort(function(a, b) {
            return a - b;
        })[0];
    };

    exports.PERCENTILE = {};

    exports.PERCENTILE.EXC = function(array, k) {
        array = utils.parseNumberArray(utils.flatten(array));
        k = utils.parseNumber(k);
        if (utils.anyIsError(array, k)) {
            return error.value;
        }
        array = array.sort(function(a, b) {
            {
                return a - b;
            }
        });
        var n = array.length;
        if (k < 1 / (n + 1) || k > 1 - 1 / (n + 1)) {
            return error.num;
        }
        var l = k * (n + 1) - 1;
        var fl = Math.floor(l);
        return utils.cleanFloat((l === fl) ? array[l] : array[fl] + (l - fl) * (array[fl + 1] - array[fl]));
    };

    exports.PERCENTILE.INC = function(array, k) {
        array = utils.parseNumberArray(utils.flatten(array));
        k = utils.parseNumber(k);
        if (utils.anyIsError(array, k)) {
            return error.value;
        }
        array = array.sort(function(a, b) {
            return a - b;
        });
        var n = array.length;
        var l = k * (n - 1);
        var fl = Math.floor(l);
        return utils.cleanFloat((l === fl) ? array[l] : array[fl] + (l - fl) * (array[fl + 1] - array[fl]));
    };

    exports.PERCENTRANK = {};

    exports.PERCENTRANK.EXC = function(array, x, significance) {
        significance = (significance === undefined) ? 3 : significance;
        array = utils.parseNumberArray(utils.flatten(array));
        x = utils.parseNumber(x);
        significance = utils.parseNumber(significance);
        if (utils.anyIsError(array, x, significance)) {
            return error.value;
        }
        array = array.sort(function(a, b) {
            return a - b;
        });
        var uniques = UNIQUE.apply(null, array);
        var n = array.length;
        var m = uniques.length;
        var power = Math.pow(10, significance);
        var result = 0;
        var match = false;
        var i = 0;
        while (!match && i < m) {
            if (x === uniques[i]) {
                result = (array.indexOf(uniques[i]) + 1) / (n + 1);
                match = true;
            } else if (x >= uniques[i] && (x < uniques[i + 1] || i === m - 1)) {
                result = (array.indexOf(uniques[i]) + 1 + (x - uniques[i]) / (uniques[i + 1] - uniques[i])) / (n + 1);
                match = true;
            }
            i++;
        }
        return Math.floor(result * power) / power;
    };

    exports.PERCENTRANK.INC = function(array, x, significance) {
        significance = (significance === undefined) ? 3 : significance;
        array = utils.parseNumberArray(utils.flatten(array));
        x = utils.parseNumber(x);
        significance = utils.parseNumber(significance);
        if (utils.anyIsError(array, x, significance)) {
            return error.value;
        }
        array = array.sort(function(a, b) {
            return a - b;
        });
        var uniques = UNIQUE.apply(null, array);
        var n = array.length;
        var m = uniques.length;
        var power = Math.pow(10, significance);
        var result = 0;
        var match = false;
        var i = 0;
        while (!match && i < m) {
            if (x === uniques[i]) {
                result = array.indexOf(uniques[i]) / (n - 1);
                match = true;
            } else if (x >= uniques[i] && (x < uniques[i + 1] || i === m - 1)) {
                result = (array.indexOf(uniques[i]) + (x - uniques[i]) / (uniques[i + 1] - uniques[i])) / (n - 1);
                match = true;
            }
            i++;
        }
        return Math.floor(result * power) / power;
    };

    exports.PERMUT = function(number, number_chosen) {
        number = utils.parseNumber(number);
        number_chosen = utils.parseNumber(number_chosen);
        if (utils.anyIsError(number, number_chosen)) {
            return error.value;
        }
        return FACT(number) / FACT(number - number_chosen);
    };

    exports.PERMUTATIONA = function(number, number_chosen) {
        number = utils.parseNumber(number);
        number_chosen = utils.parseNumber(number_chosen);
        if (utils.anyIsError(number, number_chosen)) {
            return error.value;
        }
        return Math.pow(number, number_chosen);
    };

    exports.PHI = function(x) {
        x = utils.parseNumber(x);
        if (x instanceof Error) {
            return error.value;
        }
        return Math.exp(-0.5 * x * x) / SQRT2PI;
    };

    exports.PROB = function(range, probability, lower, upper) {
        if (lower === undefined) {
            return 0;
        }
        upper = (upper === undefined) ? lower : upper;

        range = utils.parseNumberArray(utils.flatten(range));
        probability = utils.parseNumberArray(utils.flatten(probability));
        lower = utils.parseNumber(lower);
        upper = utils.parseNumber(upper);
        if (utils.anyIsError(range, probability, lower, upper)) {
            return error.value;
        }

        if (lower === upper) {
            return (range.indexOf(lower) >= 0) ? probability[range.indexOf(lower)] : 0;
        }

        var sorted = range.sort(function(a, b) {
            return a - b;
        });
        var n = sorted.length;
        var result = 0;
        for (var i = 0; i < n; i++) {
            if (sorted[i] >= lower && sorted[i] <= upper) {
                result += probability[range.indexOf(sorted[i])];
            }
        }
        return result;
    };

    exports.QUARTILE = {};

    exports.QUARTILE.EXC = function(range, quart) {
        range = utils.parseNumberArray(utils.flatten(range));
        quart = utils.parseNumber(quart);
        if (utils.anyIsError(range, quart)) {
            return error.value;
        }
        switch (quart) {
            case 1:
                return exports.PERCENTILE.EXC(range, 0.25);
            case 2:
                return exports.PERCENTILE.EXC(range, 0.5);
            case 3:
                return exports.PERCENTILE.EXC(range, 0.75);
            default:
                return error.num;
        }
    };

    exports.QUARTILE.INC = function(range, quart) {
        range = utils.parseNumberArray(utils.flatten(range));
        quart = utils.parseNumber(quart);
        if (utils.anyIsError(range, quart)) {
            return error.value;
        }
        switch (quart) {
            case 1:
                return exports.PERCENTILE.INC(range, 0.25);
            case 2:
                return exports.PERCENTILE.INC(range, 0.5);
            case 3:
                return exports.PERCENTILE.INC(range, 0.75);
            default:
                return error.num;
        }
    };

    exports.RANK = {};

    exports.RANK.AVG = function(number, range, order) {
        number = utils.parseNumber(number);
        range = utils.parseNumberArray(utils.flatten(range));
        if (utils.anyIsError(number, range)) {
            return error.value;
        }
        range = utils.flatten(range);
        order = order || false;
        var sort = (order) ? function(a, b) {
            return a - b;
        } : function(a, b) {
            return b - a;
        };
        range = range.sort(sort);

        var length = range.length;
        var count = 0;
        for (var i = 0; i < length; i++) {
            if (range[i] === number) {
                count++;
            }
        }

        return (count > 1) ? (2 * range.indexOf(number) + count + 1) / 2 : range.indexOf(number) + 1;
    };

    exports.RANK.EQ = function(number, range, order) {
        number = utils.parseNumber(number);
        range = utils.parseNumberArray(utils.flatten(range));
        if (utils.anyIsError(number, range)) {
            return error.value;
        }
        order = order || false;
        var sort = (order) ? function(a, b) {
            return a - b;
        } : function(a, b) {
            return b - a;
        };
        range = range.sort(sort);
        return range.indexOf(number) + 1;
    };

    exports.RSQ = function(data_x, data_y) { // no need to flatten here, PEARSON will take care of that
        data_x = utils.parseNumberArray(utils.flatten(data_x));
        data_y = utils.parseNumberArray(utils.flatten(data_y));
        if (utils.anyIsError(data_x, data_y)) {
            return error.value;
        }
        return Math.pow(exports.PEARSON(data_x, data_y), 2);
    };

    exports.SMALL = function(range, k) {
        range = utils.parseNumberArray(utils.flatten(range));
        k = utils.parseNumber(k);
        if (utils.anyIsError(range, k)) {
            return range;
        }
        return range.sort(function(a, b) {
            return a - b;
        })[k - 1];
    };

    exports.STANDARDIZE = function(x, mean, sd) {
        x = utils.parseNumber(x);
        mean = utils.parseNumber(mean);
        sd = utils.parseNumber(sd);
        if (utils.anyIsError(x, mean, sd)) {
            return error.value;
        }
        return (x - mean) / sd;
    };

    exports.STDEV = {};

    exports.STDEV.P = function() {
        var v = exports.VAR.P.apply(this, arguments);
        return Math.sqrt(v);
    };

    exports.STDEV.S = function() {
        var v = exports.VAR.S.apply(this, arguments);
        return Math.sqrt(v);
    };

    exports.STDEVA = function() {
        var v = exports.VARA.apply(this, arguments);
        return Math.sqrt(v);
    };

    exports.STDEVPA = function() {
        var v = exports.VARPA.apply(this, arguments);
        return Math.sqrt(v);
    };

    exports.VAR = {};

    exports.VAR.P = function() {
        var range = utils.numbers(utils.flatten(arguments));
        var n = range.length;
        var sigma = 0;
        var mean = exports.AVERAGE(range);
        for (var i = 0; i < n; i++) {
            sigma += Math.pow(range[i] - mean, 2);
        }
        return sigma / n;
    };

    exports.VAR.S = function() {
        var range = utils.numbers(utils.flatten(arguments));
        var n = range.length;
        var sigma = 0;
        var mean = exports.AVERAGE(range);
        for (var i = 0; i < n; i++) {
            sigma += Math.pow(range[i] - mean, 2);
        }
        return sigma / (n - 1);
    };

    exports.VARA = function() {
        var range = utils.flatten(arguments);
        var n = range.length;
        var sigma = 0;
        var count = 0;
        var mean = exports.AVERAGEA(range);
        for (var i = 0; i < n; i++) {
            var el = range[i];
            if (typeof el === 'number') {
                sigma += Math.pow(el - mean, 2);
            } else if (el === true) {
                sigma += Math.pow(1 - mean, 2);
            } else {
                sigma += Math.pow(0 - mean, 2);
            }

            if (el !== null) {
                count++;
            }
        }
        return sigma / (count - 1);
    };

    exports.VARPA = function() {
        var range = utils.flatten(arguments);
        var n = range.length;
        var sigma = 0;
        var count = 0;
        var mean = exports.AVERAGEA(range);
        for (var i = 0; i < n; i++) {
            var el = range[i];
            if (typeof el === 'number') {
                sigma += Math.pow(el - mean, 2);
            } else if (el === true) {
                sigma += Math.pow(1 - mean, 2);
            } else {
                sigma += Math.pow(0 - mean, 2);
            }

            if (el !== null) {
                count++;
            }
        }
        return sigma / count;
    };

    exports.WEIBULL = {};

    exports.WEIBULL.DIST = function(x, alpha, beta, cumulative) {
        x = utils.parseNumber(x);
        alpha = utils.parseNumber(alpha);
        beta = utils.parseNumber(beta);
        if (utils.anyIsError(x, alpha, beta)) {
            return error.value;
        }
        return (cumulative) ? 1 - Math.exp(-Math.pow(x / beta, alpha)) : Math.pow(x, alpha - 1) * Math.exp(-Math.pow(x / beta, alpha)) * alpha / Math.pow(beta, alpha);
    };

    exports.Z = {};

    exports.Z.TEST = function(range, x, sd) {
        range = utils.parseNumberArray(utils.flatten(range));
        x = utils.parseNumber(x);
        if (utils.anyIsError(range, x)) {
            return error.value;
        }

        sd = sd || exports.STDEV.S(range);
        var n = range.length;
        return 1 - exports.NORM.S.DIST((exports.AVERAGE(range) - x) / (sd / Math.sqrt(n)), true);
    };

    return exports;
})();

jexcel.methods.utils = (function() {
    var exports = {};

    exports.PROGRESS = function(p, c) {
        var color = c ? c : 'red';
        var value = p ? p : '0';

        return '<div style="width:' + value + '%;height:4px;background-color:' + color + ';margin-top:1px;"></div>';
    };

    exports.RATING = function(v) {
        var html = '<div class="jrating">';
        for (var i = 0; i < 5; i++) {
            if (i < v) {
                html += '<div class="jrating-selected"></div>';
            } else {
                html += '<div></div>';
            }
        }
        html += '</div>';
        return html;
    }

    return exports;
})();

for (var i = 0; i < Object.keys(jexcel.methods).length; i++) {
    var methods = jexcel.methods[Object.keys(jexcel.methods)[i]];
    for (var j = 0; j < Object.keys(methods).length; j++) {
        if (typeof(methods[Object.keys(methods)[j]]) == 'function') {
            window[Object.keys(methods)[j]] = methods[Object.keys(methods)[j]];
        } else {
            window[Object.keys(methods)[j]] = function() {
                return Object.keys(methods)[j] + 'Not implemented';
            }
        }
    }
}