import { useState } from "react";

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [phoneType, setPhoneType] = useState('');
    const [role, setRole] = useState();
    const [bio, setBio] = useState('');
    const [notifications, setNotifications] = useState(false);
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
            e.preventDefault()
            // setName(e.target.value);
            setUser({
                ...user,
                [field]: val
            })
        }
    }

    return (
        <div className='formContainer'>
            <form>
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
                    <textarea value={bio} onChange={handleChange('bio')}>
                        {bio}
                    </textarea>
                </label>
                <label>    
                    Sign up for email notifications
                    <input type='checkbox' onChange={(e) => {
                        e.preventDefault();
                        user.notifications=(!user.notifications)
                    }} />
                </label>
            </form>
        </div>
    )
}

export default Form