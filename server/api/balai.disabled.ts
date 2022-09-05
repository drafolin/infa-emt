import { PrismaClient } from "@prisma/client";

/*export default defineEventHandler(*/ (event) => {
  let body = "";
  let prisma = new PrismaClient();
  event.req.on("data", (chunk) => {
    body += chunk;
  });
  event.req.on("end", async () => {
    await prisma.$connect();
    let object: {
      nom: string;
      week: number;
      fait: boolean;
    } = JSON.parse(body);

    if (object.fait) {
      await prisma.balayer.create({
        data: {
          personne: {
            connect: {
              id: (
                await prisma.personne.findFirstOrThrow({
                  where: {
                    nom: object.nom,
                  },
                  select: {
                    id: true,
                  },
                })
              ).id,
            },
          },
          semaine: {
            connect: {
              id: (
                await prisma.semaine.findFirstOrThrow({
                  where: {
                    numero: object.week,
                  },
                  select: {
                    id: true,
                  },
                })
              ).id,
            },
          },
        },
      });
    } else {
      await prisma.balayer.deleteMany({
        where: {
          personne: {
            nom: object.nom,
          },
          semaine: {
            numero: object.week,
          },
        },
      });
    }
    console.log("done");
    await prisma.$disconnect();
  });
  return;
}; //);
