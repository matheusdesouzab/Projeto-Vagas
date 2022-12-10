<template>
    <div class="h-100 p-5 bg-light border rounded-3 border border-info">
        <h2>Pesquisar Vagas</h2>
        <div class="row">
            <div class="col">
                <div class="form-group">
                    <label>Título da vaga</label>
                    <input type="text" v-model="titulo" class="form-control my-2" placeholder="Pesquisar por palavras chaves" />
                    <small class="form-text text-muted">Informe palavras que estejam relacionadas as vagas que você
                        busca</small>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <button class="btn btn-outline-primary mt-2" type="button" @click="pesquisarVaga()">Buscar</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PesquisarVaga',
    data: () => ({
        titulo: ''
    }),
    methods:{
        pesquisarVaga(){
            this.emitter.emit('filtrarVagas', {
                titulo: this.titulo
            })
        }
    }
}
</script>
