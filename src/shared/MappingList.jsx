export default function MappingList({ Component, getData }) {
  const List = getData.map((item) => <Component key={item.id} item={item} />);
  return <>{List}</>;
}
