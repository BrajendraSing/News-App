import "./App.css";
import Header from './components/Header';
import Content from './components/Content';
import { useState } from "react";


function App() {
  const [category, setCategory] = useState('tesla');
  function handleCategory(value){
    setCategory(value);
  }
  return (
    <>
      <Header handleCategory={handleCategory} / >
      <Content category={category} />
    </>
  );
}

export default App;
