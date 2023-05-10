"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.response_status_code = exports.ModificationNote = void 0;
exports.ModificationNote = {
    modified_on: Date,
    modified_by: String,
    modification_note: String
};
var response_status_code;
(function (response_status_code) {
    response_status_code[response_status_code["success"] = 200] = "success";
    response_status_code[response_status_code["bad_request"] = 400] = "bad_request";
    response_status_code[response_status_code["internal_server_error"] = 500] = "internal_server_error";
})(response_status_code = exports.response_status_code || (exports.response_status_code = {}));
