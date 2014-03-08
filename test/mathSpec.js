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
});