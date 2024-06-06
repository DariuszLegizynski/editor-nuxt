<template>
	<nav class="hidden fixed top-0 left-0 justify-between items-center px-8 z-10 h-12 bg-primary bg-opacity-90 w-full md:flex">
		<BaseButton variant="navbar"><p class="text-white">Logo</p></BaseButton>
		<ul class="pl-4 flex md:gap-x-8 lg:gap-x-16">
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
	</nav>
</template>
