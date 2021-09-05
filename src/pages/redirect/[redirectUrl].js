import redirect from "nextjs-redirect";
import { useRouter } from "next/router";

export default function Redirect() {
    const router = useRouter();
    const { redirectUrl } = router.query;

    const Redirect = redirect(redirectUrl, { statusCode: 301 });

    return (
        <Redirect>
            <p>mengarahkan...</p>
        </Redirect>
    );
}
