import { connect } from 'react-redux';
import { ShoppingItem } from '../../dtos';
import { shopActions } from '../../state/serviceActions';

function mapStateToProps(state: any) {
  return {
    items: state.items
  };
}

function mapDispatchToProps(dispatch: any) {// TODO: use Dispatch type
  return {
    addToCart(shoppingItem: ShoppingItem) {
      dispatch(shopActions.addToCart(shoppingItem));
      dispatch(shopActions.computeTotalCost());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps);