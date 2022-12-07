import Movies from '../components/Movies';
import Slider from '../components/Slider';

export default function Home() {
  return (
    <main className="bg-slate-50">
      <Slider />
      <Movies />
    </main>
  );
}
