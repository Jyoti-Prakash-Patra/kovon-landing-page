import { SvgIconComponent } from "@mui/icons-material";

export interface NavItem {
  label: string;
  href: string;
}


export interface Feature {
  title: string;
  description: string;
  icon: SvgIconComponent;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}
