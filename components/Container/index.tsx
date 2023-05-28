import { ReactNode } from "react";

export const Container = ({ children, className }: { children: ReactNode; className?: string }) => {
  return <div className={`max-w-screen-2xl m-auto px-6 py-4 ${className}`}>{children}</div>;
};
