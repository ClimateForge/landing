type SVGProps = {
    className?: string
}

function LinkedInIcon(props: SVGProps) {
    return (
        <svg
        width={25}
        height={25}
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        >
        <path
            d="M21.873.37a2.722 2.722 0 012.723 2.722v19.056a2.722 2.722 0 01-2.723 2.722H2.819a2.722 2.722 0 01-2.722-2.722V3.092A2.722 2.722 0 012.818.37h19.055zm-.68 21.097v-7.214a4.437 4.437 0 00-4.437-4.437c-1.157 0-2.505.708-3.158 1.77v-1.511H9.8v11.392h3.798v-6.71a1.9 1.9 0 011.892-1.905 1.906 1.906 0 011.905 1.905v6.71h3.798zM5.377 7.937a2.287 2.287 0 002.286-2.286c0-1.266-1.02-2.3-2.286-2.3a2.3 2.3 0 00-2.3 2.3 2.295 2.295 0 002.3 2.287zm1.892 13.53V10.075h-3.77v11.392h3.77z"
            fill="currentColor"
        />
        </svg>
    )
}

export default LinkedInIcon