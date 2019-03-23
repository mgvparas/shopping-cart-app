import { ItemDto } from '../../dtos';

const initialState: ItemDto[] = [
  { code: 'banana', price: 50, typeCode: 'fruit' },
  { code: 'potato', price: 50, typeCode: 'vegetable' },
  { code: 'bacon', price: 50, typeCode: 'meat' },
];

export default function(state = initialState, action: any) {
  switch (action.type) {
    default:
      return state;
  }
}