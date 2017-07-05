"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql_1 = require("mysql");
var DBManager = (function () {
    function DBManager() {
    }
    return DBManager;
}());
DBManager.POOL_CONFIG = {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'catu',
    connectionLimit: 10
};
DBManager.TABLES = {
    UNIS: {
        NAME: 'unis',
        FIELDS: {
            ID: 'uniId',
            NAME: 'uniName',
            LOCATION: 'location',
            LONGITUDE: 'longitude',
            LATITUDE: 'latitude'
        }
    },
    MEMBERS: {
        NAME: 'members',
        FIELDS: {
            ID: 'memberId',
            EMAIL: 'email',
            PASSWORD: 'password',
            FIRST_NAME: 'fName',
            LAST_NAME: 'lName',
            UNI_ID: 'uniId'
        }
    }
};
DBManager.pool = mysql_1.createPool(DBManager.POOL_CONFIG);
exports.DBManager = DBManager;
//# sourceMappingURL=DBManager.js.map