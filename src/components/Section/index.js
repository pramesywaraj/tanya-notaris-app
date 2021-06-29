export default function Section({ description, image }) {

    // const variants = {
    //     "text-large" : `text-section-large font-bold`,
    //     "text-medium" : `text-section-sm`,
    // }

    // const pickedVariant = variants[variant];

    const content = {
        description: description,
        image: image,
    };

    return (
        <div className="flex flex-row gap-x-16px sm:flex-1">
            <img src={content.image} alt="Section Image" className="rounded-lg h-section-img w-section-img sm:h-section-img-web sm:w-section-img-web" />
            <p className={`font-semibold text-section2-mobile md:text-section2-web`}>
                {content.description}
            </p>
        </div>
    )
}