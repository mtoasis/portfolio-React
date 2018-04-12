import React, { Component } from 'react';
import mainBG from '../components/image/about/mainBG.png'
import react from '../components/image/about/react.png'
import backend from '../components/image/about/backend.png'
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
                marginBottom: 0.018*width,
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
            },
            titleText: {
                fontSize: "30px",
                color: "#005A93",
                fontWeight: "bold",
                position: "absolute"
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
                <div style={styles.imgDiv}>
                    <img src={mainBG} alt="bgImg" style={styles.bgImg} />
                </div>
                <div style={styles.skillDiv}>

                    <div style={styles.frontEnd}>
                        <div style={styles.titleDiv}>

                            <img alt ="reactLogo" src={react} style={styles.logo} />
                            <span style={styles.titleText}>
                                Front End
                        </span>
                        </div>
                        <div style={styles.skillTextDiv}>
                            <span style={styles.skillText}>
                                Expert in React Native/ React.js.
                                Fluent in Jquery, HTML, and CSS frameworks.
                        </span>
                        </div>

                    </div>

                    <div style={styles.backEnd}>
                        <div style={styles.titleDiv}>
                            <img alt="backendLogo" src={backend} style={styles.logo} />
                            <span style={styles.titleText}>
                                Back End
                        </span>
                        </div>
                        <div  style={styles.skillTextDiv}>
                            <span style={styles.skillText}>
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
