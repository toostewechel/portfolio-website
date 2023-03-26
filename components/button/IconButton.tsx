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
  transition: "background 300ms ease-in",
  background: "transparent",
  border: "2px solid transparent",
  outline: 0,

  "&:hover": {
    transition: "background 300ms ease-out",
    border: "2px solid transparent",
    backgroundColor: "$mauve2",
    color: "$mauve12",
  },
  "&:active": {
    backgroundColor: "$mauve3",
  },
  "&:focus": {
    transition: "background 300ms ease-out",
    backgroundColor: "$mauve2",
    border: "2px solid $blue11",
    color: "$mauve12",
  },
});

interface Props {
  href: string;
  ariaLabel: string;
  tooltipLabel: string;
  children: any;
}

export const IconButton = ({
  href,
  ariaLabel,
  tooltipLabel,
  children,
}: Props) => {
  return (
    <Provider>
      <Tooltip>
        <TooltipTrigger>
          <IconLink href={href} aria-label={ariaLabel}>
            {children}
          </IconLink>
        </TooltipTrigger>
        <TooltipContent sideOffset={4}>{tooltipLabel}</TooltipContent>
      </Tooltip>
    </Provider>
  );
};
