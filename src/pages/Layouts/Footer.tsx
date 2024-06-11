import { FunctionComponent, useContext, useEffect } from "react";
import './Footer.css';
import FooterLink from "./FooterLink";
import { DeviceContext } from "../../contexts/Device";

const Footer: FunctionComponent = () => {
    const isMobile = useContext(DeviceContext).isMobile;
    useEffect(() => {
        console.log(isMobile)
    }, [isMobile])
    return (
        <footer>
            {/* TODO: 모든 너비에 대해 모든 링크 넣고, 두 줄 가능하게. maybe wrap FooterLink with absolute height.*/}
            <div className="links">
                <FooterLink title="Github" url="https://github.com/wndgur2">
                    <span>Project</span>
                    <span>Study</span>
                    <small>@wndgur2</small>
                </FooterLink>
                <FooterLink title="Email" url="https://mail.google.com/mail/?view=cm&to=dkandjsl@gmail.com">
                    <small>dkandjsl@gmail.com</small>
                </FooterLink>
                <FooterLink title="Youtube" url="https://www.youtube.com/channel/UC0u9muX-t6pTnZhJJxMjh5Q">
                    <span>Vlog</span>
                    <span>Demo videos</span>
                    <small>@junghyeok_lee6710</small>
                </FooterLink>
                {!isMobile && <>
                    <FooterLink title="백준 알고리즘" url="https://www.acmicpc.net/user/wndgur2">
                        <span>Gold1</span>
                        <span>Python, Cpp</span>
                        <small>2021.04 ~</small>
                    </FooterLink>
                </>
                }
            </div>
        </footer>
    );
}

export default Footer;