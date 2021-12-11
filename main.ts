let strip2 = neopixel.create(DigitalPin.P1, 16, NeoPixelMode.RGB)
let t = 35
strip.setBrightness(30)
// --------------------------------------------------------------
// --------------------------------------------------------------
basic.forever(function () {
    // --------------------------------------------------------------
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(8, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(9, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(10, neopixel.colors(NeoPixelColors.Blue))
    strip.show()
    for (let index = 0; index < 16; index++) {
        strip.shift(1)
        strip.show()
        basic.pause(t)
    }
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(8, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(9, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(10, neopixel.colors(NeoPixelColors.Blue))
    strip.show()
    for (let index = 0; index < 16; index++) {
        strip.shift(1)
        strip.show()
        basic.pause(t)
    }
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(8, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(9, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(10, neopixel.colors(NeoPixelColors.Blue))
    strip.show()
    for (let index = 0; index < 16; index++) {
        strip.shift(1)
        strip.show()
        basic.pause(t)
    }
    strip.setPixelColor(11, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(10, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(9, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(7, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
    for (let index = 0; index < 16; index++) {
        strip.shift(-1)
        strip.show()
        basic.pause(t)
    }
    strip.setPixelColor(11, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(10, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(9, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(7, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
    for (let index = 0; index < 16; index++) {
        strip.shift(-1)
        strip.show()
        basic.pause(t)
    }
    strip.setPixelColor(11, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(10, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(9, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(7, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
    for (let index = 0; index < 16; index++) {
        strip.shift(-1)
        strip.show()
        basic.pause(t)
    }
    // --------------------------------------------------------------
          // --------------------------------------------------------------  
    strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(8, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(12, neopixel.colors(NeoPixelColors.Blue))
    for (let index = 0; index < 16; index++) {
        strip.shift(1)
        strip.show()
        basic.pause(t)
    }
    strip.setPixelColor(12, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(8, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Blue))
    for (let index = 0; index < 16; index++) {
        strip.shift(-1)
        strip.show()
        basic.pause(t)
    }
    // --------------------------------------------------------------
    // --------------------------------------------------------------
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(8, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(9, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(10, neopixel.colors(NeoPixelColors.Blue))
    strip.show()
    for (let index = 0; index < 16; index++) {
        strip.shift(1)
        strip.show()
        basic.pause(t)
    }
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(8, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(9, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(10, neopixel.colors(NeoPixelColors.Blue))
    strip.show()
    for (let index = 0; index < 16; index++) {
        strip.shift(1)
        strip.show()
        basic.pause(t)
    }
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(8, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(9, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(10, neopixel.colors(NeoPixelColors.Blue))
    strip.show()
    for (let index = 0; index < 16; index++) {
        strip.shift(1)
        strip.show()
        basic.pause(t)
    }
    strip.setPixelColor(11, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(10, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(9, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(7, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
    for (let index = 0; index < 16; index++) {
        strip.shift(-1)
        strip.show()
        basic.pause(t)
    }
    strip.setPixelColor(11, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(10, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(9, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(7, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
    for (let index = 0; index < 16; index++) {
        strip.shift(-1)
        strip.show()
        basic.pause(t)
    }
    strip.setPixelColor(11, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(10, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(9, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(7, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
    for (let index = 0; index < 16; index++) {
        strip.shift(-1)
        strip.show()
        basic.pause(t)
    }
    // --------------------------------------------------------------
          // --------------------------------------------------------------  
    strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(8, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(12, neopixel.colors(NeoPixelColors.Blue))
    for (let index = 0; index < 16; index++) {
        strip.shift(1)
        strip.show()
        basic.pause(t)
    }
    strip.setPixelColor(12, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(8, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Blue))
    for (let index = 0; index < 16; index++) {
        strip.shift(-1)
        strip.show()
        basic.pause(t)
    }
    // --------------------------------------------------------------
    // --------------------------------------------------------------
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(8, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(9, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(10, neopixel.colors(NeoPixelColors.Blue))
    strip.show()
    for (let index = 0; index < 16; index++) {
        strip.shift(1)
        strip.show()
        basic.pause(t)
    }
    strip.setPixelColor(11, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(10, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(9, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(7, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
    for (let index = 0; index < 16; index++) {
        strip.shift(-1)
        strip.show()
        basic.pause(t)
    }
    // --------------------------------------------------------------



      // --------------------------------------------------------------  
    strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(8, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(12, neopixel.colors(NeoPixelColors.Blue))
    for (let index = 0; index < 16; index++) {
        strip.shift(1)
        strip.show()
        basic.pause(t)
    }
    strip.setPixelColor(12, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(8, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Blue))
    for (let index = 0; index < 16; index++) {
        strip.shift(-1)
        strip.show()
        basic.pause(t)
    }
    // --------------------------------------------------------------






    // -------------------------------------------------------------------
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(8, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(10, neopixel.colors(NeoPixelColors.Blue))
    for (let index = 0; index < 16; index++) {
        strip.shift(1)
        strip.show()
        basic.pause(t)
    }
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(8, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(10, neopixel.colors(NeoPixelColors.Blue))
    for (let index = 0; index < 16; index++) {
        strip.shift(-1)
        strip.show()
        basic.pause(t)
    }
    // -------------------------------------------------------------------
    // --------------------------------------------------------------
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(8, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(9, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(10, neopixel.colors(NeoPixelColors.Blue))
    strip.show()
    for (let index = 0; index < 16; index++) {
        strip.shift(1)
        strip.show()
        basic.pause(t)
    }
    strip.setPixelColor(11, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(10, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(9, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(7, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
    for (let index = 0; index < 16; index++) {
        strip.shift(-1)
        strip.show()
        basic.pause(t)
    }
    // --------------------------------------------------------------
    // --------------------------------------------------------------
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(8, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(9, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(10, neopixel.colors(NeoPixelColors.Blue))
    strip.show()
    for (let index = 0; index < 16; index++) {
        strip.shift(1)
        strip.show()
        basic.pause(t)
    }
    strip.setPixelColor(11, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(10, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(9, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(7, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
    for (let index = 0; index < 16; index++) {
        strip.shift(-1)
        strip.show()
        basic.pause(t)
    }
    // --------------------------------------------------------------  
    strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(8, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(12, neopixel.colors(NeoPixelColors.Blue))
    for (let index = 0; index < 16; index++) {
        strip.shift(1)
        strip.show()
        basic.pause(t)
    }
    strip.setPixelColor(12, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(8, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Blue))
    for (let index = 0; index < 16; index++) {
        strip.shift(-1)
        strip.show()
        basic.pause(t)
    }
})
