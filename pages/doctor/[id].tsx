import { Fragment, useState } from 'react';
import { Tab } from '@headlessui/react';
import { StarIcon } from '@heroicons/react/20/solid';
import { Header } from '../../sections/header/header.section';
import { BookingForm } from '../../components/booking/bookingForm.component';
import Image from 'next/image';
import clsx from 'clsx';
import { useRouter } from 'next/router';

const product = {
  name: 'Doctor01',
  version: {
    name: 'Cardiolog',
  },
  price: 'Book a session',
  description:
    'Experienta 20 de ani in domeniul cardiologiei, absolent UMFT promotia 2002',
  highlights: ['Rapid', 'Eficient', 'Ieftin'],
  imageSrc: '',
  imageAlt:
    'Sample of 30 icons with friendly and fun details in outline, filled, and brand color styles.',
};

const reviews = {
  average: 4,
  featured: [
    {
      id: 1,
      rating: 5,
      content: `
        <p>This icon pack is just what I need for my latest project. There's an icon for just about anything I could ever need. Love the playful look!</p>
      `,
      date: 'July 16, 2021',
      datetime: '2021-07-16',
      author: 'Emily Selman',
      avatarSrc:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    },
    {
      id: 2,
      rating: 5,
      content: `
        <p>Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.</p>
      `,
      date: 'July 12, 2021',
      datetime: '2021-07-12',
      author: 'Hector Gibbons',
      avatarSrc:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    },
    // More reviews...
  ],
};
const faqs = [
  {
    question: 'What format are these icons?',
    answer:
      'The icons are in SVG (Scalable Vector Graphic) format. They can be imported into your design tool of choice and used directly in code.',
  },
  {
    question: 'Can I use the icons at different sizes?',
    answer:
      "Yes. The icons are drawn on a 24 x 24 pixel grid, but the icons can be scaled to different sizes as needed. We don't recommend going smaller than 20 x 20 or larger than 64 x 64 to retain legibility and visual balance.",
  },
  // More FAQs...
];

const relatedProducts = [
  {
    id: 1,
    name: 'Biochemostry',
    category: 'Analisys',
    href: '#',
    price: '$49',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-05-related-product-01.jpg',
    imageAlt:
      'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
  },
  // More products...
];
export interface IDoctor {
  email: string;
  username: string;
  phone: string;
  doctorType: string;
  id: string;
}

// export async function getStaticPaths() {
//   const docts = await fetch('http://localhost:3002/doctors');
//   const data: [
//     {
//       email: string;
//       username: string;
//       phone: string;
//       doctorType: string;
//       id: string;
//     }
//   ] = await docts.json();
//   const paths = data.map((post) => ({
//     params: { id: post.id },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// }

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Doctor() {
  const [open, setOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [post, setPost] = useState(false);
  const router = useRouter();
  console.log(router.query.id);

  // if (!param) {
  //   const res = fetch(`localhost:3002/doctor/${param}`).then((res) => res);
  //   setPost(res.json());
  // }

  return (
    <>
      <div className="w-200 z-20 px-16 rounded-lg bg-gray-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {showForm ? <BookingForm /> : null}
      </div>
      <Header />

      <div
        className={clsx('bg-white mt-10')}
        style={{
          filter: showForm ? 'blur(4px)' : 'none',
        }}
      >
        <main className="mx-auto px-4 pb-24 pt-14 sm:px-6 sm:pb-32 sm:pt-16 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
            <div className="lg:col-span-4 lg:row-end-1">
              <div className="aspect-h-3 aspect-w-3 overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="object-cover object-center aspect-h-3 aspect-w-3"
                  width={200}
                  height={200}
                />
              </div>
            </div>

            <div className="mx-auto mt-14 max-w-2xl sm:mt-16 lg:col-span-3 lg:row-span-2 lg:row-end-2 lg:mt-0 lg:max-w-none">
              <div className="flex flex-col-reverse">
                <div className="mt-4">
                  <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                    {product.name}
                  </h1>

                  <h2 id="information-heading" className="sr-only">
                    Product information
                  </h2>
                  <p className="mt-2 text-sm text-gray-500">
                    {product.version.name}{' '}
                  </p>
                </div>

                <div>
                  <h3 className="sr-only">Reviews</h3>
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          reviews.average > rating
                            ? 'text-yellow-400'
                            : 'text-gray-300',
                          'h-5 w-5 flex-shrink-0'
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">{reviews.average} out of 5 stars</p>
                </div>
              </div>

              <p className="mt-6 text-gray-500">{product.description}</p>
              <div className="mt-10 border-t border-gray-200 pt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>
                <div className="prose prose-sm mt-4 text-gray-500">
                  <ul role="list">
                    {product.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => setShowForm(!showForm)}
                  className="mb-4 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                >
                  Programează-te
                </button>
              </div>
            </div>

            <div className="mx-auto mt-16 w-full max-w-2xl lg:col-span-4 lg:mt-0 lg:max-w-none">
              <Tab.Group as="div">
                <div className="border-b border-gray-200">
                  <Tab.List className="-mb-px flex space-x-8">
                    <Tab
                      className={({ selected }) =>
                        classNames(
                          selected
                            ? 'border-indigo-600 text-indigo-600'
                            : 'border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-800',
                          'whitespace-nowrap border-b-2 py-6 text-sm font-medium'
                        )
                      }
                    >
                      Customer Reviews
                    </Tab>
                    <Tab
                      className={({ selected }) =>
                        classNames(
                          selected
                            ? 'border-indigo-600 text-indigo-600'
                            : 'border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-800',
                          'whitespace-nowrap border-b-2 py-6 text-sm font-medium'
                        )
                      }
                    >
                      FAQ
                    </Tab>
                  </Tab.List>
                </div>
                <Tab.Panels as={Fragment}>
                  <Tab.Panel className="-mb-10">
                    <h3 className="sr-only">Customer Reviews</h3>

                    {reviews.featured.map((review, reviewIdx) => (
                      <div
                        key={review.id}
                        className="flex space-x-4 text-sm text-gray-500"
                      >
                        <div className="flex-none py-10">
                          <Image
                            src={review.avatarSrc}
                            alt=""
                            className="h-10 w-10 rounded-full bg-gray-100"
                            width={40}
                            height={40}
                          />
                        </div>
                        <div
                          className={classNames(
                            reviewIdx === 0 ? '' : 'border-t border-gray-200',
                            'flex-1 py-10'
                          )}
                        >
                          <h3 className="font-medium text-gray-900">
                            {review.author}
                          </h3>
                          <p>
                            <time dateTime={review.datetime}>
                              {review.date}
                            </time>
                          </p>

                          <div className="mt-4 flex items-center">
                            {[0, 1, 2, 3, 4].map((rating) => (
                              <StarIcon
                                key={rating}
                                className={classNames(
                                  review.rating > rating
                                    ? 'text-yellow-400'
                                    : 'text-gray-300',
                                  'h-5 w-5 flex-shrink-0'
                                )}
                                aria-hidden="true"
                              />
                            ))}
                          </div>
                          <p className="sr-only">
                            {review.rating} out of 5 stars
                          </p>

                          <div
                            className="prose prose-sm mt-4 max-w-none text-gray-500"
                            dangerouslySetInnerHTML={{ __html: review.content }}
                          />
                        </div>
                      </div>
                    ))}
                  </Tab.Panel>

                  <Tab.Panel className="text-sm text-gray-500">
                    <h3 className="sr-only">Frequently Asked Questions</h3>

                    <dl>
                      {faqs.map((faq) => (
                        <Fragment key={faq.question}>
                          <dt className="mt-10 font-medium text-gray-900">
                            {faq.question}
                          </dt>
                          <dd className="prose prose-sm mt-2 max-w-none text-gray-500">
                            <p>{faq.answer}</p>
                          </dd>
                        </Fragment>
                      ))}
                    </dl>
                  </Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
            </div>
          </div>

          {/* Related products */}
          <div className="mx-auto mt-24 max-w-2xl sm:mt-32 lg:max-w-none">
            <div className="flex items-center justify-between space-x-4">
              <h2 className="text-lg font-medium text-gray-900">
                Analises you might need
              </h2>
              <a
                href="#"
                className="whitespace-nowrap text-sm font-medium text-indigo-600 hover:text-indigo-500"
              >
                View all
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
              {relatedProducts.map((product) => (
                <div key={product.id} className="group relative">
                  <div className="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-gray-100">
                    <Image
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="object-cover object-center"
                      width={200}
                      height={200}
                    />
                    <div
                      className="flex items-end p-4 opacity-0 group-hover:opacity-100"
                      aria-hidden="true"
                    >
                      <div className="w-full rounded-md bg-white bg-opacity-75 px-4 py-2 text-center text-sm font-medium text-gray-900 backdrop-blur backdrop-filter">
                        View Product
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900">
                    <h3>
                      <a href="#">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p>{product.price}</p>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.category}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
