
import { Tabs } from 'antd'
import Products from './Products'
import Users from './Users'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import React, {useEffect} from 'react'
import Services from './Services'
import Orders from './Orders'
import Book from './Book'
import Feedback from './Feedback'

function Admin() {

     const redirectUser = useNavigate();
     const { user } = useSelector((state) => state.users);
     useEffect(() => {
     
        if (user.role !== 'admin') {
          redirectUser('/')	
        }
     }, []);
     
  return (
    <div> Admin area
         <Tabs defaultActiveKey='1'>
              <items tab="Products" key="1">
                   <Products />
              </items>
              <items tab="Users" key="2">
                   <Users />
              </items>
              <items tab="Service" key="3">
                   <Services />
              </items>
              <items tab="Order Deal" key="4">
                   <Orders />  
              </items>
              <items tab="Booked Worker" key="5">
                   <Book/>
              </items>
              {/* <items tab="Email Subscribed" key="6">
                   <Orders />
              </items> */}
              <items tab="Peoples Feedback" key="7">
                   <Feedback />
              </items>
         </Tabs>     
        
         </div>
     )
}

export default Admin
