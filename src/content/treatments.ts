export interface PricingTier {
  time: string;
  price: string;
  priceNumber: number;
}

export interface Treatment {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: "Holistic & Traditional" | "Deep Relief" | "Exfoliation & Bath" | "Specialty & Couples";
  duration: string;
  startingPrice: string;
  description: string;
  longDescription: string;
  image: string;
  altImage: string;
  benefits: string[];
  process: string[];
  pricing: PricingTier[];
  isSignature?: boolean;
}

export const TREATMENTS: Treatment[] = [
  {
    id: "aroma-therapy",
    slug: "aroma-therapy",
    name: "Aroma Therapy",
    tagline: "Botanical essences & gentle flowing pressure",
    category: "Holistic & Traditional",
    duration: "30 – 90 min",
    startingPrice: "₹1,200",
    description:
      "Organic essential oils of lavender, eucalyptus, and chamomile worked into muscles with slow, deliberate rhythmic strokes for total nervous system decompression.",
    longDescription:
      "Aroma Therapy at ARA Spa combines cold-pressed organic botanical oils with flowing Swedish massage techniques. Customized aromatherapeutic blends penetrate gently to calm mental fatigue, encourage deep restful sleep, and soothe tense muscular bands without aggressive physical pressure.",
    image: "/images/services/aroma-therapy.jpeg",
    altImage: "/images/services/aroma-therapy-alt.jpeg",
    benefits: [
      "Alleviates accumulated mental stress and anxious tension",
      "Hydrates and infuses skin with pure botanical phytonutrients",
      "Stimulates gentle lymphatic circulation to relieve heaviness",
      "Promotes deep, restorative natural sleep patterns",
    ],
    process: [
      "Consultation & bespoke essential oil aroma profiling",
      "Gentle warming oil application along meridian lines",
      "Continuous flowing strokes and light lymphatic drainage",
      "Concluding temple, forehead, and cranial scalp massage",
    ],
    pricing: [
      { time: "30 MIN", price: "₹1,200", priceNumber: 1200 },
      { time: "45 MIN", price: "₹1,500", priceNumber: 1500 },
      { time: "1 HOUR", price: "₹2,000", priceNumber: 2000 },
      { time: "90 MIN", price: "₹2,500", priceNumber: 2500 },
    ],
  },
  {
    id: "balinese-therapy",
    slug: "balinese-therapy",
    name: "Balinese Therapy",
    tagline: "Indonesian acupressure & passive stretching",
    category: "Holistic & Traditional",
    duration: "30 – 90 min",
    startingPrice: "₹1,500",
    description:
      "An authentic ancient ritual intertwining gentle limb stretching, palm acupressure, and warm spiced essential oils to harmonize inner bodily energies.",
    longDescription:
      "Originating in the royal palaces of Bali, this traditional holistic remedy blends gentle joint mobilization, thumb rolling, and warm herbal oils. It unblocks restricted meridian pathways and promotes profound somatic stillness throughout the body.",
    image: "/images/services/balinese-therapy.jpeg",
    altImage: "/images/services/balinese-therapy-alt.jpeg",
    benefits: [
      "Enhances joint mobility and relieves stiffness gently",
      "Rebalances natural bodily rhythm and vital vitality",
      "Promotes cellular oxygenation through palm pressure",
      "Calms acute physical and emotional exhaustion",
    ],
    process: [
      "Warm floral foot cleansing ritual",
      "Warming application of aromatic virgin coconut and spice oils",
      "Acupressure compression along reflex energy pathways",
      "Long rhythmic palm strokes and subtle spinal stretches",
    ],
    pricing: [
      { time: "30 MIN", price: "₹1,500", priceNumber: 1500 },
      { time: "45 MIN", price: "₹1,800", priceNumber: 1800 },
      { time: "1 HOUR", price: "₹2,000", priceNumber: 2000 },
      { time: "90 MIN", price: "₹2,500", priceNumber: 2500 },
    ],
  },
  {
    id: "thai-therapy",
    slug: "thai-therapy",
    name: "Thai Therapy",
    tagline: "Assisted yoga stretches & rhythmic Sen line pressure",
    category: "Holistic & Traditional",
    duration: "30 – 90 min",
    startingPrice: "₹2,000",
    description:
      "Conducted by Thailand-trained specialists using assisted yoga postures, deep acupressure, and rhythmic rocking along vital Sen lines.",
    longDescription:
      "Known traditionally as Nuad Bo-Rarn, Thai Therapy is performed on a comfortable floor-level mat or dedicated treatment bed. Without oil, therapists guide you into gentle assisted yoga postures using their palms, thumbs, and forearms to lengthen contracted muscles and awaken stagnant energy.",
    image: "/images/services/thai-therapy.jpeg",
    altImage: "/images/services/thai-therapy-alt.jpeg",
    benefits: [
      "Noticeably expands flexibility and overall range of motion",
      "Releases contracted fascia around spine, hips, and shoulders",
      "Stimulates energetic vitality and mental alertness",
      "Relieves postural fatigue caused by prolonged sedentary work",
    ],
    process: [
      "Preliminary postural and flexibility assessment",
      "Rhythmic acupressure along lower body and spinal Sen lines",
      "Assisted passive stretches and chest-opening mobilizations",
      "Closing upper torso elevation and cranial alignment",
    ],
    pricing: [
      { time: "30 MIN", price: "₹2,000", priceNumber: 2000 },
      { time: "45 MIN", price: "₹2,500", priceNumber: 2500 },
      { time: "1 HOUR", price: "₹3,000", priceNumber: 3000 },
      { time: "90 MIN", price: "₹3,500", priceNumber: 3500 },
    ],
  },
  {
    id: "deep-tissue-massage",
    slug: "deep-tissue-massage",
    name: "Deep Tissue Massage",
    tagline: "Firm, targeted release for chronic muscular knots",
    category: "Deep Relief",
    duration: "30 – 90 min",
    startingPrice: "₹2,000",
    description:
      "Focused structural pressure targeting the sub-layers of muscle fibers and fascia. Built specifically for chronic neck stiffness and desk tension.",
    longDescription:
      "Deep Tissue Massage reaches deep into the sub-layers of muscle tissue and dense fascia. Slow, concentrated friction strokes cross against tight muscle grain to break down persistent adhesion bands, restore postural symmetry, and melt stubborn corporate tension.",
    image: "/images/services/deep-tissue-massage.jpeg",
    altImage: "/images/services/deep-tissue-massage-alt.jpeg",
    benefits: [
      "Dissolves stubborn chronic muscle knots and adhesions",
      "Directly alleviates lower back and upper shoulder rigidity",
      "Improves athletic muscle recovery and tissue elasticity",
      "Releases tension held deep inside postural muscle groups",
    ],
    process: [
      "Identification of specific pain points and trigger zones",
      "Gradual warming of superficial muscular layers",
      "Intense cross-fiber friction with elbows and forearms",
      "Cooling herbal compress and myofascial elongation",
    ],
    pricing: [
      { time: "30 MIN", price: "₹2,000", priceNumber: 2000 },
      { time: "45 MIN", price: "₹2,500", priceNumber: 2500 },
      { time: "1 HOUR", price: "₹3,200", priceNumber: 3200 },
      { time: "90 MIN", price: "₹4,500", priceNumber: 4500 },
    ],
  },
  {
    id: "swedish-massage",
    slug: "swedish-massage",
    name: "Swedish Therapy",
    tagline: "The timeless classic of full-body muscular relaxation",
    category: "Deep Relief",
    duration: "30 – 90 min",
    startingPrice: "₹1,500",
    description:
      "Long, harmonious gliding strokes that enhance arterial circulation and release superficial fatigue. The ideal ritual for first-time visitors.",
    longDescription:
      "The gold standard in therapeutic bodywork, Swedish Therapy employs effleurage (gliding strokes), petrissage (kneading), and friction to gently coax tense muscles into surrender. It revitalizes blood flow and bathes your nervous system in absolute tranquility.",
    image: "/images/services/swedish-massage.jpeg",
    altImage: "/images/services/swedish-massage-alt.jpeg",
    benefits: [
      "Flushes out muscular lactic acid and metabolic waste",
      "Dramatically lowers cortisol and elevates relaxation hormones",
      "Restores natural full-body peripheral circulation",
      "Gentle and deeply soothing with zero post-session soreness",
    ],
    process: [
      "Heated organic sweet almond oil application",
      "Broad sweeping effleurage strokes warming the back and legs",
      "Targeted kneading on tight shoulder and calf muscles",
      "Hot steamed towel wrap to close the session",
    ],
    pricing: [
      { time: "30 MIN", price: "₹1,500", priceNumber: 1500 },
      { time: "45 MIN", price: "₹2,000", priceNumber: 2000 },
      { time: "1 HOUR", price: "₹2,500", priceNumber: 2500 },
      { time: "90 MIN", price: "₹3,500", priceNumber: 3500 },
    ],
  },
  {
    id: "tantra",
    slug: "tantra",
    name: "Tantra Therapy",
    tagline: "Meditative breathwork & energetic somatic alignment",
    category: "Holistic & Traditional",
    duration: "30 – 90 min",
    startingPrice: "₹1,800",
    description:
      "A serene and mindful therapeutic modality centering on intentional breathing, energetic alignment, and profound nervous system tranquility.",
    longDescription:
      "Tantra Therapy is an inward-focused holistic experience designed to quiet a hyperactive corporate mindset. Through deliberate breath pacing and gentle therapeutic touch along energy centers, it guides you into an expansive state of grounded somatic calm.",
    image: "/images/services/tantra-therapy.jpeg",
    altImage: "/images/services/tantra-therapy-alt.jpeg",
    benefits: [
      "Calms acute sympathetic nervous system overload",
      "Facilitates profound emotional grounding and headspace",
      "Restores sensory awareness and mind-body balance",
      "Leaves you with an enduring feeling of quiet lightness",
    ],
    process: [
      "Synchronized breath pacing and mental centering",
      "Subtle energy balancing along bodily pathways",
      "Gentle therapeutic sweeping strokes with botanical oils",
      "Closing singing-bowl vibration and sound stillness",
    ],
    pricing: [
      { time: "30 MIN", price: "₹1,800", priceNumber: 1800 },
      { time: "45 MIN", price: "₹2,200", priceNumber: 2200 },
      { time: "1 HOUR", price: "₹2,700", priceNumber: 2700 },
      { time: "90 MIN", price: "₹3,500", priceNumber: 3500 },
    ],
  },
  {
    id: "moroccan-bath-massage",
    slug: "moroccan-bath-massage",
    name: "Moroccan Bath Massage",
    tagline: "Traditional Hammam steam, black soap & purifying scrub",
    category: "Exfoliation & Bath",
    duration: "60 – 120 min",
    startingPrice: "₹3,000",
    description:
      "An authentic purifying cleansing ritual featuring rich Moroccan black soap, steam infusion, full-body kessa exfoliation, and warm nourishing hydration.",
    longDescription:
      "Rooted in centuries of Maghrebi wellness rituals, this comprehensive Hammam therapy opens pores with warm aromatic steam, softens the epidermis with traditional olive-based black soap (Savon Noir), and polishes the body using an authentic Kessa glove before a deeply hydrating finish.",
    image: "/images/services/moroccan-bath-massage.jpeg",
    altImage: "/images/services/moroccan-bath-massage-alt.jpeg",
    benefits: [
      "Eliminates dead epidermal cellular layers completely",
      "Purifies pores and promotes skin cellular regeneration",
      "Leaves whole-body skin feeling incomparably silky and soft",
      "Combines thorough hygienic detox with muscular relaxation",
    ],
    process: [
      "Warm steam chamber immersion to prepare and soften pores",
      "Application of traditional organic olive Moroccan black soap",
      "Full-body vigorous exfoliation using an authentic Kessa mitt",
      "Nourishing warm oil massage to seal moisture and hydrate skin",
    ],
    pricing: [
      { time: "1 HOUR", price: "₹3,000", priceNumber: 3000 },
      { time: "90 MIN", price: "₹4,000", priceNumber: 4000 },
      { time: "2 HOURS", price: "₹5,000", priceNumber: 5000 },
    ],
  },
  {
    id: "body-scrubbing-massage",
    slug: "body-scrubbing-massage",
    name: "Body Scrubbing Massage",
    tagline: "Natural botanical crystals & radiant renewal",
    category: "Exfoliation & Bath",
    duration: "45 – 90 min",
    startingPrice: "₹2,000",
    description:
      "Full-body sea salt and herbal scrub exfoliation followed by an ultra-nourishing essential oil massage for luminous, velvety skin.",
    longDescription:
      "A dual-action renewal treatment that buffs away environmental pollutants and dull cells with organic mineral crystals, followed by a warm shower and an indulgent essential oil massage that locks in essential moisture for an undeniable natural glow.",
    image: "/images/services/body-scrubbing-massage.jpeg",
    altImage: "/images/services/body-scrubbing-massage-alt.jpeg",
    benefits: [
      "Polishes rough patches and prevents ingrown skin follicles",
      "Stimulates lymphatic circulation and whole-body glow",
      "Maximizes dermal absorption of therapeutic oils",
      "Leaves skin visibly radiant, smoother, and deeply conditioned",
    ],
    process: [
      "Warm herbal towel wrap to relax muscular tension",
      "Invigorating full-body scrub with fine mineral salt crystals",
      "Thermal rinse and warm cleansing towel treatment",
      "Full-body hydrating botanical oil massage",
    ],
    pricing: [
      { time: "45 MIN", price: "₹2,000", priceNumber: 2000 },
      { time: "1 HOUR", price: "₹2,500", priceNumber: 2500 },
      { time: "90 MIN", price: "₹3,500", priceNumber: 3500 },
    ],
  },
  {
    id: "four-hands-massage",
    slug: "four-hands-massage",
    name: "Four Hands Massage",
    tagline: "Two synchronized therapists in seamless harmony",
    category: "Specialty & Couples",
    duration: "60 – 90 min",
    startingPrice: "₹4,500",
    description:
      "The pinnacle of sensory surrender. Two expert therapists work in perfect choreographic synchrony, leaving no room for racing thoughts.",
    longDescription:
      "An extraordinary luxury ritual wherein two master therapists orchestrate simultaneous mirror-image strokes across your body. Because the mind is unable to track four moving hands simultaneously, cognitive chatter quickly vanishes, plunging you into absolute bliss.",
    image: "/images/services/four-hands-massage.jpeg",
    altImage: "/images/services/four-hands-massage-alt.jpeg",
    benefits: [
      "Induces rapid mental quietude and profound stress liberation",
      "Provides double the therapeutic benefit within a single session",
      "Dissolves cognitive over-thinking through sensory immersion",
      "An unforgettable, ultra-luxurious spa experience",
    ],
    process: [
      "Dual-therapist alignment on pressure preferences and rhythm",
      "Simultaneous warm oil application in choreographed unison",
      "Mirrored long-stroke effleurage and synchronized kneading",
      "Synchronized dual cranial and foot pressure finale",
    ],
    pricing: [
      { time: "1 HOUR", price: "₹4,500", priceNumber: 4500 },
      { time: "90 MIN", price: "₹6,000", priceNumber: 6000 },
    ],
  },
  {
    id: "hot-stone-massage",
    slug: "hot-stone-massage",
    name: "Hot Stone Massage",
    tagline: "Heated volcanic basalt stones & thermal muscle melt",
    category: "Deep Relief",
    duration: "60 – 90 min",
    startingPrice: "₹2,800",
    description:
      "Smooth volcanic basalt stones heated in aromatic water baths, glided along tension pathways to melt stubborn rigidity with penetrating heat.",
    longDescription:
      "Natural basalt stones rich in iron retain gentle warmth and radiate healing thermal energy deep into core muscle groups. As heated stones glide smoothly over lubricated muscles, stubborn stiffness melts away effortlessly without requiring heavy physical force.",
    image: "/images/services/hot-stone-massage.jpeg",
    altImage: "/images/services/hot-stone-massage-alt.jpeg",
    benefits: [
      "Penetrating mineral heat relieves stiffness without discomfort",
      "Expands blood vessels to accelerate cellular repair",
      "Calms nervous system anxiety and muscular spasms",
      "Induces deeply restorative, tranquil nighttime sleep",
    ],
    process: [
      "Basalt stone warming to the optimal thermal temperature",
      "Warm essential oil application across key spinal points",
      "Strategic stone placement along chakra energy centers",
      "Dynamic gliding massage utilizing heated stones as tools",
    ],
    pricing: [
      { time: "1 HOUR", price: "₹2,800", priceNumber: 2800 },
      { time: "90 MIN", price: "₹3,800", priceNumber: 3800 },
    ],
  },
  {
    id: "couple-massage",
    slug: "couple-massage",
    name: "Couple Massage",
    tagline: "Private luxury couple suite & side-by-side serenity",
    category: "Specialty & Couples",
    duration: "60 – 90 min",
    startingPrice: "₹4,500 (For Two)",
    description:
      "Share an unforgettable wellness escape in our private couple's suite with tranquil ambient lighting, aromatic scents, and side-by-side treatments.",
    longDescription:
      "Designed for partners, anniversaries, or special celebrations, our Couple Massage takes place in a dedicated private couple suite. Each guest receives a tailored consultation and personalized therapy administered simultaneously by two dedicated therapists.",
    image: "/images/services/couple-massage.jpeg",
    altImage: "/images/services/couple-massage-alt.jpeg",
    benefits: [
      "A serene, memorable wellness experience in complete privacy",
      "Individualized pressure and oil selections for both partners",
      "Reduces shared mental fatigue and restores connection",
      "Complimentary soothing post-session herbal tea service",
    ],
    process: [
      "Private couple suite welcome with warm infused herbal towels",
      "Individual pressure and therapy style consultations",
      "Side-by-side simultaneous treatments by two therapists",
      "Quiet post-session relaxation in the private couple lounge",
    ],
    pricing: [
      { time: "1 HOUR (FOR TWO)", price: "₹4,500", priceNumber: 4500 },
      { time: "90 MIN (FOR TWO)", price: "₹6,500", priceNumber: 6500 },
    ],
  },
  {
    id: "signature-massage",
    slug: "signature-massage",
    name: "Signature Massage",
    tagline: "The crown jewel therapy combining the best of East & West",
    category: "Specialty & Couples",
    duration: "60 – 120 min",
    startingPrice: "₹3,500",
    description:
      "Our most celebrated bespoke ritual. Seamlessly weaving Thai stretches, Balinese pressure, Deep Tissue focus, and warm signature essential oils.",
    longDescription:
      "The crown jewel of ARA Spa, the Signature Massage is an artfully customized journey. Beginning with dry Thai stretches to lengthen joints, transitioning into Deep Tissue and Balinese acupressure with warm signature oils, and concluding with a revitalizing head and face massage.",
    image: "/images/services/signature-massage.jpeg",
    altImage: "/images/services/signature-massage-alt.jpeg",
    benefits: [
      "The ultimate synthesis of East and West massage arts",
      "Fully tailored to your unique anatomical posture and stress points",
      "Relieves surface stiffness while untying deep muscular knots",
      "Our highest-rated, most requested luxury therapy",
    ],
    process: [
      "In-depth consultation on specific tension patterns",
      "Opening dry Thai stretching to mobilize joints and fascia",
      "Transition to Balinese acupressure and Deep Tissue work",
      "Finishing facial acupressure and warm botanical scalp wrap",
    ],
    pricing: [
      { time: "1 HOUR", price: "₹3,500", priceNumber: 3500 },
      { time: "90 MIN", price: "₹4,500", priceNumber: 4500 },
      { time: "2 HOURS", price: "₹5,500", priceNumber: 5500 },
    ],
    isSignature: true,
  },
];

export function getTreatmentBySlug(slug: string): Treatment | undefined {
  return TREATMENTS.find((t) => t.slug === slug);
}
