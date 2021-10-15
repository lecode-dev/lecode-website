import React from 'react';
import { AiFillGithub } from 'react-icons/ai';

export default function TeamCard({ person }) {
  return (
    <li className="py-10 px-6 bg-gray-darkest text-center rounded-lg xl:px-10 xl:text-left">
      <div className="space-y-6 xl:space-y-10">
        <img
          className="mx-auto object-cover h-40 w-40 rounded-full xl:w-56 xl:h-56"
          src={person?.imageUrl}
          alt=""
        />
        <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
          <div className="font-medium text-lg leading-6 space-y-1">
            <h3 className="text-white">{person?.name}</h3>
            <p className="text-green-500">{person?.role}</p>
          </div>

          <ul className="flex justify-center space-x-5">
            <li>
              <a
                href={person?.githubUrl}
                className="text-gray-400 hover:text-gray-300"
              >
                <span className="sr-only">GitHub</span>
                <div className="w-6 h-6">
                  {/* margin is for align to the other svg */}
                  <AiFillGithub
                    className="w-full h-full"
                    style={{ marginTop: '-2px' }}
                  />
                </div>
              </a>
            </li>
            <li>
              <a
                href={person.linkedinUrl}
                className="text-gray-400 hover:text-gray-300"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
}
