import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
/*
=============== 
Variables
===============
Color logo: #35495e
*/
:root {
  /* Primary Color */
  --primary: #cfe2ff;
  --primary-light: #FBFDFF;
  --primary-dark: #316e7e;
  --outline-dark: #36a2ef;
  --border: 1px solid ##cfe2ff;
  --transition: all 0.3s linear;
  --nav-height: 60px;
  --min-footer-height: 11vh;
  --card-height: 32rem;
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
  border-bottom: var(--border);
}

.link-icons {
  line-height: 0;
  font-size: 2.25rem;
  transition: var(--transition);
  color: ${({ theme }) => theme.color};

  &:hover {
    color: var(--outline-dark);
  }
}

.nav-link {
  &:hover {
    color: var(--outline-dark);
  }
  &:active {
    color: var(--outline-dark);
  }    
}
.nav-link-active {
  color: var(--outline-dark);
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
  border: var(--border);
  transition: all .2s ease-in-out;
  &:hover {
    transform: scale(1.03);
  }

  .card-img-top {
    height: 50%;
  }
}

.page-item.active .page-link {
    background-color: var(--primary);
    border-color: var(--primary);
}
  
.btn-outline-dark{
  background-color: var(--outline-dark);  
  color: ${({ theme }) => theme.color};

  &:hover {
      color: var(--outline-dark);  
      background-color: var(--primary);  
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
      color: var(--primary);
    }
  }
`;

export default GlobalStyles;
