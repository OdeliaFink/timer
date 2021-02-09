const args = process.argv.slice(2)


for (const buzzer of args) {
  // console.log("this is:", buzzer)
  setTimeout(function() {
    process.stdout.write("Beep\n")
  }, buzzer * 1000)
}
console.log(args)