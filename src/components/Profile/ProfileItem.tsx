import React, { FunctionComponent, useEffect, useRef } from "react";
import "./ProfileItem.css";
import { Link } from "react-router-dom";
import { IconType } from "react-icons";

interface ProfileItemProps {
    title: string;
    children: React.ReactNode;
    url: string;
    icon?: React.ReactNode;
}

const ProfileItem: FunctionComponent<ProfileItemProps> = ({ title, children, url, icon }) => {

    const itemRef = useRef<HTMLAnchorElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const childrenRef = useRef<HTMLDivElement>(null);
    const titleHeightRef = useRef<number>(0);
    const childrenHeightRef = useRef<number>(0);

    const mouseEnter = () => {
        if (!itemRef.current || !childrenRef.current) return;
        itemRef.current.style.height = `calc(3.5em + ${titleHeightRef.current}px + ${childrenHeightRef.current}px)`;
        childrenRef.current.style.opacity = "1";
    }

    const mouseLeave = () => {
        if (!itemRef.current || !childrenRef.current) return;
        itemRef.current.style.height = `calc(2.2em + ${titleHeightRef.current}px)`;
        childrenRef.current.style.opacity = "0";
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

        return () => {
            current.removeEventListener("mouseenter", mouseEnter);
            current.removeEventListener("mouseleave", mouseLeave);
        }
    }, []);

    return (
        <Link className="profile-item" to={url} rel="noreferrer" target="_blank" ref={itemRef}>
            <div className="profile-item-title">
                {icon}
                <h3 ref={titleRef}>{title}</h3>
            </div>
            <div className="profile-item-children" ref={childrenRef}>
                {children}
            </div>
        </Link>
    );
}

export default ProfileItem;