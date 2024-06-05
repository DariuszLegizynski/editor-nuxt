<script setup lang="ts">
	import gsap from "gsap"

	interface Props {
		width?: string
		height?: string
		fillColor?: string
		strokeColor?: string
	}

	const { width = "24px", height = "24px", fillColor = "white", strokeColor = "black" } = defineProps<Props>()

	const iconPenRef = ref<HTMLElement | null>(null)
	const iconPathPen = ref<SVGPathElement | null>(null)

	const iconPathPenLength = computed(() => iconPathPen.value?.getTotalLength() ?? 0)

	onMounted(() => {
		gsap.fromTo(
			iconPathPen.value,
			{ strokeDashoffset: iconPathPenLength.value },
			{
				strokeDashoffset: 0,
				duration: 2,
				scrollTrigger: {
					trigger: iconPenRef.value,
					start: "top 80%",
					end: "bottom 50%",
				},
			}
		)
	})
</script>

<template>
	<svg ref="iconPenRef" :width="width" :height="height" fill="transparent" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
		<path
			ref="iconPathPen"
			:stroke="strokeColor"
			:stroke-dasharray="`${iconPathPenLength}px`"
			:stroke-dashoffset="`${iconPathPenLength}px`"
			d="m4.5,36.9273c5.4018-2.7414,5.4018-2.7864,7.8646-3.1908-1.1235,1.492-2.4043,2.4358-1.8875,5.348,3.0516.6336,5.9681-1.7392,8.6287-2.6335-.8,1.0337-2.0942,3.1683-.5168,3.5953.9141.0637,1.8301-.0952,2.6695-.4628"
		></path>
		<path stroke="black" d="m26.0586,35.8786l-3.3706,2.4302,1.0931-3.9536"></path>
		<path
			stroke="black"
			d="m35.7282,22.3429l-9.6695,13.5358-2.2775-1.5234,8.728-14.0662m0,0l8.8016-12.3489c.9226.0259,1.7594.5474,2.1892,1.3642l-7.7718,13.0387-3.219-2.0539Z"
		></path>
		<path stroke="black" d="m42.8088,10.5969c.3776,3.1838-2.8684,8.2586-4.2169,10.8057"></path>
	</svg>
</template>
