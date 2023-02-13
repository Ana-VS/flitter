<template>
    <div class="footer">
        <div class="leftFooter">
            <slot name="leftfootersection"></slot>
        </div>
        <div>
            <nav class="imgFooter">
                <div class="girls">
                    <a
                        href="https://www.linkedin.com/in/ana-virseda-sanz/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img class="RRSS" src="@/assets/imgs/linkedin.png" />
                    </a>
                    <p>Ana</p>
                </div>
                <div class="girls">
                    <a
                        href="https://www.linkedin.com/in/caro-cortfreu/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img class="RRSS" src="@/assets/imgs/linkedin.png" />
                    </a>
                    <p>Carolina</p>
                </div>
                <div class="girls">
                    <a
                        href="https://www.linkedin.com/in/mariaangelescordoba/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img class="RRSS" src="@/assets/imgs/linkedin.png" />
                    </a>
                    <p>Ángeles</p>
                </div>
                <div class="girls">
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <img class="RRSS" src="@/assets/imgs/linkedin.png" />
                    </a>
                    <p>Paloma</p>
                </div>
                <div class="girls">
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <img class="RRSS" src="@/assets/imgs/linkedin.png" />
                    </a>
                    <p>Sofía</p>
                </div>
            </nav>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "CustomFooter",
});
</script>

<style scoped>
.footer {
    background: #27244d;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 80px;
    padding: 10px 0px 0px 0px;
    width: 100%;
    position: static;
    left: 0;
    bottom: 0;
}

.girls {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 50px;
}

.girls p {
    font-size: 8pt;
    text-align: center;
    padding: 5px 5px;
}

.imgFooter {
    display: flex;
    justify-content: space-between;
    padding: 0%;
}

.RRSS {
    margin: 0px 15px;
    height: 1.2em;
}
.leftfootersection {
    color: #ffffff;
}
</style>
