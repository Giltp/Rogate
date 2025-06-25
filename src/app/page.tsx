import Carousel from '@/components/Carousel';
import SectionTitle from '@/components/SectionTitle';

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      {/* Brand Title */}
      <div className="mt-16">
        <h1 className="text-5xl font-serif text-primary tracking-wide">Rogate</h1>
      </div>

      {/* Carousel Section */}
      <div className="mt-12">
        <Carousel />
      </div>

      {/* Catalogue Preview Section */}
      <div className="mt-24 w-full max-w-6xl">
        <SectionTitle title="Explore Our Collections" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center text-sm text-gray-600">
            Rogate Handmade Jewelry
          </div>
          <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center text-sm text-gray-600">
            Rogate Kids Clothes
          </div>
          <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center text-sm text-gray-600">
            Rogate Fashion
          </div>
        </div>
      </div>
    </main>
  );
}
