import React from "react";
import{useState} from "react";
import { AuthService } from "../appwrite/auth";
import { useNavigate,Link } from "react-router-dom";
import { Login } from "../components/Login";
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
function Signup(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [error,setError] = useState("");
    const [register,handleSubmit] = useForm();
    const create = async(data) =>{
        setError("");
        try{
            
        }
        catch(error){
            setError(error.message);
        }
    }
}
export default Signup;