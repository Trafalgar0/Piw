import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD9WtvzPdL-iZ70cQBgX2rGAolOOBJ0U1c",
  authDomain: "piw-lab5-kr.firebaseapp.com",
  projectId: "piw-lab5-kr",
  storageBucket: "piw-lab5-kr.appspot.com",
  messagingSenderId: "820090269809",
  appId: "1:820090269809:web:a2f54aaaaed9430db4ebd0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const providerGoogle = new GoogleAuthProvider();
const providerGitHub = new GithubAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, providerGoogle)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
      window.location.reload(false);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const signInWithGitHub = () => {
    signInWithPopup(auth, providerGitHub)
      .then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;
  
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);
        window.location.reload(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

export const logOut = async () => {
    signOut(auth);
    localStorage.clear();
    window.location.reload(false);
};