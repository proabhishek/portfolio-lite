import React from "react"; 
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Section from "./Components/Section";

import sectionData from "./data/sectionData";



const App = () => {

    let a = 100 
    let b = 50

    return (
        <div>
            <Navbar />
            <About />

           {
            sectionData.map((item,index)=>(
                
                   <Section key={index}
                     title={item.title}
                     description={item.description}
                   />
                
            ))
           }


           {/* {a>b?
           (<h1> Greater Number is {a}</h1>) : 
           (<h1>Greater Number is {b}</h1>)} */}
           
            
        </div>
    )
}

export default App;


// loops => higher order functions => map, filter, reduce
// if else => ternary operator


// {
//     for(let t of sectionData){
//         <Section 
//            title = {t.title} 
//         description = {t.description}
//         />
//     }
//    }