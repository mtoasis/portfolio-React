import React, { Component } from 'react';
import { connect } from "react-redux";

let mapStateToProps = (store) => {
    return {
        width: store.location.width,
        height: store.location.height
    }
}

let width = this.props.width

const styles = {
    skillDiv: {
        width: "100%",
        height: "215px",
        position: "relative",
        display: "block",
        zIndex: 1,
        fontFamily: "'Lato', 'sans-serif'",
    },
    bgImg: {
        maxWidth: "100%",
        display: "block",
        marginRight: "auto",
        marginLeft: "auto"
    },
    imgDiv: {
        maxWidth: "100%",
        maxHeight: "743px",
        minHeight: 0.2*width,
        display: "block",
        marginBottom: 0.045*width,
        backgroundColor: "white",
        alignSelf: "center"
    },
    logo: {
        marginRight: "20px",
        maxWidth: "70px"
    },
    frontEnd: {
        position: "absolute",
        left: "13%",
        width: "25%",
        height: "100%",
        minWidth: "255px"
    },
    backEnd: {
        position: "absolute",
        right: "13%",
        width: "25%",
        height: "100%",
        minWidth: "255px"
    },
    titleDiv: {
        width: "90%",
        height: "30%",
        position: "relative",
        display: "block",
        marginBottom:0.02*width
    },
    titleText: {
        fontSize: "30px",
        color: "#005A93",
        fontWeight: "bold",
        position: "absolute",
        marginTop:"10px"
    },
    skillTextDiv: {
        position: "relative",
    },
    skillText: {
        fontSize: "20px",
        color: "#575757",
    },

}

export default connect(mapStateToProps)(styles)