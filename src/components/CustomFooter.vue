<template>
    <div class="footer">
        <div class="leftFooter">
            <slot name="leftfootersection"></slot>
        </div>
        <div>
            <nav class="imgFooter">
                <div class="girls">
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <img class="RRSS" src="@/assets/imgs/linkedin.png" />
                    </a>
                    <p>Ana</p>
                </div>
                <div class="girls">
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <img class="RRSS" src="@/assets/imgs/linkedin.png" />
                    </a>
                    <p>Carolina</p>
                </div>
                <div class="girls">
                    <a
                        href="https://github.com/mangelesc"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img class="RRSS" src="@/assets/imgs/linkedin.png" />
                    </a>
                    <p>Mª Ángeles</p>
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
    max-height: 120px;
    padding: 5px 0;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
}

.girls {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 80px;
}

.girls p {
    font-size: 10pt;
}

.imgFooter {
    display: flex;
    justify-content: space-between;
}

.RRSS {
    margin: 0px 10px;
    height: 2em;
}
.leftfootersection {
    color: #ffffff;
}
</style>

