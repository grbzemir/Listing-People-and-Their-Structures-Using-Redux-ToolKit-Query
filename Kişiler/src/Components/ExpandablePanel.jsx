import React from 'react';

import { GoChevronLeft, GoChevronDown } from 'react-icons/go';

import PropTypes from 'prop-types';

function ExpandablePanel({ header, children }) {
    ExpandablePanel.propTypes = {
        header: PropTypes.node.isRequired,
        children: PropTypes.node.isRequired
    };

    return (
        <div className="panelDiv">
            <div className="topArrangement">
                <div className="topArrangement">{header}</div>
                <div>
                    <GoChevronLeft />
                </div>
            </div>

            {children}
        </div>
    );
}

export default ExpandablePanel;
