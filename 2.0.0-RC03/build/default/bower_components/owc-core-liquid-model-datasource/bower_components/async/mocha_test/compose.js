var async=require("../lib/async"),expect=require("chai").expect;describe("compose",function(){context("all functions succeed",function(){it("yields the result of the composition of the functions",function(done){var add2mul3add1=async.compose(function(n,cb){setTimeout(function(){cb(null,n+1)})},function(n,cb){setTimeout(function(){cb(null,3*n)})},function(n,cb){setTimeout(function(){cb(null,n+2)})});add2mul3add1(3,function(err,result){expect(err).to.not.exist;expect(result).to.eql(16);done()})})});context("a function errors",function(){it("yields the error and does not call later functions",function(done){var add1called=!1,mul3error=new Error("mul3 error"),add2mul3add1=async.compose(function(n,cb){add1called=!0;setTimeout(function(){cb(null,n+1)})},function(n,cb){setTimeout(function(){cb(mul3error)})},function(n,cb){setTimeout(function(){cb(null,n+2)})});add2mul3add1(3,function(err,result){expect(err).to.eql(mul3error);expect(result).to.not.exist;expect(add1called).to.be.false;done()})})});it("calls each function with the binding of the composed function",function(done){var context={},add2Context=null,mul3Context=null,add2mul3=async.compose(function(n,cb){mul3Context=this;setTimeout(function(){cb(null,3*n)})},function(n,cb){add2Context=this;setTimeout(function(){cb(null,n+2)})});add2mul3.call(context,3,function(err,result){expect(err).to.not.exist;expect(result).to.eql(15);expect(add2Context).to.equal(context);expect(mul3Context).to.equal(context);done()})})});