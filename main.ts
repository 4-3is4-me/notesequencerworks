function playloop () {
    while (true) {
        count = 0
        while (count < looplength) {
            led.toggle(count, 0)
            music.playTone(notes[count], music.beat(BeatFraction.Quarter))
            music.rest(music.beat(BeatFraction.Quarter))
            led.toggle(count, 0)
            count += 1
        }
    }
}
function Settone () {
    while (count < looplength) {
        led.toggle(count, 0)
        music.playTone(notes[count], music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        led.toggle(count, 0)
        if (input.buttonIsPressed(Button.B)) {
            notes[count] = notes[count] + 16
            music.playTone(notes[count], music.beat(BeatFraction.Quarter))
        }
        if (input.buttonIsPressed(Button.A)) {
            notes[count] = notes[count] - 16
            music.playTone(notes[count], music.beat(BeatFraction.Quarter))
        }
        if (input.buttonIsPressed(Button.AB)) {
            count += 1
        }
    }
    playloop()
}
let count = 0
let looplength = 0
let notes: number[] = []
led.setBrightness(145)
basic.showIcon(IconNames.Happy)
basic.clearScreen()
music.setVolume(90)
music.setTempo(120)
music.playMelody("C D E G - - - - ", 120)
notes = [262, 262, 262, 262]
looplength = notes.length
count = 0
Settone()
