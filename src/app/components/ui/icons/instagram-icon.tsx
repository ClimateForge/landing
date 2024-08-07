type SVGProps = {
    className?: string
}

const InstagramIcon = (props: SVGProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={26}
        height={25}
        fill="none"
        {...props}
    >
        <path
        fill="currentColor"
        d="M8.005.37h10.29A7.11 7.11 0 0 1 25.4 7.475v10.29a7.105 7.105 0 0 1-7.105 7.105H8.005A7.11 7.11 0 0 1 .9 17.765V7.475A7.105 7.105 0 0 1 8.005.37ZM7.76 2.82a4.41 4.41 0 0 0-4.41 4.41v10.78a4.407 4.407 0 0 0 4.41 4.41h10.78a4.41 4.41 0 0 0 4.41-4.41V7.23a4.407 4.407 0 0 0-4.41-4.41H7.76Zm11.822 1.838a1.531 1.531 0 1 1 0 3.062 1.531 1.531 0 0 1 0-3.062ZM13.15 6.495a6.125 6.125 0 1 1 0 12.25 6.125 6.125 0 0 1 0-12.25Zm0 2.45a3.675 3.675 0 1 0 0 7.35 3.675 3.675 0 0 0 0-7.35Z"
        />
    </svg>
)
export default InstagramIcon