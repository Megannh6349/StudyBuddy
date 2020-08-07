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

export default App;
