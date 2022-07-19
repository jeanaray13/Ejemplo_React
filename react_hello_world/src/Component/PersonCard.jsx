import React from "react";
import "./PersonCard.css";

//Componente de clase
class PersonCard extends React.Component{
    aceptarHandler(e){
        //console.log(e)
        e.stopPropagation();
        console.log('Ejecutando componente hijo');
    }

    containerHandler(){
        console.log('Ejecutando componente padre');
    }

    constructor(props) {
        super(props);
        this.state = {
            edad: props.edad
        }
        this.aumentaEdad = this.aumentaEdad.bind(this); //Permite que this sea accesible
        this.seleccionarUsuario = this.seleccionarUsuario.bind(this); //Permite que this sea accesible
    }
    //Configuración del estado
    aumentaEdad(){
        this.setState({edad: this.state.edad+1});
    }

    //Seleccionar usuario
    seleccionarUsuario(){
        this.props.actualizaMenu(this.props.name, this.props.img);
    }
    
    render(){
        console.log("Props de PersonCard", this.props);
        const {name,city,country,address,img} = this.props; //Desestructuración (Propiedad de un componente)
        
        return(
            <div onClick={this.containerHandler} className="container">
                {/*<h1>{this.props.name}</h1>
                <h3>{this.props.city}</h3>
                <h3>{this.props.country}</h3>
                <h5>{this.props.address}</h5>
                <hr/>*/}
                {/*Acceso a las proppiedades*/}
                {/*<img src={img} alt={name} class="img"/>
                <h1>{name}</h1>*/}

                <img src={img} alt={name} class="img"/>
                <h1>{name}</h1>
                <h3>{city}</h3>
                <h3>{country}</h3>
                <h5>{address}</h5>
                <h5>{this.state.edad}</h5>
                <button onClick={this.aceptarHandler}>Aceptar</button>
                <button onClick={this.aumentaEdad}>Aumentar edad</button>
                <button onClick={this.seleccionarUsuario}>Seleccionar</button>
                {/*Pasa los elementos directamente al resultado del padre al hijo*/}
                {this.props.children}
                <hr/>
            </div>
        );
    }
}

export default PersonCard;