let textWithAccents = "áẃéŕýúíóḱ"
let textWithoutAccents = textWithAccents.normalize('NFD').replace(/[\u0300-\u036f]/g, "")

console.log(textWithoutAccents)