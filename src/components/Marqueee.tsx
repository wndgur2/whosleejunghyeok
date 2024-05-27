import { FunctionComponent } from "react";
import Marquee from "react-fast-marquee";
import './Marqueee.css';

interface MarqueeeProps {
    direction?: "left" | "right" | "up" | "down";
}

const Marqueee: FunctionComponent<MarqueeeProps> = ({ direction }) => {
    return (
        <Marquee autoFill direction={direction}>
            <span className="marquee">whosleejunghyeok</span>
        </Marquee>
    );
}

export default Marqueee;