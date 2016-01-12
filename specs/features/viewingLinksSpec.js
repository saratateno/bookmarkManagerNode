var chai = require('chai');
var expect = chai.expect;
var mongoose = require('mongoose');
var Link = require('../../models/link');


describe('viewing links', function () {
  beforeEach(function() {
    var link = new Link({url: "url.com", title:"A New Link"});
    link.save();
  });

  it('displays a list of links on the page', function(done) {
    browser
      .url('/links')
      .getText('body', function(err, text) {
        expect(text).to.include("URL: url.com");
        expect(text).to.include("Title: A New Link");
      })
      .call(done);
  });

});
