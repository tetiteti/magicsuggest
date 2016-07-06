/**
 * Multiple Selection Component for Bootstrap
 * Check nicolasbize.github.io/magicsuggest/ for latest updates.
 *
 * Author:       Nicolas Bize
 * Created:      Feb 8th 2013
 * Last Updated: Oct 16th 2014
 * Version:      2.1.5
 * Licence:      MagicSuggest is licenced under MIT licence (http://opensource.org/licenses/MIT)
 */
!function(e){"use strict"
var t=function(t,n){var i=this,a={allowFreeEntries:!0,allowDuplicates:!1,ajaxConfig:{},autoSelect:!0,selectFirst:!1,queryParam:"query",beforeSend:function(){},cls:"",data:null,dataUrlParams:{},disabled:!1,disabledField:null,displayField:"name",editable:!0,expanded:!1,expandOnFocus:!1,groupBy:null,hideTrigger:!1,highlight:!0,id:null,infoMsgCls:"",inputCfg:{},invalidCls:"ms-inv",matchCase:!1,maxDropHeight:290,maxEntryLength:null,maxEntryRenderer:function(e){return"Please reduce your entry by "+e+" character"+(e>1?"s":"")},maxSuggestions:null,maxSelection:10,maxSelectionRenderer:function(e){return"You cannot choose more than "+e+" item"+(e>1?"s":"")},method:"POST",minChars:0,minCharsRenderer:function(e){return"Please type "+e+" more character"+(e>1?"s":"")},mode:"local",name:null,noSuggestionText:"No suggestions",placeholder:"Type or click here",renderer:null,required:!1,resultAsString:!1,resultAsStringDelimiter:",",resultsField:"results",selectionCls:"",selectionContainer:null,selectionPosition:"inner",selectionRenderer:null,selectionStacked:!1,sortDir:"asc",sortOrder:null,strictSuggest:!1,style:"",toggleOnClick:!1,typeDelay:400,useTabKey:!1,useCommaKey:!0,useZebraStyle:!1,value:null,valueField:"id",vregex:null,vtype:null},s=e.extend({},n),r=e.extend(!0,{},a,s)
this.addToSelection=function(t,n){if(!r.maxSelection||l.length<r.maxSelection){e.isArray(t)||(t=[t])
var a=!1
e.each(t,function(t,n){(r.allowDuplicates||e.inArray(n[r.valueField],i.getValue())===-1)&&(l.push(n),a=!0)}),a===!0&&(h._renderSelection(),this.empty(),n!==!0&&e(this).trigger("selectionchange",[this,this.getSelection()]))}this.input.attr("placeholder","inner"===r.selectionPosition&&this.getValue().length>0?"":r.placeholder)},this.clear=function(e){this.removeFromSelection(l.slice(0),e)},this.collapse=function(){r.expanded===!0&&(this.combobox.detach(),r.expanded=!1,e(this).trigger("collapse",[this]))},this.disable=function(){this.container.addClass("ms-ctn-disabled"),r.disabled=!0,i.input.attr("disabled",!0)},this.empty=function(){this.input.val("")},this.enable=function(){this.container.removeClass("ms-ctn-disabled"),r.disabled=!1,i.input.attr("disabled",!1)},this.expand=function(){!r.expanded&&(this.input.val().length>=r.minChars||this.combobox.children().size()>0)&&(this.combobox.appendTo(this.container),h._processSuggestions(),r.expanded=!0,e(this).trigger("expand",[this]))},this.isDisabled=function(){return r.disabled},this.isValid=function(){var t=r.required===!1||l.length>0
return(r.vtype||r.vregex)&&e.each(l,function(e,n){t=t&&h._validateSingleItem(n[r.valueField])}),t},this.getDataUrlParams=function(){return r.dataUrlParams},this.getName=function(){return r.name},this.getSelection=function(){return l},this.getRawValue=function(){return i.input.val()},this.getValue=function(){return e.map(l,function(e){return e[r.valueField]})},this.removeFromSelection=function(t,n){e.isArray(t)||(t=[t])
var a=!1
e.each(t,function(t,n){var s=e.inArray(n[r.valueField],i.getValue())
s>-1&&(l.splice(s,1),a=!0)}),a===!0&&(h._renderSelection(),n!==!0&&e(this).trigger("selectionchange",[this,this.getSelection()]),r.expandOnFocus&&i.expand(),r.expanded&&h._processSuggestions()),this.input.attr("placeholder","inner"===r.selectionPosition&&this.getValue().length>0?"":r.placeholder)},this.getData=function(){return m},this.setData=function(e){r.data=e,h._processSuggestions()},this.setName=function(t){r.name=t,t&&(r.name+=t.indexOf("[]")>0?"":"[]"),i._valueContainer&&e.each(i._valueContainer.children(),function(e,t){t.name=r.name})},this.setSelection=function(e){this.clear(),this.addToSelection(e)},this.setValue=function(t){var n=[]
e.each(t,function(t,i){var a=!1
if(e.each(m,function(e,t){if(t[r.valueField]==i)return n.push(t),a=!0,!1}),!a)if("object"==typeof i)n.push(i)
else{var s={}
s[r.valueField]=i,s[r.displayField]=i,n.push(s)}}),n.length>0&&this.addToSelection(n)},this.setDataUrlParams=function(t){r.dataUrlParams=e.extend({},t)}
var o,l=[],c=0,d=!1,u=null,m=[],g=!1,p={BACKSPACE:8,TAB:9,ENTER:13,CTRL:17,ESC:27,SPACE:32,UPARROW:38,DOWNARROW:40,COMMA:188},h={_displaySuggestions:function(t){i.combobox.show(),i.combobox.empty()
var n=0,a=0
if(null===u)h._renderComboItems(t),n=c*t.length
else{for(var s in u)a+=1,e("<div/>",{class:"ms-res-group",html:s}).appendTo(i.combobox),h._renderComboItems(u[s].items,!0)
var o=i.combobox.find(".ms-res-group").outerHeight()
if(null!==o){var l=a*o
n=c*t.length+l}else n=c*(t.length+a)}if(n<i.combobox.height()||n<=r.maxDropHeight?i.combobox.height(n):n>=i.combobox.height()&&n>r.maxDropHeight&&i.combobox.height(r.maxDropHeight),1===t.length&&r.autoSelect===!0&&i.combobox.children().filter(":not(.ms-res-item-disabled):last").addClass("ms-res-item-active"),r.selectFirst===!0&&i.combobox.children().filter(":not(.ms-res-item-disabled):first").addClass("ms-res-item-active"),0===t.length&&""!==i.getRawValue()){var d=r.noSuggestionText.replace(/\{\{.*\}\}/,i.input.val())
h._updateHelper(d),i.collapse()}r.allowFreeEntries===!1&&(0===t.length?(e(i.input).addClass(r.invalidCls),i.combobox.hide()):e(i.input).removeClass(r.invalidCls))},_getEntriesFromStringArray:function(t){var n=[]
return e.each(t,function(t,i){var a={}
a[r.displayField]=a[r.valueField]=e.trim(i),n.push(a)}),n},_highlightSuggestion:function(t){var n=i.input.val(),a=["^","$","*","+","?",".","(",")",":","!","|","{","}","[","]"]
if(e.each(a,function(e,t){n=n.replace(t,"\\"+t)}),0===n.length)return t
var s=r.matchCase===!0?"g":"gi"
return t.replace(new RegExp("("+n+")(?!([^<]+)?>)",s),"<em>$1</em>")},_moveSelectedRow:function(e){r.expanded||i.expand()
var t,n,a,s
t=i.combobox.find(".ms-res-item:not(.ms-res-item-disabled)"),n="down"===e?t.eq(0):t.filter(":last"),a=i.combobox.find(".ms-res-item-active:not(.ms-res-item-disabled):first"),a.length>0&&("down"===e?(n=a.nextAll(".ms-res-item:not(.ms-res-item-disabled)").first(),0===n.length&&(n=t.eq(0)),s=i.combobox.scrollTop(),i.combobox.scrollTop(0),n[0].offsetTop+n.outerHeight()>i.combobox.height()&&i.combobox.scrollTop(s+c)):(n=a.prevAll(".ms-res-item:not(.ms-res-item-disabled)").first(),0===n.length&&(n=t.filter(":last"),i.combobox.scrollTop(c*t.length)),n[0].offsetTop<i.combobox.scrollTop()&&i.combobox.scrollTop(i.combobox.scrollTop()-c))),t.removeClass("ms-res-item-active"),n.addClass("ms-res-item-active")},_processSuggestions:function(t){var n=null,a=t||r.data
if(null!==a){if("function"==typeof a&&(a=a.call(i,i.getRawValue())),"string"==typeof a){e(i).trigger("beforeload",[i])
var s={}
s[r.queryParam]=i.input.val()
var o=e.extend(s,r.dataUrlParams)
return void e.ajax(e.extend({type:r.method,url:a,data:o,beforeSend:r.beforeSend,success:function(t){n="string"==typeof t?JSON.parse(t):t,h._processSuggestions(n),e(i).trigger("load",[i,n]),h._asyncValues&&(i.setValue("string"==typeof h._asyncValues?JSON.parse(h._asyncValues):h._asyncValues),h._renderSelection(),delete h._asyncValues)},error:function(){throw"Could not reach server"}},r.ajaxConfig))}m=a.length>0&&"string"==typeof a[0]?h._getEntriesFromStringArray(a):a[r.resultsField]||a
var l="remote"===r.mode?m:h._sortAndTrim(m)
h._displaySuggestions(h._group(l))}},_render:function(t){if(i.setName(r.name),i.container=e("<div/>",{class:"ms-ctn form-control "+(r.resultAsString?"ms-as-string ":"")+r.cls+(e(t).hasClass("input-lg")?" input-lg":"")+(e(t).hasClass("input-sm")?" input-sm":"")+(r.disabled===!0?" ms-ctn-disabled":"")+(r.editable===!0?"":" ms-ctn-readonly")+(r.hideTrigger===!1?"":" ms-no-trigger"),style:r.style,id:r.id}),i.container.focus(e.proxy(f._onFocus,this)),i.container.blur(e.proxy(f._onBlur,this)),i.container.keydown(e.proxy(f._onKeyDown,this)),i.container.keyup(e.proxy(f._onKeyUp,this)),i.input=e("<input/>",e.extend({type:"text",class:r.editable===!0?"":" ms-input-readonly",readonly:!r.editable,placeholder:r.placeholder,disabled:r.disabled},r.inputCfg)),i.input.focus(e.proxy(f._onInputFocus,this)),i.input.click(e.proxy(f._onInputClick,this)),i.combobox=e("<div/>",{class:"ms-res-ctn dropdown-menu"}).height(r.maxDropHeight),i.combobox.on("click","div.ms-res-item",e.proxy(f._onComboItemSelected,this)),i.combobox.on("mouseover","div.ms-res-item",e.proxy(f._onComboItemMouseOver,this)),r.selectionContainer?(i.selectionContainer=r.selectionContainer,e(i.selectionContainer).addClass("ms-sel-ctn")):i.selectionContainer=e("<div/>",{class:"ms-sel-ctn"}),i.selectionContainer.click(e.proxy(f._onFocus,this)),"inner"!==r.selectionPosition||r.selectionContainer?i.container.append(i.input):i.selectionContainer.append(i.input),i.helper=e("<span/>",{class:"ms-helper "+r.infoMsgCls}),h._updateHelper(),i.container.append(i.helper),e(t).replaceWith(i.container),!r.selectionContainer)switch(r.selectionPosition){case"bottom":i.selectionContainer.insertAfter(i.container),r.selectionStacked===!0&&(i.selectionContainer.width(i.container.width()),i.selectionContainer.addClass("ms-stacked"))
break
case"right":i.selectionContainer.insertAfter(i.container),i.container.css("float","left")
break
default:i.container.append(i.selectionContainer)}r.hideTrigger===!1&&(i.trigger=e("<div/>",{class:"ms-trigger",html:'<div class="ms-trigger-ico"></div>'}),i.trigger.click(e.proxy(f._onTriggerClick,this)),i.container.append(i.trigger)),e(window).resize(e.proxy(f._onWindowResized,this)),null===r.value&&null===r.data||("string"==typeof r.data?(h._asyncValues=r.value,h._processSuggestions()):(h._processSuggestions(),null!==r.value&&(i.setValue(r.value),h._renderSelection()))),e("body").click(function(e){i.container.hasClass("ms-ctn-focus")&&0===i.container.has(e.target).length&&e.target.className.indexOf("ms-res-item")<0&&e.target.className.indexOf("ms-close-btn")<0&&i.container[0]!==e.target&&f._onBlur()}),r.expanded===!0&&(r.expanded=!1,i.expand())},_renderComboItems:function(t,n){var a=this,s=""
e.each(t,function(t,i){var o=null!==r.renderer?r.renderer.call(a,i):i[r.displayField],l=null!==r.disabledField&&i[r.disabledField]===!0,c=e("<div/>",{class:"ms-res-item "+(n?"ms-res-item-grouped ":"")+(l?"ms-res-item-disabled ":"")+(t%2===1&&r.useZebraStyle===!0?"ms-res-odd":""),html:r.highlight===!0?h._highlightSuggestion(o):o,"data-json":JSON.stringify(i)})
s+=e("<div/>").append(c).html()}),i.combobox.append(s),c=i.combobox.find(".ms-res-item:first").outerHeight()},_renderSelection:function(){var t=this,n=0,a=0,s=[],o=r.resultAsString===!0&&!d
i.selectionContainer.find(".ms-sel-item").remove(),void 0!==i._valueContainer&&i._valueContainer.remove(),e.each(l,function(n,i){var a,c,d=null!==r.selectionRenderer?r.selectionRenderer.call(t,i):i[r.displayField],u=h._validateSingleItem(i[r.displayField])?"":" ms-sel-invalid"
o===!0?a=e("<div/>",{class:"ms-sel-item ms-sel-text "+r.selectionCls+u,html:d+(n===l.length-1?"":r.resultAsStringDelimiter)}).data("json",i):(a=e("<div/>",{class:"ms-sel-item "+r.selectionCls+u,html:d}).data("json",i),r.disabled===!1&&(c=e("<span/>",{class:"ms-close-btn"}).data("json",i).appendTo(a),c.click(e.proxy(f._onTagTriggerClick,t)))),s.push(a)}),i.selectionContainer.prepend(s),i._valueContainer=e("<div/>",{style:"display: none;"}),e.each(i.getValue(),function(t,n){var a=e("<input/>",{type:"hidden",name:r.name,value:n})
a.appendTo(i._valueContainer)}),i._valueContainer.appendTo(i.selectionContainer),"inner"!==r.selectionPosition||r.selectionContainer||(i.input.width(0),a=i.input.offset().left-i.selectionContainer.offset().left,n=i.container.width()-a-42,i.input.width(n)),l.length===r.maxSelection?h._updateHelper(r.maxSelectionRenderer.call(this,l.length)):i.helper.hide()},_selectItem:function(e){1===r.maxSelection&&(l=[]),i.addToSelection(e.data("json")),e.removeClass("ms-res-item-active"),r.expandOnFocus!==!1&&l.length!==r.maxSelection||i.collapse(),d?d&&(r.expandOnFocus||g)&&(h._processSuggestions(),g&&i.expand()):i.input.focus()},_sortAndTrim:function(t){var n=i.getRawValue(),a=[],s=[],o=i.getValue()
return n.length>0?e.each(t,function(e,t){var i=t[r.displayField];(r.matchCase===!0&&i.indexOf(n)>-1||r.matchCase===!1&&i.toLowerCase().indexOf(n.toLowerCase())>-1)&&(r.strictSuggest!==!1&&0!==i.toLowerCase().indexOf(n.toLowerCase())||a.push(t))}):a=t,e.each(a,function(t,n){(r.allowDuplicates||e.inArray(n[r.valueField],o)===-1)&&s.push(n)}),null!==r.sortOrder&&s.sort(function(e,t){return e[r.sortOrder]<t[r.sortOrder]?"asc"===r.sortDir?-1:1:e[r.sortOrder]>t[r.sortOrder]?"asc"===r.sortDir?1:-1:0}),r.maxSuggestions&&r.maxSuggestions>0&&(s=s.slice(0,r.maxSuggestions)),s},_group:function(t){return null!==r.groupBy&&(u={},e.each(t,function(e,t){var n=r.groupBy.indexOf(".")>-1?r.groupBy.split("."):r.groupBy,i=t[r.groupBy]
if("string"!=typeof n)for(i=t;n.length>0;)i=i[n.shift()]
void 0===u[i]?u[i]={title:i,items:[t]}:u[i].items.push(t)})),t},_updateHelper:function(e){i.helper.html(e),i.helper.is(":visible")||i.helper.fadeIn()},_validateSingleItem:function(e){if(null!==r.vregex&&r.vregex instanceof RegExp)return r.vregex.test(e)
if(null!==r.vtype)switch(r.vtype){case"alpha":return/^[a-zA-Z_]+$/.test(e)
case"alphanum":return/^[a-zA-Z0-9_]+$/.test(e)
case"email":return/^(\w+)([\-+.][\w]+)*@(\w[\-\w]*\.){1,5}([A-Za-z]){2,6}$/.test(e)
case"url":return/(((^https?)|(^ftp)):\/\/([\-\w]+\.)+\w{2,3}(\/[%\-\w]+(\.\w{2,})?)*(([\w\-\.\?\\\/+@&#;`~=%!]*)(\.\w{2,})?)*\/?)/i.test(e)
case"ipaddress":return/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(e)}return!0}},f={_onBlur:function(){if(i.container.removeClass("ms-ctn-focus"),i.collapse(),d=!1,""!==i.getRawValue()&&r.allowFreeEntries===!0){var t={}
t[r.displayField]=t[r.valueField]=i.getRawValue().trim(),i.addToSelection(t)}h._renderSelection(),i.isValid()===!1?i.container.addClass(r.invalidCls):""!==i.input.val()&&r.allowFreeEntries===!1&&(i.empty(),h._updateHelper("")),e(i).trigger("blur",[i])},_onComboItemMouseOver:function(t){var n=e(t.currentTarget)
n.hasClass("ms-res-item-disabled")||(i.combobox.children().removeClass("ms-res-item-active"),n.addClass("ms-res-item-active"))},_onComboItemSelected:function(t){var n=e(t.currentTarget)
n.hasClass("ms-res-item-disabled")||h._selectItem(e(t.currentTarget))},_onFocus:function(){i.input.focus()},_onInputClick:function(){i.isDisabled()===!1&&d&&r.toggleOnClick===!0&&(r.expanded?i.collapse():i.expand())},_onInputFocus:function(){if(i.isDisabled()===!1&&!d){d=!0,i.container.addClass("ms-ctn-focus"),i.container.removeClass(r.invalidCls)
var t=i.getRawValue().length
r.expandOnFocus===!0&&i.expand(),l.length===r.maxSelection?h._updateHelper(r.maxSelectionRenderer.call(this,l.length)):t<r.minChars&&h._updateHelper(r.minCharsRenderer.call(this,r.minChars-t)),h._renderSelection(),e(i).trigger("focus",[i])}},_onKeyDown:function(t){var n=i.combobox.find(".ms-res-item-active:not(.ms-res-item-disabled):first"),a=i.input.val()
if(e(i).trigger("keydown",[i,t]),t.keyCode===p.TAB&&(r.useTabKey===!1||r.useTabKey===!0&&0===n.length&&0===i.input.val().length))return void f._onBlur()
switch(t.keyCode){case p.BACKSPACE:0===a.length&&i.getSelection().length>0&&"inner"===r.selectionPosition&&(l.pop(),h._renderSelection(),e(i).trigger("selectionchange",[i,i.getSelection()]),i.input.attr("placeholder","inner"===r.selectionPosition&&i.getValue().length>0?"":r.placeholder),i.input.focus(),t.preventDefault())
break
case p.TAB:case p.ESC:t.preventDefault()
break
case p.ENTER:(""!==a||r.expanded)&&t.preventDefault()
break
case p.COMMA:r.useCommaKey===!0&&t.preventDefault()
break
case p.CTRL:g=!0
break
case p.DOWNARROW:t.preventDefault(),h._moveSelectedRow("down")
break
case p.UPARROW:t.preventDefault(),h._moveSelectedRow("up")
break
default:l.length===r.maxSelection&&t.preventDefault()}},_onKeyUp:function(t){var n,a=i.getRawValue(),s=e.trim(i.input.val()).length>0&&(!r.maxEntryLength||e.trim(i.input.val()).length<=r.maxEntryLength),c={}
if(e(i).trigger("keyup",[i,t]),t.keyCode===p.ESC&&r.expanded&&i.combobox.hide(),t.keyCode===p.TAB&&r.useTabKey===!1||t.keyCode>p.ENTER&&t.keyCode<p.SPACE)return void(t.keyCode===p.CTRL&&(g=!1))
switch(t.keyCode){case p.UPARROW:case p.DOWNARROW:t.preventDefault()
break
case p.ENTER:case p.TAB:case p.COMMA:if(t.keyCode!==p.COMMA||r.useCommaKey===!0){if(t.preventDefault(),r.expanded===!0&&(n=i.combobox.find(".ms-res-item-active:not(.ms-res-item-disabled):first"),n.length>0))return void h._selectItem(n)
s===!0&&r.allowFreeEntries===!0&&(c[r.displayField]=c[r.valueField]=a.trim(),i.addToSelection(c),i.collapse(),i.input.focus())
break}default:clearTimeout(o),l.length===r.maxSelection?h._updateHelper(r.maxSelectionRenderer.call(this,l.length)):a.length<r.minChars?(h._updateHelper(r.minCharsRenderer.call(this,r.minChars-a.length)),r.expanded===!0&&i.collapse()):r.maxEntryLength&&a.length>r.maxEntryLength?(h._updateHelper(r.maxEntryRenderer.call(this,a.length-r.maxEntryLength)),r.expanded===!0&&i.collapse()):(i.helper.hide(),r.minChars<=a.length&&(o=setTimeout(function(){r.expanded===!0?h._processSuggestions():i.expand()},r.typeDelay)))}},_onTagTriggerClick:function(t){i.removeFromSelection(e(t.currentTarget).data("json"))},_onTriggerClick:function(){if(i.isDisabled()===!1&&(r.expandOnFocus!==!0||l.length!==r.maxSelection))if(e(i).trigger("triggerclick",[i]),r.expanded===!0)i.collapse()
else{var t=i.getRawValue().length
t>=r.minChars?(i.input.focus(),i.expand()):h._updateHelper(r.minCharsRenderer.call(this,r.minChars-t))}},_onWindowResized:function(){h._renderSelection()}}
null!==t&&h._render(t)}
e.fn.magicSuggest=function(n){var i=e(this)
return 1===i.size()&&i.data("magicSuggest")?i.data("magicSuggest"):(i.each(function(i){var a=e(this)
if(!a.data("magicSuggest")){"select"===this.nodeName.toLowerCase()&&(n.data=[],n.value=[],e.each(this.children,function(t,i){i.nodeName&&"option"===i.nodeName.toLowerCase()&&(n.data.push({id:i.value,name:i.text}),e(i).attr("selected")&&n.value.push(i.value))}))
var s={}
e.each(this.attributes,function(e,t){s[t.name]="value"===t.name&&""!==t.value?JSON.parse(t.value):t.value})
var r=new t(this,e.extend([],e.fn.magicSuggest.defaults,n,s))
a.data("magicSuggest",r),r.container.data("magicSuggest",r)}}),1===i.size()?i.data("magicSuggest"):i)},e.fn.magicSuggest.defaults={}}(jQuery)
