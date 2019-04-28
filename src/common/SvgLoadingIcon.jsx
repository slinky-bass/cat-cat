import React from 'react';

const SvgLoadingIcon = () => (
    <div className="loader-icon-container">
        <svg version="1.1" id="Layer_1" className='circular-loader-background' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50" enableBackground="new 0 0 50 50">
            <g>
                <circle fill="#E4E4E4" cx="25" cy="2.9" r="2.9" />
                <circle fill="#E4E4E4" cx="25" cy="47.1" r="2.9" />
                <ellipse transform="matrix(0.5 -0.866 0.866 0.5 12.9082 34.1506)" fill="#E4E4E4" cx="36" cy="5.9" rx="2.9" ry="2.9" />
                <ellipse transform="matrix(0.5 -0.866 0.866 0.5 -31.2095 34.1506)" fill="#E4E4E4" cx="14" cy="44.1" rx="2.9" ry="2.9" />
                <ellipse transform="matrix(0.866 -0.5 0.5 0.866 -1.0765 23.9235)" fill="#E4E4E4" cx="44.1" cy="14" rx="2.9" ry="2.9" />
                <ellipse transform="matrix(0.866 -0.5 0.5 0.866 -17.2247 7.7753)" fill="#E4E4E4" cx="5.9" cy="36" rx="2.9" ry="2.9" />
                <circle fill="#E4E4E4" cx="47.1" cy="25" r="2.9" />
                <circle fill="#E4E4E4" cx="2.9" cy="25" r="2.9" />
                <ellipse transform="matrix(0.5 -0.866 0.866 0.5 -9.1506 56.2095)" fill="#E4E4E4" cx="44.1" cy="36" rx="2.9" ry="2.9" />
                <ellipse transform="matrix(0.5 -0.866 0.866 0.5 -9.1506 12.0918)" fill="#E4E4E4" cx="5.9" cy="14" rx="2.9" ry="2.9" />
                <ellipse transform="matrix(0.866 -0.5 0.5 0.866 -17.2247 23.9235)" fill="#E4E4E4" cx="36" cy="44.1" rx="2.9" ry="2.9" />
                <ellipse transform="matrix(0.866 -0.5 0.5 0.866 -1.0765 7.7753)" fill="#E4E4E4" cx="14" cy="5.9" rx="2.9" ry="2.9" />
            </g>
        </svg>
        <svg version="1.1" id="Layer_1" className='circular-loader-path' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50" enableBackground="new 0 0 50 50">
            <path className='loader-path' fill="none" stroke="#006341" strokeWidth="6" strokeLinecap="round" d="M47,25c0,12.2-9.8,22-22,22" />
        </svg>
    </div>
);

export default SvgLoadingIcon;