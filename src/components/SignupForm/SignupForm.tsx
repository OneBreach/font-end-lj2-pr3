import React from 'react';
import './SignupForm.css';

const SignupForm: React.FC = () => {
  return (
    <section className='signup-form'>
      <p className='nieuwsbrief'>Schrijf je in voor de nieuwsbrief</p>
      <input
        className='nieuwsbrief-input'
        type="email"
        name="email"
        id="newsletter-signup"
        placeholder='Schrijf je nu in voor de nieuwsbrief!'
      />
    </section>
  );
};

export default SignupForm;
