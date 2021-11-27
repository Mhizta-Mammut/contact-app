import { getSession } from "next-auth/client";
import prisma from "../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.body);
  const { name, email, number, contact_id } = req.body;
  const session = await getSession({ req });

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  if (!user) {
    return;
  }

  const result = await prisma.contact.update({
    where: {
      id: contact_id,
    },
    data: {
      name,
      email,
      number,
    },
  });

  //   const result = await prisma.contact.create({
  //     data: {
  //       name,
  //       email,
  //       number,
  //       userId: user.id,
  //     },
  //   });

  return res.json(result);
}
