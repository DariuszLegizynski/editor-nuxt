<script setup lang="ts"></script>

<template>
	<article id="about" class="flex flex-col items-center px-4 mx-auto lg:grid lg:grid-cols-2 lg:gap-x-4">
		<img
			class="mb-16"
			src="@/assets/images/hero/stock-photo-portrait-of-a-happy-business-woman-writing-down-notes-while-sitting-at-table-in-the-office-2238037913.jpg"
			alt="hero"
		/>
		<section class="text-center">
			<div class="h3 text-primary uppercase">O mnie</div>
			<h1 class="my-4">Paulina Kowalska</h1>
			<span>
				Jestem tłumaczką języka niemieckiego. Zajmuję się tłumaczeniem tekstów prawniczych, medycznych, technicznych, biznesowych oraz literackich. Współpracuję
				z klientami indywidualnymi oraz firmami. W swojej pracy kieruję się zasadami etyki zawodowej, dbam o jakość i terminowość tłumaczeń.
			</span>
			<section class="flex flex-col items-center my-12">
				<BaseButton>O mnie</BaseButton>
			</section>
		</section>
	</article>
</template>
