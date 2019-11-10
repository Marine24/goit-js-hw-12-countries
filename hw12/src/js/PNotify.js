import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons';
import PNotifyStyleMaterial from 'pnotify/dist/es/PNotifyStyleMaterial';
import PNotify from 'pnotify/dist/es/PNotify';

export default function setPNotifySettings() {
  PNotify.defaults.styling = 'material';
  PNotify.defaults.icons = 'material';
  PNotify.error({
    text: 'Too many matches found! Please enter more specific query!',
  });
}
