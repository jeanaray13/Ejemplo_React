import logo from './logo.svg';
import './App.css';
import React from 'react';
import PersonCard from './Component/PersonCard'
import Menu from './Component/Menu'

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
        nombre: '',
        foto: 'https://play-lh.googleusercontent.com/gXJLTDIvxXTK6uKl2e3Od_zmrlEul1CbkgxWxjbGeDzLl4EMFsdfER2VEgqAue2v1TE'
    }
    this.actualizaMenu = this.actualizaMenu.bind(this); //Permite que this sea accesible
  }
  //Configuración del estado
  actualizaMenu(actualizaNombre,actualizaFoto){
    this.setState({nombre: actualizaNombre, foto: actualizaFoto});
  }
  render(){
    const data = [
      {img: "https://estaticos.smoda.elpais.com/wp-content/uploads/2022/02/laurapausini1-1200x631.png", name:'Laura', city: 'Cuenca', country: 'Ecuador', address: 'García Moreno y Venezuela', edad:15},
      {img: "https://i.ytimg.com/vi/JoqmHAr3fu8/maxresdefault.jpg", name:'Elvis', city: 'Loja', country: 'Ecuador', address: 'Pichincha y Venezuela',edad:16},
      {img: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/EHPMKZIZOFC4RCIT3ZI7ENSNN4.png", name:'Luis', city: 'Guayaquil', country: 'Ecuador', address: 'Alonso de Angulo 23232',edad:17},
      {img: "https://pbs.twimg.com/profile_images/753703360784658432/reSy9oNv_400x400.jpg", name:'Génesis', city: 'Guayaquil', country: 'Ecuador', address: 'Alonso de Angulo 23232',edad:18},
      {img: "https://es.web.img3.acsta.net/pictures/20/11/27/06/28/4034475.jpg", name:'Joseph', city: 'Guayaquil', country: 'Ecuador', address: 'Alonso de Angulo 23232',edad:19}
    ];
    //Paso de proppiedades a los hijos
    return(
      <div className='App'>
        <Menu name={this.state.nombre} img={this.state.foto}/>
        {/*<PersonCard name={data[0].name} city={data[0].city} country={data[0].country} address={data[0].address}/>
        <PersonCard name={data[1].name} city={data[1].city} country={data[1].country} address={data[1].address}/>
    <PersonCard name={data[2].name} city={data[2].city} country={data[2].country} address={data[2].address}/>*/}
        {data.map((person,index) =>(
          <PersonCard key={index} img={person.img} name={person.name} city={person.city} country={person.country} address={person.address} edad={person.edad} actualizaMenu={this.actualizaMenu}>
            <button onClick={()=>alert(`Contactando a ${person.name}`)}>{`Contactar a ${person.name}`}</button>
          </PersonCard>
        )
        )}
      </div>
    );
  }
}

export default App;

//Clase
/*class App extends React.Component{
  render(){
    return(
      <div className="App">
        <h1>Aplicaciones Web y Móviles</h1>
        <p>Hello World!!!</p>
        <h2>Materias 2022-A</h2>
        <ul>
          <li>Aplicaciones Web y Móviles</li>
          <li>Redes e Intranets</li>
          <li>Aplicaciones Distribuidas</li>
        </ul>
      </div>
    );
  }
}*/

//Función
/*const App = () =>{
  return(
    <div className="App">
      <h1>Aplicaciones Web y Móviles</h1>
      <p>Hello World!!</p>
    </div>
  );
}*/

//Función por defecto
/*function App() {
  return (
    <div className="App">
      {
      /*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/
    /*}
      /*<h1>Aplicaciones Web y Móviles</h1>
      <p>Hello World!!!</p>
    </div>
  );
}*/
