
import React from 'react';

const Card = ({item,image}) => {
    return (
        <div  className="relative size-64 gao-4 bg-[#FFF9F1] rounded-xl shadow-md   text-center mx-auto">
            <img
                src={image}
                alt="Cappuccino"
                className=" size-24 object-cover mx-auto m-4 "
            />
            <h2 className="text-xl font-semibold mt-2 text-[#603809]">{item.name}</h2>
            <p className="text-sm text-[#707070]">{item.description}</p> 
        </div>
    );
};

export default Card;
