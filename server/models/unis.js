"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DBManager_1 = require("../helpers/DBManager");
var UnisDBHandler = (function (_super) {
    __extends(UnisDBHandler, _super);
    function UnisDBHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UnisDBHandler.getUnis = function (callback) {
        UnisDBHandler.pool.getConnection(function (err, conn) {
            if (err)
                throw err;
            var unis = [];
            var statement = "SELECT * FROM " + DBManager_1.DBManager.TABLES.UNIS.NAME;
            conn.query(statement, function (err, res) {
                conn.release();
                if (res.length > 0) {
                    for (var i = 0; i < res.length; i++) {
                        unis.push({ uniId: res[i].uniId, uniName: res[i].uniName, location: res[i].location, longitude: res[i].longitude, latitude: res[i].latitude });
                    }
                }
                callback(unis);
            });
        });
    };
    return UnisDBHandler;
}(DBManager_1.DBManager));
exports.UnisDBHandler = UnisDBHandler;
//# sourceMappingURL=unis.js.map