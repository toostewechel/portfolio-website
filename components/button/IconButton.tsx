import { styled } from "../../stitches.config.js";
import {
  Provider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../tooltip/Tooltip.js";

const IconLink = styled("a", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "6px",
  color: "$mauve11",
  padding: "$spacing-04",
  transition: "background 150ms ease-in",
  background: "transparent",
  border: "2px solid transparent",
  outline: 0,

  variants: {
    size: {
      small: {
        padding: "$spacing-03",
      }
    },
    mode: {
      light: {
        color: "$mauve9",
        "&:hover": {
          transition: "background 150ms ease-out",
          border: "2px solid transparent",
          backgroundColor: "rgba(255,255,255, 0.05)",
          color: "$mauve6",
        },
      },
    },
  },

  "&:hover": {
    transition: "background 150ms ease-out",
    border: "2px solid transparent",
    backgroundColor: "rgba(0,0,0, 0.1)",
    color: "$mauve12",
  },
  "&:active": {
    backgroundColor: "$mauve3",
  },
  "&:focus": {
    transition: "background 150ms ease-out",
    backgroundColor: "rgba(0,0,0, 0.1)",
    border: "2px solid $blue11",
    color: "$mauve12",
  },
});

interface Props {
  href: string;
  ariaLabel: string;
  tooltipLabel: string;
  children: React.ReactNode;
  target: string;
  title: string;
  mode?: "light";
  size?: "small";
}

export const IconButton = ({
  href,
  ariaLabel,
  tooltipLabel,
  children,
  target,
  title,
  mode,
  size,
}: Props) => {
  return (
    <Provider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div>
          <IconLink
            size={size}
            mode={mode}
            title={title}
            target={target}
            href={href}
            aria-label={ariaLabel}
          >
            {children}
          </IconLink>
          </div>
        </TooltipTrigger>
        <TooltipContent sideOffset={4}>{tooltipLabel}</TooltipContent>
      </Tooltip>
    </Provider>
  );
};
