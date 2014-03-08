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
});