/* eslint-disable react-hooks/rules-of-hooks */
import Head from "next/head";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import AppLayout from "../../components/layout/AppLayout";
import ComponentLayout from "../../components/layout/ComponentLayout";
import InputText from "../../components/elements/InputText";
import Button from "../../components/elements/Button";
import { InferGetServerSidePropsType, NextPageContext } from "next";
import prisma from "../../lib/prisma";
import Router from "next/router";

const EditModule = ({
  contact,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();
  // const { isSubmitting } = formState;

  const [email, setEmail] = useState(contact.email);
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);
  const [contact_id, setContact_id] = useState(contact.id);

  var load = false;

  const onSubmit = async () => {
    // e.preventDefault();

    const body = { name, email, number, contact_id };

    try {
      const result = await fetch("/api/update-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (result.status === 200) {
        await Router.push("/");
      }
      console.log(result.statusText);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <AppLayout
      title="Contact App"
      desc="This is Contact App Designed by Mhizta Mammut"
    >
      <Head>
        <title>Contact App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ComponentLayout>
        <section className="h-screen">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="container max-w-2xl mx-auto shadow-md md:w-3/4"
          >
            <div className="p-4 bg-gray-100 border-t-2 border-indigo-400 rounded-lg bg-opacity-5">
              <div className="max-w-sm mx-auto md:w-full md:mx-0">
                <div className="inline-flex items-center space-x-4">
                  <h1 className="text-gray-600">Edit Contact</h1>
                </div>
              </div>
            </div>
            <div className="pt-3 space-y-6 bg-white border-t-2 border-blue-500s">
              <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                <h2 className="max-w-sm mx-auto md:w-1/3">Full Name</h2>
                <div className="max-w-sm mx-auto md:w-2/3">
                  <InputText
                    placeholder="Mhizta Mammut"
                    value={name}
                    id="user-info-email"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>

              <hr />
              <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                <h2 className="max-w-sm mx-auto md:w-1/3">Email</h2>
                <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
                  <div>
                    <InputText
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      id="user-info-name"
                    />
                  </div>
                </div>
              </div>

              <hr />
              <div className="items-center w-full p-8 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                <h2 className="max-w-sm mx-auto md:w-4/12">Mobile Number</h2>
                <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
                  <div>
                    <InputText
                      placeholder="09023323432"
                      onChange={(e) => setNumber(e.target.value)}
                      id="user-info-name"
                      value={number}
                    />
                  </div>
                </div>
                {/* <div className="w-full max-w-sm pl-2 mx-auto space-y-5 md:w-5/12 md:pl-9 md:inline-flex">
                  <InputText placeholder="0703434334" id="user-info-password" />
                </div>

                <div className="text-center md:w-3/12 md:pl-6">
                  <Button color="pink" label="Change" />
                </div> */}
              </div>

              <hr />
              <div className="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
                <Button
                  submit={true}
                  spinner={isSubmitting}
                  disabled={isSubmitting}
                  color="blue"
                  label="Update"
                />
              </div>
            </div>
          </form>
        </section>
      </ComponentLayout>
    </AppLayout>
  );
};

export default EditModule;

export const getServerSideProps = async ({ query }) => {
  let id = query.contact_id;

  const contact = await prisma.contact.findUnique({
    where: {
      id: id,
    },
  });
  return {
    props: {
      contact,
    },
  };
};
