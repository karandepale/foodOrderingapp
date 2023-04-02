import React, { useState , createContext  } from "react";
import "./Login.css";
import { Button, Grid, InputAdornment, TextField, Typography } from "@mui/material";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import RemoveRedEyeSharpIcon from '@mui/icons-material/RemoveRedEyeSharp';
import {Link , useNavigate} from "react-router-dom";
import Header from "../layout/Header";

export const myContext = createContext();

function Login() {

    const navigate = useNavigate();

    const [name , setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [emailErr , setEmailErr] = useState(false);
    const [passErr , setPassErr] = useState(false);
    // const [btnFlg , setBtnFlg] = useState(false);
    const [userData , setUserData] = useState([]);

    const nameHandler = (e) =>{
        setName(e.target.value);
    }
    const emailHandler = (e) => {
        setEmail(e.target.value);
    }

    const passHandler = (e) => {
        setPass(e.target.value);
    }

    const passwordVisibleHandler = (e) => {
        setShowPassword(!showPassword)
    }

    let data;
    const loginButtonHandler = (e)=>{
             data = {
                Name : name,
                Email : email,
                Password : pass
            };
            userData.push(data);
            setName("");
            setEmail("");
            setPass("");    
    }
    if(userData.length>0){
        navigate("/Home");
    }
    localStorage.setItem("userData", JSON.stringify(userData));

    return (
       
        <React.Fragment>
       
        
       

            <div className="loginContainer">
                <Grid container spacing={3.5} >

                    <Grid item xs={12}>
                        <Typography>
                            <h2 className="heading" > Login </h2>
                        </Typography>
                    </Grid>

                    <Grid item xs={12} ml={10}>
                        <Typography> Username </Typography>
                        <TextField
                            name="name"
                            value={name}
                            label="Name"
                            size="small"
                            type="text"
                            sx={{ width: 330 }}
                            onChange={nameHandler}
                        />
                    </Grid>


                    <Grid item xs={12} ml={10}>
                        <Typography> Email </Typography>
                        <TextField
                            name="email"
                            value={email}
                            label="Email"
                            size="small"
                            type="text"
                            sx={{ width: 330 }}
                            onChange={emailHandler}
                        />
                    </Grid>



                    <Grid item xs={12} ml={10}>
                        <Typography> Password </Typography>
                        <TextField
                            name="pass"
                            value={pass}
                            label="Password"
                            size="small"
                            type={showPassword ? "text" : "password"}
                            sx={{ width: 330 }}
                            onChange={passHandler}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        {showPassword ?
                                            <VisibilityOffIcon
                                                aria-label="toggle password visibility"
                                                onClick={passwordVisibleHandler}
                                                cursor="pointer"
                                            >
                                            </VisibilityOffIcon>
                                            : <RemoveRedEyeSharpIcon
                                                onClick={passwordVisibleHandler}
                                                cursor="pointer">
                                            </RemoveRedEyeSharpIcon>}
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Grid>

                    <Grid item xs={12} ml={10}>
                        <Button
                            sx={{ width: 330 , bgcolor:"black"}}
                            variant="contained"
                            onClick={loginButtonHandler}
                        >
                        LOGIN
                        </Button>
                    </Grid>

                </Grid>

            </div>
                        
        </React.Fragment>
    );
}
export default Login;
