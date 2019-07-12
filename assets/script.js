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







<!-- Botão para acionar modal -->
<button type="button" class="btn btn-light" data-toggle="modal" data-target="#ExemploModalCentralizado">
  Saiba Mais
</button>

<!-- Modal -->
<div class="modal fade" id="ExemploModalCentralizado" tabindex="-1" role="dialog" aria-labelledby="TituloModalCentralizado" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="TituloModalCentralizado">${item.nome}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>${item.descricao}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
      </div>
    </div>
  </div>
</div>










<!-- fim colappisssadoooo -->
    
      </div>
    </div>
            `;
    })
    .join("");

};

let sectionCards = document.querySelector(".cardslu");
sectionCards.innerHTML += createItens(iniciativas);

const limpar = value => {
  if (!value) {
    sectionCards.innerHTML = createItens(iniciativas);
  }
};

const search = () => {
  let inputValue = document.querySelector("input").value;
  inputValue=inputValue.toLowerCase();
  let result = iniciativas.filter(res => {
    return res.keywords.includes(inputValue);
    });
  sectionCards.innerHTML = createItens(result);
};


// var botao = document.getElementById('pesquisar');
    
//     botao.addEventListener("click", () => {
//         var busca = document.querySelector('input').value.toLowerCase();
        
//         var filtro = iniciativas.filter((item) => {
//             return item.descricao.toLowerCase().includes(busca) || item.nome.toLowerCase().includes(busca)
//         }); 
//         cards.innerHTML = createCard(filtro);
//     })