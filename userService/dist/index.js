"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const mongodbConnection_1 = __importDefault(require("./config/mongodbConnection"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
(0, mongodbConnection_1.default)();
const app = (0, express_1.default)();
app.use('/', userRoutes_1.default);
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
const PORT = Number(process.env.PORT) || 4000;
app.listen(PORT, () => console.log(`Server is on ${PORT}`));
//# sourceMappingURL=index.js.map