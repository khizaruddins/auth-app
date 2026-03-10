import { useState } from 'react';
import Input, { type InputProps } from '../../../../components/input/Input';
import Button from '../../../../components/button/Button';

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
      extraClasses: 'mb-4',
      value: '',
    },
    {
      id: 2,
      label: 'Password',
      type: 'password',
      placeholder: 'Enter your password',
      error: 'This field is required',
      showError: false,
      extraClasses: 'mb-4',
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
          <div>
            <Button
              label="Login"
              extraClasses="border border-1 transition-all ease-in-out rounded-lg w-full cursor-pointer px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 hover:text-gray-100"
              onClick={() => {}}
              type="button"
            />
          </div>
          <div>
            <Button
              label="Sign Up"
              extraClasses="border transition-all ease-in-out border-1 rounded-lg w-full cursor-pointer px-4 py-2 bg-white text-black hover:bg-black hover:text-white"
              onClick={() => {}}
              type="button"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
