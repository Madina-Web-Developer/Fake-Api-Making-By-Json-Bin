import React, { useEffect, useState } from 'react'
import './Singlecard.css'
const Singlecard = () => {

    const [data , setData] = useState([])
  

    useEffect(()=>{

        fetch('https://api.jsonbin.io/v3/b/67462843e41b4d34e45b29ef')
     .then((response) => response.json())
     .then((json) => setData(json.record));
    
    },[])


  return (
    
    <>
     <h3>Explore All Over The World with Us</h3>

    <div className="main_sing">

        {
            data.map((item)=>(

        <div className="single_card">

            <div className="img_div">
                <img src={item.image} alt="img" />
            </div>

            <div className="place">
                <div className="text">

                    <h1>{item.Placename}</h1>
                    <div className="co">
                    <h1 className='C'>{item.Country}</h1>
                    </div>
                    <p className='text'>Traveling offers a multitude of benefits,ncluding broadening your perspective including broadening your perspective</p>

                    <h1 className='cost'>Cost : <span>{item.Cost}</span> </h1> 

                    <div className="bu">
                        
                     <p className='d'>{item.Discount}</p>
                        
                    </div>    

                </div>
            </div>
        </div>

            ))
        }

    </div>
        

   
    
    
    
    </>
  )
}

export default Singlecard
