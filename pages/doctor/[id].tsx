/*
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { Fragment, useState } from 'react';
import { Tab } from '@headlessui/react';
import { StarIcon } from '@heroicons/react/20/solid';

const product = {
  name: 'Johnny Sins',
  version: {
    name: 'Cardiolog Ginecolog',
  },
  price: 'Book a session',
  description:
    'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
  highlights: [
    '200+ SVG icons in 3 unique styles',
    'Compatible with Figma, Sketch, and Adobe XD',
    'Drawn on 24 x 24 pixel grid',
  ],
  imageSrc:
    'data:image/jpeg;base64,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',
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

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Doctor() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white">
      <header className="relative bg-white">
        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200"></div>
        </nav>
      </header>

      <main className="mx-auto px-4 pb-24 pt-14 sm:px-6 sm:pb-32 sm:pt-16 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
          <div className="lg:col-span-4 lg:row-end-1">
            <div className="aspect-h-3 aspect-w-3 overflow-hidden rounded-lg bg-gray-100">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="object-cover object-center"
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
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
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
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                {product.price}
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
                        <img
                          src={review.avatarSrc}
                          alt=""
                          className="h-10 w-10 rounded-full bg-gray-100"
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
                          <time dateTime={review.datetime}>{review.date}</time>
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
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="object-cover object-center"
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
                <p className="mt-1 text-sm text-gray-500">{product.category}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
