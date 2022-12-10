<template>
    <div class="card border rounded-3 border border-info">
        <div class="card-header bg-white text-white p-3">
            <div class="row">
                <div class="col d-flex justify-content-between">
                    <div class="fw-bold text-dark">{{ titulo }}</div>
                    <a href="#" class="pe-auto"><i :class="icon" @click="favorita()"></i></a>
                </div>
            </div>
        </div>
        <div class="card-body">
            <p>{{ descricao }}</p>
        </div>
        <div class="card-footer p-3">Salário: R$ {{ salario }} | Modalidade: {{ getModalidade }} | Tipo: {{ getTipo }} |
            Publicação: {{ getPublicacao }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'Vaga',
    data: () => ({
        favoritada: false,
        icon: ''
    }),
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
    methods: {
        favorita() {
            let favoritadas = JSON.parse(localStorage.getItem('favoritadas'))
            if (!this.verificarFavorita()) {
                if (!favoritadas) favoritadas = []
                favoritadas.push({
                    titulo: this.titulo,
                })
                localStorage.setItem('favoritadas', JSON.stringify(favoritadas))
            } else {
                let favoritadasNovo = favoritadas.filter(v => v.titulo != this.titulo)
                localStorage.setItem('favoritadas', JSON.stringify(favoritadasNovo))
            }
            this.iconType()
        },
        verificarFavorita() {
            const favoritadas = JSON.parse(localStorage.getItem('favoritadas'))

            if (favoritadas) {
                let titulos = favoritadas.map(f => f.titulo)
                let resultado = false

                resultado = titulos.includes(this.titulo);

                return resultado
            } else {
                return false
            }
        },
        iconType() {
            if (this.verificarFavorita()) {
                this.icon = 'bi bi-heart-fill text-danger'
            } else {
                this.icon = 'bi-heart text-danger'
            }
        }
    },
    computed: {
        getModalidade() {
            switch (this.modalidade) {
                case '1': return 'Home Office'
                case '2': return 'Presencial'
            }
            return ''
        },
        getTipo() {
            switch (this.tipo) {
                case '1': return 'CLT'
                case '2': return 'PJ'
            }
            return ''
        },
        getPublicacao() {
            let dataPublicacao = new Date(this.publicacao)
            return dataPublicacao.toLocaleDateString('pt-BR')
        }
    },
    mounted() {
        this.verificarFavorita()
        this.iconType()
    }
}
</script>