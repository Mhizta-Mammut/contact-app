import { getSession } from "next-auth/client";
import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  const { name, email, number } = req.body;
  const session = await getSession({ req });

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });
  console.log(user);

  const result = await prisma.contact.create({
    data: {
      name,
      email,
      number,
      userId: user.id,
    },
  });

  return res.json(result);
}
