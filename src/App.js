import './App.css';
import Emisoras from './componentes/emisoras/Emisoras';
import Cover from './componentes/cover/Cover'
import Home from './componentes/home/Home';
import Footer from './componentes/footer/Footer'
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/navbar/Navbar';
import Info from './componentes/info/Info';

function App() {
//   let date = new Date();
//   let dia = date.getDate() + '-' + (date.getMonth() +1);
//   let meses = ['1-01','1-02','1-03','1-04','1-05','1-06','1-07','1-08','1-09','1-10','1-11','1-12'];
//   let filtro = meses.filter(mes => mes === dia);
//  /*eslint eqeqeq: ["error", "smart"]*/
//   const dP = () =>{
//     if(filtro === dia){
//       return <Divina />
//     }
//   }


  
  
    
  return (
    <div className="App">
   <Cover />
 
  

    <BrowserRouter>
    <Navbar/>
    <Routes>
    
    <Route path='/' element={<Home/>} />
    <Route path='/emisoras' element={<Emisoras/>} />
    
    
    
    </Routes>
     <Info />
     <Footer/>
    </BrowserRouter>
   
    </div>
  );
}

export default App;
