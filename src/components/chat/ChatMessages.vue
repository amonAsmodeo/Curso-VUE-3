<template>
  <!-- ref: vincula el elemento div con la propiedad reactiva chatRef -->
  <div class="flex-1 overflow-y-auto p-4" ref="chatRef">
    <div class="flex flex-col space-y-2">
      <!-- Messages esto viene del archivo padre, indecision view -->
      <!-- esta iterando un arreglo v-for="message in messages"-->
      <!-- :key="message.id"  Identificador único para optimización de Vue -->
      <!-- v-bind="message" Pasa todas las propiedades del mensaje al componente hijo | hace el macheo de todas las propartis del mensaje  -->
      <ChatBubble v-for="message in messages" :key="message.id" v-bind="message" />
      <!-- :its-mine="message.itsMine"
        :message="message.message"
        :image="message.image" -->
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import ChatBubble from './ChatBubble.vue';
import { ref, watch } from 'vue';

interface Props {
  messages: ChatMessage[];
}

// Recibe un array de messages con tipo ChatMessage (definido en interfaz aparte)
const props = defineProps<Props>();

// referencia al contenedor del scroll
const chatRef = ref<HTMLDivElement | null>(null);

// Observa cambios en props.messages | funciona para la ejecucion
// para pasar las pruevas es sin .messages
watch(
  // Línea 1: La función a observar (en este caso, las props.messages)
  () => props.messages,

  // Línea 2: El callback que se ejecuta cuando cambia props.messages
  () => {
    // Cuando cambia:

    // Espera 100ms (para permitir renderizado) da tiempo a que Vue actualice el DOM
    setTimeout(() => {
      // La comprobación if (chatRef?.value) evita errores si la referencia no existe
      if (chatRef?.value) {
        // Si existe la referencia, hace scroll al final del contenedor
        chatRef.value.scrollTo({
          top: chatRef.value.scrollHeight, // Hace scroll al final del contenedor
          behavior: 'smooth', // Con animación suave
        });
      }
    }, 100);
  },

  // Línea 3: Opciones del watcher
  { deep: true }, // Observa cambios profundos en el array/objeto Sin esto, el watcher solo se activaría si se asigna un nuevo array a props.messages. Con deep: true, también detecta cambios internos como añadir/eliminar elementos del array.
);
</script>
