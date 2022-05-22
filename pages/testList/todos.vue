<template>
  <div class="todolist">
    <h2>待辦事項</h2>
    <hr />
    <div>
      <input
        v-model="textarea"
        placeholder="請新增待辦事項"
        type="text"
        @keyup.enter="addtodo"
      />
      <button @click="addtodo">新增</button>
      <button @click="remove">刪除</button>
    </div>
    <ol>
      <li v-for="(todo, index) in list" :key="index">
        <label class="text">
          <div style="width:20px">{{ index + 1 }}.</div>
          <input type="checkbox" :checked="todo.done" @change="toggle(todo)" />
          <div :class="{ done: todo.done }">{{ todo.text }}</div>
        </label>
      </li>
    </ol>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      textarea: '',
    }
  },
  computed: {
    ...mapState({
      list: (state) => state.todos.list,
    }),
  },
  methods: {
    ...mapMutations({
      add: 'todos/add',
      remove: 'todos/remove',
      toggle: 'todos/toggle',
    }),
    addtodo(e) {
      const vm = this
      vm.add(vm.textarea)
      vm.textarea = ''
    },
  },
}
</script>

<style lang="less" scoped>
.todolist {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .text {
    display: flex;
    align-items: center;

    input {
      margin: 0 10px;
    }

    .done {
      text-decoration: line-through;
    }
  }
}
</style>