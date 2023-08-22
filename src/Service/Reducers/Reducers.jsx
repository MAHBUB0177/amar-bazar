import {
  ADD_TO_CART,
  REMOVE_CART,
  REMOVE_CART_ALL,
  USER_LOGEDIN,
  ADD_FAV,
  INCREMENT_CART,
} from "../Constants/ActionType";

const initialCounter = {
  count: 0,
  product: [],
  islogedin: false,
};

const counterReducer = (state = initialCounter, action) => {
  console.log(action.payload, "reducers datas");
  switch (action.type) {
    case ADD_TO_CART:
      const IteamIndex = state.product.findIndex(
        (iteam) => iteam.id === action.payload.id
      );

      if (IteamIndex >= 0) {
        state.product[IteamIndex].qnty += 1;
        return {
          ...state,
          product: [...state.product],
        };
      } else {
        const temp = { ...action.payload, qnty: 1 };
        return {
          ...state,
          product: [...state.product, temp],
        };
      }

    // const temp={...action.payload,quantity:1}
    //       return{
    //                 count:state.count+1,
    //                 product:[...state.product,temp]
    //       }
    //remove single item cart:
    case REMOVE_CART:
      const newProduct = state.product.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        count: state.count - 1,
        product: newProduct,
      };

    //remove full cart:
    case REMOVE_CART_ALL:
      return {
        ...state,
        product: [],
      };

    case USER_LOGEDIN:
      return {
        ...state,
        islogedin: true,
      };
    //add fav inc
    case ADD_FAV:
      return {
        ...state,
        count: state.count + 1,
      };

    //decrease individual item
    case "RMV_ONE":
      const IteamIndex_dec = state.product.findIndex(
        (iteam) => iteam.id === action.payload.id
      );

      if (state.product[IteamIndex_dec].qnty >= 1) {
        const dltiteams = (state.product[IteamIndex_dec].qnty -= 1);
        console.log([...state.product, dltiteams]);

        return {
          ...state,
          product: [...state.product],
        };
      } else if (state.product[IteamIndex_dec].qnty === 1) {
        const data = state.product.filter((el) => el.id !== action.payload);

        return {
          ...state,
          product: data,
        };
      }
    default:
      return state;
  }
};
export default counterReducer;
