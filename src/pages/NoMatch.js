import React, { Component } from 'react';

class NoMatch extends Component {
    render() {
        return (
            <div>
            <h1>404 Error. No Matching Page</h1>
            </div>
        );
    }
}

export default NoMatch;

const styles = {
    bgImg:{
        width:"100%",
        height:"100%",
        position:"absolute",
        top:0
    }
}