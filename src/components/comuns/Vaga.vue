<template>
    <div class="card">
        <div class="card-header bg-dark text-white">
            {{ titulo }}
        </div>
        <div class="card-body">
            <p>{{ descricao }}</p>
        </div>
        <div class="card-footer">Salário: R$ {{ salario }} | Modalidade: {{ getModalidade }} | Tipo: {{ getTipo }} |
            Publicação: {{ getPublicacao }}</div>
    </div>
</template>

<script>
export default {
    name: 'Vaga',
    props: {
        titulo: {
            type: String,
            required: true
        },
        descricao: {
            type: String,
            required: true
        },
        salario: {
            type: Number,
            required: true
        },
        modalidade: {
            type: String,
            required: true
        },
        tipo: {
            type: String,
            required: true
        },
        publicacao: {
            type: String,
            required: true
        }
    },
    computed: {
        getModalidade(){
            switch(this.modalidade){
                case '1': return 'Home Office'
                case '2': return 'Presencial'
            }
            return ''
        },
        getTipo(){
            switch(this.tipo){
                case '1': return 'CLT'
                case '2': return 'PJ'
            }
            return ''
        },
        getPublicacao(){
            let dataPublicacao = new Date(this.publicacao)
            return dataPublicacao.toLocaleDateString('pt-BR')
        }
    }
}
</script>