import axios from 'axios';

export function getCalenderbyPinCode (callback, formData, currentPage) {
    axios.post(`http://35.154.50.216:8080/dcmhackathonapp/api/findCalenderOfCenterWithPinCode`, formData)
    .then(response => {
        callback(response)
    })
    .catch(error => {
        console.log(error)
    })
}   

export function getStates (callback, formData, currentPage) {
    axios.post(`http://35.154.50.216:8080/dcmhackathonapp/api/getState`, formData)
    .then(response => {
        callback(response)
    })
    .catch(error => {
        console.log(error)
    })
}  

export function getDistricts (callback, formData, currentPage) {
    axios.post(`http://35.154.50.216:8080/dcmhackathonapp/api/getDistricts`, formData)
    .then(response => {
        callback(response)
    })
    .catch(error => {
        console.log(error)
    })
}  

export function getAnalytics (callback) {
    let date = new Date().toJSON().slice(0,10);
    axios.get(`https://api.cowin.gov.in/api/v1/reports/v2/getPublicReports?state_id=&district_id=&date=${date}`)
    .then(response => {
        callback(response)
    })
    .catch(error => {
        console.log(error)
    })
} 

export function findCalenderOfCenterWithDistrict (callback,formData) {
    axios.post(`http://35.154.50.216:8080/dcmhackathonapp/api/findCalenderOfCenterWithDistrict`,formData)
    .then(response => {
        callback(response)
    })
    .catch(error => {
        console.log(error)
    })
} 


export function generateOTP (callback, formData) {
    axios.post(`http://35.154.50.216:8080/dcmhackathonapp/api/generateOTP`, formData)
    .then(response => {
        callback(response)
    })
    .catch(error => {
        console.log(error)
    })
}  


export function confirmOTP (callback, formData) {
    axios.post(`http://35.154.50.216:8080/dcmhackathonapp/api/confirmOTP`, formData)
    .then(response => {
        callback(response)
    })
    .catch(error => {
        console.log(error)
    })
}  


export function beneficiaryIdTypes (callback) {
    axios.post(`http://35.154.50.216:8080/dcmhackathonapp/api/beneficiaryIdTypes`, {})
    .then(response => {
        callback(response)
    })
    .catch(error => {
        console.log(error)
    })
}   


export function addBeneficiary (callback, formData) {
    axios.post(`http://35.154.50.216:8080/dcmhackathonapp/api/addBeneficiary`, formData)
    .then(response => {
        callback(response)
    })
    .catch(error => {
        console.log(error)
    })
}  
