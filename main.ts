function angleToCartesian1D (degrees: number) {
    if (Math.abs(degrees) <= 1) {
        return 2
    } else {
        if (Math.abs(degrees) <= 5) {
            return Math.map(degrees, -5, 5, 1, 3)
        } else {
            return Math.map(Math.constrain(degrees, -10, 10), -10, 10, 0, 4)
        }
    }
}
basic.forever(function () {
    basic.clearScreen()
    led.plot(angleToCartesian1D(input.rotation(Rotation.Roll)), angleToCartesian1D(input.rotation(Rotation.Pitch)))
})
