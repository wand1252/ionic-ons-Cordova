/*! Built with http://stenciljs.com */
DocsSite.loadBundle("gkczrv46",["exports","./chunk-438b3614.js"],function(t,e){var i=window.DocsSite.h,r=function(){function t(){this.unsubscribe=function(){},this.activeClass="link-active",this.exact=!1,this.strict=!0,this.custom="a",this.match=null}return t.prototype.computeMatch=function(t){return t||(t=this.activeRouter.get("location").pathname),e.matchPath(t,{path:this.urlMatch||this.url,exact:this.exact,strict:this.strict})},t.prototype.componentWillLoad=function(){var t=this;this.unsubscribe=this.activeRouter.subscribe({isMatch:this.computeMatch.bind(this),listener:function(e){t.match=e}}),this.match=this.computeMatch()},t.prototype.componentDidUnload=function(){this.unsubscribe()},t.prototype.handleClick=function(t){if(!e.isModifiedEvent(t)){if(t.preventDefault(),this.activeRouter)return this.activeRouter.get("history").push(this.getUrl(this.url));console.warn('<stencil-route-link> wasn\'t passed an instance of the router as the "router" prop!')}},t.prototype.getUrl=function(t){var e=this.activeRouter.get("root")||"/";return"/"==t.charAt(0)&&"/"==e.charAt(e.length-1)?e.slice(0,e.length-1)+t:e+t},t.prototype.render=function(){var t,e={class:(t={},t[this.activeClass]=null!==this.match,t),onClick:this.handleClick.bind(this)};return this.anchorClass&&(e.class[this.anchorClass]=!0),"a"===this.custom&&(e=Object.assign({},e,{href:this.url,title:this.anchorTitle,role:this.anchorRole,tabindex:this.anchorTabIndex})),i(this.custom,Object.assign({},e),i("slot",null))},Object.defineProperty(t,"is",{get:function(){return"stencil-route-link"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{activeClass:{type:String,attr:"active-class"},activeRouter:{context:"activeRouter"},anchorClass:{type:String,attr:"anchor-class"},anchorRole:{type:String,attr:"anchor-role"},anchorTabIndex:{type:String,attr:"anchor-tab-index"},anchorTitle:{type:String,attr:"anchor-title"},custom:{type:String,attr:"custom"},exact:{type:Boolean,attr:"exact"},match:{state:!0},strict:{type:Boolean,attr:"strict"},url:{type:String,attr:"url"},urlMatch:{type:String,attr:"url-match"}}},enumerable:!0,configurable:!0}),t}();t.StencilRouteLink=r,Object.defineProperty(t,"__esModule",{value:!0})});