<template>
    <div class="AddFlit-box">
        <div class="FlitAdd-left">
            <img
                src="@/assets/imgs/flittAdd.png"
                alt="Add Flit"
                id="AddFlit-img"
            />
        </div>
        <form class="FlitAdd-right">
            <textarea
                class="form-control"
                id="flitadd-textarea"
                rows="1"
                placeholder="What's happening?"
            ></textarea>

            <input
                class="form-control flitadd-input"
                type="url"
                placeholder="Insert image url"
            />

            <input id="flitadd-btn" type="submit" value="Flit" />
        </form>
    </div>
</template>

<style scoped>
.AddFlit-box {
    display: flex;
    flex-direction: row;
    width: 50%;
    background: white;
    padding: 10px;
    border-radius: 20px;
}
.FlitAdd-left {
    width: 30%;
}

.FlitAdd-right {
    width: 70%;
    display: flex;
    flex-direction: column;
}

#AddFlit-img {
    height: 30px;
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
