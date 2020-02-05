import React, { useState } from 'react';
import Search from './components/Search';
import ProductCard from './components/ProductCard';
import './App.css';
import {fetchSearchResults} from './api/search';

function App() {
  const [productState, setProductState] = useState({
    products:[]
  });
  const makeSearchCall = (query) => {
    fetchSearchResults(query).then((results) => {
      console.log(results);
      setProductState({products: results})
    },
    (error)=>{

    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <img
          className="App-logo"
          src="https://www.tiqets.com/static/assets/webpack/logo/logo-white-medium.0c98d94780.png"
          alt="Tiqets.com"
        />
      </header>
      <main className="App-main">
        <Search searchProduct={(query)=>makeSearchCall(query)}/>
        <ProductCard products={productState.products}/>
      </main>
    </div>
  );
}

export default App;
