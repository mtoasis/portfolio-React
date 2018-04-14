import React, { Component } from 'react';
import { connect } from "react-redux";
import Ionicon from 'react-ionicons'

let mapStateToProps = (store) => {
    return {
        location: store.location.location,
        width: store.location.width,
        height: store.location.height
    }
}


class Nav extends Component {

    constructor() {
        super()
        this.state = {
            isMenuOn: false
        }
    }

    openMenu = () => {
        if (this.state.isMenuOn) {
            console.log("menu off")
            this.setState({ isMenuOn: false })
        }
        else {
            console.log("menu on")
            this.setState({ isMenuOn: true })
        }
    }

    render() {

        let width = this.props.width
        let height = this.props.height

        const stylesMobile = {
            navDiv: {
                width: "101%",
                height: "50px",
                position: "fixed",
                top: 0,
                fontFamily: "'Lato', 'sans-serif'",
                backgroundColor: "black",
                zIndex: 10,
                marginLeft:"-10px"
            },
            nameDiv: {
                width: "50%",
                position: "absolute",
                bottom: "10px"
            },
            nameFont: {
                fontSize: "25px",
                color: "white",
                display: "block",
                marginLeft: "5%",
                fontWeight: "bold",
            },
            subtitleFont: {
                fontSize: "15px",
                color: "white",
                display: "block",
                marginLeft: "20%",
            },
            menuDiv: {
                position: "absolute",
                right: "3%",
                bottom: "0%",
                width: "50px",
            },
            menuFont: {
                fontSize: "20px",
                color: "white",
                textDecoration: "none",
                fontWeight: "bold",
                lineHeight: "200%"
            },
            linkFont: {
                fontSize: "20px",
                color: "#575757",
                textDecoration: "none"
            },
            menuButton: {
                backgroundColor: "transparent",
                borderWidth: 0
            }
        }

        const styles = {
            navDiv: {
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
                color: "#3D3D3D",
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

        if (width < 480) {
            return (
                <div style={stylesMobile.navDiv}>

                    <div style={stylesMobile.nameDiv}>
                        {this.props.location === "about" ?
                            <span style={stylesMobile.nameFont}>
                                Home
                        </span> :
                            <div></div>
                        }
                        {this.props.location === "contact" ?
                            <span style={stylesMobile.nameFont}>
                                Contact
                        </span> :
                            <div></div>
                        }
                        {this.props.location !== "about" && this.props.location !== "contact" ?
                            <span style={stylesMobile.nameFont}>
                                Works
                        </span> :
                            <div></div>
                        }


                    </div>

                    <div style={stylesMobile.menuDiv}>
                        <button
                            style={stylesMobile.menuButton}
                            onClick={this.openMenu.bind(this)}>
                            <Ionicon icon='ios-menu' fontSize="40px" color="white" />
                        </button>
                    </div>

                    {this.state.isMenuOn === true ?
                        <div
                            style={{
                                width: "45%",
                                minHeight: "40vh",
                                backgroundColor: "black",
                                opacity: 0.8,
                                zIndex: 10,
                                position: "absolute",
                                top: "50px",
                                right: 0
                            }}>
                            <ul>
                                <li>

                                    <a href="/" style={stylesMobile.menuFont}>
                                        About
                    </a>
                                </li>

                                <li>
                                    <a href="/pf1" style={stylesMobile.menuFont}>
                                        Works
                    </a>
                                </li>
                                <li>
                                    <a href="/pf1" style={stylesMobile.linkFont}>
                                        Portfolio1
                    </a>
                                </li>
                                <li>
                                    <a href="/pf2" style={stylesMobile.linkFont}>
                                        Portfolio2
                    </a>
                                </li>

                                <li>

                                    <a href="/contact" style={stylesMobile.menuFont}>
                                        Contact
                    </a>
                                </li>
                            </ul>

                        </div>

                        : <div></div>}

                </div>
            )
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
                        <p style={{ textAlign: "center", marginTop: "40px", fontSize: "20px" }}>
                            <a style={styles.linkFont} href="https://github.com/mtoasis" target="_blank">
                                Github
                            </a>
                        </p>
                        <p style={{ textAlign: "center", fontSize: "20px" }}>
                            <a style={styles.linkFont} href="https://www.linkedin.com/in/julian-lee-188a36ba/" target="_blank">
                                LinkedIn
                            </a>
                        </p>
                        <p style={{ textAlign: "center", fontSize: "20px" }}>
                            <a style={styles.linkFont} href="https://drive.google.com/open?id=10MJ0RnNpDviAaVswkU6Z8XHsturj80eE" target="_blank">
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
                    <div style={{ marginLeft: "50px" }}>
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

