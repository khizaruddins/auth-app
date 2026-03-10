import React from 'react';

export interface InputProps {
  label: string;
  placeholder: string;
  extraClasses?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  type?: string;
  showError?: boolean;
  value: string;
}

const Input = ({
  label,
  placeholder,
  extraClasses,
  onChange,
  error,
  type = 'text',
  showError = false,
  value,
}: InputProps) => {
  return (
    <div>
      <label
        htmlFor={label}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <input
        type={type}
        id={label}
        placeholder={placeholder}
        className={`mt-1 block w-full border border-gray-300 rounded-md p-2 ${extraClasses}`}
        onChange={onChange}
        value={value}
      />
      {error && showError && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
    </div>
  );
};

export default Input;
