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
	<p class="bubble">I began my IT journey by joining the U.S. Navy.</p>
	<p class="bubble">
		Here I learned Systems Adminstration and Network Adminstration, focusing heavily on Linux
		Systems.
	</p>
	<p class="bubble">
		After leaving the Navy, I finished my degree in Computer Science, with a major in Software
		Development.
	</p>
	<p class="bubble">
		During this time, I found a passion for web development and got my first Software Development
		job as a Full-Stack developer working with the PERN Stack.
	</p>
	<p class="bubble">
		I have had the privilege of working with several great companies, have done some freelancing,
		primarily working on React-based projects.
	</p>
	<p class="bubble">I still have a long way to go on my journey, but I am enjoying the ride!</p>
</div>

<h2>Skills</h2>

<style>
	h1 {
		margin-bottom: 5rem;
	}
	h2 {
		margin-bottom: 2rem;
	}

	.background {
		max-width: 70ch;
		margin-inline: auto;
		margin-bottom: 5rem;
	}

	.bubble {
		background-color: var(--primary-color);
		color: white;
		padding: 2rem;
		border-radius: var(--border-radius);
		width: fit-content;
		box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.125);
		margin-bottom: 1rem;
	}

	.bubble:nth-child(even) {
		margin-left: auto;
	}

	p {
		line-height: 1.6;
		max-width: 50ch;
	}
</style>
