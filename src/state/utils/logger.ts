const logger = (store: { getState: () => void; }) => (next: (action: any) => void) => (action: any) => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result;
};

export default logger;