<script setup lang="ts">
	import gsap from "gsap"

	interface Props {
		width?: string
		height?: string
		fillColor?: string
		strokeColor?: string
	}

	const { width = "24px", height = "24px", fillColor = "none", strokeColor = "black" } = defineProps<Props>()

	const iconBookRef = ref<HTMLElement | null>(null)
	const iconPathBook = ref<SVGPathElement | null>(null)

	const iconPathBookLength = computed(() => iconPathBook.value?.getTotalLength() ?? 0)

	onMounted(() => {
		gsap.fromTo(
			iconPathBook.value,
			{ strokeDashoffset: iconPathBookLength.value, fill: "transparent" },
			{
				strokeDashoffset: 0,
				duration: 20,
				scrollTrigger: {
					trigger: iconBookRef.value,
					start: "top 80%",
					end: "bottom 50%",
				},
			}
		)
	})
</script>

<template>
	<svg ref="iconBookRef" :width="width" :height="height" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
		<path
			:stroke="strokeColor"
			ref="iconPathBook"
			:stroke-dasharray="`${iconPathBookLength}px`"
			:stroke-dashoffset="`${iconPathBookLength}px`"
			d="M24.008 32.038 9.541 27.904a1.005 1.005 0 0 0-1.236.688 1 1 0 0 0 .688 1.236l14.467 4.134a1 1 0 0 0 .548-1.924zM24.008 39.038 9.541 34.905a1 1 0 0 0-.548 1.924l14.467 4.133a1 1 0 0 0 .548-1.924zM24.008 25.038 9.541 20.904a1.005 1.005 0 0 0-1.236.688 1 1 0 0 0 .688 1.236l14.467 4.134a1 1 0 0 0 .548-1.924zM24.008 18.038 9.541 13.904a1.005 1.005 0 0 0-1.236.688 1 1 0 0 0 .688 1.236l14.467 4.134a1 1 0 0 0 .548-1.924zM39.963 33.962c.092 0 .184-.013.275-.038l14.467-4.134c.531-.152.839-.706.688-1.236a1.007 1.007 0 0 0-1.236-.688L39.689 32a1.002 1.002 0 0 0-.688 1.236c.127.44.527.726.962.726zM54.459 34.905l-14.467 4.133a1.001 1.001 0 0 0 .549 1.924l14.467-4.133c.531-.152.839-.705.688-1.236a1.009 1.009 0 0 0-1.237-.688zM54.459 20.904l-14.467 4.134a1.002 1.002 0 0 0-.688 1.236 1.003 1.003 0 0 0 1.237.688l14.467-4.134c.531-.152.839-.706.688-1.236a1.007 1.007 0 0 0-1.237-.688zM54.459 13.904l-14.467 4.134a1.002 1.002 0 0 0-.688 1.236 1.003 1.003 0 0 0 1.237.688l14.467-4.134c.531-.152.839-.706.688-1.236a1.009 1.009 0 0 0-1.237-.688z"
		/>
		<path
			stroke="none"
			d="M63.219.414a2.008 2.008 0 0 0-1.735-.347L32 7.93 2.516.067A2.01 2.01 0 0 0 .781.414 2.003 2.003 0 0 0 0 2v49.999c0 .906.609 1.699 1.484 1.933l25.873 6.899C28.089 62.685 29.887 64 32 64s3.911-1.315 4.643-3.169l25.873-6.899A2.001 2.001 0 0 0 64 51.999V2c0-.621-.289-1.207-.781-1.586zM32 54c.173 0 .347-.022.516-.067L62 46.07v1.954l-30 7.941-30-7.941V46.07l29.484 7.862c.169.046.343.068.516.068zM1.998 2.001h.003V2L31 9.733v42L2 44 1.998 2.001zm32.981 57.204a2.992 2.992 0 0 1-1.788 2.546l-.676.181a2.008 2.008 0 0 1-1.032 0l-.676-.181a2.992 2.992 0 0 1-1.788-2.546L2 51.999v-1.906l29.744 7.874a1.01 1.01 0 0 0 .512 0L62 50.093v1.906l-27.021 7.206zM33 51.733v-42L62 2v42l-29 7.733z"
		/>
	</svg>
</template>
