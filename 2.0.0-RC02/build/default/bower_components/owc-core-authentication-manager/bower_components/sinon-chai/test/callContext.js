"use strict";var sinon=require("sinon"),AssertionError=require("chai").AssertionError,expect=require("chai").expect;describe("Call context",function(){var a=null,b=null,c=null;beforeEach(function(){a=sinon.spy(),b={},c={}}),describe("calledOn",function(){it("should throw an assertion error if the spy is never called",function(){expect(function(){a.should.have.been.calledOn(b)}).to.throw(AssertionError)}),it("should throw an assertion error if the spy is called without a context",function(){a(),expect(function(){a.should.have.been.calledOn(b)}).to.throw(AssertionError),expect(function(){a.getCall(0).should.have.been.calledOn(b)}).to.throw(AssertionError)}),it("should throw an assertion error if the spy is called on the wrong context",function(){a.call(c),expect(function(){a.should.have.been.calledOn(b)}).to.throw(AssertionError),expect(function(){a.getCall(0).should.have.been.calledOn(b)}).to.throw(AssertionError)}),it("should not throw if the spy is called on the specified context",function(){a.call(b),expect(function(){a.should.have.been.calledOn(b)}).to.not.throw(),expect(function(){a.getCall(0).should.have.been.calledOn(b)}).to.not.throw()}),it("should not throw if the spy is called on another context and also the specified context",function(){a.call(c),a.call(b),expect(function(){a.should.have.been.calledOn(b)}).to.not.throw(),expect(function(){a.getCall(1).should.have.been.calledOn(b)}).to.not.throw()})}),describe("always calledOn",function(){it("should throw an assertion error if the spy is never called",function(){expect(function(){a.should.always.have.been.calledOn(b)}).to.throw(AssertionError),expect(function(){a.should.have.always.been.calledOn(b)}).to.throw(AssertionError),expect(function(){a.should.have.been.always.calledOn(b)}).to.throw(AssertionError)}),it("should throw an assertion error if the spy is called without a context",function(){a(),expect(function(){a.should.always.have.been.calledOn(b)}).to.throw(AssertionError),expect(function(){a.should.have.always.been.calledOn(b)}).to.throw(AssertionError),expect(function(){a.should.have.been.always.calledOn(b)}).to.throw(AssertionError)}),it("should throw an assertion error if the spy is called on the wrong context",function(){a.call(c),expect(function(){a.should.always.have.been.calledOn(b)}).to.throw(AssertionError),expect(function(){a.should.have.always.been.calledOn(b)}).to.throw(AssertionError),expect(function(){a.should.have.been.always.calledOn(b)}).to.throw(AssertionError)}),it("should not throw if the spy is called on the specified context",function(){a.call(b),expect(function(){a.should.always.have.been.calledOn(b)}).to.not.throw(),expect(function(){a.should.have.always.been.calledOn(b)}).to.not.throw(),expect(function(){a.should.have.been.always.calledOn(b)}).to.not.throw()}),it("should throw an assertion error if the spy is called on another context and also the specified context",function(){a.call(c),a.call(b),expect(function(){a.should.always.have.been.calledOn(b)}).to.throw(AssertionError),expect(function(){a.should.have.always.been.calledOn(b)}).to.throw(AssertionError),expect(function(){a.should.have.been.always.calledOn(b)}).to.throw(AssertionError)})})});