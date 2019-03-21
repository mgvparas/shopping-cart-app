"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Money = /** @class */ (function () {
    function Money(value) {
        this._value = value;
    }
    Object.defineProperty(Money.prototype, "value", {
        get: function () { return this._value; },
        enumerable: true,
        configurable: true
    });
    return Money;
}());
exports.default = Money;
//# sourceMappingURL=money.js.map