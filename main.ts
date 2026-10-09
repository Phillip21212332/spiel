input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Eimer.change(LedSpriteProperty.X, 1)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    Eimer.change(LedSpriteProperty.X, -1)
})
let Spielstand = 0
let sprite: game.LedSprite = null
let Eimer: game.LedSprite = null
let Regentropfen = 5
Eimer = game.createSprite(3, 0)
basic.forever(function () {
    if (Regentropfen == 0) {
        game.removeLife(1)
    }
})
basic.forever(function () {
	
})
basic.forever(function () {
    sprite.change(LedSpriteProperty.X, 1)
    basic.pause(1000)
})
basic.forever(function () {
    if (sprite.isTouching(Eimer)) {
        Spielstand += 1
    }
})
basic.forever(function () {
	
})
basic.forever(function () {
    sprite.change(LedSpriteProperty.Y, -1)
    basic.pause(1000)
})
basic.forever(function () {
    basic.pause(5000)
    sprite = game.createSprite(randint(0, 4), 0)
})
basic.forever(function () {
	
})
