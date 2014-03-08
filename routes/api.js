var math = require('../lib/math');

function _confirmRequestHasOperands(req) {
	if (!req.body.operands) {
		return false;
	}
	
	if (!(req.body.operands instanceof Array)) {
		return false;
	}
	
	if (req.body.operands.length < 2) {
		return false;
	}
	
	return true;
}

function _performOperation(operation, operands) {
	return operation(operands[0], operands[1]);
}

exports.add = function(req, res) {
	if (!_confirmRequestHasOperands(req)) {
		res.json({ error: 'Missing required operands.' });
		
		return;
	}
	
	res.json({ result: _performOperationFromRequest(math.add, req) });
};

exports.subtract = function(req, res) {
	if (!_confirmRequestHasOperands(req)) {
		res.json({ error: 'Missing required operands.' });
		
		return;
	}
	
	res.json({ result: _performOperationFromRequest(math.subtract, req) });
};

exports.multiply = function(req, res) {
	if (!_confirmRequestHasOperands(req)) {
		res.json({ error: 'Missing required operands.' });
		
		return;
	}
	
	res.json({ result: _performOperationFromRequest(math.multiply, req) });
};

exports.divide = function(req, res) {
	if (!_confirmRequestHasOperands(req)) {
		res.json({ error: 'Missing required operands.' });
		
		return;
	}
	
	res.json({ result: _performOperationFromRequest(math.divide, req) });
};