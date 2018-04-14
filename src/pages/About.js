import React, { Component } from 'react';
import mainBG from '../components/image/about/mainBG.png'
import react from '../components/image/about/react.png'
import backend from '../components/image/about/backend.png'
import mobileBG from '../components/image/about/mobileBG.png'
import store from '../store'
import { connect } from "react-redux";



let mapStateToProps = (store) => {
    return {
        width: store.location.width,
        height: store.location.height
    }
}


class About extends Component {

    componentWillMount() {
        this.getPath()
    }

    getPath() {
        store.dispatch({
            type: "STORE_PATH",
            payload: "about"
        })
    }

    render() {

        let width = this.props.width

        const stylesMobile = {
            bgImg: {
                maxWidth: "104%",
                display: "block",
                marginRight: "auto",
                marginLeft: "-10px",                
            },
            imgDiv: {
                maxWidth: "100%",
                maxHeight: "743px",
                minHeight: 0.2 * width,
                display: "block",
                marginBottom: "50px",
                backgroundColor: "white",
                alignSelf: "center",
            },
            logo: {
                marginRight: "20px",
                maxWidth: "40px"
            },
            frontEnd: {
                position: "relative",
                left: "10%",
                width: "80%",
                height: "100%",
                marginBottom: "50px",
            },
            backEnd: {
                position: "relative",
                left: "10%",
                width: "80%",
                height: "100%",
            },
            titleDiv: {
                width: "90%",
                height: "30%",
                position: "relative",
                display: "block",
                marginBottom: 0.02 * width
            },
            titleText: {
                fontSize: "20px",
                color: "#005A93",
                fontWeight: "bold",
                position: "absolute",
            },
            skillDiv: {
                width: "100%",
                height: "215px",
                position: "relative",
                display: "block",
                zIndex: 1,
                fontFamily: "'Lato', 'sans-serif'",
            },
            skillTextDiv: {
                position: "relative",
            },
            skillText: {
                fontSize: "15px",
                color: "#575757",
            },

        }



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
                minHeight: 0.2 * width,
                display: "block",
                marginBottom: 0.045 * width,
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
                marginBottom: 0.02 * width
            },
            titleText: {
                fontSize: "30px",
                color: "#005A93",
                fontWeight: "bold",
                position: "absolute",
                marginTop: "10px"
            },
            skillTextDiv: {
                position: "relative",
            },
            skillText: {
                fontSize: "20px",
                color: "#575757",
            },

        }

        return (
            <div>
                <div style={width < 480 ? stylesMobile.imgDiv : styles.imgDiv}>
                    <img src={width < 480 ? mobileBG : mainBG} alt="bgImg" style={width < 480 ? stylesMobile.bgImg : styles.bgImg} />

                </div>
                <div style={width < 480 ? stylesMobile.skilLDiv : styles.skillDiv}>

                    <div style={width < 480 ? stylesMobile.frontEnd : styles.frontEnd}>
                        <div style={width < 480 ? stylesMobile.titleDiv : styles.titleDiv}>

                            <img alt="front end" src={react} style={width < 480 ? stylesMobile.logo : styles.logo} />
                            <span style={width < 480 ? stylesMobile.titleText : styles.titleText}>
                                Front End
                        </span>
                        </div>
                        <div style={width < 480 ? stylesMobile.skillTextDiv : styles.skillTextDiv}>
                            <span style={width < 480 ? stylesMobile.skillText : styles.skillText}>
                                Expert in React Native/ React.js.
                                Fluent in Jquery, HTML, and CSS frameworks.
                        </span>
                        </div>

                    </div>

                    <div style={width < 480 ? stylesMobile.backEnd : styles.backEnd}>
                        <div style={width < 480 ? stylesMobile.titleDiv : styles.titleDiv}>
                            <img alt="backendLogo" src={backend} style={width < 480 ? stylesMobile.logo : styles.logo} />
                            <span style={width < 480 ? stylesMobile.titleText : styles.titleText}>
                                Back End
                        </span>
                        </div>
                        <div style={width < 480 ? stylesMobile.skillTextDiv : styles.skillTextDiv}>
                            <span style={width < 480 ? stylesMobile.skillText : styles.skillText}>
                                Mainly focusing on Node.js and Express.js
                                MongoDB and MySQL are main database languages.
                        </span>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(About);
