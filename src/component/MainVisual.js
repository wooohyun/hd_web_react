import Slider from "react-slick";


const MainVisual = () => {
    const setting = {
        dots: true,
        arrows: false,
    }
    return (
        <section className='MainVisual'>
        <Slider {...setting} ref={mainSlide}>
            {
                SLIDE.map((slide, idx) => {
                    return (
                        <figure key={slide.id} className={'itm0' + slide.id + (idx === IDX ? ' on' : '')}>
                            <div className="inner">
                                <h2>{slide.content}</h2>
                                <p>{slide.desc}</p>
                                <a href={slide.link} target="_blank">VIEW MORE</a>
                            </div>
                        </figure>
                    )
                })
            }
        </Slider>
        <div className="slideNum">
            0{IDX + 1}<span> / 0{SLIDE.length}</span>
        </div>
        <ul className="slideTab">
            {
                SLIDE.map((dots, idx) => {
                    return (
                        <li key={dots.id} className={idx === IDX ? ' on' : ''}>{dots.content}</li>
                    )
                })
            }
        </ul>
        <div className="slideArrows">
            <button onClick={() => mainSlide.current.slickPrev()}><i className='xi-arrow-left'></i></button>
            <button onClick={() => mainSlide.current.slickNext()}><i className='xi-arrow-right'></i></button>
        </div>
    </section>
    )
}
export default MainVisual;