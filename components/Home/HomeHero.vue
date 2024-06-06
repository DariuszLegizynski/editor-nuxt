<script setup lang="ts">
	import gsap from "gsap"
	const headline = ref<HTMLElement | null>(null)

	onMounted(() => {
		let splitText = headline.value?.textContent?.split("") ?? []
		if (headline.value) {
			headline.value.innerHTML = splitText.map(letter => `<span>${letter}</span>`).join("")
			gsap.fromTo(headline.value.children, { visibility: "hidden", opacity: 0 }, { visibility: "visible", opacity: 1, stagger: 0.2, delay: 0.5 })
		}
	})
</script>

<template>
	<article class="hero-image w-screen min-h-screen">
		<section class="p-2 h-[90vh] flex flex-col items-center justify-end">
			<div class="p-4 bg-black bg-opacity-40 text-white">
				<h1 class="!text-[2.4rem] text-center special">List&nbsp;z&nbsp;urzędu po&nbsp;niemiecku?</h1>
				<h1 ref="headline" class="text-[2.8rem] text-center invisible">Pomogę&nbsp;odpisać!</h1>
				<p class="text-center pt-2 text-[1.2rem] italic">Tłumaczę, wyjaśniam i odpowiadam na pisma urzędowe. Wspieram w komunikacji z tymi instytucjami.</p>
				<div class="mt-8 mb-4 text-center">
					<BaseButton :link="'#contact'" class="uppercase">Kontakt</BaseButton>
				</div>
			</div>
		</section>
	</article>
</template>

<style scoped>
	.hero-image {
		background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)),
			url(@/assets/images/hero/stock-photo-the-perfect-space-to-get-creative-cropped-shot-of-designers-working-in-a-creative-office-2146083873.jpg);
		background-size: cover;
		background-position: 65% bottom;
		background-repeat: no-repeat;
	}
</style>

<style>
	h1 span {
		@apply decorative inline-block text-nowrap text-[2.8rem];
	}
</style>
