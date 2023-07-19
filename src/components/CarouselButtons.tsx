"use client"

const CarouselButtons = () => {

    function handleCarouselClick(e: any) {
        const id = e.target.id;
        const slides = document.querySelector("[data-slides]")!
        const activeSlide = slides.querySelector("[data-active]")!

        // verify if go to next or prev slide
        let offset = id === "next" ? 1 : -1

        // get new index from slides array
        let newIndex = Array.from(slides.children || []).indexOf(activeSlide) + offset

        // if < 0, new index will be the last, if >= length, new index will be the first
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        // insert new index slide to data-active and delete the current
        const newSlide = slides.children[newIndex];
        if (newSlide instanceof HTMLElement) newSlide.dataset.active = "true"

        delete (activeSlide as HTMLElement).dataset.active
    }

    return (
        <>
            <button id="prev" onClick={handleCarouselClick} className="carousel-btn prev">&#8678;</button>
            <button id="next" onClick={handleCarouselClick} className="carousel-btn next">&#8680;</button>
        </>
    );
}

export default CarouselButtons;