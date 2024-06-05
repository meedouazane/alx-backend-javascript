const sendPaymentRequestToApi = require('./4-payment');
const sinon = require('sinon');
const Utils = require('./utils');
const expect = require('chai').expect;

describe('sendPaymentRequestToApi', function() {
    it('using spy to test', function() {
        const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
        
        const consoleSpy = sinon.spy(console, 'log');
        
        sendPaymentRequestToApi(100, 20);
        
        expect(calculateNumberStub.calledOnce).to.be.true;
        expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
        expect(consoleSpy.calledWith('The total is: 10')).to.be.true;
        expect(consoleSpy.callCount).to.be.equal(1);
        
        calculateNumberStub.restore();
        consoleSpy.restore();
    });
});

