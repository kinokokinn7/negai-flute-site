/** @typedef {{name: string, slug: string, label: string, description: string, image: string, color: string, mark: string}} Character */
/** Spoiler-light copy based on the supplied novel: prologue and early character introductions only. */
export const site = {
  title: 'ねがいのフルート',
  subtitle: '月の向こうに、憧れた世界が待っていた。',
  description: 'フルートが大好きな少女ニーマロ。月夜の丘で出会った妖精に導かれ、憧れの世界へ。創作ファンタジー「ねがいのフルート」の世界観・登場人物・物語をご紹介します。',
  // Add actual publication URLs when ready. Empty URLs are not rendered as links.
  readUrl: 'https://www.amazon.co.jp/dp/B0HP77GBT4',
  authorName: '',
};
/** @type {Character[]} */
export const characters = [
  { name: 'ニーマロ', slug: 'niimaro', label: 'フルートが大好きな少女', description: '吟遊詩人たちの暮らすミストラル島の少女。祖母が話してくれた妖精の世界に憧れ、月夜の丘でフルートを吹いている。', image: 'images/niimaro.png', color: '#c47a87', mark: '花' },
  { name: 'ロゥ', slug: 'rou', label: '妖精の世界で出会う旅人', description: 'シルクハットと外套が印象的な青年。ニーマロが妖精の世界で出会う、少し近寄りがたい雰囲気の旅人。', image: 'images/rou.png', color: '#bc914d', mark: '光' },
  { name: 'フェル', slug: 'feru', label: '妖精の世界への案内役', description: '月夜の丘に現れた、まん丸な体と白い羽を持つ妖精。無邪気で、少し怖がり。ニーマロを妖精の世界へ案内する。', image: 'images/feru.png', color: '#728d77', mark: '葉' },
  { name: 'ビーゼ', slug: 'biize', label: '冒険好きの妖精王子', description: 'いたずらと冒険が大好きな妖精の王子。じっとしていられないやんちゃぶりに、お城の大人たちも手を焼いている。', image: 'images/beeze.png', color: '#788bab', mark: '風' },
];
/** @type {{number:string, title:string, description:string}[]} */
export const worlds = [
  { number: '01', title: '吟遊詩人の島、ミストラル', description: '吟遊詩人たちがひっそりと暮らす小さな孤島。音楽や昔話に親しむニーマロの日々と、年に一度の吟遊詩人大会が息づく場所。' },
  { number: '02', title: '月の向こうの妖精世界', description: '淡い桃色の空に、色とりどりの花畑。妖精たちが飛び交う、ニーマロが幼いころから憧れていた世界。' },
  { number: '03', title: '音楽と吟遊詩人', description: '島で年に一度開かれる吟遊詩人大会。詩や演奏を披露するその日に向けて、ニーマロも初めての出場を心待ちにしている。' },
];
