import { connect } from 'react-redux';
import { shopActions } from '../../state/serviceActions';
import { ShoppingItem } from '../../dtos';

function mapStateToProps(state: any) {
  return {
    items: state.items
  };
}

function mapDispatchToProps(dispatch: any) {// TODO: use Dispatch type
  return {
    addToCart(shoppingItem: ShoppingItem) {
      dispatch(shopActions.addToCart(shoppingItem));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps);