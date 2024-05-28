import { FunctionComponent } from "react";
import Marquee from "react-fast-marquee";
import './Marqueee.css';

interface MarqueeeProps {
    direction?: "left" | "right" | "up" | "down";
    size?: string;
}

const Marqueee: FunctionComponent<MarqueeeProps> = ({ direction, size }) => {
    return (
        <Marquee autoFill direction={direction}>
            <span className="marquee" style={{ fontSize: size ? size : "4em" }}>whosleejunghyeok</span>
        </Marquee>
    );
}

export default Marqueee;