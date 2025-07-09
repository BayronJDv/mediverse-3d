
import { signInWithPopup,getAdditionalUserInfo} from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import {auth} from '../firebase.config';
import { userAtom } from '../stores/userAtom';
import { useAtom } from 'jotai';


export const loginWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  
  try {
    const result = await signInWithPopup(auth, provider);
    const info = getAdditionalUserInfo(result);
    if (info.isNewUser) {
      // Llama a tu backend Flask para guardar en MongoDB
      console.log("Es nuevo usuario. Puedes guardar en tu DB.");
    }
    console.log("Usuario autenticado:", result.user);
    setlocalUser(result.user);
    
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
  }
};