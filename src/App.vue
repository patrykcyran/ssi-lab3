<template>
  <div class="container-fluid text-center">
    <h2 class="bg-primary text-white text-center p-3">Produkty</h2>
    <table class="table table-sm table-bordered table-striped text-left">
      <tr><th>Indeks</th><th>Nazwa</th><th>Cena</th></tr>
      <tbody>
      <tr v-for="(p, key, i) in elementyStrony" v-bind:key="p.nazwa">
        <td>{{ key }}</td>
        <td>{{ p.nazwa }}</td>
        <td>{{ p.cena }}</td>
      </tr>
      </tbody>
    </table>
    <div class="text-center">
      <button v-for="i in liczbaStron"
              v-on:click="wybierzStrone(i)"
              class="btn btn-primary m-1"
              v-bind:class="{'bg-warning': aktualnaStrona == i}">
        {{i}}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MojKomponent',
  data: function() {
    return {
      rozmiarStrony: 3,
      aktualnaStrona: 1,
      produkty: [
        { nazwa: "Kajak", cena: 234 },
        { nazwa: "Kamizelka ratunkowa", cena: 49.99 },
        { nazwa: "Piłka do metalu", cena: 19.49 },
        { nazwa: "Stadion", cena: 9990000 },
        { nazwa: "Czapeczka", cena: 15 },
        { nazwa: "Kubek", cena: 20 },
        { nazwa: "Myszka", cena: 350 },
        { nazwa: "Klawiatura", cena: 500 },
        { nazwa: "Słuchawki", cena: 200 },
        { nazwa: "Laptop", cena: 3500 },
      ],
    }
  },
  computed: {
    liczbaStron() {
      return Math.ceil(this.produkty.length / this.rozmiarStrony);
    },
    elementyStrony() {
      let start = (this.aktualnaStrona - 1) * this.rozmiarStrony;
      return this.produkty.slice(start, start + this.rozmiarStrony);
    }
  },
  methods: {
    wybierzStrone(strona) {
      this.aktualnaStrona = strona;
    },
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