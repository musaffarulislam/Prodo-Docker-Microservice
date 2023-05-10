"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postUser = exports.getUsers = void 0;
// export class UserController{
//     static getUsers(req:Request, res:Response){
//         res.json([{ name: 'Alice' }, { name: 'Bob' }]);
//     }
// }
function getUsers(req, res) {
    res.json([{ name: 'Alice' }, { name: 'Bob' }]);
}
exports.getUsers = getUsers;
function postUser(req, res) {
    res.json([{ name: 'Alice' }, { name: 'Bob' }]);
}
exports.postUser = postUser;
//# sourceMappingURL=userController.js.map