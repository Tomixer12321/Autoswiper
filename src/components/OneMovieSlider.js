import "./OneMovieSlider.css"
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import data from "../data"
import { useState,useEffect } from "react";

const OneMovieSlider=()=>{
    const [index,setindex]=useState(0)

    useEffect(()=>{
        if(index<0){
            setindex(data.length-1)
        }else if(index>data.length-1){
            setindex(0)
        }
    },[index])
    useEffect(()=>{
        let setintervalid=setInterval(()=>{
            setindex(index+1)
        },3000)
        return()=>clearInterval(setintervalid)
    },[index])

    return <section className="all-movies">
        <div className="all-movies-content">
            {data.map((onemovie,onemovieindex)=>{
                const {id,image,title,age,tags,description}=onemovie
                let mainclass="next-slide"
                if(onemovieindex===index){
                    mainclass="active-slide"
                }
                if(onemovieindex===index-1||(index===0&&onemovieindex===data.length-1)){
                    mainclass="last-slide"
                }
                return <article key={id} className={mainclass}>
                    <img src={image} alt="" />
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <p>{tags}</p>
                    <p>{age}</p>
                </article>
            })}
        </div>
        <button onClick={()=>setindex(index-1)}><FaArrowAltCircleLeft /></button>
        <button onClick={()=>setindex(index+1)}><FaArrowAltCircleRight /></button>
    </section>
}
export default OneMovieSlider