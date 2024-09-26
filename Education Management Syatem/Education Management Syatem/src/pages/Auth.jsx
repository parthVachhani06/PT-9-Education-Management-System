import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext'; // Import useAuth from context
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap'; // Import Bootstrap components

const Auth = () => {
  const { authState, login, logout } = useAuth(); // Destructure authState, login, and logout
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    login(username, password); // Call the login function
  };

  return (
    <Container className="h-100 d-flex align-items-center justify-content-center">
      {authState ? (
        <Card className="text-center">
          <Card.Body>
            <Card.Title>Logged In as {authState.username}</Card.Title>
            <Button variant="danger" onClick={logout}>
              Logout
            </Button>
          </Card.Body>
        </Card>
      ) : (
        <Card className="p-4 shadow">
          <Card.Body>
            <h2 className="text-center">Login</h2>
            <Form onSubmit={handleLogin}>
              <Form.Group controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Login
              </Button>
            </Form>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default Auth; // Export the Auth component
