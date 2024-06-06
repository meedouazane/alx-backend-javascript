const request = require('request');
const expect = require('chai').expect;

describe('APP testing', function() {

    it('Correct status code', function(done) {
        request('http://localhost:7865/cart/0', function(_error, response, body) {
            expect(response.statusCode).to.equal(200);
            expect(body).to.equal('Payment methods for cart 0');
            done();
        });
    });

    it('testing with wrong id hello', function(done) {
        request('http://localhost:7865/cart/hello', function(_error, response, body) {
            expect(response.statusCode).to.equal(404);
            done();
        });
    });

    it('testing with wrong id aaaa', function(done) {
        request('http://localhost:7865/cart/aaa', function(_error, response, body) {
            expect(response.statusCode).to.equal(404);
            done();
        });
    });

    it('Correct Body', function(done) {
        request('http://localhost:7865/cart/12', function(_error, response, body) {
            expect(response.statusCode).to.equal(200);
            expect(body).to.equal('Payment methods for cart 12');
            done();
        });
    });

    it('Correct Body 120', function(done) {
            request('http://localhost:7865/cart/120', function(_error, response, body) {
                expect(body).to.equal('Payment methods for cart 120');
                done();
            });
    });
});
