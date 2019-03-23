import { ItemTypeDto } from '../../dtos';

const initialState: ItemTypeDto[] = [
  { code: 'fruit' },
  { code: 'vegetable' },
  { code: 'meat' }
];

export default function(state = initialState, action: any) {
  switch (action.type) {
    default:
      return state;
  }
}