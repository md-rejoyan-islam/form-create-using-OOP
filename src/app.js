import Alert from "./Alert.js";
import LocalStorage from "./LocalStorage.js";
import Validation from "./Validation.js";

const loginForm = document.getElementById("loginForm");
const alertDid = document.getElementById("alertDid");

loginForm.onsubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const userData = Object.fromEntries(formData.entries());
  const { name, email, age, skill } = Object.fromEntries(formData.entries());
  if (!name || !email || !age || !skill) {
    alertDid.innerHTML = Alert.warning("All field are required!");
  } else if (Validation.email(email) == "false") {
    alertDid.innerHTML = Alert.warning("Wrong email address");
  } else if (Validation.number(age) == "false") {
 
    alertDid.innerHTML = Alert.warning("Wrong age value");
  }
  else{
    alertDid.innerHTML=Alert.success("successfully sign up")
    LocalStorage.save('loginUser',userData)
  }
};






