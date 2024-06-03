<script setup lang="ts"></script>

<template>
	<article class="hero-image w-screen min-h-screen">
		<section class="p-2 h-[90vh] flex flex-col items-center justify-end">
			<div class="p-4 bg-black bg-opacity-30 text-white text-center">
				<h1 class="">Motivierender Text</h1>
				<p class="text-wrap pt-2">Sprachdienstleisterin Paulina&nbsp;Kowalska</p>
				<div class="mt-8 mb-4">
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
