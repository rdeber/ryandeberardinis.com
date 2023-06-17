import { Stack, Typography, styled } from "@mui/material";
import { theme } from "../utils/theme";

export const StyledH1 = styled(Typography)`
  font-size: clamp(2.75rem, 8vw + 1rem, 4rem);
  line-height: .75;
  color: ${theme.palette.primary.main};

  ${props => props.theme.breakpoints.up("md")} {
    font-size: clamp(2.75rem, 4vw + 1rem, 5rem);
  }
`;

export const StyledH2 = styled(Typography)`
  font-size: clamp(1.1rem, 3vw + .5rem, 2rem);
  margin: 0.5rem 0 1rem;
  color: ${theme.palette.secondary.main};

  ${props => props.theme.breakpoints.up("md")} {
    font-size: clamp(1.1rem, 1.35vw + .5rem, 5rem);
  }
`;

export const StyledIcons = styled(Stack)`
  margin: 1rem 0 1rem;
  color: ${theme.palette.primary.main};

  a {
    flex-direction: column;
    color: ${theme.palette.primary.main};
    font-size: 1rem;
    font-weight: 700;

    &.photo-icon {
      svg{
        stroke-width: .9px;
      }
      path {
        transform: translate3d(1px, 2px, 0);
      }
    }
  }

  svg {
    fill: transparent;
    stroke: ${theme.palette.primary.main};
    stroke-width: 25px;
    stroke-linecap: round;
    width: 3rem;
    height: auto;
    overflow: visible;
  }

  ${props => props.theme.breakpoints.up("md")} {
  }
`;