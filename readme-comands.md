### All comands used in the project

1. npm init -y (Create one file package.json)

2. npm install typescript --save-dev (Instalando dependencia de desenvolvimento por isso foi colocado o "-dev", ela não irá para produção)

3. npx tsc --init (Create one file tsconfig.json, ele mostra como o typescript vai trabalhar, ele cria um arquivo grandão mas não precisamos se preocupar isso.)

4. npx jest --init 
(Testes automatizados, a gente não consegue rodar os teste exatamente em typescript, precisamos compilar para javascript, então usamos uma ferramenta da vercel chamada SWC que é contruída com rust, que faz a compilação de typescript para javascript. Comando abaixo da ferramenta SWC.
<https://swc.rs/docs/usage/jest>)

5. npm install @swc/jest @swc/core --save-dev (Exlicação é a mesma de cima.)

5.1 Dentro do arquivo jest.configs.ts coloque isso:   
    transform: {
      "^.+\\.(t|j)sx?$": ["@swc/jest"],
    }

 Deve ficar após: 
 "// A map from regular expressions to paths to transformers" 
 Totalizando dessa forma: 
   // A map from regular expressions to paths to transformers
    transform: {
      "^.+\\.(t|j)sx?$": ["@swc/jest"],
    }  

 Dessa forma ele irá pegar qq arquivo que tenha typescript e fará a compilação para javascript

 6. npm install jest @types/jest --save-dev (Instalação da lib jest)

 7. npm i -D ts-node (
   ts-node é obrigatório para configurações dos arquivos
   npm i -D ts-node --> -D é o mesmo que --save-dev, ambos salvam mas indicam q é apenas para desenvolvimento e nunca para produção. e o "i" é o mesmo q install
   )