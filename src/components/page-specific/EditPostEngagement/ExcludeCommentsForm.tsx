import { useState } from "react"
import Button from "../../ui/Button";
import Tag from "../../ui/Tag";
import Input from "../../ui/Input";

export default function ExcludeCommentsForm() {
    const [words, setWords] = useState<string[]>([]);

    const [inputValue, setInputValue] = useState("");

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (inputValue) {
            setWords([...words, inputValue]);
            setInputValue("");
        }
    }

    function handleRemove(word: string) {
        setWords(words.filter((w) => w !== word))
    }
    return <form onSubmit={handleSubmit} className="form-control">
        <div className="flex flex-col gap-2">
            <label htmlFor="excluded">Exclude comments with these words</label>
            <section className="flex flex-wrap gap-1">
                {words.map((word, index) => <Tag onClose={() => handleRemove(word)} key={index}>
                    {word}
                </Tag>)}
            </section>
            <div className="join">
                <Input type="text" name="excluded" id="excluded" placeholder="Specify keyword" className="input-bordered focus:outline-0 join-item w-full" autoComplete="off" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <Button className="join-item" type="submit">
                    Add Keyword
                </Button>
            </div>
        </div>
    </form>
}