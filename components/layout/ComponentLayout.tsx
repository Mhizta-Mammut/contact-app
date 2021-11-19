/* eslint-disable @next/next/no-img-element */
import { signOut, useSession } from "next-auth/client";
import React, { useRef, useState } from "react";

// interface Props {
//   element: JSX.Element;
//   component: any;
//   title: string;
//   jsLink?: string;
//   needConfiguration?: boolean;
//   showSwitchMode?: boolean;
//   vertical?: boolean;
//   containerClasses?: string;
//   fullscreen?: boolean;
//   withPub?: boolean;
// }

interface Props {
  title: string;
  desc?: string;
  withPub?: boolean;
  children: React.ReactNode;
}

const ComponentLayout = ({ title, desc, children }: Props) => {
  const [isDarkMode, setDarkMode] = useState(false);
  const previewRef = useRef<HTMLDivElement>();

  const changeMode = (isDark) => {
    setDarkMode(isDark);
    if (isDark) {
      previewRef.current.classList.add("dark");
    } else {
      previewRef.current.classList.remove("dark");
    }
  };
  const [session, loading] = useSession();

  return (
    <React.Fragment>
      <div className={`bg-gray-100 shadow rounded-md mb-4`} key={title}>
        <div className="flex flex-col items-center justify-between p-4 bg-white border md:flex-row rounded-xl">
          <div className="flex flex-row flex-wrap items-center justify-center gap-4">
            <img
              src={session.user.image}
              alt="profile"
              className="w-20 h-20 rounded-full"
            />
            <ul>
              <li>
                <p>Name: {session.user.name}</p>
                <p>Email: {session.user.email}</p>
              </li>
            </ul>

            <button
              className="px-3 py-2 text-white bg-blue-500 rounded-sm hover:bg-blue-600"
              onClick={() => {
                signOut();
              }}
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
      {children}
    </React.Fragment>
  );
};

export default ComponentLayout;
