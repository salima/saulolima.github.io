import React from "react";
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";

// Components
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import Posts from "../components/Posts";
import { BackToTop } from "../components/globalStyledComponents";
import Footer from "../components/Footer";

export default function Home() {
  const { name } = useSelector(selectData);

  React.useEffect(
    function () {
      document.title = `${name} | Executivo, CTO, Head Of Technology, Tech Lead, Senior Software Engineer .Net`;
    },
    [name]
  );

  return (
    <>
      <Hero />
      <main>
        <Posts />
        <Contact />
      </main>
      <BackToTop home={"Home"} />
      <Footer />
    </>
  );
}
