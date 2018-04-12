import React, { Component } from 'react';
import { BrowserRouter   as Router, Route, Switch } from "react-router-dom";
import store from './store'
import { connect } from "react-redux";

//Components
import Nav from '../src/components/Nav'

//pages
import About from '../src/pages/About'
import Pf1 from '../src/pages/Pf1/Pf1'
import Pf2 from '../src/pages/Pf2/Pf2'
// import Pf3 from '../src/pages/Pf3/Pf3'
import Contact from '../src/pages/Contact'


let mapStateToProps = (store) => {
  return {
      width:store.location.width,
      height:store.location.height,
  }
}

class App extends Component {

  componentWillMount() {
    this.updateDimensions()
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }


  updateDimensions() {
    let newWidth = window.innerWidth

    if (newWidth <= 1980) {
      store.dispatch({
        type:"STORE_WIDTH",
        payload:newWidth
      })
    }

    let newHeight = window.innerHeight
    if (newHeight <= 1080) {
      store.dispatch({
        type:"STORE_HEIGHT",
        payload:newHeight
      })
    }
  }


  render() {

    const styles = {
      container: {
        maxWidth: "1980px",
        display: "block",
        marginRight: "auto",
        marginLeft: "auto",
        position: "relative",
      }
    }

    const baseUrl = process.env.PUBLIC_URL;
      
    return (

      <Router>
        <div style={styles.container}>
          <Nav />
          <Switch>
            <Route exact path={baseUrl +"/"} component={About} />
            <Route exact path={baseUrl +"/pf1"} component={Pf1} />
            <Route exact path={baseUrl +"/pf2"} component={Pf2} />
            {/* <Route exact path="/pf3" component={Pf3} /> */}
            <Route exact path={baseUrl+"/contact"} component={Contact} />
            <Route component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default connect(mapStateToProps)(App);
