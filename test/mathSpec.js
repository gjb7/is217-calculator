var expect = require('chai').expect,
	math = require('../lib/math');

describe('math', function() {
	describe('#add', function() {
		it('should add two positive numbers', function() {
			var result = math.add(1, 2);
			
			expect(result).to.equal(3);
		});
		
		it('should add a positive and a negative number', function() {
			var result = math.add(1, -2);
			
			expect(result).to.equal(-1);
		});
		
		it('should add two negative numbers', function() {
			var result = math.add(-1, -2);
			
			expect(result).to.equal(-3);
		});
	});
	
	describe('#subtract', function() {
		it('should subtract a positive number from a positive number', function() {
			var result = math.subtract(2, 1);
			
			expect(result).to.equal(1);
			
			var result = math.subtract(1, 2);
			
			expect(result).to.equal(-1);
		});
		
		it('should subtract a positive number from a negative number', function() {
			var result = math.subtract(2, -1);
			
			expect(result).to.equal(3);
		});
		
		it('should subtract a negative number from a positive number', function() {
			var result = math.subtract(-1, 2);
			
			expect(result).to.equal(-3);
		});
		
		it('should subtract a negative number from a negative number', function() {
			var result = math.subtract(-1, -2);
			
			expect(result).to.equal(1);
			
			var result = math.subtract(-2, -1);
			
			expect(result).to.equal(-1);
		});
	});
	
	describe('#multiply', function() {
		it('should multiply two positive numbers', function() {
			var result = math.multiply(2, 3);
			
			expect(result).to.equal(6);
		});
		
		it('should multiply a positive and a negative number', function() {
			var result = math.multiply(2, -3);
			
			expect(result).to.equal(-6);
		});
		
		it('should multiply two negative numbers', function() {
			var result = math.multiply(-2, -3);
			
			expect(result).to.equal(6);
		});
		
		it('should multiply a number by zero', function() {
			var result = math.multiply(2, 0);
			
			expect(result).to.equal(0);
		});
	});
	
	describe('#divide', function() {
		it('should divide two positive numbers', function() {
			var result = math.divide(6, 3);
			
			expect(result).to.equal(2);
		});
		
		it('should divide a positive and a negative number', function() {
			var result = math.divide(6, -3);
			
			expect(result).to.equal(-2);
		});
		
		it('should divide two negative numbers', function() {
			var result = math.divide(-6, -3);
			
			expect(result).to.equal(2)
		});
		
		it('should divide by zero (but not really)', function() {
			var result = math.divide(6, 0);
			
			expect(result).to.equal(Number.POSITIVE_INFINITY);
			
			var result = math.divide(-6, 0);
			
			expect(result).to.equal(Number.NEGATIVE_INFINITY);
		});
	});
});