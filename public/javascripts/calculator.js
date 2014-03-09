(function(w, $) {
	function Calculator() {
		this._setupDefaults();
		this._captureDisplay();
		this._registerEventListeners();
		
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
		
	};
	
	Calculator.prototype._updateDisplay = function(text) {
		this.display.text(text);
	};
	
	w.Calculator = Calculator;
})(window, jQuery);