<template>
    <div class="hello">
        <form class="seach">
            <div>
                <input
                    v-model="searchTerm"
                    type="text"
                    class="form-control"
                    placeholder="Search for flits"
                />
            </div>
            <div>
                <button type="submit" class="btn mb-3" @click.prevent="search">
                    <img src="@/assets/imgs/search.png" alt="Seach" />
                </button>
            </div>
        </form>
    </div>
</template>
<script lang="ts">
import useFlits from "@/composables/useFlits";
import { defineComponent, ref } from "vue";

export default defineComponent({
    name: "searchBox",
    setup() {
        const searchTerm = ref("");
        const { fetchFlits } = useFlits();

        return {
            searchTerm,
            search: () => fetchFlits({ text: searchTerm.value }),
        };
    },
});
</script>
<style scoped>
.hello {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.seach {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
}
.btn {
    padding: 5px 5px;
    border-radius: 0px 5px 5px 0px;
    background-color: #4a3aff;
    color: #454851;
    font-weight: bolder;
    text-shadow: #b39f9f 1px 1px 2px;
}
.btn:hover {
    background-color: #4a3aff;
    transform: scale(1.1);
}
.btn img {
    height: 25px;
}
.form-control {
    width: 300px;
    border-right: 0px;
    border-radius: 5px 0px 0px 5px;
}
.form-control:hover {
    border: solid 2px #f3f3f4;
    box-shadow: #27244d;
}
.form-control:focus {
    border: solid 1px #f3f3f4;
    box-shadow: 0 0 4px #27244d;
}
.btn:hover {
    color: #4a3affa1;
    font-weight: bolder;
    text-shadow: #454851 1px 1px 2px;
}

.btn a:hover {
    color: #4a3affa1;
    font-weight: bolder;
    text-shadow: #454851 1px 1px 2px;
}
searchBar-input {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
}
</style>
