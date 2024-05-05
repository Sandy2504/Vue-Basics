Vue.createApp({
  data() {
    return {
      x: 12,
      y: 4,
      fruitBasket: [
        "🍏 Apple",
        "🍌 Banana",
        "🍉 Melon",
        "🫐 Blueberry",
        "🍓 Strawberry",
        "🍍 Ananas",
        "🥭 Mango",
      ],
    };
  },

  methods: {
    removeFruit(fruitToRemove) {
      const index = this.fruitBasket.indexOf(fruitToRemove);

      if (index !== -1) {
        this.fruitBasket.splice(index, 1);
      }
    },
  },
}).mount("#app");
