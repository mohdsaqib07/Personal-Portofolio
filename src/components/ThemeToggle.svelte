<!-- src/lib/components/ThemeToggle.svelte -->
<script>
	import { theme } from '$lib/stores/theme';
	import { get } from 'svelte/store';

	let current;
	theme.subscribe((value) => (current = value));

	function toggleTheme() {
		theme.set(current === 'dark' ? 'light' : 'dark');
	}
</script>

<button
	on:click={toggleTheme}
	class="p-2 transition-transform rounded-full hover:scale-110 animate-bounce"
	aria-label="Toggle theme"
>
	<i class={`fas ${current === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
</button>
