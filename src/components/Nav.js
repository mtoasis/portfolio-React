import React, { Component } from 'react';
import { connect } from "react-redux";
import './Nav.css'

let mapStateToProps = (store) => {
    return {
        location: store.location.location,
        width: store.location.width,
        height: store.location.height
    }
}


class Nav extends Component {


    render() {

        let width = this.props.width
        let height = this.props.height

        const styles = {
            navDiv: {
                backgroundColor: "white",
                width: "100%",
                height: 0.075 * width,
                opacity: "0.7",
                position: "absolute",
                top: 0,
                fontFamily: "'Lato', 'sans-serif'"
            },
            navDivCenter: {
                backgroundColor: "#F4F4F4",
                width: "150px",
                height: 0.95 * height,
                opacity: "0.7",
                position: "absolute",
                top: 0,
                left: "46%",
                fontFamily: "'Lato', 'sans-serif'"
            },
            navDivPf: {
                backgroundColor: "#F4F4F4",
                width: "150px",
                height: 1.3 * height,
                opacity: "0.7",
                position: "absolute",
                top: 0,
                left: "0%",
                fontFamily: "'Lato', 'sans-serif'"
            },
            nameDiv: {
                width: "50%",
                position: "absolute",
                bottom: "5%",
            },
            nameFont: {
                fontSize: `${width * 0.03125}px`,
                color: "black",
                display: "block",
                marginLeft: "5%",
                fontWeight: "bold",
            },
            subtitleFont: {
                fontSize: `${width * 0.0156}px`,
                color: "black",
                display: "block",
                marginLeft: "20%",
            },
            menuDiv: {
                position: "absolute",
                right: "10%",
                bottom: "10%",
                width: "20%",
                minWidth: "300px"
            },
            menuFont: {
                fontSize: "25px",
                color: "#575757",
                paddingLeft: "30px",
                textDecoration: "none"
            },
            menuDivColumn: {
                position: "relative",
                top: "10%",
                width: "20%",
                minWidth: "150px"
            },
            menuFontColumn: {
                fontSize: "25px",
                color: "#575757",
                paddingLeft: "30px",
                textDecoration: "none",
                fontWeight: "bold"
            },
            linkFont: {
                fontSize: "20px",
                color: "#575757",
                textDecoration: "none"
            }
        }


        if (this.props.location === "about") {

            return (
                <div style={styles.navDiv}>

                    <div style={styles.nameDiv}>

                        <span style={styles.nameFont}>
                            Julian Lee
                    </span>

                        <span style={styles.subtitleFont}>
                            Web Developer
                    </span>
                    </div>

                    <div style={styles.menuDiv}>
                        <a href="/" style={{
                            fontSize: "30px",
                            color: "#005A93",
                            paddingLeft: "30px",
                            textDecoration: "none"
                        }}>
                            About
                    </a>

                        <a href="/pf1" style={styles.menuFont}>
                            Works
                    </a>

                        <a href="/contact" style={styles.menuFont}>
                            Contact
                    </a>

                    </div>

                </div>
            )
        }
        else if (this.props.location === "contact") {
            return (

                <div style={styles.navDivCenter}>

                    <div style={styles.menuDivColumn}>
                        <p>
                            <a href="/" style={styles.menuFontColumn}>
                                About
                    </a>
                        </p>

                        <p>
                            <a href="/pf1" style={styles.menuFontColumn}>
                                Works
                    </a>
                        </p>

                        <p>
                            <a href="/contact" style={{
                                fontSize: "30px",
                                color: "#005A93",
                                paddingLeft: "30px",
                                textDecoration: "none",
                                fontWeight: "bold"
                            }}>
                                Contact
                    </a>
                        </p>
                        <p style={{ textAlign: "right", marginRight: "13px", marginTop: "40px", fontSize: "20px" }}>
                            <a style={styles.linkFont} href="https://github.com/mtoasis" target="_blank">
                                Github
                            </a>
                        </p>
                        <p style={{ textAlign: "left", marginLeft: "13px", fontSize: "20px" }}>
                            <a style={styles.linkFont} href="https://www.linkedin.com/in/julian-lee-188a36ba/" target="_blank">
                                LinkedIn
                            </a>
                        </p>
                        <p style={{ textAlign: "right", marginRight: "13px", fontSize: "20px" }}>
                            <a style={styles.linkFont} href="https://docs.google.com/document/d/1MY2ZvHrgqVb3azMvRJLdQ8qOHPVQolI1RNlvmd0gRUw/edit?usp=sharing" target="_blank">
                                Resume
                            </a>
                        </p>

                    </div>

                </div>
         
            )
        }
        return (
            <div style={styles.navDivPf}>

                <div style={styles.menuDivColumn}>
                    <p>
                        <a href="/" style={styles.menuFontColumn}>
                            About
            </a>
                    </p>
                    <p>

                        <a href="/pf1" style={{
                            fontSize: "30px",
                            color: "#005A93",
                            paddingLeft: "30px",
                            textDecoration: "none",
                            fontWeight: "bold"
                        }}>
                            Works
            </a>
                    </p>
                    <div style={{marginLeft:"50px"}}>
                        <p>
                            <a href="/pf1" style={styles.linkFont}>
                                Portfolio1
                            </a></p>
                        <p>
                            <a href="/pf2" style={styles.linkFont}>
                                Portfolio2
                    </a>
                        </p>
                        {/* <p>
                            <a href="/pf3" style={styles.linkFont}>
                                Portfolio3
                    </a>
                        </p> */}
                    </div>

                    <p>


                        <a href="/contact" style={styles.menuFontColumn}>
                            Contact
            </a>
                    </p>

                </div>

            </div>
        )
    }
}

export default connect(mapStateToProps)(Nav)

