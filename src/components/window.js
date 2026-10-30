import Link from 'next/link';

export function Window({className, children, url = null}) {
  return (
    <div className={`window-container transition ${className || ''}`}>
        <div className="window">
            <div className="window-head">
                <div className="window-buttons">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                { url && <div className="window-head-url">{url}</div> }
            </div>
            <div className="window-body">
                {children}
            </div>
        </div>
    </div>
  );
}

export function WindowLink({className, children, url = null, href=""}) {
  return (
    <Link className={`window-container transition ${className || ''}`} href={href}>
        <div className="window">
            <div className="window-head">
                <div className="window-buttons">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                { url && <div className="window-head-url">{url}</div> }
            </div>
            <div className="window-body">
                {children}
            </div>
        </div>
    </Link>
  );
}

export default function WindowShrink({className, children, url = null}) {
    
    return (
        <div className={`window-container transition ${className || ''}`}>
            <div className="window">
                <div className="window-head">
                    <div className="window-buttons">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    { url && <div className="window-head-url">{url}</div> }
                </div>
                <div className="window-body">
                    {children}
                </div>
            </div>
        </div>
    );
}