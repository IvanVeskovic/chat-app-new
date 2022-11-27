import { ref } from "vue";
import { projectAuth } from "../firebase/config";

// refs & signup outside of exported function
// they don't need to be re-created every time we invoke useSignup
const error = ref(null);

const login = async (email, password) => {
  error.value = null;

  try {
    const res = await projectAuth.signInWithEmailAndPassword(email, password);
    error.value = null;
    return res;
  } catch (err) {
    error.value = "Incorrect login credentials";
  }
};

const useLogin = () => {
  return { error, login };
};

export default useLogin;
