(function(w) {
	var calculator;
	
	function mockNumberButton(number) {
		return {
			attr: function() {
				return number;
			}
		};
	}
	
	function mockOperationButton(operation) {
		return {
			attr: function() {
				return operation;
			}
		}
	}
	
	function operationTest(testName, operation, val1, val2, result) {
		w.QUnit.asyncTest(testName, function(assert) {
			w.QUnit.expect(1);
			
			var oneButton = mockNumberButton(val1);
			var twoButton = mockNumberButton(val2);
			
			var addButton = mockOperationButton(operation);
			var equalButton = mockOperationButton("=");
			
			calculator._numberClicked(oneButton);
			calculator._operationClicked(addButton);
			calculator._numberClicked(twoButton);
			calculator._operationClicked(equalButton);
			
			calculator._performOperation().always(function() {
				assert.equal(calculator.display.text(), result, val1 + " " + operation + " " + val2 + "returned expected result of " + result);
				
				w.QUnit.start();
			});
		});
	}
	
	w.QUnit.testStart(function() {
		calculator = new Calculator();
	});
	
	w.QUnit.testDone(function() {
		calculator = null;
	});
	
	operationTest("Test addition", "+", "1", "2", "3");
	operationTest("Test subtraction", "-", "1", "2", "-1");
	operationTest("Test multiplication", "*", "1", "2", "2");
	operationTest("Test division", "/", "6", "2", "3");
})(window);