(function(w) {
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
	}
	
	Calculator.prototype._captureDisplay = function() {
		this.display = $('#display');
	};
	
	Calculator.prototype._registerEventListeners = function() {
		var self = this;
		
		$('button.number').click(function() {
			self._numberClicked(this);
		});
		
		$('button.operation').click(function() {
			self._operationClicked(this);
		});
	};
	
	Calculator.prototype._numberClicked = function(elm) {
		
	};
	
	Calculator.prototype._operationClicked = function(elm) {
		
	};
	
	w.Calculator = Calculator;
})(window);