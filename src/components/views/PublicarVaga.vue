<template>
    <div class="container p-4 bg-white my-5">
        <div class="row">
            <div class="col">
                <h4>Apresente a sua vaga para milhares de profissionais e de graça</h4>
            </div>
        </div>

        <div class="row mt-3">
            <div class="col">
                <label class="form-label" for="">Título da Vaga</label>
                <input type="text" class="form-control" v-model="titulo">
                <div class="form-text">Por exemplo: Programador JavaScript e VueJS.</div>
            </div>
        </div>

        <div class="row mt-3">
            <div class="col-8">
                <label class="form-label" for="">Descrição</label>
                <input type="text" class="form-control" v-model="descricao">
                <div class="form-text">Informe os detalhes da vaga.</div>
            </div>
            <div class="col-4">
                <label class="form-label" for="">Salário</label>
                <input type="number" class="form-control" v-model="salario">
                <div class="form-text">Informe o salário.</div>
            </div>
        </div>

        <div class="row mt-3">
            <div class="col">
                <label class="form-label" for="">Modalidade</label>
                <select class="form-select" name="" id="" v-model="modalidade">
                    <option value="" disabled>---Selecione---</option>
                    <option value="1">Home Office</option>
                    <option value="2">Presencial</option>
                </select>
                <div class="form-text">Informe onde as atividades serão realizadas.</div>
            </div>

            <div class="col">
                <label class="form-label" for="">Tipo</label>
                <select class="form-select" name="" id="" v-model="tipo">
                    <option value="" disabled>---Selecione---</option>
                    <option value="1">CLT</option>
                    <option value="2">PJ</option>
                </select>
                <div class="form-text">Informe o tipo de contratação.</div>
            </div>
        </div>

        <div class="row mt-3">
            <div class="col">
                <button class="btn btn-primary" type="button" @click="salvarVaga()">Cadastrar</button>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'PublicarVaga',
    data: () => ({
        titulo: '',
        descricao: '',
        salario: '',
        modalidade: '',
        tipo: ''
    }),
    methods: {
        salvarVaga() {
            let tempoDecorrido = Date.now()
            let dataAtual = new Date(tempoDecorrido)
            let vagas = JSON.parse(localStorage.getItem('vagas'))

            if (!vagas) vagas = []

            vagas.push({
                titulo: this.titulo,
                descricao: this.descricao,
                salario: this.salario,
                modalidade: this.modalidade,
                tipo: this.tipo,
                publicacao: dataAtual.toISOString()
            })

            if (this.validaFormulario()) {

                localStorage.setItem('vagas', JSON.stringify(vagas))

                this.emitter.emit('alerta', {
                    titulo: `A vaga ${this.titulo} foi cadastrada com sucesso`,
                    tipo: 'sucesso',
                    descricao: 'Parabéns, a vaga foi cadastrada e poderá ser consultada por milhares de profissionais'
                })

                this.resertaFormularioCadastroVaga()

            } else {
                this.emitter.emit('alerta', {
                    titulo: `Ops... Não foi possível realizar o cadastro da vaga`,
                    tipo: 'erro',
                    descricao: 'Parece que você esqueceu de preencher alguma informação'
                })
            }

        },
        resertaFormularioCadastroVaga() {
            this.titulo = '',
                this.descricao = '',
                this.salario = '',
                this.modalidade = '',
                this.tipo = ''
        },
        validaFormulario() {
            let valido = true

            if (this.titulo === '') valido = false
            if (this.descricao === '') valido = false
            if (this.salario === '') valido = false
            if (this.modalidade === '') valido = false
            if (this.tipo === '') valido = false

            return valido
        }
    },
}
</script>
  
<style scoped>
.container {
    border-radius: 10px;
}
</style>
  