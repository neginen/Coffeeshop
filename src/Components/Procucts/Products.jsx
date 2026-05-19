import React from 'react';
import Card from './Card';
import Rectangle4 from '../../assets/image/Rectangle 4.png';
import Rectangle3 from '../../assets/image/Rectangle 3.png';
import Rectangle2 from '../../assets/image/Rectangle 2.png';
import Rectangle5 from '../../assets/image/Rectangle 5.png';
import Coffeeblast2 from '../../assets/image/Coffee_blast 2.png'

export default function Products() {
  const images = {
    Rectangle4,
    Rectangle3,
    Rectangle2,
    Rectangle5,
  };

  const data = [
    { id: "1", name: "Cappuccino", price: "$8.50", description: "Coffee 50% | Milk 50%", img: "Rectangle4" },
    { id: "2", name: "Chai Latte", price: "$8.50", description: "Coffee 50% | Milk 50%", img: "Rectangle3" },
    { id: "3", name: "Macchiato", price: "$8.50", description: "Coffee 50% | Milk 50%", img: "Rectangle2" },
    { id: "4", name: "Expresso", price: "$8.50", description: "Coffee 50% | Milk 50%", img: "Rectangle5" },
  ];

  return (
    <>

      <div id='Menu' className="m-4 text-center">
        <h1 className="text-3xl md:text-5xl font-semibold text-[#603809]">
          Enjoy a new blend of coffee style
        </h1>
        <p className="text-[#707070] text-sm my-5">
          Explore all flavours of coffee with us. There is always a new cup worth experiencing
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-y-8 lg:grid-cols-4 justify-center">
        {data.map((item) => (
          <Card key={item.id} item={item} image={images[item.img]} />
        ))}
      </div>

    </>

  );
}
