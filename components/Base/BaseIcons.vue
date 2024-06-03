<script setup lang="ts">
	interface Props {
		type?: string
		width?: string
		height?: string
		fill?: string
		stroke?: string
	}

	const { width = "24px", height = "24px", fill = "white", stroke = "black" } = defineProps<Props>()
</script>

<template>
	<svg v-if="type === 'document'" xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" :fill="fill" viewBox="0 0 48 48">
		<g id="SVGRepo_iconCarrier">
			<path
				fill="none"
				stroke="#000"
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M14 4.5h-3.5a2 2 0 0 0-2 2v35a2 2 0 0 0 2 2h27a2 2 0 0 0 2-2v-35a2 2 0 0 0-2-2H24"
			/>
			<path
				fill="none"
				stroke="#000"
				stroke-linecap="round"
				stroke-linejoin="round"
				d="m12 4.5 1.414-1.414a2 2 0 0 1 1.414-.586H23a1 1 0 0 1 1 1v25l-5-5-5 5v-24M14 38h20M24 10h10M24 17h10M24 24h10M14 31h20"
			/>
		</g>
	</svg>
	<svg v-if="type === 'document-2'" xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" :fill="fill" viewBox="0 0 48 48">
		<g id="SVGRepo_iconCarrier">
			<path
				d="M10.364 4.51a1.994 1.994 0 0 0-1.945 1.994v35.002a1.994 1.994 0 0 0 1.944 1.994h27.224a1.994 1.994 0 0 0 1.994-1.994V14.472h-7.977a1.994 1.994 0 0 1-1.945-1.995V4.5ZM29.569 4.51l9.962 9.962M15.838 22.928h16.274M15.838 34.994h16.274M15.838 28.961h16.274"
				fill="none"
				stroke="#000"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</g>
	</svg>
	<svg v-if="type === 'document-3'" xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" :fill="fill" viewBox="0 0 48 48">
		<g><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M5.5 5.5v37H24V24h18.5V5.5ZM24 42.5 42.5 24" /></g>
	</svg>
	<svg v-if="type === 'pen'" xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" :fill="fill" viewBox="0 0 48 48">
		<g id="SVGRepo_iconCarrier">
			<path
				fill="none"
				stroke="#000"
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M4.5 36.927c5.402-2.741 5.402-2.786 7.865-3.19-1.124 1.491-2.405 2.435-1.888 5.347 3.052.634 5.968-1.739 8.629-2.633-.8 1.034-2.094 3.168-.517 3.595a5.672 5.672 0 0 0 2.67-.462M26.059 35.879l-3.371 2.43 1.093-3.954"
				class="c"
			/>
			<path
				d="m35.728 22.343-9.67 13.536-2.277-1.524L32.51 20.29m0 0L41.311 7.94c.922.026 1.76.548 2.189 1.364l-7.772 13.04-3.219-2.055ZM42.809 10.597c.377 3.184-2.869 8.258-4.217 10.806"
			/>
		</g>
	</svg>
	<svg v-if="type === 'write'" xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" :fill="fill" viewBox="0 0 48 48">
		<g id="SVGRepo_iconCarrier">
			<path
				fill="none"
				stroke="#000"
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M37.31 15.93 12.24 41 5.5 42.5 7 35.76l.51-.51 28-28 .51-.51 1.76 1.76.55-.5 2.46-2.5h0l1.71 1.71L40 9.68l-.52.51 1.8 1.81-3 3 1.41 1.42 1.45 1.44-4.88 4.88M37.81 8.48l1.71 1.71M38.31 14.93l-1 1M7 35.76 12.24 41"
			/>
		</g>
	</svg>
</template>
