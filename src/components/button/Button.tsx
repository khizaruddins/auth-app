export interface ButtonProps {
  label: string;
  onClick: () => void;
  extraClasses?: string;
  type: 'reset' | 'submit' | 'button';
}

const Button = ({ label, onClick, extraClasses, type }: ButtonProps) => {
  return (
    <button className={`${extraClasses || ''}`} onClick={onClick} type={type}>
      {label}
    </button>
  );
};

export default Button;
