import PNotifyStyleMaterial from 'pnotify/dist/es/PNotifyStyleMaterial';
import PNotify from 'pnotify/dist/es/PNotify';

export default function setPNotifySettings1() {
  PNotify.defaults.styling = 'material';
  PNotify.defaults.icons = 'material';
  PNotify.error({
    text: 'Something rong, try again!',
  });
}
