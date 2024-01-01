// components/Form.js
"use client";
import { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({ name: '', email: '', number:''});
  const [isValidCountryCode, setValidCountryCode] = useState(true);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateCountryCode = (number) => {
    // Use a regular expression to check if the number starts with a valid country code
    const countryCodePattern = /^\+\d+$/;
    return countryCodePattern.test(number);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = validateCountryCode(formData.number);
    setValidCountryCode(isValid);

    if (!isValid) {
      // Handle invalid country code (you can show an error message)
      return;
    }


    // Send form data to serverless function
    const response = await fetch('/api/submit-form', {
      method: 'POST',
      body: JSON.stringify(formData),
    });

    // Handle response (if needed)
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='mb-5'>
      <label>Full name</label>
      <br></br>
      <input className='w-full border rounded px-3 py-2' placeholder='Enter full name' type="text" name="name" value={formData.name} onChange={handleChange} />
      </div>
      <div className='mb-5'>
      <label>Email Id</label>
      <br></br>
      <input  className='w-full border rounded px-3 py-2' placeholder='Enter Email id' type="email" name="email" value={formData.email} onChange={handleChange} />
      </div>
      <div className='mb-5'>
      <label> Phone Number </label>
      <br></br>
      <input className='w-full border rounded px-3 py-2' placeholder='Enter phone number' type="tel" name="number" value={formData.number} onChange={handleChange} />
      {!isValidCountryCode && <p style={{ color: 'red' }}>Invalid country code in the phone number</p>}
      </div>
      <button className='w-full bg-teal-400 rounded-lg py-4 text-white' type="submit">Schedule A Demo</button>
    </form>
  );
};

export default Form;
