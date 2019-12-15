<template>
    <div>
        <header>
            <h1>{{ title }}</h1>
        </header>
        <nav class="site">
        </nav>
        <main>main goes here</main>
        <footer></footer>
    </div>
</template>
<script>
export default {
    data: function() {
        return {
            title: 'Hello World Vue'
        }
    },
    created: function() {
    	document.title = this.title
    },
}
</script>
<style src="./App.css"></style>
