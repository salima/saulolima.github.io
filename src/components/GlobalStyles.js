import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
/*
=============== 
Variables
===============
Color logo: #35495e
background-color: #011039;
background-color: #01111c;
background-color: #FAFAFA;
background-color: #00acff;
*/

:root {
  /* Primary Color */
  --primary: #011039;
  --primary-light: #00acff;
  --primary-dark: #01111c;
  --outline-dark: #01111c;
  
  --border: 1px solid #011039;
  
  --transition: all 0.3s linear;  
  
  --min-footer-height: 11vh;
  
  --card-height: 35rem;
  
  --nav-height: 65px;
  --nav-link: #00acff;
  --nav-link-active: #00acff;
}

/*
=============== 
Global Styles
===============
*/
body {
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
}

a:hover {
  cursor: pointer;
}

.navbar {
  background-color: transparent;
}

.navbar-active {
  background-color: #1b1b1b;
  border-bottom: #000000;
	box-shadow: 0 0.125rem 0.25rem 0 rgb(0 0 0 / 50%);
}

#publicacao{
  background-color: #FFFFFF;
}

.link-icons {
  line-height: 0;
  font-size: 2.25rem;
  transition: var(--transition);
  color: ${({ theme }) => theme.color};
  opacity: 0.5;
  &:hover {
    opacity: 1;
    color: ${({ theme }) => (theme.color)};
  }
}

.nav-link {
  color: ${({ theme }) => theme.color};
  &:hover {
    color:var(--nav-link);
  }
}
.nav-link-active {
  color:var(--nav-link-active);
}

.section {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: var(--nav-height) 0;
}

.title {
  font-family: "Poppins", Sans-serif;
}

.card {
  height: var(--card-height);
  transition: all .2s ease-in-out;
  &:hover {
    transform: scale(1.03);
  }

  .card-img-top {
    height: 100%;
  }
}

.page-item.active .page-link {
    background-color: var(--outline-dark);
    border-color: var(--outline-dark);
}
.card-title {          
  color: #01111c;    
}
.btn-outline-dark{
  background-color: var(--outline-dark);  
  color: ${({ theme }) => theme.color};

  &:hover {
      color: var(--outline-dark);  
      background-color:#ffffff;  
    }
  }

@media screen and (min-width: 800px) {
  .link-icons {
    font-size: 2.5rem;
  }
  .form-group {
      max-width: 750px;
    }   
}

 @media screen and (min-width: 1367px) {
    .link-icons:hover {
      color:var(--nav-link);
    }
  }
`;

export default GlobalStyles;
