export default function Paggination({ total, selectedPage }: { total: any[], selectedPage: number }) {
    const selected = 'z-10 bg-indigo-50 text-indigo-600 relative inline-flex items-center px-4 py-2 text-sm font-medium'
    const unselected = 'bg-gray-200 text-gray-500 hover:bg-gray-300 relative inline-flex items-center px-4 py-2 text-sm font-medium'
    return <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
        <button className={unselected}>
            <span className="sr-only">Previous</span>
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
        </button>
        {total.map((_v, i) => <button key={i} className={(i + 1) === selectedPage ? selected : unselected}>
            {i + 1}
        </button>)}
        <button className={unselected}>
            <span className="sr-only">Next</span>
            {/* <!-- Heroicon name: solid/chevron-right --> */}
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
        </button>
    </nav>

}