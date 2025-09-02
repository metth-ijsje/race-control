input.onButtonPressed(Button.A, function () {
    while (input.buttonIsPressed(Button.A)) {
        for (let index = 0; index < 99999; index++) {
            basic.pause(5000)
        }
    }
})
radio.onReceivedString(function (receivedString) {
    t_Next = input.runningTime()
    T_tussen = t_Next - t_prev
    t_prev = t_Next
    Lap_Counter += 1
    serial.writeLine("Je tijd is " + T_tussen + " Goed Gedaan")
    basic.showNumber(Lap_Counter)
    basic.clearScreen()
})
let t_prev = 0
let T_tussen = 0
let t_Next = 0
let Lap_Counter = 0
serial.writeLine("welcome")
radio.setGroup(3)
Lap_Counter = 0
