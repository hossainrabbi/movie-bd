import { Link } from 'react-router-dom';
import RegisterForm from '../components/RegisterForm';

export default function Register() {
  return (
    <RegisterForm>
      <Link
        className="text-primary cursor-pointer select-none hover:underline"
        to="/login"
      >
        Login account
      </Link>
    </RegisterForm>
  );
}
