<script setup lang="ts"></script>

<template>
	<article class="flex flex-col items-center my-16">
		<h1 class="uppercase mb-8">Kontakt</h1>
		<section class="grid gap-y-3">
			<div class="grid grid-cols-[3rem_auto] items-center">
				<BaseIcons type="phone" width="2rem" height="2rem" />
				<span>123 456 789</span>
			</div>
			<div class="grid grid-cols-[3rem_auto] items-center">
				<BaseIcons type="email" width="2rem" height="2rem" />
				<span>paulina.kowalska@test.com</span>
			</div>
			<div class="grid grid-cols-[3rem_auto] items-center">
				<BaseIcons type="home" width="2rem" height="2rem" />
				<span>ul. Testowa 1<br />00-000 Warszawa</span>
			</div>
		</section>
	</article>
</template>
