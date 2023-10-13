import "./OneMovieSlider.css"
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import data from "../data"
import { useState,useEffect } from "react";

const OneMovieSlider=()=>{
    const [index,setindex]=useState(0)

    return <section className="all-movies">
        <div className="all-movies-content">
            {data.map((onemovie)=>{
                const {id,image,title,age,tags,description}=onemovie
                return <article key={id}>
                    <img src={image} alt="" />
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <p>{tags}</p>
                    <p>{age}</p>
                </article>
            })}
        </div>
        <button><FaArrowAltCircleLeft /></button>
        <button><FaArrowAltCircleRight /></button>
    </section>
}
export default OneMovieSlider