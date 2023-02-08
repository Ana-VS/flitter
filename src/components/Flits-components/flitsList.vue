<template>
    <div v-if="isLoading">Loading...</div>
    <div v-else>
        <div class="flitList">
            <flitBox v-for="flit in flits" :key="flit.id" :flit="flit" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import flitBox from "./flitBox.vue";
import useFlits from "@/composables/useFlits";

export default defineComponent({
    name: "flitsList",
    components: {
        flitBox,
    },
    setup() {
        const { isLoading, fetchFlits, flits } = useFlits();        
        // Correr la llamada para cargar los flits ni bien el componente se monte
        onMounted(() => {
            fetchFlits({ skip: 0, limit: 10 });
        })

        return {
            isLoading,
            flits,
        };
    },
});
</script>

<style scoped></style>
