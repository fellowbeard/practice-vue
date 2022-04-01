/* global Vue, axios */

var App = {
  data: function () {
    return {
      message: "Hello from JavaScript!",
      products: [],
    };
  },
  mounted: function () {
    this.getProducts();
  },
  methods: {
    // ...
    getProducts: function () {
      axios.get("http://localhost:3000/products").then((response) => {
        console.log(response.data);
        this.products = response.data;
      });
    },
    addProducts: function () {
      product;
      axios.post("http://localhost:3000/products", params).then((response) => {
        console.log(response.data);
        this.products.push(response.data);
      });
    },
    updateProducts: function () {
      axios.patch("http://localhost:3000/products/:id").then((response) => {
        console.log(response.data);
        this.products = response.data;
      });
    },
  },
};

Vue.createApp(App).mount("#app");
