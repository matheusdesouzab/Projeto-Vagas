<template>
  <div class="container-main"> 
    <vagas-favoritas-component :favoritados="vagasFavoritadas"></vagas-favoritas-component>
    <topo-padrao-component @favoritados="vagasFavoritadas = $event" @navegar="componente = $event" />
    <alerta-component v-if="exibirAlerta" :tipo="alerta.tipo">
      <template v-slot:titulo>
        <h5>{{ alerta.titulo }}</h5>
      </template>
      <p>{{ alerta.descricao }}</p>
    </alerta-component>
    <conteudo-component :conteudo="componente" />
  </div>
</template>

<script>
import AlertaComponent from '@/components/comuns/Alerta.vue';
import ConteudoComponent from '@/components/layouts/ConteudoComponent.vue'
import TopoPadraoComponent from '@/components/layouts/TopoPadraoComponent.vue'
import VagasFavoritasComponent from '@/components/comuns/VagasFavoritas.vue';

export default {
  name: 'App',
  data: () => ({
    componente: 'Home',
    alerta: { titulo: '', descricao: '', tipo: '' },
    exibirAlerta: false,
    vagasFavoritadas: []
  }),
  components: {
    ConteudoComponent,
    TopoPadraoComponent,
    VagasFavoritasComponent,
    AlertaComponent
  },
  mounted() {
    this.emitter.on('alerta', (a) => {
      this.alerta = a
      this.exibirAlerta = true
      setTimeout(() => this.exibirAlerta = false, 4000)
    })
  }
}
</script>

<style scoped>
.container-main{
  background-color: #eef1f5;
}
.card{
  border-radius: 15px;
}
</style>
