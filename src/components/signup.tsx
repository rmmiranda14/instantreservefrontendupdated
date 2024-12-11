'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignUpPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;

    if (/^\d*$/.test(input)) {
      setPhone(input);
    }
  };

  const validatePasswordStrength = (password: string) => {
    if (password.length < 7) {
      setPasswordStrength('Password must be at least 7 characters');
      return;
    }
    // Regular Expressions for Password Strength
    const lengthCriteria = password.length >= 10;
    const uppercaseCriteria = /[A-Z]/.test(password);
    const lowercaseCriteria = /[a-z]/.test(password);
    const numberCriteria = /\d/.test(password);
    const specialCharCriteria = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    const passedCriteria = [
      lengthCriteria,
      uppercaseCriteria,
      lowercaseCriteria,
      numberCriteria,
      specialCharCriteria,
    ].filter(Boolean).length;

    if (passedCriteria <= 2) {
      setPasswordStrength('Weak');
    } else if (passedCriteria === 3 || passedCriteria === 4) {
      setPasswordStrength('Moderate');
    } else if (passedCriteria === 5) {
      setPasswordStrength('Strong');
    } else {
      setPasswordStrength('');
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setPassword(input);
    validatePasswordStrength(input);
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    if (password.length < 7) {
      setError('Password must be at least 7 characters long.');
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:8000/users/users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          fullname,
          phone: parseInt(phone, 10),
          password,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create account. Please try again.');
      }

      setSuccess(true);
      setTimeout(() => {
        router.push('/login-page');
      }, 2000);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred.');
      }
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md space-y-6">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">
          Create an Account
        </h2>
        {error && <p className="text-red-500">{error}</p>}
        {success && (
          <p className="text-green-500 text-center">
            Account created successfully! Redirecting...
          </p>
        )}
        <form onSubmit={handleSignUp} className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Username"
              className="w-full px-3 py-2 border rounded-md"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-3 py-2 border rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-3 py-2 border rounded-md"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-3 py-2 border rounded-md"
              value={phone}
              onChange={handlePhoneChange}
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-3 py-2 border rounded-md"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            {password && (
              <p
                className={`mt-2 text-sm ${
                  passwordStrength === 'Strong'
                    ? 'text-green-500'
                    : passwordStrength === 'Moderate'
                    ? 'text-yellow-500'
                    : 'text-red-500'
                }`}
              >
                {passwordStrength} Password
              </p>
            )}
          </div>
          <div>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-3 py-2 border rounded-md"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white bg-red-600 rounded-md hover:bg-red-700"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-sm text-gray-600">
          Already have an account?{' '}
          <a href="/login-page" className="text-red-600 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </main>
  );
}