import { Inc, Dec } from "./ActionType";

const initstate = {
     count: 0
}

const Reducer = (state = initstate, action) => {
     switch (action.type) {
          case Inc: {
               return {
                    count: state.count + 1
               }
          }
          case Dec: {
               return {
                    count: state.count - 1
               }
          }
          default:
               return state;
     }
};

export default Reducer;