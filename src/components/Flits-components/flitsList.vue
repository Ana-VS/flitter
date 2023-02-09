<template>
    <div v-if="isLoading">Loading...</div>
    <div v-else>
        <div class="flitList">
            <flitBox v-for="flit in flits" :key="flit.id" :flit="flit" />
        </div>
        <div class="loadMore-section">
            <p class="loadMore-info">Showing {{ Loadlimit }} flits</p>
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
    setup() {
        const Loadlimit = ref(10);

        const loadMore = () => {
            Loadlimit.value += 10;
            fetchFlits({ skip: 0, limit: Loadlimit.value });
        };
        const scrollUp = () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        };

        const { isLoading, fetchFlits, flits } = useFlits();
        // Correr la llamada para cargar los flits ni bien el componente se monte
        onMounted(() => {
            fetchFlits({ skip: 0, limit: 10 });
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
