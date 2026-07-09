import PropTypes from 'prop-types';

const LoadingSpinner = ({ 
  size = "md",
  color = "primary",
  message = "",
  className = "",
  center = true
}) => {
  const sizeClasses = {
    xs: "h-4 w-4 border-2",
    sm: "h-6 w-6 border-2",
    md: "h-8 w-8 border-[3px]",
    lg: "h-10 w-10 border-4",
    xl: "h-12 w-12 border-4"
  };

  const colorClasses = {
    primary: "border-t-blue-600",
    secondary: "border-t-purple-600",
    danger: "border-t-red-600",
    success: "border-t-green-600",
    warning: "border-t-amber-500",
    light: "border-t-gray-200",
    dark: "border-t-gray-900"
  };

  const containerClasses = `flex flex-col items-center justify-center gap-2 ${className} ${
    center ? "w-full h-full" : ""
  }`;

  return (
    <div className={containerClasses}>
      <div className="relative flex items-center justify-center">
        <div 
          className={`rounded-full border-solid border-transparent animate-spin ${sizeClasses[size]} ${colorClasses[color]}`}
          style={{
            background: 'conic-gradient(transparent 0%, transparent 80%, currentColor 80%, currentColor 100%)',
            mask: 'radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 2px))'
          }}
          aria-label="Loading"
        />
      </div>
      {message && (
        <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors">
          {message}
        </p>
      )}
    </div>
  );
};

LoadingSpinner.propTypes = {
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  color: PropTypes.oneOf(["primary", "secondary", "danger", "success", "warning", "light", "dark"]),
  message: PropTypes.string,
  className: PropTypes.string,
  center: PropTypes.bool
};

export default LoadingSpinner;