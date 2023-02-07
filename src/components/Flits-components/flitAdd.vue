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
            <div class="FlitAdd-fields">
                <label> <img src="@/assets/imgs/text.png" alt="Text" /></label>
                <textarea
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
                    class="form-control flitadd-input"
                    type="url"
                    placeholder="Insert image url"
                />
            </div>

            <input id="flitadd-btn" type="submit" value="Flit" />
        </form>
    </div>
</template>

<style scoped>
.AddFlit-box {
    display: flex;
    flex-direction: row;
    width: 70%;
    background: white;
    padding: 0px;
    border-radius: 20px;
}
.FlitAdd-left {
    width: 30%;
}

.FlitAdd-right {
    width: 70%;
    display: flex;
    flex-direction: column;
    padding: 10px;
}

#AddFlit-img {
    height: 200px;
    width: 100%;
    border-radius: 15px 0px 0px 15px;
    object-fit: cover;
}
#AddFlit-img img {
    object-fit: cover;
}

#flitadd-textarea {
    padding: 15px;
    border-radius: 15px;
    margin: 10px 0px;
}

.flitadd-input {
    padding: 5px 15px;
    border-radius: 15px;
    margin: 10px 0px;
}

.FlitAdd-fields {
    display: flex;
    flex-direction: row;
}

.FlitAdd-fields img {
    padding: 10px 10px 0px 10px;
    height: 45px;
}
.form-control:focus {
    border: solid 1px #f3f3f4;
    box-shadow: 0 0 4px #27244d;
}

#flitadd-btn {
    background-color: #4a3aff;
    padding: 10px;
    border-radius: 20px;
    border: #f2f2f2;
    color: #f2f2f2;
    font-size: 14pt;
    font-weight: bold;
    text-shadow: #454851 1px 1px 2px;
    align-self: flex-end;
    width: 100px;
}
#flitadd-btn:hover {
    transform: scale(1.1);
}
</style>
