"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("../enums");
var CouponType = /** @class */ (function () {
    function CouponType(coverage, itemType) {
        this._coverage = coverage;
        this._itemType = itemType;
    }
    CouponType.perItemType = function (itemType) {
        return new CouponType(enums_1.CouponCoverage.perItemType, itemType);
    };
    CouponType.shopwide = function () {
        return new CouponType(enums_1.CouponCoverage.shopwide);
    };
    Object.defineProperty(CouponType.prototype, "itemType", {
        get: function () { return this._itemType; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CouponType.prototype, "coverage", {
        get: function () { return this._coverage; },
        enumerable: true,
        configurable: true
    });
    return CouponType;
}());
exports.default = CouponType;
//# sourceMappingURL=couponType.js.map