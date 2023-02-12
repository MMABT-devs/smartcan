def on_sound_loud():
    global tong
    tong = not (tong)
    if tong:
        basic.show_leds("""
            . . # . .
                        . . . # .
                        # # # # #
                        . . . # .
                        . . # . .
        """)
        servos.P0.set_pulse(800)
        servos.P0.set_angle(90)
        basic.pause(2000)
        basic.show_leds("""
            . . # . .
                        . # . . .
                        # # # # #
                        . # . . .
                        . . # . .
        """)
        servos.P0.set_angle(0)
input.on_sound(DetectedSound.LOUD, on_sound_loud)

tong = False
input.set_sound_threshold(SoundThreshold.LOUD, 35)