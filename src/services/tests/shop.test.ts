import 'jest';
import { Shop } from '../';
import { CouponDto, ItemDto, ItemTypeDto, ShoppingItem } from '../../dtos';
import { Item, Money, Percent } from '../../domain';
import { CouponCoverage } from '../../enums';

test('shop contains at least 10 items', () => {
  const itemDtos: ItemDto[] = [
    { code: 'a', typeCode: 'alphabet', price: 0 },
    { code: 'b', typeCode: 'alphabet', price: 0 },
    { code: 'c', typeCode: 'alphabet', price: 0 },
    { code: 'd', typeCode: 'alphabet', price: 0 },
    { code: 'e', typeCode: 'alphabet', price: 0 },
    { code: 'f', typeCode: 'alphabet', price: 0 },
    { code: 'g', typeCode: 'alphabet', price: 0 },
    { code: 'h', typeCode: 'alphabet', price: 0 },
    { code: 'i', typeCode: 'alphabet', price: 0 },
    { code: 'j', typeCode: 'alphabet', price: 0 }
  ];

  const shop = new Shop([{ code: 'alphabet' }], itemDtos);

  expect(shop.items.length).toBe(10);
});

test('user enters several items, shop returns total cost', () => {
  const itemTypeDtos: ItemTypeDto[] = [
    { code: 'fruit' },
    { code: 'vegetable' },
    { code: 'meat' },
  ];

  const itemDtos: ItemDto[] = [
    { code: 'banana', price: 50, typeCode: 'fruit' },
    { code: 'potato', price: 50, typeCode: 'vegetable' },
    { code: 'bacon', price: 50, typeCode: 'meat' }
  ];

  const shop = new Shop(itemTypeDtos, itemDtos);

  const shoppingItems: ShoppingItem[] = [
    { code: 'banana', quantity: 5 },
    { code: 'potato', quantity: 5 },
    { code: 'bacon', quantity: 5 }
  ];

  const totalCost: number = shop.getTotalCost(shoppingItems);

  expect(totalCost).toBe(750);
});

test('items can "On Special" where they are X% off the normal price', () => {
  const itemTypeDtos: ItemTypeDto[] = [
    { code: 'fruit' },
    { code: 'vegetable' },
    { code: 'meat' },
  ];

  const itemDtos: ItemDto[] = [
    { code: 'banana', price: 50, typeCode: 'fruit' },
    { code: 'potato', price: 50, typeCode: 'vegetable' },
    { code: 'bacon', price: 50, typeCode: 'meat' }
  ];

  const shop = new Shop(itemTypeDtos, itemDtos);

  const banana: Item = shop.getItem('banana');
  banana.setDiscountPercentage(new Percent(50));

  const shoppingItems: ShoppingItem[] = [
    { code: 'banana', quantity: 5 },
    { code: 'potato', quantity: 5 },
    { code: 'bacon', quantity: 5 }
  ];

  const totalCost: number = shop.getTotalCost(shoppingItems);

  expect(totalCost).toBe(625);
});

test('items can "On Special" where they are $X off the normal price', () => {
  const itemTypeDtos: ItemTypeDto[] = [
    { code: 'fruit' },
    { code: 'vegetable' },
    { code: 'meat' },
  ];

  const itemDtos: ItemDto[] = [
    { code: 'banana', price: 50, typeCode: 'fruit' },
    { code: 'potato', price: 50, typeCode: 'vegetable' },
    { code: 'bacon', price: 50, typeCode: 'meat' }
  ];

  const shop = new Shop(itemTypeDtos, itemDtos);

  const banana: Item = shop.getItem('banana');
  banana.setDiscountAmount(new Money(25));

  const shoppingItems: ShoppingItem[] = [
    { code: 'banana', quantity: 5 },
    { code: 'potato', quantity: 5 },
    { code: 'bacon', quantity: 5 }
  ];

  const totalCost: number = shop.getTotalCost(shoppingItems);

  expect(totalCost).toBe(625);
});

test('items can "On Special" where they are both %X and $X off the normal price; only apply highest', () => {
  const itemTypeDtos: ItemTypeDto[] = [
    { code: 'fruit' },
    { code: 'vegetable' },
    { code: 'meat' },
  ];

  const itemDtos: ItemDto[] = [
    { code: 'banana', price: 50, typeCode: 'fruit' },
    { code: 'potato', price: 50, typeCode: 'vegetable' },
    { code: 'bacon', price: 50, typeCode: 'meat' }
  ];

  const shop = new Shop(itemTypeDtos, itemDtos);

  const banana: Item = shop.getItem('banana');
  banana.setDiscountAmount(new Money(25));
  banana.setDiscountPercentage(new Percent(25));

  const shoppingItems: ShoppingItem[] = [
    { code: 'banana', quantity: 5 },
    { code: 'potato', quantity: 5 },
    { code: 'bacon', quantity: 5 }
  ];

  const totalCost: number = shop.getTotalCost(shoppingItems);

  expect(totalCost).toBe(625);
});

test('user can use a coupon code to discount all items by a percentage; only apply highest', () => {
  const itemTypeDtos: ItemTypeDto[] = [
    { code: 'fruit' },
    { code: 'vegetable' },
    { code: 'meat' },
  ];

  const itemDtos: ItemDto[] = [
    { code: 'banana', price: 50, typeCode: 'fruit' },
    { code: 'potato', price: 50, typeCode: 'vegetable' },
    { code: 'bacon', price: 50, typeCode: 'meat' }
  ];

  const shop = new Shop(itemTypeDtos, itemDtos);

  const couponDtos: CouponDto[] = [
    { code: '75PERCENTOFF', discountPercentage: 75, coverage: CouponCoverage.shopwide },
  ];

  shop.addCoupons(couponDtos);

  const banana: Item = shop.getItem('banana');
  banana.setDiscountAmount(new Money(25));
  banana.setDiscountPercentage(new Percent(25));

  const shoppingItems: ShoppingItem[] = [
    { code: 'banana', quantity: 5 },
    { code: 'potato', quantity: 5 },
    { code: 'bacon', quantity: 5 }
  ];

  const totalCost: number = shop.getTotalCost(
    shoppingItems,
    '75PERCENTOFF'
  );

  expect(totalCost).toBe(187.5);
});

test('user can use a coupon code to discount a type of item by a percentage; only apply highest', () => {
  const itemTypeDtos: ItemTypeDto[] = [
    { code: 'fruit' },
    { code: 'vegetable' },
    { code: 'meat' },
  ];

  const itemDtos: ItemDto[] = [
    { code: 'banana', price: 50, typeCode: 'fruit' },
    { code: 'potato', price: 50, typeCode: 'vegetable' },
    { code: 'bacon', price: 50, typeCode: 'meat' }
  ];

  const shop = new Shop(itemTypeDtos, itemDtos);

  const couponDtos: CouponDto[] = [
    {
      code: '75PERCENTOFFFRUIT',
      discountPercentage: 75,
      itemTypeCode: 'fruit',
      coverage: CouponCoverage.perItemType
    },
  ];

  shop.addCoupons(couponDtos);

  const banana: Item = shop.getItem('banana');
  banana.setDiscountAmount(new Money(25));
  banana.setDiscountPercentage(new Percent(25));

  const shoppingItems: ShoppingItem[] = [
    { code: 'banana', quantity: 5 },
    { code: 'potato', quantity: 5 },
    { code: 'bacon', quantity: 5 }
  ];

  const totalCost: number = shop.getTotalCost(
    shoppingItems,
    '75PERCENTOFFFRUIT'
  );

  expect(totalCost).toBe(562.5);
});