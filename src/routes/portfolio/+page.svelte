<script lang="ts">
	// Images
	import concrecalWebsite from '$lib/assets/concrecal-web.png';
	import tidalsitesWebsite from '$lib/assets/tidalsites-web.png';
	import foursquareWebsite from '$lib/assets/foursquare-web.png';

	// Icons
	import reactLogo from '$lib/assets/icons/react-logo.png';
	import sassLogo from '$lib/assets/icons/sass-logo.png';
	import awsLogo from '$lib/assets/icons/aws-logo.png';
	import nextLogo from '$lib/assets/icons/Nextjs-logo.png';
	import svelteLogo from '$lib/assets/icons/svelte-logo.png';
	import pythonLogo from '$lib/assets/icons/python-logo.png';
</script>

<svelte:head>
	<title>Devins Portfolio</title>
</svelte:head>

<h1>Check out what I've been up to</h1>

<div class="portfolio__section">
	<div class="top">
		<div class="portfolio__copy">
			<p>
				Four Square ROI is a calculator that is used to determine potential Return on Investment for
				an investment property. This calculator utilized a method know as the "Four Square" method.
			</p>
			<div class="portfolio__links">
				<a href="https://github.com/tidalsites/tidalsites" target="_blank" class="primary">Github</a
				>
				<a href="https://www.tidalsites.com" target="_blank" class="ghost">Website</a>
			</div>
		</div>
		<div class="portfolio__img">
			<img src={foursquareWebsite} alt="Four Square Calc" />
		</div>
	</div>

	<div class="tags">
		<div class="img-wrapper">
			<img src={svelteLogo} alt="Svelte" />
		</div>
		<div class="img-wrapper">
			<img src={pythonLogo} alt="Python" />
		</div>
		<div class="img-wrapper">
			<img src={awsLogo} alt="AWS" />
		</div>
	</div>
</div>

<div class="portfolio__section">
	<div class="top">
		<div class="portfolio__copy">
			<p>
				Tidal Sites is my own personal company, where I design, build, and deploy custom websites
				and web apps.
			</p>
			<div class="portfolio__links">
				<a href="https://github.com/tidalsites/tidalsites" target="_blank" class="primary">Github</a
				>
				<a href="https://www.tidalsites.com" target="_blank" class="ghost">Website</a>
			</div>
		</div>
		<div class="portfolio__img">
			<img src={tidalsitesWebsite} alt="Tidal Sites" />
		</div>
	</div>

	<div class="tags">
		<div class="img-wrapper">
			<img src={nextLogo} alt="ReactJS" />
		</div>
		<div class="img-wrapper">
			<img src={sassLogo} alt="Sass" />
		</div>
		<div class="img-wrapper">
			<img src={awsLogo} alt="AWS" />
		</div>
	</div>
</div>

<div class="portfolio__section">
	<div class="top">
		<div class="portfolio__copy">
			<p>
				Concrecal Proyectos E Ingenieria is a Dominican-Republic based company that specializes in
				build the initial concrete frame for residential and commerical buildings.
			</p>
			<div class="portfolio__links">
				<a href="https://github.com/tidalsites/concrecal" target="_blank" class="primary">Github</a>
				<a href="https://www.concrecal.com" target="_blank" class="ghost">Website</a>
			</div>
		</div>
		<div class="portfolio__img">
			<img src={concrecalWebsite} alt="Concrecal" />
		</div>
	</div>

	<div class="tags">
		<div class="img-wrapper">
			<img src={reactLogo} alt="ReactJS" />
		</div>
		<div class="img-wrapper">
			<img src={sassLogo} alt="Sass" />
		</div>
		<div class="img-wrapper">
			<img src={awsLogo} alt="AWS" />
		</div>
	</div>
</div>

<style>
	h1 {
		margin-bottom: 3rem;
	}

	p {
		line-height: 1.6;
	}

	.portfolio__section {
		display: flex;
		flex-direction: column;
		margin-bottom: 10rem;
	}

	.top {
		display: flex;
		flex-direction: column-reverse;
		align-items: center;
		gap: 2rem;

		& p {
			max-width: 50ch;
			margin-top: -4rem;
			background-color: var(--bg-color);
			padding: 1rem;
			border-radius: var(--border-radius);
			border: 4px solid white;
			box-shadow: 0 -2px 4px 0 rgba(0, 0, 0, 0.125);
		}
	}

	.portfolio__copy {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.portfolio__links {
		display: flex;
		gap: 1rem;
	}

	.portfolio__img {
		max-width: 500px;
		border-radius: var(--border-radius);
		overflow: hidden;

		& img {
			max-width: 100%;
		}
	}

	button,
	a {
		padding: 0.5rem 0.85rem;
		border-radius: var(--border-radius);
		box-shadow: none;
		border: none;
		outline: 2px solid var(--primary-color);
		font-size: 0.85rem;
	}

	.primary {
		background-color: var(--primary-color);
		color: white;
	}

	.ghost {
		outline: 2px solid var(--primary-color);
	}

	.tags {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2rem;
		padding-block: 1rem;
		margin-block: 1rem;
	}

	.img-wrapper {
		max-width: 50px;

		& img {
			max-width: 100%;
		}
	}

	@media (min-width: 55em) {
		.top {
			flex-direction: row;
		}

		.top p {
			border: none;
			box-shadow: none;
			margin-top: 0;
		}

		.tags {
			justify-content: flex-start;
		}
	}
</style>
