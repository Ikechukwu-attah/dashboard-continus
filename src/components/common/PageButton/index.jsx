import { Theme } from "../../../Theme";
import { StyledButton } from "../Button/style";

const PageHeadingButtons = ({ text }) => (
  <StyledButton
    padding="1.2rem 1.9rem"
    background={Theme.colors.primaryColor}
    fontSize="1.8rem"
    color={Theme.colors.secondaryColor}
    borderRadius="3rem"
    fontWeight="500"
  >
    {text}

    {/* Dont get it twisted before it get too late */}
  </StyledButton>
);

export default PageHeadingButtons;
