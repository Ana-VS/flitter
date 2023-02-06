<template>
    <div v-if="isLoading">Loading...</div>
    <div v-else>
        <div class="flitList">
            <flitBox v-for="flit in flits" :key="flit.id" :flit="flit" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import flitBox from "./flitBox.vue";
import useFlits from "@/composables/useFlits";

export default defineComponent({
    name: "flitsList",
    components: {
        flitBox,
    },
    setup() {
        const { isLoading, flits } = useFlits();
        return {
            isLoading,
            flits,
        };
    },
});
</script>

<style scoped></style>
