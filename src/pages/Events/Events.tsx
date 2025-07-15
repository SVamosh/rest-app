
import "./style.css";
import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { events } from './../../services/eventsList';


function Events() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 35 });

    const scrollPrev = useCallback(() => {
      if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi]);
  
    const scrollNext = useCallback(() => {
      if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi]);

    const slider = events.map(({id, name, description, img}) => {
        return (
            <div className="embla__slide" key={id}>
                <div className="slide__info">
                    <h3 className="slide__header">{name}</h3>
                    <p className="slide__text">{description}</p>
                </div>
                <img className="slide__img" src={img} alt={name} />
            </div>
        );
    })

    return (
        <div className="embla container">
            <button className="embla__prev" onClick={scrollPrev}>&#9668;</button>
            <button className="embla__next" onClick={scrollNext}>&#9658;</button>
            
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slider}
                </div>
            </div>
        </div>
    )
}

export { Events };