import React, { Component } from 'react';
import App from './App';
import avatar from './../images/image01.jpg';
import './../stylesheets/index.scss';



class MediaList extends Component {
    render() {

        const parrafo = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, sit vero? Sit tempora sunt iure deserunt aperiam tempore aliquam nemo amet incidunt ipsam sequi voluptates veritatis, quam nobis, doloremque facere.";
        const leerMas = "Leer más...";
        const corazon = <i className="fas fa-heart color-heart"></i>;

        return (
            <div>
                <h1>LISTADO DE COMPONENTES</h1>
                <ul>
                    <li><App
                        name="Amparo Pérez"
                        date="24 de octubre de 2000"
                        avatar={avatar}
                        paragraph={parrafo}
                        more={leerMas}
                        likes="13"
                        heart={corazon}
                    /></li>

                    <li><App
                        name="Eva Rodríguez"
                        date="24 de febrero de 2009"
                        avatar={avatar}
                        paragraph={parrafo}
                        more={leerMas}
                        likes="06"
                        heart={corazon}
                    /></li>

                    <li><App
                        name="Garcita Morales"
                        date="07 de marzo de 1990"
                        avatar={avatar}
                        paragraph={parrafo}
                        more={leerMas}
                        likes="87"
                        heart={corazon}
                    /></li>

                </ul>
            </div>
        );
    }
}

export default MediaList;