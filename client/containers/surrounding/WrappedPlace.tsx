import Place from './Place';

export default function WrappedPlace({ id }: { id: string }) {
  const place: any = {};
  // TODO: fetch data

  return <Place routeText={''} houseText={''} place={place} />;
}
