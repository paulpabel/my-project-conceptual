/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import Cart from '../Cart/Cart';
import './Home.css'
import React, { useEffect, useState } from "react";

const Home = () => {

    const [AllActors, setAllActors]=useState([]);
    const [selectActors, setSelectedActors]=useState([]);
    const [remaining, setRemaining]=useState(0);
    const [totalSpend, setTotalSpend]=useState(0);


    useEffect(()=>{
        fetch('project.json')
        .then(res=>res.json())
        .then(data=>setAllActors(data))
    } ,[])


 


    const handleSelectActor=(actor)=>{
        const isExist= selectActors.find(item=>item.id=== actor.id)
        let count=actor.salary;
    if(isExist){
        return alert('I am already here')
    }else{

        selectActors.forEach(item=>{
            count = count + item.salary
        })
       const totalRemaining= 20000 - count;
       if (count > 20000){
        return alert('no money left')
       } else {
        setTotalSpend(count)
       setRemaining(totalRemaining)
       

  
        setSelectedActors([...selectActors, actor]);

       }
       
    }
      
      
       
    }
  
  


  return (
   <div className="flex justify-around mt-4">
    <img src="" alt="" />
   <div className="flex flex-wrap gap-4 w-2/3 ml-7">
    {
        AllActors.map(actor=>(
 
        <div className="text-2xl font-semibold">
        <div>
        <div className="card w-96 bg-base-100 shadow-xl">
         <img src="" alt="" />
          <div className="">
           <div className="text-center my-4">
             
            <img className="w-52 h-48" src={actor.image} alt="" />
           <h2 className="my-2">Name: {actor.name}</h2>
            <p>Country: {actor.country}</p>
           </div>
            <div className="flex justify-around my-2">
              <div className="">Salary: {actor.salary}</div>
              <div className="">Role: {actor.role}</div>
            </div>
            <div className="flex justify-center">
            <button onClick={()=>handleSelectActor(actor)} className="bg-red-500 text-white rounded-xl p-1 mb-1 mt-2">Selected</button></div>
          </div>
        </div>
      </div>
    </div>
 
        ))
    }
    </div>
     <Cart selectActors={selectActors} remaining={remaining} totalSpend={totalSpend} ></Cart>

    </div>
    
  );
};

export default Home;
