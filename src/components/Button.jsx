function Button({
    title,
    id,
    rightIcon,
    leftIcon,
    containerClass,
    onClick,
    href,
  }) {
    const handleClick = (e) => {
      if (onClick) {
        onClick(e); // Trigger the custom `onClick` if provided
      } else if (href) {
        // If href is provided, handle navigation or mailto
        if (href.startsWith("#")) {
          // Navigate to a specific section
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        } else {
          // Open external link or mailto
          window.location.href = href;
        }
      }
    };
  
    return (
      <button
        id={id}
        onClick={handleClick}
        className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}
      >
        {leftIcon}
        <span className="relative incline-flex overflow-hidden font-general text-xs uppercase">
          <div>{title}</div>
        </span>
        {rightIcon}
      </button>
    );
  }
  
  export default Button;
  