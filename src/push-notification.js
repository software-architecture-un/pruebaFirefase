import firebase from 'firebase';

export const initializeFirebase = () => {
  firebase.initializeApp({
    messagingSenderId: "753713537723"
  });
}
export const askForPermissioToReceiveNotifications = async () => {
   

  try {
    const messaging = firebase.messaging();
    await messaging.requestPermission();
    const token = await messaging.getToken();
    console.log('token de usuario:', token);

    const url =`https://iid.googleapis.com/iid/v1/${token}/rel/topics/odio`;
    const opts = {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": "key=AAAAr3zT4rs:APA91bHhQfQloKGMLyCys0mNeyZuJES29r1Zxvrc9A9LyUNoeRhpaS3MmDMgcAQrzhtrI3XGeqFXe8pbkKR9XhYL0A24ZcRxdSrWvfikcpFJhoSW9MVusopILI3CgyQKxX6wGj2dc-xA" }              
    };

    console.log(url);
    console.log(opts);

    fetch(url, opts)
        // .then(res => res.json())
        .then(console.log)
        // .then(res => {
        //     if (res.data.signIn != null) {
        //         console.log(res.data.signIn.content)
        //         window.localStorage.setItem('token', res.data.signIn.content)
        //         window.localStorage.setItem('email', this.state.CampoUsuario)
        //         this.setState({ data: res })
        //         console.log(res)
        //         window.location.href = '/user-data'
        //     } else {
        //         console.log("MOSTRAR ERROR")
        //         console.log(res)
        //         alert("Error: verificar el usuario y contraseña")
        //         window.localStorage.clear()
        //     }
        // })
        .catch(console.log("DATOS INCORRECTOS"))
    // e.preventDefault()
    
    return token;
  } catch (error) {
    console.error(error);
  }
}