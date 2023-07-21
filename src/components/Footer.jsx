
import { useAppContext } from "../appContext";
import styled from "styled-components";
// Components
import SocialLinks from "./SocialLinks";

//background: var(--primary);
export default function Footer() {
  const { theme } = useAppContext();

  const StyledFooter = styled.footer`
  min-height: var(--min-footer-height);
  background: var(${theme === "light" ? "var(--primary)" : "light"});

  a {
    color: #45413c;

    &:hover {
      color: var(--outline-dark);
    }
  }
`;

  return (
    <StyledFooter className="d-flex align-items-center justify-content-center p-2">
      <SocialLinks />
    </StyledFooter>
  );
}
