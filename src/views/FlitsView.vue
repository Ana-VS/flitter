<template>
    <div class="home">
        <div class="content">
            <FlitAdd v-if="user" />

            <div class="sort-section">
                <button
                    v-if="sort == 'asc'"
                    class="btn-sort"
                    @click="changeRef"
                >
                    Newest flits
                </button>
                <button v-else class="btn-sort" @click="changeRef">
                    Oldest flits
                </button>
                <div class="sort-section-divider">|</div>
                <button
                    v-if="!onlyFollowing && user"
                    class="btn-sort"
                    @click="changeOnlyFollowing"
                >
                    Friends' flits
                </button>
                <button
                    v-if="onlyFollowing && user"
                    class="btn-sort"
                    @click="changeOnlyFollowing"
                >
                    All flits
                </button>
                <div v-if="user" class="sort-section-divider">|</div>

                <form>
                    <div>
                        <input
                            v-model="searchTerm"
                            type="text"
                            class="form-control"
                            placeholder="Search for flits"
                        />
                    </div>
                </form>
            </div>
            <FlitList :sort="sort" :userIds="userIds" :text="searchTerm" />
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
        const sort = ref("desc" as "asc" | "desc");
        const userIds = ref(undefined as string[] | undefined);
        const searchTerm = ref("");

        const onlyFollowing = ref(false);

        watch(onlyFollowing, () => {
            let localUserIds = onlyFollowing.value
                ? user?.value?.followingIds || undefined
                : undefined;

            if (
                localUserIds &&
                localUserIds.length == 0 &&
                onlyFollowing.value
            ) {
                localUserIds = ["not-existing"];
            }
            userIds.value = localUserIds;
            console.log(userIds.value);
        });

        return {
            user,
            sort,
            flits,
            onlyFollowing,
            changeOnlyFollowing: () => {
                onlyFollowing.value = !onlyFollowing.value;
            },
            changeRef: () => {
                sort.value = sort.value == "asc" ? "desc" : "asc";
            },
            searchTerm,
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
    background: none !important;
    border: none;
    padding: 0 !important;
    color: #0d6efd;
    text-decoration: none;
    cursor: pointer;
    font-size: 12pt;
}
.btn-sort:hover {
    font-weight: bolder;
}
.form-control {
    padding: 5px 10px;
    border-radius: 15px;
    margin: 3px 15px 3px 3px;
    font-size: 10pt;
}
.form-control:focus {
    border: solid 1px #f3f3f4;
    box-shadow: 0 0 4px #27244d;
}
</style>
