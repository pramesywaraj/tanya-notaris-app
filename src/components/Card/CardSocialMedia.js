import styles from "components/Card/card.module.css";

import { 
    FacebookShareButton, 
    TwitterShareButton, 
    WhatsappShareButton, 

    FacebookIcon,
    TwitterIcon,
    WhatsappIcon,

} from "react-share";

export default function CardSocialMedia({title, linkUrl, content}) {

    return (
        <div className={styles["detail-social-container"]} >
            <p className="font-bold mb-4">{title}</p>
            <div className="flex flex-row gap-x-8">
                <TwitterShareButton 
                    url={linkUrl}
                    title={content}
                >
                    <TwitterIcon
                        size={40}
                    />
                </TwitterShareButton>
                <FacebookShareButton
                    url={linkUrl}
                    quote={content}
                >
                    <FacebookIcon
                        size={40}
                    />
                </FacebookShareButton>
                <WhatsappShareButton
                    url={linkUrl}
                    title={content}
                >
                    <WhatsappIcon
                        size={40}
                    />
                </WhatsappShareButton>
            </div>
        </div>
    );
}