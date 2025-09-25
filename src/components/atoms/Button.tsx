import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
}

function Button({ variant = "primary", className, ...props }: ButtonProps) {
  const base = "px-4 py-2 rounded-lg font-semibold transition-colors";
  const variants = {
    primary: "bg-amber-500 text-white hover:bg-amber-600",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    ghost: "bg-transparent text-gray-800 hover:bg-gray-100",
  };

  return <button className={clsx(base, variants[variant], className)} {...props} />;
}

export default Button;
