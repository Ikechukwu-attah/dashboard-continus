import { useState, useEffect } from "react";


export const useDropDown = (selector) => {

    const [showDropDown, setShowDropDown] = useState(false);
    useEffect(() => {
        document.addEventListener("click", (event) => {

            const flyOutElelment = document.querySelector(selector);
            let targetElelment = event.target

            do {
                if (targetElelment == flyOutElelment) {
                    return
                }


                targetElelment = targetElelment.parentNode

            } while (targetElelment)

        
            setShowDropDown(false)
        })
    }, [])

    return [showDropDown, setShowDropDown]
}