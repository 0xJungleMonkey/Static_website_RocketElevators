define(['jquery'],function(){$('.skipNavLink').focus(function(){document.querySelector('.main-header').style.marginTop="30px";});$('.skipNavLink').blur(function(){document.querySelector('.main-header').style.marginTop="0px";});$('#skip-nav-link').focus(function(){document.querySelector('.main-header').style.marginTop="30px";});$('#skip-nav-link').blur(function(){document.querySelector('.main-header').style.marginTop="0px";});$('#skip-nav-link').click(function(){document.querySelector('#main').focus();});});