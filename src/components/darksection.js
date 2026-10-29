export default function DarkSection({id = "", className, children}) {
    return (
        <section id={id} className="dark-section">
            <div className="dark-start">
                <img className="dark-cloud-left" src="/assets/bg/dark-start-cloud-left.svg" alt="" />
                <img className="dark-cloud-right" src="/assets/bg/dark-start-cloud-right.svg" alt="" />
            </div>

            <div className={`dark-body ${className || ''}`}>
                {children}
            </div>

            <div className="dark-end">
                <img className="dark-cloud-left" src="/assets/bg/dark-end-cloud-left.svg" alt="" />
                <img className="dark-cloud-right" src="/assets/bg/dark-end-cloud-right.svg" alt="" />
            </div>
        </section>
    )
}

export function DarkSectionStart({id = "", className, children}) {
    return (
        <section id={id} className="dark-section">
            <div className={`dark-body ${className || ''}`}>
                {children}
            </div>

            <div className="dark-end">
                <img className="dark-cloud-left" src="/assets/bg/dark-end-cloud-left.svg" alt="" />
                <img className="dark-cloud-right" src="/assets/bg/dark-end-cloud-right.svg" alt="" />
            </div>
        </section>
    )
}