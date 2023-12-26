<script lang="ts">
	import { onMount } from 'svelte';
	// import type { Notification } from '@prisma/client';

	type Notification = {
		id: number;
		message: string;
	};
	let data: Notification[] = [];

	const loadData = async () => {
		const response = await fetch('http://192.168.0.109:5173/api/notifications', {
			method: 'GET'
		});

		if (!response.ok) {
			return console.error('failed to load notifications');
		}

		data = await response.json();
		console.log('data', data);
	};

	const createNotification = async () => {
		const response = await fetch('http://192.168.0.109:5173/api/notifications', {
			method: 'POST'
		});

		if (!response.ok) {
			return console.error('failed to create notifications');
		}

		console.info('successfully created notification');
		await loadData();
	};

	onMount(() => {
		loadData();
	});
</script>

<div class="p-12 text-center m-4 rounded-md shadow-md bg-slate-100">Hello</div>

<button class="bg-emerald-400 p-2 text-white rounded-md" on:click={createNotification}
	>Create Notification</button
>

{#if data.length > 0}
	<div>
		<h1>Notifications</h1>
		{#each data as notification (notification.id)}
			<p>{notification.message}</p>
		{/each}
	</div>
{/if}
