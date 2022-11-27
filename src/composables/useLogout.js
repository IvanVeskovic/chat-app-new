import { ref } from "vue";
import { projectAuth } from "../firebase/config";

// refs & signup outside of exported function
// they don't need to be re-created every time we invoke useSignup
const error = ref(null);

const logout = async () => {
  error.value = null;

  try {
    await projectAuth.signOut();
  } catch (err) {
    error.value = err.message;
  }
};

const useLogout = () => {
  return { error, logout };
};

export default useLogout;
