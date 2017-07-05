"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var unis_1 = require("../models/unis");
var router = express_1.Router();
router.get('/', function (req, res) {
    unis_1.UnisDBHandler.getUnis(function (unis) {
        res.send(unis);
    });
});
router.post('/', function (req, res) {
    console.log(req);
    res.end();
});
exports.UnisRouter = router;
//# sourceMappingURL=unis.js.map