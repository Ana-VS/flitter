<template>
    <div class="hello">
        <form class="row">
            <div class="col-auto">
                <input
                    type="text"
                    class="form-control"
                    placeholder="Search for products"
                    minlength="3"
                />
            </div>
            <div class="col-auto">
                <button type="submit" class="btn mb-3">
                    <img src="@/assets/imgs/search.png" alt="Seach" />
                </button>
            </div>
        </form>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: "searchBox",
});
</script>
<style scoped>
.row {
    margin: 0;
}
.row,
b {
    padding: 20px 0px 10px 0px;
    display: flex !important;
    justify-content: center;
}

.hello {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.btn {
    padding: 5px 5px;
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
