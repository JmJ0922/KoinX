import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef();
  const scriptAdded = useRef(false); 

  useEffect(() => {

    if (!scriptAdded.current) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "autosize": true,
          "symbol": "BITSTAMP:BTCUSD",
          "interval": "60",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "2",
          "locale": "en",
          "enable_publishing": false,
          "allow_symbol_change": true,
          "calendar": false,
          "hide_volume": true,
          "support_host": "https://www.tradingview.com"
        }`;

      container.current.appendChild(script);
      scriptAdded.current = true; 
    }
  }, []);

  return (
    <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
    </div>
  );
}

export default memo(TradingViewWidget);
