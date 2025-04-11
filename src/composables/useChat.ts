// los composables son funciones comunes y corrientes
import { Sleep } from '@/helpers/sleep';
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import type { YesNoResponse } from '@/interfaces/yes-no.response';
import { ref } from 'vue';

export const useChat = () => {
  const messages = ref<ChatMessage[]>([
    // mensjaes de prueba
    // {
    //   id: Math.random() /* id ficticio */,
    //   message: 'Hola mundo desde el arreglo',
    //   itsMine: true,
    // },
    // {
    //   id: Math.random() /* id ficticio */,
    //   message: 'quieres ir por un café ?',
    //   itsMine: true,
    // },
    // {
    //   id: Math.random() /* id ficticio */,
    //   message: 'Si',
    //   itsMine: false,
    //   image: 'https://yesno.wtf/assets/yes/14-b57c6dc03aa15a4b18f53eb50d6197ee.gif',
    // },
  ]);

  const getHerResponse = async () => {
    const respuesta = await fetch('https://yesno.wtf/api');
    // () as YesNoResponse trata la respuesta como un elemento de tipo YesNoResponse
    const data = (await respuesta.json()) as YesNoResponse;
    return data;
  };

  // manejador de la funcion (funcion de flecha )
  const onMessage = async (text: string) => {
    // validar que el mensaje no este vacio
    if (text.length === 0) return;

    // toma el arreglo de mensajes y agrega u nmensaje al final
    messages.value.push({
      id: Math.random(),
      itsMine: true,
      message: text,
    });

    // simular el tiempo que tarda en responder
    await Sleep(1.5);

    // si no termina con un signo ? ya no hace nada más
    if (!text.endsWith('?')) return;
    // si termina en un signo ? ocupo la respuesta del la persona

    // desestructuro la respuesta de la funcin getHerResponse y agrego un mensjae al arreglo de mensjaes
    const { answer, image } = await getHerResponse();

    messages.value.push({
      id: Math.random(),
      itsMine: false,
      message: answer,
      image: image,
    });
  };

  // exponemos al archivo que llame a este composable
  return {
    // Propartis
    messages,
    // Methods
    onMessage,
  };
};
