import React, { useState } from "react";
import Home from "./components/Home";
import Reg from "./components/Reg";
import { BrowserRouter, Route, Routes, Link, useNavigate } from "react-router-dom";
import Order from "./components/Order";
import LogIn from "./components/LogIn";
import Ored from "./components/Ored";
import './index.css'

function App() {
  const [newOrder, setNewOrder] = React.useState([]);
  const [login, setLogin] = React.useState(false);
  const [users, setUsers] = React.useState([]);
  const [newOrdered, setNewOrdered] = useState([]);
  const [Ordered, setOrdered] = React.useState([]);
  const [name,setName]= useState('');
  const [password,setPassword]= useState('');
  const [val1, setVal1] = useState('')
  const [val2, setVal2] = useState('')
  const [val3, setVal3] = useState('admin')
  const [val4, setVal4] = useState('admin')
  const [val5, setVal5] = useState('')
  const [validName,setValidName] = useState(false);
  const [validPassword,setValidPassword] = useState(false);
  const [validMail,setValidMail] = useState(false);
 

  function checking(event){
    event.preventDefault();
    console.log(name)
    if (val3.length >=2){
        setValidName(true)
    } if(val5.length >=4){
        setValidMail(true)
    } if (val4.length >=8) {
        setValidPassword(true)
    } if(val3.length >=2 && val5.length >=4 && val4.length >=8){
        setValidPassword(true);setValidMail(true);setValidName(true);alert(`${name} Привет`);
    }else{
      alert('Ошибка')
    }}

    let nameColor = validName ===true ? "green":"red";
    let PasswordColor = validPassword ===true ? "green":"red";
    let mailColor = validMail ===true ? "green":"red";


    const off= () =>{
      setLogin(false);setValidPassword(false);setValidMail(false);setValidName(false)
  }



  return (
    <div className="App">
      <BrowserRouter>
        <Link className="link" to="/"><br/>
          Домой
        </Link>
        <Link className="link" to="/reg"><br/>
          Регистрация
        </Link>
        <Link className="link" to="/ord"><br/>
          Заказы
        </Link>
        <Link className="link" to="/ored"><br/>
          Оформленные заказы
        </Link>
        <div className="aaa"></div>
        <Routes>
          <Route
            element={
              <Home
                login={login}
                setNewOrder={setNewOrder}
                newOrder={newOrder}
              />
            }
            path="/"
          />
          <Route
            path="/reg"
            element={<Reg 
            checking={checking}
            users={users}
            setUsers={setUsers}
            name={name}
            password={password}
            val1={val1}
            val2={val2}
            setVal1={setVal1}
            setVal2={setVal2}
            val3={val3}
            val4={val4}
            setVal3={setVal3}
            setVal4={setVal4}
            setVal5={setVal5}
            nameColor={nameColor}
            mailColor={mailColor}
            PasswordColor={PasswordColor}
            off={off} />}
          />
          <Route
            path="ord"
            element={<Order Ordered={Ordered} setOrdered={setOrdered} newOrder={newOrder} setNewOrder={setNewOrder} off={off}/>}
          />
          <Route
            path="/log"
            element={<LogIn  
            val1={val1}
            val2={val2}
            setVal1={setVal1}
            setVal2={setVal2} 
            setLogin={setLogin}
            users={users}
            val3={val3}
            val4={val4}
            setVal3={setVal3}
            setVal4={setVal4}
            nameColor={nameColor}
            PasswordColor={PasswordColor}
            off={off}
            
              />}
          />
          <Route
            path="/ored"
            element={<Ored Ordered={Ordered} setOrdered={setOrdered} newOrder={newOrdered} setNewOrder={setNewOrder} off={off} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
