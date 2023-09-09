import React from 'react'
import { TabTitle } from '../utils/FunctionTitle'
import { Categoris } from './Categoris'
import { QuickSell } from './QuickSell'
import { Shop } from './Shop'
import Responsive from './Featered'
import { Slider } from './Slider'
import Number from './Dummynumber'
import Menu from '../components/menu/menulist'


export const HomePage = () => {
  TabTitle('Amar Bazar')
  return (
    <div className='' style={{}}>
          <Slider/>

          <Menu/>
          {/* <Number></Number> */}
          <Categoris/>
          <Shop/>
          <QuickSell/>
          <Responsive/>
          
          
    </div>
  )
}
