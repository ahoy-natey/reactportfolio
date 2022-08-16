import React from 'react'
import Mountain from '../images/mountain.jpg'
import CodePic from '../images/codeimg.jpg'
import PetConnect from '../images/landing-screenshot.png'
import Weather from '../images/weather.png'
import PricePic from '../images/Pricepic.png'
import Sched from '../images/Sched.png'


export default function Works() {
    return (
        <React.Fragment>

            <div class="snapper">
                <div class="gallery">
                    <div class="item1 positionitem1 item" style={{ backgroundImage: `url(${Mountain})` }}></div>

                    <a href="https://ahoy-natey.github.io/Quiz-Javascript-Project/" target="_blank" rel="noopener noreferrer" class="item2 positionitem2 item" style={{ backgroundImage: `url(${CodePic})` }}>
                        <div class="label"></div>
                    </a>
                    <a href="https://github.com/ahoy-natey/P2-Petconnect" target="_blank" rel="noopener noreferrer" class="item3 positionitem3 item" style={{ backgroundImage: `url(${PetConnect})` }}>
                        <div class="label"></div>
                    </a>
                    <a href="https://ahoy-natey.github.io/Weather-App/" target="_blank" rel="noopener noreferrer" class="item4 positionitem4 item" style={{ backgroundImage: `url(${Weather})` }}>
                        <div class="label"></div>
                    </a>
                    <a href="https://ahoy-natey.github.io/Price-Search/" target="_blank" rel="noopener noreferrer" class="item5 positionitem5 item" style={{ backgroundImage: `url(${PricePic})` }}>
                        <div class="labelG"></div>
                    </a>
                    <a href="https://ahoy-natey.github.io/Schedule-Project/" target="_blank" rel="noopener noreferrer" class="item6 positionitem6 item" style={{ backgroundImage: `url(${Sched})` }}>
                        <div class="label"></div>
                    </a>
                </div>
            </div>




        </React.Fragment>
    )
}


