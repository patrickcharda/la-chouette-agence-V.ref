!function(t){function e(t){return new RegExp("^"+t+"$")}function i(t,e){for(var i=Array.prototype.slice.call(arguments).splice(2),a=t.split("."),n=a.pop(),o=0;o<a.length;o++)e=e[a[o]];return e[n].apply(this,i)}var a=[],n={options:{prependExistingHelpBlock:!1,sniffHtml:!0,preventSubmit:!0,submitError:!1,submitSuccess:!1,semanticallyStrict:!1,autoAdd:{helpBlocks:!0},filter:function(){return!0}},methods:{init:function(e){var i=t.extend(!0,{},n);i.options=t.extend(!0,i.options,e);var r=this,l=t.unique(r.map(function(){return t(this).parents("form")[0]}).toArray());return t(l).bind("submit",function(e){var a=t(this),n=0,o=a.find("input,textarea,select").not("[type=submit],[type=image]").filter(i.options.filter);o.trigger("submit.validation").trigger("validationLostFocus.validation"),o.each(function(e,i){var a=t(i),o=a.parents(".form-group, .checkbox").first();o.hasClass("warning")&&(o.removeClass("warning").addClass("error"),n++)}),o.trigger("validationLostFocus.validation"),n?(i.options.preventSubmit&&e.preventDefault(),a.addClass("error"),t.isFunction(i.options.submitError)&&i.options.submitError(a,e,o.jqBootstrapValidation("collectErrors",!0))):(a.removeClass("error"),t.isFunction(i.options.submitSuccess)&&i.options.submitSuccess(a,e))}),this.each(function(){var e=t(this),n=e.parents(".form-group, .checkbox").first(),r=n.find(".help-block").first(),l=e.parents("form").first(),d=[];if(!r.length&&i.options.autoAdd&&i.options.autoAdd.helpBlocks&&(r=t('<div class="help-block" />'),n.append(r),a.push(r[0])),i.options.sniffHtml){var c="";if(void 0!==e.attr("pattern")&&(c="Not in the expected format<!-- data-validation-pattern-message to override -->",e.data("validationPatternMessage")&&(c=e.data("validationPatternMessage")),e.data("validationPatternMessage",c),e.data("validationPatternRegex",e.attr("pattern"))),void 0!==e.attr("max")||void 0!==e.attr("aria-valuemax")){var h=void 0!==e.attr("max")?e.attr("max"):e.attr("aria-valuemax");c="Too high: Maximum of '"+h+"'<!-- data-validation-max-message to override -->",e.data("validationMaxMessage")&&(c=e.data("validationMaxMessage")),e.data("validationMaxMessage",c),e.data("validationMaxMax",h)}if(void 0!==e.attr("min")||void 0!==e.attr("aria-valuemin")){var p=void 0!==e.attr("min")?e.attr("min"):e.attr("aria-valuemin");c="Too low: Minimum of '"+p+"'<!-- data-validation-min-message to override -->",e.data("validationMinMessage")&&(c=e.data("validationMinMessage")),e.data("validationMinMessage",c),e.data("validationMinMin",p)}void 0!==e.attr("maxlength")&&(c="Too long: Maximum of '"+e.attr("maxlength")+"' characters<!-- data-validation-maxlength-message to override -->",e.data("validationMaxlengthMessage")&&(c=e.data("validationMaxlengthMessage")),e.data("validationMaxlengthMessage",c),e.data("validationMaxlengthMaxlength",e.attr("maxlength"))),void 0!==e.attr("minlength")&&(c="Too short: Minimum of '"+e.attr("minlength")+"' characters<!-- data-validation-minlength-message to override -->",e.data("validationMinlengthMessage")&&(c=e.data("validationMinlengthMessage")),e.data("validationMinlengthMessage",c),e.data("validationMinlengthMinlength",e.attr("minlength"))),(void 0!==e.attr("required")||void 0!==e.attr("aria-required"))&&(c=i.builtInValidators.required.message,e.data("validationRequiredMessage")&&(c=e.data("validationRequiredMessage")),e.data("validationRequiredMessage",c)),void 0!==e.attr("type")&&"number"===e.attr("type").toLowerCase()&&(c=i.builtInValidators.number.message,e.data("validationNumberMessage")&&(c=e.data("validationNumberMessage")),e.data("validationNumberMessage",c)),void 0!==e.attr("type")&&"email"===e.attr("type").toLowerCase()&&(c="Not a valid email address<!-- data-validator-validemail-message to override -->",e.data("validationValidemailMessage")?c=e.data("validationValidemailMessage"):e.data("validationEmailMessage")&&(c=e.data("validationEmailMessage")),e.data("validationValidemailMessage",c)),void 0!==e.attr("minchecked")&&(c="Not enough options checked; Minimum of '"+e.attr("minchecked")+"' required<!-- data-validation-minchecked-message to override -->",e.data("validationMincheckedMessage")&&(c=e.data("validationMincheckedMessage")),e.data("validationMincheckedMessage",c),e.data("validationMincheckedMinchecked",e.attr("minchecked"))),void 0!==e.attr("maxchecked")&&(c="Too many options checked; Maximum of '"+e.attr("maxchecked")+"' required<!-- data-validation-maxchecked-message to override -->",e.data("validationMaxcheckedMessage")&&(c=e.data("validationMaxcheckedMessage")),e.data("validationMaxcheckedMessage",c),e.data("validationMaxcheckedMaxchecked",e.attr("maxchecked")))}void 0!==e.data("validation")&&(d=e.data("validation").split(",")),t.each(e.data(),function(t,e){var i=t.replace(/([A-Z])/g,",$1").split(",");"validation"===i[0]&&i[1]&&d.push(i[1])});var u=d,g=[];do t.each(d,function(t,e){d[t]=o(e)}),d=t.unique(d),g=[],t.each(u,function(a,n){if(void 0!==e.data("validation"+n+"Shortcut"))t.each(e.data("validation"+n+"Shortcut").split(","),function(t,e){g.push(e)});else if(i.builtInValidators[n.toLowerCase()]){var s=i.builtInValidators[n.toLowerCase()];"shortcut"===s.type.toLowerCase()&&t.each(s.shortcut.split(","),function(t,e){e=o(e),g.push(e),d.push(e)})}}),u=g;while(u.length>0);var f={};t.each(d,function(a,n){var s=e.data("validation"+n+"Message"),r=void 0!==s,l=!1;if(s=s?s:"'"+n+"' validation failed <!-- Add attribute 'data-validation-"+n.toLowerCase()+"-message' to input to change this message -->",t.each(i.validatorTypes,function(i,a){void 0===f[i]&&(f[i]=[]),l||void 0===e.data("validation"+n+o(a.name))||(f[i].push(t.extend(!0,{name:o(a.name),message:s},a.init(e,n))),l=!0)}),!l&&i.builtInValidators[n.toLowerCase()]){var d=t.extend(!0,{},i.builtInValidators[n.toLowerCase()]);r&&(d.message=s);var c=d.type.toLowerCase();"shortcut"===c?l=!0:t.each(i.validatorTypes,function(i,a){void 0===f[i]&&(f[i]=[]),l||c!==i.toLowerCase()||(e.data("validation"+n+o(a.name),d[a.name.toLowerCase()]),f[c].push(t.extend(d,a.init(e,n))),l=!0)})}l||t.error("Cannot find validation info for '"+n+"'")}),r.data("original-contents",r.data("original-contents")?r.data("original-contents"):r.html()),r.data("original-role",r.data("original-role")?r.data("original-role"):r.attr("role")),n.data("original-classes",n.data("original-clases")?n.data("original-classes"):n.attr("class")),e.data("original-aria-invalid",e.data("original-aria-invalid")?e.data("original-aria-invalid"):e.attr("aria-invalid")),e.bind("validation.validation",function(a,n){var o=s(e),r=[];return t.each(f,function(a,s){(o||o.length||n&&n.includeEmpty||i.validatorTypes[a].blockSubmit&&n&&n.submitting)&&t.each(s,function(t,n){i.validatorTypes[a].validate(e,o,n)&&r.push(n.message)})}),r}),e.bind("getValidators.validation",function(){return f}),e.bind("submit.validation",function(){return e.triggerHandler("change.validation",{submitting:!0})}),e.bind(["keyup","focus","blur","click","keydown","keypress","change"].join(".validation ")+".validation",function(a,o){var d=s(e),c=[];n.find("input,textarea,select").each(function(i,a){var n=c.length;if(t.each(t(a).triggerHandler("validation.validation",o),function(t,e){c.push(e)}),c.length>n)t(a).attr("aria-invalid","true");else{var s=e.data("original-aria-invalid");t(a).attr("aria-invalid",void 0!==s?s:!1)}}),l.find("input,select,textarea").not(e).not('[name="'+e.attr("name")+'"]').trigger("validationLostFocus.validation"),c=t.unique(c.sort()),c.length?(n.removeClass("success error").addClass("warning"),i.options.semanticallyStrict&&1===c.length?r.html(c[0]+(i.options.prependExistingHelpBlock?r.data("original-contents"):"")):r.html('<ul class="list-unstyled alert alert-warning" role="alert"><li>'+c.join("</li><li>")+"</li></ul>"+(i.options.prependExistingHelpBlock?r.data("original-contents"):""))):(n.removeClass("warning error success"),d.length>0&&n.addClass("success"),r.html(r.data("original-contents"))),"blur"===a.type&&n.removeClass("success")}),e.bind("validationLostFocus.validation",function(){n.removeClass("success")})})},destroy:function(){return this.each(function(){var e=t(this),i=e.parents(".form-group, .checkbox").first(),n=i.find(".help-block").first();e.unbind(".validation"),n.html(n.data("original-contents")),i.attr("class",i.data("original-classes")),e.attr("aria-invalid",e.data("original-aria-invalid")),n.attr("role",e.data("original-role")),a.indexOf(n[0])>-1&&n.remove()})},collectErrors:function(e){var i={};return this.each(function(e,a){var n=t(a),o=n.attr("name"),s=n.triggerHandler("validation.validation",{includeEmpty:!0});i[o]=t.extend(!0,s,i[o])}),t.each(i,function(t,e){0===e.length&&delete i[t]}),i},hasErrors:function(){var e=[];return this.each(function(i,a){e=e.concat(t(a).triggerHandler("getValidators.validation")?t(a).triggerHandler("validation.validation",{submitting:!0}):[])}),e.length>0},override:function(e){n=t.extend(!0,n,e)}},validatorTypes:{callback:{name:"callback",init:function(t,e){return{validatorName:e,callback:t.data("validation"+e+"Callback"),lastValue:t.val(),lastValid:!0,lastFinished:!0}},validate:function(t,e,a){if(a.lastValue===e&&a.lastFinished)return!a.lastValid;if(a.lastFinished===!0){a.lastValue=e,a.lastValid=!0,a.lastFinished=!1;var n=a,o=t;i(a.callback,window,t,e,function(t){n.lastValue===t.value&&(n.lastValid=t.valid,t.message&&(n.message=t.message),n.lastFinished=!0,o.data("validation"+n.validatorName+"Message",n.message),setTimeout(function(){o.trigger("change.validation")},1))})}return!1}},ajax:{name:"ajax",init:function(t,e){return{validatorName:e,url:t.data("validation"+e+"Ajax"),lastValue:t.val(),lastValid:!0,lastFinished:!0}},validate:function(e,i,a){return""+a.lastValue==""+i&&a.lastFinished===!0?a.lastValid===!1:(a.lastFinished===!0&&(a.lastValue=i,a.lastValid=!0,a.lastFinished=!1,t.ajax({url:a.url,data:"value="+i+"&field="+e.attr("name"),dataType:"json",success:function(t){""+a.lastValue==""+t.value&&(a.lastValid=!!t.valid,t.message&&(a.message=t.message),a.lastFinished=!0,e.data("validation"+a.validatorName+"Message",a.message),setTimeout(function(){e.trigger("change.validation")},1))},failure:function(){a.lastValid=!0,a.message="ajax call failed",a.lastFinished=!0,e.data("validation"+a.validatorName+"Message",a.message),setTimeout(function(){e.trigger("change.validation")},1)}})),!1)}},regex:{name:"regex",init:function(t,i){return{regex:e(t.data("validation"+i+"Regex"))}},validate:function(t,e,i){return!i.regex.test(e)&&!i.negative||i.regex.test(e)&&i.negative}},required:{name:"required",init:function(t,e){return{}},validate:function(t,e,i){return!(0!==e.length||i.negative)||!!(e.length>0&&i.negative)},blockSubmit:!0},match:{name:"match",init:function(t,e){var i=t.parents("form").first().find('[name="'+t.data("validation"+e+"Match")+'"]').first();return i.bind("validation.validation",function(){t.trigger("change.validation",{submitting:!0})}),{element:i}},validate:function(t,e,i){return e!==i.element.val()&&!i.negative||e===i.element.val()&&i.negative},blockSubmit:!0},max:{name:"max",init:function(t,e){return{max:t.data("validation"+e+"Max")}},validate:function(t,e,i){return parseFloat(e,10)>parseFloat(i.max,10)&&!i.negative||parseFloat(e,10)<=parseFloat(i.max,10)&&i.negative}},min:{name:"min",init:function(t,e){return{min:t.data("validation"+e+"Min")}},validate:function(t,e,i){return parseFloat(e)<parseFloat(i.min)&&!i.negative||parseFloat(e)>=parseFloat(i.min)&&i.negative}},maxlength:{name:"maxlength",init:function(t,e){return{maxlength:t.data("validation"+e+"Maxlength")}},validate:function(t,e,i){return e.length>i.maxlength&&!i.negative||e.length<=i.maxlength&&i.negative}},minlength:{name:"minlength",init:function(t,e){return{minlength:t.data("validation"+e+"Minlength")}},validate:function(t,e,i){return e.length<i.minlength&&!i.negative||e.length>=i.minlength&&i.negative}},maxchecked:{name:"maxchecked",init:function(t,e){var i=t.parents("form").first().find('[name="'+t.attr("name")+'"]');return i.bind("click.validation",function(){t.trigger("change.validation",{includeEmpty:!0})}),{maxchecked:t.data("validation"+e+"Maxchecked"),elements:i}},validate:function(t,e,i){return i.elements.filter(":checked").length>i.maxchecked&&!i.negative||i.elements.filter(":checked").length<=i.maxchecked&&i.negative},blockSubmit:!0},minchecked:{name:"minchecked",init:function(t,e){var i=t.parents("form").first().find('[name="'+t.attr("name")+'"]');return i.bind("click.validation",function(){t.trigger("change.validation",{includeEmpty:!0})}),{minchecked:t.data("validation"+e+"Minchecked"),elements:i}},validate:function(t,e,i){return i.elements.filter(":checked").length<i.minchecked&&!i.negative||i.elements.filter(":checked").length>=i.minchecked&&i.negative},blockSubmit:!0}},builtInValidators:{email:{name:"Email",type:"shortcut",shortcut:"validemail"},validemail:{name:"Validemail",type:"regex",regex:"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,10}",message:"Not a valid email address<!-- data-validator-validemail-message to override -->"},passwordagain:{name:"Passwordagain",type:"match",match:"password",message:"Does not match the given password<!-- data-validator-paswordagain-message to override -->"},positive:{name:"Positive",type:"shortcut",shortcut:"number,positivenumber"},negative:{name:"Negative",type:"shortcut",shortcut:"number,negativenumber"},number:{name:"Number",type:"regex",regex:"([+-]?\\d+(\\.\\d*)?([eE][+-]?[0-9]+)?)?",message:"Must be a number<!-- data-validator-number-message to override -->"},integer:{name:"Integer",type:"regex",regex:"[+-]?\\d+",message:"No decimal places allowed<!-- data-validator-integer-message to override -->"},positivenumber:{name:"Positivenumber",type:"min",min:0,message:"Must be a positive number<!-- data-validator-positivenumber-message to override -->"},negativenumber:{name:"Negativenumber",type:"max",max:0,message:"Must be a negative number<!-- data-validator-negativenumber-message to override -->"},required:{name:"Required",type:"required",message:"This is required<!-- data-validator-required-message to override -->"},checkone:{name:"Checkone",type:"minchecked",minchecked:1,message:"Check at least one option<!-- data-validation-checkone-message to override -->"}}},o=function(t){return t.toLowerCase().replace(/(^|\s)([a-z])/g,function(t,e,i){return e+i.toUpperCase()})},s=function(e){var i=e.val(),a=e.attr("type");return"checkbox"===a&&(i=e.is(":checked")?i:""),"radio"===a&&(i=t('input[name="'+e.attr("name")+'"]:checked').length>0?i:""),i};t.fn.jqBootstrapValidation=function(e){return n.methods[e]?n.methods[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?(t.error("Method "+e+" does not exist on jQuery.jqBootstrapValidation"),null):n.methods.init.apply(this,arguments)},t.jqBootstrapValidation=function(e){t(":input").not("[type=image],[type=submit]").jqBootstrapValidation.apply(this,arguments)}}(jQuery);