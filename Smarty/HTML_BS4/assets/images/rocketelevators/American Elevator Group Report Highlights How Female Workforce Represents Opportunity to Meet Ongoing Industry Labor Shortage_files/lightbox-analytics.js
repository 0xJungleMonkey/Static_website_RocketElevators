define(['jquery','lg-share','lg-thumbnail','lg-zoom','lg-video','lightbox'],function($){$('.gallery,.release-header').on('onAfterAppendSubHtml.lg',function(event,index){var galleryItems=$(this).find('.lightbox-item').length>0?$('.lightbox-item'):$('.logo-wrapper');$('#lg-download').unbind('click.analytics').one('click.analytics',function(){var type=galleryItems.eq(index).attr('data-asset-type');var assetId=galleryItems.eq(index).attr('data-src');var assetLabel=galleryItems.eq(index).attr('data-asset-label');var name=assetLabel;if(assetLabel!='YouTube'&&assetId!=''){var n=assetId.lastIndexOf('/');var str1=assetId.substr(0,n);var n1=str1.lastIndexOf('/')+1;var n2=str1.length-n1;assetId=str1.substr(n1,n2);}else if(assetId.lastIndexOf('?v=')>-1){var n=assetId.lastIndexOf('?v=')+3;assetId=assetId.substr(n,assetId.length);}else{var n=assetId.lastIndexOf('/')+1;assetId=assetId.substr(n,assetId.length);}
omniture_lightbox_download_clicks(assetId,type,name);});$('.lg-close').unbind('click.analytics').one('click.analytics',function(){var type=galleryItems.eq(index).attr('data-asset-type');var assetId=galleryItems.eq(index).attr('data-src');var assetLabel=galleryItems.eq(index).attr('data-asset-label');if(assetLabel!='YouTube'&&assetId!=''){var n=assetId.lastIndexOf('/');var str1=assetId.substr(0,n);var n1=str1.lastIndexOf('/')+1;var n2=str1.length-n1;assetId=str1.substr(n1,n2);}else if(assetId.lastIndexOf('?v=')>-1){var n=assetId.lastIndexOf('?v=')+3;assetId=assetId.substr(n,assetId.length);}else{var n=assetId.lastIndexOf('/')+1;assetId=assetId.substr(n,assetId.length);}
var action='Close';omniture_lightbox_close_clicks(assetId,assetLabel,type,action);});$('.lg-next').unbind('click.analytics').one('click.analytics',function(){omniture_prev_next_clicks();});$('.lg-prev').unbind('click.analytics').one('click.analytics',function(){omniture_prev_next_clicks();});});$('.gallery,.release-header').on('onAfterAppendSubHtml.lg',function(event,index){var data={index:index};var galleryItems=$(this).find('.lightbox-item').length>0?$('.lightbox-item'):$('.logo-wrapper');$('[id*="lg-share-"]').unbind('click.analytics').on('click.analytics',data,function(e){var shareType=this.id.substr(9);switch(shareType){case 'facebook':var shareName='Facebook';break;case 'twitter':var shareName='Twitter';break;case 'pinterest':var shareName='Pinterest';break;case 'linkedin':var shareName='LinkedIn';break;}
var loc=location.href;var assetId='';var assetType='';var assetLabel='';assetId=galleryItems.eq(e.data.index).attr('data-src');if((assetId!=''&&assetId.indexOf('youtube')>-1)||assetId.indexOf('youtu.be')>-1){assetLabel='YouTube';}
if(assetLabel!='YouTube'&&assetId!=''){var n=assetId.lastIndexOf('/');var str1=assetId.substr(0,n);var n1=str1.lastIndexOf('/')+1;var n2=str1.length-n1;assetId=str1.substr(n1,n2);}else if(assetId.lastIndexOf('?v=')>-1){var n=assetId.lastIndexOf('?v=')+3;assetId=assetId.substr(n,assetId.length);}else{var n=assetId.lastIndexOf('/')+1;assetId=assetId.substr(n,assetId.length);}
var assetType=galleryItems.eq(e.data.index).attr('data-asset-type');omniture_lightbox_share_clicks(shareName,assetId,assetType);});});});