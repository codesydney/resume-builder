import React from 'react';
import { LuArrowBigRightDash } from 'react-icons/lu';

type Props = {
	currentStep: number;
	numberOfSteps: number;
	stepTitle: string[];
};

export default function BuilderStepper(props: Props) {
	function activeStyle(index: number): boolean {
		return index === props?.currentStep;
	}

	function isFinalStep(index: number): boolean {
		return index === props?.numberOfSteps - 1;
	}
	return (
		<ol className='flex items-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 rtl:space-x-reverse '>
			{Array.from({ length: props?.numberOfSteps }).map(
				(step, index: number) => {
					return (
						<li
							key={index}
							className={`flex items-center ${
								activeStyle(index) ? 'text-blue-600 dark:text-blue-500' : ''
							}`}
						>
							<span
								className={`flex items-center justify-center w-5 h-5 me-2 text-xs border  rounded-full shrink-0 ${
									activeStyle(index)
										? 'border-blue-600 dark:border-blue-500'
										: 'border-gray-500 dark:border-gray-400'
								}`}
							>
								{index + 1}{' '}
							</span>
							{props?.stepTitle[index]}
							<span className='hidden sm:inline-flex sm:ms-2'>Details</span>
							<LuArrowBigRightDash
								className={`text-2xl ml-2 ${index - 1 ? 'hidden' : ''}`}
							/>
						</li>
					);
				}
			)}
		</ol>
	);
}
