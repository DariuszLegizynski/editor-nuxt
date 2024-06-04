<script setup lang="ts"></script>

<template>
	<article id="services" class="mt-28 px-4">
		<section class="text-left text-[2.4rem]">
			<h1>Pomagam</h1>
			<h1 class="decorative text-[2.8rem]">w codziennych</h1>
			<h1>zmaganiach z biurokracją:</h1>
		</section>
		<section>
			<section class="px-4">
				<div class="flex flex-col items-center my-16">
					<BaseIcons type="book" width="6rem" height="6rem" fill="hsl(46, 65%, 52%)" />
					<div class="bg-secondary rounded-3xl mt-2 p-4">
						<h2 class="my-4 uppercase">Pisanie treści</h2>
						<span>Specjalizuję się w pisaniu treści na potrzeby komunikacji z instytucjami.</span>
					</div>
				</div>
				<div class="flex flex-col items-center my-16">
					<BaseIcons type="pen" width="6rem" height="6rem" stroke="hsl(46, 65%, 52%)" />
					<div class="bg-secondary rounded-3xl p-4">
						<h2 class="my-4 uppercase">Edycja i korekta</h2>
						<span>Redaguję i sprawdzam treści, aby je dopracować i nadać im blasku.</span>
					</div>
				</div>
				<div class="flex flex-col items-center my-16">
					<BaseIcons type="chat" width="6rem" height="6rem" stroke="hsl(46, 65%, 52%)" />
					<div class="bg-secondary rounded-3xl p-4">
						<h2 class="my-4 uppercase">Tłumaczenia</h2>
						<span>Tłumaczę i objaśniam pisma urzędowe aby stały się zrozumiałe.</span>
					</div>
				</div>
				<div class="flex flex-col items-center my-16">
					<BaseIcons type="document" width="6rem" height="6rem" stroke="hsl(46, 65%, 52%)" />
					<div class="bg-secondary rounded-3xl p-4">
						<h2 class="my-4 uppercase">copywriting</h2>
						<span>Piszę dobrze zbadane, angażujące teksty.</span>
					</div>
				</div>
			</section>
			<section class="flex flex-col items-center mb-16">
				<BaseButton>Więcej</BaseButton>
			</section>
		</section>
	</article>
</template>
