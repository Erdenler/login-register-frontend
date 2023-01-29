import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Input from './Input'




const Login = () => {

    const [checkBox, setCheckBox] = useState(false)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    useEffect(() => {
        if (checkBox) {
            const savedUsername = localStorage.getItem("Username")
            const savedPassword = localStorage.getItem("Password")
            if (savedUsername && savedPassword) {
                setUsername(savedUsername)
                setPassword(savedPassword)
            }
        }
    }, [checkBox])


    return (
        <div className='Login'>
            <div className='left-side'>
                <h1>Sign in</h1>
                <form>
                    <label>Username</label>
                    <Input placeholder='Username' value={username} onChange={(value) => setUsername(value)} />
                    <label>Password</label>

                    <Input type='password' placeholder='Password' value={password} onChange={(value) => setPassword(value)} />

                    <label className='checklabel' htmlFor='tapping'>
                        Remember me
                        <input checked={checkBox} className="Checkbox" type='checkbox' id='tapping' name='tapping' onChange={(e) => setCheckBox(e.target.checked)
                        } />
                    </label>
                    <button>Sign in</button>

                </form>
                <br></br>
                <div className='div1'><h5> Do you have an OTO account yet? <s></s>
                    <Link className='link' to={`/register`}>Sign up</Link>
                </h5>

                </div>
            </div>

            <img src='/assets/login-img.png' />

        </div>
    )

}

export default Login
