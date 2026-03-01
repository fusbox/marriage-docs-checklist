export function GoldFlower({ className, style }: { className?: string, style?: React.CSSProperties }) {
    return (
        <svg viewBox="0 0 120 120" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
            <defs>
                <radialGradient id="petalGrad" cx="30%" cy="30%" r="70%">
                    <stop offset="0%" stopColor="#f2d59b" />
                    <stop offset="50%" stopColor="#dea75a" />
                    <stop offset="85%" stopColor="#b9843b" />
                    <stop offset="100%" stopColor="#96692b" />
                </radialGradient>
                <filter id="petalShadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#223736" floodOpacity="0.4" />
                </filter>
                <filter id="innerShadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#2b4543" floodOpacity="0.3" />
                </filter>
            </defs>

            <g filter="url(#petalShadow)">
                {/* 5 Outer Petals */}
                <path d="M60 60 C30 50 15 10 60 4 C105 10 90 50 60 60 Z" fill="url(#petalGrad)" transform="rotate(0 60 60)" />
                <path d="M60 60 C30 50 15 10 60 4 C105 10 90 50 60 60 Z" fill="url(#petalGrad)" transform="rotate(72 60 60)" />
                <path d="M60 60 C30 50 15 10 60 4 C105 10 90 50 60 60 Z" fill="url(#petalGrad)" transform="rotate(144 60 60)" />
                <path d="M60 60 C30 50 15 10 60 4 C105 10 90 50 60 60 Z" fill="url(#petalGrad)" transform="rotate(216 60 60)" />
                <path d="M60 60 C30 50 15 10 60 4 C105 10 90 50 60 60 Z" fill="url(#petalGrad)" transform="rotate(288 60 60)" />
            </g>

            <g filter="url(#innerShadow)">
                {/* 5 Inner Petals - shifted and scaled */}
                <path d="M60 60 C40 55 30 25 60 15 C90 25 80 55 60 60 Z" fill="url(#petalGrad)" transform="rotate(36 60 60)" />
                <path d="M60 60 C40 55 30 25 60 15 C90 25 80 55 60 60 Z" fill="url(#petalGrad)" transform="rotate(108 60 60)" />
                <path d="M60 60 C40 55 30 25 60 15 C90 25 80 55 60 60 Z" fill="url(#petalGrad)" transform="rotate(180 60 60)" />
                <path d="M60 60 C40 55 30 25 60 15 C90 25 80 55 60 60 Z" fill="url(#petalGrad)" transform="rotate(252 60 60)" />
                <path d="M60 60 C40 55 30 25 60 15 C90 25 80 55 60 60 Z" fill="url(#petalGrad)" transform="rotate(324 60 60)" />
            </g>

            {/* Center Stamen cluster */}
            <circle cx="60" cy="60" r="14" fill="#694110" />
            <circle cx="60" cy="60" r="11" fill="#4d2f0b" />
            <g fill="#f2d59b">
                <circle cx="60" cy="50" r="2" /><circle cx="50" cy="57" r="1.5" /><circle cx="53" cy="68" r="2" />
                <circle cx="66" cy="67" r="1.5" /><circle cx="69" cy="55" r="2" /><circle cx="60" cy="60" r="2.5" />
                <circle cx="56" cy="53" r="1" /><circle cx="64" cy="53" r="1" /><circle cx="55" cy="63" r="1" /><circle cx="64" cy="64" r="1" />
                <circle cx="58" cy="66" r="1" /><circle cx="62" cy="57" r="1" />
            </g>
        </svg>
    );
}

export function TealLeaf({ className, style }: { className?: string, style?: React.CSSProperties }) {
    return (
        <svg viewBox="0 0 100 150" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
            <defs>
                <radialGradient id="leafGrad" cx="30%" cy="30%" r="70%">
                    <stop offset="0%" stopColor="#426361" />
                    <stop offset="60%" stopColor="#2b4543" />
                    <stop offset="100%" stopColor="#1e2d2d" />
                </radialGradient>
            </defs>
            <path d="M50 150 C20 120 5 60 50 5 C95 60 80 120 50 150 Z" fill="url(#leafGrad)" />
            <path d="M50 150 C45 100 48 40 50 5" stroke="rgba(245,241,232,0.15)" strokeWidth="1.5" fill="none" />

            {/* Veins */}
            <path d="M48 110 Q35 90 25 85" stroke="rgba(245,241,232,0.1)" strokeWidth="0.5" fill="none" />
            <path d="M49 80 Q30 60 20 60" stroke="rgba(245,241,232,0.1)" strokeWidth="0.5" fill="none" />
            <path d="M49.5 50 Q38 40 30 35" stroke="rgba(245,241,232,0.1)" strokeWidth="0.5" fill="none" />

            <path d="M52 115 Q65 95 75 90" stroke="rgba(245,241,232,0.1)" strokeWidth="0.5" fill="none" />
            <path d="M51 85 Q70 65 80 65" stroke="rgba(245,241,232,0.1)" strokeWidth="0.5" fill="none" />
            <path d="M50.5 55 Q62 45 70 40" stroke="rgba(245,241,232,0.1)" strokeWidth="0.5" fill="none" />
        </svg>
    );
}

export function OutlineTwig({ className, style }: { className?: string, style?: React.CSSProperties }) {
    return (
        <svg viewBox="0 0 100 150" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
            <path d="M50 150 Q30 80 80 10" stroke="#f5f1e8" strokeWidth="1" fill="none" opacity="0.4" />
            <circle cx="70" cy="30" r="3" fill="#f5f1e8" opacity="0.6" />
            <circle cx="55" cy="55" r="2.5" fill="#f5f1e8" opacity="0.6" />
            <circle cx="45" cy="85" r="3.5" fill="#f5f1e8" opacity="0.5" />
            <circle cx="80" cy="10" r="4.5" fill="#dea75a" opacity="0.6" />

            <path d="M50 120 Q70 80 20 40" stroke="#f5f1e8" strokeWidth="0.75" fill="none" opacity="0.3" />
            <circle cx="35" cy="65" r="2" fill="#f5f1e8" opacity="0.5" />
            <circle cx="20" cy="40" r="2.5" fill="#dea75a" opacity="0.6" />

            {/* Decorative dots trailing off */}
            <circle cx="90" cy="35" r="1.5" fill="#f5f1e8" opacity="0.4" />
            <circle cx="25" cy="85" r="1" fill="#f5f1e8" opacity="0.3" />
        </svg>
    );
}

export function FloatingDots({ className, style }: { className?: string, style?: React.CSSProperties }) {
    return (
        <svg viewBox="0 0 200 200" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
            <circle cx="40" cy="40" r="4" fill="#dea75a" opacity="0.3" />
            <circle cx="160" cy="60" r="2" fill="#f5f1e8" opacity="0.4" />
            <circle cx="100" cy="160" r="5" fill="#dea75a" opacity="0.2" />
            <circle cx="60" cy="120" r="2.5" fill="#f5f1e8" opacity="0.4" />
            <circle cx="140" cy="140" r="1.5" fill="#f2d59b" opacity="0.4" />
            <circle cx="180" cy="100" r="3.5" fill="#426361" opacity="0.5" />
            <circle cx="20" cy="100" r="2.5" fill="#dea75a" opacity="0.3" />
            <circle cx="90" cy="20" r="1.5" fill="#f5f1e8" opacity="0.4" />
        </svg>
    )
}
