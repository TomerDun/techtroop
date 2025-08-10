

import { useState } from "react"



export default function Ex1() {
    const [images, setImages] = useState(
        [
            "https://hips.hearstapps.com/hmg-prod/images/lychee-fruit-sugar-1530136136.jpg?crop=1xw:1xh;center,top&resize=640:*",
            "https://hips.hearstapps.com/hmg-prod/images/mango-fruit-sugar-1530136260.jpg?crop=1xw:1xh;center,top&resize=640:*",
            "https://hips.hearstapps.com/hmg-prod/images/cherries-sugar-fruit-1530136329.jpg?crop=1xw:1xh;center,top&resize=640:*",
        ]
    )
    const [currentImg, setCurrentImg] = useState(0);

    function changeImage(changeBy) {
        let newIndex = currentImg + changeBy;
        if (newIndex >= images.length) newIndex = 0;
        else if (newIndex < 0) newIndex = images.length - 1;

        setCurrentImg(newIndex);
    }


    return (
        <div>
            <button onClick={() => changeImage(-1)}>Prev</button>
            <div className="img-container">
                <img src={images[currentImg]} alt="image" />
            </div>
            <button onClick={() => changeImage(1)}>Next</button>
        </div>
    )
}