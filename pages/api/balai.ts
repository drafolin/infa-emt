import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const prisma = new PrismaClient();

	await prisma.$connect();

	const people = (
		await prisma.personne.findMany({
			select: {
				nom: true,
			},
		})
	).map((p) => p.nom);

	let fait = new Map<string, boolean[]>();

	for (const personne of people) {
		for (let week = 0; week < 39; week++) {
			fait.set(personne, [...(fait?.get(personne) || []), false]);
		}
	}

	for (const balayage of await prisma.balayer.findMany({
		select: {
			personne: true,
			semaine: true,
		},
	})) {
		let temp = fait.get(balayage.personne.nom) || [];
		temp[balayage.semaine.numero] = true;
		fait.set(balayage.personne.nom, temp);
	}
	let noms = await prisma.personne.findMany({ select: { nom: true } });

	await prisma.$disconnect();

	return res.status(200).json({
		fait: Object.fromEntries(fait),
		noms: noms.map((p) => p.nom),
	});
};
