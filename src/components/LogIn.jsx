import React from "react";
import { Link, useNavigate } from "react-router-dom";

function LogIn({ setLogin, props, val1, val2, setVal1, setVal2, val3,val4}){



    const navigate = useNavigate();

    function checking(){
        
        if(val1 === 'admin' && val2 === 'admin' || val1 == val3 && val2 == val4){
            setLogin(true) 
            alert ('Вы упешно вошли')
            navigate("/");props.setValidPassword(true);props.setValidMail(true);props.setValidName(true)
        }else{
            alert('Неверный логин или пароль')
        }
    }


    return(
        <div>
            <h1 className="h1">Вход</h1>
            <input className="inp" type="text" onChange={(event) => setVal1(event.target.value)} placeholder='Логин' />
            <input className="inp" type="password" onChange={(event) => setVal2(event.target.value)} placeholder='Пароль' />
            <button className="btn" onClick={() => checking()}>Войти</button>
        </div>
    )
}

export default LogIn