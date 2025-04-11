<!-- Fuente: https://tailwindcomponents.com/component/chat-layout -->
<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Mi esposa</span>
    </div>

    <!-- messages -->
    <ChatMessages :messages="messages" />

    <!-- messageBox -->
    <!-- @send-message="onMessage" dispara eventos personalizados -->
    <!-- el evento emite un string, y al ser emitido el texto es enviado a la funcion porque solo espera un string -->
    <messageBox @send-message="onMessage" />
  </div>
</template>

<script setup lang="ts">
import ChatMessages from '@/components/chat/ChatMessages.vue';
import messageBox from '@/components/chat/messageBox.vue';
// iporta el composable useChat
import { useChat } from '@/composables/useChat';
// desestructuro lo que viene de useChat
const { messages, onMessage } = useChat();
</script>
