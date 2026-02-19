"use client";

import { Button } from "@mui/material";
import { ReactNode } from "react";

interface PrimaryButtonProps {
  children: ReactNode;
  onClick?: () => void;
  fullWidth?: boolean;
  className?: string;
}

export default function PrimaryButton({ children, onClick, fullWidth = false }: PrimaryButtonProps) {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      fullWidth={fullWidth}
      className="
        !bg-gradient-to-r !from-blue-800 !to-blue-600 dark:!from-blue-700 dark:!to-blue-500
        !text-white !px-6 !py-2 !rounded-full !normal-case 
        hover:!opacity-90 
        hover:!ring-2 hover:!ring-blue-300 dark:hover:!ring-blue-400
        transition-all duration-300"
    >
      {children}
    </Button>
  );
}