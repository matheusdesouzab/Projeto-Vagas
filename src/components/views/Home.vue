<template>
    <div class="container py-4">
        <div class="row">
            <div class="col">
                <pesquisar-vaga></pesquisar-vaga>
            </div>
        </div>

        <lista-vagas></lista-vagas>

        <!--  <div class="row mt-5">
            <div class="col-4">
                <indicador titulo="Vagas abertas" indicador="100" bg="bg-dark" color="text-white"></indicador>
            </div>
            <div class="col-4">
                <indicador titulo="Profissionais cadastrados" indicador="255" bg="bg-dark" color="text-white">
                </indicador>
            </div>
            <div class="col-4">
                <indicador titulo="Visitantes onlines" :indicador="usuariosOnline" bg="bg-light" color="text-dark">
                </indicador>
            </div>
        </div> -->
    </div>
</template>
  
<script>
import PesquisarVaga from '@/components/comuns/PesquisarVaga.vue'
import Indicador from '@/components/comuns/Indicador.vue'
import ListaVagas from '@/components/comuns/ListaVagas.vue'

export default {
    name: 'Home',
    components: {
        PesquisarVaga,
        Indicador,
        ListaVagas
    },
    data: () => ({
        usuariosOnline: 0
    }),
    methods: {
        getUsuariosOnline() {
            this.usuariosOnline = Math.floor(Math.random() * 101)
        }
    },
    created() {
        setInterval(this.getUsuariosOnline, 3000)
    }
}
</script>
  
<style scoped>

</style>
  