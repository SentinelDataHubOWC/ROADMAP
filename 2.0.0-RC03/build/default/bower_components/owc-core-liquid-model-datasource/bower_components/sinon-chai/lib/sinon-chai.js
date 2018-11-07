"use strict";(function(sinonChai){if("function"===typeof require&&"object"===typeof exports&&"object"===typeof module){module.exports=sinonChai}else if("function"===typeof define&&define.amd){define(function(){return sinonChai})}else{chai.use(sinonChai)}})(function(chai,utils){var slice=Array.prototype.slice;function isSpy(putativeSpy){return"function"===typeof putativeSpy&&"function"===typeof putativeSpy.getCall&&"function"===typeof putativeSpy.calledWithExactly}function timesInWords(count){switch(count){case 1:{return"once"}case 2:{return"twice"}case 3:{return"thrice"}default:{return(count||0)+" times"}}}function isCall(putativeCall){return putativeCall&&isSpy(putativeCall.proxy)}function assertCanWorkWith(assertion){if(!isSpy(assertion._obj)&&!isCall(assertion._obj)){throw new TypeError(utils.inspect(assertion._obj)+" is not a spy or a call to a spy!")}}function getMessages(spy,action,nonNegatedSuffix,always,args){var verbPhrase=always?"always have ":"have ";nonNegatedSuffix=nonNegatedSuffix||"";if(isSpy(spy.proxy)){spy=spy.proxy}function printfArray(array){return spy.printf.apply(spy,array)}return{affirmative:function(){return printfArray(["expected %n to "+verbPhrase+action+nonNegatedSuffix].concat(args))},negative:function(){return printfArray(["expected %n to not "+verbPhrase+action].concat(args))}}}function sinonProperty(name,action,nonNegatedSuffix){utils.addProperty(chai.Assertion.prototype,name,function(){assertCanWorkWith(this);var messages=getMessages(this._obj,action,nonNegatedSuffix,!1);this.assert(this._obj[name],messages.affirmative,messages.negative)})}function createSinonMethodHandler(sinonName,action,nonNegatedSuffix){return function(){assertCanWorkWith(this);var alwaysSinonMethod="always"+sinonName[0].toUpperCase()+sinonName.substring(1),shouldBeAlways=utils.flag(this,"always")&&"function"===typeof this._obj[alwaysSinonMethod],sinonMethodName=shouldBeAlways?alwaysSinonMethod:sinonName,messages=getMessages(this._obj,action,nonNegatedSuffix,shouldBeAlways,slice.call(arguments));this.assert(this._obj[sinonMethodName].apply(this._obj,arguments),messages.affirmative,messages.negative)}}function exceptionalSinonMethod(chaiName,sinonName,action,nonNegatedSuffix){var handler=createSinonMethodHandler(sinonName,action,nonNegatedSuffix);utils.addMethod(chai.Assertion.prototype,chaiName,handler)}function sinonMethod(name,action,nonNegatedSuffix){exceptionalSinonMethod(name,name,action,nonNegatedSuffix)}utils.addProperty(chai.Assertion.prototype,"always",function(){utils.flag(this,"always",!0)});sinonProperty("called","been called"," at least once, but it was never called");(function(name,action,nonNegatedSuffix){utils.addMethod(chai.Assertion.prototype,name,function(arg){assertCanWorkWith(this);var messages=getMessages(this._obj,action,nonNegatedSuffix,!1,[timesInWords(arg)]);this.assert(this._obj[name]===arg,messages.affirmative,messages.negative)})})("callCount","been called exactly %1",", but it was called %c%C");sinonProperty("calledOnce","been called exactly once",", but it was called %c%C");sinonProperty("calledTwice","been called exactly twice",", but it was called %c%C");sinonProperty("calledThrice","been called exactly thrice",", but it was called %c%C");(function(name,action,nonNegatedSuffix){var handler=createSinonMethodHandler(name,action,nonNegatedSuffix);utils.addProperty(chai.Assertion.prototype,name,handler)})("calledWithNew","been called with new");sinonMethod("calledBefore","been called before %1");sinonMethod("calledAfter","been called after %1");sinonMethod("calledImmediatelyBefore","been called immediately before %1");sinonMethod("calledImmediatelyAfter","been called immediately after %1");sinonMethod("calledOn","been called with %1 as this",", but it was called with %t instead");sinonMethod("calledWith","been called with arguments %*","%D");sinonMethod("calledWithExactly","been called with exact arguments %*","%D");sinonMethod("calledWithMatch","been called with arguments matching %*","%D");sinonMethod("returned","returned %1");exceptionalSinonMethod("thrown","threw","thrown %1")});