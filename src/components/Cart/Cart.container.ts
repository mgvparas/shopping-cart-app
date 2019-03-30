import { connect } from 'react-redux';

function mapStateToProps(state: any) {
  const { items, totalCost } = state.cart;

  return {
    items,
    totalCost
  };
}

export default connect(mapStateToProps);