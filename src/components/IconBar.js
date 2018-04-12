import React, { Component } from 'react';
import { connect } from "react-redux";


let mapStateToProps = (store) => {
    return {
        width:store.location.width,
        height:store.location.height
    }
}


class IconBar extends Component {

    constructor(props) {
        super(props)
    }


    render() {
        let width = this.props.width
        let height = this.props.height
        const techIcons = this.props.techIcons
        const linkIcons = this.props.linkIcons

        const styles = {
            logoDiv: {
                width: 0.65 * width,
                height: 0.11 * width,
                position: "absolute",
                top: 0.38 * width,
                left: "20%"
            },
            logoImage: {
                width: 0.07 * width,
                height: 0.07 * width
            },

            logoText: {
                fontSize: "25px",
                fontFamily: "'Lato', 'sans-serif'",
            },
            linkDiv: {
                width: 0.65* width,
                height: 0.11 * width,
                position: "absolute",
                top: 0.5 * width,
                left: "20%",
                marginTop: "50px",
                marginBottom: 0.05 * width,
            },
            linkImage: {
                width: 0.07 * width,
                height: 0.07 * width,
                cursor: "pointer"
            },
        }

        return (
            <div style={{ textAlign: "center" }}>
                <div style={styles.logoDiv}>
                    <p style={styles.logoText}>Tech:</p>
                    {techIcons.map((logo, key) => (
                        <img
                            key={key}
                            src={logo.img}
                            alt="logo"
                            style={styles.logoImage}
                        />
                    ))}
                </div>

                <div style={styles.linkDiv}>
                    <p style={styles.logoText}>Link:</p>
                    {linkIcons.map((logo, key) => (
                        <div style={{display:"inline-block"}} key={key}>
                        <a href={logo.url} target="_blank">
                        <img                            
                            src={logo.img}
                            alt="logo"
                            style={styles.logoImage}
                        />
                        </a>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

}

export default connect(mapStateToProps)(IconBar)

