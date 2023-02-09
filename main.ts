input.onSound(DetectedSound.Loud, function () {
    tong = !(tong)
    if (tong) {
        servos.P0.setPulse(800)
        servos.P0.setAngle(180)
        basic.pause(2000)
        servos.P0.setAngle(0)
    }
})
let tong = false
input.setSoundThreshold(SoundThreshold.Loud, 128)
