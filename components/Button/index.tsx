import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
}

export const Button = ({ children, className, variant = "primary" }: Props) => {
  const buttonStyles = { primary: "bg-mint hover:bg-opacity-90 text-black", secondary: "bg-transparent text-white border-2 border-mint hover:bg-mint hover:text-black" };

  return <button className={`rounded-md px-4 py-2 duration-200 ${buttonStyles[variant]} ${className}`}>{children}</button>;
};
