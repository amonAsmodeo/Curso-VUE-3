import MyCounter from '@/components/MyCounter.vue';
import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';

describe('<Pruebas de MyCounter />', () => {
  test('sould match snapshot', () => {
    // Preparar la pruena
    const wrapper = mount(MyCounter, {
      props: {
        value: 5,
      },
    });

    // prueba que la vista se renderice igual a la captura que se tenia previamente
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('Render the counter value correctly', () => {
    const value = 5;

    const wrapper = mount(MyCounter, {
      props: {
        value: value,
      },
    });

    expect(wrapper.find('h3').text()).toContain(`Counter: ${value}`);
    expect(wrapper.find('[data-testid="square-label"]').text()).toContain(
      `Square: ${value * value}`,
    );
  });

  test('increments the couner when +1 button is clicked', async () => {
    const value = 5;

    const wrapper = mount(MyCounter, {
      props: {
        value: value,
      },
    });

    // obtengo todos los h3 y desestructuro
    const [counterLabel, squareLabel] = wrapper.findAll('h3');
    // obtenemos el primer boton
    const btnIncrement = wrapper.find('button');
    // se simula click en el boton
    await btnIncrement.trigger('click');

    expect(counterLabel.text()).toContain(`Counter: ${value + 1}`);
    expect(squareLabel.text()).toContain(`Square: ${(value + 1) * (value + 1)}`);
  });

  test('decrements the counter when -1 button is clicked twice', async () => {
    const value = 5;

    const wrapper = mount(MyCounter, {
      props: {
        value: value,
      },
    });

    // obtener todos los h3 y desestructuro los elementos
    const [counterLabel, squareLabel] = wrapper.findAll('h3');

    // obtener el segundo boton por desestructuracion,
    // el primer elemento no interesa por el momento por eso no hay un nombre para el elemento
    const [, btnDecrement] = wrapper.findAll('button');

    //  simular 2 clicks en el boton para restar
    await btnDecrement.trigger('click');
    await btnDecrement.trigger('click');

    expect(counterLabel.text()).toContain(`Counter: ${value - 2}`);
    expect(squareLabel.text()).toContain(`Square: ${(value - 2) * (value - 2)}`);
  });
});
