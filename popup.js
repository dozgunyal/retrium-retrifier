// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


function click(e) {
  chrome.tabs.executeScript(null,
      {code:"function changeit() { var caesarShift=function(r,a){if(0>a)return caesarShift(r,a+26);for(var t='',e=0;e<r.length;e++){var f=r[e];if(f.match(/[a-z]/i)){var i=r.charCodeAt(e);65>i||i>90?97>i||i>122||(f=String.fromCharCode((i-97+a)%26+97)):f=String.fromCharCode((i-65+a)%26+65)}t+=f}return t}; for(var divs=document.getElementsByClassName('noselect'),i=0;i<divs.length;i++){ if(!divs[i].classList.contains('retrified')){ divs[i].innerHTML=caesarShift(divs[i].innerHTML,25);divs[i].style.color='black';divs[i].style.textShadow='none'; divs[i].classList.add('retrified'); }}} changeit(); "});
  window.close();
}

document.addEventListener('DOMContentLoaded', function () {
   click(); 
});
