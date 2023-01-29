import React from 'react'
import { useState } from 'react'
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';



const Input = ({ type = 'text', placeholder, value, onChange, error }) => {

    const [show, setShow] = useState(true)
    const handleShowHide = e => {
        setShow(!show);
    };

    if (type == 'password') {
        return (
            <div style={{ position: 'relative' }}>
                <input validity='password' name='text' className={`inputComp ${error ? "inputError" : ""}`}
                    type={show ? 'password' : type = 'text'}
                    placeholder='Password' id='psw' value={value} onChange={(e) => { onChange(type === "checkBox" ? e.target.checkBox : e.target.value) }}
                />
                <div className='iconPos' style={{ position: 'absolute' }} onClick={() => setShow(!show)}>
                    {show ? (
                        <BsFillEyeFill />
                    ) : (
                        <BsFillEyeSlashFill />
                    )}
                </div>
            </div>
        )


    }
    return (<>
        <input value={value} onChange={(e) => { onChange(e.target.value) }}
            className={`inputComp ${error ? "inputError" : ""}`} type={type} placeholder={placeholder} />
        {error && <span className='invalidError' >*Invalid Error</span>}
    </>
    )


}

export default Input
