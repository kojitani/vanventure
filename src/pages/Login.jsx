import { useToggle, upperFirst } from '@mantine/hooks';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '@mantine/form';
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  Button,
  Checkbox,
  Anchor,
  Stack,
} from '@mantine/core';

export default function AuthRequired() {
  const location = useLocation();
  const [type, toggle] = useToggle(
    location.state?.type === 'register'
      ? ['register', 'login']
      : ['login', 'register']
  );
  const [registerState, setRegisterState] = useState(false);
  const [loginState, setLoginState] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();
  const prevURL = location.state?.from;
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      password: '',
    },

    validate: {
      email: val => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: val =>
        val.length <= 6
          ? 'Password should include at least 6 characters'
          : null,
    },
  });

  function saveUserLocalStorage() {
    localStorage.setItem('user', JSON.stringify(form.values));

    setRegisterState(true);
    setTimeout(() => {
      toggle();
    }, 1000);
    console.log('saved login details');
  }
  function checkLoginDetails() {
    setLoginError(false);
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) setLoginError(true);
    if (
      user?.email.toLowerCase() === form.values.email.toLowerCase() &&
      user?.password === form.values.password
    ) {
      setLoginState(true);
      localStorage.setItem('loggedin', true);
      setTimeout(() => {
        navigate(prevURL || '/host/dashboard', { replace: true });
      }, 1000);
    } else {
      setLoginError(true);
    }
  }
  return (
    <div className="login-page">
      <div className="login-container">
        <Paper
          radius="md"
          p="xl"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Text className="login-welcome" size="xl" weight={500}>
              Welcome to VanVenture,
            </Text>

            <Text className="login-welcome" size="xl" weight={500}>
              {' '}
              {type === 'login'
                ? 'sign in to continue.'
                : 'register your information below.'}
            </Text>

            {loginError && (
              <h4
                style={{
                  color: 'red',
                  textAlign: 'center',
                  margin: '0.5rem 0',
                }}
              >
                Incorrect email or password. Please try again.
              </h4>
            )}
            <form
              onSubmit={form.onSubmit(() => {
                type === 'register'
                  ? saveUserLocalStorage()
                  : checkLoginDetails();
              })}
            >
              <Stack>
                {type === 'register' && (
                  <TextInput
                    label="Name"
                    size="md"
                    placeholder="Your name"
                    value={form.values.name}
                    onChange={event =>
                      form.setFieldValue('name', event.currentTarget.value)
                    }
                    radius="md"
                  />
                )}

                <TextInput
                  required
                  label="Email"
                  size="md"
                  placeholder="hello@vanventure.com"
                  value={form.values.email}
                  onChange={event =>
                    form.setFieldValue('email', event.currentTarget.value)
                  }
                  error={form.errors.email && 'Invalid email'}
                  radius="md"
                />

                <PasswordInput
                  required
                  label="Password"
                  size="md"
                  placeholder="Your password"
                  value={form.values.password}
                  onChange={event =>
                    form.setFieldValue('password', event.currentTarget.value)
                  }
                  error={
                    form.errors.password &&
                    'Password should include at least 6 characters'
                  }
                  radius="md"
                />

                {type === 'register' && (
                  <Checkbox required label="I accept terms and conditions" />
                )}
              </Stack>

              <Group position="apart" mt="xl">
                {
                  <Anchor
                    component="button"
                    type="button"
                    color="dimmed"
                    onClick={() => {
                      toggle();
                      setLoginError(false);
                    }}
                    size="md"
                    disabled={loginState || registerState}
                  >
                    {type === 'register'
                      ? 'Already have an account? Login'
                      : "Don't have an account? Register"}
                  </Anchor>
                }
                {type === 'login' && (
                  <Button
                    type="submit"
                    radius="xl"
                    loading={loginState}
                    size="md"
                  >
                    {loginState ? 'Logging in...' : 'Login'}
                  </Button>
                )}
                {type === 'register' && (
                  <Button
                    type="submit"
                    radius="xl"
                    loading={registerState}
                    size="md"
                  >
                    {registerState ? 'Registering...' : 'Register'}
                  </Button>
                )}
              </Group>
            </form>
          </div>
          <img
            className="login-img"
            src="https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          ></img>
        </Paper>
      </div>
    </div>
  );
}
