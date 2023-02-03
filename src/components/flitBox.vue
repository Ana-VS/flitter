<template>
    <div class="flit-div">
        <div class="flit-author">
            <h3>Autor</h3>
        </div>
        <div class="flit-img">
            <img
                src="https://images.pexels.com/photos/15279711/pexels-photo-15279711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="PicPrueba"
            />
        </div>
        <div class="flit-text">
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500, cuando un impresor (N. del T.
            persona que se dedica a la imprenta) desconocido usó una galería de
            textos y los mezcló de tal manera que logró hacer un libro de textos
            especimen.
        </div>
        <div class="flit-footer">
            <p>03/04/2021</p>
            <p class="kudos">
                <img src="@/assets/imgs/liked.png" alt="Liked flit" /> 200
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "FlitBox",
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
