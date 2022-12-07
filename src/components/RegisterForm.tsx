import { Label, TextInput } from 'flowbite-react';
import React from 'react';

// register form props types
type RegisterFormProps = {
  children: React.ReactNode;
  modal?: boolean;
};

export default function RegisterForm({
  children,
  modal = false,
}: RegisterFormProps) {
  return (
    <form className="space-y-6 max-w-3xl mx-auto px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
      <h3
        className={`${
          modal ? 'text-xl' : 'text-2xl mt-5'
        } text-center font-medium text-gray-900`}
      >
        Register your Account
      </h3>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="name" value="Your Full Name" />
        </div>
        <TextInput id="name" placeholder="John Doe" required={true} />
      </div>
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
      <div className="w-full text-right">
        <button type="submit" className="btn px-6 py-2">
          Register
        </button>
      </div>
      <div className="text-sm font-medium text-gray-500">
        Already have an account? {children}
      </div>
    </form>
  );
}
