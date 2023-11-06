<script lang="ts">
	import { timelineData } from '../../data/timeline';
	import CustomTimelineItem from '$lib/ components/CustomTimelineItem.svelte';
	import { Timeline } from 'svelte-vertical-timeline';
</script>

<svelte:head>
	<title>About Devin</title>
</svelte:head>

<h1>A little bit about me</h1>
<h2>Background</h2>

<Timeline position="alternate">
	{#each timelineData as item, i}
		{#if i === timelineData.length - 1}
			<CustomTimelineItem
				header={item.header}
				content={item.content}
				imgSrc={item.imgSrc}
				imgAlt={item.imgAlt}
			/>
		{:else}
			<CustomTimelineItem
				header={item.header}
				content={item.content}
				imgSrc={item.imgSrc}
				imgAlt={item.imgAlt}
			/>
		{/if}
	{/each}
</Timeline>

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
	<li>Tailwind</li>
</ul>

<style>
	h1 {
		margin-bottom: 5rem;
	}
	h2 {
		margin-bottom: 2rem;
		margin-top: 4rem;
	}

	ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1rem;
		max-width: 50em;
	}

	li {
		background-color: var(--primary-color);
		color: white;
		padding: 0.5rem 0.85rem;
		border-radius: var(--border-radius);
	}
</style>
