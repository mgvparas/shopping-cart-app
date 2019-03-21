"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var domain_1 = require("../domain");
var enums_1 = require("../enums");
var Shop = /** @class */ (function () {
    function Shop(itemTypeDtos, itemDtos) {
        var _this = this;
        this._items = [];
        this._itemTypes = [];
        this._coupons = [];
        this._itemTypes = itemTypeDtos.map(function (itemTypeDto) {
            return new domain_1.ItemType(itemTypeDto.code);
        });
        this._items = itemDtos.map(function (itemDto) {
            var matchingItemType = null;
            for (var _i = 0, _a = _this._itemTypes; _i < _a.length; _i++) {
                var itemType = _a[_i];
                if (itemType.code === itemDto.typeCode) {
                    matchingItemType = itemType;
                }
            }
            if (matchingItemType !== null) {
                return new domain_1.Item(itemDto.code, new domain_1.Money(itemDto.price), matchingItemType);
            }
            else {
                throw new Error("Unable to find item type with code: " + itemDto.typeCode);
            }
        });
    }
    Object.defineProperty(Shop.prototype, "items", {
        get: function () { return this._items; },
        enumerable: true,
        configurable: true
    });
    Shop.prototype.getTotalCost = function (shoppingItems, couponCode) {
        if (couponCode) {
            this.applyCoupon(couponCode);
        }
        var totalPrice = 0;
        for (var _i = 0, shoppingItems_1 = shoppingItems; _i < shoppingItems_1.length; _i++) {
            var shoppingItem = shoppingItems_1[_i];
            for (var _a = 0, _b = this._items; _a < _b.length; _a++) {
                var item = _b[_a];
                if (item.code === shoppingItem.code) {
                    totalPrice += item.discountedPrice.value * shoppingItem.quantity;
                }
            }
        }
        return totalPrice;
    };
    Shop.prototype.getItem = function (code) {
        var itemMatch;
        for (var _i = 0, _a = this._items; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.code === code) {
                itemMatch = item;
            }
        }
        if (!itemMatch) {
            throw new Error("Unable to find item with code: " + code);
        }
        return itemMatch;
    };
    Shop.prototype.addCoupons = function (couponDtos) {
        var _this = this;
        var _a;
        (_a = this._coupons).push.apply(_a, couponDtos.map(function (couponDto) {
            var couponType;
            if (couponDto.coverage === enums_1.CouponCoverage.perItemType) {
                var matchingItemType = null;
                for (var _i = 0, _a = _this._itemTypes; _i < _a.length; _i++) {
                    var itemType = _a[_i];
                    if (itemType.code === couponDto.itemTypeCode) {
                        matchingItemType = itemType;
                    }
                }
                couponType = domain_1.CouponType.perItemType(matchingItemType);
            }
            else {
                couponType = domain_1.CouponType.shopwide();
            }
            return new domain_1.Coupon(couponDto.code, new domain_1.Percent(couponDto.discountPercentage), couponType);
        }));
    };
    Shop.prototype.applyCoupon = function (couponCode) {
        var _loop_1 = function (coupon) {
            if (coupon.code === couponCode) {
                var items = this_1._items;
                if (coupon.type.coverage === enums_1.CouponCoverage.perItemType) {
                    items = this_1._items.filter(function (item) { return item.type.code == coupon.type.itemType.code; });
                }
                for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                    var item = items_1[_i];
                    item.setDiscountPercentage(coupon.discountPercentage);
                }
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = this._coupons; _i < _a.length; _i++) {
            var coupon = _a[_i];
            _loop_1(coupon);
        }
    };
    return Shop;
}());
exports.default = Shop;
//# sourceMappingURL=shop.js.map