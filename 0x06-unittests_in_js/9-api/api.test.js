const request = require('request');
const expect = require('chai').expect;

describe('APP testing', function() {
    it('Correct status code', function(done) {
        request('http://localhost:7865/cart/12', function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
    it('testing with wrong id', function(done) {
        request('http://localhost:7865/cart/hello', function(error, response, body) {
            expect(response.statusCode).to.equal(404);
            done();
        });
    });

    it('Correct Body', function(done) {
        request('http://localhost:7865/cart/12', function(error, response, body) {
            expect(body).to.equal('Welcome to the payment system 12');
            done();
        });
    });
});
