var chai = require('chai');
var expect = chai.expect;
var mongoose = require('mongoose');
var Link = require('../../models/link');

describe('adding links', function () {
  it('allows new links to be added to the database', function(done) {
    browser
      .url('/links/new')
      .setValue('#url', 'url.com')
      .setValue('#title', 'A New Link')
      .submitForm('#linkForm')
      .getUrl(function(err,url) {
        expect(url).to.include('/links');
      })
      .call(done);
  });

});
