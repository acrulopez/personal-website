<script>
	import Button from './Button.svelte';
</script>

<div class="flex flex-row justify-between items-center max-w-xl">
	<div class="flex max-w-full items-center justify-start mx-16">
		<Button name="Home" url="/" external="false" />
		<Button name="Blog" url="/blog" external="false" />
		<Button name="Favs" url="/favs" external="false" />
	</div>

	<!-- <div class="flex max-w-full items-center justify-start mb-10">
		<Button name="Star" url="/" external="false" />
	</div> -->
	<div class="flex max-w-full items-center justify-end mx-16">
		<Button name="Email" url="mailto:acrulopez@gmail.com" external="false" />
		<Button name="Github" url="https://github.com/acrulopez/" external="true" />
		<Button name="Linkedin" url="https://www.linkedin.com/in/acrulopez/" external="true" />
	</div>
</div>

<hr class="w-32 h-px mx-auto border-0 rounded my-10 bg-caramel" />
