import ChatMessages from '@/components/chat/ChatMessages.vue';
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import { mount } from '@vue/test-utils';
import { describe, expect, test, vi } from 'vitest';

const messages: ChatMessage[] = [
  { id: 1, message: 'Hola', itsMine: true },
  { id: 2, message: 'menudo', itsMine: false, image: 'http://hola-mundo.jpg' },
];

const wrapper = mount(ChatMessages, {
  props: { messages },
});

describe('Pruebas para componente <chatMessages />', () => {
  test('render chat messages correctly', () => {
    const chatBubbles = wrapper.findAllComponents({ name: 'ChatBubble' });

    expect(chatBubbles.length).toBe(messages.length);
  });

  test('scrolls dawn to the button after message update', async () => {
    // wrapper que sobre escribe el wrapper definido antes de iniciar las pruebas
    const wrapper = mount(ChatMessages, {
      props: { messages },
    });

    // 1. Configurar el mock de scrollTo
    //Crea un mock (simulación) de la función scrollTo usando Vitest
    // Permite rastrear si y cómo fue llamada
    const scrollToMock = vi.fn();

    //Obtiene la referencia al elemento del chat (debería ser un div contenedor)
    const chatRef = wrapper.vm.$refs.chatRef as HTMLDivElement;
    //Reemplaza su método scrollTo con nuestro mock
    chatRef.scrollTo = scrollToMock;

    // Añade un nuevo mensaje al array existente
    // await espera que Vue procese el cambio reactivo
    await wrapper.setProps({
      messages: [...messages, { id: 3, message: 'hey', itsMine: true }],
    });

    //Pausa la prueba por 150ms para permitir que:
    //  Vue complete la actualización del DOM
    //  Cualquier setTimeout en el componente se ejecute
    await new Promise((r) => setTimeout(r, 150));

    // Comprueba que el método scrollTo fue llamado al menos una vez
    expect(scrollToMock).toHaveBeenCalled();
  });
});
