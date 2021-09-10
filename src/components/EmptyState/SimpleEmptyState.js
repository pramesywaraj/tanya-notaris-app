import style from "components/EmptyState/emptystate.module.css";

export default function SimpleEmptyState({ text }) {
    return (
        <div className={style["empty-state-container"]}>
            <p>{text || "Tidak ada data untuk ditampilkan."}</p>
        </div>
    );
}
