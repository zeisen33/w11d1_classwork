import { useState } from "react";

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [phoneType, setPhoneType] = useState('');
    const [role, setRole] = useState();
    const [bio, setBio] = useState('');
    const [notifications, setNotifications] = useState("false");
    const [errors, setErrors] = useState([]);
    const [user, setUser] = useState({
        name,
        email,
        phone,
        phoneType,
        role,
        bio,
        notifications
    })

    const handleChange = (field) => {
        // const userInfo = {
        //     name,
        //     email,
        //     phone,
        //     phoneType,
        //     role,
        //     bio,
        //     notifications
        // }

        return (e) => {
            const val = e.target.value
            // debugger
            // e.preventDefault()  // With this, needs two clicks to display change. wonky
            // setName(e.target.value);
            setUser({
                ...user,
                [field]: val
            })
        }
    }

    const handleSubmit = (e) => {
        const newErrors = validate();
        e.preventDefault();
        // console.log(errors)
        setErrors(newErrors)
        if (newErrors.length === 0) {
            console.log(user);
        } else {
            console.log(newErrors);
        }
    }

    const validate = () => {
        const currentErrors = [];
        if (user.name === '') {
            currentErrors.push('Name cannot be blank!')
        }
        if (user.email === '') {
            currentErrors.push('Email cannot be blank!')
        }
        if (!user.email.includes('@')) {
            currentErrors.push('Email improperly formatted!')
        }
        if (!user.email.includes('.')) {
            currentErrors.push('Email improperly formatted!')
        }

        const phoneSplits = user.phone.split('-')

        if ((phoneSplits[0].length !== 3 || 
            phoneSplits[1].length !== 3 ||
            phoneSplits[2].length !== 4) && 
            (user.phone.length !== 0)) {
                currentErrors.push('Phone number must be formatted in xxx-xxx-xxxx format!')
        }

        return currentErrors
    }

    const errorsMap = 
        errors.map(error => {
            console.log(error);
            return <li>{error}</li>
        });

    return (
        <div className='formContainer'>
            <ul>
                {errorsMap}
            </ul>
            <form onSubmit={handleSubmit} >
                <label>
                    Name
                    <input type='text' value={user.name} onChange={handleChange('name')}/>
                </label>
                <label>
                    Email
                    <input type='email' value={user.email} onChange={handleChange('email')}/>
                </label>
                <label>
                    Phone Number
                    <input type='tel' value={user.phone} onChange={handleChange('phone')}/>
                </label>
                <label>
                    Phone Type
                    <select onChange={handleChange('phoneType')}>
                        <option disabled selected>--Please Select One--</option>
                        <option value='home'>Home</option>
                        <option value='work'>Work</option>
                        <option value='mobile'>Mobile</option>
                    </select>
                </label>
                <label>
                    Instructor
                    <input type='radio' name='role' value='instructor' onChange={handleChange('role')} />
                </label>
                <label>
                    Student
                    <input type='radio' name='role' value='student' onChange={handleChange('role')} />
                </label>
                <label>
                    Bio
                    <textarea value={user.bio} onChange={handleChange('bio')} />
                </label>
                <label>    
                    Sign up for email notifications
                    <input type="checkbox" value={user.notifications === "true" ? false : true} onChange={handleChange('notifications')} />


                    {/* <input type='checkbox' onChange={(e) => {
                        // e.preventDefault();
                        user.notifications=(!user.notifications)
                    }} /> */}
                </label>
                <input type='submit' value='Submit' />
            </form>
        </div>
    )
}

export default Form