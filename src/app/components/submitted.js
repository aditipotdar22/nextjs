// pages/api/submitForm.js

import { createClient } from '@sanity/client';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email } = JSON.parse(req.body);

    // Initialize Sanity client
    const client = createClient({
      projectId: 'YOUR_PROJECT_ID',
      dataset: 'YOUR_DATASET',
      useCdn: false, // Set to true for production
    });

    // Save form data to Sanity
    await client.create({
      _type: 'formData', // Update with your schema type
      name,
      email,
    });

    return res.status(200).json({ message: 'Form submitted successfully!' });
  }

  return res.status(405).json({ message: 'Method Not Allowed' });
}
