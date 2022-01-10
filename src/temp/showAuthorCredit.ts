// REMOVE THIS MODULE WHEN YOU START YOUR PROJECT

const showAuthorCredit = () => {
  [...Array(5)].map((_, index) => {
    if (index === 0 || index === 4) return printBorder();
    if (index === 2) return printCredit();

    breakLine();
    breakLine();
  });

  breakLine();
  breakLine();
};

const printBorder = () => [...Array(22)].map((_) => printInYellow("="));

const printCredit = () => {
  printInYellow("||");
  [...Array(2)].map((_) => process.stdout.write(" "));

  printInYellow("Made By Yasser");

  [...Array(2)].map((_) => process.stdout.write(" "));
  printInYellow("||");
};

const breakLine = () => process.stdout.write("\n");

const printInYellow = (text: string) => {
  process.stdout.write(`\x1b[33m${text}\x1b[0m`);
};

export { showAuthorCredit };
