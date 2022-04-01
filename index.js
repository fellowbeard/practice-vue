var App = {
  data: function () {
    return {
      message: "Hot Probs!",
      number1: 0,
      number2: 0,
      number3: 0,
      add: 0,
      multiply: 0,
      divide: 0,
    };
  },
  methods: {
    computeSum: function () {
      this.add = parseInt(this.number1) + parseInt(this.number2) + parseInt(this.number3);
    },
    multiplySum: function () {
      this.multiply = parseInt(this.number1) * parseInt(this.number2) * parseInt(this.number3);
    },

    divideSum: function () {
      this.divide = parseInt(this.number1) / parseInt(this.number2) / parseInt(this.number3);
    },
  },
};

Vue.createApp(App).mount("#app");
