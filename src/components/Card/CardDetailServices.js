import parse, { domToReact } from "html-react-parser";

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

    return (
        <div className="mb-6" style={{ ...containerStyle }}>
            {!isLoading && (
                <h2 className="font-bold text-header4 mb-4" style={{ ...titleStyle }}>
                    {titleCard}
                </h2>
            )}
            {!isLoading && data && parse(data)}

            {isLoading && skeleton}
        </div>
    );
}
