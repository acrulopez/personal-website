<script>
	import '../app.css';
	import NavBar from '../components/NavBar.svelte';
</script>

<div
	class="flex flex-col mx-auto max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-4xl 2xl:max-w-5xl text-slate-300"
>
	<NavBar />
	<slot />
</div>

<!-- <style global>
	body {
		background-color: limegreen;
	}
</style> -->
