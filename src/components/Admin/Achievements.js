import axios from 'axios'
import React, { useState } from 'react'

const ADMIN_ADD_ACHIEVEMENT_URL = '/admin/auth/add-achievement'

const Achievements = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const formSubmitHandler = (e) => {
        e.preventDefault();
        const date_published = new Date().toLocaleDateString('en-us', { year: "numeric", month: "short", day: 'numeric' }).replace(',', '')
        let data = { title, description, date_published }
        axios.post(process.env.REACT_APP_DEPT_API + ADMIN_ADD_ACHIEVEMENT_URL, data).then(() => {
            setTitle('')
            setDescription('')
            alert("Added successfully")
        }).catch(err => {
            alert(err.message)
        })
    }
    return (
        <div>
            <h2>Add new achievement</h2>
            <form onSubmit={formSubmitHandler}>
                <div>
                    <p>Title</p>
                    <input type="text" placeholder='title' onChange={e => setTitle(e.target.value)} value={title} />
                </div>
                <div>
                    <p>Description</p>
                    <label>
                        <textarea name="description" placeholder='description' onChange={e => setDescription(e.target.value)} value={description} />
                    </label>
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Achievements