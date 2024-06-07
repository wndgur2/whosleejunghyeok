import { FunctionComponent } from "react";
import Marquee from "react-fast-marquee";
import './Marqueee.css';
import { useNavigate } from "react-router-dom";

interface MarqueeeProps {
    direction?: "left" | "right" | "up" | "down";
    size?: string;
}

const Marqueee: FunctionComponent<MarqueeeProps> = ({ direction, size }) => {
    const router = useNavigate();
    return (
        <Marquee autoFill direction={direction}>
            <button
                onClick={() => { router(`/`) }}
                className="marqueeBtn"
                style={{ fontSize: size ? size : "4em" }}>
                whosleejunghyeok
            </button>
        </Marquee>
    );
}

export default Marqueee;