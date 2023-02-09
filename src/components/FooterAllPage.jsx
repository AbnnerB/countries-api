import "./footerStyle.css";
/* 
    `Oi, sim você mesmo que está inspecionando esse codigo,
deve estar se perguntando o pq desse footer sem nada,
a resposta é simples, na criação do dark mode,tive que lidaar com 
um problema (e sim essa foi a melhor solução que eu consegui pensar kkkk).
    O problema era que eu alterava a cor da minha pagina com o botão do header no darkMode
e o root permanecia  com a cor branca, ficando uma borda branca de 10px no final da pagina 
 ` */

import useModeContext from "../hook/useModeContext";

export default function FooterAllPage() {
  const { darkMode } = useModeContext();

  return (
    <footer
      className={
        darkMode === "lightMode" ? "footerAllPage" : "footerAllPageDark"
      }
    ></footer>
  );
}
