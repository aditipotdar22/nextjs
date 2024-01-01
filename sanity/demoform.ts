// schemas/demoform.js
export const demoForm = {
    name: 'demoform',
    type: 'document',
    title: 'Demo Form',
    fields: [
      {
        name: 'fullname',
        type: 'string',
        title: 'Full Name'
      },
      {
        name: 'phonenumber',
        type: 'string',
        title: 'Phone Number'
      },
      {
        name: 'emailid',
        type: 'string',
        title: 'Email Id'
      }
    ]
  }