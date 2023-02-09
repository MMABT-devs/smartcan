def on_sound_loud():
    global tong
    tong = not (tong)
    if tong:
        servos.P0.set_pulse(800)
        servos.P0.set_angle(180)
        basic.pause(2000)
        servos.P0.set_angle(0)
input.on_sound(DetectedSound.LOUD, on_sound_loud)

tong = False
input.set_sound_threshold(SoundThreshold.LOUD, 128)