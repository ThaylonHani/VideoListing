<h1 align= "center">VideoListing</h1>
<p align = "center" > Usando a api do youtube para retornar 25 vídeos. </p>


<p align="center">
<a href="#objetivo">Objetivo</a>♦  
<a href="#linguagem">Linguagem</a>♥
<a href="#tecnologias">Tecnologias</a>♠
<a href="#pre_requisitos">Pré-requisitos</a>♥
</p>

- [x] Listar vídeos
- [x] Pesquisar canal por id
- [x] Responsividade
- [x] Link dos vídeos para acessar no youtube
- [ ] Pesquisar canal pelo nome
- [ ] Poder escolher quantos vídeos serão buscados

<ol>
<li>
<h2>Pré-requisitos:</h2>
<h4> Para conseguir usar o programa você PRECISA de uma CHAVE API do youtube data api v3</h4>
<h4>Quando tiver a chave api substitua ela pela constante API_KEY:</h4>
<img src= "https://user-images.githubusercontent.com/97197486/192094543-93dca6ba-a704-487b-b401-ff441eb08727.png"/>
<h4>Com o yarn instalado, rode o programa pelo terminal usando : "yarn dev". E acesse a rota por um browser.
</h4>
</li>
<li>
<h2>Objetivo:</h2>
<h4>
Meu obejtivo era usar a api do youtube para listar os ultimos vídeos de algum canal pesquisado, colocando o id do canal no input irá aparecer no máximo 25 vídeos. Se o canal pesquisado não tiver vídeos, não será mostrado nada.
</h4>
<img src = "https://user-images.githubusercontent.com/97197486/191879579-9c277730-325c-4585-86c7-97b26e0489a7.png"/>
<h4>Se por algum motivo o id for inválido ou o canal não for encontrado aparecerá um "alert".</h4>
<img src = "https://user-images.githubusercontent.com/97197486/191880042-fa19b6a8-cf0a-4fd0-ab99-be12e661d4d3.png"/>
<h4>Resultado se o canal for encontra e ter vídeos:</h4>
<img src = "https://user-images.githubusercontent.com/97197486/192095642-f0f56e19-fd18-4f68-a0e1-ae09f7ee5e11.png"/>
<h4>Dispositivo Mobile:</h4>
<img src ="https://user-images.githubusercontent.com/97197486/192095746-3f6c1f63-0de5-496d-b8d5-3a2ee70a8c63.png" width = 400px/>
</li>
<li>
<h2 id =linguagem>Linguagem:</h2>
<div align = "center">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width = 30px height = 30px/>
<img src="https://img.shields.io/static/v1?label=typed programming language&message=Typescript&color=235a97&style=flat"/>
+
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width = 30px height = 30px />
<img src="https://img.shields.io/static/v1?label=JavaScript library&message=React&color=61dafb&style=flat"/>

</div>
</li>
<br/>
<li>
<h2>Tecnologias:</h2>
<div align = "center">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg" width= 30px height = 30px />
<img src="https://img.shields.io/static/v1?label=package manager&message=YARN&color=2188b6&style=flat"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" width= 30px height = 30px/>
<img src="https://img.shields.io/static/v1?label=JavaScript runtime&message=Node&color=84ba64&style=flat"/>

</div>
</li>
</ol>
