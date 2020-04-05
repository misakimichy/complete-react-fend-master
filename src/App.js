import React from 'react'
import { render } from 'react-dom'
import Pet from './Pet'

const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <Pet name='Coop' animal="Cat" breed="British Shorthair" />
      <Pet name='Tots' animal="Cat" breed="British Shorthair" />
      <Pet name='Cosmo' animal="Dog" breed="Corgi" />
    </div>
  );
};

render(React.createElement(App), document.getElementById("root"));