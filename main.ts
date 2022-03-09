input.onGesture(Gesture.Shake, function () {
    step += 1
    led.stopAnimation()
})
let step = 0
let strip = neopixel.create(DigitalPin.P1, 7, NeoPixelMode.RGB)
basic.forever(function () {
    basic.showNumber(step)
    if (step > 30) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
