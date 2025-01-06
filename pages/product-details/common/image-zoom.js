import React from 'react';
import { Media } from 'reactstrap';

const ImageZoom = (props) => {
    const { image,path } = props;

    return (
        <Media src={path?path:`${image.src}`} alt={image.alt} className="img-fluid image_zoom_cls-0" />
    );
}

export default ImageZoom;
