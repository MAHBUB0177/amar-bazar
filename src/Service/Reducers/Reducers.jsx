import { ADD_TO_CART,REMOVE_CART ,REMOVE_CART_ALL,USER_LOGEDIN,ADD_FAV,INCREMENT_CART} from "../Constants/ActionType";

const initialCounter={
          count:0,
          product:[],
          islogedin:false,
}

const counterReducer =(state=initialCounter,action)=>{
          console.log(action.payload,'reducers datas')
          switch(action.type){
                    case ADD_TO_CART:
                        // const ItemIndex=state.product.findIndex((item)=>item.id === action.payload.id)
                        // if (ItemIndex >= 0){
                        //       state.product[ItemIndex].start_quantity+=1
                        // }
                        // else{
                        //       const temp={...action.payload,start_quantity:1}
                        //       return{
                        //             //     count:state.count+1,
                        //                 product:[...state.product,temp]
                        //       }

                        // }
                        const temp={...action.payload,quantity:1}
                              return{
                                        count:state.count+1,
                                        product:[...state.product,temp]
                              }

                    case REMOVE_CART:
                              const newProduct = state.product.filter((item) =>
                  
                              item.id !== action.payload.id);  
                              return {
              
                                        ...state,
                                         count:state.count-1,
                                         product:newProduct
                                   }
                  

                  case REMOVE_CART_ALL:
                        return{
                                    ...state,
                                    product:[]
                        }

                  case USER_LOGEDIN:
                        return{
                                    ...state,
                                    islogedin:true
                        }

                  case ADD_FAV:
                        return{
                                    ...state,
                                    count:state.count+1,
                        }



                  case INCREMENT_CART:
                        let index = state.product.findIndex(obj => obj.id === action.payload.id)

                        if (index >= 0) {
                              state.product[index].quantity = (state.product[index].quantity | 0) + 1     
                        }
                              return index
                    default:
                              return state;
          }
}
export default counterReducer;