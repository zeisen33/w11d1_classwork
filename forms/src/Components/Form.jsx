import { useState } from "react";

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [phoneType, setPhoneType] = useState('');
    const [role, setRole] = useState();
    const [bio, setBio] = useState('');
    const [notifications, setNotifications] = useState(false);
    const [user, setUser] = useState({})

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
                    <input type='text' value={name} onChange={handleChange('name')}/>
                </label>
                <label>
                    Email
                    <input type='email' value={email}/>
                </label>
                <label>
                    Phone Number
                    <input type='tel' value={phone}/>
                </label>
                <label>
                    Phone Type
                    <select>
                        <option disabled selected>--Please Select One--</option>
                        <option value='home'>Home</option>
                        <option value='work'>Work</option>
                        <option value='mobile'>Mobile</option>
                    </select>
                </label>
                <label>
                    Instructor
                    <input type='radio' name='role' value='instructor' />
                </label>
                <label>
                    Student
                    <input type='radio' name='role' value='student' />
                </label>
                <label>
                    Bio
                    <textarea>
                        {bio}
                    </textarea>
                </label>
                <label>    
                    Sign up for email notifications
                    <input type='checkbox' value='true'/>
                </label>
            </form>
        </div>
    )
}

export default Form