import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const Cookie = () => {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const consent = Cookies.get("cookie_consent");
        if (!consent) {
            setShowBanner(true);
        }
    }, []);

    const handleAccept = () => {
        Cookies.set("cookie_consent", "accepted", { expires: 365 });
        setShowBanner(false);
    };

    const handleReject = () => {
        Cookies.set("cookie_consent", "rejected", { expires: 365 });
        setShowBanner(false);
    };

    if (!showBanner) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 z-50 shadow-lg">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm">
                    We use cookies to improve your experience. By clicking "Accept", you agree to our cookie policy.
                </p>
                <div className="flex gap-3">
                    <button
                        onClick={handleReject}
                        className=" text-primary px-4 py-2 rounded-full outline"
                    >
                        Reject
                    </button>
                    <button
                        onClick={handleAccept}
                        className=" text-secondary px-4 py-2 rounded-full outline"
                    >
                        Accept
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cookie;
