/*<!--*/(function() {var qss="&cb="+Math.floor(99999999999*Math.random());try{qss+="&ref="+encodeURIComponent(document.referrer)}catch(e$$12){}try{qss+="&sc_r="+encodeURIComponent(screen.width+"x"+screen.height)}catch(e$$13){}try{qss+="&sc_d="+encodeURIComponent(screen.colorDepth)}catch(e$$14){}
var callDis=function(c,d){var a=function(){callDisInternal(c,d)};"complete"===document.readyState?setTimeout(a):window.addEventListener?window.addEventListener("load",a,!1):window.attachEvent("onload",a)},disCalled=!1,callDisInternal=function(c,d){if(!disCalled){disCalled=!0;var a="//"+d+"/dis/dis.aspx",b=document.createElement("iframe");b.width=b.height="0";b.style.display="none";b.src=(a+"?p="+c+qss).substring(0,2E3);(a=document.getElementById("criteoTagsContainer"))?a.appendChild(b):criteo_q.push({event:"appendTag",
element:b})}};

callDis(14086, 'dis.eu.criteo.com');
})();
(function() {var callDestination=function(){return function b(e,c,d){var a=new Image(1,1);typeof c===typeof b&&(a.onload=function(){a.onload=null;a.onerror=null;c()});typeof d===typeof b&&(a.onerror=function(){a.onload=null;a.onerror=null;d()});a.src=e}}();
var cto_fw_url = '//er.criteo.com/criteohandler?cb=a496d8ce84&ctoUID=5af1fb67-070a-413b-900a-dbccbdf48357&a=14086&v=4.0.0&p0=e%3dvh&p1=e%3dexd%26ref%3dhttp%253A%252F%252Flocalhost&p2=e%3ddis&adce=1';
callDestination(cto_fw_url);})();



/*-->*/