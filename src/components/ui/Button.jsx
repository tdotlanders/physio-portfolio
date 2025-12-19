import Link from "next/link";

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  fullWidth = false,
  external = false,
  disabled = false,
  className = "",
  ...props
}) {
  const baseStyles = `
    inline-flex items-center justify-center font-medium rounded-full
    transition-all duration-300 ease-out
    focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const variants = {
    primary: `
      bg-[var(--primary)] text-white
      hover:bg-[var(--primary-dark)] hover:shadow-lg hover:-translate-y-0.5
      focus-visible:ring-[var(--primary)]
      active:translate-y-0
    `,
    secondary: `
      bg-transparent text-[var(--primary)] border-2 border-[var(--primary)]
      hover:bg-[var(--primary)] hover:text-white hover:shadow-lg hover:-translate-y-0.5
      focus-visible:ring-[var(--primary)]
      active:translate-y-0
    `,
    ghost: `
      bg-transparent text-[var(--neutral-600)]
      hover:bg-[var(--neutral-100)] hover:text-[var(--primary)]
      focus-visible:ring-[var(--neutral-300)]
    `,
    white: `
      bg-white text-[var(--primary)]
      hover:bg-[var(--neutral-50)] hover:shadow-lg hover:-translate-y-0.5
      focus-visible:ring-white
      active:translate-y-0
    `,
  };

  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-7 py-3 text-base",
    lg: "px-9 py-4 text-lg",
  };

  const widthClass = fullWidth ? "w-full" : "";

  const combinedClassName = `
    ${baseStyles}
    ${variants[variant]}
    ${sizes[size]}
    ${widthClass}
    ${className}
  `
    .trim()
    .replace(/\s+/g, " ");

  // External link
  if (href && external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedClassName}
        {...props}
      >
        {children}
        <svg
          className="w-4 h-4 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </a>
    );
  }

  // Internal link
  if (href) {
    return (
      <Link href={href} className={combinedClassName} {...props}>
        {children}
      </Link>
    );
  }

  // Button
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={combinedClassName}
      {...props}
    >
      {children}
    </button>
  );
}
