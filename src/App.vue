<template src="./App.html"/>

<script>
export default {
  data: function () {
    return {
      licznik: 0
    }
  },
  methods: {
    przechwycKlikniecie() {
      this.licznik++;
    }
  },
  computed: {
    komunikat() {
      return this.licznik == 0 ?
          "Przycisk nie został kliknięty" : `Liczba kliknięć: ${this.licznik}`;
    }
  }
}
</script>