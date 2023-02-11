<template>
    <div class="home">
        <div class="content">
            <FlitAdd v-if="user" />

            <div class="sort-section">
                <button v-if="sort == 'asc'" class="btn-sort" @click="changeRef">Ordenar por nuevos</button>
                <button v-else class="btn-sort" @click="changeRef">Ordenar por antiguos</button>
                <div class="sort-section-divider">|</div>
                <button v-if="!onlyFollowing" class="btn-sort" @click="changeOnlyFollowing">Ver solo personas que sigo</button>
                <button v-else class="btn-sort" @click="changeOnlyFollowing">Ver todo</button>
            </div>
            <FlitList :sort="sort" :userIds="userIds" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import FlitAdd from "@/components/Flits-components/flitAdd.vue";
import FlitList from "@/components/Flits-components/flitsList.vue";
import useAuth from "@/composables/useAuth";
import useFlits from "@/composables/useFlits";

export default defineComponent({
    name: "FlitsView",
    components: {
        FlitAdd,
        FlitList,
    },
    setup() {
        const { user } = useAuth();
        const { flits } = useFlits();
        const sort = ref('desc' as 'asc' | 'desc');
        const userIds = ref(undefined as string[] | undefined);

        const onlyFollowing = ref(false);

        watch(onlyFollowing, () => {
            let localUserIds = user?.value?.followingIds || undefined;
            if (localUserIds && localUserIds.length == 0 && onlyFollowing.value) {
                localUserIds = ["not-existing"]
            }
            userIds.value = localUserIds;
        })

        return { 
            user, 
            sort,
            flits,
            onlyFollowing,
            changeOnlyFollowing: () => { onlyFollowing.value = !onlyFollowing.value },
            changeRef: () => {
                sort.value = sort.value == 'asc' ? 'desc' : 'asc'
            },
            userIds,
        };
    },
});
</script>

<style scoped>
.home {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-content: center !important;
}

.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.sort-section {
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.sort-section-divider {
    margin-left: 10px;
    margin-right: 10px;
}

.btn-sort {
    background: none!important;
    border: none;
    padding: 0!important;
    color: #069;
    text-decoration: underline;
    cursor: pointer;
}

</style>
