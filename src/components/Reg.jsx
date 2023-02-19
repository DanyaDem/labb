import React from "react"
import { Link } from "react-router-dom";
function Reg( props ){



    return(
        <div>
                    <Link className="link" to="/log"><br/>
          Вход
        </Link>
            <h1 className="h1">Регистрация</h1>
            <form onSubmit={props.checking}>
                <input type="text" className='inp'placeholder='Name' onChange={event => props.setVal3(event.target.value)} style={{borderColor: props.nameColor}} /><br/>
                <input type="text" className='inp' placeholder='Password'  onChange={event => props.setVal4(event.target.value)}style={{borderColor: props.PasswordColor}}/><br/>
                <input type="text" className='inp' placeholder='Mail' onChange={event => props.setVal5(event.target.value)}style={{borderColor: props.mailColor}}/><br/>
                <input type="submit" value="Регистрация" className='btn' />
            </form>
        </div>
    )
}

export default Reg