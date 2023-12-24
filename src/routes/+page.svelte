<script lang="ts">
	import { onMount } from 'svelte';
	// import type { Notification } from '@prisma/client';

	type Notification = {
		id: number;
		message: string;
	};
	let data: Notification[] = [];

	const loadData = async () => {
		const response = await fetch('/api/notifications', {
			method: 'GET'
		});

		data = await response.json();
		console.log('data', data);
	};

	onMount(() => {
		loadData();
	});
</script>

<div class="p-12 text-center m-4 rounded-md shadow-md bg-slate-100">Hello</div>

<form method="POST" action="?/create">
	<button class="bg-emerald-400 p-2 text-white rounded-md">Create Notification</button>
</form>

{#if data.length > 0}
	<div>
		<h1>Notifications</h1>
		{#each data as notification (notification.id)}
			<p>{notification.message}</p>
		{/each}
	</div>
{/if}
