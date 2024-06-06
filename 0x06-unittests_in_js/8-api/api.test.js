const request = require('request');
const expect = require('chai').expect;

describe('APP testing', function() {
    it('Correct status code', function(done) {
        request('http://localhost:7865', function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it('Correct Body', function(done) {
        request('http://localhost:7865', function(error, response, body) {
            expect(body).to.equal('Welcome to the payment system');
            done();
        });
    });
});
