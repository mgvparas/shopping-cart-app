import { connect } from 'react-redux';

function mapStateToProps(state: any) {
  return {
    itemTypes: state.itemTypes,
    items: state.items
  };
}

export default connect(mapStateToProps, null);