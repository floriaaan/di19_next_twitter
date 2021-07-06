export const Button = ({
  colorsClassName = "bg-gray-300 text-gray-700 dark:text-gray-300 dark:bg-gray-900 dark:hover:bg-gray-700 hover:bg-gray-400",
  className,
  onClick,
  children,
}) => (
  <button
    className={
      "flex items-center justify-center h-12 transition duration-300 rounded-full focus:outline-none " +
      colorsClassName + " " + className
    }
    onClick={onClick}
    
  >
    {children}
  </button>
);
