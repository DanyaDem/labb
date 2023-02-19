import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  const [doggie, setDoggie] = React.useState([]);


  const gettingCock = async () => {
    const api_url = await fetch(
      "https://petstore.swagger.io/v2/pet/findByStatus?status=sold"
    );
    const data = await api_url.json();
    setDoggie(data);
  };
console.log(doggie)
  const result = doggie.map((doggie) => {
    return (
     <div>
      <div className="drink">
        <p>{doggie.id}</p>
        <p>{doggie.status}</p>
        <p>{doggie.name}</p>
 

        {props.login === true ? <button className="btn" onClick={() => Add(doggie.idDoggie)}>Добавить в заказ</button> : 'Войдите, для оформления  заказа'}
        </div>
      </div>
    );
  });

  function Add(id){
    doggie.map(doggie => {
      if(doggie.idDoggie == id) {
        props.setNewOrder([...props.newOrder, doggie])
      }
    })
  }

  React.useEffect(() => {
    gettingCock();
  }, []);

  return(
    <div>
      
     {props.login === true  ? <button onClick={props.off}>Выйти из аккаунта</button>:<Link className="link" to="/log"><br/>
          Вход
        </Link>}
    <div className="result">
      
      {result}
    </div>
    </div>
  ) 
}
export default Home;
