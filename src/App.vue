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
        <footer>
            <PageInfoComponent />
        </footer>
    </div>
</template>
<script>
import UserNameComponent from './components/UserNameComponent.vue'
import PageInfoComponent from './components/PageInfoComponent.vue'
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
        UserNameComponent,
        PageInfoComponent
    }
}
</script>
<style src="./App.css"></style>