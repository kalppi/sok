import "./Button.css";

export interface IButton {
  label: string;
  onClick: () => void;
  className?: string;
}

export const Button = ({ label, onClick, className }: IButton) => {
  return (
    <button className={`btn ${className}`} onClick={onClick}>
      {label}
      <img alt="external link" src="icon.png" />
    </button>
  );
};
