var async=require('../lib/async'),expect=require('chai').expect;describe('compose',function(){context('all functions succeed',function(){it('yields the result of the composition of the functions',function(a){var e=async.compose(function(f,g){setTimeout(function(){g(null,f+1)})},function(f,g){setTimeout(function(){g(null,3*f)})},function(f,g){setTimeout(function(){g(null,f+2)})});e(3,function(f,g){expect(f).to.not.exist,expect(g).to.eql(16),a()})})}),context('a function errors',function(){it('yields the error and does not call later functions',function(a){var b=!1,c=new Error('mul3 error'),g=async.compose(function(h,i){b=!0,setTimeout(function(){i(null,h+1)})},function(h,i){setTimeout(function(){i(c)})},function(h,i){setTimeout(function(){i(null,h+2)})});g(3,function(h,i){expect(h).to.eql(c),expect(i).to.not.exist,expect(b).to.be.false,a()})})}),it('calls each function with the binding of the composed function',function(a){var b={},c=null,d=null,g=async.compose(function(h,i){d=this,setTimeout(function(){i(null,3*h)})},function(h,i){c=this,setTimeout(function(){i(null,h+2)})});g.call(b,3,function(h,i){expect(h).to.not.exist,expect(i).to.eql(15),expect(c).to.equal(b),expect(d).to.equal(b),a()})})});