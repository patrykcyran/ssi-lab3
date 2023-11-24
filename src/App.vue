<template>
  <div class="container-fluid text-center">
    <div class="bg-primary text-white text-center m-2 p-3">
      <ul class="text-left">
        <li>Pierwszy element listy</li>
        <template v-if="pokazElementy">
          <li>{{nazwa}}</li>
          <li>{{cena}}</li>
        </template>
        <li>Ostatni element listy</li>
      </ul>
      <h3 v-if="pokazElementy">Produkt: {{nazwa}}</h3>
      <h3 v-else>Cena: {{cena}}</h3>
    </div>
    <div class="bg-primary text-white text-center m-2 p-3">
      <h3 v-if="licznik % 3 == 0">Produkt: {{nazwa}}</h3>
      <h3 v-else-if="licznik % 3 == 1">Cena: {{cena}}</h3>
      <h3 v-else>Kategoria: {{kategoria}}</h3>
    </div>
    <button class="btn btn-primary" v-on:click="przechwycKllikniecie">
      Kliknij mnie
    </button>
    <button class="btn btn-primary" v-on:click="przechwycKllikniecieShow">
      Albo kliknij mnie
    </button>
  </div>
</template>

<script>
export default {
  name: 'MojKomponent',
  data: function() {
    return {
      nazwa: "Laptop",
      cena: 1490,
      nizszyPodatek: 12,
      wyzszyPodatek: 23,
      pokazElementy: true,
      licznik: 0,
    }
  },
  methods: {
    przechwycKllikniecie() {
      this.pokazElementy = !this.pokazElementy;
    },
    przechwycKllikniecieShow() {
      this.licznik++;
    },
    pobierzCalkowitaCene(podatek) {
      return this.cena + (this.cena * (podatek / 100))
    },
    waluta(wartosc, miejsc) {
      return new Intl.NumberFormat("pl-PL",
          {style: "currency", currency: "PLN",
          minimumFractionDigits: miejsc || 2,
          maximumFractionDigits: miejsc || 2
          }).format(wartosc);
    },
    odwroc(wartosc) {
      return wartosc.split("").reverse().join("");
    },
    wielka(wartosc){
      return wartosc[0].toUpperCase() + wartosc.slice(1);
    }
  },
}
</script>