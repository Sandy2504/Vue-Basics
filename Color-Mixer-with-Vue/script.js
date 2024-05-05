Vue.createApp({
  data() {
    return {
      bred: 30,
      bgreen: 144,
      bblue: 255,
      tred: 0,
      tgreen: 0,
      tblue: 0,
    };
  },
  computed: {
    computedColor() {
      return `rgb(${this.bred}, ${this.bgreen}, ${this.bblue})`;
    },
  },
  methods: {
    randomBGColor() {
      this.bred = Math.floor(Math.random() * 255);
      this.bgreen = Math.floor(Math.random() * 255);
      this.bblue = Math.floor(Math.random() * 255);
    },
  },
}).mount("#app");
