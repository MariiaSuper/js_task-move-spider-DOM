document.addEventListener("click",function(t){var e=document.querySelector(".wall"),c=document.querySelector(".spider");if(t.target===e){var i=e.clientHeight,n=e.clientWidth,a=c.clientHeight,l=c.clientWidth,o=t.offsetY,r=t.offsetX;c.style.top="".concat(Math.max(0,Math.min(o-a/2,i-a)),"px"),c.style.left="".concat(Math.max(0,Math.min(r-l/2,n-l)),"px")}});
//# sourceMappingURL=index.e59c3ddf.js.map
