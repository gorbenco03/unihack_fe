import { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const options = ['Account settings', 'Support'];

export default function Dropdown({
  slug,
  data,
}: {
  slug: string;
  data: string[];
}) {
  const [slugName, setslugName] = useState(slug);
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          {slugName}
          <ChevronDownIcon
            className="-mr-8 h-5 w-20 text-gray-400"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {data &&
              data.map((el) => {
                return (
                  <Menu.Item key={el}>
                    {({ active }) => (
                      <span
                        onClick={() => {
                          if (active) setslugName(el);
                        }}
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        {el}
                      </span>
                    )}
                  </Menu.Item>
                );
              })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
