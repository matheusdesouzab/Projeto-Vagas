<template>
  <div>
    <topo-padrao-component @navegar="componente = $event"  />
    <conteudo-component :conteudo="componente" />
  </div>
</template>

<script>
import ConteudoComponent from '@/components/layouts/ConteudoComponent.vue'
import TopoPadraoComponent from '@/components/layouts/TopoPadraoComponent.vue'

export default {
  name: 'App',
  data: () => ({
    componente: 'Home'
  }),
  components: {
    ConteudoComponent,
    TopoPadraoComponent
  }
}
</script>

<style scoped>

</style>
