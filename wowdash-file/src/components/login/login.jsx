import React from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'
import FormHandler from 'react-form-buddy';

const Login = () => {

    const navigate = useNavigate();

    const validate = (values) => {
        let errors = {};
        if (!values.email) {
            errors.email = "Username / Email is required";
        }
        if (!values.password) {
            errors.password = "Password is required";
        }
        return errors;
    };

    const submitForm = () => {
        if(values.email === "admin" && values.password === "admin"){
            navigate('/dashboard')
        }
        else{
            alert('Username / Email or Password is Wrong')
        }
        console.log("Form submitted successfully!");
    };


    const { handleChange, handleSubmit, values, errors } = FormHandler(submitForm, validate);
    return (
        <div className='body'>
            <div className="login-container d-flex justify-content-center align-items-center">
                <div className="login-card shadow-lg p-5">
                    <form>
                        <div className="form-group mb-3">
                            <label htmlFor="username">
                                <i className="bi bi-person-fill"></i> Username / Email
                            </label>
                            <input
                                type="text"
                                id="username"
                                className="form-control"
                                name="email"
                                value={values.email || ''}
                                onChange={handleChange}
                                placeholder="Enter your username or email"
                            />
                            {errors.email && <p className='text-red'>{errors.email}</p>}
                        </div>
                        <div className="form-group mb-4">
                            <label htmlFor="password">
                                <i className="bi bi-lock-fill"></i> Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="form-control"
                                name="password"
                                value={values.password || ''}
                                onChange={handleChange}
                                placeholder="Enter your password"
                            />
                            {errors.password && <p className='text-red'>{errors.password}</p>}
                        </div>
                        <button type="submit" className="btn btn-primary w-100 mb-3 mt-3" onClick={handleSubmit}>
                            LOG IN NOW
                        </button>
                    </form>
                    {/* <div className="social-login d-flex justify-content-around mt-3">
                        <span>log in via</span>
                        <a href="#!" className="text-secondary">
                            <i className="bi bi-instagram"></i>
                        </a>
                        <a href="#!" className="text-secondary">
                            <i className="bi bi-facebook"></i>
                        </a>
                        <a href="#!" className="text-secondary">
                            <i className="bi bi-twitter"></i>
                        </a>
                    </div> */}
                </div>
            </div>
        </div>

    );
};

export default Login;