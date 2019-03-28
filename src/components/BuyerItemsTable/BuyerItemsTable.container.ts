import { connect } from 'react-redux';

function mapStateToProps(state: any) {
  return {
    items: state.items
  };
}

export default connect(mapStateToProps);