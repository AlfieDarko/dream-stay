var assert = require('assert');
var chai = require('chai')
var expect = chai.expect;
var request = require('request');


describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe("url test", function() {
  var url = "http://localhost:3000"
  it("returns status 200", function(done) {
    request(url, function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  })

})