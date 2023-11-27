import React from "react";
import {IconProps} from "../../index";
import icon from "../../index.module.less";

const Wrong = (props: IconProps) => {
    const {
        className = "", style = {}, onClick = () => {
        }
    } = props;
    const styleClassName: string = `${icon.default} ${className}`;
    return (
        <svg
            viewBox="0 0 1024 1024"
            className={styleClassName}
            style={{
                fill: style.color,
                ...style,
            }}
            onClick={onClick}
            focusable="false"
            data-icon="ayong"
        >
            <path d="M521.894912 45.954048c-261.41696 0-473.341952 211.919872-473.341952 473.339904 0 261.42208 211.924992 473.344 473.341952 473.344 261.419008 0 473.344-211.922944 473.344-473.344C995.239936 257.874944 783.31392 45.954048 521.894912 45.954048zM744.216576 742.58944c-3.61472 3.574784-8.31488 5.382144-13.053952 5.382144s-9.479168-1.80736-13.134848-5.46304L521.892864 545.545216 326.1952 742.107136c-3.61472 3.65568-8.394752 5.46304-13.134848 5.46304s-9.439232-1.80736-13.053952-5.382144c-7.230464-7.230464-7.2704-18.95936-0.079872-26.1888L495.756288 519.30112 299.483136 322.197504c-7.189504-7.230464-7.149568-18.95936 0.079872-26.1888 7.230464-7.149568 18.878464-7.230464 26.1888 0.079872l196.134912 196.963328 195.697664-196.560896c7.230464-7.310336 18.95936-7.230464 26.1888-0.079872 7.230464 7.230464 7.2704 18.95936 0.079872 26.1888L548.02432 519.296l196.273152 197.103616C751.486976 723.63008 751.446016 735.358976 744.216576 742.58944z" fill="#8aabec"/>
        </svg>
    );
};


export default Wrong;
