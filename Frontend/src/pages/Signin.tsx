import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { useRef } from  "react";
import { BACKEND_URL } from '../config'
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Signin() {
    const navigate = useNavigate();
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    async function signin(){
        const Username = usernameRef.current?.value;
        const Password = passwordRef.current?.value;

        try{
            const respone = await axios.post(`${BACKEND_URL}/api/v1/signin`, {
                    username: Username,
                    password: Password
                
            });
            const jwt = respone.data.token;
            localStorage.setItem("token", jwt);
            alert("You Have Signed in!");
            navigate("/dashboard");
        }
        catch(err){
            alert(err);
        }
    }

    
        
    return (
        <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
            <div className="bg-white rounded-xl border min-w-48 p-8 ">
                <Input ref={usernameRef} placeholder="Username" />
                <Input ref={passwordRef} placeholder="Password" />
                <div className="flex justify-center pt-4 pb-4">
                    <Button onClick={signin} varient="primary" text="Signin" fullWidth={true} loading={false}/>
                </div>
            </div>


        </div>
    )
}