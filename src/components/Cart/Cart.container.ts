import { connect } from 'react-redux';

function mapStateToProps(state: any) {
  return {
    items: state.cart.items
  };
}

export default connect(mapStateToProps);