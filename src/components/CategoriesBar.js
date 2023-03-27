import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Check.css';

const CategoriesBar = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const history = useNavigate();

  const handleClick = (category) => {
    setSelectedCategory(category);
    history(`/dishes?category=${category}`);
  };

  return (
    <aside>
      <div className="cat-title">
        <h1 style={{color: "white"}}>CATEGORIES</h1>
      </div>

      <div className="all-categories">
        <a href="#" onClick={() => handleClick('starters')}>
          <h1>Starters</h1>
        </a>
        <a href="#" onClick={() => handleClick('biryanis')}>
          <h1>Biryani</h1>
        </a>
        <a href="#" onClick={() => handleClick('breads')}>
          <h1>Breads</h1>
        </a>
        <a href="#" onClick={() => handleClick('chinese')}>
          <h1>Chinese</h1>
        </a>
        <a href="#" onClick={() => handleClick('meals')}>
          <h1>Meals</h1>
        </a>
        <a href="#" onClick={() => handleClick('curries')}>
          <h1>Curries</h1>
        </a>
        <a href="#" onClick={() => handleClick('pizzas')}>
          <h1>Pizzas</h1>
        </a>
        <a href="#" onClick={() => handleClick('desserts')}>
          <h1>Desserts</h1>
        </a>
        <a href="#" onClick={() => handleClick('drinks')}>
          <h1>Drinks</h1>
        </a>
        <a href="#" onClick={() => handleClick('Todays Special')}>
          <h1>Today's Special</h1>
        </a>
      </div>
    </aside>
  );
};

export default CategoriesBar;
