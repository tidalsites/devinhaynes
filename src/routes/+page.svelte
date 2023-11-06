<script>
	import profile from '$lib/assets/profile.jpg';
</script>

<svelte:head>
	<title>Devin Haynes | Developer</title>
</svelte:head>

<div class="home">
	<div class="top">
		<div class="profile">
			<img src={profile} alt="Devin" />
		</div>
		<div class="intro">
			<div class="bubble header">
				<h1>Hi, I'm Devin</h1>
			</div>
			<div class="bubble dark">
				<p>UI/UX Developer</p>
			</div>
		</div>
	</div>

	<div class="bottom">
		<div class="cta">
			<p>
				I am a U.S. based Frontend Developer. I love building websites and webapps using modern
				Javascript frameworks, such as React, Next, and Svelte.
			</p>
			<div class="cta__links">
				<a href="/portfolio" target="_blank">See My Work</a>
				<a class="ghost" href="https://github.com/devinhaynes" target="_blank">View my Github</a>
			</div>
		</div>
	</div>
</div>

<style>
	.home {
		display: flex;
		flex-direction: column;
		gap: 5rem;
		align-items: center;
	}

	.top {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.intro {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: -4rem;
	}

	.bubble {
		box-shadow: 0 0 6px 4px rgba(0, 0, 0, 0.5);
		border-radius: var(--border-radius);
		padding: 2rem;
		width: fit-content;
		outline: 4px solid var(--dark-gray);
		background-color: var(--bg-color);
	}

	.bubble.header {
		& h1 {
			font-size: 2.25rem;
			padding-bottom: 2rem;
		}
	}

	.bubble.dark {
		background-color: var(--dark-gray);
		color: white;
		margin-top: -2rem;
		outline: 4px solid var(--bg-color);
		box-shadow: 0 4px 6px 2px rgba(0, 0, 0, 0.125);
	}

	.profile {
		width: 300px;
		aspect-ratio: 1;
		border-radius: 50%;
		overflow: hidden;
		box-shadow: 0 0 8px 4px rgba(0, 0, 0, 0.125);
		outline: 4px solid var(--dark-gray);

		& img {
			max-width: 100%;
		}
	}

	.bottom {
		margin-top: 3rem;
	}

	.cta {
		& p {
			max-width: 50ch;
			line-height: 1.6;
		}
	}

	.cta__links {
		display: flex;
		gap: 1rem;
		padding-block: 2rem;

		& a {
			border-radius: var(--border-radius);
			background-color: var(--primary-color);
			color: white;
			outline: 2px solid var(--primary-color);
			padding: 0.5rem 0.85rem;
		}
	}

	.cta__links a.ghost {
		background-color: var(--bg-color);
		color: var(--primary-color);
		outline: 2px solid var(--primary-color);
	}

	@media (min-width: 37em) {
		.top {
			flex-direction: row;
		}

		.bubble.header h1 {
			font-size: 3.25rem;
		}

		.intro {
			margin-top: 0;
			margin-left: -4rem;
			align-items: flex-end;
		}

		.bubble.dark {
			margin-right: 1rem;
		}
	}
</style>
