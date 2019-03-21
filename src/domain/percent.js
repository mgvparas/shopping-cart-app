"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Percent = /** @class */ (function () {
    function Percent(value) {
        this._decimalValue = value / 100;
        this._percentageValue = value;
    }
    Object.defineProperty(Percent.prototype, "decimalValue", {
        get: function () { return this._decimalValue; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Percent.prototype, "percentageValue", {
        get: function () { return this._percentageValue; },
        enumerable: true,
        configurable: true
    });
    return Percent;
}());
exports.default = Percent;
//# sourceMappingURL=percent.js.map