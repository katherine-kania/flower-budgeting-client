import apiUrl from '../apiConfig'
import axios from 'axios'

// POST -> add order to submit

export const submitInquiry = (user, newInquiry) => {
    console.log('user', user)
    console.log('this is newInquiry', newInquiry)
    return axios({
        url: apiUrl + `orders/inquiry/submit/`,
        method: 'POST',
        headers: {
            Authorization: `Token ${user.token}`
        },
        data: {
                first_name: newInquiry.first_name,
                last_name: newInquiry.last_name,
                phone_number: newInquiry.phone_number,
                email: newInquiry.email,
                comment: newInquiry.comment,
                order: newInquiry.order,
                est_price: newInquiry.est_price,
        }    
    })
} 