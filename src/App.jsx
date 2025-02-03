import { useEffect, useReducer, useState } from 'react'
import Header from './component/Header/header'
import CategoryList from './component/CategoryList/categoryList'
import Loading from './component/Loading/loading'
import FastFoodList from './component/FastFoodList/fastFoodList'
import './App.css'
import axios from './axios'


function App() {
const [loading, setLoading] = useState(false)
const [fastFoodItems, setFastFoodItems] = useState([])
const fetchapi=async(categoryId=null)=>{
  const response= await axios.get(`/FastFood/list/${categoryId?"?categoryId="+categoryId:""}`)

  setFastFoodItems(response.data)
  setLoading(false)
}
useEffect(()=>{

fetchapi()

},[])

const renderContent=()=>{
if(loading){
  return <Loading theme={dark}/>
}
   return <FastFoodList fastFoodItems={fastFoodItems} />;
}
  
  return (
    <>
  <div className='wrapper bg-faded-dark'>
    <Header/>
    <CategoryList/>
    <div className='container mt-4'>{renderContent()}</div>
  </div>
    </>
  )
}

export default App
