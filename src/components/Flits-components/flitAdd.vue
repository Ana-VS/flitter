<template>
    <div class="AddFlit-box">
        <div class="FlitAdd-left">
            <img
                src="@/assets/imgs/Socialmedia.jpg"
                alt="Add Flit"
                id="AddFlit-img"
            />
        </div>
        <form class="FlitAdd-right">
            <h2 id="gretting">Hey there, {{ user.username }}</h2>
            <div class="FlitAdd-fields">
                <label> <img src="@/assets/imgs/text.png" alt="Text" /></label>
                <textarea
                    v-model="text"
                    class="form-control"
                    id="flitadd-textarea"
                    rows="1"
                    maxlength="256"
                    placeholder="What's happening?"
                ></textarea>
            </div>

            <div class="FlitAdd-fields">
                <label>
                    <img src="@/assets/imgs/image.png" alt="Image"
                /></label>
                <input
                    v-model="imageUrl"
                    class="form-control flitadd-input"
                    type="url"
                    pattern="https://.*"
                    placeholder="Insert image url"
                />
            </div>

            <input
                id="flitadd-btn"
                type="submit"
                value="Flit"
                @click.prevent="add"
                :disabled="!text && !imageUrl"
            />
        </form>
    </div>
</template>
<script lang="ts">
import useAuth from "@/composables/useAuth";
import useFlits from "@/composables/useFlits";
import { defineComponent, ref } from "vue";
// import { User } from "@/models/user";

export default defineComponent({
    name: "flitAdd",
    setup() {
        const text = ref("");
        const imageUrl = ref("");

        const { user } = useAuth();
        const { addFlit } = useFlits();

        return {
            user,
            add: () => {
                addFlit(text.value, imageUrl.value);
                imageUrl.value = "";
                text.value = "";
            },
            text,
            imageUrl,
        };
    },
});
</script>

<style scoped>
.AddFlit-box {
    display: flex;
    flex-direction: row;
    align-content: center !important;
    width: 70%;
    max-height: 190px;
    background: white;
    padding: 0px;
    border-radius: 20px;
    margin: 0px 15% 0px 15%;
}
.FlitAdd-left {
    width: 30%;
}

.FlitAdd-right {
    width: 70%;
    display: flex;
    flex-direction: column;
    padding: 5px;
}

#gretting {
    padding: 10px 0px 0px 15px;
    font-size: 16pt;
}
#AddFlit-img {
    height: 100%;
    width: 100%;
    border-radius: 15px 0px 0px 15px;
    object-fit: cover;
}

#AddFlit-img img {
    object-fit: cover;
}

#flitadd-textarea {
    padding: 10px;
    border-radius: 15px;
    margin: 3px 15px 3px 3px;
    font-size: 10pt;
}

.flitadd-input {
    padding: 5px 10px;
    border-radius: 15px;
    margin: 3px 15px 3px 3px;
    font-size: 10pt;
}

.FlitAdd-fields {
    display: flex;
    flex-direction: row;
}

.FlitAdd-fields img {
    padding: 5px 7px 0px 15px;
    height: 30px;
}
.form-control:focus {
    border: solid 1px #f3f3f4;
    box-shadow: 0 0 4px #27244d;
}

#flitadd-btn {
    background-color: #4a3aff;
    padding: 7px;
    border-radius: 20px;
    border: #f2f2f2;
    color: #f2f2f2;
    font-size: 12pt;
    font-weight: bold;
    text-shadow: #454851 1px 1px 2px;
    align-self: flex-end;
    width: 100px;
    margin: 3px 15px 0px 3px;
}

#flitadd-btn:disabled {
    background-color: grey;
}

#flitadd-btn:hover:enabled {
    transform: scale(1.1);
}
</style>
