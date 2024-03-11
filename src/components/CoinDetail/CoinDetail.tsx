import React from 'react';
import './CoinDetail.css';
import { useParams } from 'react-router';

  const CoinDetail: React.FC  = () => {
    let  { id } = useParams();
    return (
      <div>
        <h1>{id}</h1>
      </div>
    );
  };
  
  export default CoinDetail;
  


