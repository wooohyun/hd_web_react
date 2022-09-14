import TopBanner from "./TopBanner";

const NAVLINK = [
    { id: 1, menu: "기업정보", link: '/' },
    { id: 2, menu: "솔루션", link: '/' },
    { id: 3, menu: "서비스", link: '/' },
    { id: 4, menu: "혁신기술", link: '/' },
    { id: 5, menu: "고객지원", link: '/' },
]

const Header = () => {
    return (
        <header className="Header">
            <TopBanner />
            <div className="hd_wrap">
                <h1>
                    <a href="/">
                        현대엘리베이트
                    </a>
                </h1>
                <nav className="Gnb inner">
                    <ul>
                        {
                            NAVLINK.map((it, idx) => {
                                return (
                                    <li key={it.id}>
                                        <a href={it.link}> {it.menu} </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className="top_service">
                        <ul className="project">
                            <li><a href="#!">주요프로젝트</a></li>
                            <li><a href="#!">IR</a></li>
                        </ul>
                        <div className="lang">
                            <strong><i className="xi-globus"></i> KOR <i className="xi-angle-down arrow"></i></strong>
                            <ul className="lang_box">
                                <li><a href="#!">KOR</a></li>
                                <li><a href="#!">ENG</a></li>
                                <li><a href="#!">CHN</a></li>
                            </ul>
                        </div>
                        <div className="top_search">
                            <strong><i className="xi-search"></i></strong>
                            <div className="search_box">

                                <form action="#!">
                                    <input type="text" placeholder="검색어를 입력하세요" required />
                                    <button>
                                        <i className="xi-search"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;