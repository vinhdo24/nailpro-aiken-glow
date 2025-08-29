import { useEffect } from 'react';

export const StoreLocator = () => {
  useEffect(() => {
    // Configuration for the store locator
    const CONFIGURATION = {
      "locations": [
        {
          "title": "Nail Pro & Spa",
          "address1": "407 Fabian Dr",
          "address2": "Aiken, SC 29803, USA",
          "coords": { "lat": 33.518722781032054, "lng": -81.72403737790987 },
          "placeId": "ChIJZdCToNKy-YgRhTmACqZIZZw"
        }
      ],
      "mapOptions": {
        "center": { "lat": 33.518722781032054, "lng": -81.72403737790987 },
        "fullscreenControl": true,
        "mapTypeControl": false,
        "streetViewControl": false,
        "zoom": 15,
        "zoomControl": true,
        "maxZoom": 17,
        "mapId": ""
      },
      "mapsApiKey": "AIzaSyBFw0Qbyq9zTFTd-tUY6dotiHU1OriOGX4",
      "capabilities": {
        "input": true,
        "autocomplete": true,
        "directions": true,
        "distanceMatrix": true,
        "details": false,
        "actions": false
      }
    };

    // Wait for the component to be defined and configure it
    const configureLocator = async () => {
      await customElements.whenDefined('gmpx-store-locator');
      const locator = document.querySelector('gmpx-store-locator');
      if (locator && (locator as any).configureFromQuickBuilder) {
        (locator as any).configureFromQuickBuilder(CONFIGURATION);
      }
    };

    configureLocator();
  }, []);

  return (
    <div className="w-full h-96 rounded-lg overflow-hidden shadow-luxury border border-border/50">
      <gmpx-store-locator 
        map-id="DEMO_MAP_ID"
        style={{
          width: '100%',
          height: '100%',
          // Custom CSS variables to match the website theme
          '--gmpx-color-surface': 'hsl(var(--background))',
          '--gmpx-color-on-surface': 'hsl(var(--foreground))',
          '--gmpx-color-on-surface-variant': 'hsl(var(--muted-foreground))',
          '--gmpx-color-primary': 'hsl(var(--primary))',
          '--gmpx-color-outline': 'hsl(var(--border))',
          '--gmpx-fixed-panel-width-row-layout': '28.5em',
          '--gmpx-fixed-panel-height-column-layout': '65%',
          '--gmpx-font-family-base': 'inherit',
          '--gmpx-font-family-headings': 'inherit',
          '--gmpx-font-size-base': '0.875rem',
          '--gmpx-hours-color-open': '#188038',
          '--gmpx-hours-color-closed': '#d50000',
          '--gmpx-rating-color': '#ffb300',
          '--gmpx-rating-color-empty': 'hsl(var(--muted))'
        } as React.CSSProperties}
      />
    </div>
  );
};

// Declare the custom element for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'gmpx-store-locator': any;
      'gmpx-api-loader': any;
    }
  }
}