export function Window({className, children, url = null}) {
  return (
    <div className={`window-container ${className || ''}`}>
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
    <a className={`window-container ${className || ''}`} href={href}>
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
    </a>
  );
}

export default function WindowShrink({className, children, url = null}) {
    
    return (
        <div className={`window-container ${className || ''}`}>
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