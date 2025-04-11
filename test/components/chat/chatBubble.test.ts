import ChatBubble from '@/components/chat/ChatBubble.vue';
import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';

describe('component <chatBubble />', () => {
  test('renders own message correctly', () => {
    const message = 'Hola mundo';
    const wrapper = mount(ChatBubble, {
      props: { message, itsMine: true },
    });

    expect(wrapper.find('.bg-blue-200').exists()).toBe(true); // probar que el elemento exista
    expect(wrapper.find('.bg-blue-200').exists()).toBeTruthy(); // probar que el elemento exista
    expect(wrapper.find('.bg-blue-200').text()).toContain(message); // prueba que el mensaje este presente
    expect(wrapper.find('.bg-gray-300').exists()).toBeFalsy(); // Valida que no exista el elemento
  });

  test('renders received message correctly', () => {
    const message = 'Si';
    const wrapper = mount(ChatBubble, {
      props: { message, itsMine: false },
    });

    expect(wrapper.find('.bg-gray-300').exists()).toBeTruthy(); // que el elemento de respuesta exista
    expect(wrapper.find('.bg-gray-300').text()).toContain(message); // que contenga el mensaje enviado
    expect(wrapper.find('.bg-blue-200').exists()).toBeFalsy(); // que el elemento no exista
    expect(wrapper.find('img').exists()).toBeFalsy(); //evaluar que la imagen no exista
  });

  test('render received message correctly whit image', () => {
    // Preparativos
    const message = 'no';
    const image = 'example.gif';
    // estimulo
    const wrapper = mount(ChatBubble, {
      props: { message, itsMine: false, image: image },
    });

    expect(wrapper.find('.bg-gray-300').exists()).toBeTruthy(); // que la imagen exista
    expect(wrapper.find('.bg-gray-300').text()).toContain(message); // que contanga el mensaje
    expect(wrapper.find('img').exists()).toBeTruthy(); // que la imagen exista
    expect(wrapper.find('img').attributes('src')).toContain(image); // que sea la imagen qu ele envio
    expect(wrapper.find('.bg-blue-200').exists()).toBeFalsy(); // que el elemento no exista
  });
});
