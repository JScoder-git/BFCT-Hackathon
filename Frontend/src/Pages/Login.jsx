import React, { useState, useContext, useEffect } from 'react';
import { Row, Col, Form, FormGroup, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../styles/login.css';

import userIcon from '../assets/images/user.png';
import { AuthContext } from './../context/AuthContext.js';
import { BASE_URL } from '../utils/config.js';
import { useNavigate } from 'react-router-dom';
import Lottie from 'react-lottie';
import animationData from './Animation - 1708529360917.json'; // Update with your animation JSON file

const Login = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });

    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: 'post',
        headers: {
          'content-type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(credentials),
      });
      const result = await res.json();
      if (!res.ok) {
        alert(result.message);
      } else {
        console.log(result.data);
        dispatch({ type: 'LOGIN_SUCCESS', payload: result.data });
        navigate('/');
      }
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE', payload: err.message });
    }
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <section>
      <Row>
        <Col lg="8" className="m-auto">
          <div className="login__container d-flex justify-content-between" style={{ height: '446px' }}>
            <div className="login__img">
              <Lottie options={defaultOptions} height={400} width={400} />
            </div>
            <div className="login__form">
              <div className="user">
                <img src={userIcon} alt="" />
              </div>
              <h2>Login</h2>

              <Form onSubmit={handleClick}>
                <FormGroup>
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    id="email"
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    id="password"
                    onChange={handleChange}
                  />
                </FormGroup>

                <Button className="btn secondary__btn auth__btn btn-dark" type="submit">
                  Login
                </Button>
              </Form>
              <p>
                Don't have an account?
                <Link to="/register">Create</Link>
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Login;
