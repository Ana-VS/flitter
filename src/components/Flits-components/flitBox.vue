<template>
    <div class="flit-div">
        <div class="flit-author">
            <h3>{{ flit.user.username }}</h3>
        </div>
        <div class="flit-img" v-if="flit.imageUrl">
            <img :src="flit.imageUrl" />
        </div>
        <div class="flit-text" v-if="flit.text">
            {{ flit.text }}
        </div>
        <div class="flit-footer">
            <p>{{ flit.createdAt }}</p>
            <p class="kudos">
                <img src="@/assets/imgs/liked.png" alt="Liked flit" />
                {{ flit.kudosCount }}
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Flit } from "@/models/flit";

export default defineComponent({
    name: "FlitBox",
    props: {
        flit: {
            type: Object as PropType<Flit>,
            required: true,
        },
    },
});
</script>

<style scoped>
.flit-div {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    background: #ffffff;
    margin: 10px 35% 10px 35%;
    padding: 20px 10px 5px 10px;
    border-radius: 10px;
    width: 450px;
}
.flit-div div {
    width: 400px;
}
.flit-author h3 {
    text-align: left;
    font-weight: bolder;
    padding: 3px 0px;
    font-size: 14pt;
}

.flit-img {
    padding: 3px 0px;
}
.flit-img img {
    object-fit: cover;
    padding: 3px 0px;
    max-height: 160px;
    width: 400px;
    border-radius: 7pt;
}
.flit-text {
    padding: 3px 0px;
    font-size: 10pt;
    text-align: justify;
}
.flit-footer {
    padding: 10px 3px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
}
.flit-footer p {
    font-size: 10pt;
}

.kudos {
    color: #d7443e;
    font-weight: bolder;
}
.flit-footer p img {
    height: 20px;
}
</style>
