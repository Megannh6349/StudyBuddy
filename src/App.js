<<<<<<< HEAD
import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './component/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="Andrew's Portfolio" scroll>
            <Navigation>
                <Link to="/landingpage">Home</Link>
                <Link to="/swipe">Swipe</Link>
                <Link to="/matches">Matches</Link>
                <Link to="/questions">Questions</Link>
            </Navigation>
        </Header>
        <Drawer title="Menu">
            <Navigation>
            <Link to="/landingpage">Home</Link>
                <Link to="/swipe">Swipe</Link>
                <Link to="/matches">Matches</Link>
                <Link to="/questions">Questions</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}
}
=======
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}
>>>>>>> master

export default App;
