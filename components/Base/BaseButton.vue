<script setup lang="ts">
	const props = defineProps({
		variant: {
			type: String,
			default: "",
		},
		link: {
			type: String,
			default: "/",
		},
	})

	const { variant } = toRefs(props)

	const classes = computed(() => {
		const baseClasses = "border-2 px-4 py-2 pointer transition ease-in-out rounded"
		if (variant.value === "outline") {
			return `${baseClasses} bg-tertiary bg-opacity-30 border-white text-white hover:bg-primary hover:text-secondary`
		}

		if (variant.value === "navbar") {
			return "bg-transparent text-tertiary transition ease-in-out pointer hover:text-white"
		}

		if (variant.value === "comic") {
			return `${baseClasses} bg-transparent border-primary text-white hover:text-secondary`
		}

		return `${baseClasses} bg-primary border-primary text-white hover:text-secondary uppercase tracking-widest`
	})
</script>

<template>
	<NuxtLink :to="link" :class="classes">
		<slot></slot>
	</NuxtLink>
</template>
