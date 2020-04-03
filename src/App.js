import React from 'react'
import ReactDOM from 'react-dom'
import Pet from './Pet'

const App = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet, {
            name: "Coop",
            animal: "Cat",
            breed: "British Shorthair"
        }),
        React.createElement(Pet, {
            name: "Cosmo",
            animal: "BirDogd",
            breed: "Corgi"
        }),
    React.createElement(Pet, {
            name: "Mocha",
            animal: "Cat",
            breed: "British Shorthair"
    })
    ]);
  };
  ReactDOM.render(React.createElement(App), document.getElementById("root"));