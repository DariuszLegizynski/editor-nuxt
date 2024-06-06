<script setup lang="ts">
	import gsap from "gsap"

	interface Props {
		width?: string
		height?: string
		fillColor?: string
		strokeColor?: string
	}

	const { width = "24px", height = "24px", fillColor = "white", strokeColor = "black" } = defineProps<Props>()

	const iconDocumentRef = ref<HTMLElement | null>(null)
	const iconPathDocument = ref<SVGPathElement | null>(null)

	const iconPathDocumentLength = computed(() => iconPathDocument.value?.getTotalLength() ?? 0)

	onMounted(() => {
		gsap.fromTo(
			iconPathDocument.value,
			{ strokeDashoffset: iconPathDocumentLength.value },
			{
				strokeDashoffset: 0,
				duration: 8,
				scrollTrigger: {
					trigger: iconDocumentRef.value,
					start: "top 80%",
					end: "bottom 50%",
				},
			}
		)
	})
</script>

<template>
	<svg ref="iconDocumentRef" fill="transparent" xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" viewBox="0 0 48 48">
		<g id="SVGRepo_iconCarrier">
			<path
				fill="none"
				stroke="#000"
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M14 4.5h-3.5a2 2 0 0 0-2 2v35a2 2 0 0 0 2 2h27a2 2 0 0 0 2-2v-35a2 2 0 0 0-2-2H24"
			/>
			<path
				ref="iconPathDocument"
				fill="none"
				:stroke="strokeColor"
				:stroke-dasharray="`${iconPathDocumentLength}px`"
				:stroke-dashoffset="`${iconPathDocumentLength}px`"
				stroke-linecap="round"
				stroke-linejoin="round"
				d="m12 4.5 1.414-1.414a2 2 0 0 1 1.414-.586H23a1 1 0 0 1 1 1v25l-5-5-5 5v-24M14 38h20M24 10h10M24 17h10M24 24h10M14 31h20"
			/>
		</g>
	</svg>
</template>
