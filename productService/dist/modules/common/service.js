"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoError = exports.insufficientParameters = exports.failureResponse = exports.successResponse = void 0;
const model_1 = require("./model");
function successResponse(message, DATA, res) {
    res.status(model_1.response_status_code.success).json({
        STATUS: 'SUCCESS',
        MESSAGE: message,
        DATA
    });
}
exports.successResponse = successResponse;
function failureResponse(message, DATA, res) {
    res.status(model_1.response_status_code.success).json({
        STATUS: 'FILURE',
        MESSAGE: message,
        DATA
    });
}
exports.failureResponse = failureResponse;
function insufficientParameters(res) {
    res.status(model_1.response_status_code.bad_request).json({
        STATUS: 'FILURE',
        MESSAGE: 'Insufficient parameter',
        DATA: {}
    });
}
exports.insufficientParameters = insufficientParameters;
function mongoError(err, res) {
    res.status(model_1.response_status_code.internal_server_error).json({
        STATUS: 'FILURE',
        MESSAGE: 'MongoDB error',
        DATA: err
    });
}
exports.mongoError = mongoError;
