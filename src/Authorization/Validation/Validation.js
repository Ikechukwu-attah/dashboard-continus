import React from 'react'

const validation = (values) => {

    let checkErrors = {};


    if (!values.firstname) {
        checkErrors.firstname = "Firstname is required"
    }

    if (!values.lastname) {
        checkErrors.firstname = "Lastname is required"
    }

    if (!values.company_id) {
        checkErrors.company_id = "Client code  is required"
    }

    if (!values.phone) {
        checkErrors.phone = "Phone number  is required"
    }

    if (!values.email) {
        checkErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        checkErrors.email = "Email is invalid"
    }

    if (!values.password) {
        checkErrors.password = "Password is required"
    } else if (values.password.length < 5) {
        checkErrors.password = "Password must be more than 5 characters"
    }






    return checkErrors


}

export default validation