type Props = {
  text: string;
  onClick?: () => void;
  type: 'submit' | 'button'
};

const Button = ({ text, onClick }: Props) => {
  return (
    <button className="Button" onClick={onClick}>
      {text}
    </button>
  );
};
export default Button;
