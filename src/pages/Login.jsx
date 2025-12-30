import { useRef, useState } from "react";
import { Alert, Button, Card, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const { error } = await signIn(
      emailRef.current.value,
      passwordRef.current.value
    );
    if (error) setError(error.message);
    else navigate("/");
    setLoading(false);
  };

  return (
    <Card>
      <Card.Body>
        <h2 className="text-center mb-4">Log In</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" ref={emailRef} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" ref={passwordRef} required />
          </Form.Group>
          {error && <Alert variant="danger">{error}</Alert>}
          <Button disabled={loading} type="submit" className="w-100 mt-3">
            Log In
          </Button>
        </Form>
        <div className="w-100 text-center mt-3">
          Need an account? <Link to="/register">Sign Up</Link>
        </div>
      </Card.Body>
    </Card>
  );
}
