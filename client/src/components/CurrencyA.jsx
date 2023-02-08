import React, { useState } from 'react';

const CurrencyA = () => {
    const [currencyA, setCurrencyA] = useState(0);
    
    return (
    <div className="currency-a">
        <p>CurrencyA: {currencyA}</p>
    </div>
  )
}

export default CurrencyA