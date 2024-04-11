import React from 'react';
import './Signup.css';

const Signup: React.FC = () => {
  return (
    <div className="email-signup-form">
      <form>
        <input
          type="email"
          placeholder="Voer je e-mailadres in"
          required
        />
        <button type="submit" data-testid="submit-btn">Inschrijven</button>
      </form>
    </div>

  );
};

export default Signup;
