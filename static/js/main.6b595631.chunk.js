(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,a){e.exports=a(99)},36:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(24),l=a.n(c),o=(a(36),a(25)),i=a(26),s=a(29),u=a(27),m=a(30),f=a(11),E=a.n(f),p=a(28),g=a.n(p),h=(a(94),a(95),function(e){var t=e.inputText,a=e.inputChange;return r.a.createElement("div",null,r.a.createElement("textarea",{rows:"30",cols:"60",className:"fl black bg-near-white near-black  ma5 textarea pa3",onChange:a,value:t}))}),w=(a(96),function(e){return r.a.createElement("div",null,r.a.createElement("textarea",{rows:"30",cols:"60",className:"fl black bg-near-white near-black  ma5 textarea pa4",value:e.outputText,readOnly:!0}))});a(97);var v=function(e){var t=e.buttonClick;return r.a.createElement("div",null,r.a.createElement("div",{className:"flex flex-column"},r.a.createElement("button",{className:"tc grow pa3 ma2  bw2 mt6",onClick:t},"XML"),r.a.createElement("button",{className:"tc grow pa3 ma2  bw2 ",onClick:t},"JSON"),r.a.createElement("button",{className:"tc grow  pa3 ma2  bw2 ",onClick:t},"SQL"),r.a.createElement("button",{className:"tc grow pa3 ma2  bw2 ",onClick:t},"RESET")))},b=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).onInputChange=function(t){e.setState({inputText:t.target.value}),e.setState({state:""})},e.onButtonClick=function(t){"XML"===t.target.innerHTML&&e.setState({state:"XML"}),"JSON"===t.target.innerHTML&&e.setState({state:"JSON"}),"SQL"===t.target.innerHTML&&e.setState({state:"SQL"}),"RESET"===t.target.innerHTML&&e.setState({state:"RESET"})},e.state={inputText:"",outputText:"",state:""},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.inputText,a=e.outputText,n=e.state;if(a="","XML"===n)try{E.a.check(t),a=E.a.prettify(t)}catch(l){a="XML Parser: "+l.name+" at "+l.line+","+l.column+": "+l.message}if("JSON"===n)try{var c=JSON.parse(t);a=JSON.stringify(c,null,"\t")}catch(l){a="JSON Parser: "+l.message}if("SQL"===n)try{a=g.a.format(t)}catch(l){a="XML Parser: "+l.name+" at "+l.line+","+l.column+": "+l.message}else"RESET"===n&&(a="",t="");return r.a.createElement("div",{className:"flex flex-column"},r.a.createElement("h1",{className:"center grow"},"Formatter"),r.a.createElement("div",{className:"flex center"},r.a.createElement("div",null,r.a.createElement(h,{inputChange:this.onInputChange})),r.a.createElement("div",null,r.a.createElement(v,{buttonClick:this.onButtonClick})),r.a.createElement("div",null,r.a.createElement(w,{outputText:a}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(98);l.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.6b595631.chunk.js.map