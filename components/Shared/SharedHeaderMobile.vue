<script setup lang="ts">
	import { onClickOutside } from "@vueuse/core"

	const isBurgerActive = ref<boolean>(false)
	const target = ref<HTMLElement>()

	onClickOutside(target, event => {
		isBurgerActive.value = false
	})
</script>

<template>
	<nav ref="target" class="fixed top-0 left-0 flex justify-between items-center px-2 z-10 h-12 bg-primary bg-opacity-90 w-full md:hidden">
		<BaseButton variant="navbar"><p class="text-white">Logo</p></BaseButton>
		<BaseBurger @click="isBurgerActive = !isBurgerActive" :active="isBurgerActive" />
		<aside
			class="transform transition-transform duration-500 ease-in-out right-0 top-12 fixed bg-primary bg-opacity-90 w-full py-4 z-10"
			:class="{ '-translate-y-[130%]': !isBurgerActive }"
		>
			<ul class="pl-4 flex flex-col items-center">
				<li class="py-2">
					<BaseButton variant="navbar" link="/#services" class="text-white font-semibold"><div class="h4">Usługi</div></BaseButton>
				</li>
				<li class="py-2">
					<BaseButton variant="navbar" link="/services" class="text-white font-semibold"><div class="h4">Cennik</div></BaseButton>
				</li>
				<li class="py-2">
					<BaseButton variant="navbar" link="/#about" class="text-white font-semibold"><div class="h4">O Mnie</div></BaseButton>
				</li>
				<li class="py-2">
					<BaseButton variant="navbar" link="/#contact" class="text-white font-semibold"><div class="h4">Kontakt</div></BaseButton>
				</li>
			</ul>
		</aside>
	</nav>
</template>
