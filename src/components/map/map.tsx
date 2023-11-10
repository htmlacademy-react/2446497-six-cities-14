import { Icon, Marker, layerGroup } from 'leaflet';
import { City, OfferItem, Offers } from '../../types/offers';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';
import { useEffect, useRef } from 'react';
import useMap from '../../hooks/use-map';

type MapProps = {
  cityMap: City;
  offers: Offers;
  selectedPoint?: OfferItem['id'] | null;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [20, 40],
});

export default function Map({ offers, selectedPoint, cityMap }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, cityMap);

  useEffect(() => {
    if (map) {
      map.setView([cityMap.location.latitude, cityMap.location.longitude], cityMap.location.zoom);
    }
  }, [map, cityMap]);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const point = offer.location;
        const marker = new Marker({
          lat: point.latitude,
          lng: point.longitude,
        });

        marker.setIcon(selectedPoint !== null && offer.id === selectedPoint ? currentCustomIcon : defaultCustomIcon).addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, selectedPoint]);

  return <section id='map' ref={mapRef} className='cities__map' style={{ height: '100%' }}></section>;
}
