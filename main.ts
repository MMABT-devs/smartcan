input.onSound(DetectedSound.Loud, function () {
    tong = !(tong)
    if (tong) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            . . . . .
            `)
        edubitMotors.runMotor(MotorChannel.M1, MotorDirection.Forward, 20)
    } else {
        edubitMotors.brakeMotor(MotorChannel.M1)
    }
})
let tong = false
input.setSoundThreshold(SoundThreshold.Loud, 35)
