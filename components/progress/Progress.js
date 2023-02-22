import React from "react";
import { styled } from "../../stitches.config.js";
import * as Progress from '@radix-ui/react-progress';

const StyledProgress = styled(Progress.Root, {
	overflow: "hidden",
	background: "$mauve3",
	borderRadius: "6px",
  width: '100%',
  height: '16px',
	transform: "translateZ(0)",
})

const StyledProgressIndicator = styled(Progress.Indicator, {
	width: "100%",
	height: "100%",
	transition: "transform 660ms cubic-bezier(0.65, 0, 0.35, 1)",
	borderRadius: "4px",
	
	variants: {
		gradient: {
			blue: {
				background: "linear-gradient(90deg, $blue9, $blue11)",
			},
			plum: {
				background: "linear-gradient(90deg, $plum9, $plum11)",
			},
			design: {
				background: "linear-gradient(90deg, $crimson9, $crimson11)",
			},
			teal: {
				background: "linear-gradient(90deg, $teal9, $teal11)",
			},
		},
	},
})

export default function ProgressBar ({ gradient, readingProgress }) {
	return(
		<StyledProgress value={readingProgress}>
			<StyledProgressIndicator gradient={gradient} style={{ width: `${readingProgress}%`, }} />
		</StyledProgress>
	)		
}

