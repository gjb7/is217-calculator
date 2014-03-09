var math = require('../lib/math'),
	path = require('path');

function API() {
	this.operations = {};
}

API.NAME_REGEX = /^[a-zA-Z_\-]+$/;

API.isValidName = function(name) {
	return API.NAME_REGEX.test(name);
};

API.prototype.registerOperation = function(name, operation) {
	if (!API.isValidName(name)) {
		throw new Error("Invalid name passed for registerOperation.");
	}
	
	this.operations[name] = operation;
};

API.prototype.registerRoutes = function(router) {
	for (var name in this.operations) {
		router.post('/api/' + name, this._performOperation.bind(this));
	}
};

API.prototype._performOperation = function(req, res) {
	if (!this._operationExistsForRequest(req)) {
		return res.json(404, { error: 'Operation not found.' });
	}
	
	if (!this._requestHasOperands(req)) {
		return res.json(500, { error: 'Missing required operands.' });
	}
	
	res.json({ result: this._performOperationForRequest(req) });
};

API.prototype._performOperationForRequest = function(req) {
	var name = path.basename(req.path);
	var operation = this.operations[name];
	var operands = req.body.operands;
	
	return operation(operands[0], operands[1]);
};

API.prototype._operationExistsForRequest = function(req) {
	var name = path.basename(req.path);
	
	return (this.operations[name] !== undefined);
};

API.prototype._requestHasOperands = function(req) {
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
};

exports.API = API;

/*
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
*/