import React, { useEffect, useState } from "react";
import getProducts from "./actions/getProducts";
import getUser from "./actions/getUser"
import Cards from "./components/cards"
import "./styles.css"

function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    getUser().then(e => setUsers(e));
  },[]);

  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts().then(e => setProducts(e));
  },[]);


  return (
    <div className="App">
      
      {console.log(users)}
      {<div className="container">
        {products.map((data, id) => {
          return <Cards key={id} {...data} />
        })}
        </div>}


    </div>
  );
}

export default App;
