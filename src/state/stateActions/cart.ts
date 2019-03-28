const namespace = 'CART';

const SET_TOTAL_COST = `${namespace}/SET_TOTAL_COST`;
function setTotalCost(totalCost: number) {
  return {
    type: SET_TOTAL_COST,
    payload: totalCost
  }
}

export default {
  SET_TOTAL_COST,
  setTotalCost
};