const btn = document.querySelector("#btn");

const product = document.getElementById("product");
const quantity = document.getElementById("quantity");
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const area = document.getElementById("area");
const check = document.getElementById("check");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const phoneError = document.getElementById("phone-error");
const checkError = document.getElementById("check-error");
const productError = document.getElementById("product-error");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  let isValid = true;

  if (product.value === "") {
    console.log(" product daxil edin");
    productError.classList.remove("hidden");
    isValid = false;
  } else {
    productError.classList.add("hidden");
  }

  if (quantity.value === "") {
    console.log("qiymet daxil edin");
    isValid = false;
  }

  const secilenSaat = document.querySelector(
    'input[name="delivery-time"]:checked',
  );
  if (!secilenSaat) {
    console.log("Çatdırılma vaxtı seçin!");
    isValid = false;
  }

  if (name.value === "") {
    console.log("name daxil edin");
    nameError.classList.remove("hidden");
    isValid = false;
  } else {
    nameError.classList.add("hidden");
  }
  if (email.value === "") {
    console.log("email daxil edin");
    emailError.classList.remove("hidden");
    isValid = false;
  } else {
    emailError.classList.add("hidden");
  }

  if (phone.value === "") {
    console.log("nomre daxil edin");
    phoneError.classList.remove("hidden");
    isValid = false;
  } else {
    phoneError.classList.add("hidden");
  }

  if (area.value === "") {
    console.log("qeyd daxil edin");
    isValid = false;
  }

  if (!check.checked) {
    console.log("qaydalarla razilasin");
    checkError.classList.remove("hidden");
    isValid = false;
  } else {
    checkError.classList.add("hidden");
  }

  if (!isValid) {
    return;
  }

  const user = {
    product: product.value,
    quantity: quantity.value,
    vaxt: secilenSaat.value,
    name: name.value,
    email: email.value,
    phone: phone.value,
    area: area.value,
  };

  console.log("Uğurlu məlumat:", user);
});
