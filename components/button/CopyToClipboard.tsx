// CopyToClipboard.tsx
import React, { useState } from "react";
import { styled } from "../../stitches.config.js";
import { Clipboard, CheckCircle2, AlertCircle } from "lucide-react";

const Button = styled("button", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "$spacing-03",
  borderRadius: "4px",
  p: "$spacing-03 $spacing-02",
  willChange: "transform",
  transition: "all 150ms ease-in",
  background: "transparent",
  color: "$mauveA11",
  outline: "none",
  textDecoration: "none",
  width: "100%",

  "&:hover": {
    transition: "all 150ms ease-out",
    background: "$mauveA6",
    color: "$mauveA12",
  },
  "&:active": {
    backgroundColor: "$mauveA7",
  },
  "&:focus": {
    transition: "all 150ms ease-out",
    backgroundColor: "$mauveA7",
    color: "$mauveA12",
  },
});

const Label = styled("p", {
  fontSize: "$xs",
  fontWeight: "$medium",
  fontFamily: "$default",
});

interface CopyToClipboardProps {
  text: string;
  buttonLabel?: string;
  successMessage?: string;
  errorMessage?: string;
}

enum ButtonState {
  Initial,
  Success,
  Error,
}

const CopyToClipboard: React.FC<CopyToClipboardProps> = ({
  text,
  buttonLabel = "Copy Link",
  successMessage = "Copied!",
  errorMessage = "Failed to copy",
}) => {
  const [currentLabel, setCurrentLabel] = useState<string>(buttonLabel);
  const [buttonState, setButtonState] = useState<ButtonState>(
    ButtonState.Initial
  );

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCurrentLabel(successMessage);
      setButtonState(ButtonState.Success);
    } catch (error) {
      setCurrentLabel(errorMessage);
      setButtonState(ButtonState.Error);
    }

    setTimeout(() => {
      setCurrentLabel(buttonLabel);
      setButtonState(ButtonState.Initial);
    }, 2000);
  };

  const renderIcon = () => {
    switch (buttonState) {
      case ButtonState.Initial:
        return <Clipboard size={20} />;
      case ButtonState.Success:
        return <CheckCircle2 size={20} />;
      case ButtonState.Error:
        return <AlertCircle size={20} />;
      default:
        return null;
    }
  };

  return (
    <Button onClick={handleCopy}>
      {renderIcon()}
      <Label>{currentLabel}</Label>
    </Button>
  );
};

export default CopyToClipboard;
