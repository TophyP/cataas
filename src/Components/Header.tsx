interface HeaderProps {
  text: string;
}
const Header = ({ text }: HeaderProps) => {
  return <h3>{text}</h3>;
};

export default Header;
