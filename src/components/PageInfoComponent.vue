<template>
    <div class="footer">
        Page loaded on the wonderful day of {{ loadedDate() }}
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
		}
	}
</script>