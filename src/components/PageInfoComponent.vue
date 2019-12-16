<template>
    <div class="footer">
        Page loaded on the wonderful day of {{ loadedDate() }}.
        Page size is a stellar {{ pageSize }} KiB
    </div>
</template>
<style>
</style>
<script>
	export default {
		methods: {
			loadedDate: function () {
				return new Date().toDateString()
			}
		},
		computed: {
			pageSize: function () {
				return Math.round(document.querySelector('html').outerHTML.length/1024)
			}
		}
	}
</script>