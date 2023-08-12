<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>About Devin</title>
</svelte:head>

<h1>A little bit about me</h1>
<h2>Background</h2>

<div class="background">
	<p>I began my IT journey by joining the U.S. Navy.</p>
	<p>
		Here I learned Systems Adminstration and Network Adminstration, focusing heavily on Linux
		Systems.
	</p>
	<p>
		After leaving the Navy, I finished my degree in Computer Science, with a major in Software
		Development.
	</p>
	<p>
		During this time, I found a passion for web development and got my first Software Development
		job as a Full-Stack developer working with the PERN Stack.
	</p>
	<p>
		I have had the privilege of working with several great companies, have done some freelancing,
		primarily working on React-based projects.
	</p>
	<p>I still have a long way to go on my journey, but I am enjoying the ride!</p>
</div>

<h2>Skills</h2>
<ul>
	<li>HTML</li>
	<li>CSS</li>
	<li>Javascript</li>
	<li>Sass</li>
	<li>React</li>
	<li>Svelte</li>
	<li>NextJS</li>
	<li>NodeJS</li>
	<li>AWS</li>
	<li>Azure</li>
	<li>Linux</li>
	<li>Bash</li>
	<li>SQL</li>
	<li>Postgres</li>
	<li>MongoDB</li>
	<li>Agile</li>
	<li>REST</li>
</ul>

<style>
	h1 {
		margin-bottom: 5rem;
	}
	h2 {
		margin-bottom: 2rem;
	}

	.background {
		margin-bottom: 5rem;
	}

	p {
		line-height: 1.6;
		max-width: 50ch;
		margin-bottom: 1rem;
	}

	ul {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}

	li {
		background-color: var(--primary-color);
		color: white;
		padding: 0.5rem 0.85rem;
		border-radius: var(--border-radius);
	}
</style>
