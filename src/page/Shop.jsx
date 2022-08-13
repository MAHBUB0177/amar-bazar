
import{Card} from 'react-bootstrap'
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './Common.css'
import {
  Button,
  CardActions,
  IconButton,
  
} from "@material-ui/core";
import {incrementCounter,incrementFav} from '../Service/Action/Action'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { useDispatch,useSelector } from 'react-redux';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Rating } from 'react-simple-star-rating'
import StarIcon from '@mui/icons-material/Star';

export const Shop = () => {
  const [rating, setRating] = useState(0) // initial rating value

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)
    // other logic
  }

  const domain = "https://availtrade.com/public/images/";
  const [Products, setProducts] = useState(null);


  const [show, setShow] = useState(false);
  const[prod,setProd]=useState(null)

  const handleClose = () => setShow(false);
  const handleModal = () => setShow(true);
  const handleShow=(prod)=>{
    setProd(prod)
    handleModal()


  }
  
  const notify = () =>   toast.success("product add to cart!", {
    position: toast.POSITION.TOP_CENTER
  });
 
 

  const dispatch=useDispatch()
  const product=useSelector(state=>state.product)
  

  const addToCart =(product)=>{
    dispatch(incrementCounter(product))
    notify()
   }

   const addFav =()=>{
    dispatch(incrementFav())
   }

  localStorage.setItem("cartdata", JSON.stringify(product));
  
    useEffect(() => {
       const getAutomobile = async () => {
         await axios({
          url: `https://fakestoreapi.com/products`,
           method: "GET",
         })
           .then((response) => {
             console.log(response.data,'categpory data');
             setProducts(response.data);
           })
           .catch((error) => {
             console.log("CategoryProduct", error);
           });
       };
       getAutomobile();
     }, []);

  
 
 
  return (
    <div  style={{background:'#f2eeed'}}>

<div className='container'>
                    <div className='section-title text-center'>
                              <h4>Latest Discounted Products</h4>
                              <hr />
                              <p className='text-muted'>See Our latest discounted products below. Choose your daily needs <br/>from here and get a special discount with free shipping.</p>

                    </div>

              </div>

    <div >

           {
                Products?.map((item,i) =>  
        <div className="row" style={{ display: 'inline-block' }} key={i}>

          <div className="col-md-3">
          <Card className='shadow inner' style={{ width: '18rem',height:'280px' ,marginLeft:'15px',marginBottom:'7px'}}>
          <Card.Body>
          <div className=''>
            <Card.Img variant="top" src={item?.image} style={{height:'120px',pointer:'cursor'}} alt='' onClick={()=>handleShow(item)}/>
            <ToastContainer/>
            </div>
            <Card.Text>
             <h6 style={{fontSize:'15px'}}> {item?.category?.substring(0, 20)}</h6> 
             <p style={{fontSize:'14px',}}><span style={{color:'red',fontSize:'15px',marginRight:'40px'}}><CurrencyRupeeIcon/>{item?.price}Tk</span><span style={{color:'#d8c8db',marginLeft:'40px',}}  onClick={()=>addFav()}><FavoriteIcon /></span> </p>
             <CardActions style={{justifyContent: "center", }}>
            <Button variant="contained" color="secondary" style={{marginBottom:'10px'}} onClick={()=>addToCart(item)}>
            AddToCart
            </Button>
            </CardActions>
            </Card.Text>
          </Card.Body>
        </Card>
      
          </div>
       </div> 
                )
           }
      </div>


      
<div >
       <Modal show={show} onHide={handleClose}  >
        <Modal.Header closeButton>
        </Modal.Header>

        <div className='row showmodal'>
          <div className='col-md-5' >
            <img className='showimg' src={prod?.image} style={{height:'250px',width:'240px',paddingLeft:'10px',marginTop:'50px',marginBottom:'30px'}}></img>
          </div>
          <div className='col-md-7'style={{marginTop:'15px',paddingLeft:'60px'}} >
            <h4 style={{color:'green'}}>{prod?.category.substring(0,14)}</h4>
            <Button variant="contained"  style={{background:'##91b39a',borderRadius:'50px'}}>in stock</Button>
            <br/>
            <span>
            <p style={{paddingRight:'10px',fontSize:'25px'}}>Rating:{prod?.rating?.rate}<span style={{color:'goldenrod'}}><StarIcon/><StarIcon/><StarIcon/></span></p>
            <p style={{paddingRight:'10px'}}>{prod?.description?.substring(0,150)}</p>
            

            </span>
           
    
            <p style={{fontSize:'25px',color:'tomato'}}><b><CurrencyRupeeIcon/>{prod?.price}TK</b></p>
            
            <Button variant="contained" color='primary' style={{justifyContent:'between' }} >
              <span>-</span><span style={{marginLeft:'4px',}}>{prod?.start_quantity?.substring(0,1)}</span><span style={{marginLeft:'4px',}}>+</span>
            </Button>

            {/* <div className='mt-5 d-flex justify-content-between align-item-center' style={{cursor:'pointer',background:'gray',width:'100px'}}> 
               <span style={{fontSize:'24'}}>-</span>
              <span style={{fontSize:'24'}}>{prod?.start_quantity}</span>
              <span style={{fontSize:'24'}}>+</span>

            </div> */}

            <Button variant="contained"  style={{marginLeft:'4px',background:'#1a913a'}} onClick={()=>addToCart(prod)}>Add Cart</Button>
            <p style={{marginTop:'4px',fontSize:'20px'}}>Count:{prod?.rating?.count}</p>

         
          </div>


          </div>
       </Modal>  
       </div>

    </div>
  )
}
