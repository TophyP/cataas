export interface ButtonProps {
  generateRandomCat: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ generateRandomCat }: ButtonProps) => {
  return (
    <div>
      <button onClick={generateRandomCat}>Give me a cat!</button>
    </div>
  );
};

export default Button;
