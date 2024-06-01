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
</template>
