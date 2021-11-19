/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { useSession, signIn, signOut, getSession } from "next-auth/client";
import { InferGetServerSidePropsType } from "next";
// import Image from "next/image";
import Link from "next/link";
import prisma from "../lib/prisma";
import AppLayout from "../components/layout/AppLayout";
import ComponentLayout from "../components/layout/ComponentLayout";

// export const Ct = (contacts) => {
//   const [session, loading] = useSession();
//   return (
//     <div>

//     </div>
//   );
// };

export default function Home({
      contacts,
    }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [session, loading] = useSession();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!session) {
    return (
      <div className="container mx-auto my-20 prose prose-lg">
        Not signed in <br />
        <button
          className="px-3 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          onClick={() => {
            signIn();
          }}
        >
          Sign In
        </button>
      </div>
    );
  }

  return (
    <AppLayout
      title="Footers sections free Tailwind components"
      desc="Footers sections more components for tailwind css"
    >
      <div>
        <Head>
          <title>Contact App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <ComponentLayout title={"Home Page"}>
          <h1>Contacts</h1>
          <br />
          <ul>
            {contacts.length === 0 ? (
              <p>You dont have any contact</p>
            ) : (
              contacts.map((contact) => (
                <li key={contact.id}>
                  <p> Name: {contact.name}</p>
                  <p> Number: {contact.number}</p>
                </li>
              ))
            )}
          </ul>
          <Link href="/create">
            <a className="px-3 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
              Create New Contact
            </a>
          </Link>
        </ComponentLayout>
      </div>
    </AppLayout>
  );
}

export const getServerSideProps = async ({ req, res }) => {
  const session = await getSession({ req });
  if (!session) {
    res.statusCode = 403;
    return {
      props: {
        contacts: [],
      },
    };
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  const contacts = await prisma.contact.findMany({
    where: {
      userId: user.id,
    },
  });

  return {
    props: {
      contacts,
    },
  };
};
