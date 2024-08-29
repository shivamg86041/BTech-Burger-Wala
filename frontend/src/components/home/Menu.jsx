import React from "react";
import MenuCard from "./MenuCard";
import burgerData from "../../data/burgerData";

const Menu = () => {

  const addToCartHandler = (itemNum) => {
    // Implement addToCartHandler logic here
  };

  return (
    <section id="menu">
      <h1>MENU</h1>
      <div>
        {burgerData.slice(0, 6).map((data, index) => (
          <MenuCard
            key={index}
            itemNum={data.id + 1}
            title={data.name}
            price={data.price}
            handler={addToCartHandler}
            burgerSrc={data.image}
            delay={data.delay}
          />
        ))}
      </div>
    </section>
  );
};

export default Menu;
