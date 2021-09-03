// import parse, { domToReact } from "html-react-parser";
import ReactMarkdown from "react-markdown/react-markdown.min";
import style from "components/Card/card.module.css";
import { SkeletonLoader } from "components/Loader";

export default function CardDetailServices({
    titleCard,
    data,
    isLoading,
    containerStyle,
    titleStyle,
}) {
    const skeleton = (
        <div className="mb-6">
            <SkeletonLoader height={30} style={{ marginBottom: 25 }} width={"50%"} />
            <SkeletonLoader count={5} height={20} />
        </div>
    );

    if (!isLoading && (!data || data === "-")) return null;

    return (
        <div className="mb-6" style={{ ...containerStyle }}>
            {!isLoading && (
                <h2 className="font-bold text-header4 mb-4" style={{ ...titleStyle }}>
                    {titleCard}
                </h2>
            )}
            {/* {!isLoading && data && parse(data)} */}
            <div className={style["card-detail-service-container"]}>
                {!isLoading && data && <ReactMarkdown>{data}</ReactMarkdown>}
            </div>
            {isLoading && skeleton}
        </div>
    );
}
