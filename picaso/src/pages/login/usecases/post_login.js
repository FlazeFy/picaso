import { useState, useEffect } from "react";
import Axios from "axios";
import { storeLocal } from "../../../modules/helpers/storage";

export default function SectionPostLogin() {
    //Initial variable
    const [password, setPass] = useState("");
    const [email, setEmail] = useState("");
    const [passwordMsg, setPassMsg] = useState("");
    const [emailMsg, setEmailMsg] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await Axios.post("https://api-project.amandemy.co.id/api/login", {
                email,
                password
            });

            if(response.data.status != 200){
                return response.data.message
            } else {
                const token = response.data.data.token
                storeLocal("token_key",token)
                return ""
            }
        } catch (err) {
            setEmailMsg(err.response.data.data.errors.email)
            setPassMsg(err.response.data.data.errors.password)
        }
    };

    return (
        <section className="landing-box">
            <h1>Login Form</h1>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className="form-input w-full my-2" placeholder="ex : jhondoe@gmail.com" onChange={(e) => setEmail(e.target.value)} required></input>
            {
                emailMsg != "" ?
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
            <button className="btn-submit px-3 py-2" onClick={handleSubmit}>Login</button>
        </section>
    )
}