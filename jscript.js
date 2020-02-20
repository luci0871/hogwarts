window.addEventListener("DOMContentLoaded", getData);

function getData() {
  //console.log("getData");
  fetch("./students1991.json")
    .then(res => res.json())
    .then(handleData);
}

function handleData(myData) {
  //console.log("myData");
  //1. loop
  myData.forEach(showNames);
}

function showNames(student) {
  console.log(student);
  //2. cloning a template
  const template = document.querySelector(".nameTemplate").content;
  const studentCopy = template.cloneNode(true);
  //3. textcontent & innerHTML
  const h1 = studentCopy.querySelector("h1");
  h1.textContent = student.fullname;
  const p = studentCopy.querySelector("p");
  p.textContent = student.house;
  //h1.textContent = post.title.rendered;

  //4. append
  document.querySelector("#names").appendChild(studentCopy);
}

window.onload = function () {
  const openModalButtons = document.querySelectorAll("[data-modal-target]");
  const closeModalButtons = document.querySelectorAll("[data-close-button]");
  const overlay = document.getElementById("overlay");

  /* function modalPopup() {
    fetch("./students1991.json")
      .then(res => res.json())
      .then(modalShow);
  }

  function modalShow(modal) {
    alert("hello");
    console.log;
  } */

  openModalButtons.forEach(button => {
    button.addEventListener("click", () => {
      const modal = document.querySelector(button.dataset.modalTarget);
      openModal(modal);
    });
  });

  overlay.addEventListener("click", () => {
    const modals = document.querySelectorAll(".modal.active");
    modals.forEach(modal => {
      closeModal(modal);
    });
  });

  closeModalButtons.forEach(button => {
    button.addEventListener("click", () => {
      const modal = button.closest(".modal");
      closeModal(modal);
    });
  });

  function openModal(modal) {
    if (modal == null) return;
    modal.classList.add("active");
    overlay.classList.add("active");
  }

  function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove("active");
    overlay.classList.remove("active");
  }
};