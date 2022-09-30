import clsx from 'clsx'
import { useState } from 'react'

interface FmbaContainerProps {
  infomat: number
}

export const FmbaContainer = ({ infomat }: FmbaContainerProps) => {
  const [loading, setLoading] = useState(true)
  return (
    <div className="flex-1 flex justify-center items-center overflow-hidden">
      <iframe
        onLoad={() => setLoading(false)}
        sandbox={'allow-scripts'}
        src={`https://reg.fmba.gov.ru/infomt/${infomat}`}
        className={clsx('h-full w-full ', loading && 'hidden')}
      />
      <div className={clsx(!loading && 'hidden', 'flex flex-col gap-4')}>
        <svg
          className="animate-spin -ml-1 mr-3 h-20 w-20 text-blue-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        <div className="text-lg font-semibold text-blue-600">Загрузка...</div>
      </div>
    </div>
  )
}
