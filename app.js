let press = []
let secretWord = 'sergio'

window.addEventListener('keyup', (e) => {
press.push(e.key)
press.splice(- secretWord.length - 1, press.length - secretWord.length)
let newPress = press.join("")
if ( newPress.includes(secretWord)){
    console.log('din din din')
    cornify_add()
}
console.log(newPress)
});