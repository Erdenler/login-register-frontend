import React, { useState } from 'react'
import Input from './Input'
import { Link } from 'react-router-dom'
import { TbCircleCheck } from 'react-icons/tb'


const Register = () => {

    const onSubmit = () => {
        setName((prev) => {
            return { ...prev, touched: true }
        })
        setCompanyName((prev) => {
            return { ...prev, touched: true }
        })
        setMobileNumber((prev) => {
            return { ...prev, touched: true }
        })
        setEmail((prev) => {
            return { ...prev, touched: true }
        })
        setPassword((prev) => {
            return { ...prev, touched: true }
        })
        setCheckBox((prev) => {
            return { ...prev, touched: true }
        })
        const isValid = Object.values(validation).reduce((prev, current) => {
            return [...prev, Object.values(current)]
        }, []).flat().every((value) => {
            return value === true
        });

        console.log("isValid", isValid)
        if (isValid) {
            alert(
                `
                     Fullname:      ${name.value}
                     Company Name:  ${companyName.value}
                     Mobile Number: ${mobileNumber.value}
                     Email:         ${email.value}
                     Password:      ${password.value}`)
            localStorage.setItem("Username", email.value)
            localStorage.setItem("Password", password.value)
        }
        else {
            alert("Invalid Input")
        }
    }

    const [checkBox, setCheckBox] = useState({ touched: false, value: false })
    const [companyName, setCompanyName] = useState({ value: "", touched: false })
    const [mobileNumber, setMobileNumber] = useState({ value: "", touched: false })
    const [email, setEmail] = useState({ value: "", touched: false })
    const [password, setPassword] = useState({ value: "", touched: false })
    const [name, setName] = useState({ value: "", touched: false });
    const validation = {
        name: {
            length: name.value.length > 0,
        },
        mobileNumber: {
            length: mobileNumber.value.length > 0,
            number: mobileNumber.value.match(/[0-9]/) == null ? false : true
        },
        email: {
            length: email.value.length > 0,
        },
        companyName: {
            length: companyName.value.length > 0,
        },
        checkBox: {
            checked: checkBox.value
        },
        password: {
            lowercase: password.value.match(/[a-z]/) == null ? false : true,
            uppercase: password.value.match(/[A-Z]/) == null ? false : true,
            number: password.value.match(/[0-9]/) == null ? false : true,
            length: password.value.length >= 8
        }

    };
    console.log(validation)

    return (
        <>

            <div className='Register'>
                < div className='left-r' >
                    <h1>Sign up</h1>
                    <form onSubmit={(e) => { e.preventDefault() }}>
                        <label>Fullname</label>
                        <Input placeholder='Fullname' onChange={(value) => { setName({ touched: true, value: value }) }} value={name.value} error={name.touched && !validation.name.length} />
                        <label>Company Name</label>
                        <Input placeholder='Company Name' onChange={(value) => { setCompanyName({ touched: true, value: value }) }} value={companyName.value}
                            error={companyName.touched && !validation.companyName.length} />
                        <label>Mobile Number</label>
                        <Input placeholder='Mobile Number' onChange={(value) => { setMobileNumber({ touched: true, value: value }) }} value={mobileNumber.value}
                            error={mobileNumber.touched && (!validation.mobileNumber.length || !validation.mobileNumber.number)} />
                        <label>Email </label>
                        <Input placeholder='email' onChange={(value) => { setEmail({ touched: true, value: value }) }} value={email.value}
                            error={email.touched && !validation.email.length} />
                        <label>Password </label>
                        <Input type='password' placeholder='Password' onChange={(value) => { setPassword({ touched: true, value: value }) }}
                            error={password.touched && (!validation.password.length
                                || !validation.password.number
                                || !validation.password.lowercase
                                || !validation.password.uppercase)} />
                        <div className="left-r-passwordBot">
                            <div className='validation-container'>
                                <span
                                    style={{
                                        color: !validation.password.length ? "red" : "green"
                                    }}
                                >
                                    {<TbCircleCheck className='tick' />}
                                </span>
                                <p>Minimum 8 Charachters</p>
                            </div>
                            <div className='validation-container'>
                                <span
                                    style={{
                                        color: !validation.password.number ? "red" : "green"
                                    }}
                                >
                                    {<TbCircleCheck className='tick' />}
                                </span>
                                <p>One Number</p>
                            </div>
                            <div className='validation-container'>
                                <span
                                    style={{
                                        color: !validation.password.lowercase ? "red" : "green"
                                    }}
                                >
                                    {<TbCircleCheck className='tick' />}
                                </span>
                                <p>One Lower Case</p>
                            </div>
                            <div className='validation-container'>
                                <span
                                    style={{
                                        color: !validation.password.uppercase ? "red" : "green"
                                    }}
                                >
                                    {<TbCircleCheck className='tick' />}
                                </span>
                                <p>One Upper Case</p>
                            </div>
                        </div>

                        <label className={`checklabel  ${checkBox.touched && !validation.checkBox.checked ? 'checklabel-error' : ''}`} htmlFor='tapping'  >
                            I agree to the terms and conditions
                            <input checked={checkBox.checked} className="Checkbox" type='checkbox' id='tapping' name='tapping' onChange={(e) => {
                                setCheckBox({
                                    touched: true,
                                    value: e.target.checked
                                })
                            }} />
                        </label>
                        <button onClick={onSubmit}> Sign Up</button>
                        <div className='div1'>
                            <h5> Already have an OTO account yet? <s></s>  <s></s>
                                <Link className='link' to={`/`}>  Sign in</Link> </h5>
                        </div>
                    </form>


                </div >
                <img src='/assets/login-img.png' />
            </div >


        </>
    )

}

export default Register

