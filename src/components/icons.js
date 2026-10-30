const DEFAULT_SIZE = 32;

export function PhoneIcon({color="#000", size=DEFAULT_SIZE, className}) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M8.5 16C5.20152 13.1077 3.4679 9.48518 3.08302 4.9978C2.98862 3.89727 3.89543 3 5 3H7.3C8.40457 3 9.28214 3.90174 9.46761 4.99063C9.54081 5.42043 9.63731 5.84226 9.75576 6.25476C9.97883 7.03157 9.8251 7.88727 9.25492 8.46006L8.9929 8.72328C8.3731 9.34592 8.22133 10.308 8.70723 11.0399C9.83288 12.7356 11.2857 14.1948 12.9753 15.325C13.7092 15.8159 14.6768 15.6624 15.3002 15.0371L15.5514 14.7851C16.1251 14.2096 16.9859 14.0543 17.7666 14.2798C18.1724 14.397 18.5871 14.4928 19.0097 14.5659C20.0981 14.7542 21 15.6318 21 16.7363V19.0559C21 20.1604 20.1019 21.0676 19.004 20.9461C18.4093 20.8803 17.8234 20.7854 17.2476 20.663" strokeWidth="2" strokeLinecap="round" stroke={color}/>
            <ellipse cx="14.1581" cy="19.648" rx="0.75" ry="0.75" transform="rotate(-3.12347 14.1581 19.648)" fill={color}/>
            <ellipse cx="11.2818" cy="18.1444" rx="1" ry="1" transform="rotate(-3.12347 11.2818 18.1444)" fill={color}/>
        </svg>
    )
}

export function MailIcon({color="#000", size=DEFAULT_SIZE, className}) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M14 18H5C3.89543 18 3 17.1046 3 16V8C3 6.89543 3.89543 6 5 6H19C20.1046 6 21 6.89543 21 8V11" strokeWidth="2" strokeLinecap="round" stroke={color}/>
            <path d="M3 7L10.5658 11.4367C11.163 11.7869 11.8988 11.8034 12.511 11.4803L21 7" strokeWidth="2" stroke={color}/>
            <circle cx="20.75" cy="17.75" r="0.75" fill={color}/>
            <circle cx="17.5" cy="18" r="1" fill={color}/>
            <circle cx="21" cy="14.5" r="1" fill={color}/>
        </svg>
    )
}

export function ArrowIcon({color="#000", size=DEFAULT_SIZE, direction="right", className}) {
    let rotation = "rotate-none";
    switch(direction) {
        case "down-right":
            rotation = "rotate-45";
            break;
        case "down":
            rotation = "rotate-90";
            break;
        case "down-left":
            rotation = "rotate-135";
            break;
        case "left":
            rotation = "rotate-180";
            break;
        case "up-left":
            rotation = "rotate-125";
            break;
        case "up":
            rotation = "rotate-270";
            break;
        case "up-right":
            rotation = "rotate-315";
            break;
        default:
            break;
    };

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={rotation + " " + (className || '')}>
            <circle cx="3.75" cy="12" r="0.75" fill={color}/>
            <circle cx="7" cy="12" r="1" fill={color}/>
            <circle cx="20" cy="12" r="1" fill={color}/>
            <path d="M10.5 12H20M14 6L20 12L14 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
        </svg>
    )
}

export function ChevronIcon({color="#000", size=DEFAULT_SIZE, direction="right", className}) {
    let rotation = "rotate-none";
    switch(direction) {
        case "down-right":
            rotation = "rotate-45";
            break;
        case "down":
            rotation = "rotate-90";
            break;
        case "down-left":
            rotation = "rotate-135";
            break;
        case "left":
            rotation = "rotate-180";
            break;
        case "up-left":
            rotation = "rotate-125";
            break;
        case "up":
            rotation = "rotate-270";
            break;
        case "up-right":
            rotation = "rotate-315";
            break;
        default:
            break;
    };

    return (
         <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="9" cy="12" r="1" fill={color}/>
            <circle cx="15" cy="12" r="1" fill={color}/>
            <path d="M9 18L15 12L9 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
        </svg>
    )
}


export function CopyIcon({color="#000", size=DEFAULT_SIZE, className}) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M17 14C18.1046 14 19 13.1046 19 12L19 6C19 4.89543 18.1046 4 17 4L11 4C9.89543 4 9 4.89543 9 6" strokeWidth="2" strokeLinecap="round" stroke={color}/>
            <path d="M4 15L4 11C4 9.89543 4.89543 9 6 9L12 9C13.1046 9 14 9.89543 14 11L14 17C14 18.1046 13.1046 19 12 19L8 19" strokeWidth="2" strokeLinecap="round" stroke={color}/>
            <circle cx="4.45" cy="18.55" r="1" transform="rotate(-90 4.45 18.55)" fill={color}/>
        </svg>
    )
}
