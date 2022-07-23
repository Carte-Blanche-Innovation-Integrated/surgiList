import { PrismaClient } from "@prisma/client";

export default async (req, res) => {
  const prisma = new PrismaClient();

  let body = req.body;
  for (let k in body) if (!body[k]) delete body[k];

  await prisma.patient
    .create({ data: { ...body, createdAt: new Date() } })
    .then((_) => {
      res.status(204).end();
    })
    .catch((e) => {
      res.status(400).json(e.message).end();
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
};
