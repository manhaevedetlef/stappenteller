//variabelen
let steps=0
//functie1
input.onButtonPressed(Button.A,()=>{
    steps=0
    basic.showNumber(steps)
})//einde functie 1

input.onButtonPressed(Button.B,()=>{
    basic.showNumber(steps)
})

input.onGesture(Gesture.Shake,()=>{
    steps= steps+1
    basic.showNumber(steps)
})

basic.forever(function () {
	
})
