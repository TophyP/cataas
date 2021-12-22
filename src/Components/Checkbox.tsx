export interface CheckboxProps {
  label: string;
  id: string;
  checked: boolean;
  handleCheckboxOnChange: React.ChangeEventHandler<HTMLInputElement>;
}
const Checkbox = ({
  label,
  id,
  checked,
  handleCheckboxOnChange,
}: CheckboxProps) => {
  return (
    <div>
      <input
        id={id}
        type="checkbox"
        checked={!checked}
        onChange={handleCheckboxOnChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Checkbox;
