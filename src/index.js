module.exports = function toReadable(number) {
    let string = number.toString();
    let numbers = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    let numbers2 = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let numbers3 = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    switch (string.length) {
        case 1:
            return numbers[string];
        case 2:
            if (string[0] == 1) {
                return numbers2[string[1]];
            } else {
                return (
                    numbers3[string[0] - 2] +
                    (string[1] == 0 ? "" : ` ${numbers[string[1]]}`)
                );
            }
        case 3:
            return (
                `${numbers[string[0]]} hundred` +
                (string.slice(1) >= 10 && string.slice(1) < 20 && string[1] == 1
                    ? ` ${numbers2[string[2]]}`
                    : "") +
                (string[1] == 0 && string[2] > 0
                    ? ` ${numbers[string[2]]}`
                    : "") +
                (string.slice(1) >= 20
                    ? ` ${numbers3[string[1] - 2]}` +
                      (string[2] == 0 ? "" : ` ${numbers[string[2]]}`)
                    : "")
            );
    }
};
