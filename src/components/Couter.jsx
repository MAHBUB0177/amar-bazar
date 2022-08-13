import React from 'react';
import { Button, Grid } from '@mui/material';
const Counter = () => {
  document.addEventListener('DOMContentLoaded',()=>{
    function counter(id,start,end,duration){
      let obj=document.getElementById(id),
      current=start,
      range=end-start,
      increment=end > start ? 1 : -1,
      step=Math.abs(Math.floor(duration / range)),
      timer=setInterval(()=>{
        current += increment;
        obj.textContent=current;
        if(current === end ){
          clearInterval(timer)
        }
      },step);


    }
    counter('counter1',0,1278,3000)
    counter('counter2',0,1278,3000)
    counter('counter3',0,1278,3000)
  })
  return (
    <div style={{marginTop:'20px'}}>


    <section id='counter'>
      <div className='row counter-section' style={{background:'tomato'}}>
        <div className='col-md-3'>
          <h2>
            <span id='counter1'></span>
          </h2>
          <p>Saving</p>

        </div>

        <div className='col-md-3'>
          <h2>
            <span id='counter2'></span>
          </h2>
          <p>name</p>

        </div>

       

        <div className='col-md-3'>
          <h2>
            <span id='counter3'></span>
          </h2>
          <p>photo</p>

        </div>


      </div>

    </section>
    
  
</div>
  );
};

export default Counter;