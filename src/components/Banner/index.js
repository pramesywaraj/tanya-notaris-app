
export default function Banner({ name }) {

    const content = {
        name: name,
    };

    return (
        <div className="flex box-border w-full bg-banner-img h-banner bg-cover sm:h-banner-sm">
            <div className="absolute bg-primary opacity-80 h-banner w-full sm:h-banner-sm"></div>
            <span className="absolute font-bold text-white text-header3 py-60px px-16px sm:text-header1 sm:py-100px sm:px-60px desktop:px-160px">
                {content.name}
            </span>
        </div>
    )
}