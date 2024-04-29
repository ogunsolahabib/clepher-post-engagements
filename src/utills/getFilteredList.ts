export default function getFilteredList(arr: any[], input: string) {
    return arr.filter(({ name }, ind, arr) => {
        // regexp is matching the exact value from the beginning
        // .replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1") - escaping special characters
        const regex = new RegExp(
            `^${input.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")}`,
            "i"
        );


        // return suggestion if:
        // is input value
        // input value !== suggestion
        // + do not display duplicated suggestion
        return input &&
            input.toLowerCase() !== name.toLowerCase() &&
            arr.findIndex(item => item.name === name) === ind
            ? regex.test(name)
            : "";
    });
}