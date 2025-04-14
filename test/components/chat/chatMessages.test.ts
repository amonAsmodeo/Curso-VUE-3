import ChatMessages from '@/components/chat/ChatMessages.vue';
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import { mount } from '@vue/test-utils';
import { describe, expect, test, vi } from 'vitest';

// Datos de prueba
const messages: ChatMessage[] = [
  { id: 1, message: 'Hola', itsMine: true },
  { id: 2, message: '¿Cómo estás?', itsMine: false },
];

const wrapper = mount(ChatMessages, {
  props: { messages: [...messages] },
});

describe('Pruebas para componente <chatMessages />', () => {
  test('render chat messages correctly', () => {
    const chatBubbles = wrapper.findAllComponents({ name: 'ChatBubble' });

    expect(chatBubbles.length).toBe(messages.length);
  });

  test('scrolls dawn to the button after message update', async () => {
    // 1. Configurar el mock de scrollTo
    //Crea un mock (simulación) de la función scrollTo usando Vitest
    // Permite rastrear si y cómo fue llamada
    const scrollToMock = vi.fn();

    //Obtiene la referencia al elemento del chat (debería ser un div contenedor)
    const chatRef = wrapper.vm.$refs.chatRef as HTMLDivElement;

    //Reemplaza su método scrollTo con nuestro mock
    chatRef.scrollTo = scrollToMock;

    // 1. Configurar mock con propiedades necesarias
    const newMessage: ChatMessage = { id: 3, message: 'Nuevo mensaje', itsMine: true };

    // 2. Actualizar props con nuevo mensaje
    // Añade un nuevo mensaje al array existente
    // await espera que Vue procese el cambio reactivo
    await wrapper.setProps({
      messages: [...messages, newMessage],
    });

    //Pausa la prueba por 150ms para permitir que:
    //  Vue complete la actualización del DOM
    // 3. Esperar ciclo completo (Vue + setTimeout)
    await wrapper.vm.$nextTick(); // Espera actualización de Vue
    await new Promise((resolve) => setTimeout(resolve, 150)); // >100ms del componente

    // Comprueba que el método scrollTo fue llamado al menos una vez
    expect(scrollToMock).toHaveBeenCalled();
  });
});
