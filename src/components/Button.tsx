type Props = {
  text: string;
  style?: string;
  onClick?: () => void;
};

const Button = ({ text, onClick, style }: Props) => {
  return (
    <button className="Button" onClick={onClick}>
      {text}
    </button>
  );
};
export default Button;
