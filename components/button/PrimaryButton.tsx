"use client";

import { Button } from "@mui/material";
import { ReactNode } from "react";

interface PrimaryButtonProps {
  children: ReactNode;
  onClick?: () => void;
  fullWidth?: boolean;
}

export default function PrimaryButton({
  children,
  onClick,
  fullWidth = false,
}: PrimaryButtonProps) {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      fullWidth={fullWidth}
      className="!bg-black hover:!bg-gray-800 !text-white !px-6 !py-2 !rounded-lg !normal-case"
    >
      {children}
    </Button>
  );
}
