// import { faker } from '@faker-js/faker';
// import prisma from '$lib/prisma';
// import type { PageServerLoad } from './$types';

// export const load = (async () => {
// 	return {
// 		notifications: await prisma.notification.findMany()
// 	};
// }) satisfies PageServerLoad;

// const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// export const actions = {
// 	create: async () => {
// 		await sleep(1000);
// 		await prisma.notification.create({
// 			data: {
// 				message: faker.lorem.paragraph()
// 			}
// 		});
// 	}
// };
import prisma from '$lib/prisma';
import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	try {
		const data = await prisma.notification.findMany();

		return new Response(JSON.stringify(data));
	} catch (err) {
		console.error('Error getting notifications', err);
		if (err instanceof Error) {
			error(500, err.message);
		} else {
			error(500, 'Unknown error');
		}
	}
};
