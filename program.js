process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    var input = process.stdin.read();
    if (input !== null) {
      var instruction = input.toString().trim();
      return;
    }
    switch(instruction) {
      case '':
        process.stdout.write('You did not write anything! Try again\n');
        process.exit();
        break;
      case '/exit':
        process.stdout.write('Quitting app!\n');
        process.exit();
        break;
      case "/env":
        console.log("Language: " + process.env.LANG);
        console.log("Node version: " + process.versions.node);
        break;
      default:
        process.stderr.write('Wrong instruction!\n');
    }
});
