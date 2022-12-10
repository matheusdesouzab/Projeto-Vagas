<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary p-3">
        <div class="container-fluid">
            <a class="navbar-brand  fw-bold" href="#">Vagas Online</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mb-2 ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" href="#" @click="navegarPara('Home')">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" @click="navegarPara('PublicarVaga')">Publicar Vagas</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasVagasFavoritadas" @click="atualizarFavoritados()">Favoritados</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'TopoPadraoComponent',
    methods: {
        navegarPara(guia) {
            this.$emit('navegar', guia)
        },
        atualizarFavoritados(){
            this.$emit('favoritados', JSON.parse(localStorage.getItem('favoritadas')))
        }
    }
}
</script>

<style scoped>
.navbar{
    background-color: #333366;
}
.navbar img{
    width: 100px;
}
.navbar .nav-link{
    color: #e5e5e5;
    font-weight: 500;
}

.navbar .nav-link:hover{
    color: black;
}

</style>
  

  