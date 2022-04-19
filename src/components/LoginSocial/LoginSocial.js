import React from 'react';
import './LoginSocial.css'
import google from '../../assets/google.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.init';

const SocialLink = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    let errorElement;

    if (error) {
        errorElement = <div>
            <p>Error: {error.message}</p>
        </div>
    }

    if (user) {
        navigate('/home');
    }

    return (
        <div>
            <div className='or'>
                <hr className='w-50' />
                <p>or</p>
                <hr className='w-50' />
            </div>

            <p>{errorElement}</p>

            <div className='d-flex justify-content-center align-items-center'>
                <button
                    onClick={() => signInWithGoogle()}
                    className="border-0 rounded-3 py-1 px-5">
                    <img className='mx-2' src={google} style={{ width: "20px" }} alt="" />
                    Google Sign In
                </button>
            </div>

        </div>
    );
};

export default SocialLink;