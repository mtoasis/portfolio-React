import React, { Component } from 'react';
import { connect } from "react-redux";

let mapStateToProps = (store) => {
    return {
        width: store.location.width,
        height: store.location.height
    }
}

class Slider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            slider: {
                one: this.props.images.img1,
                two: this.props.images.img2,
                three: this.props.images.img3,
                four: this.props.images.img4,
                five: this.props.images.img5
            },
        }
    }


    arrowRight() {
        const slider = this.state.slider
        if (slider.one === this.props.images.img1) {
            this.setState({
                slider: {
                    one: this.props.images.img5,
                    two: this.props.images.img1,
                    three: this.props.images.img2,
                    four: this.props.images.img3,
                    five: this.props.images.img4
                }
            })
        }
        else if (slider.one === this.props.images.img2) {
            this.setState({
                slider: {
                    one: this.props.images.img1,
                    two: this.props.images.img2,
                    three: this.props.images.img3,
                    four: this.props.images.img4,
                    five: this.props.images.img5
                }
            })
        }
        else if (slider.one === this.props.images.img3) {
            this.setState({
                slider: {
                    one: this.props.images.img2,
                    two: this.props.images.img3,
                    three: this.props.images.img4,
                    four: this.props.images.img5,
                    five: this.props.images.img1
                }
            })
        }
        else if (slider.one === this.props.images.img4) {
            this.setState({
                slider: {
                    one: this.props.images.img3,
                    two: this.props.images.img4,
                    three: this.props.images.img5,
                    four: this.props.images.img1,
                    five: this.props.images.img2
                }
            })
        }
        else if (slider.one === this.props.images.img5) {
            this.setState({
                slider: {
                    one: this.props.images.img4,
                    two: this.props.images.img5,
                    three: this.props.images.img1,
                    four: this.props.images.img2,
                    five: this.props.images.img3
                }
            })
        }

    }


    arrowLeft() {
        const slider = this.state.slider
        if (slider.one === this.props.images.img1) {
            this.setState({
                slider: {
                    one: this.props.images.img2,
                    two: this.props.images.img3,
                    three: this.props.images.img4,
                    four: this.props.images.img5,
                    five: this.props.images.img1
                }
            })
        }
        else if (slider.one === this.props.images.img2) {
            this.setState({
                slider: {
                    one: this.props.images.img3,
                    two: this.props.images.img4,
                    three: this.props.images.img5,
                    four: this.props.images.img1,
                    five: this.props.images.img2
                }
            })
        }
        else if (slider.one === this.props.images.img3) {
            this.setState({
                slider: {
                    one: this.props.images.img4,
                    two: this.props.images.img5,
                    three: this.props.images.img1,
                    four: this.props.images.img2,
                    five: this.props.images.img3
                }
            })
        }
        else if (slider.one === this.props.images.img4) {
            this.setState({
                slider: {
                    one: this.props.images.img5,
                    two: this.props.images.img1,
                    three: this.props.images.img2,
                    four: this.props.images.img3,
                    five: this.props.images.img4
                }
            })
        }
        else if (slider.one === this.props.images.img5) {
            this.setState({
                slider: {
                    one: this.props.images.img1,
                    two: this.props.images.img2,
                    three: this.props.images.img3,
                    four: this.props.images.img4,
                    five: this.props.images.img5
                }
            })
        }

    }

    detectWheel(e) {
        if (e.deltaY < 0) {
            console.log('scrolling up');
            this.arrowLeft()
        }
        // else if (e.deltaY > 0) {
        //     console.log('scrolling down');
        //     this.arrowRight()
        // }
    }


    render() {
        let width = this.props.width
        let height = this.props.height
        let imgWidth = this.props.imgSize.width / 1920
        let imgHeight = imgWidth * this.props.imgSize.height / this.props.imgSize.width

        const styles = {
            container: {
                display: "inline-block",
                position: "absolute",
                left: "20%",
                width: 0.655 * width,
                height: 0.31 * width,
                top: 0.04 * width
            },
            arrowLeft: {
                cursor: "pointer",
                fontSize: 0.05 * width,
                zIndex: 5,
                position: "absolute",
                top: 0.4 * imgHeight * width,
            },
            arrowRight:{
                cursor: "pointer", 
                fontSize: 0.05 * width, 
                zIndex: 5, 
                position: "absolute", 
                top: 0.4 * imgHeight * width, 
                right: "1%"
            },
            smallImgDiv: {
                width: 0.75 * imgWidth * width,
                height: 0.755 * imgHeight * width,
                display: "inline-block",
                marginBottom: 0.02*width,
                zIndex: 1
            },
            mediumImgDiv:{
                width: 0.9273 * imgWidth * width,
                height: 0.9 * imgHeight * width,
                display: "inline-block",
                zIndex: 2,
                marginBottom:0.0078*width
            },
            largeImgDiv:{
                width: imgWidth * width,
                height: imgHeight * width,
                display: "inline-block",
                zIndex: "3"
            },
            smallWhiteCoverLeft:{
                backgroundColor: "white",
                width: 0.75 * imgWidth * width,
                height: 0.75 * imgHeight * width,
                backgroundSize: "cover",
                opacity: 0.8,
                position: "absolute",
                zIndex: 2,
                left: 0.053 * width,
            },
            smallWhiteCoverRight:{
                backgroundColor: "white",
                width: 0.75 * imgWidth * width,
                height: 0.75 * imgHeight * width,
                backgroundSize: "cover",
                opacity: 0.8,
                position: "absolute",
                zIndex: 2,
                right: 0.053 * width,
            },
            mediumWhiteCoverLeft:{
                backgroundColor: "white",
                width: 0.9273 * imgWidth * width,
                height: 0.9 * imgHeight * width,
                backgroundSize: "cover",
                opacity: 0.3,
                zIndex: 4,
                position: "absolute",
                left: 0.138 * width
            },
            mediumWhiteCoverRight:{
                backgroundColor: "white",
                width: 0.9273 * imgWidth * width,
                height: 0.9 * imgHeight * width,
                backgroundSize: "cover",
                opacity: 0.3,
                zIndex: 4,
                position: "absolute",
                right: 0.138 * width
            },
            smallImgLeft:{
                width: 0.75 * imgWidth * width,
                height: 0.75 * imgHeight * width,
                position: "absolute",
                left: 0.053 * width,
                zIndex: 1,
                boxShadow: "0px 12px 20px #626262"
            },
            smallImgRight:{
                width: 0.75 * imgWidth * width,
                height: 0.75 * imgHeight * width,
                position: "absolute",
                right: 0.053 * width,
                zIndex: 1,
                boxShadow: "0px 12px 20px #626262"
            },
            mediumImgLeft:{
                width: 0.9273*imgWidth * width,
                height: 0.9*imgHeight * width,
                zIndex: 3,
                position: "absolute",
                left: 0.138 * width,
                boxShadow: "0px 12px 20px #626262"
            },
            mediumImgRight:{
                width: 0.9273*imgWidth * width,
                height: 0.9*imgHeight * width,
                zIndex: 3,
                position: "absolute",
                right: 0.138 * width,
                boxShadow: "0px 12px 20px #626262"
            },
            largeImg:{
                width: imgWidth * width,
                height: imgHeight * width,
                zIndex: 5,
                position: "absolute",
                boxShadow: "0px 12px 20px #626262"
            }



        }

        return (
            <div
                style={styles.container}
                onWheel={(e) => this.detectWheel(e)}
            >
                <div style={styles.smallImgDiv}>
                    <span
                        style={styles.arrowLeft}
                        onClick={this.arrowLeft.bind(this)}>                    
                        {`<`}
                    </span>
                    <div style={styles.smallWhiteCoverLeft}>
                    </div>
                    <img src={this.state.slider.one}
                        style={styles.smallImgLeft} />
                </div>
                <div style={styles.mediumImgDiv}>
                    <div style={styles.mediumWhiteCoverLeft}>
                    </div>
                    <img src={this.state.slider.two} style={styles.mediumImgLeft} />
                </div>
                <div style={styles.largeImgDiv}>
                    <img src={this.state.slider.three} style={styles.largeImg} />
                </div>
                <div style={styles.mediumImgDiv}>
                    <div style={styles.mediumWhiteCoverRight}>
                    </div>
                    <img src={this.state.slider.four} style={styles.mediumImgRight} />
                </div>
                <div style={styles.smallImgDiv}>
                    <div style={styles.smallWhiteCoverRight}>
                    </div>
                    <img src={this.state.slider.five} style={styles.smallImgRight} />
                    <span style={styles.arrowRight}
                        onClick={this.arrowRight.bind(this)}>                    
                        {`>`}
                    </span>
                </div>
            </div>
        )
    }

}

export default connect(mapStateToProps)(Slider)

