import { Provider } from "next-auth/client";
import Header from "../components/Header";
import "../styles/tailwind.css";

const links = [
  {
    label: "Home",
    link: "/",
    isSelected: true,
    desc: "Home Page",
    icon: null,
  },
  {
    label: "Create Contact",
    link: "/",
    isSelected: true,
    desc: "Home Page",
    icon: null,
  },
  {
    label: "Contact",
    link: "/",
    isSelected: true,
    desc: "Home Page",
    icon: null,
  },
  {
    label: "About",
    link: "/",
    isSelected: true,
    desc: "Home Page",
    icon: null,
  },
];

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Header links={links} hideGitHubLink withShadow hideHelp isFat />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
