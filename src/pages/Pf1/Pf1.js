import React, { Component } from 'react';
import Slider from '../../components/Slider'
import IconBar from '../../components/IconBar'

//slider images
import img1 from '../../components/image/pf1/tnt1.jpg'
import img2 from '../../components/image/pf1/tnt2.jpg'
import img3 from '../../components/image/pf1/tnt3.jpg'
import img4 from '../../components/image/pf1/tnt4.jpg'
import img5 from '../../components/image/pf1/tnt5.jpg'

//iconImage
import expoIcon from '../../components/image/Icons/expoIcon.png'
import githubIcon from '../../components/image/Icons/githubIcon.png'
import liveIcon from '../../components/image/Icons/liveIcon.png'
import mongoIcon from '../../components/image/Icons/mongoIcon.png'
import passportIcon from '../../components/image/Icons/passportIcon.png'
import reduxIcon from '../../components/image/Icons/reduxIcon.png'
import rnIcon from '../../components/image/Icons/rnIcon.png'
import nodeIcon from '../../components/image/Icons/nodeIcon.png'
import androidIcon from '../../components/image/Icons/androidIcon.png'
import iosIcon from '../../components/image/Icons/iosIcon.png'


class Pf1 extends Component {

    constructor() {
        super()
        this.state = {
            isDetailOn: "none",
            width: null,
            height: null,
        }
    }


    render() {
        return (

            <div>
                <Slider 
                
                images={{
                    img1: img1,
                    img2: img2,
                    img3: img3,
                    img4: img4,
                    img5: img5,
                }}

                imgSize={{
                    width:280.32,
                    height:590
                }}
                />
                <IconBar
                    techIcons={[
                        { img: rnIcon },
                        { img: reduxIcon },
                        { img: expoIcon },
                        { img: mongoIcon },
                        { img: nodeIcon },
                        { img: passportIcon },
                        { img: androidIcon },
                        { img: iosIcon },
                    ]}

                    linkIcons={[
                        {
                            img: githubIcon,
                            url: "https://github.com/mtoasis/TNT-RN"
                        },
                        {
                            img: liveIcon,
                            url: "https://expo.io/@mtoasis22/TNTmobile"
                        }]
                    }
                />
            </div>
        );
    }
}

export default Pf1;
