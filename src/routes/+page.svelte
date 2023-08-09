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
			<p>Get to know me</p>
			<div class="cta__links">
				<a href="/about">Personal</a>
				<span>OR</span>
				<a href="/portfolio">Professional</a>
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
			font-size: 2rem;
			padding-bottom: 1rem;
			padding-inline: 1rem;
			border-bottom: 2px solid var(--primary-color);
			position: relative;
		}
	}

	.cta > p::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 50%;
		height: 0.75rem;
		width: 0.75rem;
		background-color: var(--primary-color);
		border-radius: 50%;
		transform: translate(-50%, 50%);
		outline: 4px solid var(--bg-color);
	}

	.cta__links {
		display: flex;
		justify-content: center;
		gap: 0.5rem;
		padding-block: 2rem;
		font-size: 1.25rem;

		& a {
			text-decoration: underline;
		}
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
