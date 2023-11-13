<script lang="ts">
	import {
		TimelineItem,
		TimelineOppositeContent,
		TimelineSeparator,
		TimelineDot,
		TimelineConnector,
		TimelineContent
	} from 'svelte-vertical-timeline';
	import type { CtaObject } from '../../data/timeline';

	export let header: string;
	export let content: string;
	export let imgSrc: string;
	export let imgAlt: string;
	export let cta: CtaObject | null = null;
</script>

<TimelineItem
	style={'display: grid; grid-template-columns: repeat(12, 1fr); grid-template-rows: 1fr 1fr'}
>
	<TimelineOppositeContent
		slot="opposite-content"
		style={'grid-column-start: 2; grid-column-end: 13; text-align: left; grid-row-start: 1; grid-row-end: 2'}
	>
		<p class="timeline-header">{header}</p>
	</TimelineOppositeContent>
	<TimelineSeparator style={'min-height: 200px; grid-row-start: 1; grid-row-end: 3'}>
		<TimelineDot
			style={'width: 60px; height: 60px; background-color: none; display: grid; place-content: center; margin-inline: auto; overflow: hidden;'}
		>
			<img class="dot" src={imgSrc} alt={imgAlt} />
		</TimelineDot>
		<TimelineConnector />
	</TimelineSeparator>
	<TimelineContent
		style={'grid-column-start: 2; grid-column-end: 13; text-align: left; grid-row-start: 2; display: flex; flex-direction: column; gap: 1rem;'}
	>
		<p>
			{content}
		</p>
		{#if cta}
			<a class="cta" target="_blank" href={cta.link}>{cta.text}</a>
		{/if}
	</TimelineContent>
</TimelineItem>

<style>
	.timeline-header {
		font-size: 1.25rem;
		font-weight: 600;
		opacity: 0.9;
		padding-top: 1rem;
	}

	img {
		width: 60px;
	}

	.cta {
		background-color: var(--primary-color);
		color: white;
		padding: 0.5rem 0.85rem;
		margin-block: 2rem;
		border-radius: 200px;
		width: fit-content;
		outline: 2px solid var(--primary-color);
		outline-offset: -2px;
		transition: outline-offset ease-in-out 150ms;
	}

	.cta:hover,
	.cta:focus {
		outline-offset: 2px;
	}
</style>
