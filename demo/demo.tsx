import * as React from 'react';

import HEREMap from '../src/main.ts';

export default class App extends React.Component<any, any> {
    render() {
        const center = {
            lat: ***REMOVED***,
            lng: ***REMOVED***,
        };

        return (
            <div className="content">
                <HEREMap center={center} zoom={14} appId='***REMOVED***' appCode='***REMOVED***' />
            </div>
        )
    }
}
