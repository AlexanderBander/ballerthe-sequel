namespace SpriteKind {
    export const Boss = SpriteKind.create()
    export const Enemy2 = SpriteKind.create()
    export const Enemy1 = SpriteKind.create()
    export const Enemy3 = SpriteKind.create()
    export const Enemy4 = SpriteKind.create()
}
controller.player4.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    Enemy2.vy = -100
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy4, function (sprite, otherSprite) {
    Enemy4.follow(mySprite)
    sprites.destroy(projectile)
    projectile_count += 1
    if (projectile_count == 100) {
        sprites.destroy(Enemy4)
        info.changeScoreBy(80)
    }
})
controller.player3.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . 2 . . . . . . . . . . . . 
        . . 2 4 2 2 . . . . . . . . . . 
        . . 2 4 4 4 2 2 2 . . . . . . . 
        . 2 2 2 2 4 4 4 4 2 2 2 . . . . 
        2 4 4 4 4 4 5 5 4 4 4 4 2 2 2 . 
        4 5 5 5 5 5 5 5 5 4 4 4 4 4 4 2 
        5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 2 
        2 4 4 5 5 5 5 5 5 5 5 4 4 4 2 . 
        2 2 4 4 5 5 5 5 4 4 4 4 4 4 2 . 
        . 2 2 4 5 4 4 4 4 4 4 4 4 2 . . 
        2 4 4 4 4 4 2 2 2 2 2 2 2 . . . 
        . 2 2 2 2 . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Mysprite3, 200, 0)
})
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . 2 . . . . . . . . . . . . 
        . . 2 4 2 2 . . . . . . . . . . 
        . . 2 4 4 4 2 2 2 . . . . . . . 
        . 2 2 2 2 4 4 4 4 2 2 2 . . . . 
        2 4 4 4 4 4 5 5 4 4 4 4 2 2 2 . 
        4 5 5 5 5 5 5 5 5 4 4 4 4 4 4 2 
        5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 2 
        2 4 4 5 5 5 5 5 5 5 5 4 4 4 2 . 
        2 2 4 4 5 5 5 5 4 4 4 4 4 4 2 . 
        . 2 2 4 5 4 4 4 4 4 4 4 4 2 . . 
        2 4 4 4 4 4 2 2 2 2 2 2 2 . . . 
        . 2 2 2 2 . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Mysprite2, 200, 0)
})
controller.player4.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . 2 . . . . . . . . . . . . 
        . . 2 4 2 2 . . . . . . . . . . 
        . . 2 4 4 4 2 2 2 . . . . . . . 
        . 2 2 2 2 4 4 4 4 2 2 2 . . . . 
        2 4 4 4 4 4 5 5 4 4 4 4 2 2 2 . 
        4 5 5 5 5 5 5 5 5 4 4 4 4 4 4 2 
        5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 2 
        2 4 4 5 5 5 5 5 5 5 5 4 4 4 2 . 
        2 2 4 4 5 5 5 5 4 4 4 4 4 4 2 . 
        . 2 2 4 5 4 4 4 4 4 4 4 4 2 . . 
        2 4 4 4 4 4 2 2 2 2 2 2 2 . . . 
        . 2 2 2 2 . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Enemy2, 200, 0)
})
controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -100
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . 2 . . . . . . . . . . . . 
        . . 2 4 2 2 . . . . . . . . . . 
        . . 2 4 4 4 2 2 2 . . . . . . . 
        . 2 2 2 2 4 4 4 4 2 2 2 . . . . 
        2 4 4 4 4 4 5 5 4 4 4 4 2 2 2 . 
        4 5 5 5 5 5 5 5 5 4 4 4 4 4 4 2 
        5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 2 
        2 4 4 5 5 5 5 5 5 5 5 4 4 4 2 . 
        2 2 4 4 5 5 5 5 4 4 4 4 4 4 2 . 
        . 2 2 4 5 4 4 4 4 4 4 4 4 2 . . 
        2 4 4 4 4 4 2 2 2 2 2 2 2 . . . 
        . 2 2 2 2 . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, -200, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Boss, function (sprite, otherSprite) {
    PinkCacti01.follow(mySprite)
    sprites.destroy(projectile)
    projectile_count += 1
    if (projectile_count == 100) {
        sprites.destroy(PinkCacti01)
        pause(5000)
        info.changeScoreBy(80)
    }
    if (projectile_count == 10) {
        scaling.scaleByPixels(PinkCacti01, 10, ScaleDirection.Horizontally, ScaleAnchor.Middle)
        scaling.scaleByPixels(PinkCacti01, 10, ScaleDirection.Vertically, ScaleAnchor.Middle)
    }
    if (projectile_count == 20) {
        scaling.scaleByPixels(PinkCacti01, 10, ScaleDirection.Horizontally, ScaleAnchor.Middle)
        scaling.scaleByPixels(PinkCacti01, 10, ScaleDirection.Vertically, ScaleAnchor.Middle)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy3, function (sprite, otherSprite) {
    Enemy3.follow(mySprite)
    sprites.destroy(projectile)
    projectile_count += 1
    if (projectile_count == 50) {
        sprites.destroy(Enemy3)
        info.changeScoreBy(40)
    }
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
        `,img`
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
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
        `,img`
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 f f f f f f f f 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 f f f f f 5 5 5 5 f . 
        . f f 5 f . . . . . f 5 f f f . 
        . . f 5 5 f . . . . f 5 5 f . . 
        . . . f f f . . . . . f f f . . 
        `,img`
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
    250,
    false
    )
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    Mysprite2.vy = -100
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
        `,img`
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f f . 
        . f 9 9 9 9 9 9 9 9 9 9 9 9 f . 
        . f 9 9 9 9 9 9 9 9 9 9 9 9 f . 
        . f 9 9 9 9 9 9 9 9 9 9 9 9 f . 
        . f 9 9 9 9 9 9 9 9 9 9 9 9 f . 
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
        `,img`
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f f . 
        . f 9 9 9 9 9 9 9 9 9 9 9 9 f . 
        . f 9 9 9 9 9 9 9 9 9 9 9 9 f . 
        . f 9 9 9 9 9 9 9 9 9 9 9 9 f . 
        . f 9 9 9 9 9 9 9 9 9 9 9 9 f . 
        . f 9 9 9 9 9 9 9 9 9 9 9 9 f . 
        . f 9 9 9 9 9 9 9 9 9 9 9 9 f . 
        . f 9 9 9 9 9 9 9 9 9 9 9 9 f . 
        . f 9 9 9 f f f f f 9 9 9 9 f . 
        . f 9 9 9 9 9 9 9 9 9 9 9 9 f . 
        . f 9 9 9 9 9 9 9 9 9 9 9 9 f . 
        . f f f 9 9 9 9 9 9 9 9 f f f . 
        . . . f 9 f f f f f 9 f . . . . 
        . . . f 9 9 f . . f 9 9 f . . . 
        . . . . f f f . . . f f f . . . 
        `,img`
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
    250,
    false
    )
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy2, function (sprite, otherSprite) {
    Enemy2.follow(mySprite)
    sprites.destroy(projectile)
    projectile_count += 1
    if (projectile_count == 25) {
        sprites.destroy(Enemy2)
        info.changeScoreBy(20)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy1, function (sprite, otherSprite) {
    Enemy1.follow(mySprite)
    sprites.destroy(projectile)
    projectile_count += 1
    if (projectile_count == 5) {
        sprites.destroy(Enemy1)
        info.changeScoreBy(10)
    }
})
controller.player4.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . 2 . . . . . . . . . . . . 
        . . 2 4 2 2 . . . . . . . . . . 
        . . 2 4 4 4 2 2 2 . . . . . . . 
        . 2 2 2 2 4 4 4 4 2 2 2 . . . . 
        2 4 4 4 4 4 5 5 4 4 4 4 2 2 2 . 
        4 5 5 5 5 5 5 5 5 4 4 4 4 4 4 2 
        5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 2 
        2 4 4 5 5 5 5 5 5 5 5 4 4 4 2 . 
        2 2 4 4 5 5 5 5 4 4 4 4 4 4 2 . 
        . 2 2 4 5 4 4 4 4 4 4 4 4 2 . . 
        2 4 4 4 4 4 2 2 2 2 2 2 2 . . . 
        . 2 2 2 2 . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, -200, 0)
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
        `,img`
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f f . 
        . f 9 9 9 9 9 9 9 9 9 9 9 9 f . 
        . f 9 9 9 9 9 9 9 9 9 9 9 9 f . 
        . f 9 9 9 9 9 9 9 9 9 9 9 9 f . 
        . f 9 9 9 9 9 9 9 9 9 9 9 9 f . 
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
        `,img`
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f f . 
        . f 9 9 9 9 9 9 9 9 9 9 9 9 f . 
        . f 9 9 9 9 9 9 9 9 9 9 9 9 f . 
        . f 9 9 9 9 9 9 9 9 9 9 9 9 f . 
        . f 9 9 9 9 9 9 9 9 9 9 9 9 f . 
        . f 9 9 9 9 9 9 9 9 9 9 9 9 f . 
        . f 9 9 9 9 9 9 9 9 9 9 9 9 f . 
        . f 9 9 9 9 9 9 9 9 9 9 9 9 f . 
        . f 9 9 9 f f f f f 9 9 9 9 f . 
        . f 9 9 9 9 9 9 9 9 9 9 9 9 f . 
        . f 9 9 9 9 9 9 9 9 9 9 9 9 f . 
        . f f f 9 9 9 9 9 9 9 9 f f f . 
        . . . f 9 f f f f f 9 f . . . . 
        . . f 9 9 f . . f 9 9 f . . . . 
        . . f f f . . . f f f . . . . . 
        `,img`
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
    250,
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
        . . f 2 2 f f f f f f f 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f f 2 f f f f f f 2 f . . . 
        . . . f 2 2 f . . . f 2 2 f . . 
        . . . . f f f . . . . f f f . . 
        `,img`
        . . f f f f f f f f f f f f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 1 f 2 2 1 f 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 f f f f f f f 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f f 2 f f f f f f 2 f . . . 
        . . . f 2 2 f . . . f 2 2 f . . 
        . . . . f f f . . . . f f f . . 
        `,img`
        . . f f f f f f f f f f f f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 f f f f f f f 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f f 2 f f f f f f 2 f . . . 
        . . . f 2 2 f . . . f 2 2 f . . 
        . . . . f f f . . . . f f f . . 
        `,img`
        . . f f f f f f f f f f f f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 1 f 2 2 1 f 2 f . . 
        . . f 2 2 2 1 f 2 2 1 f 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 f f f f f f f 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f f 2 f f f f f f 2 f . . . 
        . . . f 2 2 f . . . f 2 2 f . . 
        . . . . f f f . . . . f f f . . 
        `,img`
        . . f f f f f f f f f f f f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 1 f 2 2 1 f 2 f . . 
        . . f 2 2 2 1 f 2 2 1 f 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 f f f f f f f 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f f 2 f f f f f f 2 f . . . 
        . . . f 2 2 f . . . f 2 2 f . . 
        . . . . f f f . . . . f f f . . 
        `],
    250,
    false
    )
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . 2 . . . . . . . . . . . . 
        . . 2 4 2 2 . . . . . . . . . . 
        . . 2 4 4 4 2 2 2 . . . . . . . 
        . 2 2 2 2 4 4 4 4 2 2 2 . . . . 
        2 4 4 4 4 4 5 5 4 4 4 4 2 2 2 . 
        4 5 5 5 5 5 5 5 5 4 4 4 4 4 4 2 
        5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 2 
        2 4 4 5 5 5 5 5 5 5 5 4 4 4 2 . 
        2 2 4 4 5 5 5 5 4 4 4 4 4 4 2 . 
        . 2 2 4 5 4 4 4 4 4 4 4 4 2 . . 
        2 4 4 4 4 4 2 2 2 2 2 2 2 . . . 
        . 2 2 2 2 . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, -200, 0)
})
controller.player4.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Enemy2,
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
        `,img`
        . f f f f f f f f f f f f f f . 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
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
        `,img`
        . f f f f f f f f f f f f f f . 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
        . f 7 7 f 7 7 7 7 7 7 f 7 7 f . 
        . f 7 7 f f f f f f f f 7 7 f . 
        . f f f 7 7 7 7 7 7 7 7 f f f . 
        . . . f 7 7 7 7 7 7 7 7 f . . . 
        . . . f 7 7 f f f f 7 7 f . . . 
        . . . f 7 f . . . . f 7 f . . . 
        . . f 7 7 f . . . f 7 7 f . . . 
        . . f f f . . . . f f f . . . . 
        `,img`
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
    250,
    false
    )
})
controller.player3.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . 2 . . . . . . . . . . . . 
        . . 2 4 2 2 . . . . . . . . . . 
        . . 2 4 4 4 2 2 2 . . . . . . . 
        . 2 2 2 2 4 4 4 4 2 2 2 . . . . 
        2 4 4 4 4 4 5 5 4 4 4 4 2 2 2 . 
        4 5 5 5 5 5 5 5 5 4 4 4 4 4 4 2 
        5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 2 
        2 4 4 5 5 5 5 5 5 5 5 4 4 4 2 . 
        2 2 4 4 5 5 5 5 4 4 4 4 4 4 2 . 
        . 2 2 4 5 4 4 4 4 4 4 4 4 2 . . 
        2 4 4 4 4 4 2 2 2 2 2 2 2 . . . 
        . 2 2 2 2 . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, -200, 0)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile27`, function (sprite, location) {
    game.gameOver(false)
})
controller.player1.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . 2 . . . . . . . . . . . . 
        . . 2 4 2 2 . . . . . . . . . . 
        . . 2 4 4 4 2 2 2 . . . . . . . 
        . 2 2 2 2 4 4 4 4 2 2 2 . . . . 
        2 4 4 4 4 4 5 5 4 4 4 4 2 2 2 . 
        4 5 5 5 5 5 5 5 5 4 4 4 4 4 4 2 
        5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 2 
        2 4 4 5 5 5 5 5 5 5 5 4 4 4 2 . 
        2 2 4 4 5 5 5 5 4 4 4 4 4 4 2 . 
        . 2 2 4 5 4 4 4 4 4 4 4 4 2 . . 
        2 4 4 4 4 4 2 2 2 2 2 2 2 . . . 
        . 2 2 2 2 . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 200, 0)
})
controller.player4.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Enemy2,
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
        `,img`
        . f f f f f f f f f f f f f f . 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
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
        `,img`
        . f f f f f f f f f f f f f f . 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
        . f 7 7 f 7 7 7 7 7 7 f 7 7 f . 
        . f 7 7 f f f f f f f f 7 7 f . 
        . f f f 7 7 7 7 7 7 7 7 f f f . 
        . . . f 7 7 7 7 7 7 7 7 f . . . 
        . . . f 7 7 f f f f 7 7 f . . . 
        . . . f 7 f . . . . f 7 f . . . 
        . . . f 7 7 f . . . f 7 7 f . . 
        . . . . f f f . . . . f f f . . 
        `,img`
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
        `,img`
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
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
        `,img`
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 f f f f f f f f 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 f f f f f 5 5 5 5 f . 
        . . f 5 f . . . . . f 5 f f f . 
        . f 5 5 f . . . . f 5 5 f . . . 
        . f f f . . . . . f f f . . . . 
        `,img`
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
    250,
    false
    )
})
controller.player3.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    Mysprite3.vy = -100
})
controller.player1.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . f f f f f f f f f f f f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 f 1 2 2 f 1 2 2 f . . 
        . . f 2 2 f 1 2 2 f 1 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 f f f f f f f 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . . f 2 f f f f f f 2 f f . . 
        . . f 2 2 f . . . f 2 2 f . . . 
        . . f f f . . . . f f f . . . . 
        `,img`
        . . f f f f f f f f f f f f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 f 1 2 2 f 1 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 f f f f f f f 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . . f 2 f f f f f f 2 f f . . 
        . . f 2 2 f . . . f 2 2 f . . . 
        . . f f f . . . . f f f . . . . 
        `,img`
        . . f f f f f f f f f f f f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 f f f f f f f 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . . f 2 f f f f f f 2 f f . . 
        . . f 2 2 f . . . f 2 2 f . . . 
        . . f f f . . . . f f f . . . . 
        `,img`
        . . f f f f f f f f f f f f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 f 1 2 2 f 1 2 2 f . . 
        . . f 2 2 f 1 2 2 f 1 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 f f f f f f f 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . . f 2 f f f f f f 2 f f . . 
        . . f 2 2 f . . . f 2 2 f . . . 
        . . f f f . . . . f f f . . . . 
        `],
    250,
    false
    )
})
let projectile_count = 0
let projectile: Sprite = null
let Enemy4: Sprite = null
let Enemy3: Sprite = null
let Enemy2: Sprite = null
let Enemy1: Sprite = null
let PinkCacti01: Sprite = null
let Mysprite3: Sprite = null
let Mysprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`blokeO1`, SpriteKind.Player)
Mysprite2 = sprites.create(assets.image`BlokeO2`, SpriteKind.Player)
Mysprite3 = sprites.create(assets.image`BlokeO3`, SpriteKind.Player)
let mySprite5 = sprites.create(assets.image`BlokeO4`, SpriteKind.Player)
PinkCacti01 = sprites.create(assets.image`PinkCacti01`, SpriteKind.Boss)
Enemy1 = sprites.create(assets.image`Rocko1`, SpriteKind.Enemy1)
Enemy2 = sprites.create(assets.image`Rocko2`, SpriteKind.Enemy2)
Enemy3 = sprites.create(assets.image`Rocko3`, SpriteKind.Enemy3)
Enemy4 = sprites.create(assets.image`Rocko4`, SpriteKind.Enemy4)
controller.player1.moveSprite(mySprite, 100, 0)
controller.player2.moveSprite(Mysprite2, 100, 0)
controller.player3.moveSprite(Mysprite3, 100, 0)
controller.player4.moveSprite(Enemy2, 100, 0)
scene.cameraFollowSprite(mySprite)
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`level1`)
mySprite.ay = 200
Mysprite2.ay = 200
Mysprite3.ay = 200
Enemy2.ay = 200
scaling.scaleByPixels(PinkCacti01, 10, ScaleDirection.Horizontally, ScaleAnchor.Middle)
scaling.scaleByPixels(PinkCacti01, 10, ScaleDirection.Vertically, ScaleAnchor.Middle)
tiles.placeOnRandomTile(PinkCacti01, assets.tile`myTile5`)
game.setGameOverEffect(true, effects.clouds)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile8`)
tiles.placeOnRandomTile(Mysprite2, assets.tile`myTile8`)
tiles.placeOnRandomTile(Mysprite3, assets.tile`myTile8`)
tiles.placeOnRandomTile(mySprite5, assets.tile`myTile8`)
info.setScore(0)
tiles.placeOnRandomTile(Enemy1, assets.tile`myTile29`)
tiles.placeOnRandomTile(Enemy2, assets.tile`myTile30`)
tiles.placeOnRandomTile(Enemy3, assets.tile`myTile28`)
tiles.placeOnRandomTile(Enemy4, assets.tile`myTile31`)
