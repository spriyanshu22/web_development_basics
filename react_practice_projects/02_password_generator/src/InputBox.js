
import React from 'react';

function InputBox({ currencyTypes }) {
  return (
    <div>
      <select>
        {currencyTypes.map((currency, index) => (
          <option key={index} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
}

export default InputBox;