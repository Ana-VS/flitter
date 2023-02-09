<template>
    <div class="flit-div">
        <div class="flit-author">
            <h3>{{ flit.user.username }}</h3>
            <div>
                <button
                    class="btn-info"
                    id="flitDetail"
                    data-bs-toggle="modal"
                    data-bs-target="#flitModal"
                >
                    <img src="@/assets/imgs/detail.png" alt="Flit Detail" />
                </button>

                <button
                    v-if="user?._id == flit.userId"
                    class="btn-info"
                    id="flitDelete"
                    @click="deleteF"
                >
                    <img src="@/assets/imgs/delete.png" alt="Delete Flit" />
                </button>
            </div>
        </div>
        <div class="flit-content">
            <div class="flit-img" v-if="flit.imageUrl">
                <img 
                    :src="flit.imageUrl" 
                    alt="Imagen no encontrada."
                />
            </div>
            <div class="flit-img" v-else>
                <img src="@/assets/imgs/noPicture.jpg" alt="" />
            </div>
            <div class="flit-content-right">
                <div class="flit-text" v-if="flit.text">
                    {{ flit.text }}
                </div>
                <div class="flit-footer">
                    <p>{{ flit.createdAt }}</p>
                    <p class="kudos" @click.prevent="kudo">
                        <img src="@/assets/imgs/liked.png" alt="Liked flit" />
                        {{ flit.kudosCount }}
                    </p>
                </div>
            </div>
        </div>
    </div>
    <!-- Ventana modal detalle flit -->
    <div
        class="modal fade modal-box"
        id="flitModal"
        tabindex="-1"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">
                        {{ flit.user.username }}'s flit detail
                    </h5>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body">
                    <div class="container">
                        <img class="modal-img" :src="flit.imageUrl" />
                    </div>
                    <p class="modal-text">{{ flit.text }}</p>
                </div>
                <div class="modal-footer">
                    <p class="modal-date">{{ flit.createdAt }}</p>
                    <p class="modal-kudos">
                        <img src="@/assets/imgs/liked.png" alt="Liked flit" />
                        {{ flit.kudosCount }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Flit } from "@/models/flit";
import useFlits from "@/composables/useFlits";
import useAuth from "@/composables/useAuth";

export default defineComponent({
    name: "FlitBox",
    props: {
        flit: {
            type: Object as PropType<Flit>,
            required: true,
        },
    },
    setup(props) {
        const { user } = useAuth();
        const { deleteFlit, toggleKudo } = useFlits();

        return {
            deleteF: () => deleteFlit(props.flit._id),
            kudo: () => toggleKudo(props.flit._id),
            user,
        }
    }
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
    margin: 10px 10% 10px 10%;
    padding: 20px 10px 5px 10px;
    border-radius: 10px;
    width: 80%;
}
.flit-div div {
    width: 400px;
}
.flit-author {
    margin: 15px 30px 5px 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.btn-info {
    float: right;
    margin: 0px 10px;
    background: white;
    border: 0px;
}
.btn-info:hover {
    transform: scale(1.1);
}

.btn-info img {
    height: 30px;
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
    color: #726e6e;
}
.flit-footer p {
    font-size: 10pt;
}

.kudos {
    color: #d7443e;
    font-weight: bolder;
    cursor: pointer;
}
.flit-footer p img {
    height: 20px;
}

/* Ventana modal */
.modal-dialog {
    min-width: 650px;
}

/* .modal-header{} */
.modal-title {
    padding: 10px 15px 0px 15px;
}
.modal-img {
    width: 100%;
}
.modal-text {
    padding: 10px 20px 0px 15px;
}
.modal-footer {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 5px 20px 15px 15px;
    color: #726e6e;
}
.modal-date {
    padding: 10px 15px 0px 15px;
}
.modal-kudos {
    color: #d7443e;
    font-weight: bolder;
}
.modal-kudos img {
    height: 20px;
}

@media screen and (min-width: 992px) {
    .flit-div {
        margin: 10px 15% 10px 15%;
        padding: 0;
        width: 70%;
    }
    .flit-content {
        display: flex;
        flex-direction: row;
    }
    .flit-div div {
        width: 100%;
    }
    .flit-author h3 {
        text-align: left;
        font-weight: bolder;
        padding: 15px 20px 0px 25px;
        font-size: 14pt;
    }

    .flit-img {
        padding: 5px 15px 10px 15px;
        width: 50%;
    }
    .flit-img img {
        object-fit: cover;
        padding: 3px 0px;
        max-height: 250px;
        width: 100%;
        border-radius: 7pt;
    }
    .flit-text {
        padding: 20px 40px 20px 20px;
        font-size: 10pt;
        text-align: justify;
    }
    .flit-footer {
        padding: 20px 40px 20px 20px;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        align-content: space-between;
    }
    .flit-content-right {
        padding: 0px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        justify-content: space-between;
        align-content: space-between;
    }
}
</style>
