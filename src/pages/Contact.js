import React, { Component } from 'react';
import store from '../store'
import gitlogo from '../components/image/contact/gitlogo.png'
import linkedin from '../components/image/contact/linkedin.png'
import gitlogoColor from '../components/image/contact/gitlogoColor.png'
import linkedinColor from '../components/image/contact/linkedinColor.png'
import { connect } from "react-redux";


let mapStateToProps = (store) => {
    return {
        width: store.location.width,
        height: store.location.height
    }
}

class Contact extends Component {

    constructor(){
        super()
        this.state={
            gitMouseOver: false,
            linkMouseOver: false,
            resumeMouseOver: false,
        }
    }


    componentWillMount() {
        this.getPath()
    }

    getPath() {
        store.dispatch({
            type: "STORE_PATH",
            payload: "contact"
        })
    }

    gitColorChange = () =>{
        if(this.state.gitMouseOver){
            this.setState({gitMouseOver:false})
        }
        else{
            this.setState({gitMouseOver:true})
        }
    }

    linkColorChange = () =>{
        if(this.state.linkMouseOver){
            this.setState({linkMouseOver:false})
        }
        else{
            this.setState({linkMouseOver:true})
        }
    }

    ResumeColorChange = () =>{
        if(this.state.resumeMouseOver){
            this.setState({resumeMouseOver:false})
        }
        else{
            this.setState({resumeMouseOver:true})
        }
    }


    render() {
        let width = this.props.width
        let height = this.props.height

        const stylesMobile = {
            container: {
                width: width,
                height: height,
            },
            gitlogo: {
                maxWidth: "600px",
                position: "absolute",
                top: "12%",
                width: "65%",
                left:"17%"
            },
            linkedIn: {
                maxWidth: "600px",
                position: "absolute",
                width: "65%",
                top:"27%",
                left:"17%"
            },
            logoTextColor: {
                fontSize: "60px",
                position: "absolute",
                color: "#405F69",
                fontWeight: "bold",
                textDecoration:"none",
                top:"33%",
                left:"17%"
            }


        }
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
            },
            logoTextColor: {
                fontSize: width * 0.07,
                position: "absolute",
                right: 0,
                top: "40%",
                width: "40%",
                color: "#005A93",
                fontWeight: "bold"
            }


        }

        if (width<480){
            return(
                <div style={stylesMobile.container}>
                <a href="https://github.com/mtoasis" target="_blank">
                    <img src={gitlogoColor} alt="github" style={stylesMobile.gitlogo} />
                </a>
                <a href="https://www.linkedin.com/in/julian-lee-188a36ba/" target="_blank">
                    <img src={linkedinColor} alt="linkedIn" style={stylesMobile.linkedIn} />
                </a>

                <a style={stylesMobile.logoTextColor} href="https://drive.google.com/open?id=10MJ0RnNpDviAaVswkU6Z8XHsturj80eE" target="_blank">
                    <p>RESUME</p>
                </a>

            </div>
            )
        }

        return (
            <div style={styles.container}>
                <a href="https://github.com/mtoasis" target="_blank">
                    <img 
                    onMouseOver={this.gitColorChange.bind(this)} 
                    onMouseLeave={this.gitColorChange.bind(this)}                    
                    src={this.state.gitMouseOver? gitlogoColor:gitlogo} 
                    alt="github" style={styles.gitlogo} />
                </a>
                <a href="https://www.linkedin.com/in/julian-lee-188a36ba/" target="_blank">
                    <img 
                    onMouseOver={this.linkColorChange.bind(this)} 
                    onMouseLeave={this.linkColorChange.bind(this)}
                    
                    src={this.state.linkMouseOver? linkedinColor:linkedin}
                     alt="linkedIn" style={styles.linkedIn} />
                </a>

                <a href="https://drive.google.com/open?id=10MJ0RnNpDviAaVswkU6Z8XHsturj80eE" target="_blank">
                    <p 
                    onMouseOver={this.ResumeColorChange.bind(this)}
                    onMouseLeave={this.ResumeColorChange.bind(this)}
                    style={this.state.resumeMouseOver? styles.logoTextColor:styles.logoText}>RESUME</p>
                </a>

            </div>
        );
    }
}

export default connect(mapStateToProps)(Contact);

