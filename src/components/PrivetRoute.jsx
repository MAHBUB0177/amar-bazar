import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate} from 'react-router-dom';


export default function PrivetRoute({children}){
const user=useSelector(state=>state.userAuth)
const isEmpty = !user || Object.keys(user).length === 0;

console.log(user,'mahabub alam is astudent')
return isEmpty ? <Navigate to='/login' /> : children;
}
