<template>
    <!DOCTYPE html>
    <!-- Created By CodingLab - www.codinglabweb.com -->
    <html lang="en" dir="ltr">
        <head>
            <meta charset="utf-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <!-- <title>Login Form | CodingLab</title> -->
            <link rel="stylesheet" href="style.css" />
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
            />
        </head>
        <body>
            <div class="container">
                <div class="wrapper">
                    <div class="title"><span>Login Form</span></div>
                    <form action="#">
                        <div class="row">
                            <i class="fas fa-user"></i>
                            <input
                                type="text"
                                placeholder="Email or Phone"
                                required
                            />
                        </div>
                        <div class="row">
                            <i class="fas fa-lock"></i>
                            <input
                                type="password"
                                placeholder="Password"
                                required
                            />
                        </div>

                        <div class="row button">
                            <input type="submit" value="Login" />
                        </div>
                        <div class="signup-link">
                            Not a member? <a href="#">Signup now</a>
                        </div>
                    </form>
                </div>
            </div>
        </body>
    </html>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Auth } from "@/models/auth";
import router from "@/router";
import fakeShopApi from "@/api/flitterApi";

export default defineComponent({
    name: "LoginForm",
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
}
body {
    background: #4a3aff;
    overflow: hidden;
}
::selection {
    background: #4a3aff;
}
.container {
    max-width: 540px;
    padding: 0 20px;
    margin: 100px auto;
}
.wrapper {
    width: 100%;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.1);
}
.wrapper .title {
    height: 100px;
    background: #383091;
    border-radius: 5px 5px 0 0;
    color: #fff;
    font-size: 30px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
}
.wrapper form {
    padding: 30px 35px 25px 35px;
}
.wrapper form .row {
    height: 45px;
    margin-bottom: 15px;
    position: relative;
}
.wrapper form .row input {
    height: 100%;
    width: 100%;
    outline: none;
    padding-left: 60px;
    border-radius: 5px;
    border: 1px solid lightgrey;
    font-size: 16px;
    transition: all 0.3s ease;
}
form .row input:focus {
    border-color: #4a3aff;
    box-shadow: inset 0px 0px 1px 1px #383091;
}
form .row input::placeholder {
    color: #999;
}
.wrapper form .row i {
    position: absolute;
    width: 47px;
    height: 100%;
    color: #fff;
    font-size: 18px;
    background: #383091;
    border: 1px solid #4a3aff;
    border-radius: 5px 0 0 5px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.wrapper form .pass {
    margin: -8px 0 20px 0;
}
.wrapper form .pass a {
    color: #4a3aff;
    font-size: 17px;
    text-decoration: none;
}
.wrapper form .pass a:hover {
    text-decoration: underline;
}
.wrapper form .button input {
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    padding-left: 0px;
    background: #4a3aff;
    border: 1px solid #4a3aff;
    cursor: pointer;
}
form .button input:hover {
    background: #383091;
}
.wrapper form .signup-link {
    text-align: center;
    margin-top: 20px;
    font-size: 17px;
}
.wrapper form .signup-link a {
    color: #4a3aff;
    text-decoration: none;
}
form .signup-link a:hover {
    text-decoration: underline;
}
</style>
