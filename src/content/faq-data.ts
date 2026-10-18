export interface FAQItem {
  question: string;
  answer: string;
  category: "General" | "Nova Hikari" | "Community Circles" | "Professional Directory" | "Safety & Privacy";
}

export const FAQ_DATA: FAQItem[] = [
  {
    category: "General",
    question: "What is MARS Wellbeing?",
    answer: "MARS (Mental Assistance Reassurance System) is a wellbeing platform originating in Bengaluru, India. It combines self-guided introspective journeys (Nova Hikari), facilitator-held community circles, and direct access to vetted, qualified mental health professionals.",
  },
  {
    category: "General",
    question: "Is MARS an emergency or psychiatric crisis service?",
    answer: "No. MARS is not a psychiatric hospital, medical clinic, or suicide crisis helpline. If you or someone you know is in acute distress, please contact Tele-MANAS (14416), KIRAN (1800-599-0019), or emergency services (112) immediately. Official crisis numbers are accessible at the top of every page on MARS.",
  },
  {
    category: "General",
    question: "Why is MARS starting with Bengaluru first?",
    answer: "Bengaluru represents both India’s high-velocity technological innovation and intense cognitive pressure. We are validating demand, gathering feedback, and hosting in-person community circles in Bengaluru before expanding our footprint across other cities.",
  },
  {
    category: "Nova Hikari",
    question: "What is Nova Hikari and how does it work?",
    answer: "Nova Hikari ('New Light') is a structured 10-stage contemplative journey. Each stage guides you through quiet reflection, somatic grounding exercises, and exploratory questions designed to help untangle stress and restore inner agency. There are no timers, no streaks, and no gamification.",
  },
  {
    category: "Nova Hikari",
    question: "How do I get started with Nova Hikari?",
    answer: "You can explore foundational stages (Origin and Grounding) immediately via self-guided practice in your browser, with 100% private local reflections and no tracking.",
  },
  {
    category: "Nova Hikari",
    question: "Where are my personal journal entries and reflection notes stored?",
    answer: "By default, your reflections remain private and stored strictly on your local device browser (local storage). In future phases when cloud accounts are introduced, reflection data will be secured with strict Row-Level Security, and you can export or delete your data at any time.",
  },
  {
    category: "Community Circles",
    question: "What happens in a MARS Community Circle?",
    answer: "Community circles are small, facilitator-held gatherings (8-12 participants) hosted in calm Bengaluru spaces or online. They are structured to create safe, non-judgmental dialogue where participants can speak honestly about stress, isolation, and life transitions without unsolicited advice or performative networking.",
  },
  {
    category: "Community Circles",
    question: "Who facilitates these circles?",
    answer: "Circles are held by trained facilitators and mental health practitioners who adhere to strict confidentiality, trauma-informed guidelines, and community safety protocols.",
  },
  {
    category: "Professional Directory",
    question: "How are mental health professionals vetted on MARS?",
    answer: "In production, every practitioner listed on MARS will undergo multi-step verification: verification of Master's/M.Phil/Doctoral qualifications from recognized universities, active RCI (Rehabilitation Council of India) clinical registrations where applicable, background checks, and adherence to ethical supervisory standards. (Note: Profiles in the current development preview are clearly tagged demonstration placeholders).",
  },
  {
    category: "Professional Directory",
    question: "How do appointments and payments work?",
    answer: "Users will be able to review verified profiles, choose between in-person consultations in Bengaluru or secure video sessions online, and book time slots with transparent pricing in INR. All payments will be processed securely via standard Indian gateways supporting UPI and domestic cards.",
  },
  {
    category: "Safety & Privacy",
    question: "Does MARS sell or share my personal data with employers or third parties?",
    answer: "Never. MARS operates under strict data sovereignty principles in compliance with the Digital Personal Data Protection (DPDP) Act 2023. We do not use third-party behavioral advertising trackers, and we never share individual member reflections or appointment details with corporate employers.",
  },
  {
    category: "Safety & Privacy",
    question: "What should I do if I feel overwhelmed or in crisis?",
    answer: "Please reach out to qualified emergency care immediately. In India, call the 24/7 toll-free National Mental Health Helpline Tele-MANAS at 14416 or KIRAN at 1800-599-0019. In Bengaluru, NIMHANS Centre for Well Being can be reached at 080-26995000.",
  },
];
