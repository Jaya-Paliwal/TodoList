<template>
  <div id="app">
    <task v-bind:tasks="tasks"></task>
  </div>
</template>

<script>
import Task from "./components/Tasklist";

export default {
  name: "App",
  components: {
    Task,
  },
  data() {
    return {
      tasks: [
        {
          id: 1,
          title: "Read Books",
          completed: false,
        },
        {
          id: 2,
          title: "Buy Hosting",
          completed: false,
        },
        {
          id: 3,
          title: "Learn Vue.JS",
          completed: true,
        },
        {
          id: 4,
          title: "Read Newpaper",
          completed: true,
        }
      ],
    };
  },
};
</script>