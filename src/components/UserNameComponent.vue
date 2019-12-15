<template>
    <div>
        <label class="form-label" for="username-field">{{ prompt }}</label>
        <input id="username-field" v-model="username" />
    </div>
</template>
<style>
</style>
<script>
export default {
    data: function() {
        return {
            prompt: 'Enter your username',
            username: '',
        }
    }
}
</script>