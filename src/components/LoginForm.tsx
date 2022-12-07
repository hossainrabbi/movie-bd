import { Checkbox, Label, TextInput } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

// login form props types
type LoginFormProps = {
  children: React.ReactNode;
  modal?: boolean;
};

export default function LoginForm({ children, modal = false }: LoginFormProps) {
  return (
    <form className="space-y-6 max-w-3xl mx-auto px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
      <h3
        className={`${
          modal ? 'text-xl' : 'text-2xl mt-5'
        } text-center font-medium text-gray-900`}
      >
        Login your Account
      </h3>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Your email" />
        </div>
        <TextInput id="email" placeholder="name@example.com" required={true} />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password" value="Your password" />
        </div>
        <TextInput
          id="password"
          type="password"
          placeholder="******"
          required={true}
        />
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Link
          to="/auth/forgot-password"
          className="text-sm text-primary hover:underline"
        >
          Forgot Password?
        </Link>
      </div>
      <div className="w-full text-right">
        <button type="submit" className="btn px-6 py-2">
          Login
        </button>
      </div>
      <div className="text-sm font-medium text-gray-500">
        Not registered? {children}
      </div>
    </form>
  );
}
