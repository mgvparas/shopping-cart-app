import { connect } from 'react-redux';
import { ItemTypeDto } from '../../dtos';
import { shopActions } from '../../state/serviceActions';

function mapStateToProps(state: any) {
  return {
    itemTypes: state.itemTypes
  };
}

function mapDispatchToProps(dispatch: any) {// TODO: use Dispatch type
  return {
    addItemType(itemTypeDto: ItemTypeDto) {
      dispatch(shopActions.addItemType(itemTypeDto));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps);