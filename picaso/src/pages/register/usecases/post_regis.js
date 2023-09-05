import { useState, useEffect } from "react";
import Axios from "axios";

export default function SectionPostRegis() {
    //Initial variable
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPass] = useState("");
    const [password_confirmation, setPassConf] = useState("");
    const [username, setUsername] = useState("");

    const [emailMsg, setEmailMsg] = useState("");
    const [nameMsg, setNameMsg] = useState("");
    const [passwordMsg, setPassMsg] = useState("");
    const [passwordConfMsg, setPassConfMsg] = useState("");
    const [usernameMsg, setUsernameMsg] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await Axios.post("https://api-project.amandemy.co.id/api/register", {
                email,
                name,
                password,
                password_confirmation,
                username
            });
        } catch (err) {
            setEmailMsg(err.response.data.data.errors.email)
            setUsernameMsg(err.response.data.data.errors.username)
            setNameMsg(err.response.data.data.errors.name)
            setPassMsg(err.response.data.data.errors.password)
            setPassConfMsg(err.response.data.data.errors.password_confirmation)
        }
    };

    return (
        <section className="landing-box">
            <h1>Register Form</h1>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className="form-input w-full my-2" placeholder="ex : jhondoe@gmail.com" onChange={(e) => setEmail(e.target.value)} required></input>
            {
                emailMsg != "" ?
                <p className="error-msg"><i class="fa-solid fa-triangle-exclamation"></i> {emailMsg}</p> :
                ""
            }

            <label htmlFor="uname">Username</label>
            <input type="text" id="uname" className="form-input w-full my-2" placeholder="ex : jhondoe" onChange={(e) => setUsername(e.target.value)} required></input>
            {
                usernameMsg != "" ?
                <p className="error-msg"><i class="fa-solid fa-triangle-exclamation"></i> {emailMsg}</p> :
                ""
            }

            <label htmlFor="nama">Nama</label>
            <input type="text" id="nama" className="form-input w-full my-2" placeholder="ex : Jhon Doe" onChange={(e) => setName(e.target.value)} required></input>
            {
                nameMsg != "" ?
                <p className="error-msg"><i class="fa-solid fa-triangle-exclamation"></i> {emailMsg}</p> :
                ""
            }

            <label htmlFor="pass">Password</label>
            <input type="password" id="pass" className="form-input w-full my-2" onChange={(e) => setPass(e.target.value)} required></input>
            {
                passwordMsg != "" ?
                <p className="error-msg"><i class="fa-solid fa-triangle-exclamation"></i> {passwordMsg}</p> :
                ""
            }

            <label htmlFor="passconf">Konfirmasi Password</label>
            <input type="password" id="passconf" className="form-input w-full my-2" onChange={(e) => setPassConf(e.target.value)} required></input>
            {
                passwordConfMsg != "" ?
                <p className="error-msg"><i class="fa-solid fa-triangle-exclamation"></i> {passwordConfMsg}</p> :
                ""
            }
            <button className="btn-submit px-3 py-2" onClick={handleSubmit}>Register</button>
        </section>
    )
}