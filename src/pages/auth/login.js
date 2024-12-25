import { emailValidation, numOnly, numAndChar, charOnly } from "@/utils/common";
import React, { useState, useEffect, useContext } from 'react';
// import Captcha, { validateCaptcha } from "@/components/captcha/captcha"
// import { loginCall } from "../../utils/axios";
// import Image from 'next/image'
import { useGlobalContext } from "@/utils/GlobalProvider";
import handleError from "@/utils/ErrorHandler"
import loginStyling from "../auth/login.module.scss"
export default function Login() {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  console.log("🚀 ~ Login ~ formData:", formData)

  // const { captchaValue } = useGlobalContext();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setErrors({
      ...errors,
      [name]: ''
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    }
    else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    // if (!formData.captcha) {
    //   newErrors.captcha = 'Captcha is required';
    // }
    return newErrors;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const validationErrors = validate();
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }
      // if (!validateCaptcha(formData.captcha, captchaValue)) {
      //   return alert('Captcha validation failed. Please try again.');
      // }
      // const response = await loginCall('login', formData);
      console.log('Login Successful:', response.data);
    } catch (err) {
      handleError(err);
    }
  };
  return (
    <>
      <div>
          <div className={`${loginStyling['container']}`} > 
            <div className={`${loginStyling['forms-container']}`} >
              <div className={`${loginStyling['signin-signup']}`} >
                <form  className={`${loginStyling['sign-in-form']}`} onSubmit={handleSubmit} method="post">
                  <h2 className={`${loginStyling['title']}`}>Sign in</h2>
                  <div className={`${loginStyling['input-field']}`} >
                    <i className='fas fa-user' ></i>
                    <input type="text" placeholder="Usermail" name='email' onKeyDown={emailValidation} value={formData.email} onChange={handleChange}/>
                    {errors.email && <label style={{ color: "red" }}>{errors.email}</label>}
                  </div>
                  <div className={`${loginStyling['input-field']}`} >
                    <i className='fas fa-lock' ></i>
                    <input type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} onKeyDown={numAndChar}/>
                    {errors.password && <label style={{ color: "red" }}>{errors.password}</label>}
                  </div>
                  <input type="submit" value="Login" className={`${loginStyling['btn']}`} />
                </form>
              </div>
            </div>

            <div className={`${loginStyling['panels-container']}`} >
              <div className={`${loginStyling['panel']} ${loginStyling['left-panel']}`} >
                <div className={`${loginStyling['content']}`} >
                  <h3>Welcome Back!</h3>
                  <p>
                    Sign in to your invoicing hub to save time, stay organized, and get paid faster.
                  </p>
                </div>
                <img src="/assets/login/log.svg" className={`${loginStyling['image']}`} alt="" />
              </div>
            </div>
          </div>
      </div>
    </>
  );
  //https://www.google.com/search?q=responsive+dashboard+html+css&oq=responsive+dashboard+&gs_lcrp=EgZjaHJvbWUqBwgBEAAYgAQyBggAEEUYOTIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIGCAcQRRhB0gEJMTcxMjVqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8
}
