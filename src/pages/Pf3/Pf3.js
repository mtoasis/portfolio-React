import React, { Component } from 'react';
import IconBar from '../../components/IconBar'
import Slider from 'react-slick'

//slider images
import img1 from '../../components/image/pf3/pt1.png'
import img2 from '../../components/image/pf3/pt2.png'
import img3 from '../../components/image/pf3/pt3.png'


//iconImage
import githubIcon from '../../components/image/Icons/githubIcon.png'
import liveIcon from '../../components/image/Icons/liveIcon.png'
import reduxIcon from '../../components/image/Icons/reduxIcon.png'
import reactIcon from '../../components/image/Icons/reactIcon.png'
import htmlIcon from '../../components/image/Icons/htmlIcon.png'
import jsIcon from '../../components/image/Icons/jsIcon.png'
import cssIcon from '../../components/image/Icons/cssIcon.png'


class Pf3 extends Component {

    constructor() {
        super()
        this.state = {
            isDetailOn: "none",
            width: null,
            height: null,
        }
    }




    render() {

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };


        return (

            <div>
                <div style={{width:"1000px", position:"absolute", right:"10%", top:"50%"}}>
                    <Slider {...settings}>
                        <div>
                            <img alt="1" src={img1} />
                        </div>
                        <div>
                            <img alt="2" src={img2} />
                        </div>
                        <div>
                            <img alt="3" src={img3} />
                        </div>
                    </Slider>
                    <h2> Swipe</h2>
                </div>

                <IconBar
                    techIcons={[
                        { img: reactIcon },
                        { img: reduxIcon },
                        { img: jsIcon },
                        { img: htmlIcon },
                        { img: cssIcon },
                    ]}

                    linkIcons={[
                        {
                            img: githubIcon,
                            url: "https://github.com/mtoasis/portfolio-React"
                        },
                        {
                            img: liveIcon,
                            url: "https://julianptf.herokuapp.com/"
                        }]
                    }
                />
            </div>
        );
    }
}

export default Pf3;
