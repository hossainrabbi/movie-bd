import { Checkbox, Label, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';

// login form props types
type LoginFormProps = {
  showLoginForm: (is: boolean) => void;
};

export default function LoginForm({ showLoginForm }: LoginFormProps) {
  return (
    <form className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
      <h3 className="text-xl text-center font-medium text-gray-900 dark:text-white">
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
        Not registered?{' '}
        <span
          className="text-primary cursor-pointer select-none hover:underline"
          onClick={() => showLoginForm(false)}
        >
          Create account
        </span>
      </div>
    </form>
  );
}
