import React from 'react';

function EmailInput({ value, onChange }) {
  return <input type="email" value={value} onChange={onChange} />;
}

export default EmailInput;