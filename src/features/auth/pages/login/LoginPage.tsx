import { useState } from 'react';
import Input, { type InputProps } from '../../../../components/input/Input';

interface InputPropsWithId extends InputProps {
  id: number;
}

const LoginPage = () => {
  const emailPasswordArr: InputPropsWithId[] = [
    {
      id: 1,
      label: 'Email',
      type: 'email',
      placeholder: 'Enter your email',
      error: 'This field is required',
      showError: false,
      extraClasses: '',
      value: '',
    },
    {
      id: 2,
      label: 'Password',
      type: 'password',
      placeholder: 'Enter your password',
      error: 'This field is required',
      showError: false,
      extraClasses: '',
      value: '',
    },
  ];
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    const { value } = e.target;
    setLoginForm((prev) => {
      if (id === 1) {
        return { ...prev, email: value };
      } else {
        return { ...prev, password: value };
      }
    });
  };
  return (
    <div className="grid grid-cols-2">
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Welcome Back!</h2>
        <p className="text-gray-600">
          Please enter your credentials to access your account.
        </p>
      </div>
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Login to Your Account</h2>
        <form className="space-y-4">
          <div>
            {emailPasswordArr.map((item) => (
              <Input
                key={item.id}
                label={item.label}
                type={item.type}
                placeholder={item.placeholder}
                extraClasses={item.extraClasses}
                onChange={(e) => handleChange(e, item.id)}
                showError={item.showError}
                error={item.error}
                value={item.id === 1 ? loginForm.email : loginForm.password}
              />
            ))}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
