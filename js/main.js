!function(e){var r={};function n(c){if(r[c])return r[c].exports;var t=r[c]={i:c,l:!1,exports:{}};return e[c].call(t.exports,t,t.exports,n),t.l=!0,t.exports}n.m=e,n.c=r,n.d=function(e,r,c){n.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:c})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,r){if(1&r&&(e=n(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(n.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var t in e)n.d(c,t,function(r){return e[r]}.bind(null,t));return c},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="",n(n.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\r\n\r\n// service worker registration - remove if you're not going to use it\r\n\r\nif ('serviceWorker' in navigator) {\r\n  window.addEventListener('load', function () {\r\n    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {\r\n      // Registration was successful\r\n      console.log('ServiceWorker registration successful with scope: ', registration.scope);\r\n    }, function (err) {\r\n      // registration failed :(\r\n      console.log('ServiceWorker registration failed: ', err);\r\n    });\r\n  });\r\n}\r\n\r\n// place your code below\r\n\r\nconst hero = document.querySelector('.hero');\r\nconst text = hero.querySelector('h1');\r\nconst walk = 500; // 100px\r\n\r\nfunction shadow(e) {\r\n  const { offsetWidth: width, offsetHeight: height } = hero;\r\n  let { offsetX: x, offsetY: y } = e;\r\n\r\n  if (this !== e.target) {\r\n    x = x + e.target.offsetLeft;\r\n    y = y + e.target.offsetTop;\r\n  }\r\n\r\n  const xWalk = Math.round((x / width * walk) - (walk / 2));\r\n  const yWalk = Math.round((y / height * walk) - (walk / 2));\r\n\r\n  text.style.textShadow = `\r\n  ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),\r\n  ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),\r\n  ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),\r\n  ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)\r\n  `;\r\n}\r\n\r\nhero.addEventListener('mousemove', shadow);\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQSxTQUFTLDJDQUEyQztBQUNwRCxPQUFPLHlCQUF5Qjs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLElBQUksTUFBTSxLQUFLLE1BQU07QUFDckIsSUFBSSxXQUFXLEtBQUssTUFBTTtBQUMxQixJQUFJLE1BQU0sS0FBSyxXQUFXO0FBQzFCLElBQUksV0FBVyxLQUFLLE1BQU07QUFDMUI7QUFDQTs7QUFFQSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyBzZXJ2aWNlIHdvcmtlciByZWdpc3RyYXRpb24gLSByZW1vdmUgaWYgeW91J3JlIG5vdCBnb2luZyB0byB1c2UgaXRcclxuXHJcbmlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3Rlcignc2VydmljZXdvcmtlci5qcycpLnRoZW4oZnVuY3Rpb24gKHJlZ2lzdHJhdGlvbikge1xyXG4gICAgICAvLyBSZWdpc3RyYXRpb24gd2FzIHN1Y2Nlc3NmdWxcclxuICAgICAgY29uc29sZS5sb2coJ1NlcnZpY2VXb3JrZXIgcmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwgd2l0aCBzY29wZTogJywgcmVnaXN0cmF0aW9uLnNjb3BlKTtcclxuICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgLy8gcmVnaXN0cmF0aW9uIGZhaWxlZCA6KFxyXG4gICAgICBjb25zb2xlLmxvZygnU2VydmljZVdvcmtlciByZWdpc3RyYXRpb24gZmFpbGVkOiAnLCBlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIHBsYWNlIHlvdXIgY29kZSBiZWxvd1xyXG5cclxuY29uc3QgaGVybyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvJyk7XHJcbmNvbnN0IHRleHQgPSBoZXJvLnF1ZXJ5U2VsZWN0b3IoJ2gxJyk7XHJcbmNvbnN0IHdhbGsgPSA1MDA7IC8vIDEwMHB4XHJcblxyXG5mdW5jdGlvbiBzaGFkb3coZSkge1xyXG4gIGNvbnN0IHsgb2Zmc2V0V2lkdGg6IHdpZHRoLCBvZmZzZXRIZWlnaHQ6IGhlaWdodCB9ID0gaGVybztcclxuICBsZXQgeyBvZmZzZXRYOiB4LCBvZmZzZXRZOiB5IH0gPSBlO1xyXG5cclxuICBpZiAodGhpcyAhPT0gZS50YXJnZXQpIHtcclxuICAgIHggPSB4ICsgZS50YXJnZXQub2Zmc2V0TGVmdDtcclxuICAgIHkgPSB5ICsgZS50YXJnZXQub2Zmc2V0VG9wO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgeFdhbGsgPSBNYXRoLnJvdW5kKCh4IC8gd2lkdGggKiB3YWxrKSAtICh3YWxrIC8gMikpO1xyXG4gIGNvbnN0IHlXYWxrID0gTWF0aC5yb3VuZCgoeSAvIGhlaWdodCAqIHdhbGspIC0gKHdhbGsgLyAyKSk7XHJcblxyXG4gIHRleHQuc3R5bGUudGV4dFNoYWRvdyA9IGBcclxuICAke3hXYWxrfXB4ICR7eVdhbGt9cHggMCByZ2JhKDI1NSwwLDI1NSwwLjcpLFxyXG4gICR7eFdhbGsgKiAtMX1weCAke3lXYWxrfXB4IDAgcmdiYSgwLDI1NSwyNTUsMC43KSxcclxuICAke3lXYWxrfXB4ICR7eFdhbGsgKiAtMX1weCAwIHJnYmEoMCwyNTUsMCwwLjcpLFxyXG4gICR7eVdhbGsgKiAtMX1weCAke3hXYWxrfXB4IDAgcmdiYSgwLDAsMjU1LDAuNylcclxuICBgO1xyXG59XHJcblxyXG5oZXJvLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHNoYWRvdyk7XHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n")}]);