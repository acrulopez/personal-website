<script>
	export let name;
	export let url;
	export let external;

	let target = '';
	if (external == 'true') {
		target = '_blank';
	}

	import Icon from './Icon.svelte';
</script>

<div>
	<a class="peer" href={url} {target} rel="noreferrer">
		<div class="hover:bg-caramel group/svgfill max-w-fit rounded-lg my-5 mx-2 px-2 py-2">
			<Icon {name} class="hover:bg-caramel group-hover/svgfill:fill-black fill-white" />
		</div>
	</a>
	<div class="text-center invisible peer-hover:visible">
		<p>{name}</p>
	</div>
</div>
<!-- <a href={url}>
	<div class="hover:bg-caramel max-w-fit rounded-lg my-5 mx-2 px-2 py-2">
		<object data="./.svg" type="image/svg+xml">
			<img src="yourfallback.jpg" />
		  </object>
	</div>
</a> -->
