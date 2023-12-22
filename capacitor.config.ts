import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
	appId: 'com.example.sveltecap',
	appName: 'Svelte Cap',
	webDir: 'build',
	server: {
		androidScheme: 'https'
	}
};

export default config;
