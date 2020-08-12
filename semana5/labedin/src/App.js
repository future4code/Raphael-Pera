import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import iconeEmail from './img/icone-email.png'
import iconeLocation from './img/icone-location.png'
import fotoRaphael from './img/Foto_Raphael_square.jpeg'
import imgHomeOffice from './img/home-office.png'
import imgPS from './img/pro-service.png'
import SecaoNoticias from './components/SecaoNoticias/SecaoNoticias';


function App() {
  let descricaoRaphael = `Olá. Meu nome é Raphael Ribeiro. Sou desenvolvedor front-end com quase uma semana de experiência em React`
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= { fotoRaphael }
          nome="Raphael Ribeiro" 
          descricao= { descricaoRaphael }
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

        <CardPequeno 
          icone = {iconeEmail}
          tipo = "Email"
          texto = "raphael.ribeiro@react.com.br"
        />

        <CardPequeno 
          icone = {iconeLocation}
          tipo = "Endereco"
          texto = "Avenida Props Pequeno, 2020"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem= { imgHomeOffice } 
          nome="Home Office SA." 
          descricao="Trabalho de estudante como desenvolvedor front-end desenvolvido durante todos os meses de quarentena, alcançando sucesso em todos os objetivos estratégicos da organização, conforme minha própria análise" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Ainda não tive a oportunidade de trabalhar diretamente com a NASA mas, talvez, indiretamente." 
        />

        <CardGrande 
          imagem= { imgPS } 
          nome="Pro Service Representações" 
          descricao="Trabalho desenvolvido como desenvolvedor VBA constuindo soluções para automação de planilhas de controle, cálculos relacionados a oferta e demanda de produtos e geração de relatórios gerencias " 
        />

        <SecaoNoticias
          titulo = "Assuntos mais discutidos"
          item1 = "Empresas reformulam escritórios para retomada"
          item2 = "Cerveja em casa salva receita de fabricantes de latinha"
          item3 = "Mercado melhora previsão para o PIB em 2020"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
