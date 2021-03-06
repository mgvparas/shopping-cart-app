import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { Shop } from '../services';
import { logger } from './utils';

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
