import React from 'react';
import { useState } from 'react';
import { GoChevronLeft, GoChevronDown } from 'react-icons/go';

import PropTypes from 'prop-types';

function ExpandablePanel({ header, children }) {
    const [expanded, setExpanded] = useState(false);
    const handleClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="panelDiv">
            <div className="topArrangement">
                <div className="topArrangement">{header}</div>
                <div onClick={handleClick}>
                    {expanded ? <GoChevronDown /> : <GoChevronLeft />}
                </div>
            </div>

            {expanded && <div>{children}</div>}
        </div>
    );
}

ExpandablePanel.propTypes = {
    header: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
};

export default ExpandablePanel;
