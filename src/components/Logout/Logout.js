import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import './Logout.css'
import LoginSocial from '../LoginSocial/LoginSocial';
import { auth } from '../../firebase.init';
import { Button, Col, Form, Row } from 'react-bootstrap';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const navigate = useNavigate();

    const handleRegister = async (event) => {
        event.preventDefault();

        const name = event.target.fullName.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password);
    };

    if (user) {
        navigate('/home');
    }

    return (
        <div className='container my-5 register shadow p-5'>
            <Form className='mx-auto' onSubmit={handleRegister}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="12">
                        <Form.Label className='fs-5'>Full Name</Form.Label>
                        <Form.Control
                            style={{ fontSize: "18px" }}
                            name="fullName"
                            required
                            type="text"
                            placeholder="Full Name"
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="12">
                        <Form.Label className='fs-5'>Email</Form.Label>
                        <Form.Control style={{ fontSize: "18px" }} type="email" name="email" placeholder="Email" required />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="12">
                        <Form.Label className='fs-5'>Password</Form.Label>
                        <Form.Control style={{ fontSize: "18px" }} type="password" name="password" placeholder="Password" required />
                    </Form.Group>
                </Row>
                <Button style={{ fontSize: "18px" }} type="submit" className='reg-btn my-3 btn-success'>REGISTER</Button>
            </Form>

            <LoginSocial></LoginSocial>

            <div>
                <p className='text-center mt-3'>Already have an account? <Link to='/login' className='text-primary text-decoration-none' style={{ cursor: "pointer" }}>Signin</Link></p>
            </div>
        </div>
    );
};

export default Register;