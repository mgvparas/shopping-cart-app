import { connect } from 'react-redux';
import { ItemDto, ItemTypeDto } from '../../dtos';
import { itemTypeActions } from '../../state/actions';

function mapStateToProps(state: any) {
  return {
    itemTypes: state.itemTypes,
    items: state.items
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    handleAddItemTypeClick(itemTypeDto: ItemTypeDto) {
      dispatch(itemTypeActions.addItemType(itemTypeDto));
    },
    handleAddItemClick(itemDto: ItemDto) {
      console.log(itemDto);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps);