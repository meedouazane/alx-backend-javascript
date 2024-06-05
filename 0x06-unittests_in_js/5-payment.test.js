const sendPaymentRequestToApi = require('./4-payment');
const sinon = require('sinon');
const Utils = require('./utils');
const expect = require('chai').expect;

describe('sendPaymentRequestToApi', function() {
    let consoleSpy;

    beforeEach(function() {
        consoleSpy = sinon.spy(console, 'log');
    });

    afterEach(function() {
        consoleSpy.restore();
    });

    it('using spy to test when total is 120', function() {
        sendPaymentRequestToApi(100, 20);
        expect(consoleSpy.calledWith('The total is: 120')).to.be.true;
        expect(consoleSpy.callCount).to.be.equal(1);
    });

    it('using spy to test when total is 20', function() {
        sendPaymentRequestToApi(10, 10);
        expect(consoleSpy.calledWith('The total is: 20')).to.be.true;
        expect(consoleSpy.callCount).to.be.equal(1);
    });
});
