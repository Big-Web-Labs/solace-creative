import React from 'react'
import logo from '../assets/solace_blue.png'
import {NavOverlay, CreativeBanner, CreativePortfolio, Footer} from '../components'
import { useSelector, useDispatch } from 'react-redux'
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

const CreativeAgency = () => {

    const { open } = useSelector((state) => state.menu)

    const projects = [
        {
            title: "\"9 Lives\" MUSIC VIDEO PRODUCTION",
            artist: "DDG, POLO G, NLE CHOPPA",
            image: ddg,
            description: "Solace produced the “9 Lives” music video with DDG featuring Polo G and NLE Choppa. We shot the video in Los Angeles, CA.",
            slug: "9-lives",
            link: "https://www.youtube.com/watch?v=4YhcdJAN-M0&t=1s",
            background: "#AA303F"
        },
        {
            title: "\"HEY MICKEY!\" SHORT-FORM & BTS PRODUCTION",
            artist: "BABY TATE, SAWEETIE",
            image: mickeyCover,
            description: "Solace got tapped to conceptualize and produce short-form content to supplement the rollout of Baby Tate and Saweetie’s remix to the viral song, \“Hey Mickey!\”. With short-form media being a leading marketing tool, we’ve seen labels and companies begin to prioritize these shorter snippets of content. We also documented the shoot and delivered a BTS recap.",
            slug: "hey-mickey",
            link: "",
            background: "#0088F7" 
        },
        {
            title: "\"It Ain't My Fault\" MUSIC VIDEO PRODUCTION",
            artist: "BABYFACE RAY, BIG SEAN, HIT-BOY",
            image: aintmyfault,
            description: "Solace produced the “It Ain’t My Fault” music video with Babyface Ray featuring Big Sean and Hit-Boy. Another project we shot on film to achieve a gritty and cold look.",
            slug: "it-aint-my-fault",
            link: "https://www.youtube.com/watch?v=8Vc3r3r7kJg",
            background: "#12191C"
        },
        {
            title: "ELEVATED GOODS DESIGN PRODUCTION",
            artist: "ZOE LA",
            image: elevatedgoods,
            description: "With ZOE, an LA-based church, our goal was to use design to more closely align the church’s spiritual and physical messaging. We introduced cut & sewn garments and fine jewelry to challenge the connotation that “merch” has as being a cheaply produced cash-grab. Understanding that the intent could be misread, we developed imagery, messaging, and graphics to give context to the boundaries which we were testing.",
            slug: "elevated-goods",
            link: "",
            background: "#F3F3F3"
        },
        {
            title: "\"Head IN THE CLOUDS\" MUSIC VIDEO PRODUCTION",
            artist: "HAYD",
            image: haydCover,
            description: "Solace produced the “Head in the Clouds” music video with Hayd. The entirety of the video was shot on Kodak film",
            slug: "head-in-the-clouds",
            link: "https://www.youtube.com/watch?v=-uFQzcY7YHc&t=1s",
            background: "#B2C7C4"
        },
        {
            title: "\"HOLDING ON\" MUSIC VIDEO PRODUCTION",
            artist: "IAN DIORR",
            image: holdingon,
            description: "Solace produced the “Holding On” music video with iann dior",
            slug: "holding-on",
            link: "https://www.youtube.com/watch?v=BMmUkrUehrM&t=2s",
            background: "#881F12"
        },
        {
            title: "\"23\" MUSIC VIDEO PRODUCTION",
            artist: "JAKE PAUL",
            image: jakepaul,
            description: "Solace produced Jake Paul’s “23” music video.",
            slug: "23",
            link: "https://www.youtube.com/watch?v=53vz5pQH0Rg",
            background: "#CD5C39"
        },
        {
            title: "\"MAFIATHON\" SHORT-FORM VIDEO PRODUCTION",
            artist: "KAI CENAT",
            image: kaicenat,
            description: "Solace produced a short-form promotional video for Kai Cenat's 30 Days of Streaming. The video has amassed 7.3M+ views across social platforms. It garnered record engagement, leading up to Kai surpassing Twitch’s #1 most subscribed-to streamer of all time.",
            slug: "mafiathon",
            link: "https://www.youtube.com/watch?v=6rtCZySsXiA",
            background: "#4DA8DA"
        },
        {
            title: "MICRO-VISUALIZERS FOR ILYFSL ALBUM ROLLOUT",
            artist: "THE ACES",
            image: acesCover,
            description: "nstead of a music video, we produced a series of 19 vignettes, weaving through a handful of tracks off of The Aces upcoming album. The vignettes are being incrementally released throughout the album rollout. We massively amplified The Aces ability to tell the story of their album by producing for short-form content - this allowed for the creative to span across multiple songs and touch upon an array of emotions.",
            slug: "micro-visualizers",
            link: "",
            background: "#0B1B28"
        },
        {
            title: "SPOTIFY RADAR PRESENTS: THE KID LAROI PRODUCTION",
            artist: "SPOTIFY, THE KID LAROI",
            image: kidlaroi,
            description: "Solace produced a Spotify RADAR episode featuring The Kid LAROI.",
            slug: "spotify",
            link: "https://www.youtube.com/watch?v=__pV0V7ogKo&t=4s",
            background: "#08DA73"
        },
        {
            title: "\"NELLY FURTADO\" MUSIC VIDEO PRODUCTION",
            artist: "STRICK",
            image: strickCover,
            description: "Solace produced the “Nelly Furtado” music video with Strick. The video was shot in Los Angeles, CA.",
            slug: "nelly-furtado",
            link: "https://www.youtube.com/watch?v=xjvxO9FZnfE",
            background: "#141C25"
        },
        {
            title: "\"GIRLS MAKE ME WANNA DIE\" MUSIC VIDEO PRODUCTION",
            artist: "THE ACES",
            image: vignettesCover,
            description: "Solace produced the “Girls Make Me Wanna Die” music video for The Aces. We shot the entirety of the video on Kodak 16mm film - the garage band performance scenes were shot with 7219 uncorrected for a colder, dirtier look, while the narrative was given contrast by shooting 7213 W/ 81EF for a warmer, less grainy feel. Shoutout our DP, Gary Long, for translating the energy of the song through these visual choices.",
            slug: "the-aces-vignettes",
            link: "https://www.youtube.com/watch?v=6FlnXDIbmXA&t=1s",
            background: "91A7A5"
        },
    ]

    return (
        <div className="bg-[#F3F3F3]">
            {open && <NavOverlay/>}
            <CreativeBanner logo={logo}/>
            <CreativePortfolio projects={projects} />
            <Footer />
        </div>
    )
}

export default CreativeAgency