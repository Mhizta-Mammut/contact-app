/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { getSession } from "next-auth/client";
import { InferGetServerSidePropsType } from "next";
// import Image from "next/image";
import Link from "next/link";
import prisma from "../lib/prisma";
import AppLayout from "../components/layout/AppLayout";
import ComponentLayout from "../components/layout/ComponentLayout";
import ComplexTable from "../components/elements/ComplexTable";

export default function Home({
      contacts,
    }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <AppLayout
      title="Contact App"
      desc="This is Contact App Designed by Mhizta Mammut"
    >
      <div>
        <Head>
          <title>Contact App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <ComponentLayout>
          <ComplexTable
            headerLabel={"Contacts List"}
            data={contacts}
            withPager={true}
            withHeader={true}
          />
          {/* /////// */}

          <Link href="/create">
            <a className="flex justify-center px-3 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
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
