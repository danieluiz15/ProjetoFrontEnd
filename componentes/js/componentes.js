<script>
        const botao = document.querySelector("#btn-entrar");
        const titulo = document.querySelector("#btn-entrar");

        botao.onclick = function() {
            titulo.innerHTML = "Entrando"}
            titulo.style.color = "white";
            document.body.style.backgroundColor = "black"
            window.location.href='servicos.html'


        const campo = document.querySelector("#usuario");
        const mensagem = document.querySelector("#mensagem");

        campo.oninput = function() {
            mensagem.innerHTML = "Bem-vindo de volta, " + campo.value + "!"
        };
        const imagem = document.querySelector("#fotoDestaque");

      imagem.onmouseover = function() {
          imagem.style.opacity = "0.6"
      };

      imagem.onmouseout = function() {
          imagem.style.opacity = "1"
      }

    </script>
