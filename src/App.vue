<template>
    <div>
        <header>
            <h1>{{ title }}</h1>
        </header>
        <nav class="site">
        </nav>
        <main>
            <UserNameComponent />
        </main>
        <footer></footer>
    </div>
</template>
<script>
import UserNameComponent from './components/UserNameComponent.vue'
export default {
    data: function() {
        return {
            title: 'Hello World Vue'
        }
    },
    created: function() {
        document.title = this.title
    },
    components: {
        UserNameComponent
    }
}
</script>
<style src="./App.css"></style>