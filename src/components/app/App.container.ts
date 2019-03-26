import { connect } from 'react-redux';
import { ItemDto, ItemTypeDto } from '../../dtos';
import { shopActions } from '../../state/serviceActions';

function mapStateToProps(state: any) {
  return {
    items: state.items,
    itemTypes: state.itemTypes
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    addItem(itemDto: ItemDto) {
      dispatch(shopActions.addItem(itemDto));
    },
    addItemType(itemTypeDto: ItemTypeDto) {
      dispatch(shopActions.addItemType(itemTypeDto));
    },
    startShop() {
      dispatch(shopActions.startShop());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps);