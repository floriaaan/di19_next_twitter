export const Input = ({
  colorsClassName = "text-gray-700 focus:bg-gray-300 focus:border-gray-200 bg-gray-200",
  onChange,
  value,
  placeholder,
}) => {
  return <input
    onChange={onChange}
    value={value}
    placeholder={placeholder}
    className={
      "w-full px-4 py-3 my-1 text-xs leading-tight  rounded-lg appearance-none  focus:outline-none " +
      colorsClassName
    }
  ></input>;
};
