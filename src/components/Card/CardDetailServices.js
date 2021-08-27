import SanitizedHTML from 'react-sanitized-html';
import { SkeletonLoader } from "components/Loader";

export default function CardDetailServices({
    titleCard,
    data,
    isLoading,
    containerStyle,
    titleStyle,
}) {
    
    const skeleton = (
        <>
            <SkeletonLoader height={25} style={{ marginBottom: 24 }} />
            <SkeletonLoader height={25} style={{ marginBottom: 24 }} />
            <SkeletonLoader height={25} />
        </>
    );

    return (
        <div className="mb-6" style={{ ...containerStyle }}>
            <h2 className="font-bold text-header4 mb-4" style={{ ...titleStyle }}>{titleCard}</h2>
                {!isLoading && (
                    <div className="mb-4">
                        <SanitizedHTML html={ data } />
                    </div>
                )}

                {isLoading && skeleton}
        </div>
    );
}
