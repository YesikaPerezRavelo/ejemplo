const ListaVacia = document.querySelector("#lista-vacia");

// const otrosCursos = ["Desarrollo Web", "Javascrop", "ReactJs", "NodeJs"];

// for (let curso of otrosCursos) {
//   let listado = document.createElement("li");
//   listado.innerHTML = curso;
//   ListaVacia.appendChild(listado);

let cursos = [
  { id: 1, titulo: "Desarrollo Web", precio: 1000 },
  { id: 1, titulo: "JS", precio: 3000 },
  { id: 1, titulo: "ReactJS", precio: 5000 },
];

console.log(cursos);

for (cursos of cursos) {
  let contenedor = document.createElement("div");
  contenedor.innerHTML = <h3>Curso: ${curso.titulo}</h3>;
  <p>Precio: ${curso.precio}</p>;
  <button type="button" class="btn btn-dark" id="btnInfo">
    Agregar al carrito
  </button>;

  document.appendChild(contenedor);
}

// const cardHeader = document.querySelector(".card-header");
// const cardText = document.querySelector(".card-text");
// const btn = document.querySelector("#btnInfo");

// btn.addEventListener("click", () => {
//   Swal.fire({
//     title: "Submit your Github username",
//     input: "text",
//     inputAttributes: {
//       autocapitalize: "off",
//     },
//     showCancelButton: true,
//     confirmButtonText: "Look up",
//     showLoaderOnConfirm: true,
//     preConfirm: (login) => {
//       return fetch(`//api.github.com/users/${login}`)
//         .then((response) => {
//           if (!response.ok) {
//             throw new Error(response.statusText);
//           }
//           return response.json();
//         })
//         .catch((error) => {
//           Swal.showValidationMessage(`Request failed: ${error}`);
//         });
//     },
//     allowOutsideClick: () => !Swal.isLoading(),
//   }).then((result) => {
//     if (result.isConfirmed) {
//       Swal.fire({
//         title: `${result.value.login}'s avatar`,
//         imageUrl: result.value.avatar_url,
//       });
//     }
//   });
// });

// /* console.log(cardHeader)
// console.log(cardText)
// console.log(btn) */
