import React from 'react'
import { TabTitle } from '../utils/FunctionTitle'
import { Banner } from './Banner'
import { Categoris } from './Categoris'
import { Opening } from './Opening'
import { Products } from './Products'
import { QuickSell } from './QuickSell'
import { Shop } from './Shop'
import Responsive from './Featered'
import { Slider } from './Slider'
import Number from './Dummynumber'


export const HomePage = () => {
  TabTitle('Amar Bazar')
  return (
    <div className='' style={{}}>
          <Slider/>
          {/* <Number></Number> */}
          <Categoris/>
          <Shop/>
          <QuickSell/>
          <Responsive/>
          
          
    </div>
  )
}
