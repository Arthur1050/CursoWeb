const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
// Metódo que passa um objeto para um formato textual JSON
console.log(JSON.stringify(obj)) // Por ser um formato textual (string) não executável, ele vai excluir a função "soma" do json

// Metodo que passa um JSON para o formato de objeto do java script
console.log(JSON.parse('{ "a": 1, "b": 2, "c":3 }')) // O formato JSON tem que atender os criterios do seu padrão de formação, como envolver suas chaves e valores em aspas duplas (exceto quando se trata de um numero)
// Formatos suportados pelo JSON
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }')) // Numerico | Textual | Boolean | Objetos | Arrays