<template>
  <div class="container-fluid text-center">
    <h2 class="bg-primary text-white text-center p-3">Produkty</h2>
    <table class="table table-sm table-bordered table-striped text-left">
      <tr><th>Indeks (obiekt)</th><th>Klucz</th><th>Nazwa</th><th>Cena</th></tr>
      <tbody>
      <tr v-for="(p, key, i) in produktyObiekt" v-bind:key="p.nazwa">
        <td>{{ i + 1 }}</td>
        <td>{{ key }}</td>
        <td>{{ p.nazwa }}</td>
        <td>{{ p.cena }}</td>
      </tr>
      </tbody>
    </table>
    <div class="text-center">
      <button v-for="i in 5" v-on:click="przechwycKllikniecieTabela" class="btn btn-primary">
        Kliknij mnie
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MojKomponent',
  data: function() {
    return {
      produktyObiekt: {
        "kajak": { nazwa: "Kajak", cena: 234 },
        22: { nazwa: "Kamizelka ratunkowa", cena: 49.99 },
        3: { nazwa: "Piłka do metalu", cena: 19.49 },
        "4": { nazwa: "Stadion", cena: 9990000 },
        5: { nazwa: "Czapeczka", cena: 15 },
      },
    }
  },
  computed: {

  },
  methods: {
    przechwycKllikniecieTabela() {
      //this.produkty.push(this.produkty.shift())
      //this.produkty = this.produkty.filter(p => p.cena > 20);
      //this.produkty[1] = {nazwa: "Buty do biegania", cena: 99};
      //this.produkty.length = 2;
      Object.assign(this.produktyObiekt, {6: {nazwa: "Buty do biegania", cena: 99}});
    },
  },
}
</script>