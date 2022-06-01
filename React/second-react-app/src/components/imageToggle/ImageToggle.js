import React, {useEffect, useRef, useState} from "react";
import image1Normal from "./tim-marshall-yEOCA6oiVqg-unsplash.jpg";
import image2Normal from "./joe-cooke-MPFiYu__1bA-unsplash.jpg";
import image1BW from "./tim-marshall-yEOCA6oiVqg-unsplash B&W.jpg";
import image2BW from "./joe-cooke-MPFiYu__1bA-unsplash B&W.jpg";

export const ImageToggle = () => {

    const [images, setImages] = useState({image1: image1Normal, image2: image2Normal});

    const image1Ref = useRef();
    const image2Ref = useRef();

    useEffect(()=> {
        image1Ref.current.addEventListener("mouseover", ()=>{setImages({image1: image1BW, image2: image2Normal})})
        image1Ref.current.addEventListener("mouseout", ()=>{setImages({image1: image1Normal, image2: image2Normal})})
        image2Ref.current.addEventListener("mouseover", ()=>{setImages({image1: image1Normal, image2: image2BW})})
        image2Ref.current.addEventListener("mouseout", ()=>{setImages({image1: image1Normal, image2: image2Normal})})
    },[])

    return (
        <div>
            <img ref={image1Ref} width="300" height="300" src={images.image1} />
            <img ref={image2Ref} width="300" height="300" src={images.image2} />
        </div> 
    )
}