import React from 'react';
import './SignupForm.css';

const SignupForm: React.FC = () => {
  return (
    <section className='signup-form'>
      <p className='nieuwsbrief'>Schrijf je in voor de nieuwsbrief</p>
      <input
        className='nieuwsbrief-input'
        type="email"
        name="email" // Add a meaningful name for accessibility
        id="newsletter-signup" // Add a unique ID for potential form handling
        placeholder='Schrijf je nu in voor de nieuwsbrief!'
      />
    </section>
  );
};

export default SignupForm;
