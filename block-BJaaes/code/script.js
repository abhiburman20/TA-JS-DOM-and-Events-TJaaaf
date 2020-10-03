let form = document.querySelector("form");

let userInfo = {};

function verify(errorCheck) {
  let condition = (function() {
    if (errorCheck == form.elements.username) 
      return errorCheck.value.length < 4;

    if (errorCheck == form.elements.name) 
      return errorCheck.value.split("").filter(e => !isNaN(e)).length > 0 
      || userInfo.name == "";

    if (errorCheck == form.elements.email) 
      return !errorCheck.value.includes("@") 
      || errorCheck.value.slice(0, errorCheck.value.indexOf("@")).length < 6;
    
      if (errorCheck == form.elements.phone) 
    return errorCheck.value.split("").filter(e => isNaN(e)).length > 0 
    || userInfo.phone == "";

    if (errorCheck == document.querySelector("#password")) 
    return (errorCheck.value.split("").filter(e => { 
      return e.includes("@") || e.includes("$")
    }).length == 0);

    if (errorCheck == document.querySelector("#passwordVerify")) 
      return (errorCheck.value.split("").filter(e => { 
        return e.includes("@") || e.includes("$")
      }).length == 0);
  })();

  let errorText = (function () {
    if (errorCheck == form.elements.username) 
      return "Username can't be less than 4 characters";

    if (errorCheck == form.elements.name) 
    return "You can't use number in the name field";

    if (errorCheck == form.elements.email) 
    return "Not a valid email";

    if (errorCheck == form.elements.phone) 
    return "Phone number can only contain numbers";

    if (errorCheck == document.querySelector("#password")) 
    return "Password must contain at least a symbol and a number";

    if (errorCheck == document.querySelector("#passwordVerify")) 
    return "Password not match";
  })();

  if (errorCheck.value.length == 0) {
    if (errorCheck.nextElementSibling == null) {
      let small = document.createElement("small");
      small.innerText = `${errorCheck.previousElementSibling.textContent} can not be blank`;
      errorCheck.parentElement.append(small);
      errorCheck.parentElement.classList.add("error");
      errorCheck.parentElement.classList.remove("success");
    } 
  } else if (errorCheck.nextElementSibling) {
    errorCheck.nextElementSibling.remove();
    errorCheck.parentElement.classList.add("success");
    errorCheck.parentElement.classList.remove("error");
  }
  
  if (condition) {
      if (errorCheck.nextElementSibling == null) {
        let small = document.createElement("small");
        small.innerText = errorText;
        errorCheck.parentElement.append(small);
        errorCheck.parentElement.classList.add("error");
        errorCheck.parentElement.classList.remove("success");
      }
  } else if (errorCheck.nextElementSibling) {
    errorCheck.nextElementSibling.remove();
    errorCheck.parentElement.classList.add("success");
    errorCheck.parentElement.classList.add("error");
  } else errorCheck.parentElement.classList.add("success");
}

function handleSubmit(event) {
  event.preventDefault();
  userInfo.email = form.elements.email.value;
  verify(form.elements.username);
  verify(form.elements.name);
  verify(form.elements.email);
  verify(form.elements.phone);
  verify(document.querySelector("#password"));
  verify(document.querySelector("#passwordVerify"));

  // send data to server

  console.log(userInfo);
}

form.addEventListener("submit", handleSubmit);
