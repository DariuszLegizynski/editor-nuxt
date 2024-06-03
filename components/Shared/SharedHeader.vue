<script setup lang="ts">
	const isBurgerActive = ref<boolean>(false)
</script>

<template>
	<nav class="fixed top-0 left-0 flex justify-between items-center px-2 z-10 h-12 bg-primary bg-opacity-90 w-full">
		<NuxtLink to="/"><p class="text-white">Logo</p></NuxtLink>
		<BaseBurger @click="isBurgerActive = !isBurgerActive" :active="isBurgerActive" />
		<aside
			class="transform transition-transform duration-500 ease-in-out right-0 top-12 fixed bg-primary bg-opacity-90 w-full py-4 z-10"
			:class="{ '-translate-y-44': !isBurgerActive }"
		>
			<ul class="pl-4 flex flex-col items-center">
				<li class="py-2">
					<BaseButton variant="navbar" class="text-white font-semibold"><div class="h4">Usługi</div></BaseButton>
				</li>
				<li class="py-2">
					<BaseButton variant="navbar" class="text-white font-semibold"><div class="h4">O Mnie</div></BaseButton>
				</li>
			</ul>
		</aside>
	</nav>
</template>
