import Pagination from "./components/Pagination";

export default function Home() {
  return <Pagination itemCount={120} pageSize={10} currentPage={2} />;
}
