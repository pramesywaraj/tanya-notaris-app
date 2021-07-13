import Highlight from "components/Artikel/Highlight";
import { Search } from "components/Search";

export default function index() {

    return (
        <>
            <div className="flex justify-betwe">
                <h1>Artikel Notaris</h1>
                <Search classNames="text-header1 font-bold" />
            </div>
            <Highlight />
        </>
    )
}
