(function(t){function e(e){for(var s,o,i=e[0],l=e[1],c=e[2],p=0,d=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],s=!0,i=1;i<n.length;i++){var l=n[i];0!==a[l]&&(s=!1)}s&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var s={},a={app:0},r=[];function o(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=s,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(n,s,function(e){return t[e]}.bind(null,s));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("task",{attrs:{tasks:t.tasks}})],1)},r=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"task"},[t._m(0),n("div",{staticClass:"form"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newTask,expression:"newTask"}],attrs:{type:"text",placeholder:"Add New Task"},domProps:{value:t.newTask},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTask(e)},input:function(e){e.target.composing||(t.newTask=e.target.value)}}}),n("button",{on:{click:t.addTask}},[n("i",{staticClass:"fas fa-plus"})])]),n("div",{staticClass:"taskItems"},[n("ul",t._l(t.tasks,(function(e,s){return n("task-item",{key:e.id,attrs:{task:e},on:{remove:function(e){return t.removeTask(s)},complete:function(n){return t.completeTask(e)}}})})),1)]),n("div",{staticClass:"clearBtns"},[n("button",{on:{click:t.clearCompleted}},[t._v("Clear completed")]),n("button",{on:{click:t.clearAll}},[t._v("Clear all")])]),n("div",{staticClass:"pendingTasks"},[n("h1",[t._v("Today Remaning Tasks: "+t._s(t.incomplete))])])])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title"},[n("h1",[t._v("Today Tasks List")])])}],l=(n("4de4"),n("a434"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("button",{class:t.className,on:{click:function(e){return e.target!==e.currentTarget?null:t.$emit("complete")}}},[t._v(" "+t._s(t.task.title)+" ")]),n("button",{on:{click:function(e){return t.$emit("remove")}}},[n("i",{staticClass:"far fa-trash-alt"})])])}),c=[],u=(n("a15b"),{name:"TaskItem",props:["task"],computed:{className:function(){var t=["toggle"];return this.task.completed&&t.push("toggle-completed"),t.join(" ")}}}),p=u,d=n("2877"),f=Object(d["a"])(p,l,c,!1,null,null,null),m=f.exports,k={name:"Task",props:["tasks"],components:{TaskItem:m},data:function(){return{newTask:""}},computed:{incomplete:function(){return this.tasks.filter(this.inProgress).length}},methods:{addTask:function(){this.newTask&&(this.tasks.push({title:this.newTask,completed:!1}),this.newTask="")},inProgress:function(t){return!this.isCompleted(t)},isCompleted:function(t){return t.completed},clearCompleted:function(){this.tasks=this.tasks.filter(this.inProgress)},clearAll:function(){this.tasks=[]},completeTask:function(t){t.completed=!t.completed},removeTask:function(t){this.tasks.splice(t,1)}}},v=k,h=Object(d["a"])(v,o,i,!1,null,null,null),T=h.exports,b={name:"App",components:{Task:T},data:function(){return{tasks:[{id:1,title:"Read Books",completed:!1},{id:2,title:"Buy Hosting",completed:!1},{id:3,title:"Learn Vue.JS",completed:!0},{id:4,title:"Read Newpaper",completed:!0}]}}},g=b,y=Object(d["a"])(g,a,r,!1,null,null,null),_=y.exports;n("5aea");s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(_)}}).$mount("#app")},"5aea":function(t,e,n){}});
//# sourceMappingURL=app.c8ddc8a7.js.map