<template>
    <div>
        <label class="form-label" for="username-field">{{ fullPrompt }}</label>
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
            minLength: 5,
        }
    },
    computed: {
        fullPrompt: function() {
            return this.prompt + ' ('+this.minLength+' char. min.):';
        }
    }
}
</script>