import type { Metadata } from "next";

const verse = {
  devanagari: "धृतराष्ट्र उवाच धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः ।\nमामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय ॥१॥",
  transliteration:
    "dhṛtarāṣṭra uvāca dharma-kṣetre kuru-kṣetre samavetā yuyutsavaḥ |\nmāmakāḥ pāṇḍavāś caiva kim akurvata sañjaya ||1||",
  anvaya:
    "हे संजय! (धर्म-क्षेत्र) कुरु-क्षेत्र में (समवेताः) एकत्र हुए (युयुत्सवः) युद्ध की इच्छा वाले (मामकाः) मेरे पुत्र तथा (पाण्डवाः च) पाण्डु के पुत्र (किम अकुर्वत) क्या कर रहे हैं?",
  meaning:
    "धृतराष्ट्र ने पूछा—हे संजय! धर्मभूमि कुरुक्षेत्र में युद्ध करने की इच्छा से एकत्र हुए मेरे पुत्रों और पाण्डु के पुत्रों ने क्या किया?",
  insight:
    "अंध राजा धृतराष्ट्र युद्धभूमि में क्या घटित हो रहा है यह जानने को आतुर है। वह प्रारम्भ से ही पक्षपाती है—'मामकाः' और 'पाण्डवाः' कहकर वह अपने और भाई के पुत्रों में स्पष्ट भेद रेखांकित करता है। धर्मभूमि में खड़ा होकर भी उसे धर्म की विजय पर भरोसा नहीं, इसलिए वह संजय से विवरण मांगता है।"
};

const highlights = [
  {
    title: "स्थल और प्रसंग",
    description:
      "कुरुक्षेत्र को धर्मभूमि कहा गया है क्योंकि यहाँ अनेक यज्ञ और तप के कारण पुण्य संचित है। इसी पवित्रता के बीच युद्ध का मोर्चा सज चुका है।"
  },
  {
    title: "धृतराष्ट्र की चिंता",
    description:
      "धृतराष्ट्र शारीरिक रूप से ही नहीं, आंतरिक रूप से भी अंध हैं। उन्हें शंका है कि धर्मभूमि का प्रभाव उनके पुत्रों के संकल्प को डगमगा न दे।"
  },
  {
    title: "शब्दों का चयन",
    description:
      "'समवेता युयुत्सवः' में युद्ध के प्रति दोनों पक्षों की तत्परता झलकती है। 'मामकाः' बनाम 'पाण्डवाः' विभाजन की मानसिकता को रेखांकित करता है।"
  }
];

export const metadata: Metadata = {
  alternates: {
    canonical: "https://agentic-b1af7b3f.vercel.app/"
  },
  openGraph: {
    title: "भगवद्गीता 1.1 - धृतराष्ट्र का प्रश्न",
    description: verse.meaning,
    locale: "hi_IN",
    siteName: "agentic-b1af7b3f",
    type: "website"
  }
};

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col gap-16 px-6 py-16 sm:py-24">
      <header className="space-y-6 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-accent">प्रथम अध्याय · अर्जुनविषाद योग</p>
        <h1 className="font-display text-4xl leading-snug text-ink sm:text-5xl">
          {"भगवद्गीता १.१ · धृतराष्ट्र का प्रश्न"}
        </h1>
        <p className="mx-auto max-w-2xl text-base text-ink/80">
          महाभारत के युद्धभूमि में प्रथम स्वर धृतराष्ट्र का है। यह पृष्ठ श्लोक, उसका
          शुद्ध उच्चारण, भावार्थ और संदर्भ को एक ही स्थान पर प्रस्तुत करता है।
        </p>
      </header>

      <section className="grid gap-10 rounded-3xl bg-white/90 p-10 shadow-xl shadow-amber-900/10 backdrop-blur">
        <div className="space-y-5">
          <h2 className="text-lg font-semibold uppercase tracking-widest text-accent">
            मूल श्लोक
          </h2>
          <p className="whitespace-pre-line text-2xl leading-loose text-ink sm:text-[2rem]">
            {verse.devanagari}
          </p>
        </div>
        <div className="grid gap-6 rounded-2xl border border-accent/20 bg-parchment/70 p-6 sm:grid-cols-2">
          <HighlightBlock label="Transliteration" content={verse.transliteration} />
          <HighlightBlock label="अन्वय" content={verse.anvaya} />
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-accent">भावार्थ</h3>
          <p className="text-lg leading-relaxed text-ink/90">{verse.meaning}</p>
        </div>
        <blockquote className="border-l-4 border-accent pl-6 text-base italic text-ink/80">
          {verse.insight}
        </blockquote>
      </section>

      <section className="space-y-8">
        <h2 className="font-display text-3xl text-ink">प्रमुख बिंदु</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {highlights.map((point) => (
            <article
              key={point.title}
              className="flex flex-col gap-3 rounded-2xl border border-accent/10 bg-white/60 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-accent">{point.title}</h3>
              <p className="text-sm leading-relaxed text-ink/80">{point.description}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="mt-auto border-t border-accent/10 pt-6 text-center text-xs text-ink/60">
        <p>संकलन · agentic-b1af7b3f | स्रोत · महाभारत, भीष्म पर्व (भगवद्गीता)</p>
      </footer>
    </main>
  );
}

function HighlightBlock({
  label,
  content
}: {
  label: string;
  content: string;
}) {
  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
        {label}
      </p>
      <p className="whitespace-pre-line text-sm leading-relaxed text-ink/80">
        {content}
      </p>
    </div>
  );
}
