<script>
	import '../app.css';
	import { page } from '$app/stores';
</script>

<nav>
	<div class="links-group">
		<a data-active={$page.url.pathname === '/'} href="/">Home</a>
		<a data-active={$page.url.pathname === '/about'} href="/about">About</a>
		<a data-active={$page.url.pathname === '/portfolio'} href="/portfolio">Portfolio</a>
	</div>
</nav>

<main>
	<slot />
</main>

<style>
	nav {
		padding-inline: 1rem;
		display: flex;
		align-items: flex-end;
		justify-content: flex-end;
		gap: 1rem;
	}

	.links-group {
		display: flex;
		gap: 1rem;

		& a {
			padding-block: 1rem;
			text-transform: uppercase;
			color: var(--dark-gray);
			font-weight: bold;

			&[data-active='true'] {
				border-bottom: 4px solid var(--primary-color);
				color: var(--primary-color);
			}
		}
	}

	main {
		max-width: var(--max-content-width);
		margin-inline: auto;
		padding-block: 3rem;
		padding-inline: 1rem;
	}
</style>
