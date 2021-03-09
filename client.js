// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Surface} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  const balsaInfo = new Surface(
      100,
      100,
      Surface.SurfaceShape.flat
  );
  balsaInfo.setAngle(-1.4, 0.3)

  r360.renderToSurface(
      r360.createRoot('infoPanel', {}),
      balsaInfo
  );

  const matanzaInfo = new Surface(
      100,
      100,
      Surface.SurfaceShape.Flat
  );
  matanzaInfo.setAngle(1.5, 0.2)

  r360.renderToSurface(
      r360.createRoot('infoPanel', {}),
      matanzaInfo
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('louvre.jpg'));
}

window.React360 = {init};
