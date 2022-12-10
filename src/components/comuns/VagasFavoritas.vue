<template>
    <div>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasVagasFavoritadas" aria-labelledby="offcanvasVagasFavoritadasLabel">
            <div class="offcanvas-header" @favoritados="vagasFavoritadas = $event">
                <h5 id="offcanvasVagasFavoritadasLabel">Vagas Favoritadas</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                    aria-label="Close"></button>
            </div>

            <div class="offcanvas-body">
                <ul class="list-group">            
                    <li class="list-group-item" v-for="(vaga, index) in favoritados" :key="index">
                        {{vaga.titulo}}
                    </li> 
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VagasFavoritas',
    props: {
        favoritados: {
            type: Array
        }
    }
}
</script>