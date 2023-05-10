import * as dotenv from 'dotenv';
dotenv.config();

const environment_name: string = process.env.Environment;
const PORT: number = Number(process.env.PORT);

enum Environments {
    local_environment = 'local',
    dev_environment = 'dev',
    prod_environment = 'prod',
    qa_environment = 'qa',
}

class Environment {
    private environment: String;

    constructor(environment: String) {
        this.environment = environment
    }

    getPort(): Number {
        if (this.environment === Environments.prod_environment) {
            return 4001;
        } else if (this.environment === Environments.dev_environment) {
            return 4002;
        } else if (this.environment === Environments.qa_environment) {
            return 4003;
        } else {
            return PORT;
        }
    }

    getDBName(): String {
        if (this.environment === Environments.prod_environment) {
            return 'db_product_prod';
        } else if (this.environment === Environments.dev_environment) {
            return 'db_product_dev';
        } else if (this.environment === Environments.qa_environment) {
            return 'db_product_qa';
        } else {
            return 'db_product_local';
        }
    }
}

export default new Environment(environment_name)