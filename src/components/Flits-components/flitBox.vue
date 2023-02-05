<template>
    <div class="flit-div">
        <div class="flit-author">
            <h3>{{ flit.autor }}</h3>
        </div>
        <div class="flit-img">
            <img :src="{{ flit.imgSrc }}" alt="PicPrueba" />
        </div>
        <div class="flit-text">
            {{ flit.text }}
        </div>
        <div class="flit-footer">
            <p>{{ flit.date }}</p>
            <p class="kudos">
                <img src="@/assets/imgs/liked.png" alt="Liked flit" />
                {{ flit.numKudos }}
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useFlits from "@/composables/useFlits";

export default defineComponent({
    name: "FlitBox",
    setup() {
        const {} = useFlits();
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
    margin: 10px;
    margin: 10px;
    border-radius: 10px;
    width: 430px;
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
