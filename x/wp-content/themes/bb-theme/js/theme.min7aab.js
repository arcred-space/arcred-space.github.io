!function(e){FLTheme={init:function(){this._bind(),this._initRetinaImages()},_bind:function(){0!=e(".fl-page-bar-nav ul.sub-menu").length&&(this._setupDropDowns(),this._enableTopNavDropDowns()),0!=e(".fl-page-nav ul.sub-menu").length&&(e(window).on("resize.fl-page-nav-sub-menu",e.throttle(500,this._enablePageNavDropDowns)),this._setupDropDowns(),this._enablePageNavDropDowns()),0!=e(".fl-page-nav ul.menu").length&&(e(".fl-page-nav ul.menu").find(".menu-item").on("click",'> a[href*="#"]:not([href="#"])',this._setupCurrentNavItem),this._setupCurrentNavItem()),0!=e(".fl-page-nav-search").length&&e(".fl-page-nav-search a.fa-search").on("click",this._toggleNavSearch),0!=e(".fl-nav-vertical").length&&(e(window).on("resize",e.throttle(500,this._navVertical)),this._navVertical()),0!=e(".fl-fixed-width.fl-nav-vertical-right").length&&(e(window).on("resize",e.throttle(500,this._updateVerticalRightPos)),this._updateVerticalRightPos()),0!=e(".fl-page-nav-centered-inline-logo").length&&(e(window).on("resize",e.throttle(500,this._centeredInlineLogo)),this._centeredInlineLogo()),0!=e("body.fl-nav-left").length&&(e(window).on("resize",e.throttle(500,this._navLeft)),this._navLeft()),0!=e("body.fl-shrink").length&&0==e("html.fl-builder-edit").length&&(e(window).on("resize",e.throttle(500,this._shrinkHeaderEnable)),this._shrinkHeaderInit(),this._shrinkHeaderEnable(),e(".fl-page-header").imagesLoaded(function(){e(window).trigger("resize")})),0!=e(".fl-page-header-fixed").length&&(e(window).on("resize.fl-page-header-fixed",e.throttle(500,this._enableFixedHeader)),this._enableFixedHeader()),0!=e("body.fl-fixed-header").length&&0==e("html.fl-builder-edit").length&&(e(window).on("resize",e.throttle(500,this._fixedHeader)),this._fixedHeader(),e(".fl-page-header").imagesLoaded(function(){e(window).trigger("resize")})),0!=e("body.fl-scroll-header").length&&0==e("html.fl-builder-edit").length&&(e(window).on("resize",e.throttle(500,this._scrollHeader)),this._scrollHeader()),0!=e(".fl-page-header-primary").find("li.mega-menu").length&&(e(window).on("resize",e.throttle(500,this._megaMenu)),this._megaMenu()),0!=e(".fl-page-header-fixed").length&&(e(window).on("scroll.fl-mega-menu-on-scroll",e.throttle(500,this._megaMenuOnScroll)),e(window).on("resize.fl-mega-menu-on-scroll",e.throttle(500,this._megaMenuOnScroll))),0!=e("html.fl-builder-edit").length&&this._fixedHeadersWhenBuilderActive(),0!=e(".fl-full-width.fl-footer-effect").length&&(e(window).on("resize",e.throttle(500,this._footerEffect)),this._footerEffect()),0!=e("body.fl-scroll-to-top").length&&this._toTop(),"undefined"!=typeof e("body").magnificPopup&&this._enableLightbox(),"undefined"==typeof e.fn.fitVids||e("body").hasClass("fl-builder")||this._enableFitVids(),FLTheme._navBackiosFix()},_isMobile:function(){return/Mobile|Android|Silk\/|Kindle|BlackBerry|Opera Mini|Opera Mobi|webOS/i.test(navigator.userAgent)},_initRetinaImages:function(){var a=window.devicePixelRatio?window.devicePixelRatio:1;a>1&&e("img[data-retina]").each(FLTheme._convertImageToRetina)},_convertImageToRetina:function(){var a=e(this),n=new Image,l=a.attr("src"),i=a.data("retina");""!=i&&(n.onload=function(){a.css("max-height",n.height),a.width(n.width),a.attr("src",i)},n.src=l)},_setupDropDowns:function(){e("ul.sub-menu").each(function(){e(this).closest("li").attr("aria-haspopup","true")})},_enableTopNavDropDowns:function(){var a=e(".fl-page-bar-nav"),n=a.find(" > li"),l=a.find("> li").has("> ul.sub-menu").find("> a");FLTheme._isMobile()?(n.hover(function(){},FLTheme._navItemMouseout),l.on("click",FLTheme._navSubMenuToggleClick)):n.hover(FLTheme._navItemMouseover,FLTheme._navItemMouseout)},_navBackiosFix:function(){ipad=null!==navigator.userAgent.match("iPhone|iPad")&&e(".menu-item-has-children").length>0,!1!==ipad&&(window.onpageshow=function(e){e.persisted&&window.location.reload()})},_enablePageNavDropDowns:function(){var a=e(".fl-page-header");a.each(FLTheme._enablePageNavDropDown)},_enablePageNavDropDown:function(){var a=e(this),n=a.find(".fl-page-nav .fl-page-nav-collapse"),l=n.find("ul li"),i=n.find("li").has("> ul.sub-menu").find("> a"),t=n.find("> ul > li").has("ul.sub-menu");e(".fl-page-nav .navbar-toggle").is(":visible")?(l.off("mouseenter mouseleave"),e("body").hasClass("fl-submenu-toggle")&&(t=n.find("> ul li").has("ul.sub-menu")),t.find("> a").off().on("click",FLTheme._navItemClickMobile),n.find(".menu").on("click",'.menu-item > a[href*="#"]',FLTheme._toggleForMobile),i.off("click",FLTheme._navSubMenuToggleClick)):(n.find("a").off("click",FLTheme._navItemClickMobile),n.find("a").off("click",FLTheme._toggleForMobile),n.removeClass("in").addClass("collapse"),l.removeClass("fl-mobile-sub-menu-open"),l.find("a").width(0).width("auto"),FLTheme._isMobile()?(l.hover(function(){},FLTheme._navItemMouseout),i.on("click",FLTheme._navSubMenuToggleClick)):l.hover(FLTheme._navItemMouseover,FLTheme._navItemMouseout))},_navItemClickMobile:function(a){var n=e(this).parent(),l=e(this).attr("href"),i=n.find("ul.sub-menu");"#"==l&&n.hasClass("fl-mobile-sub-menu-open")?(a.preventDefault(),n.removeClass("fl-mobile-sub-menu-open"),i.hide()):n.hasClass("fl-mobile-sub-menu-open")||(a.preventDefault(),n.addClass("fl-mobile-sub-menu-open"),i.fadeIn(200))},_setupCurrentNavItem:function(a){var n=e(".fl-page-nav .navbar-nav"),l="undefined"!=typeof a?e(a.target).prop("hash"):window.location.hash,i=l.length?n.find("a[href*=\\"+l+"]:not([href=\\#])"):null;null!=i&&e("body").find(l).length>0&&(e(".current-menu-item").removeClass("current-menu-item"),i.parent().addClass("current-menu-item"))},_navItemMouseover:function(){if(0!==e(this).find("ul.sub-menu").length){var a=e(this),n=a.parent(),l=a.find("ul.sub-menu"),i=l.width(),t=0,o=e(window).width(),s=0,r=0;if(0!==a.closest(".fl-sub-menu-right").length?a.addClass("fl-sub-menu-right"):e("body").hasClass("rtl")?(t=n.is("ul.sub-menu")?n.offset().left-i:a.offset().left-i,t<=0&&a.addClass("fl-sub-menu-right")):(t=n.is("ul.sub-menu")?n.offset().left+2*i:a.offset().left+i,t>o&&a.addClass("fl-sub-menu-right")),a.addClass("fl-sub-menu-open"),l.hide(),l.stop().fadeIn(200),FLTheme._hideNavSearch(),0!==a.closest(".fl-page-nav-collapse").length&&a.hasClass("mega-menu")){if(a.find(".mega-menu-spacer").length>0)return;l.first().before('<div class="mega-menu-spacer"></div>'),s=a.find(".mega-menu-spacer").offset().top,r=l.first().offset().top,a.find(".mega-menu-spacer").css("padding-top",Math.floor(parseInt(r-s))+"px")}}},_navItemMouseout:function(){var a=e(this),n=a.find("ul.sub-menu");n.stop().fadeOut({duration:200,done:FLTheme._navItemMouseoutComplete})},_navItemMouseoutComplete:function(){var a=e(this).parent();a.removeClass("fl-sub-menu-open"),a.removeClass("fl-sub-menu-right"),a.find(".mega-menu-spacer").length>0&&a.find(".mega-menu-spacer").remove(),e(this).show()},_navSubMenuToggleClick:function(a){var n=e(this).closest("li").eq(0);n.hasClass("fl-sub-menu-open")||(FLTheme._navItemMouseover.apply(n[0]),a.preventDefault())},_toggleForMobile:function(a){var n=e(".fl-page-nav .fl-page-nav-collapse"),l=e(this).attr("href"),i="";"#"!==l&&(i=l.split("#")[1],e("body").find("#"+i).length>0&&(a.preventDefault(),n.collapse("hide")))},_toggleNavSearch:function(){var a=e(".fl-page-nav-search form");a.is(":visible")?a.stop().fadeOut(200):(a.stop().fadeIn(200),e("body").on("click.fl-page-nav-search",FLTheme._hideNavSearch),e(".fl-page-nav-search .fl-search-input").focus())},_hideNavSearch:function(a){var n=e(".fl-page-nav-search form");void 0!==a&&e(a.target).closest(".fl-page-nav-search").length>0||(n.stop().fadeOut(200),e("body").off("click.fl-page-nav-search"))},_navVertical:function(){var a=e(window);a.width()>=992&&e(".fl-page-header-primary").hasClass("fl-page-nav-toggle-visible-always")&&(e("body").toggleClass("fl-nav-vertical"),e("body").hasClass("fl-nav-vertical-left")&&e("body").toggleClass("fl-nav-vertical-left"),e("body").hasClass("fl-nav-vertical-right")&&e("body").toggleClass("fl-nav-vertical-right"))},_updateVerticalRightPos:function(){var a=e(window).width(),n=e(".fl-page").width(),l=(a-n)/2;e(".fl-page-header-vertical").css("right",l)},_navLeft:function(){var a=e(window);(a.width()<992||e(".fl-page-header-primary").hasClass("fl-page-nav-toggle-visible-always"))&&e(".fl-page-header-primary .fl-page-logo-wrap").insertBefore(".fl-page-header-primary .fl-page-nav-col"),a.width()>=992&&!e(".fl-page-header-primary").hasClass("fl-page-nav-toggle-visible-always")&&e(".fl-page-header-primary .fl-page-nav-col").insertBefore(".fl-page-header-primary .fl-page-logo-wrap"),0==e(".fl-page-header-fixed").length||e(".fl-page-header-fixed").hasClass("fl-page-nav-toggle-visible-always")||e(".fl-page-header-fixed .fl-page-fixed-nav-wrap").insertBefore(".fl-page-header-fixed .fl-page-logo-wrap")},_shrinkHeaderInit:function(){e("body").addClass("fl-shrink-header-enabled"),e(window).load(function(){var a=e(".fl-logo-img");a.css("max-height",a.height()),setTimeout(function(){e(".fl-page-header").addClass("fl-shrink-header-transition")},100)})},_shrinkHeaderEnable:function(){var a=e(window);if(a.width()>=992){var n=e(".fl-page-header"),l=n.outerHeight(),i=e(".fl-page-bar"),t=0,o=0;0!=i.length?(t+=i.outerHeight(),o=t+l,0!=e("body.admin-bar").length&&(t+=32),n.css("top",t)):o=l,e(".fl-page").css("padding-top",o),e(a).on("scroll.fl-shrink-header",FLTheme._shrinkHeader)}else e(".fl-page-header").css("top",0),e(".fl-page").css("padding-top",0),e(a).off("scroll.fl-shrink-header")},_shrinkHeader:function(){var a=e(this).scrollTop(),n=250,l=e(".fl-page-header");a>n?l.addClass("fl-shrink-header"):l.removeClass("fl-shrink-header")},_fixedHeader:function(){var a=e(window),n=e(".fl-page-header"),l=0,i=0,t=e(".fl-page-bar"),o=0;if(a.width()>=992){if(l=n.outerHeight(),0!=t.length){if(o=t.outerHeight(),i=o+l,0!=e("body.admin-bar").length&&(o+=32),0!=e("html.fl-builder-edit").length);n.css("top",o)}else i=l;0===e("body.fl-scroll-header").length&&e(".fl-page").css("padding-top",i)}else e(".fl-page-header").css("top",0),e(".fl-page").css("padding-top",0)},_enableFixedHeader:function(){var a=e(window);a.width()<992?(a.off("scroll.fl-page-header-fixed"),e(".fl-page-header-fixed").hide()):a.on("scroll.fl-page-header-fixed",FLTheme._toggleFixedHeader)},_toggleFixedHeader:function(){var a=e(window),n=e(".fl-page-header-fixed"),l=n.is(":visible"),i=e(".fl-page-header-primary"),t=!1;t=0===i.length?a.scrollTop()>200:a.scrollTop()>i.height()+i.offset().top,t&&!l?n.stop().fadeIn(200):!t&&l&&n.stop().hide()},_centeredInlineLogo:function(){var a=e(window),n=e(".fl-page-nav-centered-inline-logo .fl-page-header-logo"),l=e(".fl-logo-centered-inline > .fl-page-header-logo"),i=e(".fl-page-nav-centered-inline-logo .fl-page-nav .navbar-nav"),t=i.children("li").length,o=Math.round(t/2)-1;a.width()>=992&&l.length<1&&!e(".fl-page-header-primary").hasClass("fl-page-nav-toggle-visible-always")&&(n.hasClass("fl-inline-logo-left")&&t%2!=0?i.children("li:nth( "+o+" )").before('<li class="fl-logo-centered-inline"></li>'):i.children("li:nth( "+o+" )").after('<li class="fl-logo-centered-inline"></li>'),i.children(".fl-logo-centered-inline").append(n)),a.width()<992&&(e(".fl-page-nav-centered-inline-logo .fl-page-header-row").prepend(l),e(".fl-logo-centered-inline").remove())},_scrollHeader:function(){var a=e(window),n=null,l=e(".fl-page-header-primary").data("fl-distance");n=e(0!=e(".fl-page-bar").length?".fl-page-header-primary, .fl-page-bar":".fl-page-header-primary"),a.width()>=992?a.on("scroll.fl-show-header-on-scroll",function(){e(this).scrollTop()>l?n.addClass("fl-show"):n.removeClass("fl-show")}):a.off("scroll.fl-show-header-on-scroll")},_megaMenu:function(){var a=(e(window),e(".fl-page-header")),n=a.find(".fl-page-header-container"),l=n.outerWidth(),i=null,t=0;a.find("li.mega-menu, li.mega-menu-disabled").each(function(){i=e(this),t=i.find("> ul.sub-menu").outerWidth(),"undefined"!=typeof i.data("megamenu-width")&&(t=i.data("megamenu-width")),i.hasClass("mega-menu")&&l<t||FLTheme._isResponsiveNavEnabled()?(i.data("megamenu-width",t),FLTheme._isResponsiveNavEnabled()&&i.find("> ul.sub-menu").css("display","block"),i.removeClass("mega-menu"),i.hasClass("mega-menu-disabled")||i.addClass("mega-menu-disabled")):i.hasClass("mega-menu-disabled")&&l>=t&&(i.find("> ul.sub-menu").css("display",""),i.removeClass("mega-menu-disabled"),i.hasClass("mega-menu")||i.addClass("mega-menu"),i.addClass("mega-menu-items-"+i.children("ul").children("li").length))})},_megaMenuOnScroll:function(){var a=e(window),n=e(".fl-page-header-fixed"),l=n.find(".fl-page-header-container"),i=n.is(":visible"),t=null,o=null;i&&(n.find("li.mega-menu").each(function(){t=e(this),o=t.find("> ul.sub-menu"),l.outerWidth()<o.outerWidth()?(t.removeClass("mega-menu"),t.hasClass("mega-menu-disabled")||t.addClass("mega-menu-disabled")):(t.removeClass("mega-menu-disabled"),t.hasClass("mega-menu")||t.addClass("mega-menu"),t.addClass("mega-menu-items-"+t.children("ul").children("li").length))}),a.off("scroll.fl-mega-menu-on-scroll"),a.off("resize.fl-mega-menu-on-scroll"))},_fixedHeadersWhenBuilderActive:function(){0!=e("body.fl-shrink").length&&e("body").removeClass("fl-shrink"),0!=e("body.fl-fixed-header").length&&e("body").removeClass("fl-fixed-header"),0!=e("body.fl-scroll-header").length&&e("body").removeClass("fl-scroll-header")},_footerEffect:function(){e(window).width()>=768?e(".fl-page").css("margin-bottom",e(".fl-page-footer-wrap").height()):e(".fl-page").css("margin-bottom",0)},_toTop:function(){var a=e("#fl-to-top");a.each(function(){e(this).click(function(){return e("html,body").animate({scrollTop:0},"linear"),!1})}),e(window).scroll(function(){e(this).scrollTop()>800?a.fadeIn():a.fadeOut()})},_enableLightbox:function(){var a=e("body");a.hasClass("fl-builder")||a.hasClass("woocommerce")||e(".fl-content a").filter(function(){return/\.(png|jpg|jpeg|gif)(\?.*)?$/i.test(this.href)}).magnificPopup({closeBtnInside:!1,type:"image",gallery:{enabled:!0}})},_enableFitVids:function(){e(".fl-post-content").fitVids()},_isResponsiveNavEnabled:function(){var a=e(window);return enabled=!1,(e(".fl-page-nav-toggle-visible-always").length>0||e(".fl-page-nav-toggle-visible-medium-mobile").length>0&&a.width()<992||e(".fl-page-nav-toggle-visible-mobile").length>0&&a.width()<768)&&(enabled=!0),enabled}},e(function(){FLTheme.init()})}(jQuery);