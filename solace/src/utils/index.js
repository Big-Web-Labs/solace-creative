import {quotes} from '../constants'

export const getRandomQuote = () => {
    return quotes[Math.floor(Math.random() * quotes.length)]
}