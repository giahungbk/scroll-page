(this["webpackJsonpscroll-page"]=this["webpackJsonpscroll-page"]||[]).push([[0],{12:function(e,n,t){},13:function(e,n,t){},14:function(e,n,t){"use strict";t.r(n);var i=t(0),r=t.n(i),o=t(2),c=t.n(o),a=(t(12),t(13),t(3)),l=t(4),s=t(6),u=t(5),d=function(e,n){var t=e.offsetWidth-window.innerWidth+window.innerHeight;n.style.height="".concat(t,"px")},w=function(e,n){var t=e.clientHeight;n.style.height="".concat(t,"px")},f=function(){for(var e=0,n=setInterval((function(){e<6?(!function(){if(document.createEvent){var e=window.document.createEvent("UIEvents");e.initUIEvent("resize",!0,!1,window,0),window.dispatchEvent(e)}else window.dispatchEvent(new Event("resize"))}(),e+=1):clearInterval(n)}),1e3),t=0,i=null,r=["ms","moz","webkit","o"],o=0;o<r.length&&!window.requestAnimationFrame;++o)window.requestAnimationFrame=window[r[o]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[r[o]+"CancelAnimationFrame"]||window[r[o]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e){var n=(new Date).getTime(),r=Math.max(0,16-(n-t));return i=window.setTimeout((function(){e(n+r)}),r),t=n+r,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})},m=function(e){Object(s.a)(t,e);var n=Object(u.a)(t);function t(e){var r,o,c;return Object(a.a)(this,t),(c=n.call(this,e)).piContainer=Object(i.createRef)(),c.fixcontainer=Object(i.createRef)(),c.funcResize=null,c.funcScroll=null,c.scrollTop=0,c.tweened=0,c.req=null,c.speed=null!==(r=c.props.speed)&&void 0!==r?r:.05,c.isHorizontalScroll=null===(o=c.props.isHorizontalScroll)||void 0===o||o,c}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;f();var n=this.speed;this.fixcontainer.current.style.position="fixed",this.fixcontainer.current.style.top="0",this.fixcontainer.current.style.left="0",this.fixcontainer.current.style.transform="matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";var t=function(){e.scrollTop=window.scrollY};!function t(){if(e.req=window.requestAnimationFrame(t),Math.abs(e.scrollTop-e.tweened)>0){var i=Math.floor(e.tweened+=n*(e.scrollTop-e.tweened));window.innerWidth>1025&&e.isHorizontalScroll?(e.fixcontainer.current.style.transform="matrix3d(1,0,0,0, 0,1,0,0, 0,0,1,0, ".concat(-1*i,",0,0,1)"),d(e.fixcontainer.current,e.piContainer.current)):(e.fixcontainer.current.style.transform="matrix3d(1,0,0,0, 0,1,0,0, 0,0,1,0, 0,".concat(-1*i,",0,1)"),w(e.fixcontainer.current,e.piContainer.current))}}();var i=function(n){return e.scrollTop=n};this.funcResize=function(){e.req=null,window.innerWidth>1025&&e.isHorizontalScroll?(e.fixcontainer.current.style.display="flex",e.fixcontainer.current.style.height="100vh",d(e.fixcontainer.current,e.piContainer.current),e.funcScroll&&(window.removeEventListener("scroll",e.funcScroll),e.funcScroll=null),e.props.scrollHandle?e.funcScroll=e.props.scrollHandle.bind(e,i):e.funcScroll=t,window.addEventListener("mousemove",e.funcMouseMove)):(e.fixcontainer.current.style.display="block",e.fixcontainer.current.style.height="initial",w(e.fixcontainer.current,e.piContainer.current),e.funcScroll&&(window.removeEventListener("scroll",e.funcScroll),e.funcScroll=null),e.funcScroll=t),e.isHorizontalScroll&&(n=window.innerWidth>1025?e.speed:1),e.isHorizontalScroll||(n=window.innerWidth>1025?e.speed:1),window.addEventListener("scroll",e.funcScroll,!1)},window.addEventListener("resize",this.funcResize,!1)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.funcScroll),window.removeEventListener("resize",this.funcResize),window.cancelAnimationFrame(this.req)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{ref:this.fixcontainer},this.props.children),r.a.createElement("div",{ref:this.piContainer}))}}]),t}(i.Component);var v=function(){return r.a.createElement(m,{isHorizontalScroll:!0,speed:.06},r.a.createElement("div",{className:"box"},"DIV 1"),r.a.createElement("div",{className:"box"},"DIV 2"),r.a.createElement("div",{className:"box"},"DIV 3"),r.a.createElement("div",{className:"box"},"DIV 4"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,n,t){e.exports=t(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.af469e3e.chunk.js.map