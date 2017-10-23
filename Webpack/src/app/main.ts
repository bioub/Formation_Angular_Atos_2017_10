import { Clock } from './clock';

const divElt = document.querySelector('.horloge');

const clock = new Clock({
  container: divElt,
  delay: 1000,
  format: 'HH:mm:ss',
});

clock.start();
