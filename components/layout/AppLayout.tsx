import Footer from "./Footer";
import Meta from "./Meta";
import Header from "../Header";

const links = [
  {
    label: "Home",
    link: "/",
    isSelected: true,
  },
  {
    label: "Create Contact",
    link: "/create",
  },
  {
    label: "Contact",
    link: "/contact-us",
  },
  {
    label: "About",
    link: "/about",
  },
];

const ddmItems = [
  {
    label: "Settings",
    link: "/settings",
  },
  {
    label: "Account",
    link: "/account",
  },
  {
    label: "Logout",
    link: "/Logout",
  },
];

const footerLinks = [
  {
    label: "Components",
    subLinks: [
      {
        subLabel: "Elements",
        subLink: "/elements",
      },
      {
        subLabel: "Forms",
        subLink: "/links",
      },
      {
        subLabel: "Commerces",
        subLink: "/commerces",
      },
      {
        subLabel: "Navigation",
        subLink: "/navigation",
      },
    ],
  },
  {
    label: "Contacts",
    subLinks: [
      {
        subLabel: "Github",
        subLink: "/github",
      },
      {
        subLabel: "Facebook",
        subLink: "/facebook",
      },
      {
        subLabel: "Twitter",
        subLink: "/twitter",
      },
      {
        subLabel: "LinkedIn",
        subLink: "/linkedIn",
      },
    ],
  },
  {
    label: "Customization",
    subLinks: [
      {
        subLabel: "Settings",
        subLink: "/settings",
      },
      {
        subLabel: "Themes",
        subLink: "/themes",
      },
      {
        subLabel: "Plugins",
        subLink: "/plugins",
      },
      {
        subLabel: "LinkedIn",
        subLink: "/linkedIn",
      },
    ],
  },
];

// const footerLink = [
//   {
//     label: "Configuration",
//     link: "/started",
//   },
//   {
//     label: "Github",
//     link: "https://github.com/Charlie85270/bbhgbv",
//   },
//   {
//     label: "LinkedIn",
//     link: "https://www.linkedin.com/in/crabiller/",
//   },
// ];

interface Props {
  title: string;
  desc: string;
  withPub?: boolean;
  children: React.ReactNode;
}

const AppLayout = ({ title, desc, children, withPub }: Props) => {
  return (
    <div className="relative bg-white ">
      <Meta pageTitle={title} description={desc} />
      <div className="h-full mx-auto" style={{ minHeight: 85 + "vh" }}>
        <div className="relative z-10 h-full pb-8 overflow-hidden bg-white sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
          <div className="dark">
            <Header
              links={links}
              hideGitHubLink={true}
              withShadow={true}
              ddmItems={ddmItems}
              hideHelp
              isFat
            />
          </div>

          <main
            className={`mx-auto ${
              withPub ? "max-w-6xl" : "max-w-7xl"
            } px-4 mt-8 sm:px-6  lg:px-8 h-full`}
          >
            {children}
          </main>
          {withPub && (
            <div className="top-0 right-0 px-2 pt-32 pr-4 mt-8 w-80 xs:hidden 2xl:absolute"></div>
          )}
        </div>
      </div>
      <div className="dark">
        <Footer
          links={footerLinks}
          withSocialLink={true}
          withCredits={true}
          showSubLinks={true}
        />
      </div>
    </div>
  );
};

export default AppLayout;
