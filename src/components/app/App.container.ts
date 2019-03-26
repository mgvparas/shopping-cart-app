import { connect } from 'react-redux';
import { shopActions } from '../../state/serviceActions';

function mapDispatchToProps(dispatch: any) {// TODO: use Dispatch type
  return {
    startShop() {
      dispatch(shopActions.startShop());
    }
  }
}

export default connect(null, mapDispatchToProps);