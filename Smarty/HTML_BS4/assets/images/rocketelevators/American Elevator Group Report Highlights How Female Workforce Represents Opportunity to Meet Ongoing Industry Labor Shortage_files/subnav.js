define(['jquery'],function($){$(".clickable_div").click(function(){window.location=$(this).find("a").attr("href");return true;});$('.clickable_div').keypress(function(e){if((e.keyCode||e.which)==13){window.location=$(this).find("a").attr("href");}});ele=document.querySelector('.padding-lang');if(ele){$('.navbar-right').css('padding-right','20px');}
elePage=document.querySelector('.pagination .active');if(elePage){$('.pagination .active a').attr("aria-current","page");}
var delay=250,openSubnav,closeSubnav,noAnchor,openTierTwo,closeTierTwo,currentPage,globalSubnav=$('.navigation-menu');var mainAnchors=$('.nav-main .navbar-nav > li > a');if($('body').hasClass('news')){currentPage='news';}
else if($('body').hasClass('home')||$('body').hasClass('prncom_resources')){currentPage='news';}
else if($('body').hasClass('solutions')){currentPage='solutions';}else if($('body').hasClass('products')||$('body').hasClass('product')){currentPage='products';}else if($('body').hasClass('contact')){currentPage='contact';}
var currentPagepath=window.location.href;var openCurrent;(openCurrent=function openCurrent(){if(currentPage){if(currentPage=="news"){$('#sub-nav-tier').css('display','block');$('#mainNav-news').css('display','block');$('#mainNav-contact').css('display','none');$('#mainNav-products').css('display','none');}
else if(currentPage=="products"){$('#sub-nav-tier').css('display','block');$('#mainNav-contact').css('display','none');$('#mainNav-news').css('display','none');$('#products-submenu').css('display','none');}
else if(currentPage=="contact"){$('#sub-nav-tier').css('display','block');$('#mainNav-products').css('display','none');$('#mainNav-news').css('display','none');$('#contact-submenu').css('display','none');}
if($('body').hasClass('prnj_my-prnewswire')||$('body').hasClass('prnj_home-logged-in')){$('#sub-nav-tier').css('display','none');}
var target=$('.nav-subnav .'+currentPage);$('.navigation-menu nav.navbar').hide();$('.nav-main .navbar-nav > li > a').removeClass('open');$('.nav-main .navbar-nav > li > a').removeClass('open');if($(self).parent().hasClass('active')===false){$(self).addClass('open');}
globalSubnav.show();target.show();}else{$('.nav-main .navbar-nav > li > a').removeClass('open');}})();$('.nav-tier').each(function(){var tierFourCount=$(this).find('li').length;if(tierFourCount>5){$(this).addClass('col-xs-2 col_item col_item_list2');}else{}});var isMobile=false;if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)))isMobile=true;var tierThree=function(e){var hasChild=($(this).find('.nav-tier').length>0)?true:false;var tierFourHeight=$(this).find('.nav-tier').outerHeight()+64;if(hasChild){$(this).parent().css('min-height',tierFourHeight);$('.tier-three li').removeClass('open');$(this).addClass('open');$('.nav-tier').removeClass('visible');$(this).children().addClass('visible');}
e.stopPropagation();return;};if(isMobile===false){$('.tier-three .left > li').on('mouseenter',tierThree);$('.nav-subnav .dropdown').on('click',function(){$(this).on('shown.bs.dropdown',function(){$(tierThreeLi).trigger('mouseenter');});var tierThreeLi=$(this).find('.tier-three .left > li:first-child');$(this).find('.tier-three .left > li').removeClass('open');$(this).find(tierThreeLi).addClass('open');$(tierThreeLi).find('.nav-tier').addClass('visible');});}else{$('.nav-subnav .dropdown-menu').on("hide.bs.dropdown",function(e){stopPropagation();});$('.nav-subnav ul.nav > .dropdown').on('shown.bs.dropdown',function(){var tierThreeLi=$(this).find('.tier-three .left > li:first-child');$(this).find('.tier-three .left > li').removeClass('open');$(tierThreeLi).find('.nav-tier').addClass('visible');$(this).find(tierThreeLi).addClass('open');if($(window).width()<769){$('.nav-tier').width(487);$('.nav-sticky .nav-tier').width(380);}else{$('.nav-tier').width(637);$('.nav-sticky .nav-tier').width(440);$('.nav-sticky .nav-tier li').addClass('word-break');}
$('.tier-three .left > li').on('click',tierThree);$(tierThreeLi).trigger('click');})}
arabiclang=$("meta[http-equiv='Content-Language']").attr("content");if(arabiclang=="he"|arabiclang=="ar"){document.querySelector('#main').className+="arabicdir";document.querySelector('.swaping-class-left').className+=" col-md-push-4";document.querySelector('.swaping-class-right').className+=" col-md-pull-8";document.querySelector('.swap-detail-explore').className+=" col-md-push-3";document.querySelector('.swap-detail-source').className+=" col-md-pull-7";}});$('body').on('hidden.bs.modal','.modal',function(){$(this).removeData('bs.modal');});prnjnews=document.querySelector('.prnmedia');if(prnjnews){elc=document.querySelector('.news-release ');if(elc!=null){elc.className+=" prnjnewsdetail";}
selectorNewsoverview=document.querySelector('.news-overview');if(selectorNewsoverview!=null){selectorNewsoverview.className+=" newsmobileTop";}
selectorHeadline=document.querySelector('.headline-listing');if(selectorHeadline!=null){selectorHeadline.className+=" headlinemobileTop";}
selectorOrgsearch=document.querySelector('.newsSearchResult');if(selectorOrgsearch!=null){selectorOrgsearch.className+=" orgsearchmobile";}
selectorAdvsearch=document.querySelector('.advanceSearch ');if(selectorAdvsearch!=null){selectorAdvsearch.className+=" advsearchmobile";}}