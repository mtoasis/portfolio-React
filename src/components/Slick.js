import React, { Component } from "react";
import Slider from "react-slick";


export default class MobileSlider extends Component {

    constructor(props){
        super(props)
    }


  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode:true,
      centerPadding:"-10px"
    };

    const images = this.props.images;

    const styles={
        image:{
            width:this.props.imgSize.width,
            height:this.props.imgSize.height,
            marginLeft:"auto",
            marginRight:"auto",
        },
    }

    return (
      <div>
        <Slider {...settings}>
          <div>
            <img style={styles.image} src={images.img1} alt="img" />
          </div>
          <div>
          <img style={styles.image} src={images.img2} alt="img" />
          </div>
          <div>
          <img style={styles.image} src={images.img3} alt="img" />
          </div>
          <div>
          <img style={styles.image} src={images.img4} alt="img" />
          </div>
          <div>
          <img style={styles.image} src={images.img5} alt="img" />
          </div>
        </Slider>
      </div>
    );
  }
}