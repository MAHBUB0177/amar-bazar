
import { REMOVE, decrementCounter, incrementCounter ,ProductDetails} from "../../Service/Action/Action";
import { notifyError, notifySuccess } from "./notifySuccess";
import store from '../../Store'

 //add cart
 export const handelincrement = (data) => {
    store.dispatch(incrementCounter(data));
    notifySuccess('Product Added To Cart');
  };
  //remove cart 
 export const removeItem = (product) => {
    store.dispatch(decrementCounter(product));
    notifyError('Item Remove From Cart');
  };


export const handelDecrement = (item) => {
    store.dispatch(REMOVE(item));
    // console.log('data test',item_id)
    // let index = product.findIndex(obj => obj.id === item_id)

    // if (index >= 0) {
    //   product[index].quantity = (product[index].quantity | 0) - 1
    // }
  };

export const productDetails=(item)=>{
  store.dispatch(ProductDetails(item))
}