<script setup lang="ts">
	interface Props {
		type?: string
		width?: string
		height?: string
		fill?: string
		stroke?: string
	}

	const { width = "24px", height = "24px", fill = "white", stroke = "black" } = defineProps<Props>()
</script>

<template>
	<svg v-if="type === 'document'" xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" :fill="fill" viewBox="0 0 48 48">
		<g id="SVGRepo_iconCarrier">
			<path
				fill="none"
				stroke="#000"
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M14 4.5h-3.5a2 2 0 0 0-2 2v35a2 2 0 0 0 2 2h27a2 2 0 0 0 2-2v-35a2 2 0 0 0-2-2H24"
			/>
			<path
				fill="none"
				stroke="#000"
				stroke-linecap="round"
				stroke-linejoin="round"
				d="m12 4.5 1.414-1.414a2 2 0 0 1 1.414-.586H23a1 1 0 0 1 1 1v25l-5-5-5 5v-24M14 38h20M24 10h10M24 17h10M24 24h10M14 31h20"
			/>
		</g>
	</svg>
	<svg v-if="type === 'document-2'" xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" :fill="fill" viewBox="0 0 48 48">
		<g id="SVGRepo_iconCarrier">
			<path
				d="M10.364 4.51a1.994 1.994 0 0 0-1.945 1.994v35.002a1.994 1.994 0 0 0 1.944 1.994h27.224a1.994 1.994 0 0 0 1.994-1.994V14.472h-7.977a1.994 1.994 0 0 1-1.945-1.995V4.5ZM29.569 4.51l9.962 9.962M15.838 22.928h16.274M15.838 34.994h16.274M15.838 28.961h16.274"
				fill="none"
				stroke="#000"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</g>
	</svg>
	<svg v-if="type === 'document-3'" xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" :fill="fill" viewBox="0 0 48 48">
		<g><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M5.5 5.5v37H24V24h18.5V5.5ZM24 42.5 42.5 24" /></g>
	</svg>
	<svg v-if="type === 'pen'" xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" :fill="fill" viewBox="0 0 48 48">
		<g id="SVGRepo_iconCarrier">
			<path
				fill="none"
				stroke="#000"
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M4.5 36.927c5.402-2.741 5.402-2.786 7.865-3.19-1.124 1.491-2.405 2.435-1.888 5.347 3.052.634 5.968-1.739 8.629-2.633-.8 1.034-2.094 3.168-.517 3.595a5.672 5.672 0 0 0 2.67-.462M26.059 35.879l-3.371 2.43 1.093-3.954"
				class="c"
			/>
			<path
				d="m35.728 22.343-9.67 13.536-2.277-1.524L32.51 20.29m0 0L41.311 7.94c.922.026 1.76.548 2.189 1.364l-7.772 13.04-3.219-2.055ZM42.809 10.597c.377 3.184-2.869 8.258-4.217 10.806"
			/>
		</g>
	</svg>
	<svg v-if="type === 'write'" xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" :fill="fill" viewBox="0 0 48 48">
		<g id="SVGRepo_iconCarrier">
			<path
				fill="none"
				stroke="#000"
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M37.31 15.93 12.24 41 5.5 42.5 7 35.76l.51-.51 28-28 .51-.51 1.76 1.76.55-.5 2.46-2.5h0l1.71 1.71L40 9.68l-.52.51 1.8 1.81-3 3 1.41 1.42 1.45 1.44-4.88 4.88M37.81 8.48l1.71 1.71M38.31 14.93l-1 1M7 35.76 12.24 41"
			/>
		</g>
	</svg>
	<svg v-if="type === 'phone'" xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" :fill="fill" viewBox="0 0 48 48">
		<g>
			<path
				fill="none"
				stroke="#000"
				stroke-linecap="round"
				stroke-linejoin="round"
				d="m23.5947,15.0005c.548-1.0177,1.1956-1.996,1.9428-2.9205.7344-.9086.6287-2.236-.1974-3.0621l-3.832-3.832c-.9854-.9854-2.5956-.8934-3.4904.1749-9.0143,10.7619-9.0143,26.515,0,37.2768.8948,1.0683,2.5022,1.163,3.4876.1777l3.4162-3.4162c1.2472-1.2472,1.3503-2.5721.616-3.4807-.7472-.9245-1.3948-1.9027-1.9428-2.9205-.6703-1.2448-1.9774-2.0111-3.3913-2.0111h-3.2796c-1.3552-4.5526-1.3552-9.4226,0-13.9752h3.2796c1.4138,0,2.7209-.7663,3.3913-2.0111Z"
			></path>
		</g>
	</svg>
	<svg v-if="type === 'email'" xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" :fill="fill" viewBox="0 0 48 48">
		<path
			fill="none"
			stroke="#000"
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M6.47 10.71a2 2 0 0 0-2 2h0v22.61a2 2 0 0 0 2 2h35.06a2 2 0 0 0 2-2h0V12.68a2 2 0 0 0-2-2H6.47Zm33.21 3.82L24 26.07 8.32 14.53"
		/>
	</svg>
	<svg v-if="type === 'home'" xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" :fill="fill" viewBox="0 0 48 48">
		<g>
			<path
				d="M42.63 21.85 26 7.64a3 3 0 0 0-3.9 0L5.37 21.85a2.43 2.43 0 0 0-.29 3.44 2.39 2.39 0 0 0 1.92.87h2.09v13.29a1.63 1.63 0 0 0 1.63 1.63h7.35a1.63 1.63 0 0 0 1.63-1.63v-8.18a1 1 0 0 1 1-1h6.64a1 1 0 0 1 1 1v8.18a1.63 1.63 0 0 0 1.63 1.63h7.35a1.63 1.63 0 0 0 1.63-1.63V26.16H41a2.44 2.44 0 0 0 1.59-4.31Z"
				fill="none"
				stroke="#000"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path d="M32.45 13.18V7.92a.4.4 0 0 1 .39-.39h5.68a.4.4 0 0 1 .39.39h0v10.75" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" />
		</g>
	</svg>
</template>
