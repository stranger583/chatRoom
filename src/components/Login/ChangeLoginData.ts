import { getFirestore, doc, getDoc } from "firebase/firestore";

interface I_userData {
  displayName: string,
  email: string,
  accessToken:string,
  uid: string,
  authAvator:string,
}

export const changeLoginData = async (setFn:React.Dispatch<React.SetStateAction<I_userData | undefined>>) => {
  const storedGoogleLoginData = localStorage.getItem('googleLoginData');
  if(storedGoogleLoginData !== null){
        // const googleLoginData = JSON.parse(storedGoogleLoginData)
        const db = getFirestore();
        const docSnap = await getDoc(doc(db, "users", storedGoogleLoginData));
        if(docSnap.exists()) {
          setFn(docSnap.data() as I_userData);
        }
      }
}