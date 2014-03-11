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
	router.post('/api/:name', this._performOperation.bind(this));
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
	var name = req.params.name;
	var operation = this.operations[name];
	var operands = req.body.operands;
	
	return operation(operands[0], operands[1]);
};

API.prototype._operationExistsForRequest = function(req) {
	var name = req.params.name;
	
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