import React, { FC } from "react";
import Link from "next/link";
import FormSubscribe from "./FormSubscribe";
import PagerButton from "./PagerButton";

interface Props {
  withHeader?: boolean;
  withPager?: boolean;
  headerLabel?: string;
  data: TableProps[];
}

interface TableProps {
  name: string;
  number: string;
  email: string;
  id: string;
}

export const DeleteContact = async (id) => {
  return;
};

const ComplexTable = (props: Props) => {
  const headers = ["Name", "Number", "Email", "Action"];

  return (
    <div className="container px-4 mx-auto max-w-7xl sm:px-8">
      <div className="py-8">
        {props.withHeader && (
          <div className="flex flex-row justify-between w-full mb-1 sm:mb-0">
            <h2 className="text-2xl leading-tight">{props.headerLabel}</h2>

            <div className="text-end">
              <FormSubscribe placeholder="name" label="Filter" />
            </div>
          </div>
        )}

        <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
          <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
            <table className="min-w-full leading-normal text-center border-t-2">
              <thead>
                <tr>
                  {headers.map((header) => {
                    return (
                      <th
                        scope="col"
                        key={header}
                        className="px-5 py-3 text-sm font-normal text-gray-800 uppercase bg-white border-b border-gray-200"
                      >
                        {header}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {props.data.map((row) => {
                  return (
                    <tr className="text-center" key={row.name}>
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <div className="flex">
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {row.name}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {row.number}
                        </p>
                      </td>
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {row.email}
                        </p>
                      </td>
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <Link href={`/edit/${row.id}`} passHref>
                          <a>
                            <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                              <span
                                aria-hidden
                                className="absolute inset-0 bg-green-200 rounded-full opacity-50"
                              ></span>

                              <span className="relative">Edit</span>
                            </span>
                          </a>
                        </Link>

                        <a
                          className="cursor-pointer"
                          onClick={() => alert(`Deleted ${row.id}`)}
                        >
                          <span className="relative inline-block px-3 py-1 m-1 font-semibold leading-tight text-green-900">
                            <span
                              aria-hidden
                              className="absolute inset-0 bg-red-200 rounded-full opacity-50"
                            ></span>
                            <span className="relative">Delete</span>
                          </span>
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {props.withPager && (
              <div className="flex flex-col items-center px-5 py-5 bg-white xs:flex-row xs:justify-between">
                <PagerButton />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplexTable;

// function DeleteCossssntact(id: string):  {
//     throw new Error("Function not implemented.");
// }
