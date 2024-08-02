import React, { useState } from 'react';
import GradientButton from './gradient-button';

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await fetch('/api/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        subject,
        message,
      }),
    });

    const data = await response.json();
    if (data.success) {
      setStatus('Email sent successfully!');
    } else {
      setStatus('Failed to send email.');
    }

    // Clear the form fields
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-4 w-full">
      E-mail functionality currently unavailable
      <input
        type="email"
        placeholder="Recipient's Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="border border-gray-300 p-2 rounded w-full"
      />
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        required
        className="border border-gray-300 p-2 rounded w-full"
      />
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        className="border border-gray-300 p-2 rounded h-32 w-full"
      />
      <GradientButton disabled width={154}
        type="submit"
      >
        Send Email
      </GradientButton>
      {status && <p className="mt-4 text-center">{status}</p>}
    </form>
  );
};

export default EmailForm;