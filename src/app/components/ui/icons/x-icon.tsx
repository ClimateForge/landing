type SVGProps = {
    className?: string
}

const XIcon = (props: SVGProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={28}
        height={25}
        fill="none"
        {...props}
    >
        <path
        fill="currentColor"
        d="M21.542.37h4.156l-9.08 10.378L27.3 24.87h-8.365l-6.551-8.565-7.496 8.565H.729l9.712-11.1L.195.37H8.77L14.692 8.2 21.542.37Zm-1.459 22.012h2.303L7.52 2.727H5.05l15.034 19.655Z"
        />
    </svg>
)
export default XIcon