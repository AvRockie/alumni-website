import axios from 'axios'
import React, { useState } from 'react'
const URL = "https://project-goat.herokuapp.com/api/add-club"

const Clubs = () => {
    const [name, setName] = useState('')
    const [logo, setLogo] = useState('')
    const [description, setDescription] = useState('')
    const [faculty_in_charge, setFacultyInCharge] = useState('')
    const [faculty_email, setFacultyEmail] = useState('')
    const [student_in_charge, setStudentInCharge] = useState('')
    const [student_designation, setStudentDesignation] = useState('')
    const [student_email, setStudentEmail] = useState('')
    const [website, setWebsite] = useState('')
    const [social_media_handles, setSocials] = useState([])
    const [contact_email, setContactEmail] = useState('')

    const [sm_insta, setInsta] = useState('')
    const [sm_linkedin, setLinkedin] = useState('')
    const [sm_youtube, setYoutube] = useState('')
    const [sm_twitter, setTwitter] = useState('')
    const [sm_medium, setMedium] = useState('')
    const [sm_discord, setDiscord] = useState('')
    const smHandler = () => {
        setSocials([
            {
                title: "Instagram",
                link: sm_insta
            },
            {
                title: "Linkedin",
                link: sm_linkedin
            },
            {
                title: "Youtube",
                link: sm_youtube
            },
            {
                title: "Twitter",
                link: sm_twitter
            },
            {
                title: "Medium",
                link: sm_medium
            },
            {
                title: "Discord",
                link: sm_discord
            },
        ])
    }

    const imageUploadHandler = (e) => {
        setLogo(e.target.files[0])
    }

    const formSubmitHandler = (e) => {
        e.preventDefault()
        smHandler();
        const formData = new FormData()
        let data = { name, description, contact_email, faculty_in_charge, faculty_email, student_in_charge, student_designation, student_email, social_media_handles, website }
        for (let key in data) {
            formData.append(key, data[key])
        }
        formData.append('logo', logo)
        // console.log(formData)
        // console.log(data)
        axios.post(URL, formData).then(() => {
            alert("Added successfully")
        }).catch(err => {
            alert(err.message)
        })
    }
    return (
        <div>
            <h2>Add new Club</h2>
            <form onSubmit={formSubmitHandler} encType='multipart/form-data'>
                <div>
                    <p>Name of club</p>
                    <label>
                        <input
                            type="text"
                            placeholder='name'
                            name="name"
                            onChange={e => setName(e.target.value)}
                            value={name}
                            required
                        />
                    </label>
                </div>
                <div>
                    <p>Description</p>
                    <label>
                        <textarea
                            placeholder='description'
                            onChange={e => setDescription(e.target.value)} value={description}
                            required
                        />
                    </label>
                </div>
                <div>
                    <p>Club Contact Email</p>
                    <label>
                        <input
                            type="email"
                            placeholder='club email'
                            name='email'
                            onChange={e => setContactEmail(e.target.value)}
                            value={contact_email}
                            required
                        />
                    </label>
                </div>
                <div>
                    <p>Name of Faculty in charge</p>
                    <label>
                        <input
                            type="text"
                            placeholder='faculty advisor name'
                            name='faculty_in_charge'
                            onChange={e => setFacultyInCharge(e.target.value)}
                            value={faculty_in_charge}
                            required
                        />
                    </label>
                </div>
                <div>
                    <p>Email of Faculty in charge</p>
                    <label>
                        <input
                            type="email"
                            placeholder='faculty advisor email'
                            name='faculty_email'
                            onChange={e => setFacultyEmail(e.target.value)}
                            value={faculty_email}
                            required
                        />
                    </label>
                </div>
                <div>
                    <p>Name of Student in charge</p>
                    <label>
                        <input
                            type="text"
                            placeholder='student head name'
                            name='student_name'
                            onChange={e => setStudentInCharge(e.target.value)}
                            value={student_in_charge}
                            required
                        />
                    </label>
                </div>
                <div>
                    <p>Designation of Student in charge</p>
                    {/* !!!------ Convert to Option select menu */}
                    <label>
                        <input
                            type="text"
                            placeholder='student head designation'
                            name='student_designation'
                            onChange={e => setStudentDesignation(e.target.value)}
                            value={student_designation}
                            required
                        />
                    </label>
                </div>
                <div>
                    <p>Email of Student in charge</p>
                    <label>
                        <input
                            type="email"
                            placeholder='student head email'
                            name='student_email'
                            onChange={e => setStudentEmail(e.target.value)}
                            value={student_email}
                            required
                        />
                    </label>
                </div>
                <div>
                    <p>Club website, if available</p>
                    <label>
                        <input
                            type="url"
                            placeholder='website link'
                            name='website'
                            onChange={e => setWebsite(e.target.value)}
                            value={website}
                        />
                    </label>
                </div>
                <div>
                    <p>Logo Image</p>
                    <label>
                        <input type="file" name="logo" autoComplete='off' onChange={imageUploadHandler} />
                    </label>
                </div>

                <div>
                    <h3>Social Media Handles, If available</h3>
                    {/* // !!! BUGGY CODE, REFACTOR !!!  */}
                    <label>
                        <input
                            type="url"
                            placeholder='Instagram'
                            value={sm_insta}
                            onChange={e => { setInsta(e.target.value); smHandler(); }}
                        />
                    </label>
                    <label>
                        <input
                            type="url"
                            placeholder='LinkedIn'
                            value={sm_linkedin}
                            onChange={e => { setLinkedin(e.target.value); smHandler(); }}
                        />
                    </label>
                    <label>
                        <input
                            type="url"
                            placeholder='Youtube'
                            value={sm_youtube}
                            onChange={e => { setYoutube(e.target.value); smHandler(); }}
                        />
                    </label>
                    <label>
                        <input
                            type="url"
                            placeholder='Twitter'
                            value={sm_twitter}
                            onChange={e => { setTwitter(e.target.value); smHandler(); }}
                        />
                    </label>
                    <label>
                        <input
                            type="url"
                            placeholder='Medium'
                            value={sm_medium}
                            onChange={e => { setMedium(e.target.value); smHandler(); }}
                        />
                    </label>
                    <label>
                        <input
                            type="url"
                            placeholder='Discord'
                            value={sm_discord}
                            onChange={e => { setDiscord(e.target.value); smHandler(); }}
                        />
                    </label>
                    <button onClick={smHandler} type="button">ADD SM Handles</button>
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}
export default Clubs