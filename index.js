const cats =["Milo","Otis","Garfield"];

function destructivelyAppendCat(name){
    cats.push("Ralph");
}
function destructivelyPrependCat(name){
    cats.unshift("Bob");
}
function destructivelyRemoveFirstCat(name) {
    cats.shift();
}
function destructivelyRemoveLastCat(name) {
    cats.pop();
}
function appendCat(Mike){
    return[...cats, Mike];
}
function prependCat(Jerry) {
    return [Jerry, ...cats];
}
function removeLastCat() {
    return cats.slice(0, -1);
}
function removeFirstCat() {
    return cats.slice(1);
}

