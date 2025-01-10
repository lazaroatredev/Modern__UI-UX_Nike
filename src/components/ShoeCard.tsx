import { ShoeCardProps } from "../Types/types";
import React from "react";

const ShoeCard = ({ imgUrl, changeBigShoeImage, bigShoeImage } : ShoeCardProps) : React.JSX.Element =>  {

    const handleClick = () => {
        if(bigShoeImage !== imgUrl.bigShoe){
            changeBigShoeImage(imgUrl.bigShoe)
        }
    }

  return (

    <div 
        className={`${bigShoeImage === imgUrl.bigShoe ? 'border-coral-red border-2 rounded-xl' : 'border-transparent'} cursor-pointer max-sm:flex-1`}
        onClick={handleClick}
    >
        <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
            <img src={imgUrl.thumbnail} alt="shoe collection" width={127} height={103} className="object-contain"/>
        </div>
    </div>
)
};

export default ShoeCard;
