controller.player3.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . 8 . . . . . . . . . . . . 
        . . 8 9 8 8 . . . . . . . . . . 
        . . 8 9 9 9 8 8 8 . . . . . . . 
        . 8 8 8 8 9 9 9 9 8 8 8 . . . . 
        8 9 9 9 9 9 9 9 9 9 9 9 8 8 8 . 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 
        8 9 9 9 9 9 9 9 9 9 9 9 9 9 8 . 
        8 8 9 9 9 9 9 9 9 9 9 9 9 9 8 . 
        . 8 8 9 9 9 9 9 9 9 9 9 9 8 . . 
        8 9 9 9 9 8 8 8 8 8 8 8 8 . . . 
        . 8 8 8 8 . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Mysprite3, 200, 0)
})
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . 8 . . . . . . . . . . . . 
        . . 8 9 8 8 . . . . . . . . . . 
        . . 8 9 9 9 8 8 8 . . . . . . . 
        . 8 8 8 8 9 9 9 9 8 8 8 . . . . 
        8 9 9 9 9 9 9 9 9 9 9 9 8 8 8 . 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 
        8 9 9 9 9 9 9 9 9 9 9 9 9 9 8 . 
        8 8 9 9 9 9 9 9 9 9 9 9 9 9 8 . 
        . 8 8 9 9 9 9 9 9 9 9 9 9 8 . . 
        8 9 9 9 9 8 8 8 8 8 8 8 8 . . . 
        . 8 8 8 8 . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Mysprite2, 200, 0)
})
controller.player4.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . 8 . . . . . . . . . . . . 
        . . 8 9 8 8 . . . . . . . . . . 
        . . 8 9 9 9 8 8 8 . . . . . . . 
        . 8 8 8 8 9 9 9 9 8 8 8 . . . . 
        8 9 9 9 9 9 9 9 9 9 9 9 8 8 8 . 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 
        8 9 9 9 9 9 9 9 9 9 9 9 9 9 8 . 
        8 8 9 9 9 9 9 9 9 9 9 9 9 9 8 . 
        . 8 8 9 9 9 9 9 9 9 9 9 9 8 . . 
        8 9 9 9 9 8 8 8 8 8 8 8 8 . . . 
        . 8 8 8 8 . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Mysprite4, 200, 0)
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    Mysprite2.vy = -100
})
controller.player3.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Mysprite3,
    [img`
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 1 f 5 5 1 f 5 5 5 f . 
        . f 5 5 5 1 f 5 5 1 f 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 f f f f f f f f 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 f f f f f 5 5 5 5 f . 
        . f f 5 f . . . . . f 5 f f f . 
        . . f 5 5 f . . . . f 5 5 f . . 
        . . . f f f . . . . . f f f . . 
        `],
    500,
    false
    )
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Mysprite2,
    [img`
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f f . 
        . f 9 9 9 9 9 9 9 9 9 9 9 9 f . 
        . f 9 9 9 9 9 9 9 9 9 9 9 9 f . 
        . f 9 9 9 9 9 9 9 9 9 9 9 9 f . 
        . f 9 9 9 1 f 9 9 9 1 f 9 9 f . 
        . f 9 9 9 1 f 9 9 9 1 f 9 9 f . 
        . f 9 9 9 9 9 9 9 9 9 9 9 9 f . 
        . f 9 9 9 9 9 9 9 9 9 9 9 9 f . 
        . f 9 9 9 f f f f f 9 9 9 9 f . 
        . f 9 9 9 9 9 9 9 9 9 9 9 9 f . 
        . f 9 9 9 9 9 9 9 9 9 9 9 9 f . 
        . f f f 9 9 9 9 9 9 9 9 f f f . 
        . . . f 9 f f f f f 9 f . . . . 
        . . . f 9 9 f . . f 9 9 f . . . 
        . . . . f f f . . . f f f . . . 
        `],
    500,
    false
    )
})
controller.player4.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    Mysprite4.vy = -100
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Mysprite2,
    [img`
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f f . 
        . f 9 9 9 9 9 9 9 9 9 9 9 9 f . 
        . f 9 9 9 9 9 9 9 9 9 9 9 9 f . 
        . f 9 9 9 9 9 9 9 9 9 9 9 9 f . 
        . f 9 9 9 f 1 9 9 9 f 1 9 9 f . 
        . f 9 9 9 f 1 9 9 9 f 1 9 9 f . 
        . f 9 9 9 9 9 9 9 9 9 9 9 9 f . 
        . f 9 9 9 9 9 9 9 9 9 9 9 9 f . 
        . f 9 9 9 f f f f f 9 9 9 9 f . 
        . f 9 9 9 9 9 9 9 9 9 9 9 9 f . 
        . f 9 9 9 9 9 9 9 9 9 9 9 9 f . 
        . f f f 9 9 9 9 9 9 9 9 f f f . 
        . . . f 9 f f f f f 9 f . . . . 
        . . f 9 9 f . . f 9 9 f . . . . 
        . . f f f . . . f f f . . . . . 
        `],
    500,
    false
    )
})
controller.player1.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . f f f f f f f f f f f f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 1 f 2 2 1 f 2 f . . 
        . . f 2 2 2 1 f 2 2 1 f 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 f f f f f f 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f f 2 f f f f f f 2 f . . . 
        . . . f 2 2 f . . . f 2 2 f . . 
        . . . . f f f . . . . f f f . . 
        `],
    500,
    false
    )
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -100
})
controller.player4.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Mysprite4,
    [img`
        . f f f f f f f f f f f f f f . 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
        . f 7 7 7 f 1 7 7 7 f 1 7 7 f . 
        . f 7 7 7 f 1 7 7 7 f 1 7 7 f . 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
        . f 7 7 f 7 7 7 7 7 7 f 7 7 f . 
        . f 7 7 f f f f f f f f 7 7 f . 
        . f f f 7 7 7 7 7 7 7 7 f f f . 
        . . . f 7 7 7 7 7 7 7 7 f . . . 
        . . . f 7 7 f f f f 7 7 f . . . 
        . . . f 7 f . . . . f 7 f . . . 
        . . f 7 7 f . . . f 7 7 f . . . 
        . . f f f . . . . f f f . . . . 
        `],
    500,
    false
    )
})
controller.player3.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    Mysprite3.vy = -100
})
controller.player1.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . 8 . . . . . . . . . . . . 
        . . 8 9 8 8 . . . . . . . . . . 
        . . 8 9 9 9 8 8 8 . . . . . . . 
        . 8 8 8 8 9 9 9 9 8 8 8 . . . . 
        8 9 9 9 9 9 9 9 9 9 9 9 8 8 8 . 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 
        8 9 9 9 9 9 9 9 9 9 9 9 9 9 8 . 
        8 8 9 9 9 9 9 9 9 9 9 9 9 9 8 . 
        . 8 8 9 9 9 9 9 9 9 9 9 9 8 . . 
        8 9 9 9 9 8 8 8 8 8 8 8 8 . . . 
        . 8 8 8 8 . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 200, 0)
})
controller.player4.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Mysprite4,
    [img`
        . f f f f f f f f f f f f f f . 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
        . f 7 7 7 1 f 7 7 7 1 f 7 7 f . 
        . f 7 7 7 1 f 7 7 7 1 f 7 7 f . 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
        . f 7 7 f 7 7 7 7 7 7 f 7 7 f . 
        . f 7 7 f f f f f f f f 7 7 f . 
        . f f f 7 7 7 7 7 7 7 7 f f f . 
        . . . f 7 7 7 7 7 7 7 7 f . . . 
        . . . f 7 7 f f f f 7 7 f . . . 
        . . . f 7 f . . . . f 7 f . . . 
        . . . f 7 7 f . . . f 7 7 f . . 
        . . . . f f f . . . . f f f . . 
        `],
    500,
    false
    )
})
controller.player3.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Mysprite3,
    [img`
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 f 1 5 5 f 1 5 5 5 f . 
        . f 5 5 5 f 1 5 5 f 1 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 f f f f f f f f 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 f f f f f 5 5 5 5 f . 
        . . f 5 f . . . . . f 5 f f f . 
        . f 5 5 f . . . . f 5 5 f . . . 
        . f f f . . . . . f f f . . . . 
        `],
    500,
    false
    )
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    bad_man.follow(mySprite)
    sprites.destroy(projectile)
    projectile_count += 1
    if (projectile_count == 100) {
        sprites.destroy(bad_man)
        pause(5000)
        game.gameOver(true)
    }
    if (projectile_count == 10) {
        scaling.scaleByPixels(bad_man, 10, ScaleDirection.Horizontally, ScaleAnchor.Middle)
        scaling.scaleByPixels(bad_man, 10, ScaleDirection.Vertically, ScaleAnchor.Middle)
    }
    if (projectile_count == 20) {
        scaling.scaleByPixels(bad_man, 10, ScaleDirection.Horizontally, ScaleAnchor.Middle)
        scaling.scaleByPixels(bad_man, 10, ScaleDirection.Vertically, ScaleAnchor.Middle)
    }
})
controller.player1.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . f f f f f f f f f f f f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 f 1 2 2 f 1 2 f . . 
        . . f 2 2 2 f 1 2 2 f 1 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 f f f f f f 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . . f 2 f f f f f f 2 f f . . 
        . . f 2 2 f . . . f 2 2 f . . . 
        . . f f f . . . . f f f . . . . 
        `],
    500,
    false
    )
})
let projectile_count = 0
let projectile: Sprite = null
let bad_man: Sprite = null
let Mysprite4: Sprite = null
let Mysprite3: Sprite = null
let Mysprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . f f f f f f f f f f f f . . 
    . . f 2 2 2 2 2 2 2 2 2 2 f . . 
    . . f 2 2 2 2 2 2 2 2 2 2 f . . 
    . . f 2 2 2 2 2 2 2 2 2 2 f . . 
    . . f 2 2 2 1 1 2 2 1 1 2 f . . 
    . . f 2 2 2 f f 2 2 f f 2 f . . 
    . . f 2 2 2 2 2 2 2 2 2 2 f . . 
    . . f 2 2 2 2 2 2 2 2 2 2 f . . 
    . . f 2 2 2 2 2 2 2 2 2 2 f . . 
    . . f 2 2 2 f f f f f f 2 f . . 
    . . f 2 2 2 2 2 2 2 2 2 2 f . . 
    . . f 2 2 2 2 2 2 2 2 2 2 f . . 
    . . f 2 2 2 2 2 2 2 2 2 2 f . . 
    . . f f 2 f f f f f 2 f f f . . 
    . . . f 2 2 f . . f 2 2 f . . . 
    . . . . f f f . . . f f f . . . 
    `, SpriteKind.Player)
Mysprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . f f f f f f f f f f f f f f . 
    . f 9 9 9 9 9 9 9 9 9 9 9 9 f . 
    . f 9 9 9 9 9 9 9 9 9 9 9 9 f . 
    . f 9 9 9 9 9 9 9 9 9 9 9 9 f . 
    . f 9 9 9 1 f 9 9 9 1 f 9 9 f . 
    . f 9 9 9 1 f 9 9 9 1 f 9 9 f . 
    . f 9 9 9 9 9 9 9 9 9 9 9 9 f . 
    . f 9 9 9 9 9 9 9 9 9 9 9 9 f . 
    . f 9 9 9 f f f f f 9 9 9 9 f . 
    . f 9 9 9 9 9 9 9 9 9 9 9 9 f . 
    . f 9 9 9 9 9 9 9 9 9 9 9 9 f . 
    . f f f 9 9 9 9 9 9 9 9 f f f . 
    . . . f 9 f f f f f 9 f . . . . 
    . . . f 9 9 f . . f 9 9 f . . . 
    . . . . f f f . . . f f f . . . 
    `, SpriteKind.Player)
Mysprite3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . f f f f f f f f f f f f f f . 
    . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
    . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
    . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
    . f 5 5 5 1 f 5 5 1 f 5 5 5 f . 
    . f 5 5 5 1 f 5 5 1 f 5 5 5 f . 
    . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
    . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
    . f 5 5 f f f f f f f f 5 5 f . 
    . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
    . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
    . f 5 5 5 f f f f f 5 5 5 5 f . 
    . f f 5 f . . . . . f 5 f f f . 
    . . f 5 5 f . . . . f 5 5 f . . 
    . . . f f f . . . . . f f f . . 
    `, SpriteKind.Player)
Mysprite4 = sprites.create(img`
    . f f f f f f f f f f f f f f . 
    . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
    . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
    . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
    . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
    . f 7 7 7 1 f 7 7 7 1 f 7 7 f . 
    . f 7 7 7 1 f 7 7 7 1 f 7 7 f . 
    . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
    . f 7 7 f 7 7 7 7 7 7 f 7 7 f . 
    . f 7 7 f f f f f f f f 7 7 f . 
    . f f f 7 7 7 7 7 7 7 7 f f f . 
    . . . f 7 7 f f f f 7 7 f . . . 
    . . . f 7 f . . . . f 7 f . . . 
    . . . f 7 f . . . . f 7 f . . . 
    . . . f 7 7 f . . . f 7 7 f . . 
    . . . . f f f . . . . f f f . . 
    `, SpriteKind.Player)
bad_man = sprites.create(img`
    . . f . . . f . . f . . f . . f 
    . . f f . . f f f f f f . f f . 
    f f 3 f . f 3 3 b 3 3 f . f 3 f 
    . f b 3 f 3 3 3 3 3 3 3 f 3 b f 
    . f 3 3 3 3 f 3 3 b 3 f 3 3 f f 
    f f 3 3 b 3 3 f 3 3 f 3 b 3 f . 
    . f f b 3 3 f 3 3 3 3 f 3 3 f . 
    . . . f 3 3 3 3 b 3 3 3 3 f . f 
    . . . . f b 3 f f f 3 b f f . . 
    . . . . f 3 3 3 3 3 3 f . . f . 
    . f f f b 3 f f f f 3 f f . . . 
    . . . f 3 f . . . f b f . . . . 
    . f . f 3 f . . . f 3 f . . . . 
    . . f f 3 f . . . f 3 f f . . . 
    . . f 3 b f . . f 3 b f . f . . 
    . . f f f . . . f f f . . . . . 
    `, SpriteKind.Enemy)
controller.player1.moveSprite(mySprite, 100, 0)
controller.player2.moveSprite(Mysprite2, 100, 0)
controller.player3.moveSprite(Mysprite3, 100, 0)
controller.player4.moveSprite(Mysprite4, 100, 0)
scene.cameraFollowSprite(mySprite)
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`level1`)
mySprite.ay = 200
Mysprite2.ay = 200
Mysprite3.ay = 200
Mysprite4.ay = 200
scaling.scaleByPixels(bad_man, 10, ScaleDirection.Horizontally, ScaleAnchor.Middle)
scaling.scaleByPixels(bad_man, 10, ScaleDirection.Vertically, ScaleAnchor.Middle)
tiles.placeOnRandomTile(bad_man, assets.tile`myTile5`)
game.setGameOverEffect(true, effects.clouds)
tiles.placeOnRandomTile(mySprite, assets.tile`transparency16`)
