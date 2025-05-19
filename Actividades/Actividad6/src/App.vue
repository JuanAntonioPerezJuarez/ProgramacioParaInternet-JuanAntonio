<template>
  <div class="container mx-auto p-4 max-w-2xl">
    <h1 class="text-3xl font-bold mb-6 text-center text-blue-600">Mi Lista de Tareas</h1>
    
    <!-- Formulario para agregar tareas -->
    <div class="flex gap-2 mb-6">
      <input 
        v-model="newTask" 
        @keyup.enter="addTask"
        type="text" 
        placeholder="Agregar nueva tarea..." 
        class="flex-1 p-2 border rounded-lg focus:outline-none focus:border-blue-500"
      >
      <button 
        @click="addTask" 
        class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Agregar
      </button>
    </div>

    <!-- Lista de tareas -->
    <div class="space-y-2">
      <div 
        v-for="task in tasks" 
        :key="task.id"
        class="flex items-center gap-2 p-3 bg-white border rounded-lg shadow-sm"
      >
        <input 
          type="checkbox" 
          v-model="task.completed"
          class="w-5 h-5"
        >
        <span 
          :class="{ 'line-through text-gray-500': task.completed }"
          class="flex-1"
        >
          {{ task.text }}
        </span>
        <button 
          @click="deleteTask(task.id)"
          class="text-red-500 hover:text-red-700"
        >
          Eliminar
        </button>
      </div>
      
      <!-- Mensaje cuando no hay tareas -->
      <div v-if="tasks.length === 0" class="text-center text-gray-500 py-4">
        No hay tareas pendientes
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const newTask = ref('')
const tasks = ref([])

// Agregar nueva tarea
const addTask = () => {
  if (newTask.value.trim()) {
    tasks.value.push({
      id: Date.now(),
      text: newTask.value,
      completed: false
    })
    newTask.value = ''
  }
}

// Eliminar tarea
const deleteTask = (taskId) => {
  tasks.value = tasks.value.filter(task => task.id !== taskId)
}
</script>
