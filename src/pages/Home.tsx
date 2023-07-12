import { Footer } from '../layouts/Footer';

export const Home = () => (
  <>
    <h2 className="text-xl text-blue-600">red ress</h2>

    <div className="flex justify-between items-center h-[calc(100vh-80px)] max-w-7xl mx-auto ">
      <div>
        <h1 className="text-6xl font-black text-primary mb-2">hello world</h1>
        <p className="text-secondary font-semibold text-xl">
          Effortless communication at your fingertips
        </p>
        <div className="text-primary mt-20">
          <p>Bluetooth 5.2 for easy, secure communication</p>
          <p>Precise 143 Amoled display for clear visuals</p>
        </div>
      </div>
    </div>
    <div className="mb-96">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl font-black text-primary uppercase mt-10">
          The future of tech is here
        </h1>
      </div>
    </div>
    <Footer />
  </>
);
