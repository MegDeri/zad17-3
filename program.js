process.stdin.setEncoding("utf-8");

process.stdin.on("readable", function() {
  // .read() method to read what user type in input
  var input = process.stdin.read();
  if (input !== null) {
    var instruction = input.toString().trim();
  }
  switch (instruction) {
    case "":
      process.stdout.write("You did not write anything! Try again\n");
      process.exit();
      break;
    case "/exit":
      process.stdout.write("Quitting app!\n");
      process.exit();
      break;
    case "/env":
      process.stdout.write("\nLanguage: " + process.env.LANG);
      process.stdout.write("\nNode version: " + process.versions.node);
      break;
    default:
      process.stderr.write("Wrong instruction!\n");
  }
});
