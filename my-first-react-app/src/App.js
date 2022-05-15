import logo from './logo.svg';
import './App.css';

import React from "react";

// class App extends React.Component {
//   constructor() {
//     super();
//   }

//   render() {
//     return <Header></Header>
//   }
// }

// class Header extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       text: "Hello world",
//     };
//   }

//   render() {
//     return (
//       <div>
//       <h1>{this.state.text}</h1>
//       <h1>{this.state.text}</h1>
//       </div>
//     );
//   }
// }

// export default App;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        AppleSeeds React App
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click Me
        </a>
      </header>
    </div>
  );
}

export default App;
