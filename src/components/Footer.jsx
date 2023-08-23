import styled from "styled-components";
// Components
import SocialLinks from "./SocialLinks";

//background: var(--primary);
export default function Footer() {
  const StyledFooter = styled.footer`
  min-height: var(--min-footer-height);
  background-color: #01111c;

  a {
    color: #ffffff;

    &:hover {
      color:var(--nav-link);
    }
  }
`;

  return (
  <StyledFooter className="d-flex align-items-center justify-content-center p-2">
    <div className="container d-flex justify-content-between">
      <div className="d-flex align-items-center justify-content-start p-2">
        <span>© {new Date().getFullYear()} Saulo Lima</span>
      </div>
      <div className="d-flex align-items-center justify-content-end p-2">
        <SocialLinks />
      </div>
    </div>
    </StyledFooter>
  );
}