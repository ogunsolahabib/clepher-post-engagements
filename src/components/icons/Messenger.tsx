

export default function Messenger(props: React.SVGAttributes<SVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            {...props}
        >
            <path
                fill="url(#paint0_radial_466_2178)"
                fillRule="evenodd"
                d="M12 0C5.242 0 0 4.953 0 11.64c0 3.496 1.433 6.522 3.768 8.61.194.173.314.42.322.681l.064 2.139a.96.96 0 001.35.847l2.38-1.049a.957.957 0 01.643-.048c1.095.3 2.259.46 3.473.46 6.758 0 12-4.95 12-11.638C24 4.956 18.758 0 12 0z"
                clipRule="evenodd"
            ></path>
            <path
                fill="#F0FBFF"
                fillRule="evenodd"
                d="M4.795 15.045l3.523-5.593a1.801 1.801 0 012.604-.48l2.806 2.103c.259.192.612.192.866-.003l3.787-2.874c.504-.384 1.164.222.828.76l-3.528 5.588a1.8 1.8 0 01-2.604.48l-2.805-2.103a.72.72 0 00-.867.003L5.618 15.8c-.504.384-1.164-.22-.823-.756z"
                clipRule="evenodd"
            ></path>
            <defs>
                <radialGradient
                    id="paint0_radial_466_2178"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="matrix(26.1504 0 0 26.1487 4.62 23.869)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#09F"></stop>
                    <stop offset="0.61" stopColor="#A033FF"></stop>
                    <stop offset="0.935" stopColor="#FF5280"></stop>
                    <stop offset="1" stopColor="#FF7061"></stop>
                </radialGradient>
            </defs>
        </svg>
    );
}

