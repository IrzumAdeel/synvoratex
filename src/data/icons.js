// Each icon is a list of SVG shape descriptors rendered by <Icon /> via createElement.
// tag: svg element name, rest: React (camelCase) props for that element.
export const icons = {
  fabric: [
    { tag: 'path', d: 'M4 4h16v16H4z', strokeWidth: 1.6 },
    { tag: 'path', d: 'M4 9h16M4 14h16M9 4v16M14 4v16', strokeWidth: 1 },
  ],
  shirt: [
    { tag: 'path', d: 'M8 3 4 6l2 3 2-1v13h8V8l2 1 2-3-4-3-2 2h-4z', strokeWidth: 1.6, strokeLinejoin: 'round' },
  ],
  medical: [
    { tag: 'rect', x: 4, y: 4, width: 16, height: 16, rx: 2, strokeWidth: 1.6 },
    { tag: 'path', d: 'M12 8v8M8 12h8', strokeWidth: 1.6 },
  ],
  label: [
    { tag: 'path', d: 'M3 11 11 3h6a2 2 0 0 1 2 2v6l-8 8-8-8z', strokeWidth: 1.6, strokeLinejoin: 'round' },
    { tag: 'circle', cx: 15, cy: 9, r: 1.4, strokeWidth: 1.4 },
  ],
  wholesale: [
    { tag: 'path', d: 'M3 7 12 3l9 4-9 4-9-4z', strokeWidth: 1.6, strokeLinejoin: 'round' },
    { tag: 'path', d: 'M3 7v10l9 4 9-4V7M12 11v10', strokeWidth: 1.6 },
  ],
  shield: [
    { tag: 'path', d: 'M12 3 4 6v6c0 5 3.6 7.7 8 9 4.4-1.3 8-4 8-9V6z', strokeWidth: 1.6, strokeLinejoin: 'round' },
    { tag: 'path', d: 'M9 12l2 2 4-4', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' },
  ],
  doc2: [
    { tag: 'path', d: 'M7 3h7l4 4v14H7z', strokeWidth: 1.6, strokeLinejoin: 'round' },
    { tag: 'path', d: 'M14 3v4h4M9 13h6M9 17h6', strokeWidth: 1.4 },
  ],
  chain: [
    { tag: 'circle', cx: 6, cy: 7, r: 2.5, strokeWidth: 1.6 },
    { tag: 'circle', cx: 18, cy: 7, r: 2.5, strokeWidth: 1.6 },
    { tag: 'circle', cx: 12, cy: 18, r: 2.5, strokeWidth: 1.6 },
    { tag: 'path', d: 'M8 8.5 10.5 16M16 8.5 13.5 16M8.5 7h7', strokeWidth: 1.4 },
  ],
  globeCN: [
    { tag: 'circle', cx: 12, cy: 12, r: 9, strokeWidth: 1.6 },
    { tag: 'path', d: 'M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18', strokeWidth: 1.4 },
  ],
  globePK: [
    { tag: 'circle', cx: 12, cy: 12, r: 9, strokeWidth: 1.6 },
    { tag: 'path', d: 'M3 9h18M3 15h18', strokeWidth: 1.4 },
  ],
  ecom: [
    { tag: 'path', d: 'M3 6h2l1.6 10.4a2 2 0 0 0 2 1.6h8.6a2 2 0 0 0 2-1.7L20.2 9H6', strokeWidth: 1.6, strokeLinejoin: 'round' },
    { tag: 'circle', cx: 9, cy: 21, r: 1.3, strokeWidth: 1.4 },
    { tag: 'circle', cx: 17, cy: 21, r: 1.3, strokeWidth: 1.4 },
  ],
  import: [
    { tag: 'path', d: 'M4 6h9l4 5-4 5H4', strokeWidth: 1.6, strokeLinejoin: 'round' },
    { tag: 'path', d: 'M9 6v10', strokeWidth: 1.4 },
    { tag: 'path', d: 'M14 8h3M14 14h3', strokeWidth: 1.3 },
  ],
  search: [
    { tag: 'circle', cx: 10.5, cy: 10.5, r: 6.5, strokeWidth: 1.7 },
    { tag: 'path', d: 'M20 20 15.2 15.2', strokeWidth: 1.7, strokeLinecap: 'round' },
  ],
  clipboard: [
    { tag: 'rect', x: 5, y: 4, width: 14, height: 17, rx: 1.5, strokeWidth: 1.6 },
    { tag: 'rect', x: 8.5, y: 2, width: 7, height: 4, rx: 1, strokeWidth: 1.6 },
    { tag: 'path', d: 'M8 12h8M8 16h8', strokeWidth: 1.4 },
  ],
  check: [
    { tag: 'circle', cx: 12, cy: 12, r: 9, strokeWidth: 1.6 },
    { tag: 'path', d: 'M8 12.5 10.8 15 16 9.5', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round' },
  ],
  factory: [
    { tag: 'path', d: 'M3 21V11l5 3v-3l5 3V8l5 3v10z', strokeWidth: 1.6, strokeLinejoin: 'round' },
    { tag: 'path', d: 'M3 21h18', strokeWidth: 1.6 },
  ],
  ship: [
    { tag: 'path', d: 'M4 15h16l-2 5H6z', strokeWidth: 1.6, strokeLinejoin: 'round' },
    { tag: 'path', d: 'M7 15V6h6l3 4M9 6V3h2v3', strokeWidth: 1.4 },
  ],
  doc: [
    { tag: 'path', d: 'M7 3h7l4 4v14H7z', strokeWidth: 1.6, strokeLinejoin: 'round' },
    { tag: 'path', d: 'M14 3v4h4', strokeWidth: 1.4 },
  ],
  health: [
    { tag: 'path', d: 'M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8z', strokeWidth: 1.5, strokeLinejoin: 'round' },
  ],
  fashion: [
    { tag: 'path', d: 'M9 3 5 6l2 3 2-1v13h6V8l2 1 2-3-4-3-2 2H9z', strokeWidth: 1.5, strokeLinejoin: 'round' },
  ],
  retail: [
    { tag: 'path', d: 'M4 8h16l-1.5 12h-13z', strokeWidth: 1.5, strokeLinejoin: 'round' },
    { tag: 'path', d: 'M8 8V6a4 4 0 0 1 8 0v2', strokeWidth: 1.5 },
  ],
  hospitality: [
    { tag: 'path', d: 'M4 20V10l8-6 8 6v10', strokeWidth: 1.5, strokeLinejoin: 'round' },
    { tag: 'path', d: 'M9 20v-6h6v6', strokeWidth: 1.5 },
  ],
  uniform: [
    { tag: 'path', d: 'M8 3 4 6l2 3 2-1v13h8V8l2 1 2-3-4-3-2 2H8z', strokeWidth: 1.5, strokeLinejoin: 'round' },
  ],
  wholesalers: [
    { tag: 'path', d: 'M3 21V9l9-6 9 6v12', strokeWidth: 1.5, strokeLinejoin: 'round' },
    { tag: 'path', d: 'M9 21v-8h6v8', strokeWidth: 1.5 },
  ],
  distributors: [
    { tag: 'circle', cx: 6, cy: 6, r: 2.5, strokeWidth: 1.5 },
    { tag: 'circle', cx: 18, cy: 6, r: 2.5, strokeWidth: 1.5 },
    { tag: 'circle', cx: 12, cy: 18, r: 2.5, strokeWidth: 1.5 },
    { tag: 'path', d: 'M8 7.5 11 16M16 7.5 13 16', strokeWidth: 1.3 },
  ],
  gov: [
    { tag: 'path', d: 'M4 10h16M4 21h16M6 10v11M18 10v11M12 3 3 10h18z', strokeWidth: 1.5, strokeLinejoin: 'round' },
  ],
};
