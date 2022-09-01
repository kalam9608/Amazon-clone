import React from 'react'
import "./home.css"
import Product from './Product'
import data from './amazoneApi'

const Home = () => {
const obj=data;

  return (
   <div className="home">
    <img className='home_image' src="https://m.media-amazon.com/images/I/41FBwjCnS2L._SX1500_.jpg" alt="" />
   



    <div className="home_row1">
      {/* {obj.map((obj)=>{
        return <Product obj={obj}/>
      })} */}



    <Product obj={obj[0]}/>
    <Product obj={obj[2]}/> 
    <Product obj={obj[1]}/> 
   
    </div>


    
    <div className="home_row2">
    <Product obj={obj[3]}/>
    <Product obj={obj[4]}/>

    </div>

    <div className="home_row3">
    <Product obj={obj[5]}/>
    <Product obj={obj[6]}/>
    <Product obj={obj[7]}/>
    <Product obj={obj[16]}/>
   
    </div>
    <div className="home_row4">
    <Product obj={obj[16]}/>
    </div>

    <div className="home_row5">
    <Product obj={obj[11]}/>
    <Product obj={obj[9]}/>
    <Product obj={obj[8]}/>
    <Product obj={obj[10]}/>

    </div>

    <div className="home_row6">
    <Product obj={obj[17]}/>

     {obj.map((obj)=>{
        return <Product obj={obj}/>
      })}

    </div>

   
   </div>
  ) 
}

export default Home