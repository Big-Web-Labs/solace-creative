import React, { useState, useEffect } from 'react'
import ddg from '../assets/ddg.jpg'
import mickeyCover from '../assets/mickey-cover.jpg'
import aintmyfault from '../assets/aintmyfault.jpg'
import elevatedgoods from '../assets/elevatedgoods.png'
import haydCover from '../assets/hayd-cover.jpg'
import holdingon from '../assets/holdingon.jpg'
import jakepaul from '../assets/jakepaul.jpg'
import kaicenat from '../assets/kaicenat.jpg'
import acesCover from '../assets/aces-cover.jpg'
import kidlaroi from '../assets/kidlaroi.jpg'
import strickCover from '../assets/strick-cover.jpg'
import vignettesCover from '../assets/vignettes-cover.jpg'
import roseCover from '../assets/rose-cover.jpg'
import whiteHat from '../assets/white-hat.png'
import solaceStudio from '../assets/solace-studio-cover.jpg'
import rightArrow from '../assets/rightArrow.png'
import { motion } from 'framer-motion'
import { useSelector, useDispatch } from 'react-redux'

const Carousel = () => {

    const { open } = useSelector((state) => state.menu)

    const [data, setData] = useState([
        {
            id: 1,
            pos: 1,
            active: true,
            title: "\"9 Lives\" MUSIC VIDEO PRODUCTION",
            artist: "DDG, POLO G, NLE CHOPPA",
            image: ddg,
            description: "Solace produced the “9 Lives” music video with DDG featuring Polo G and NLE Choppa. We shot the video in Los Angeles, CA.",
            slug: "9-lives",
            link: "https://www.youtube.com/watch?v=4YhcdJAN-M0&t=1s",
            background: "#AA303F"
        },
        {
            
            id: 2,
            pos: 2,
            active: true,
            title: "\"HEY MICKEY!\" SHORT-FORM & BTS PRODUCTION",
            artist: "BABY TATE, SAWEETIE",
            image: mickeyCover,
            description: "Solace got tapped to conceptualize and produce short-form content to supplement the rollout of Baby Tate and Saweetie’s remix to the viral song, \“Hey Mickey!\”. With short-form media being a leading marketing tool, we’ve seen labels and companies begin to prioritize these shorter snippets of content. We also documented the shoot and delivered a BTS recap.",
            slug: "hey-mickey",
            link: "",
            background: "#0088F7" 
        },
        {
            id: 3,
            pos: 3,
            active: false,
            title: "\"It Ain't My Fault\" MUSIC VIDEO PRODUCTION",
            artist: "BABYFACE RAY, BIG SEAN, HIT-BOY",
            image: aintmyfault,
            description: "Solace produced the “It Ain’t My Fault” music video with Babyface Ray featuring Big Sean and Hit-Boy. Another project we shot on film to achieve a gritty and cold look.",
            slug: "it-aint-my-fault",
            link: "https://www.youtube.com/watch?v=8Vc3r3r7kJg",
            background: "#12191C"
        },
        {
            id: 4,
            pos: 4,
            active: false,
            title: "ELEVATED GOODS DESIGN PRODUCTION",
            artist: "ZOE LA",
            image: elevatedgoods,
            description: "With ZOE, an LA-based church, our goal was to use design to more closely align the church’s spiritual and physical messaging. We introduced cut & sewn garments and fine jewelry to challenge the connotation that “merch” has as being a cheaply produced cash-grab. Understanding that the intent could be misread, we developed imagery, messaging, and graphics to give context to the boundaries which we were testing.",
            slug: "elevated-goods",
            link: "",
            background: "#F3F3F3"
        },
        {
            id: 5,
            pos: 5,
            active: false,
            title: "\"Head IN THE CLOUDS\" MUSIC VIDEO PRODUCTION",
            artist: "HAYD",
            image: haydCover,
            description: "Solace produced the “Head in the Clouds” music video with Hayd. The entirety of the video was shot on Kodak film",
            slug: "head-in-the-clouds",
            link: "https://www.youtube.com/watch?v=-uFQzcY7YHc&t=1s",
            background: "#B2C7C4"
        },
        {
            id: 6,
            pos: 6,
            active: false,
            title: "\"HOLDING ON\" MUSIC VIDEO PRODUCTION",
            artist: "IAN DIORR",
            image: holdingon,
            description: "Solace produced the “Holding On” music video with iann dior",
            slug: "holding-on",
            link: "https://www.youtube.com/watch?v=BMmUkrUehrM&t=2s",
            background: "#881F12"
        },
        {
            id: 7,
            pos: 7,
            active: false,
            title: "\"23\" MUSIC VIDEO PRODUCTION",
            artist: "JAKE PAUL",
            image: jakepaul,
            description: "Solace produced Jake Paul’s “23” music video.",
            slug: "23",
            link: "https://www.youtube.com/watch?v=53vz5pQH0Rg",
            background: "#CD5C39"
        },
        {
            id: 8,
            pos: 8,
            active: false,
            title: "\"MAFIATHON\" SHORT-FORM VIDEO PRODUCTION",
            artist: "KAI CENAT",
            image: kaicenat,
            description: "Solace produced a short-form promotional video for Kai Cenat's 30 Days of Streaming. The video has amassed 7.3M+ views across social platforms. It garnered record engagement, leading up to Kai surpassing Twitch’s #1 most subscribed-to streamer of all time.",
            slug: "mafiathon",
            link: "https://www.youtube.com/watch?v=6rtCZySsXiA",
            background: "#4DA8DA"
        },
        {
            id: 9,
            pos: 9,
            active: false,
            title: "MICRO-VISUALIZERS FOR ILYFSL ALBUM ROLLOUT",
            artist: "THE ACES",
            image: acesCover,
            description: "nstead of a music video, we produced a series of 19 vignettes, weaving through a handful of tracks off of The Aces upcoming album. The vignettes are being incrementally released throughout the album rollout. We massively amplified The Aces ability to tell the story of their album by producing for short-form content - this allowed for the creative to span across multiple songs and touch upon an array of emotions.",
            slug: "micro-visualizers",
            link: "",
            background: "#0B1B28"
        },
        {
            id: 10,
            pos: 10,
            active: false,
            title: "SPOTIFY RADAR PRESENTS: THE KID LAROI PRODUCTION",
            artist: "SPOTIFY, THE KID LAROI",
            image: kidlaroi,
            description: "Solace produced a Spotify RADAR episode featuring The Kid LAROI.",
            slug: "spotify",
            link: "https://www.youtube.com/watch?v=__pV0V7ogKo&t=4s",
            background: "#08DA73"
        },
        {
            id: 11,
            pos: 11,
            active: false,
            title: "\"NELLY FURTADO\" MUSIC VIDEO PRODUCTION",
            artist: "STRICK",
            image: strickCover,
            description: "",
            slug: "nelly-furtado",
            link: "https://www.youtube.com/watch?v=xjvxO9FZnfE",
            background: "#141C25"
        },
        {
            id: 12,
            pos: 12,
            active: false,
            title: "\"GIRLS MAKE ME WANNA DIE\" MUSIC VIDEO PRODUCTION",
            artist: "THE ACES",
            image: vignettesCover,
            description: "Solace produced the “Girls Make Me Wanna Die” music video for The Aces. We shot the entirety of the video on Kodak 16mm film - the garage band performance scenes were shot with 7219 uncorrected for a colder, dirtier look, while the narrative was given contrast by shooting 7213 W/ 81EF for a warmer, less grainy feel. Shoutout our DP, Gary Long, for translating the energy of the song through these visual choices.",
            slug: "the-aces-vignettes",
            link: "https://www.youtube.com/watch?v=6FlnXDIbmXA&t=1s",
            background: "91A7A5"
        },
        {
            id: 13,
            pos: 13,
            active: false,
            title: "\"MALIBU SOUVENIR HAT\"",
            artist: "SOLACE",
            image: whiteHat,
            description: "Solace is, by definition, an immaterial “place”. It’s somewhere you arrive mentally, but isn’t necessarily dependent upon location. With that being said, Malibu has always been a place that we’ve found consistent refuge in. During peak pandemic, we would often drive the PCH and land along the oceanside - it’s been our consistent source of peace and calmness. We came up with a simple design, inspired by standard souvenir hats. It caught quick attention in our immediate circle and we’ve kept it as a friends & family staple.",
            slug: "malibu-souvenir-hat",
            link: "",
            background: "#4571C8"
        },
        {
            id: 14,
            pos: 14,
            active: false,
            title: "\"FIRE TO FLOWER\"",
            artist: "SOLACE",
            image: roseCover,
            description: "Our friend, Tayla, needed some new images. We like to compliment our subject when it comes to overall creative - the idea to light a rose on fire was really just a way to capture Tayla’s energy. It turns out, you actually can’t just light a rose with an open flame from a lighter or match. We audibled and used whatever we had laying around our office - the result was still pretty fire.",
            slug: "fire-to-flower",
            link: "",
            background: "#F5D5BC"
        },
        {
            id: 15,
            pos: 15,
            active: false,
            title: "\"SOLACE STUDIO\"",
            artist: "SOLACE",
            image: solaceStudio,
            description: "Admittedly, we aren’t the best at consistently documenting our projects and work - it comes and goes in waves. This is our ongoing attempt to capture moments that matter... the stuff behind the scenes. We’ve always found a lot of value to doing this, we’re holding ourselves accountable.",
            slug: "solace-studio",
            link: "",
            background: "#181818"
        },
    ])

    return (
        <div className="section grid place-items-center">
            <div className="slider">
                <div className="slide-track">
                    {data.map((item, index) => (
                        <div className="slide text-[#F3F3F3] cursor-pointer" key={index}>
                            <img src={item.image} className="h-[100px] sm:h-[275px]" />
                            <p className="text-[1.125rem] sm:text-[2rem] font-light font-roboto mt-5 sm:mt-10">{item.title}</p>
                            <p className="flex items-center gap-x-2 text-[0.875rem] font-medium font-roboto cursor-pointer">Read more <span><img src={rightArrow} /></span></p>
                        </div>
                    ))}
                    {data.map((item, index) => (
                        <div className="slide text-[#F3F3F3] cursor-pointer" key={index}>
                            <img src={item.image} className="h-[100px] sm:h-[275px]" />
                            <p className="text-[1.125rem] sm:text-[2rem] font-light font-roboto mt-5 sm:mt-10">{item.title}</p>
                            <p className="flex items-center gap-x-2 text-[0.875rem] font-medium font-roboto cursor-pointer">Read more <span><img src={rightArrow} /></span></p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Carousel