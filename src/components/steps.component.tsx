import React from 'react'
import { CheckIcon } from '@heroicons/react/24/solid'
const steps = [
    { id: '1', name: 'Step 1 : Cart Review', href: '#', status: 'complete' },
    { id: '2', name: 'Step 2 : Checkout', href: '#', status: 'complete' },
    { id: '3', name: 'Step 3 : Special Offer', href: '#', status: 'current' },
    { id: '4', name: 'Step 4 : Confirmation', href: '#', status: 'upcoming' },
  ]
const Steps: React.FC = () => {
  return (
    <nav className='flex mt-[60px] w-full justify-center items-center ' aria-label="Progress">
      <ol role="list" className="flex w-[1245px] justify-between ">
        {steps.map((step, stepIdx) => (
          <li key={step.name} className="flex">
            {step.status === 'complete' ? (
              <a href={step.href} className="group lg:w-[240px] flex ">
                 <span className="flex flex-col lg:flex-row items-center  py-4 text-sm font-medium">
                  <span className="flex h-5 w-5 lg:h-10 lg:w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-300 group-hover:bg-green-800">
                    <CheckIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </span>
                  <span className="ml-4 text-sm font-medium text-gray-900">{step.name}</span>
                </span>
              </a>
            ) : step.status === 'current' ? (
              <a href={step.href} className="flex   lg:w-[240px] items-center py-4 text-sm font-medium" aria-current="step">
                <span className="flex h-5 w-5 lg:h-10 lg:w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-indigo-600">
                  <span className="text-indigo-600">{step.id}</span>
                </span>
                <span className="ml-4 text-sm font-bold text-indigo-600">{step.name}</span>
              </a>
            ) : (
              <a href={step.href} className="group  lg:w-[240px] flex items-center">
                <span className="flex items-center  py-4 text-sm font-medium">
                  <span className="flex h-5 w-5 lg:h-10 lg:w-10  flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-300 group-hover:border-gray-400">
                    <span className="text-gray-500 group-hover:text-gray-900">{step.id}</span>
                  </span>
                  <span className="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">{step.name}</span>
                </span>
              </a>
            )}

            {stepIdx !== steps.length - 1 ? (
              <>
                {/* Arrow separator for lg screens and up */}
      
              </>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Steps