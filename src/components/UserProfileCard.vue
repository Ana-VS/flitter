<template>
    <div class="UserProfile-box">
        <div class="UserProfile-left">
            <img
                src="@/assets/imgs/Socialmedia.jpg"
                alt="Add UserProfile"
                id="UserProfile-img"
            />
        </div>
        <div class="UserProfile-right">
            <h2 id="gretting">Hey there, {{ user?.username }}!</h2>
            <tbody class="userProf-tbody">
                <tr class="userProf-tr">
                    <td class="userProf-td-img">
                        <img src="@/assets/imgs/username.png" alt="Username" />
                    </td>
                    <td class="userProf-td-info">
                        <p class="userProf-td-tittle"><b>Username</b></p>
                        <p>{{ user?.username }}</p>
                    </td>
                    <td class="userProf-td-btn">
                        <button class="btn">Change</button>
                    </td>
                </tr>
                <tr class="userProf-tr">
                    <td class="userProf-td-img">
                        <img src="@/assets/imgs/email.png" alt="Email" />
                    </td>
                    <td class="userProf-td-info">
                        <p class="userProf-td-tittle"><b>Email</b></p>
                        <p>{{ user?.email }}</p>
                    </td>
                    <td class="userProf-td-btn">
                        <button class="btn">Change</button>
                    </td>
                </tr>
                <tr class="userProf-tr">
                    <td class="userProf-td-img">
                        <img src="@/assets/imgs/password.png" alt="Password" />
                    </td>
                    <td class="userProf-td-info">
                        <p class="userProf-td-tittle"><b>Password</b></p>
                        <p>*******</p>
                    </td>
                    <td class="userProf-td-btn">
                        <button class="btn">Change</button>
                    </td>
                </tr>
                <tr class="userProf-tr">
                    <td class="userProf-td-img">
                        <img src="@/assets/imgs/friends.png" alt="Friends" />
                    </td>
                    <td class="userProf-td-info">
                        <p class="userProf-td-tittle"><b>Friends</b></p>
                        <p>Number friends</p>
                    </td>
                    <td class="userProf-td-btn">
                        <button class="btn">View</button>
                    </td>
                </tr>
                <tr class="userProf-tr">
                    <td class="userProf-td-img">
                        <img src="@/assets/imgs/myflits.png" alt="My flits" />
                    </td>
                    <td class="userProf-td-info">
                        <p class="userProf-td-tittle"><b>My Flits</b></p>
                        <p>Number flits</p>
                    </td>
                    <td class="userProf-td-btn">
                        <button class="btn">View</button>
                    </td>
                </tr>
                <tr class="userProf-tr">
                    <td class="userProf-td-img">
                        <img
                            src="@/assets/imgs/deleleAccount.png"
                            alt="My flits"
                        />
                    </td>
                    <td class="userProf-td-info">
                        <p class="userProf-td-tittle">
                            <b>Delete my Account</b>
                        </p>
                        <p>No longer want to part be of Flitter?</p>
                    </td>
                    <td class="userProf-td-btn">
                        <button class="btn btn-delete">Delete</button>
                    </td>
                </tr>
            </tbody>
        </div>
    </div>
</template>
<script lang="ts">
import useAuth from "@/composables/useAuth";
import { defineComponent, ref } from "vue";

export default defineComponent({
    name: "UserProfile",
    setup() {
        const { user } = useAuth();

        return {
            user,
        };
    },
});
</script>

<style scoped>
.UserProfile-box {
    display: flex;
    flex-direction: row;
    align-content: center !important;
    width: 70%;
    background: white;
    padding: 0px;
    border-radius: 20px;
    margin: 25px 15% 25px 15%;
}
.UserProfile-left {
    width: 40%;
}

.UserProfile-right {
    width: 60%;
    display: flex;
    flex-direction: column;
    padding: 5px;
}

#gretting {
    padding: 15px 0px 0px 25px;
    font-size: 24pt;
}
#UserProfile-img {
    height: 100%;
    width: 100%;
    border-radius: 15px 0px 0px 15px;
    object-fit: cover;
}

#UserProfile-img img {
    object-fit: cover;
}

.userProf-tbody {
    padding: 20px 35px 15px 45px;
}
.userProf-tr {
    margin-bottom: 10px;
}
.userProf-td-img {
    padding: 5px 20px 5px 0px;
}
.userProf-td-img img {
    height: 50px;
    margin: 5px 0px 15px 0px;
}
.userProf-td-info {
    width: 500px;
    margin: 15px;
}
.userProf-td-tittle {
    margin-bottom: 0px;
}
.userProf-td-tittle b {
    font-size: 10pt;
}
.userProf-td-btn {
    text-align: center;
    color: white;
}
.userProf-td-btn button {
    background-color: #4a3aff;
    width: 90px;
    color: white;
}

.userProf-td-btn button:hover {
    transform: scale(1.1);
}

.btn-delete {
    background-color: rgb(175, 5, 5) !important;
}
</style>
