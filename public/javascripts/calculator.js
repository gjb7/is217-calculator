(function(w, $) {
	function Calculator() {
		this._setupDefaults();
		this._captureDisplay();
		this._registerEventListeners();
		
	};
	
	Calculator.OPERATIONS = {
		'+': 'add',
		'-': 'subtract',
		'*': 'multiply',
		'/': 'divide'
	};
	
	Calculator.prototype._setupDefaults = function() {
		this.result = 0;
		this.operation = '';
		this.operands = [];
		this.currentValue = '';
		this.currentValueHasDecimal = false;
	}
	
	Calculator.prototype._captureDisplay = function() {
		this.display = $('#display');
	};
	
	Calculator.prototype._registerEventListeners = function() {
		var self = this;
		
		$('button.number').click(function() {
			self._numberClicked($(this));
		});
		
		$('button.operation').click(function() {
			self._operationClicked($(this));
		});
	};
	
	Calculator.prototype._numberClicked = function(elm) {
		var number = elm.attr('data-number');
		
		if (number == '.') {
			if (this.currentValueHasDecimal) {
				return;
			}
			else {
				this.currentValueHasDecimal = true;
			}
		}
		
		this.currentValue += number;
		
		this._updateDisplay(this.currentValue);
	};
	
	Calculator.prototype._operationClicked = function(elm) {
		if (this.currentValue) {
			var operand = Number(this.currentValue);
			this.operands.push(operand);
			this.currentValue = '';
			this.currentValueHasDecimal = false;
		}
		
		var operation = elm.attr('data-operation');
		
		if (this.operation || operation == '=') {
			this._performOperation();
			
			if (operation != '=') {
				this.operation = operation;
			}
		}
		else {
			this.operation = operation;
		}
	};
	
	Calculator.prototype._performOperation = function() {
		var operation = Calculator.OPERATIONS[this.operation];
		
		if (!operation) {
			return;
		}
		
		$('button').prop('disabled', true)
		
		var self = this;
		
		$.post('/api/' + operation, {
			operands: this.operands
		}, function(data) {
			if (data.result) {
				self.result = data.result;
				self._updateDisplay(data.result);
				self.operands = [data.result];
			}
		}, 'json').always(function() {
			$('button').prop('disabled', false);
			self.operation = '';
		});
	};
	
	Calculator.prototype._updateDisplay = function(text) {
		this.display.text(text);
	};
	
	w.Calculator = Calculator;
})(window, jQuery);