
export default function Banner({ name }) {

    const content = {
        name: name,
    };

    return (
        <div className="flex box-border w-full bg-banner-img h-banner bg-cover sm:h-banner-sm">
            <div className="absolute bg-primary w-full opacity-80 h-banner sm:h-banner-sm"></div>
            <span className="absolute font-bold text-white text-banner-mobile py-3.75rem px-1rem sm:text-banner-desktop sm:py-6.25rem sm:px-3.75rem  lg:px-10rem">
                {content.name}
            </span>
        </div>
    )
}