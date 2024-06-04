<script setup lang="ts"></script>

<template>
	<article class="hero-image w-screen min-h-screen">
		<section class="p-2 h-[90vh] flex flex-col items-center justify-end">
			<div class="p-4 bg-black bg-opacity-30 text-white">
				<h1 class="text-[2.4rem] text-center">List&nbsp;z&nbsp;urzędu po&nbsp;niemiecku?</h1>
				<h1 class="text-[2.8rem] text-center decorative">Pomogę odpisać!</h1>
				<span class="text-left pt-2 text-[1.2rem]"> Tłumaczę, wyjaśniam i odpowiadam na pisma urzędowe. Wspieram w komunikacji z tymi instytucjami. </span>
				<div class="mt-8 mb-4 text-center">
					<BaseButton :to="'#contact'" variant="" class="uppercase">Kontakt</BaseButton>
				</div>
			</div>
		</section>
	</article>
</template>

<style scoped>
	.hero-image {
		background-image: url(@/assets/images/hero/hero.jpg);
		background-size: cover;
		background-position: center 0;
		background-repeat: no-repeat;
	}
</style>
