<script>
	import '../app.css';
	import { page } from '$app/stores';
	import github from '$lib/assets/icons/github.svg';
	import linkedin from '$lib/assets/icons/linkedin.svg';
	import email from '$lib/assets/icons/email.svg';
</script>

<nav>
	<div class="links-group">
		<a data-active={$page.url.pathname === '/'} href="/">Home</a>
		<a data-active={$page.url.pathname === '/about'} href="/about">About</a>
		<a data-active={$page.url.pathname === '/portfolio'} href="/portfolio">Portfolio</a>
	</div>
	<div class="social-icons">
		<a href="mailto:dhaynes916@gmail.com" target="_blank">
			<img src={email} alt="email" />
		</a>
		<a href="https://github.com/devinhaynes" target="_blank">
			<img src={github} alt="github" />
		</a>

		<a href="https://www.linkedin.com/in/devin-haynes/" target="_blank">
			<img src={linkedin} alt="linkedin" />
		</a>
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
		max-width: 100em;
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

	.social-icons {
		background-color: white;
		padding: 0.5rem 1rem;
		display: flex;
		gap: 0.5rem 1rem;
		margin-block: 0.25rem;
		border-radius: 1rem;
		box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.5);
		height: 55px;
		transform: translateY(6px);
	}

	.social-icons > a {
		border: none;
		background-color: white;
	}

	.social-icons > a > img {
		height: 35px;
	}
</style>
