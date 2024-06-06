<script setup lang="ts"></script>

<template>
	<article id="services" class="mt-28 px-4 max-w-[64rem] mx-auto">
		<section class="text-center text-[2.4rem]">
			<h1>Pomagam</h1>
			<h1 class="decorative text-[2.8rem]">w codziennych</h1>
			<h1 class="mt-2">zmaganiach z biurokracją:</h1>
		</section>
		<section>
			<section class="px-4 gap-x-8 md:grid md:grid-cols-2 lg:grid-cols-3">
				<div class="flex flex-col items-center my-16 text-center max-w-80 mx-auto">
					<AnimationBook width="6rem" height="6rem" fillColor="hsl(46, 65%, 52%)" strokeColor="hsl(46, 65%, 52%)" />
					<div class="bg-secondary rounded-3xl mt-4 p-4 min-h-40">
						<h2 class="my-4 uppercase text-center">Pisanie treści</h2>
						<span>Specjalizuję się w pisaniu treści na potrzeby komunikacji z instytucjami.</span>
					</div>
				</div>
				<div class="flex flex-col items-center my-16 text-center max-w-80 mx-auto">
					<AnimationPen width="6rem" height="6rem" fillColor="hsl(46, 65%, 52%)" strokeColor="hsl(46, 65%, 52%)" />
					<div class="bg-secondary rounded-3xl mt-4 p-4 min-h-40">
						<h2 class="my-4 uppercase text-center">Edycja i korekta</h2>
						<span>Redaguję i sprawdzam treści, aby je dopracować i nadać im blasku.</span>
					</div>
				</div>
				<div class="flex flex-col items-center my-16 text-center max-w-80 mx-auto">
					<AnimationChat width="6rem" height="6rem" fillColor="hsl(46, 65%, 52%)" strokeColor="hsl(46, 65%, 52%)" />
					<div class="bg-secondary rounded-3xl mt-4 p-4 min-h-40 min-w-[300px]">
						<h2 class="my-4 uppercase text-center">Tłumaczenia</h2>
						<span>Tłumaczę i objaśniam pisma urzędowe aby stały się zrozumiałe.</span>
					</div>
				</div>
				<div class="flex flex-col items-center my-16 text-center max-w-80 mx-auto">
					<AnimationDocument width="6rem" height="6rem" fillColor="hsl(46, 65%, 52%)" strokeColor="hsl(46, 65%, 52%)" />
					<div class="bg-secondary rounded-3xl mt-4 p-4 min-h-40 min-w-[300px]">
						<h2 class="my-4 uppercase text-center">copywriting</h2>
						<span>Piszę dobrze zbadane, angażujące teksty.</span>
					</div>
				</div>
				<div class="flex flex-col items-center my-16 text-center max-w-80 mx-auto">
					<AnimationDocument width="6rem" height="6rem" fillColor="hsl(46, 65%, 52%)" strokeColor="hsl(46, 65%, 52%)" />
					<div class="bg-secondary rounded-3xl mt-4 p-4 min-h-40 min-w-[300px]">
						<h2 class="my-4 uppercase text-center">pomysł 1</h2>
						<span>tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst.</span>
					</div>
				</div>
				<div class="flex flex-col items-center my-16 text-center max-w-80 mx-auto">
					<AnimationDocument width="6rem" height="6rem" fillColor="hsl(46, 65%, 52%)" strokeColor="hsl(46, 65%, 52%)" />
					<div class="bg-secondary rounded-3xl mt-4 p-4 min-h-40 min-w-[300px]">
						<h2 class="my-4 uppercase text-center">pomysł 2</h2>
						<span>tekst tekst tekst tekst tekst.</span>
					</div>
				</div>
			</section>
			<section class="flex flex-col items-center mb-16 md:mb-0 md:my-10">
				<BaseButton link="/services">Więcej</BaseButton>
			</section>
		</section>
	</article>
</template>
