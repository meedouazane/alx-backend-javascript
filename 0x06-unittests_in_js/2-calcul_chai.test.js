const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function(){

    it('the sum of two int', function(){
        expect(calculateNumber('SUM', 5.1, 10)).to.equal(15);
    });
});
describe('calculateNumber', function(){
    it('the sum of int and float', function(){
        expect(calculateNumber('SUM', 1.5, 10)).to.equal(12);
    });
});
describe('calculateNumber', function(){
    it('the sum of float and 0', function(){
        expect(calculateNumber('SUM', 1.5, 0)).to.equal(2);
    });
});
describe('calculateNumber', function(){
    it('the sum of float and 0', function(){
        expect(calculateNumber('SUM', 0.5, 0)).to.equal(1);
    });
});
describe('calculateNumber', function(){
    it('the sum of float and negative number', function(){
        expect(calculateNumber('SUM', -1, 3.7)).to.equal(3);
    });
});
describe('calculateNumber', function(){
    it('the sum of two number', function(){
        expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    });
});
describe('calculateNumber', function(){
    it('the sum of two negative numbers', function(){
        expect(calculateNumber('SUM', -1.5, -3.7)).to.equal(-5);
    });
});
describe('calculateNumber', function(){
    it('the subtract of two numbers', function(){
        expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
});
describe('calculateNumber', function(){
    it('the subtract of negative and positive number', function(){
        expect(calculateNumber('SUBTRACT', -1.4, 4.5)).to.equal(-6);
    });
});
describe('calculateNumber', function(){
    it('the subtract of two negative numbers', function(){
        expect(calculateNumber('SUBTRACT', -10.4, -4.5)).to.equal(-6)
    });
});
describe('calculateNumber', function(){
    it('the subtract of two numbers', function(){
        expect(calculateNumber('SUBTRACT', 100.4, 4.5)).to.equal(95)
    });
});
describe('calculateNumber', function(){
    it('the subtract of 0 and numbers', function(){
        expect(calculateNumber('SUBTRACT', 0, 4.5)).to.equal(-5)
    });
});
describe('calculateNumber', function(){
    it('the divide of two numbers', function(){
        expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2)
    });
});
describe('calculateNumber', function(){
    it('the divide of 0', function(){
        expect(calculateNumber('DIVIDE', 15, 0)).to.equal('Error')
    });
});
describe('calculateNumber', function(){
    it('the divide of the same numbers', function(){
        expect(calculateNumber('DIVIDE', 15, 15)).to.equal(1)
    });
});
describe('calculateNumber', function(){
    it('the divide of the b > a', function(){
        expect(calculateNumber('DIVIDE', 15, 150)).to.equal(0.1)
    });
});
describe('calculateNumber', function(){
    it('the divide of the negative b', function(){
        expect(calculateNumber('DIVIDE', 12, -45)).to.equal(-0.26666666666666666)
    });
});
describe('calculateNumber', function(){
    it('the divide of the negative a', function(){
        expect(calculateNumber('DIVIDE', -69, 45)).to.equal(-1.5333333333333334)
    });
});
