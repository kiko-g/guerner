## 1. Alterações diretas ou pequenas (básico)

1. Ir a https://github.com/kiko-g/guerner e garantir que tem o login feito na conta [guerner2023](https://github.com/guerner2023).
2. A pasta `src/markdown` tem a maioria de informação a ser alterada. ![folder](https://github.com/kiko-g/guerner/assets/40745490/6966f725-429b-4679-a5e7-5b8f1c914ce9)

3. As pastas [`agriculture`](https://github.com/kiko-g/guerner/tree/master/src/markdown/agriculture), [`construction`](https://github.com/kiko-g/guerner/tree/master/src/markdown/construction) e [`others`](https://github.com/kiko-g/guerner/tree/master/src/markdown/others) contém a informação de **página de produto**.
   - Exemplo: O ficheiro [agriculture/pt/a100.md](https://github.com/kiko-g/guerner/blob/master/src/markdown/agriculture/pt/a100.pt.md?plain=1) controla o [produto a100 em português](https://guerner.vercel.app/products/agriculture/pt-a100).
   - Cada uma destas pastas tem uma subpasta com o prefixo do idoma: `pt` ou `en`.
4. A pasta [`company`](https://github.com/kiko-g/guerner/tree/master/src/markdown/company) tem os conteúdos dos textos de informação sobre a empresa que estão na [página de apresentação da Guerner](guerner.vercel.app/company).

   - Exemplo: O ficheiro [company/pt/presentation.pt.md](https://github.com/kiko-g/guerner/blob/master/src/markdown/company/pt/presentation.pt.md?plain=1) controla a [secção de apresentação da empresa](https://guerner.vercel.app/company/#presentation)

5. Para editar estes ficheiros tem de se clicar no icone de lápis no canto superior direito ![edit](https://github.com/kiko-g/guerner/assets/40745490/5bc51e40-284b-4f76-868a-ac155b640061)
6. Quando já foram feitas alterações o botão verde fica disponível para se fazer uma contribuição direta num só ficheiro ![commit](https://github.com/kiko-g/guerner/assets/40745490/60e101db-6978-41f2-926e-a22ba3c4ba97)
7. A seguir aparece uma janela para confirmar as mudanças com uma mensagem opcional com informação sobre as mudanças ![submit](https://github.com/kiko-g/guerner/assets/40745490/ff0815a2-06cf-4cdc-862e-270788368a5f)
8. Depois de clicar no botão verde **Propose Changes** as alterações estão feitas

## 2. Alterações maiores (avançado)

Quando fazemos alterações a muitos ficheiros, devemos mexer no código diretamente. Para evitar desenvolvimento local vamos tirar partido dos `Codespaces` do Github.

1. Clicar no botão verde ![code](https://github.com/kiko-g/guerner/assets/40745490/a705cab6-e7f4-49b8-9443-313b00e4e156)
2. Clicar em **Open codespace on master** ![codespaces](https://github.com/kiko-g/guerner/assets/40745490/f6e7c27f-efed-4755-ae2b-5202eb08fd5c)
3. Isto vai criar um ambiente de desenvolvimento na cloud com o código do repositório.
