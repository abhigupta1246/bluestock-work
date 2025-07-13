import Header from './components/Header';
import IPOCard from './components/IPOCard';
import ipoData from './data/ipoData';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 w-full m-0 p-0">
      <Header />
      <main className="min-h-screen bg-gray-50 py-6 sm:py-10">
        {/* IPO Grid with Title/Description Above First Card */}
        <div className="w-full px-[15px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[10px] gap-y-[10px] w-full">
            {/* Section Title & Description as a full-width grid item */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-3 mb-6 sm:mb-10 text-left px-7">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-1 sm:mb-2 tracking-tight text-left">Upcoming IPO</h1>
              <p className="text-gray-500 text-sm sm:text-base text-left">Explore the latest upcoming IPOs. Stay up-to-date with fresh details including price bands, open/close dates, and more as disclosed by the companies listed.</p>
            </div>
            {ipoData.map((ipo, idx) => (
              <IPOCard key={idx} {...ipo} logoUrl={ipo.logoUrl} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
