"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jest");
var __1 = require("..");
var domain_1 = require("../../domain");
var enums_1 = require("../../enums");
test('shop contains at least 10 items', function () {
    var itemDtos = [
        { code: 'a', typeCode: 'alphabet' },
        { code: 'b', typeCode: 'alphabet' },
        { code: 'c', typeCode: 'alphabet' },
        { code: 'd', typeCode: 'alphabet' },
        { code: 'e', typeCode: 'alphabet' },
        { code: 'f', typeCode: 'alphabet' },
        { code: 'g', typeCode: 'alphabet' },
        { code: 'h', typeCode: 'alphabet' },
        { code: 'i', typeCode: 'alphabet' },
        { code: 'j', typeCode: 'alphabet' }
    ];
    var shop = new __1.Shop([{ code: 'alphabet' }], itemDtos);
    expect(shop.items.length).toBe(10);
});
test('user enters several items, shop returns total cost', function () {
    var itemTypeDtos = [
        { code: 'fruit' },
        { code: 'vegetable' },
        { code: 'meat' },
    ];
    var itemDtos = [
        { code: 'banana', price: 50, typeCode: 'fruit' },
        { code: 'potato', price: 50, typeCode: 'vegetable' },
        { code: 'bacon', price: 50, typeCode: 'meat' }
    ];
    var shop = new __1.Shop(itemTypeDtos, itemDtos);
    var shoppingItems = [
        { code: 'banana', quantity: 5 },
        { code: 'potato', quantity: 5 },
        { code: 'bacon', quantity: 5 }
    ];
    var totalCost = shop.getTotalCost(shoppingItems);
    expect(totalCost).toBe(750);
});
test('items can "On Special" where they are X% off the normal price', function () {
    var itemTypeDtos = [
        { code: 'fruit' },
        { code: 'vegetable' },
        { code: 'meat' },
    ];
    var itemDtos = [
        { code: 'banana', price: 50, typeCode: 'fruit' },
        { code: 'potato', price: 50, typeCode: 'vegetable' },
        { code: 'bacon', price: 50, typeCode: 'meat' }
    ];
    var shop = new __1.Shop(itemTypeDtos, itemDtos);
    var banana = shop.getItem('banana');
    banana.setDiscountPercentage(new domain_1.Percent(50));
    var shoppingItems = [
        { code: 'banana', quantity: 5 },
        { code: 'potato', quantity: 5 },
        { code: 'bacon', quantity: 5 }
    ];
    var totalCost = shop.getTotalCost(shoppingItems);
    expect(totalCost).toBe(625);
});
test('items can "On Special" where they are $X off the normal price', function () {
    var itemTypeDtos = [
        { code: 'fruit' },
        { code: 'vegetable' },
        { code: 'meat' },
    ];
    var itemDtos = [
        { code: 'banana', price: 50, typeCode: 'fruit' },
        { code: 'potato', price: 50, typeCode: 'vegetable' },
        { code: 'bacon', price: 50, typeCode: 'meat' }
    ];
    var shop = new __1.Shop(itemTypeDtos, itemDtos);
    var banana = shop.getItem('banana');
    banana.setDiscountAmount(new domain_1.Money(25));
    var shoppingItems = [
        { code: 'banana', quantity: 5 },
        { code: 'potato', quantity: 5 },
        { code: 'bacon', quantity: 5 }
    ];
    var totalCost = shop.getTotalCost(shoppingItems);
    expect(totalCost).toBe(625);
});
test('items can "On Special" where they are both %X and $X off the normal price; only apply highest', function () {
    var itemTypeDtos = [
        { code: 'fruit' },
        { code: 'vegetable' },
        { code: 'meat' },
    ];
    var itemDtos = [
        { code: 'banana', price: 50, typeCode: 'fruit' },
        { code: 'potato', price: 50, typeCode: 'vegetable' },
        { code: 'bacon', price: 50, typeCode: 'meat' }
    ];
    var shop = new __1.Shop(itemTypeDtos, itemDtos);
    var banana = shop.getItem('banana');
    banana.setDiscountAmount(new domain_1.Money(25));
    banana.setDiscountPercentage(new domain_1.Percent(25));
    var shoppingItems = [
        { code: 'banana', quantity: 5 },
        { code: 'potato', quantity: 5 },
        { code: 'bacon', quantity: 5 }
    ];
    var totalCost = shop.getTotalCost(shoppingItems);
    expect(totalCost).toBe(625);
});
test('user can use a coupon code to discount all items by a percentage; only apply highest', function () {
    var itemTypeDtos = [
        { code: 'fruit' },
        { code: 'vegetable' },
        { code: 'meat' },
    ];
    var itemDtos = [
        { code: 'banana', price: 50, typeCode: 'fruit' },
        { code: 'potato', price: 50, typeCode: 'vegetable' },
        { code: 'bacon', price: 50, typeCode: 'meat' }
    ];
    var shop = new __1.Shop(itemTypeDtos, itemDtos);
    var couponDtos = [
        { code: '75PERCENTOFF', discountPercentage: 75, coverage: enums_1.CouponCoverage.shopwide },
    ];
    shop.addCoupons(couponDtos);
    var banana = shop.getItem('banana');
    banana.setDiscountAmount(new domain_1.Money(25));
    banana.setDiscountPercentage(new domain_1.Percent(25));
    var shoppingItems = [
        { code: 'banana', quantity: 5 },
        { code: 'potato', quantity: 5 },
        { code: 'bacon', quantity: 5 }
    ];
    var totalCost = shop.getTotalCost(shoppingItems, '75PERCENTOFF');
    expect(totalCost).toBe(187.5);
});
test('user can use a coupon code to discount a type of item by a percentage; only apply highest', function () {
    var itemTypeDtos = [
        { code: 'fruit' },
        { code: 'vegetable' },
        { code: 'meat' },
    ];
    var itemDtos = [
        { code: 'banana', price: 50, typeCode: 'fruit' },
        { code: 'potato', price: 50, typeCode: 'vegetable' },
        { code: 'bacon', price: 50, typeCode: 'meat' }
    ];
    var shop = new __1.Shop(itemTypeDtos, itemDtos);
    var couponDtos = [
        {
            code: '75PERCENTOFFFRUIT',
            discountPercentage: 75,
            itemTypeCode: 'fruit',
            coverage: enums_1.CouponCoverage.perItemType
        },
    ];
    shop.addCoupons(couponDtos);
    var banana = shop.getItem('banana');
    banana.setDiscountAmount(new domain_1.Money(25));
    banana.setDiscountPercentage(new domain_1.Percent(25));
    var shoppingItems = [
        { code: 'banana', quantity: 5 },
        { code: 'potato', quantity: 5 },
        { code: 'bacon', quantity: 5 }
    ];
    var totalCost = shop.getTotalCost(shoppingItems, '75PERCENTOFFFRUIT');
    expect(totalCost).toBe(562.5);
});
//# sourceMappingURL=shop.test.js.map