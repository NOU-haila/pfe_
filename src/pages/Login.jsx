import React , { useState }from 'react';
import { Link,useNavigate } from 'react-router-dom';
//import validation from './LoginValidation';
import { FaUserShield } from "react-icons/fa";
import { AiOutlineSwapRight } from "react-icons/ai";
import { BsFillShieldLockFill } from "react-icons/bs";
import video from "../video/video3.mp4"
//import Axios from "axios";
//import { useHistory } from 'react-router-dom';

function Login(){
    const [logins, setLogins] = useState("");
    const [motDePasse, setMotDePasse] = useState("");
    const [loginStatus, setLoginStatus] = useState("");
    const navigate = useNavigate(); // Utilisation de useNavigate

    const login = async(e) =>{
        e.preventDefault();
        /*Axios.post("http://localhost:3000/login",{
            logins:logins,
            motDePasse: motDePasse,
        }).then((response) => {
            console.log(response);
            if (response.data.message){
                setLoginStatus(response.data.message);
            }else{
                setLoginStatus(response.data[0].message);
            }
        })*/
        console.log(logins+ "," + motDePasse);
        const response =await fetch('http://localhost:3000/login', {
            method : 'POST' , 
            headers : {"Content-type" : 'application/json'},
            body: JSON.stringify({logins:logins , motDePasse: motDePasse
            })

        })

        const json = await response.json()
        console.log(json);
        if (!response.ok) {
            console.log("Erreur lors de la connexion.");
            setLoginStatus("Erreur lors de la connexion.");
        } else {
            // Connexion réussie, redirection vers la page d'accueil
            navigate("/home"); 
        }
    }

    return(
        <div className='loginPage flex'>
            <div className='container flex'>

                <div className='videoDiv'>
                    <video src={video} autoPlay muted loop></video>
                    <div className='textDiv'>
                    </div>
                </div>

                <div className='formDiv flex'>
                    <div className='headerDiv'>
                    <h3>Welcome Back!</h3>
                </div>
                <p>
                  <h1 className="msgRegister">{loginStatus}</h1>
                 </p>    
                    <form action="" className='form grid'>
                        <span className='showMessage'> Login status will go here</span>
                        <div className='inputDiv'>
                           <label name='email' htmlFor="email"><span>Login</span></label>
                            <div className='input flex'>
                             <FaUserShield className='icon' />
                             <input type="email" placeholder='Entrer votre login'  
                             onChange={(e) => {setLogins(e.target.value)}}
                             required />
                            </div>
                        </div>

                        <div className='inputDiv'>
                           <label name='password' htmlFor="password"><span>Mot de passe</span></label>
                            <div className='input flex'>
                            <BsFillShieldLockFill className='icon' />
                             <input type="password" placeholder='Entrer votre mot de passe' 
                              onChange={(e) => {setMotDePasse(e.target.value)}}                   
                              required/>
                            </div>
                        </div>

                        <button className='btn flex' onClick={login}>                            
                             Se connecter
                            <AiOutlineSwapRight className='icon'/>
                        </button>

                        <div className='footerDiv flex'>
                         <span className='text'>Vous n'avez pas un compte?</span>
                            <Link to='/Signup' className='btn'>
                                S'inscrire
                            </Link>
                        </div>

                        
                        <span className='forgotPassword'>
                            Vous avez oublié votre mot de passe?
                            <a href='#3'>Click here</a> 
                        </span>

                    </form>
                </div>
            </div>
        </div>    

    
    )
}
export default Login;
 