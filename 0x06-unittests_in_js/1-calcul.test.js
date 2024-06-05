const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function(){
    it('the sum of two int', function(){
        assert.equal(15, calculateNumber('SUM', 5.1, 10));
    });
});
describe('calculateNumber', function(){
    it('the sum of int and float', function(){
        assert.equal(12, calculateNumber('SUM', 1.5, 10));
    });
});
describe('calculateNumber', function(){
    it('the sum of float and 0', function(){
        assert.equal(2, calculateNumber('SUM', 1.5, 0));
    });
});
describe('calculateNumber', function(){
    it('the sum of float and 0', function(){
        assert.equal(1, calculateNumber('SUM', 0.5, 0));
    });
});
describe('calculateNumber', function(){
    it('the sum of float and negative number', function(){
        assert.equal(3, calculateNumber('SUM', -1, 3.7));
    });
});
describe('calculateNumber', function(){
    it('the sum of two number', function(){
        assert.equal(5, calculateNumber('SUM', 1.2, 3.7));
    });
});
describe('calculateNumber', function(){
    it('the sum of two negative numbers', function(){
        assert.equal(-5, calculateNumber('SUM', -1.5, -3.7));
    });
});
describe('calculateNumber', function(){
    it('the subtract of two numbers', function(){
        assert.equal(-4, calculateNumber('SUBTRACT', 1.4, 4.5));
    });
});
describe('calculateNumber', function(){
    it('the subtract of negative and positive number', function(){
        assert.equal(-6, calculateNumber('SUBTRACT', -1.4, 4.5));
    });
});
describe('calculateNumber', function(){
    it('the subtract of two negative numbers', function(){
        assert.equal(-6, calculateNumber('SUBTRACT', -10.4, -4.5));
    });
});
describe('calculateNumber', function(){
    it('the subtract of two numbers', function(){
        assert.equal(95, calculateNumber('SUBTRACT', 100.4, 4.5));
    });
});
describe('calculateNumber', function(){
    it('the subtract of 0 and numbers', function(){
        assert.equal(-5, calculateNumber('SUBTRACT', 0, 4.5));
    });
});
describe('calculateNumber', function(){
    it('the divide of two numbers', function(){
        assert.equal(0.2, calculateNumber('DIVIDE', 1.4, 4.5));
    });
});
describe('calculateNumber', function(){
    it('the divide of 0', function(){
        assert.equal('Error', calculateNumber('DIVIDE', 15, 0));
    });
});
describe('calculateNumber', function(){
    it('the divide of the same numbers', function(){
        assert.equal(1, calculateNumber('DIVIDE', 15, 15));
    });
});
describe('calculateNumber', function(){
    it('the divide of the b > a', function(){
        assert.equal(0.1, calculateNumber('DIVIDE', 15, 150));
    });
});
describe('calculateNumber', function(){
    it('the divide of the negative b', function(){
        assert.equal(-0.26666666666666666, calculateNumber('DIVIDE', 12, -45));
    });
});
describe('calculateNumber', function(){
    it('the divide of the negative a', function(){
        assert.equal(-1.5333333333333334, calculateNumber('DIVIDE', -69, 45));
    });
});
