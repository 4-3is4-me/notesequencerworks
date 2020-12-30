def playloop():
    while True:
        for value in notes:
            music.play_tone(notes[value], music.beat(BeatFraction.QUARTER))
def Settone():
    for value2 in notes:
        music.play_tone(notes[value2], music.beat(BeatFraction.QUARTER))
        if input.button_is_pressed(Button.B):
            notes[value2] = notes[value2] + 1
            music.play_tone(notes[value2], music.beat(BeatFraction.QUARTER))
        else:
            if input.button_is_pressed(Button.A):
                value2 += 1
    playloop()
notes: List[number] = []
basic.show_icon(IconNames.HAPPY)
music.play_melody("C D E G - - - - ", 120)
notes = [262, 262, 262, 262, 262]
value3 = 0
Settone()