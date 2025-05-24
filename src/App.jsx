import Header from "@components/Header";
import Hero from "@components/Hero";

const App = () => {
  return (
    <main className="min-w-screen min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <section className="w-full max-w-[1200px] p-4">
        <Header />
        <Hero />
      </section>
    </main>
  );
};

export default App;
