



// fim modal

const createItens = iniciativas => {






  
  return iniciativas
    .map(item => {
      return `
      <div class="cartao">
      <img
        title="Logo ${item.nome}"
        class="imagem"
        src="${item.icone}"
        alt="Logo ${item.nome}"
      />
      <div>
        <h2 class="titulo-card">${item.nome}</h2>
        <p class="descricao-links">
          <a title="Site: ${item.site}" target="_blank" href="${item.site}"
            ><i class="fas fa-laptop-code"></i
          ></a>
          <a title="${item.facebook}" target="_blank" href="${item.facebook}"
            ><i class="fab fa-facebook-square"></i
          ></a>
          <a title="${item.instagram}" target="_blank" href="${item.instagram}"
            ><i class="fab fa-instagram"></i
          ></a>
          <a title="${item.twitter}" target="_blank" href="${item.twitter}"
            ><i class="fab fa-twitter"></i
          ></a>
          <a title="${item.linkedin}" target="_blank" href="${item.linkedin}"
            ><i class="fab fa-linkedin"></i
          ></a>
          <a
            title="Email: ${item.email}"
            target="_blank"
            href="mailto:${item.email}"
            ><i class="fas fa-envelope"></i
          ></a>
        </p>

<!-- colapissssadooooo -->
<p>${item.descricao}</p>



<!-- fim colappisssadoooo -->
    
      </div>
    </div>
            `;
    })
    .join("");






};

let sectionCards = document.querySelector(".cards");
sectionCards.innerHTML += createItens(iniciativas);

const limpar = value => {
  if (!value) {
    sectionCards.innerHTML = createItens(iniciativas);
  }
};

const search = () => {
  let inputValue = document.querySelector("input").value;
  let result = iniciativas.filter(res => {
    return (
      res.descricao.includes(inputValue) ||
      res.nome.includes(inputValue) ||
      res.idealizadoras.includes(inputValue) ||
      res.keywords.includes(inputValue)
      );
    });
  sectionCards.innerHTML = createItens(result);
};


