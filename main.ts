controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    proj = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 1 2 . . . . . . 
        . . . . . . . 2 1 2 . . . . . . 
        . . . . . . . 2 1 2 . . . . . . 
        . . . . . . . 3 1 3 . . . . . . 
        . . . . . . 2 3 1 3 2 . . . . . 
        . . . . . . 2 1 1 1 2 . . . . . 
        . . . . . . 2 1 1 1 3 . . . . . 
        . . . . . . 3 1 1 1 3 . . . . . 
        . . . . . . 3 1 1 1 3 . . . . . 
        . . . . . . 3 1 1 1 3 . . . . . 
        . . . . . . 2 3 1 3 2 . . . . . 
        . . . . . . . 2 2 2 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, playerSprite, 0, 60)
})
let proj: Sprite = null
let playerSprite: Sprite = null
let choiceforship = shipSel.openShipSelector()
playerSprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
if (choiceforship == 1) {
    playerSprite.setImage(img`
        . . . . . . . c d . . . . . . . 
        . . . . . . . c d . . . . . . . 
        . . . . . . . c d . . . . . . . 
        . . . . . . . c b . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . c 4 . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . e 4 . . . . . . . 
        . . . . . . e e 5 2 . . . . . . 
        . . . . . . e 4 5 2 . . . . . . 
        . . . . . c c c 2 2 2 . . . . . 
        . . . . e e 4 4 4 5 2 2 . . . . 
        . . e f f f c c 2 2 f f 2 2 . . 
        . e e e e 2 2 4 4 4 4 5 4 2 2 . 
        e e e e e e 2 2 4 4 4 5 4 4 2 2 
        e e e e e e 2 2 4 4 4 4 5 4 2 2 
        `)
    playerSprite.setVelocity(0, 50)
} else if (choiceforship == 2) {
    playerSprite.setImage(img`
        . . . . . . . c d . . . . . . . 
        . . . . . . . c d . . . . . . . 
        . . . . . . . c d . . . . . . . 
        . . . . . . . c b . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . c 6 . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . 8 6 . . . . . . . 
        . . . . . . 8 8 9 8 . . . . . . 
        . . . . . . 8 6 9 8 . . . . . . 
        . . . . . c c c 8 8 8 . . . . . 
        . . . . 8 8 6 6 6 9 8 8 . . . . 
        . . 8 f f f c c e e f f 8 8 . . 
        . 8 8 8 8 8 8 6 6 6 6 9 6 8 8 . 
        8 8 8 8 8 8 8 8 6 6 6 9 6 6 8 8 
        8 8 8 8 8 8 8 8 6 6 6 6 9 6 8 8 
        `)
    playerSprite.setVelocity(0, 65)
} else if (choiceforship == 3) {
    playerSprite.setImage(img`
        . . . . . . . c d . . . . . . . 
        . . . . . . . c d . . . . . . . 
        . . . . . . . c d . . . . . . . 
        . . . . . . . c b . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . c 3 . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . 8 3 . . . . . . . 
        . . . . . . 8 8 1 a . . . . . . 
        . . . . . . 8 3 1 a . . . . . . 
        . . . . . c c c a a a . . . . . 
        . . . . 8 8 3 3 3 1 a a . . . . 
        . . 8 f f f c c a a f f a a . . 
        . 8 8 8 8 a a 3 3 3 3 1 3 a a . 
        8 8 8 8 8 8 a a 3 3 3 1 3 3 a a 
        8 8 8 8 8 8 a a 3 3 3 3 1 3 a a 
        `)
    playerSprite.setVelocity(0, 35)
}
controller.moveSprite(playerSprite)
