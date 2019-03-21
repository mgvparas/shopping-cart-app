"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("./");
var Item = /** @class */ (function () {
    function Item(code, price, type) {
        this._code = code;
        this._price = price;
        this._discountedPrice = price;
        this._type = type;
    }
    Object.defineProperty(Item.prototype, "code", {
        get: function () { return this._code; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "price", {
        get: function () { return this._price; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "discountedPrice", {
        get: function () { return this._discountedPrice; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "type", {
        get: function () { return this._type; },
        enumerable: true,
        configurable: true
    });
    Item.prototype.setDiscountPercentage = function (percentage) {
        var discountAmount = this.price.value * percentage.decimalValue;
        this.applyDiscount(discountAmount);
    };
    Item.prototype.setDiscountAmount = function (amount) {
        this.applyDiscount(amount.value);
    };
    Item.prototype.applyDiscount = function (discountAmount) {
        var newDiscountedPrice = this._price.value - discountAmount;
        if (newDiscountedPrice < this._discountedPrice.value) {
            this._discountedPrice = new _1.Money(newDiscountedPrice);
        }
    };
    return Item;
}());
exports.default = Item;
//# sourceMappingURL=item.js.map