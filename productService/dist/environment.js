"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config();
const environment_name = process.env.Environment;
const PORT = Number(process.env.PORT);
var Environments;
(function (Environments) {
    Environments["local_environment"] = "local";
    Environments["dev_environment"] = "dev";
    Environments["prod_environment"] = "prod";
    Environments["qa_environment"] = "qa";
})(Environments || (Environments = {}));
class Environment {
    constructor(environment) {
        this.environment = environment;
    }
    getPort() {
        if (this.environment === Environments.prod_environment) {
            return 4001;
        }
        else if (this.environment === Environments.dev_environment) {
            return 4002;
        }
        else if (this.environment === Environments.qa_environment) {
            return 4003;
        }
        else {
            return PORT;
        }
    }
    getDBName() {
        if (this.environment === Environments.prod_environment) {
            return 'db_product_prod';
        }
        else if (this.environment === Environments.dev_environment) {
            return 'db_product_dev';
        }
        else if (this.environment === Environments.qa_environment) {
            return 'db_product_qa';
        }
        else {
            return 'db_product_local';
        }
    }
}
exports.default = new Environment(environment_name);
