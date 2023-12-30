import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Input from '../../components/Input.jsx';
import Alert from '../../components/Alert.jsx';
import Button from '../../components/Button.jsx';
import { login } from '../../../store/slices/authSlice';

const Signup = () => {
  const [signupForm, setSignUpForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [alert, setAlert] = useState('')

  const handleInputChange = (fieldName, value) => {
    setSignUpForm((prevInputs) => ({
      ...prevInputs,
      [fieldName]: value,
    }));
  };

  const dispatch = useDispatch();

  const hangleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/auth/signup", signupForm);
        const user = response.data;
        setTimeout(() => {
          dispatch(login(user));
        }, 1000);
        setAlert({ variant: 'success', message: 'Login successful!' });
    } catch (err) {
      setAlert({ variant: 'error', message: 'Username already exists' });
    }
  };

  return (
    <div className="h-screen w-screen bg-gray-100 flex items-center justify-center">
      <form onSubmit={hangleSignup} className="max-w-sm w-full shadow shadow-stone-200 p-6 bg-white rounded-md">
        <h4 className="text-2xl mb-5 font-semibold">Sign up</h4>
        {alert && <Alert variant={alert.variant} message={alert.message} />}
        <Input
          label="Username"
          type="text"
          placeholder="Enter username..."
          value={signupForm.username}
          onChange={(value) => handleInputChange('username', value)}
        />
        <Input
          label="Email"
          type="email"
          placeholder="Enter email..."
          value={signupForm.email}
          onChange={(value) => handleInputChange('email', value)}
        />
        <Input
          label="Password:"
          placeholder="Enter password..."
          value={signupForm.password}
          onChange={(value) => handleInputChange('password', value)}
          type="password"
        />
        {/*<Input
          label="Confirm Password:"
          placeholder="Enter Confirm password..."
          value={signupForm.cpassword}
          onChange={(value) => handleInputChange('cpassword', value)}
          type="password"
        />*/}
        <Button
          label="Sign up"
          className="w-full mt-5"
        />
        <div className="mt-3 text-center text-sm font-medium">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login here
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;