
import React, { useState } from "react";
import './works.scss'
 export default function Works(){
    const [currentSlide,setCurrentSlide]=useState(0);

    const data =[
        {
            id:"1",
            icon:"",
            title:"Ecommerce Website",
            desc:"Ecommerce Website built using Django, Javascript, HTML and CSS",
            img:"assets/ecom.png",
            url:"https://github.com/pratikhopal/Django-Ecom-site"
        },
        {
            id:"2",
            icon:"",
            title:"Personal Portfolio Using React",
            desc:"Personal portfolio site made using Reactjs. We are currently on the same.",
            url:"",
            img:"assets/reactport.png"
        },
        {
            id:"3",
            icon:"",
            title:"Instagram Clone",
            desc:"An instagram clone built using react and django during my certification course.",
            img:"assets/instaclone.jpg",
            url:""
        },
        {
            id:"4",
            icon:"",
            title:"Netflix Clone",
            desc:"An instagram clone built using react and django during my certification course.",
            url:"",
            img:"assets/netflixclone.jpg"
        },
        {
            id:"5",
            icon:"",
            title:"TodoList",
            desc:"A Todolist built using React.",
            url:"",
            img:"assets/todolist.png"
        },
        {
            id:"6",
            icon:"",
            title:"Bookstore",
            desc:"A Django Practice project built using django and python.",
            url:"https://github.com/pratikhopal/Django-Bookstore",
            img:"assets/bookstore.png"
        },
    ]

    const handleClick=(way)=>{
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 :2 ):
        setCurrentSlide(currentSlide < data.length -1 ? currentSlide + 1:0); 
    }



     return(<div className="works" id="works">
        
        <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>

            {data.map(d=>(
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt=""/>
                                </div>
                                <h2>{d.title}</h2>
                                <p>
                                {d.desc}
                                </p>
                                <a href={d.url}>Source Code</a>
                            </div>
                        </div>
                        <div className="right">
                            <img src={d.img} alt=""/>
                        </div>
                    </div>
                    
                </div>))
                }
        </div>  
        <img src="assets/arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")}/>
        <img src="assets/arrow.png" className="arrow right" alt="" onClick={()=>handleClick()}/>     
    </div>
     );
 }