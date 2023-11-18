import { Fragment, useState } from 'react';
import {
  FaceSmileIcon as FaceSmileIconOutline,
  PaperClipIcon,
} from '@heroicons/react/24/outline';
import { Listbox, Transition } from '@headlessui/react';
import {
  FaceFrownIcon,
  FaceSmileIcon as FaceSmileIconMini,
  FireIcon,
  HandThumbUpIcon,
  HeartIcon,
  XMarkIcon,
} from '@heroicons/react/20/solid';
import { Header } from '../sections/header/header.section';
import { Footer } from '../sections/footer/footer.section';

export default function Chatbot() {
  return (
    <>
      <Header></Header>
      <div className="w-full m-10 p-10 flex items-center justify-center ">
        <div className="bg-white shadow-lg  rounded-lg max-w-md">
          <div className="border-b-2 px-2 py-4">
            <div className="inline-flex items-center">
              <span className="ml-8">Asistenta Virtuala</span>
            </div>
          </div>
          <div className="h-80 flex flex-col space-y-4 max-w-md px-2 mb-2 mt-2 ">
            <div className="flex flex-col items-start">
              <span className="bg-blue-500 px-2 py-4 rounded-b-xl mt-2 mb-2 rounded-tl-xl">
                How I Can Help?{' '}
              </span>
            </div>

            <div className="flex flex-col items-end">
              <span className="bg-gray-500 px-3 py-4 mt-2 mb-2 rounded-b-xl rounded-tr-xl">
                It is nice to meeet you again
              </span>
            </div>
          </div>
          <div className="border-t-4  py-4 px-4">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0"></div>
              <div className="min-w-0 flex-1">
                <form action="#">
                  <div className="border-b border-gray-200 focus-within:border-indigo-600">
                    <label htmlFor="comment" className="sr-only">
                      Add your comment
                    </label>
                    <textarea
                      rows={3}
                      name="comment"
                      id="comment"
                      className="block w-full resize-none border-0 border-b border-transparent p-0 pb-2 text-gray-900 placeholder:text-gray-400 focus:border-indigo-600 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Add your comment..."
                      defaultValue={''}
                    />
                  </div>
                  <div className="flex flex-col items-end pt-2">
                    <div>
                      <button
                        type="submit"
                        className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Post
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
