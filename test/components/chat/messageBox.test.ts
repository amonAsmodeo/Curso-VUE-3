import MessageBox from '@/components/chat/messageBox.vue';
import { mount } from '@vue/test-utils';
import { expect, describe, test } from 'vitest';

describe('<MessageBox/ >', () => {
  // tomar el elemento
  const wrapper = mount(MessageBox);

  test('renders input and buton elements corectly', () => {
    expect(wrapper.html()).toMatchSnapshot(); // evaua que la vista este como la deje
    expect(wrapper.find('input[type="text"]').exists()).toBeTruthy(); // valida que el input tipo texo exista
    expect(wrapper.find('button').exists()).toBeTruthy(); // valida que el boton exista
    expect(wrapper.find('button svg').exists()).toBeTruthy(); // valida que exista el SVG
  });

  test('emits sendMessage event when button is cliked wih message value', async () => {
    const message = 'Hola mundo';

    //
    await wrapper.find('input[type="text"]').setValue(message); // simulamos poner un mensaje en el imput
    await wrapper.find('button').trigger('click'); // simulamos el click
    //emitted: todo lo que se a emitido al momento
    console.log(wrapper.emitted('sendMessage'));

    expect(wrapper.emitted('sendMessage')?.[0]).toEqual([message]); // esperamos que se emita el mensaje

    expect(wrapper.vm.message as any).toBe(''); // evauamos que el mensaje ese vacio al final
  });

  // probar modificador de evento
  test('emits sendMessage event when keypress.enter is triggered with message value', async () => {
    // tomar el elemento
    const wrapper = mount(MessageBox); // se crea este elemento para que no use el creado globalmente

    const input = wrapper.find('input');
    await input.trigger('keypress.enter');
    await wrapper.find('button').trigger('click'); // simulamos el click

    expect(wrapper.emitted('sendMessage')).toBeFalsy();
  });

  test('should', () => {});
});
