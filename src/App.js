import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Todo from './components/Todo';
import Todos from './components/Todos';

function App() {
  // let myVar = "Todos List"
  const myArr = [
    {
      sno:1,
      title:"hello",
      document: "word file"
    
     },
     {
       sno:2,
      title:"sakshi",
      document: "png file"
     },
     {
      sno:3,
     title:"nailwal",
     document: "jpg file"
    }
]
  return (
    <>
      {/* <Header title = {myVar}/>   (if myVar krke define krenge toh ye syntax aayga instead directly string mai dene se) */}
      <Header title="Todos List" search={false} />
      <Footer />
      <Todos array ={myArr}/>
      <Todo />

    </>
  );
}

export default App;
