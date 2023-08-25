import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate} from 'react-router-dom';


export default function PrivetRoute({children}){
const user=useSelector(state=>state.userAuth)
console.log(user,'mahabub alam is astudent')
return user ? children : <Navigate to='/login' />
}
