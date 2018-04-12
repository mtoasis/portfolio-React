import React, { Component } from 'react';
import store from '../store'
import gitlogo from '../components/image/contact/gitlogo.png'
import linkedin from '../components/image/contact/linkedin.png'
import { connect } from "react-redux";


let mapStateToProps = (store) => {
    return {
        width: store.location.width,
        height: store.location.height
    }
}

class Contact extends Component {


    componentWillMount() {
        this.getPath()
    }

    getPath() {
        store.dispatch({
            type: "STORE_PATH",
            payload: "contact"
        })
    }


    render() {
        let width = this.props.width
        let height = this.props.height
        const styles = {
            container: {
                width: 0.9 * width,
                height: 0.9 * height
            },
            gitlogo: {
                maxWidth: "600px",
                position: "absolute",
                right: "5%",
                top: "20%",
                width: "30%"
            },
            linkedIn: {
                maxWidth: "600px",
                position: "absolute",
                left: "5%",
                top: "40%",
                width: "40%"
            },
            logoText: {
                fontSize: width * 0.07,
                position: "absolute",
                right: 0,
                top: "40%",
                width: "40%",
                color: "#D0D0D0",
                fontWeight: "bold"
            }


        }

        return (
            <div style={styles.container}>
                <a href="https://github.com/mtoasis" target="_blank">
                    <img src={gitlogo} alt="github" style={styles.gitlogo} />
                </a>
                <a href="https://www.linkedin.com/in/julian-lee-188a36ba/" target="_blank">
                    <img src={linkedin} alt="linkedIn" style={styles.linkedIn} />
                </a>

                <a href="https://docs.google.com/document/d/1MY2ZvHrgqVb3azMvRJLdQ8qOHPVQolI1RNlvmd0gRUw/edit?usp=sharing" target="_blank">
                    <p style={styles.logoText}>RESUME</p>
                </a>

            </div>
        );
    }
}

export default connect(mapStateToProps)(Contact);

