import "./style.css"
import { Button } from "react-bootstrap";
import { useState } from "react";

function ApiForm() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setrollNo] = useState("")
    const [message, setSection] = useState("")

    function FormHandle(e) {
        e.preventDefault();
    }

    function saveData() {
        // console.warn({name,email,rollNo,section})
        //name,email,rollNo,section
        const data = { name, email, subject, message };

        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((result) => {
            //console.warn("this is result:",result)
            result.json().then((resp) => {
                console.warn("Response", resp)
            })
        })
    }

    return (
        <div className="contactForm-holder">
            <form onSubmit={FormHandle} className="simpleForm">
                <div className="field-group">
                    <label for="name">Name</label>
                    <input type="text" placeholder="Enter Your Name" value={name} onChange={(e) => { setName(e.target.value) }} name="name" />
                </div>
                <div className="field-group">
                    <label for="email">Email</label>
                    <input type="text" placeholder="Enter Your Email" value={email} onChange={(e) => { setEmail(e.target.value) }} name="email" />
                </div>
                <div className="field-group">
                    <label for="subject">Subject</label>
                    <input type="text" placeholder="Enter Your RollNo" value={subject} onChange={(e) => { setrollNo(e.target.value) }} name="subject" />
                </div>
                <div className="field-group">
                    <label for="message">Message</label>
                    <textarea type="text" placeholder="Enter Your Section" value={message} onChange={(e) => { setSection(e.target.value) }} name="message" ></textarea>
                </div>
                <div className="field-group">
                    <Button className="formBtn" type="submit" onClick={saveData}>Submit</Button>
                </div>
            </form>
        </div>
    );
}

export default ApiForm;