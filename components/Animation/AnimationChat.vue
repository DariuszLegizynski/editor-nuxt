<script setup lang="ts">
	import gsap from "gsap"

	interface Props {
		width?: string
		height?: string
		fillColor?: string
		strokeColor?: string
	}

	const { width = "24px", height = "24px", fillColor = "white", strokeColor = "black" } = defineProps<Props>()

	const iconChatRef = ref<HTMLElement | null>(null)
	const iconPathChat = ref<SVGPathElement | null>(null)

	const iconPathChatLength = computed(() => iconPathChat.value?.getTotalLength() ?? 0)

	onMounted(() => {
		gsap.fromTo(
			iconPathChat.value,
			{ strokeDashoffset: iconPathChatLength.value },
			{
				strokeDashoffset: 0,
				duration: 10,
				scrollTrigger: {
					trigger: iconChatRef.value,
					start: "top 80%",
					end: "bottom 50%",
				},
			}
		)
	})
</script>

<template>
	<svg ref="iconChatRef" xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" viewBox="0 0 48 48">
		<g>
			<path
				d="M38.368 5.942H6.553A2.053 2.053 0 0 0 4.5 7.994v20.527a2.053 2.053 0 0 0 2.053 2.052h6.157v7.378a1.026 1.026 0 0 0 1.753.726l8.103-8.104h15.802a2.053 2.053 0 0 0 2.053-2.052V7.994a2.053 2.053 0 0 0-2.053-2.052Z"
				fill="none"
				stroke="#000"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				ref="iconPathChat"
				d="M12.71 33.652H9.633A2.053 2.053 0 0 1 7.579 31.6v-1.027M40.421 9.02h1.026a2.053 2.053 0 0 1 2.053 2.053V31.6a2.053 2.053 0 0 1-2.053 2.053H35.29v7.377a1.026 1.026 0 0 1-1.752.726l-8.104-8.104h-5.947M10.145 11.191h24.631M10.145 17.94h19.158M10.145 24.689h13.684"
				fill="none"
				:stroke="strokeColor"
				:stroke-dasharray="`${iconPathChatLength}px`"
				:stroke-dashoffset="`${iconPathChatLength}px`"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</g>
	</svg>
</template>
