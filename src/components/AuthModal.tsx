import { Modal } from 'flowbite-react';
import { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

// auth modal types
type AuthModalType = {
  openModal: boolean;
  handleClose: () => void;
};

export default function AuthModal({ openModal, handleClose }: AuthModalType) {
  const [isLogin, setIsLogin] = useState(true);

  //   show login form
  const showLoginForm = (is: boolean) => {
    setIsLogin(is);
  };

  return (
    <Modal show={openModal} size="md" popup={true} onClose={handleClose}>
      <Modal.Header />
      <Modal.Body>
        {isLogin ? (
          <LoginForm showLoginForm={showLoginForm} />
        ) : (
          <RegisterForm showLoginForm={showLoginForm} />
        )}
      </Modal.Body>
    </Modal>
  );
}
