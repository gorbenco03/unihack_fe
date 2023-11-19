import Link from 'next/link';
import Dropdown from '../dropdown/dropdown.component';

export function Drpdwontxt() {
  return (
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Caută medicul care ți-se potrivește
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Spune-ne simptomele la Asistenta Virtuală și găsește medicul potrivit
          {'  '}
          <Link href="/chatbot">
            <span className="text-2xl font-bold underline">AICI</span>
          </Link>
        </p>
        <p className="text-lg leading-8 text-gray-600">sau selecteaza direct</p>
        <div className="mt-6 flex items-center justify-center gap-x-6">
          <div className="flex space-x-4 flex-col sm:flex-row gap-y-4 sm:gap-y-0 justify-between w-[500px]">
            <Dropdown slug="Tip" data={['Doctor', 'Serviciu']} />
            <Dropdown
              slug="Orasul"
              data={[
                'Chisinau',
                'Timisoara',
                'Budapesta',
                'Bucuresti',
                'Paris',
              ]}
            />
            <Dropdown
              slug="Domeniul"
              data={[
                'Stomatolog',
                'Pediatru',
                'Cosmetolog',
                'Neurolog',
                'Chirurg',
              ]}
            />
            <Link
              href="/doctors"
              className="rounded-md bg-indigo-600 px-3 py-[7px] text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Cauta
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
