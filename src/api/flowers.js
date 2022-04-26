import apiUrl from '../apiConfig'
import axios from 'axios'

// index function
export const getAllFlowers = () => {
    return axios(`${apiUrl}/flowers`)
}