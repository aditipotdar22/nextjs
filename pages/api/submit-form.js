// pages/api/submitForm.js

import { createClient } from '@sanity/client';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email } = JSON.parse(req.body);

    try {
      // Initialize Sanity client and wait for it to be created
      const client = createClient({
        projectId: '5fora7c7',
        dataset: 'production',
        useCdn: true, // Set to true for production
      });

      // Save form data to Sanity
      await client.create({
        _type: 'formData', // Update with your schema type
        name,
        email,
      });

      return res.status(200).json({ message: 'Form submitted successfully!' });
    } catch (error) {
      console.error('Error creating Sanity client:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  return res.status(405).json({ message: 'Method Not Allowed' });
}
