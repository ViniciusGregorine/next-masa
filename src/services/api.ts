import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3456/'
})

export const getPlace= async() => {
    try {
     const {data}  = await axios.get<apiResponse>('http://localhost:3456/place')
     console.log(data.message)
     return data.message
    } catch (error) {
        // make something with error
         console.error(error)
    }
  }

type apiResponse <T = any> = {
    status: number
    message: T
}