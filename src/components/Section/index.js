/* eslint-disable @next/next/no-img-element */
export default function Section({ description, image }) {
    const content = {
        description: description,
        image: image,
    };

    return (
        <div className="flex flex-row gap-x-16px sm:flex-1">
            <img
                src={content.image}
                alt="Section"
                className="rounded-lg h-section-img w-section-img sm:h-section-img-web sm:w-section-img-web"
            />
            <p className={`font-semibold text-body md:text-body1`}>{content.description}</p>
        </div>
    );
}
