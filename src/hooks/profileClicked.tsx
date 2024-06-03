import { useState } from "react";

const useProfileClicked = () => {
    const [clickCount, setClickCount] = useState(0);

    const handleclickCount = () => {
        setClickCount(clickCount + 1);
    };

    return { clickCount, handleclickCount };
}

export default useProfileClicked