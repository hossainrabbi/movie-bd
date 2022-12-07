import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

export default function Login() {
  return (
    <LoginForm>
      <Link
        className="text-primary cursor-pointer select-none hover:underline"
        to="/register"
      >
        Create account
      </Link>
    </LoginForm>
  );
}
