import axios from 'axios'
import React, { useState } from 'react'

const ADMIN_ADD_FACILITY_URL = '/admin/auth/add-facility'

const Facilities = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const formSubmitHandler = (e) => {
        e.preventDefault();
        let data = { title, description }
        axios.post(process.env.REACT_APP_DEPT_API + ADMIN_ADD_FACILITY_URL, data).then(() => {
            setTitle('')
            setDescription('')
            alert("Added successfully")
        }).catch(err => {
            alert(err.message)
        })
    }
    return (
        <div>
            <h2>Add new Facility</h2>
            <form onSubmit={formSubmitHandler}>
                <div>
                    <p>Title</p>
                    <input type="text" placeholder='title' onChange={e => setTitle(e.target.value)} value={title} />
                </div>
                <div>
                    <p>Description</p>
                    <textarea placeholder='description' onChange={e => setDescription(e.target.value)} value={description} />
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Facilities