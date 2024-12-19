export function Background() {
    return (
        <div className="fixed inset-0 bg-[#000913] overflow-hidden">
            <svg
                className="absolute w-full h-full opacity-5"
                viewBox="0 0 100 200"
                preserveAspectRatio="xMidYMid slice"
            >
                <path 
                    d="M 50 50 C 20 50 20 80 50 80 C 80 80 80 50 50 50"
                    stroke="white"
                    strokeWidth="0.5"
                    fill="none"
                />
            </svg>
        </div>
    )
}