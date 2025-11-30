const Button = ({ children, variant = 'primary', className = '' }) => {
  const baseStyle = "px-6 py-3 rounded-full font-medium transition-all duration-300";
  const styles = {
    primary: "bg-primary text-dark hover:bg-opacity-90",
    outline: "border border-darkLight bg-darkLight text-white hover:bg-dark"
  };

  return (
    <button className={`${baseStyle} ${styles[variant]} ${className}`}>
      {children}
    </button>
  );
};

export default Button;