interface I_userData {
    displayName: string,
    email: string,
    accessToken:string,
    uid: string,
    authAvator:string,
  }

export const changeLoginData = (setFn:React.Dispatch<React.SetStateAction<I_userData | undefined>>) => {
    const storedGoogleLoginData = localStorage.getItem('googleLoginData');
      if(storedGoogleLoginData !== null){
        const googleLoginData = JSON.parse(storedGoogleLoginData)
        setFn(googleLoginData);
      }
}