import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import '../css/Check.css';
import CategoriesBar from "./CategoriesBar";
import dishImage from "../img/starters/panner tikka.jpg";
import Footer from "./Footer";
import { useLocation } from 'react-router-dom';


function Dishes() {
  const location = useLocation();
  const category = new URLSearchParams(location.search).get('category');

 var dish_header = "Dishes";
 if(category != undefined){
    dish_header = category
 }

const dishImages = [
"../img/starters/panner tikka.jpg",
"../img/starters/bread cutlet.jpg",
"../img/starters/chicken lollipop.jpg",
"../img/starters/chicken tikka.jpg",
"../img/starters/Chicken_65_Dish.jpg",
"../img/starters/chilli garlic pops.jpg",
"../img/starters/crispy corn.jpg",
"../img/starters/potatonuggets.jpg",
"../img/Breads/aaluParatha.jpg",
"../img/Breads/butterNaan.jpg",
"../img/Breads/chapathi.jpg",
"../img/Breads/paratha.jpg",
"../img/Breads/rumaliRoti.jpg",
"../img/Breads/tandooriRoti.jpg",
"../img/Biryani/Chicken Biryani.jpg",
"../img/Biryani/egg biryani.jpg",
"../img/Biryani/mutton biryani.jpg",
"../img/Biryani/prawns biryani.jpg",
"../img/Chinese/chicken manchurian.jpg",
"../img/Chinese/chicken noodles.jpg",
"../img/Chinese/chicken soup.jpg",
"../img/Chinese/chow mein.jpg",
"../img/Chinese/fried rice.jpg",
"../img/Curries/chicken curry.jpg",
"../img/Curries/chicken fry.jpg",
"../img/Curries/chicken masala.jpg",
"../img/Curries/chicken stew.jpg",
"../img/Curries/goat curry.jpg",
"../img/Curries/prawns curry.jpg",
"../img/Desserts/gulab jamun.jpg",
"../img/Desserts/ice cream.jpg",
"../img/Desserts/pudding.jpg",
"../img/Desserts/rasmalai.jpg",
"../img/Desserts/rice kheer.jpg",
"../img/Meals/chicken biryani meal.jpg",
"../img/Meals/chicken curry meal.jpg",
"../img/Meals/mutton curry meal.jpg",
"../img/Meals/prawns curry meal.jpg",
"../img/Pizzas/chicken pizza.jpg",
"../img/Pizzas/mushroom pizza.jpg",
"../img/Pizzas/pepperoni pizza.jpg",
"../img/Pizzas/vegetable pizza.jpg",
];
// const dishObjects = dishImages.map((dishImage) => {
//   const dishName = dishImage.split("/").pop().split(".")[0];
//   const dishPrice = Math.floor(Math.random() * 20 + 10) * 10; // generates a random number between 100 and 300, multiple of 10
//   return { name: dishName, imageSrc: dishImage, price: dishPrice };
// });

const starters = [
  { name: 'Panner Tikka', path: '../img/starters/panner tikka.jpg', price: 200 },
  { name: 'Bread Cutlet', path: '../img/starters/bread cutlet.jpg', price: 150 },
  { name: 'Chicken Lollipop', path: '../img/starters/chicken lollipop.jpg', price: 180 },
  { name: 'Chicken Tikka', path: '../img/starters/chicken tikka.jpg', price: 220 },
  { name: 'Chicken 65', path: '../img/starters/Chicken_65_Dish.jpg', price: 170 },
  { name: 'Chilli Garlic Pops', path: '../img/starters/chilli garlic pops.jpg', price: 190 },
  { name: 'Crispy Corn', path: '../img/starters/crispy corn.jpg', price: 200 },
  { name: 'Potato Nuggets', path: '../img/starters/potatonuggets.jpg', price: 150 },
];

const breads = [
  { name: 'Aalu Paratha', path: '../img/Breads/aaluParatha.jpg', price: 120 },
  { name: 'Butter Naan', path: '../img/Breads/butterNaan.jpg', price: 100 },
  { name: 'Chapathi', path: '../img/Breads/chapathi.jpg', price: 80 },
  { name: 'Paratha', path: '../img/Breads/paratha.jpg', price: 110 },
  { name: 'Rumali Roti', path: '../img/Breads/rumaliRoti.jpg', price: 90 },
  { name: 'Tandoori Roti', path: '../img/Breads/tandooriButterRoti.jpg', price: 100 },
];

const biryanis = [
  { name: 'Chicken Biryani', path: '../img/Biryani/Chicken Biryani.jpg', price: 250 },
  { name: 'Fish Biryani', path: '../img/Biryani/fishBiryani.jpg', price: 180 },
  { name: 'Mutton Biryani', path: '../img/Biryani/muttonBiryani.jpg', price: 280 },
  { name: 'Prawns Biryani', path: '../img/Biryani/prawnBiryani.jpg', price: 300 },
];

const chinese = [
  { name: 'Chicken Manchurian', path: '../img/Chinese/chicken manchurian.jpg', price: 200 },
  { name: 'Veg Noodles', path: '../img/Chinese/Noodels.jpg', price: 180 },
  { name: 'Tofu fried rice', path: '../img/Chinese/tofu cauliflower fried rice.jpg', price: 150 },
  { name: 'Chow Mein', path: '../img/Chinese/chowmein.jpg', price: 170 },
  { name: 'Fried Rice', path: '../img/Chinese/Chicken-Fried-Rice-min.jpg', price: 160 },
];

const curries = [
  { name: 'Chenna Masala', path: '../img/Curries/chennaMasala.jpg', price: 220 },
  { name: 'Paneer Butter', path: '../img/Curries/paneerButter.jpg', price: 200 },
  { name: 'Chicken Masala', path: '../img/Curries/chickenTikkaMasala.jpg', price: 240 },
  // { name: 'Kaju Masala', path: '../img/Curries/kajuMasala.jpg', price: 230 },
  { name: 'Mushroom Masala', path: '../img/Curries/mushroomMasala.jpg', price: 270 },
  { name: 'Prawns Curry', path: '../img/Curries/prawnsMasala.jpg', price: 250 },
  ];
  
  const desserts = [
  { name: 'Bread Halwa', path: '../img/Desserts/breadHalwa.jpg', price: 120 },
  { name: 'Choco Burst', path: '../img/Desserts/chocoBurst.png', price: 100 },
  { name: 'MilkCake', path: '../img/Desserts/milkCake.jpg', price: 90 },
  { name: 'Rasmalai', path: '../img/Desserts/rasaMalai.jpg', price: 130 },
  { name: 'Tiramisu', path: '../img/Desserts/tiramisu.jpg', price: 110 },
  ];
  
  const meals = [
  { name: 'Carrot Rice Meal', path: '../img/Meals/carrot rice.jpg', price: 300 },
  { name: 'Coriander-Rice Meal', path: '../img/Meals/Coriander-Rice.jpg', price: 280 },
  { name: 'Mutton Curry Meal', path: '../img/Meals/non veg meals.jpg', price: 320 },
  { name: 'Toamto Rice Meal', path: '../img/Meals/toamto rice.jpg', price: 310 },
  ];
  
  const pizzas = [
  { name: 'Chicken Pizza', path: '../img/Pizzas/HotAndSpicyChicken pizza.png', price: 280 },
  { name: 'Mushroom Pizza', path: '../img/Pizzas/mushroom pizza.jpg', price: 250 },
  { name: 'Butter Panner Pizza', path: '../img/Pizzas/butter panner pizza.jpg', price: 300 },
  { name: 'Vegetable Pizza', path: '../img/Pizzas/veg chesse pizza.jpg', price: 270 },
  ];

  const drinks = [
    { name: 'Apple Juice', path: '../img/Drinks/Apple Juice.jpg', price: 280 },
    { name: 'Blueberry', path: '../img/Drinks/blueberry.jpg', price: 250 },
    { name: 'Cardinal Punch', path: '../img/Drinks/cardinal punch.jpg', price: 300 },
    { name: 'Cranberry Orange', path: '../img/Drinks/cranberry orange.jpg', price: 270 },
    { name: 'Hurricane', path: '../img/Drinks/hurricane.jpg', price: 570 },
    
    ];
  

let dishObjects = [...starters, ...breads, ...biryanis, ...chinese, ...curries, ...desserts, ...meals, ...pizzas];
  
  if (category === "starters") {
    dishObjects = starters;
  } else if (category === "breads") {
    dishObjects = breads;
  } else if (category === "biryanis") {
    dishObjects = biryanis;
  } else if (category === "chinese") {
    dishObjects = chinese;
  } else if (category === "curries") {
    dishObjects = curries;
  } else if (category === "desserts") {
    dishObjects = desserts;
  } else if (category === "meals") {
    dishObjects = meals;
  } else if (category === "pizzas") {
    dishObjects = pizzas;
  } else if (category === "drinks") {
    dishObjects = drinks;
  }

return (
    <>
<Header/>
<div class="container">
<NavBar />
<div class="home-page">

<CategoriesBar/>

<main>
    <div class="menu-title">

                <h1 style={{color: "white"}}>{dish_header} Available</h1>
    </div>
          <br />
          <div className="menu-container">
  {dishObjects.map((dish, index) => (
    <div className="menu-posta" key={index}>
      <div class="posts-menu-all">
        <img src={dish.path} alt="dish" />
      </div>
      <div class="title-menu">
        
        <h3>{dish.name}</h3>
      </div>
      <h3>RS. {dish.price}</h3>
      <button>Add Item</button>
    </div>
  ))}
</div>
</main>

</div>

<Footer/>
</div>
</>
);
}

export default Dishes;









