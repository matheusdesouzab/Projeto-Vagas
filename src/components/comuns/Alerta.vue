<template>
    <div>
        <div :class="estiloAlerta" role="alert">
            <slot name="titulo"></slot>
            <hr>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Alerta',
    props: {
        tipo: String
    },
    computed: {
        estiloAlerta(){
            switch(this.tipo){
                case 'erro': return 'alert alert-danger'
                case 'sucesso': return 'alert alert-success'
                default: return 'alert alert-success'
            }
        }
    }
}
</script>