import { subscribeToHellfireClub } from './firebase/hellfire-clube.js';

const txtName = document.querySelector('#nome');
const txtEmail = document.querySelector('#email');
const txtLevel = document.querySelector('#level');
const txtPersonagem = document.querySelector('#personagem');
const btnSubscribe = document.querySelector('#btnSubscribe');

btnSubscribe.addEventListener('click', async () => {
  const subscription = {
    name: txtName.value,
    email: txtEmail.value,
    txtLevel: txtLevel.value,
    character: txtPersonagem.value,
  };

  const subscriptionId = await subscribeToHellfireClub(subscription);
  console.log(`Inscrito com sucesso: ${subscriptionId}`);

  txtName.value = '';
  txtEmail.value = '';
  txtLevel.value = '';
  txtPersonagem.value = '';
  btnSubscribe.value = '';
});
