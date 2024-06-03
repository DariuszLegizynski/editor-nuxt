<script setup lang="ts"></script>

<template>
	<article id="contact" class="flex flex-col items-center my-16">
		<h1 class="uppercase mb-8">Kontakt</h1>
		<section class="grid gap-y-3">
			<a class="grid grid-cols-[3rem_auto] items-center" href="tel:+48123456789">
				<BaseIcons type="phone" width="2rem" height="2rem" />

				<span>+48 123 456 789</span>
			</a>
			<a href="mailto:paulina.kowalska@test.com" class="grid grid-cols-[3rem_auto] items-center">
				<BaseIcons type="email" width="2rem" height="2rem" />
				<span>paulina.kowalska@test.com</span>
			</a>
			<a href="https://maps.app.goo.gl/YshBRZ9pJAcxkd3S7" class="grid grid-cols-[3rem_auto] items-center">
				<BaseIcons type="home" width="2rem" height="2rem" />
				<span>ul. Krupówki 22<br />34-500 Zakopane</span>
			</a>
		</section>
	</article>
</template>
