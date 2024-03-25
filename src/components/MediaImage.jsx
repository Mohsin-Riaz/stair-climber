import { Magnifier, MagnifierContainer } from '@datobs/react-image-magnifiers';
import React, { useState } from 'react';
import { FaMagnifyingGlassPlus } from 'react-icons/fa6';

const MediaImage = (prop) => {
    const { image, label } = prop;
    const [hover, setHover] = useState(false);
    const [show, setShow] = useState(true);
    return (
        <div
            className="media-wrapper"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <FaMagnifyingGlassPlus
                className={'magnify-icon'}
                style={{
                    opacity: hover ? 0.6 : null,
                    display: show ? null : 'none',
                }}
            />
            <MagnifierContainer>
                <Magnifier
                    imageSrc={image}
                    dragToMove={false}
                    onZoomStart={() => setShow(false)}
                    onZoomEnd={() => setShow(true)}
                ></Magnifier>
            </MagnifierContainer>
            <label>{label}</label>
        </div>
    );
};

export default MediaImage;
