<script>
	import '../app.css';
	import { page } from '$app/stores';

	import logo from '$lib/assets/devin-logo.svg';
</script>

<nav>
	<a class="logo" href="/">
		<img src={logo} alt="Devin" />
	</a>
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
		justify-content: space-between;
		gap: 1rem;
	}

	.links-group {
		display: flex;
		gap: 1rem;

		& a {
			padding-block: 1rem;
			text-transform: uppercase;
			color: var(--dark-gray);

			&[data-active='true'] {
				border-bottom: 8px solid var(--primary-color);
				color: var(--primary-color);
			}
		}
	}

	.logo {
		height: calc(50px + 2rem);
		padding-block: 1rem;

		& img {
			max-height: 100%;
		}
	}

	main {
		max-width: var(--max-content-width);
		margin-inline: auto;
		padding-block: 3rem;
	}
</style>
