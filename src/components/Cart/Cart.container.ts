import { connect } from 'react-redux';
import { ShoppingItem } from '../../dtos';
import { shopActions } from '../../state/serviceActions';
import { cartActions } from '../../state/stateActions';

function mapStateToProps(state: any) {
  const { items, totalCost } = state.cart;

  return {
    items,
    totalCost
  };
}

function mapDispatchToProps(dispatch: any) {// TODO: Use dispatch type
  return {
    decrementQuantity(item: ShoppingItem) {
      dispatch(cartActions.decrementQuantity(item));
      dispatch(shopActions.computeTotalCost());
    },
    incrementQuantity(item: ShoppingItem) {
      dispatch(cartActions.incrementQuantity(item));
      dispatch(shopActions.computeTotalCost());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps);