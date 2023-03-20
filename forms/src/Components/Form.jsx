import { useState } from "react";

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [phoneType, setPhoneType] = useState();
    const [role, setRole] = useState();
    const [bio, setBio] = useState('');
    const [notifications, setNotifications] = useState();


    return (
        <div className='formContainer'>
            <form>
                <label>
                    Name
                    <input type='text' />
                </label>
                <label>
                    Email
                    <input type='email'>
                        
                    </input>
                </label>
                <label>
                    Phone Number
                    <input type='tel'>
                        
                    </input>
                </label>
                <label>
                    Phone Type
                    <select>
                        <option>Home</option>
                        <option>Work</option>
                        <option>Mobile</option>
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
                        
                    </textarea>
                </label>
                <label>    
                    Sign up for email notifications
                    <input type='checkbox' />
                </label>
            </form>
        </div>
    )
}

export default Form