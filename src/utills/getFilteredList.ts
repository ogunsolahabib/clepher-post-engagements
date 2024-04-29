export default function getFilteredList(inputArr: any[], input: string) {
    if (!input) return inputArr;

    return inputArr.filter(({ name }) => name.includes(input));
    // return inputArr.filter(({ name }, ind, arr) => {
    //     // regexp is matching the exact value from the beginning
    //     // .replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1") - escaping special characters
    //     const regex = new RegExp(
    //         `^${input.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")}`,
    //         "i"
    //     );


    //     // return suggestion if:
    //     // is input value
    //     // input value !== suggestion
    //     // + do not display duplicated suggestion
    //     return input &&
    //         input.toLowerCase() !== name.toLowerCase() &&
    //         arr.findIndex(item => item.name === name) === ind
    //         ? regex.test(name)
    //         : "";
    // });
}