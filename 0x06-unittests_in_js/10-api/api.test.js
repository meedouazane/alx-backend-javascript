const request = require('request');
const expect = require('chai').expect;

describe('APP testing', function() {

    it('Correct status code', function(done) {
        request('http://localhost:7865', function(_error, response, _body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it('Correct Body', function(done) {
        request('http://localhost:7865', function(_error, _response, body) {
            expect(body).to.equal('Welcome to the payment system');
            done();
        });
    });

    it('Correct status code', function(done) {
        request('http://localhost:7865/cart/0', function(_error, response, body) {
            expect(response.statusCode).to.equal(200);
            expect(body).to.equal('Payment methods for cart 0');
            done();
        });
    });

    it('testing with wrong id hello', function(done) {
        request('http://localhost:7865/cart/hello', function(_error, response, _body) {
            expect(response.statusCode).to.equal(404);
            done();
        });
    });

    it('testing with wrong id aaaa', function(done) {
        request('http://localhost:7865/cart/aaa', function(_error, response, _body) {
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
            request('http://localhost:7865/cart/120', function(_error, _response, body) {
                expect(body).to.equal('Payment methods for cart 120');
                done();
            });
    });
    it('Correct Body for available_payments', function(done) {
        request('http://localhost:7865/available_payments', function(_error, response, body) {
            expect(response.statusCode).to.equal(200);
            expect(body).to.equal('{"payment_methods":{"credit_cards":true,"paypal":false}}');
            done();
        });
    });
    it('Correct Body for login', function(done) {
        request.post(`http://localhost:7865/login`, {json: {userName: 'Ed'}}, (_err, res, body) => {
          expect(res.statusCode).to.be.equal(200);
          expect(body).to.be.equal('Welcome Ed');
          done();
        });
      });   
});
