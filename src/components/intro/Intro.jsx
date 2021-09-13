import React, { useEffect , useRef} from 'react';
import './intro.scss'
import { init } from 'ityped'

 export default function Intro(){
    const textRef = useRef();
    useEffect(()=>{
        init(textRef.current,{
            showCursor:false,
            backDelay:1500,
            strings:["Full Stack Web Developer."]
        });
    },[])



     return(<div className="intro" id ="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/pratik.png" alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hello, Myself</h2>
                    <h1>Pratik Hopal</h1>
                    <h3><span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt=""/>
                </a>
            </div>
     </div>)
 }