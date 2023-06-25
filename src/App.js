import React, { useEffect, useState } from 'react'
import "./App.css"
export default function App() {
  
  //initilize the one useSatate that are use to store the all details.
  const [data,setData]=useState([])
  
  //useEffect are used to render the application by empty dependencies at onece time 
  // page is loading 
  useEffect(()=>{

      //fetch is inbuild function are availabe inside react that are use to
      // fetch the data from API
    fetch("https://reqres.in/api/users?page=2")
    .then((res)=>res.json())
    .then((data)=>setData(data.data))
  },[])
  console.log(data)
  return (
    <>
    {data.map((data,index)=>
    <div className='container' key={index}>
       <div class="circle">
  <span class="number">{data.id}</span>
    </div>
        <div className='cart'>
            <img src={data.avatar} alt={data.first_name} width={300} height={300}/>
         
        </div>
        <h2><i>{data.first_name}</i></h2>
    </div>
  )}   




    </>
  )
}
