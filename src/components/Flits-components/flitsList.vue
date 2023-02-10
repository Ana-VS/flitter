<template>
    <div v-if="isLoading">Loading...</div>
    <div v-else>
        <div class="flitList">
            <flitBox v-for="flit in flits" :key="flit.id" :flit="flit" />
        </div>

        <div v-if="flits.length == 0" class="emptyFlits">
            No hay flits para mostrar.
        </div>

        <div class="loadMore-section" v-if="flits.length > 0">
            <p class="loadMore-info">Showing {{ flits.length }} flits</p>
            <button class="loadMore-btn" @click.prevent="loadMore">
                Load more flits
            </button>
        </div>
        <button class="btn" id="btnScrollUp" @click.prevent="scrollUp">
            <img id="btnScrollUp-img" src="@/assets/imgs/scrollUp.png" alt="" />
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import flitBox from "./flitBox.vue";
import useFlits from "@/composables/useFlits";

export default defineComponent({
    name: "flitsList",
    components: {
        flitBox,
    },
    props: {
        userIds: {
            type: Array,
            required: false,
        },
    },
    setup(props) {
        // Agregar filtros de los props para la busqueda, el perfil y los usuairos que seguimos
        const filters = {} as { userIds?: string[] };
        if (props.userIds) filters.userIds = props.userIds as string[];

    
        const Loadlimit = ref(10);

        const loadMore = () => {
            Loadlimit.value += 10;
            fetchFlits({ skip: 0, limit: Loadlimit.value, ...filters });
        };

        const scrollUp = () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        };

        const { isLoading, fetchFlits, flits } = useFlits();
    
        // Correr la llamada para cargar los flits ni bien el componente se monte
        onMounted(() => {
            fetchFlits({ skip: 0, limit: 10, ...filters });
        });

        return {
            isLoading,
            flits,
            loadMore,
            Loadlimit,
            scrollUp,
        };
    },
});
</script>

<style scoped>
.loadMore-section {
    padding: 15px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.loadMore-info {
    text-align: center;
}
.emptyFlits {
    background-color: white;
    padding: 15px 0px;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
}
.loadMore-btn {
    background-color: #4a3aff;
    color: white;
    font-weight: bold;
    border-radius: 15px;
    border-color: white;
    padding: 15px 7px;
    width: 200px;
    align-self: center;
}

.loadMore-btn:hover {
    transform: scale(1.1);
}

#btnScrollUp {
    color: white;
    position: fixed;
    bottom: 20px;
    right: 25px;
}

#btnScrollUp:hover {
    color: white;
    transform: scale(1.1);
}
#btnScrollUp-img {
    height: 45px;
}

</style>
