//! 2. Pass dynamic data (such as product name, price, and imageURL) to the ProductCard component using props.

import Card from "./component/Card"
import './card.css'



function App() {
  const products = [{
    id:1,
    name:"honey nut",
    price: 850,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, fuga quis! Veritatis tempore ut a."
  }
  ,
 {
    name:"honey nut pro",
    id:2,
    price: 1100,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, fuga quis! Veritatis tempore ut a."
  }
  ,
 {
    name:"honey nut max",
    id:3,
    price: 1500,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, fuga quis! Veritatis tempore ut a."
  }
  ,
  {
    name:"honey nut pro max",
    id:4,
    price: 3000,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, fuga quis! Veritatis tempore ut a."
  }
  ,
   {
    name:"honey nut ultra",
    id:5,
    price: 4500,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, fuga quis! Veritatis tempore ut a."
  }
  ,
 {
    name:"honey nut ultra pro max",
    id:6,
    price: 8500,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, fuga quis! Veritatis tempore ut a."
  }]



  return (
    <>
    <div className="parent">
    {products.map((product)=> <Card product={product} key={product.id}/>)}
    </div>                        
    </>
  )
}

export default App
