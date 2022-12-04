<template>
    <div>
        <keep-alive>
            <component :is="conteudo"></component>
        </keep-alive>
    </div>
</template>
  
<script>
import Home from '@/components/views/Home.vue';
import PublicarVaga from '@/components/views/PublicarVaga.vue';

export default {
    name: 'ConteudoComponent',
    props: {
        conteudo: {
            type: String,
            required: true
        }
    },
    components: {
        Home,
        PublicarVaga
    }
}
</script>
    