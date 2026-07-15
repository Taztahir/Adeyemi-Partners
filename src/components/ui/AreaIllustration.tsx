import React from 'react';

/* ─── Colour palettes per slug ────────────────────────────────────── */
const palettes: Record<string, { bg: string; accent: string; line: string }> = {
  // Practice areas
  'corporate-law':          { bg: '#1A1A1A', accent: '#9C7A3C', line: '#3A3020' },
  'litigation':             { bg: '#1C1520', accent: '#7C3048', line: '#331828' },
  'real-estate':            { bg: '#111820', accent: '#4A7C8A', line: '#182430' },
  'family-law':             { bg: '#141A14', accent: '#5A8A4A', line: '#1E2E1E' },
  'intellectual-property':  { bg: '#101828', accent: '#5A6EA0', line: '#1A2040' },
  'employment-law':         { bg: '#1A1410', accent: '#8A6A3C', line: '#302010' },
  // Insights
  'fintech':                { bg: '#0C1A24', accent: '#3C8AAA', line: '#142030' },
  'environment':            { bg: '#0E1A10', accent: '#4A8A50', line: '#182A18' },
  'ai-ip':                  { bg: '#10101E', accent: '#6A50C0', line: '#1A1A38' },
  'finance':                { bg: '#1A1400', accent: '#9C7A3C', line: '#2A2000' },
  'arbitration':            { bg: '#1C0E14', accent: '#8C3050', line: '#280E1A' },
  'urban':                  { bg: '#101418', accent: '#5A7890', line: '#182028' },
  'crossborder':            { bg: '#10181A', accent: '#3A8A88', line: '#142020' },
};

/* ─── Unique SVG artwork per slug ─────────────────────────────────── */
const illustrations: Record<string, (p: typeof palettes[string]) => React.ReactNode> = {
  'corporate-law': (p) => (
    <>
      {/* Document stack */}
      <rect x="60" y="40" width="80" height="100" rx="3" fill="none" stroke={p.line} strokeWidth="1"/>
      <rect x="68" y="32" width="80" height="100" rx="3" fill="none" stroke={p.line} strokeWidth="1"/>
      <rect x="76" y="24" width="80" height="100" rx="3" fill={p.bg} stroke={p.accent} strokeWidth="1.5"/>
      <line x1="92" y1="48" x2="140" y2="48" stroke={p.accent} strokeWidth="1.5" strokeOpacity="0.8"/>
      <line x1="92" y1="60" x2="148" y2="60" stroke={p.accent} strokeWidth="1" strokeOpacity="0.4"/>
      <line x1="92" y1="70" x2="148" y2="70" stroke={p.accent} strokeWidth="1" strokeOpacity="0.4"/>
      <line x1="92" y1="80" x2="130" y2="80" stroke={p.accent} strokeWidth="1" strokeOpacity="0.4"/>
      {/* Seal */}
      <circle cx="136" cy="104" r="14" fill="none" stroke={p.accent} strokeWidth="1.5"/>
      <circle cx="136" cy="104" r="9" fill="none" stroke={p.accent} strokeWidth="0.8" strokeDasharray="2 2"/>
      <text x="136" y="108" textAnchor="middle" fill={p.accent} fontSize="8" fontFamily="serif">A&P</text>
      {/* Pen */}
      <line x1="166" y1="60" x2="200" y2="110" stroke={p.accent} strokeWidth="2.5" strokeLinecap="round"/>
      <polygon points="197,106 204,114 192,112" fill={p.accent} opacity="0.9"/>
    </>
  ),

  'litigation': (p) => (
    <>
      {/* Scales of justice */}
      <line x1="120" y1="30" x2="120" y2="140" stroke={p.accent} strokeWidth="2"/>
      <line x1="80" y1="65" x2="160" y2="65" stroke={p.accent} strokeWidth="1.5"/>
      {/* Left pan */}
      <line x1="80" y1="65" x2="70" y2="100" stroke={p.accent} strokeWidth="1" strokeDasharray="3 2"/>
      <line x1="70" y1="100" x2="95" y2="100" stroke={p.accent} strokeWidth="1"/>
      <path d="M70 100 Q82.5 108 95 100" fill="none" stroke={p.accent} strokeWidth="1"/>
      {/* Right pan — slightly tilted */}
      <line x1="160" y1="65" x2="152" y2="94" stroke={p.accent} strokeWidth="1" strokeDasharray="3 2"/>
      <line x1="152" y1="94" x2="177" y2="94" stroke={p.accent} strokeWidth="1"/>
      <path d="M152 94 Q164.5 102 177 94" fill="none" stroke={p.accent} strokeWidth="1"/>
      {/* Small weights */}
      <circle cx="74" cy="100" r="4" fill={p.accent} opacity="0.5"/>
      <circle cx="91" cy="100" r="4" fill={p.accent} opacity="0.5"/>
      <circle cx="156" cy="93" r="4" fill={p.accent} opacity="0.5"/>
      <circle cx="173" cy="93" r="4" fill={p.accent} opacity="0.5"/>
      {/* Gavel */}
      <rect x="48" y="112" width="28" height="10" rx="2" fill={p.accent} opacity="0.7" transform="rotate(-35 62 117)"/>
      <line x1="42" y1="130" x2="60" y2="110" stroke={p.accent} strokeWidth="2" strokeLinecap="round" opacity="0.8"/>
    </>
  ),

  'real-estate': (p) => (
    <>
      {/* Skyline */}
      <rect x="40" y="90" width="30" height="60" fill="none" stroke={p.accent} strokeWidth="1.5"/>
      <rect x="44" y="95" width="6" height="6" fill={p.accent} opacity="0.4"/>
      <rect x="54" y="95" width="6" height="6" fill={p.accent} opacity="0.4"/>
      <rect x="44" y="107" width="6" height="6" fill={p.accent} opacity="0.4"/>
      <rect x="54" y="107" width="6" height="6" fill={p.accent} opacity="0.8"/>
      {/* Tall tower */}
      <rect x="85" y="50" width="50" height="100" fill="none" stroke={p.accent} strokeWidth="2"/>
      <line x1="110" y1="50" x2="110" y2="150" stroke={p.accent} strokeWidth="0.5" strokeOpacity="0.4"/>
      {[60,72,84,96,108,120,132].map((y,i) => (
        <React.Fragment key={i}>
          <rect x="89" y={y} width="8" height="8" fill={p.accent} opacity={i%2===0?0.6:0.2}/>
          <rect x="101" y={y} width="8" height="8" fill={p.accent} opacity={i%2===0?0.2:0.6}/>
          <rect x="113" y={y} width="8" height="8" fill={p.accent} opacity={i%2===0?0.6:0.2}/>
          <rect x="125" y={y} width="8" height="8" fill={p.accent} opacity={i%2===0?0.2:0.6}/>
        </React.Fragment>
      ))}
      {/* Right building */}
      <rect x="150" y="80" width="30" height="70" fill="none" stroke={p.accent} strokeWidth="1.5" strokeOpacity="0.7"/>
      {/* Ground */}
      <line x1="30" y1="150" x2="200" y2="150" stroke={p.accent} strokeWidth="1" strokeOpacity="0.3"/>
    </>
  ),

  'family-law': (p) => (
    <>
      {/* House outline */}
      <polygon points="115,35 55,90 175,90" fill="none" stroke={p.accent} strokeWidth="1.5"/>
      <rect x="65" y="90" width="100" height="70" fill="none" stroke={p.accent} strokeWidth="1.5"/>
      {/* Door */}
      <rect x="100" y="120" width="30" height="40" rx="15" fill="none" stroke={p.accent} strokeWidth="1.2"/>
      <circle cx="126" cy="140" r="2.5" fill={p.accent}/>
      {/* Windows */}
      <rect x="72" y="98" width="20" height="16" rx="1" fill="none" stroke={p.accent} strokeWidth="1" strokeOpacity="0.7"/>
      <rect x="140" y="98" width="20" height="16" rx="1" fill="none" stroke={p.accent} strokeWidth="1" strokeOpacity="0.7"/>
      {/* People silhouettes */}
      <circle cx="94" cy="68" r="5" fill={p.accent} opacity="0.5"/>
      <line x1="94" y1="73" x2="94" y2="84" stroke={p.accent} strokeWidth="1.5" opacity="0.5"/>
      <circle cx="115" cy="60" r="6" fill={p.accent} opacity="0.8"/>
      <line x1="115" y1="66" x2="115" y2="80" stroke={p.accent} strokeWidth="2" opacity="0.8"/>
      <circle cx="136" cy="68" r="5" fill={p.accent} opacity="0.5"/>
      <line x1="136" y1="73" x2="136" y2="84" stroke={p.accent} strokeWidth="1.5" opacity="0.5"/>
    </>
  ),

  'intellectual-property': (p) => (
    <>
      {/* Light-bulb */}
      <path d="M115 35 C95 35 80 50 80 68 C80 82 90 92 95 102 L135 102 C140 92 150 82 150 68 C150 50 135 35 115 35Z" fill="none" stroke={p.accent} strokeWidth="1.5"/>
      <line x1="97" y1="108" x2="133" y2="108" stroke={p.accent} strokeWidth="1.2"/>
      <line x1="100" y1="114" x2="130" y2="114" stroke={p.accent} strokeWidth="1.2"/>
      <line x1="105" y1="120" x2="125" y2="120" stroke={p.accent} strokeWidth="1.2"/>
      {/* Filament */}
      <path d="M105 75 Q110 65 115 75 Q120 85 125 75" fill="none" stroke={p.accent} strokeWidth="1.5" strokeLinecap="round"/>
      {/* Rays */}
      {[0,45,90,135,180,225,270,315].map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        const x1 = 115 + 58 * Math.cos(rad);
        const y1 = 68 + 58 * Math.sin(rad);
        const x2 = 115 + 68 * Math.cos(rad);
        const y2 = 68 + 68 * Math.sin(rad);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={p.accent} strokeWidth="1" opacity="0.3"/>;
      })}
      {/* Circuit nodes */}
      <circle cx="68" cy="110" r="3" fill={p.accent} opacity="0.4"/>
      <circle cx="162" cy="110" r="3" fill={p.accent} opacity="0.4"/>
      <line x1="71" y1="110" x2="96" y2="108" stroke={p.accent} strokeWidth="0.8" strokeDasharray="2 2" opacity="0.4"/>
      <line x1="134" y1="108" x2="159" y2="110" stroke={p.accent} strokeWidth="0.8" strokeDasharray="2 2" opacity="0.4"/>
    </>
  ),

  'employment-law': (p) => (
    <>
      {/* Briefcase */}
      <rect x="65" y="75" width="100" height="70" rx="4" fill="none" stroke={p.accent} strokeWidth="1.5"/>
      <path d="M90 75 L90 62 Q90 55 100 55 L130 55 Q140 55 140 62 L140 75" fill="none" stroke={p.accent} strokeWidth="1.5"/>
      <line x1="65" y1="105" x2="165" y2="105" stroke={p.accent} strokeWidth="1" strokeOpacity="0.5"/>
      <rect x="107" y="98" width="16" height="14" rx="2" fill="none" stroke={p.accent} strokeWidth="1.2"/>
      {/* Handshake */}
      <path d="M75 130 L100 118 L115 124 L130 118 L155 130" fill="none" stroke={p.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/>
      {/* Badge/ID */}
      <rect x="80" y="40" width="26" height="32" rx="2" fill="none" stroke={p.accent} strokeWidth="1" strokeOpacity="0.5"/>
      <circle cx="93" cy="50" r="5" fill="none" stroke={p.accent} strokeWidth="1" strokeOpacity="0.5"/>
      <line x1="84" y1="61" x2="102" y2="61" stroke={p.accent} strokeWidth="0.8" strokeOpacity="0.5"/>
      <line x1="84" y1="66" x2="98" y2="66" stroke={p.accent} strokeWidth="0.8" strokeOpacity="0.5"/>
    </>
  ),

  // ── Insights ──────────────────────────────────────────────────────
  'fintech': (p) => (
    <>
      {/* Chart rising */}
      <polyline points="40,140 70,110 100,120 130,80 160,85 190,45" fill="none" stroke={p.accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <polyline points="40,140 190,140" stroke={p.accent} strokeWidth="0.8" strokeOpacity="0.3"/>
      {/* Data dots */}
      {[[70,110],[100,120],[130,80],[160,85],[190,45]].map(([cx,cy],i) => (
        <circle key={i} cx={cx} cy={cy} r="4" fill={p.accent} opacity="0.8"/>
      ))}
      {/* Grid lines */}
      {[60,80,100,120].map((y,i) => (
        <line key={i} x1="40" y1={y} x2="200" y2={y} stroke={p.accent} strokeWidth="0.5" strokeDasharray="4 4" strokeOpacity="0.2"/>
      ))}
      {/* Coin stack */}
      {[0,1,2].map(i => (
        <ellipse key={i} cx="50" cy={148 - i*8} rx="18" ry="5" fill="none" stroke={p.accent} strokeWidth="1.2" opacity={0.4 + i*0.2}/>
      ))}
      <rect x="32" y="120" width="36" height="28" fill="none" stroke={p.accent} strokeWidth="0.5" strokeOpacity="0.1"/>
    </>
  ),

  'environment': (p) => (
    <>
      {/* Factory */}
      <rect x="40" y="100" width="50" height="60" fill="none" stroke={p.accent} strokeWidth="1.2" strokeOpacity="0.7"/>
      <rect x="105" y="110" width="70" height="50" fill="none" stroke={p.accent} strokeWidth="1.2" strokeOpacity="0.7"/>
      {/* Smokestacks */}
      <rect x="48" y="70" width="12" height="30" fill="none" stroke={p.accent} strokeWidth="1.2"/>
      <rect x="70" y="80" width="12" height="20" fill="none" stroke={p.accent} strokeWidth="1.2"/>
      <rect x="120" y="75" width="12" height="35" fill="none" stroke={p.accent} strokeWidth="1.2"/>
      <rect x="148" y="82" width="12" height="28" fill="none" stroke={p.accent} strokeWidth="1.2"/>
      {/* Smoke wisps */}
      <path d="M54 70 Q50 55 56 42 Q62 30 57 18" fill="none" stroke={p.accent} strokeWidth="1" strokeDasharray="3 3" opacity="0.5"/>
      <path d="M126 75 Q122 58 128 44 Q134 30 129 16" fill="none" stroke={p.accent} strokeWidth="1" strokeDasharray="3 3" opacity="0.5"/>
      {/* Sun / globe */}
      <circle cx="170" cy="40" r="20" fill="none" stroke={p.accent} strokeWidth="1.5"/>
      <line x1="170" y1="20" x2="170" y2="60" stroke={p.accent} strokeWidth="0.8" strokeOpacity="0.4"/>
      <ellipse cx="170" cy="40" rx="10" ry="20" fill="none" stroke={p.accent} strokeWidth="0.8" strokeOpacity="0.4"/>
      <line x1="150" y1="40" x2="190" y2="40" stroke={p.accent} strokeWidth="0.8" strokeOpacity="0.4"/>
    </>
  ),

  'ai-ip': (p) => (
    <>
      {/* Brain/network nodes */}
      {[
        [115,75],[75,55],[155,55],[60,95],[170,95],[80,130],[150,130],[115,145]
      ].map(([cx,cy],i) => (
        <circle key={i} cx={cx} cy={cy} r={i===0?10:6} fill="none" stroke={p.accent} strokeWidth={i===0?2:1.2} opacity={i===0?1:0.7}/>
      ))}
      {/* Connections */}
      {[
        [115,75,75,55],[115,75,155,55],[115,75,60,95],[115,75,170,95],
        [75,55,60,95],[155,55,170,95],[60,95,80,130],[170,95,150,130],
        [80,130,115,145],[150,130,115,145]
      ].map(([x1,y1,x2,y2],i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={p.accent} strokeWidth="0.8" strokeOpacity="0.35"/>
      ))}
      {/* Pulse rings */}
      <circle cx="115" cy="75" r="18" fill="none" stroke={p.accent} strokeWidth="0.5" strokeOpacity="0.3" strokeDasharray="3 3"/>
      <circle cx="115" cy="75" r="26" fill="none" stroke={p.accent} strokeWidth="0.5" strokeOpacity="0.15" strokeDasharray="3 3"/>
    </>
  ),

  'finance': (p) => (
    <>
      {/* Bar chart */}
      {[[50,140,20],[80,110,20],[110,125,20],[140,85,20],[170,95,20]].map(([x,y,w],i) => (
        <rect key={i} x={x} y={y} width={w} height={140-y} fill="none" stroke={p.accent} strokeWidth="1.5" opacity={0.4+i*0.12}/>
      ))}
      {/* Trending arrow */}
      <polyline points="50,140 90,108 130,122 180,78" fill="none" stroke={p.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="4 3" opacity="0.7"/>
      <polygon points="180,78 174,90 186,88" fill={p.accent} opacity="0.7"/>
      {/* Coin/currency symbol */}
      <circle cx="50" cy="60" r="22" fill="none" stroke={p.accent} strokeWidth="1.2" opacity="0.6"/>
      <text x="50" y="66" textAnchor="middle" fill={p.accent} fontSize="18" fontFamily="serif" opacity="0.8">₦</text>
    </>
  ),

  'arbitration': (p) => (
    <>
      {/* Columns */}
      <rect x="50" y="60" width="14" height="90" fill="none" stroke={p.accent} strokeWidth="1.2" opacity="0.7"/>
      <rect x="100" y="50" width="14" height="100" fill="none" stroke={p.accent} strokeWidth="1.2"/>
      <rect x="150" y="60" width="14" height="90" fill="none" stroke={p.accent} strokeWidth="1.2" opacity="0.7"/>
      {/* Pediment */}
      <polyline points="38,60 57,35 107,27 157,35 176,60" fill="none" stroke={p.accent} strokeWidth="1.5" strokeLinejoin="round"/>
      {/* Steps */}
      <rect x="38" y="150" width="138" height="8" fill="none" stroke={p.accent} strokeWidth="1"/>
      <rect x="44" y="158" width="126" height="6" fill="none" stroke={p.accent} strokeWidth="0.8" strokeOpacity="0.5"/>
      {/* Gavel */}
      <rect x="88" y="88" width="38" height="14" rx="2" fill={p.accent} opacity="0.5" transform="rotate(-25 107 95)"/>
      <line x1="80" y1="120" x2="108" y2="90" stroke={p.accent} strokeWidth="2.5" strokeLinecap="round" opacity="0.7"/>
    </>
  ),

  'urban': (p) => (
    <>
      {/* Mixed-use building */}
      <rect x="55" y="55" width="50" height="100" fill="none" stroke={p.accent} strokeWidth="1.5"/>
      {/* Grid windows on left block */}
      {[65,80,95,110,125].map((y,i) => (
        <React.Fragment key={i}>
          <rect x="62" y={y} width="10" height="10" fill={p.accent} opacity={i%2===0?0.5:0.2}/>
          <rect x="78" y={y} width="10" height="10" fill={p.accent} opacity={i%2===0?0.2:0.5}/>
        </React.Fragment>
      ))}
      {/* Right residential block */}
      <rect x="118" y="75" width="40" height="80" fill="none" stroke={p.accent} strokeWidth="1.2" strokeOpacity="0.7"/>
      {/* Roof peak */}
      <polygon points="118,75 138,55 158,75" fill="none" stroke={p.accent} strokeWidth="1.2" strokeOpacity="0.7"/>
      {/* Street */}
      <line x1="30" y1="155" x2="205" y2="155" stroke={p.accent} strokeWidth="1" strokeOpacity="0.4"/>
      <line x1="30" y1="160" x2="205" y2="160" stroke={p.accent} strokeWidth="0.5" strokeDasharray="6 4" strokeOpacity="0.3"/>
      {/* Trees */}
      <circle cx="40" cy="145" r="10" fill="none" stroke={p.accent} strokeWidth="1" strokeOpacity="0.5"/>
      <line x1="40" y1="155" x2="40" y2="165" stroke={p.accent} strokeWidth="1" strokeOpacity="0.5"/>
      <circle cx="195" cy="145" r="10" fill="none" stroke={p.accent} strokeWidth="1" strokeOpacity="0.5"/>
      <line x1="195" y1="155" x2="195" y2="165" stroke={p.accent} strokeWidth="1" strokeOpacity="0.5"/>
    </>
  ),

  'crossborder': (p) => (
    <>
      {/* Globe */}
      <circle cx="115" cy="90" r="60" fill="none" stroke={p.accent} strokeWidth="1.5"/>
      {/* Meridians */}
      <ellipse cx="115" cy="90" rx="30" ry="60" fill="none" stroke={p.accent} strokeWidth="0.7" strokeOpacity="0.4"/>
      <ellipse cx="115" cy="90" rx="52" ry="60" fill="none" stroke={p.accent} strokeWidth="0.5" strokeOpacity="0.25"/>
      {/* Parallels */}
      <line x1="56" y1="70" x2="174" y2="70" stroke={p.accent} strokeWidth="0.5" strokeOpacity="0.3"/>
      <line x1="55" y1="90" x2="175" y2="90" stroke={p.accent} strokeWidth="0.7" strokeOpacity="0.4"/>
      <line x1="56" y1="110" x2="174" y2="110" stroke={p.accent} strokeWidth="0.5" strokeOpacity="0.3"/>
      {/* Flight path arc */}
      <path d="M70 120 Q115 40 160 120" fill="none" stroke={p.accent} strokeWidth="1.2" strokeDasharray="4 3"/>
      {/* Plane */}
      <polygon points="115,58 109,66 115,63 121,66" fill={p.accent} opacity="0.9"/>
      {/* Destination markers */}
      <circle cx="72" cy="118" r="4" fill={p.accent} opacity="0.7"/>
      <circle cx="158" cy="118" r="4" fill={p.accent} opacity="0.7"/>
    </>
  ),
};

/* ─── Public component ─────────────────────────────────────────────── */
export interface AreaIllustrationProps {
  slug: string;
  className?: string;
  /** 'practice' slugs map directly; 'insight' slugs use category key */
  type?: 'practice' | 'insight';
}

/** Maps insight article slugs → illustration key */
const insightKeyMap: Record<string, string> = {
  'fintech-regulatory-landscape-2024':          'fintech',
  'environmental-compliance-nigerian-industrial':'environment',
  'protecting-digital-innovations-generative-ai':'ai-ip',
  'structured-finance-trends-private-debt':     'finance',
  'arbitration-vs-litigation-disputes':         'arbitration',
  'mixed-use-development-frameworks':           'urban',
  'cross-border-regulatory-evolution-2024':     'crossborder',
};

const AreaIllustration: React.FC<AreaIllustrationProps> = ({ slug, className = '', type = 'practice' }) => {
  const key = type === 'insight' ? (insightKeyMap[slug] ?? 'fintech') : slug;
  const palette = palettes[key] ?? palettes['corporate-law'];
  const draw = illustrations[key] ?? illustrations['corporate-law'];

  return (
    <svg
      viewBox="0 0 230 190"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-full ${className}`}
      aria-hidden="true"
    >
      <rect width="230" height="190" fill={palette.bg}/>
      {/* Subtle grid texture */}
      <defs>
        <pattern id={`grid-${key}`} width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke={palette.line} strokeWidth="0.4"/>
        </pattern>
      </defs>
      <rect width="230" height="190" fill={`url(#grid-${key})`}/>
      {draw(palette)}
    </svg>
  );
};

export default AreaIllustration;
