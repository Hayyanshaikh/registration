import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import Input from '../../components/Input.jsx';
import Alert from '../../components/Alert.jsx';
import Button from '../../components/Button.jsx';
import { Link } from 'react-router-dom';
import { login } from '../../../store/slices/authSlice';

const Login = () => {
  const [user, setUser] = useState(null);
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });
  const [alert, setAlert] = useState('');

  const dispatch = useDispatch();

  const handleInputChange = (fieldName, value) => {
    setLoginForm((prevInputs) => ({
      ...prevInputs,
      [fieldName]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/auth/login', {
        username: loginForm.username,
        password: loginForm.password,
      });
      
      const userData = response.data;
      setTimeout(() => {
          dispatch(login(userData));
        }, 1000);

      setAlert({ variant: 'success', message: 'Login successful!' });
    } catch (error) {
      setAlert({ variant: 'error', message: 'Incorrect username or password.' });
    }
  };


  return (
    <div className="h-screen w-screen bg-gray-100 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="max-w-sm w-full shadow shadow-stone-200 p-6 bg-white rounded-md"
      >
        <h4 className="text-2xl mb-5 font-semibold">Login</h4>
        {alert && <Alert variant={alert.variant} message={alert.message} />}
        <Input
          label="Username"
          placeholder="Enter username..."
          value={loginForm.username}
          onChange={(value) => handleInputChange('username', value)}
        />
        <Input
          label="Password:"
          placeholder="Enter password..."
          value={loginForm.password}
          onChange={(value) => handleInputChange('password', value)}
          type="password"
        />
        <Button label="Login" className="w-full mt-5" />
        <div className="mt-3 text-center text-sm font-medium">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign up here
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
