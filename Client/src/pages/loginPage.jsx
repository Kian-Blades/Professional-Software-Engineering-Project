import { Link } from 'react-router-dom';
import giacomLogo from '../assets/giacom-master-white-logo-1.png'; 
import '../css/loginPage.css';
export default function LoginPage() { 
    return (
        <div className="login-page">

            <div className='image'>
                <img src={giacomLogo} alt="GIACOM" width="110" height="24"></img>
            </div>

            <div className='login-form'>
                <h1>Login</h1>
                <form>
                    <div class="mb-3">
                        <label for="InputUsername" class="form-label">Username</label>
                        <input type="text" class="form-control" id="InputUsername" aria-describedby="usernameHelp"/>
                    </div>
                    <div class="mb-3">
                        <label for="InputPassword" class="form-label">Password</label>
                        <input type="password" class="form-control" id="InputPassword"/>
                    </div>
                    <button type="submit" class="login-btn-primary">Submit</button>
                </form>
            </div>

        </div>
     )
}