/* global Vue, axios */

var App = {
  data: function () {
    return {
      message: "Stuff to get done:",
      todos: [],
    };
  },
  mounted: function () {
    console.log("Created");
    this.getMyToDos();
  },
  // methods: {
  //   addTodo() {
  //     var todo = {};
  methods: {
    // ...
    loadToDos: function () {
      axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
        console.log(response.data);
        this.todos = response.data;
      });
    },
  },
};

Vue.createApp(App).mount("#app");
