System.register(["./p-1f78f179.system.js"],function(t){"use strict";var e,n;return{setters:[function(t){e=t.r;n=t.g}],execute:function(){var r=function(){function t(t){e(this,t);this.context={};this.renderer=function(){return null}}t.prototype.connectedCallback=function(){if(this.subscribe!=null){this.unsubscribe=this.subscribe(this.el,"context")}};t.prototype.disconnectedCallback=function(){if(this.unsubscribe!=null){this.unsubscribe()}};t.prototype.render=function(){return this.renderer(Object.assign({},this.context))};Object.defineProperty(t.prototype,"el",{get:function(){return n(this)},enumerable:true,configurable:true});return t}();t("context_consumer",r)}}});