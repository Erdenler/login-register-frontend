import React from 'react'
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';


const Eye = () => {
    const visibilityBtn = { BsFillEyeFill, BsFillEyeSlashFill }("visibilityBtn")
    visibilityBtn.addEventListener("click", toggleVisibility)

    function toggleVisibility() {
        const passwordInput = document.getElementById("psw")
        if (passwordInput.type === "password") {
            passwordInput.type = "text"
        }
        else {
            passwordInput.type = "password"
        }

    }
    return (
        <div>

        </div>
    )
}

export default Eye
