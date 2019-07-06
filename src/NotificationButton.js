import React from 'react';
import { askForPermissioToReceiveNotifications } from './push-notification';

const NotificationButton = () => (
    <button onClick={askForPermissioToReceiveNotifications} >
      click aqui para recibir notificaciones
    </button>
);

export default NotificationButton;