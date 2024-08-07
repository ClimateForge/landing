type SVGProps = {
    className?: string
}

function FacebookIcon(props: SVGProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={26}
            height={25}
            fill="none"
            {...props}
        >
            <path
            fill="currentColor"
            d="M25.495 12.695C25.495 5.888 19.977.37 13.171.37 6.364.37.846 5.888.846 12.695c0 6.152 4.507 11.25 10.399 12.175v-8.612h-3.13v-3.563h3.13V9.98c0-3.09 1.84-4.795 4.655-4.795 1.349 0 2.759.24 2.759.24v3.033h-1.554c-1.531 0-2.009.95-2.009 1.925v2.312h3.419l-.547 3.563h-2.872v8.612c5.892-.924 10.4-6.023 10.4-12.175Z"
            />
        </svg>
    )
}

export default FacebookIcon