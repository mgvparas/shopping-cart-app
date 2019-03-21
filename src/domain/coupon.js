"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Coupon = /** @class */ (function () {
    function Coupon(code, discountPercentage, type) {
        this._code = code;
        this._discountPercentage = discountPercentage;
        this._type = type;
    }
    Object.defineProperty(Coupon.prototype, "code", {
        get: function () { return this._code; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Coupon.prototype, "discountPercentage", {
        get: function () { return this._discountPercentage; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Coupon.prototype, "type", {
        get: function () { return this._type; },
        enumerable: true,
        configurable: true
    });
    return Coupon;
}());
exports.default = Coupon;
//# sourceMappingURL=coupon.js.map