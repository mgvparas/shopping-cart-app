import { connect } from 'react-redux';
import { ItemDto, ItemTypeDto } from '../../dtos';
import { shopActions } from '../../state/serviceActions';

function mapStateToProps(state: any) {
  return {
    itemTypes: state.itemTypes,
    items: state.items
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    addItem(itemDto: ItemDto) {
      console.log(itemDto);
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