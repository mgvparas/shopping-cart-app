import { connect } from 'react-redux';
import { ItemDto } from '../../dtos';
import { shopActions } from '../../state/serviceActions';

function mapStateToProps(state: any) {
  return {
    items: state.items,
    itemTypes: state.itemTypes
  };
}

function mapDispatchToProps(dispatch: any) {// TODO: use Dispatch type
  return {
    addItem(itemDto: ItemDto) {
      dispatch(shopActions.addItem(itemDto));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps);