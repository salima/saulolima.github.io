import React from "react";
import { useAppContext } from "./appContext";
import { useDispatch, useSelector } from "react-redux";
import {
  selectError,
  selectIsLoading,
} from "./pages/homeSlice";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Element } from "react-scroll";
import { ThemeProvider } from "styled-components";
// Components
import { Container } from "react-bootstrap";
import { Loading } from "./components/globalStyledComponents";
import ScrollToTop from "./components/ScrollToTop";
import GlobalStyles from "./components/GlobalStyles";
import NavBar from "./components/NavBar";
// Pages
import Home from "./pages/Home";
import AllPosts from "./pages/AllPosts";
import NotFound from "./pages/NotFound";

const themes = {
  light: {
    name: "light",
    color: "#45413C",
    background: "#FBFDFF",
  },
  dark: {
    name: "dark",
    color: "#FBFDFF", 
    background: "#FBFDFF",
  },
};

export default function App() {
  const { theme, setTheme, setNavColor } = useAppContext();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  
  const listenScrollEvent = () => {
    
    if(window.location.href.includes("Publicacoes")){
      setNavColor("navbar-active");
      return;
    }
    window.scrollY > 10 ? setNavColor("navbar-active") : setNavColor("navbar");
  };
  
  React.useEffect(
    function () {
      const updateTheme = () => setTheme("dark")
        //darkMode ? setTheme("dark") : setTheme("dark");
      updateTheme();
    },
    [setTheme, dispatch]
  );

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => setTheme("dark")
      //e.matches ? setTheme("dark") : setTheme("light")
    );
    
    React.useEffect(() => {
      window.addEventListener("scroll", listenScrollEvent);
      return () => {
        window.removeEventListener("scroll", listenScrollEvent);
      };
    }, []);

    React.useEffect(() => {
      const scriptGoogletagmanager = document.createElement('script');
      const script = document.createElement('script');
    
      scriptGoogletagmanager.src = "https://www.googletagmanager.com/gtag/js?id=G-25QBVQJ9R3";
      scriptGoogletagmanager.async = true;
      script.innerHTML = "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-25QBVQJ9R3');"

      document.body.appendChild(scriptGoogletagmanager);
      document.body.appendChild(script);
    
      return () => {
        document.body.removeChild(script);
      }
    }, []);

  if (isLoading) {
    return (
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyles />
        <Container className="d-flex vh-100 align-items-center">
          <Loading />
        </Container>
      </ThemeProvider>
    );
  } else if (error) {
    return (
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyles />
        <Container className="d-flex vh-100 align-items-center justify-content-center">
          <h2>{error}</h2>
        </Container>
      </ThemeProvider>
    );
  } else {
    return (
      <HashRouter>
        <ThemeProvider theme={themes[theme]}>
          <ScrollToTop />
          <GlobalStyles />
          <Element name={"Home"} id="home">
            <NavBar />
          </Element>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Publicacoes" element={<AllPosts />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ThemeProvider>
      </HashRouter>
    );
  }
}
