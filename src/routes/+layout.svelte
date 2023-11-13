<script>
	import '../app.css';
	import { page } from '$app/stores';
	import github from '$lib/assets/icons/github.svg';
	import linkedin from '$lib/assets/icons/linkedin.svg';
	import email from '$lib/assets/icons/email.svg';
	import tidalsites from '$lib/assets/logo.png';
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
<footer>
	<div class="wrapper">
		<a class="tidalsites" href="https://tidalsites.com" target="_blank">
			<img src={tidalsites} alt="Tidal Sites" />
			<span aria-hidden="true">Tidal Sites</span>
		</a>
		<div>
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
	</div>
</footer>

<style>
	nav {
		padding-inline: 1rem;
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		gap: 1rem;
		max-width: 100em;
		margin-inline: auto;
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
		min-height: calc(100vh - 55px - 42px);
	}

	.social-icons {
		display: flex;
		gap: 0.5rem;
		padding-bottom: 0.5rem;
	}

	.social-icons > a > img {
		height: 30px;
	}

	footer {
		box-shadow: -2px 0 2px 1px rgba(0, 0, 0, 0.65);
		padding-block: 0.25rem;
		padding-inline: 1rem;
		width: 100vw;
		bottom: 0;

		& .wrapper {
			display: flex;
			justify-content: space-between;
			align-items: center;

			max-width: 100em;
			margin-inline: auto;

			& > div {
				display: flex;
				gap: 1rem;
			}
		}

		& img {
			height: 30px;
		}

		& .tidalsites {
			display: flex;
			align-items: center;
			gap: 4px;

			& > span {
				font-size: 1.3rem;
				color: #333;
				font-weight: bold;
				font-family: Rubik, Fira-Sans, sans-serif;
			}
		}
	}
</style>
