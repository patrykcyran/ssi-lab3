<template>
  <div class="bg-primary text-white text-center m-2 p-3">
    <h3>Produkt: {{ wielka(odwroc(nazwa))}}</h3>
    <h3>Cena: {{ waluta(pobierzCalkowitaCene(nizszyPodatek), 3) }} PLN (niższa stawka)</h3>
    <h3>Cena: {{ $filtry.walutaG(pobierzCalkowitaCene(wyzszyPodatek)) }} PLN (wyższa stawka)</h3>
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
      wyzszyPodatek: 23
    }
  },
  methods: {
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