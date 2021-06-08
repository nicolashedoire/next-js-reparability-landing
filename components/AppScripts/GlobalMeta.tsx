/* eslint-disable react/no-danger */
import React, { FC } from "react";

const GlobalMeta: FC = () => (
  <>
    <meta charSet="UTF-8" key="charset" />
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1"
      key="viewport"
    />
    <link
      rel="apple-touch-icon"
      href={`/assets/favicon/apple-touch-icon.png`}
      key="apple"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href={`/assets/favicon/favicon-32x32.png`}
      key="icon32"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href={`/assets/favicon/favicon-16x16.png`}
      key="icon16"
    />
    <link rel="icon" href={`/assets/favicon/favicon.ico`} key="favicon" />
    <link rel="manifest" href={`/assets/favicon/site.webmanifest`} />
    <script src="https://apis.google.com/js/platform.js" />
    <script
      type="text/javascript"
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDerKoPa1GyCSiLj0eLIFN41bnDZyEp56E&libraries=places"
    ></script>
  </>
);

export default GlobalMeta;
