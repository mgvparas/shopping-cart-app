import { ItemDto } from '../../dtos';

const initialState: ItemDto[] = [];

export default function(state = initialState, action: any) {
  switch (action.type) {
    default:
      return state;
  }
}