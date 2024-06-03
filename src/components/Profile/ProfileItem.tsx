import React, { FunctionComponent, useEffect, useRef } from "react";
import "./ProfileItem.css";
import { Link } from "react-router-dom";

interface ProfileItemProps {
    title: string;
    children: React.ReactNode;
    url: string;
}

const ProfileItem: FunctionComponent<ProfileItemProps> = ({ title, children, url }) => {

    const itemRef = useRef<HTMLAnchorElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const childrenRef = useRef<HTMLDivElement>(null);
    const titleHeightRef = useRef<number>(0);
    const childrenHeightRef = useRef<number>(0);
    const paddingRef = useRef<number>(1.1);
    const hoveredPaddingRef = useRef<number>(1.6);

    const mouseEnter = () => {
        if (!itemRef.current || !childrenRef.current || !titleRef.current) return;
        itemRef.current.style.height = `calc(${hoveredPaddingRef.current * 2}em + ${titleHeightRef.current}px + ${childrenHeightRef.current}px)`;
        childrenRef.current.style.opacity = "1";
        titleRef.current.classList.add("hovered");
    }

    const mouseLeave = () => {
        if (!itemRef.current || !childrenRef.current || !titleRef.current) return;
        itemRef.current.style.height = `calc(${paddingRef.current * 2}em + ${titleHeightRef.current}px)`;
        childrenRef.current.style.opacity = "0";
        titleRef.current.classList.remove("hovered");
    }

    useEffect(() => {
        //get heights
        if (!titleRef.current || !childrenRef.current || !itemRef.current) return;
        titleHeightRef.current = titleRef.current.getBoundingClientRect().height;
        childrenHeightRef.current = childrenRef.current.getBoundingClientRect().height;
        itemRef.current.style.height = `calc(2.2em + ${titleHeightRef.current}px)`;


        const current = itemRef.current;
        current.addEventListener("mouseenter", mouseEnter);
        current.addEventListener("mouseleave", mouseLeave);
        current.addEventListener("touchstart", mouseEnter);

        return () => {
            current.removeEventListener("mouseenter", mouseEnter);
            current.removeEventListener("mouseleave", mouseLeave);
            current.removeEventListener("touchstart", mouseEnter);
        }
    }, []);

    return (
        <Link className="profile-item" to={url} rel="noreferrer" target="_blank" ref={itemRef}>
            <div className="profile-item-title">
                <h3 ref={titleRef}>{title} </h3>
            </div>
            <div className="profile-item-children" ref={childrenRef}>
                {children}
            </div>
        </Link>
    );
}

export default ProfileItem;