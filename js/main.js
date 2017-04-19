window.addEventListener('load', function () {

var contenedorGeneral = document.getElementById("contenedor-general");
contenedorGeneral.style.wiidth = "100%";
contenedorGeneral.style.height = "40px";
contenedorGeneral.style.position = "relative";

var h1 = document.createElement("h1");
h1.classList.add("estilo-titulo");
h1.innerText = "Nuestras Coders";

contenedorGeneral.appendChild(h1);

var hr = document.createElement("hr");
hr.classList.add("hr-estilo");
contenedorGeneral.appendChild(hr);

figure1 = document.createElement("figure");
figure1.style.display="inline-block";
figure1.style.width = "276px";
figure1.style.height ="465%";
figure1.style.position = "relative";
figure1.classList.add("figure1");
img1 = document.createElement("img");
img1.src="./img/img1.jpg";
img1.classList.add("imagen1");
img1.style.width="200px";
img1.style.height="90%";
img1.style.position = "absolute";

figCap1 = document.createElement("figcaption");
figCap1.innerText="Karin Alejo";
figCap1.classList.add("figCap1");


figure1.appendChild(img1);
figure1.appendChild(figCap1);
contenedorGeneral.appendChild(figure1);

figure2 = document.createElement("figure");
figure2.style.display="inline-block";
figure2.style.width = "276px";
figure2.style.height ="465%";
figure2.style.position = "relative";
figure2.classList.add("figure2");
img2 = document.createElement("img");
img2.src="./img/img2.jpg";
img2.style.position = "absolute";
img2.style.width="200px";
img2.style.height="90%";
img2.classList.add("imagen2");
img2.classList.add("imagen2");
figCap2 = document.createElement("figcaption");
figCap2.innerText="Naomi Villanueva";
figCap2.classList.add("figCap2");

figure2.appendChild(img2);
figure2.appendChild(figCap2);
contenedorGeneral.appendChild(figure2);

figure3 = document.createElement("figure");
figure3.style.display="inline-block";
figure3.style.width = "276px";
figure3.style.height ="465%";
figure3.style.position = "relative";
figure3.classList.add("figure3");
img3 = document.createElement("img");
img3.src="./img/img3.jpg";
img3.style.position = "absolute";
img3.style.width="200px";
img3.style.height="90%";
img3.classList.add("imagen3");
figCap3 = document.createElement("figcaption");
figCap3.innerText="Ruth Salvador";
figCap3.classList.add("figCap3");

figure3.appendChild(img3);
figure3.appendChild(figCap3);
contenedorGeneral.appendChild(figure3);

figure4 = document.createElement("figure");
figure4.style.display="inline-block";
figure4.style.width = "276px";
figure4.style.height ="465%";
figure4.style.position = "relative";
figure4.classList.add("figure4");
img4 = document.createElement("img");
img4.src="./img/img4.jpg";
img4.style.position = "absolute";
img4.style.width="200px";
img4.style.height="90%";
img4.classList.add("imagen4");
figCap4 = document.createElement("figcaption");
figCap4.innerText="Lily Peña";
figCap4.classList.add("figCap4");

figure4.appendChild(img4);
figure4.appendChild(figCap4);
contenedorGeneral.appendChild(figure4);

figure5 = document.createElement("figure");
figure5.style.display="inline-block";
figure5.style.width = "276px";
figure5.style.height ="465%";
figure5.style.position = "relative";
figure5.classList.add("figure5");
img5 =document.createElement("img");
img5.src="./img/img5.jpg";
img5.style.position = "absolute";
img5.style.width="200px";
img5.style.height="90%";
img5.classList.add("imagen5");
figCap5 = document.createElement("figcaption");
figCap5.innerText="Miriam Peralta";
figCap5.classList.add("figCap5");

figure5.appendChild(img5);
figure5.appendChild(figCap5);
contenedorGeneral.appendChild(figure5);

figure6 = document.createElement("figure");
figure6.style.display="inline-block";
figure6.style.width = "276px";
figure6.style.height ="465%";
figure6.style.position = "relative";
figure6.classList.add("figure6");
img6 = document.createElement("img");
img6.src="./img/img6.jpg";
img6.style.position = "absolute";
img6.style.width="200px";
img6.style.height="90%";
img6.classList.add("imagen6");
figCap6 = document.createElement("figcaption");
figCap6.innerText="Flor Tello";
figCap6.classList.add("figCap6");

figure6.appendChild(img6);
figure6.appendChild(figCap6);
contenedorGeneral.appendChild(figure6);

});
