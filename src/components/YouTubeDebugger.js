// Code YouTubeDebugger Component Here

import React from 'react';

class YouTubeDebugger extends React.Component {
    constructor() {
        super();

        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        };
    }

    handleChangeBitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        });
    };

    handleChangeResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: '720p'
                }
            }
        });
    };

    render() {
        return (
            <div>
                <button className="bitrate" onClick={this.handleChangeBitrate}>
                    Change Bitrate
                </button>
                <button className="resolution" onClick={this.handleChangeResolution}>
                    Change Resolution
                </button>
            </div>
        );
    }
}

export default YouTubeDebugger;



// Create a YouTubeDebugger React component.
// Initial state has multiple properties (see Learn.co readme)
// Create button with class 'bitrate'. Clicking this button changes
// the settings.bitrate state property to 12.
// Create a button with the class 'resolution'. Clicking this button changes
// the settings.video.resolution state property to '720p'
