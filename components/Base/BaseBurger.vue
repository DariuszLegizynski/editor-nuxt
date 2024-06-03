<script setup lang="ts">
	const props = defineProps({
		active: {
			type: Boolean,
			default: false,
		},
	})

	const { active } = toRefs(props)
</script>

<template>
	<div class="flex relative size-12 justify-center items-center cursor-pointer">
		<div class="burger-stick" :class="{ active }" />
	</div>
</template>

<style scoped>
	.burger-stick {
		@apply w-6 h-[0.16rem] bg-white transition-all duration-500 ease-in-out rounded;
	}

	.burger-stick::before,
	.burger-stick::after {
		@apply content-[''] w-6 h-[0.16rem] absolute bg-white transition-all duration-500 ease-in-out rounded;
	}

	.burger-stick::before {
		transform: translate(0px, -6px);
	}

	.burger-stick::after {
		transform: translate(0px, 6px);
	}

	.active {
		@apply bg-transparent;
	}

	.active::before {
		@apply rotate-[45deg];
	}

	.active::after {
		@apply rotate-[-45deg];
	}
</style>
