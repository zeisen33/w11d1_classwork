import { useState } from "react";

const Form = () => {
    return (
        <div className='formContainer'>
            <form>
                <label>
                    Name
                    <input type='text'>

                    </input>
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
                        <option> </option>
                        <option> </option>
                        <option> </option>
                    </select>
                </label>

            </form>
        </div>
    )
}

export default Form