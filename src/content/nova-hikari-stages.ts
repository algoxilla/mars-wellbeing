export interface HikariStage {
  number: string;
  id: string;
  title: string;
  movement: "Settling & Grounding" | "Resonance & Insight" | "Restoration & Agency";
  theme: string;
  inquiry: string;
  somaticPractice: string;
  duration: string;
  freeStage?: boolean;
}

export const NOVA_HIKARI_STAGES: HikariStage[] = [
  {
    number: "01",
    id: "origin",
    title: "Origin",
    movement: "Settling & Grounding",
    theme: "Acknowledging where you stand today without shame or judgment.",
    inquiry: "What is currently carrying the heaviest emotional or cognitive load in your life?",
    somaticPractice: "Feet-on-floor grounding and three deep physiological sighs.",
    duration: "12-15 mins",
    freeStage: true,
  },
  {
    number: "02",
    id: "grounding",
    movement: "Settling & Grounding",
    title: "Grounding",
    theme: "Somatic pacing, nervous system regulation, and autonomic settling.",
    inquiry: "Where in your physical body does chronic tension or vigilance accumulate?",
    somaticPractice: "4-4-4 Box breathing and progressive shoulder release.",
    duration: "10-14 mins",
    freeStage: true,
  },
  {
    number: "03",
    id: "unpacking",
    movement: "Settling & Grounding",
    title: "Unpacking",
    theme: "Untangling cognitive noise, chronic expectations, and internalized pressure.",
    inquiry: "Which of your current obligations are self-chosen, and which are inherited from external expectations?",
    somaticPractice: "Writing release: non-linear brain-dump without editing.",
    duration: "15-20 mins",
  },
  {
    number: "04",
    id: "resonance",
    movement: "Resonance & Insight",
    title: "Resonance",
    theme: "Reconnecting with authentic emotional frequencies beneath chronic fatigue.",
    inquiry: "What emotional state is your fatigue protecting you from feeling?",
    somaticPractice: "Sensory naming: identify five quiet sounds in your environment.",
    duration: "14-18 mins",
  },
  {
    number: "05",
    id: "illumination",
    movement: "Resonance & Insight",
    title: "Illumination",
    theme: "Discovering clarity, recognizing recurring patterns, and reframing your narrative.",
    inquiry: "If you could stop defending a specific story about yourself, what truth remains?",
    somaticPractice: "Soft-gaze contemplation toward a natural light source.",
    duration: "16-20 mins",
  },
  {
    number: "06",
    id: "integration",
    movement: "Resonance & Insight",
    title: "Integration",
    theme: "Synthesizing insights into daily behavioral and cognitive boundaries.",
    inquiry: "What single boundary would create immediate breathing room in your schedule tomorrow?",
    somaticPractice: "Postural reset: aligning spine and opening chest space.",
    duration: "15-18 mins",
  },
  {
    number: "07",
    id: "renewal",
    movement: "Restoration & Agency",
    title: "Renewal",
    theme: "Replenishing depleted emotional reserves and rediscovering restful solitude.",
    inquiry: "What does genuine replenishment look like for you when productivity is removed?",
    somaticPractice: "Audio-guided ambient soundscape meditation.",
    duration: "18-22 mins",
  },
  {
    number: "08",
    id: "compassion",
    movement: "Restoration & Agency",
    title: "Compassion",
    theme: "Cultivating unhurried self-kindness and softening inner criticism.",
    inquiry: "How would you speak to a trusted friend who was carrying the exact exhaustion you feel?",
    somaticPractice: "Hand-to-heart self-soothing touch practice.",
    duration: "12-16 mins",
  },
  {
    number: "09",
    id: "agency",
    movement: "Restoration & Agency",
    title: "Agency",
    theme: "Re-anchoring personal sovereignty, decisive saying of 'no', and active direction.",
    inquiry: "Where have you surrendered your autonomy out of fear of disappointing others?",
    somaticPractice: "Firm stance grounding and vocal tone centering.",
    duration: "15-20 mins",
  },
  {
    number: "10",
    id: "transcendence",
    movement: "Restoration & Agency",
    title: "Transcendence",
    theme: "Connecting to meaningful purpose, broader community, and lasting inner peace.",
    inquiry: "How will you carry this quiet sanctuary back into your daily world and relationships?",
    somaticPractice: "Full-body breath integration and dedication of peaceful intention.",
    duration: "20-25 mins",
  },
];
