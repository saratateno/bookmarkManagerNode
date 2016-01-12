var chai = require('chai');
var expect = chai.expect;
var mongoose = require('mongoose');
var Link = require('../models/link');


describe('viewing links', function () {
  beforeEach(function() {
    new Link({url: "url.com", title:"A New Link"});
  });


  it('displays a list of links on the page', function(done) {
    browser
      .url('/links')
      .getText('body', function(err, text) {
        expect(text).to.include("url: url.com");
        expect(text).to.include("title: A New Link");
      })
      .call(done);
  });

});
