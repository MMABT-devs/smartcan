input.onSound(DetectedSound.Loud, function () {
    tong = !(tong)
    if (tong) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        servos.P0.setPulse(800)
        servos.P0.setAngle(90)
        basic.pause(2000)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        servos.P0.setAngle(0)
    }
})
let tong = false
input.setSoundThreshold(SoundThreshold.Loud, 128)
