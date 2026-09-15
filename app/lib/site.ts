/**
 * সাইটের পরিচয় আর এই পথের সেটিং — plan-এর কনটেন্ট নয়, তাই `docs/`-এ নয়, এখানে।
 *
 * তিনটা পথের (লোকাল · রিমোট · গ্লোবাল) কোড একই; পার্থক্য শুধু এই ফাইল,
 * `next.config.ts`-এর basePath, `package.json`-এর নাম আর `docs/`-এর কনটেন্ট।
 */
export const SITE: {
  title: string;
  short: string;
  emoji: string;
  description: string;
  storagePrefix: string;
  suggestedStart: string | null;
} = {
  title: "লোকাল কোম্পানির behavioural",
  short: "লোকাল behavioural",
  emoji: "🎙️",
  description:
    "বাংলাদেশি কোম্পানির behavioural প্রশ্নের জন্য — ছয়টা STAR story লেখা, জোরে বলা আর যেকোনো প্রশ্নে খাটানো, ১৮০ দিনের plan-এর story-র ঘরে, learning to learn-এর নীতিতে।",
  /** localStorage key-এর prefix — তিন পথের progress আলাদা থাকে */
  storagePrefix: "lbi",
  /** শুরুর তারিখ না থাকলে প্রস্তাব — ৬ মাসের plan-এর দিন ০০৬ (plan শুরু ২০২৬-০৯-১৪) */
  suggestedStart: "2026-09-19",
};
