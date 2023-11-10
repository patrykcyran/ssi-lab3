import 'bootstrap/dist/css/bootstrap.min.css';
import {createApp} from "vue";
import mojKomponent from "./App.vue"

const app = createApp(mojKomponent);

app.config.globalProperties.$filtry = {
    walutaG(wartosc) {
        return new Intl.NumberFormat("pl-PL",
            {style: "currency", currency: "PLN",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }).format(wartosc);
    }
}

app.mount("#app");