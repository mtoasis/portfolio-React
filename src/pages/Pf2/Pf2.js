import React, { Component } from 'react';
import Slider from '../../components/Slider'
import IconBar from '../../components/IconBar'
import { connect } from "react-redux";
import MobileSlider from '../../components/Slick'

//slider images
import img1 from '../../components/image/pf2/scp1.png'
import img2 from '../../components/image/pf2/scp2.png'
import img3 from '../../components/image/pf2/scp3.png'
import img4 from '../../components/image/pf2/scp4.png'
import img5 from '../../components/image/pf2/scp5.png'

//iconImage
import githubIcon from '../../components/image/Icons/githubIcon.png'
import liveIcon from '../../components/image/Icons/liveIcon.png'
import nodeIcon from '../../components/image/Icons/nodeIcon.png'
import sqlIcon from '../../components/image/Icons/sqlIcon.png'
import jqueryIcon from '../../components/image/Icons/jqueryIcon.png'
import htmlIcon from '../../components/image/Icons/htmlIcon.png'
import jsIcon from '../../components/image/Icons/jsIcon.png'
import cssIcon from '../../components/image/Icons/cssIcon.png'


let mapStateToProps = (store) => {
    return {
        width: store.location.width,
        height: store.location.height
    }
}


class Pf2 extends Component {

    constructor() {
        super()
        this.state = {
            isDetailOn: "none",
            width: null,
            height: null,
        }
    }
    

    render() {

        const mobileStyle={
            container:{
                width:"90%",
                position:"absolute",
                top:"70px",
                left:"4%"
            }
        }

        if (this.props.width < 480) {
            return (
                <div style={mobileStyle.container}>
                    <MobileSlider                     
                    
                    images={{
                        img1: img1,
                        img2: img2,
                        img3: img3,
                        img4: img4,
                        img5: img5,
                    }}

                    imgSize={{
                        width: 280,
                        height: 446
                    }}
                    />

                <IconBar
                    techIcons={[
                        { img: jsIcon },
                        { img: htmlIcon },
                        { img: cssIcon },
                        { img: jqueryIcon },
                        { img: sqlIcon },
                        { img: nodeIcon },
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
            )
        }

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
                        width: 280,
                        height: 446
                    }}
                />
                <IconBar
                    techIcons={[
                        { img: jsIcon },
                        { img: htmlIcon },
                        { img: cssIcon },
                        { img: jqueryIcon },
                        { img: sqlIcon },
                        { img: nodeIcon },
                    ]}

                    linkIcons={[
                        {
                            img: githubIcon,
                            url: "https://github.com/mtoasis/mobileSCP"
                        },
                        {
                            img: liveIcon,
                            url: "https://mobilescp.herokuapp.com/"
                        }]
                    }

                />
            </div>
        );
    }
}

export default connect(mapStateToProps)(Pf2);
