export default function mergeClassNames(...classNames: Array<string | undefined>) {
    return classNames.filter(Boolean).join(' ');
}