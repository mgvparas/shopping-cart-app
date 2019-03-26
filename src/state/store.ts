import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { Shop } from '../services';

const logger = (store: { getState: () => void; }) => (next: (action: any) => void) => (action: any) => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result;
}

const shop = new Shop(
  [
    { code: 'fruit' },
    { code: 'vegetable' },
    { code: 'meat' }
  ],
  [
    { code: 'banana', price: 50, typeCode: 'fruit' },
    { code: 'potato', price: 50, typeCode: 'vegetable' },
    { code: 'bacon', price: 50, typeCode: 'meat' },
  ]
);

export default createStore(
  rootReducer,
  applyMiddleware(
    thunk.withExtraArgument({ shop }),
    logger
  )
);
