export interface FingerspellLetter {
  letter: string;
  description: string;
  handshape: string;
  tips: string;
}

export const FINGERSPELLING_ALPHABET: Record<string, FingerspellLetter> = {
  A: {
    letter: 'A',
    description: 'Closed fist with thumb upright against the index finger side.',
    handshape: 'Fist, thumb alongside index',
    tips: 'Ensure thumb rests along the side of the fist, not folded over.'
  },
  B: {
    letter: 'B',
    description: 'Open flat hand with 4 fingers pointing upward, thumb folded flat across palm.',
    handshape: 'Flat hand, fingers together, thumb tucked',
    tips: 'Keep the 4 fingers straight and tightly together.'
  },
  C: {
    letter: 'C',
    description: 'Hand curved into a "C" shape facing outward.',
    handshape: 'Curved arch like the letter C',
    tips: 'Fingers and thumb form a smooth arc facing the viewer.'
  },
  D: {
    letter: 'D',
    description: 'Index finger pointing straight up, thumb touching middle, ring, and pinky tips forming an O.',
    handshape: 'Index upright, other fingers form loop with thumb',
    tips: 'Keep the index finger straight and perpendicular.'
  },
  E: {
    letter: 'E',
    description: 'Fingers curled inward touching the thumb folded tightly underneath.',
    handshape: 'Curled fingertips resting on thumb edge',
    tips: 'Fingers should rest lightly on top edge of the thumb.'
  },
  F: {
    letter: 'F',
    description: 'Index finger and thumb tips touch to form a circle; remaining 3 fingers spread upright.',
    handshape: 'OK sign with 3 fingers straight and spread',
    tips: 'Similar to the OK gesture, keep other 3 fingers straight.'
  },
  G: {
    letter: 'G',
    description: 'Index finger and thumb extend parallel horizontally pointing sideways.',
    handshape: 'Index and thumb pointing parallel horizontally',
    tips: 'Rotate wrist so knuckles face toward you, index pointing left/right.'
  },
  H: {
    letter: 'H',
    description: 'Index and middle fingers extend horizontally together, thumb resting underneath.',
    handshape: 'Two fingers extended horizontally together',
    tips: 'Keep index and middle fingers touching.'
  },
  I: {
    letter: 'I',
    description: 'Fist with pinky finger pointing straight up.',
    handshape: 'Pinky finger extended upright',
    tips: 'Only the pinky extends; other fingers form a tight fist with thumb.'
  },
  J: {
    letter: 'J',
    description: 'Start with letter "I" (pinky up) and trace a "J" hook curve downward in the air.',
    handshape: 'Pinky traces J shape in air',
    tips: 'Smooth sweeping curve with the pinky tip.'
  },
  K: {
    letter: 'K',
    description: 'Index finger points up, middle finger points forward, thumb placed between them.',
    handshape: 'Index up, middle forward, thumb wedged between',
    tips: 'Palm faces forward with middle finger angled outward.'
  },
  L: {
    letter: 'L',
    description: 'Index finger points up and thumb points out at a 90° angle forming an "L".',
    handshape: 'L-shape with index and thumb',
    tips: 'Clear 90-degree angle between thumb and index finger.'
  },
  M: {
    letter: 'M',
    description: 'Fist with thumb tucked underneath the first three fingers (index, middle, ring).',
    handshape: 'Three fingers draped over thumb',
    tips: 'Three knuckles visible over the tucked thumb.'
  },
  N: {
    letter: 'N',
    description: 'Fist with thumb tucked underneath the first two fingers (index, middle).',
    handshape: 'Two fingers draped over thumb',
    tips: 'Two knuckles visible over the tucked thumb.'
  },
  O: {
    letter: 'O',
    description: 'All fingers curved down to meet the thumb tip, creating an "O" circular ring.',
    handshape: 'Fingertips meet thumb tip in O circle',
    tips: 'Keep rounded opening clearly visible.'
  },
  P: {
    letter: 'P',
    description: 'Similar to "K" handshape, but pointed downwards with middle finger horizontal.',
    handshape: 'K handshape tilted pointing downward',
    tips: 'Point index downward with thumb pressed between index and middle.'
  },
  Q: {
    letter: 'Q',
    description: 'Similar to "G", but pointed downwards toward the ground.',
    handshape: 'Index and thumb pointing downward',
    tips: 'Thumb and index pointing down like pinching a coin.'
  },
  R: {
    letter: 'R',
    description: 'Index and middle fingers crossed over each other upright (like wishing luck).',
    handshape: 'Middle finger crossed over index finger',
    tips: 'Middle finger crosses in front of the index finger.'
  },
  S: {
    letter: 'S',
    description: 'Tight fist with thumb wrapped across the front of all curled fingers.',
    handshape: 'Fist with thumb wrapped across front',
    tips: 'Different from "A" — thumb is centered across the knuckles.'
  },
  T: {
    letter: 'T',
    description: 'Fist with thumb tucked between the index and middle finger.',
    handshape: 'Thumb poking between index and middle finger',
    tips: 'Only one knuckle (index) draped over the thumb.'
  },
  U: {
    letter: 'U',
    description: 'Index and middle fingers pointing straight up together; ring and pinky folded.',
    handshape: 'Index and middle fingers straight together',
    tips: 'Keep index and middle fingers pressed tightly against each other.'
  },
  V: {
    letter: 'V',
    description: 'Index and middle fingers pointing up in a "V" peace sign; spread apart.',
    handshape: 'V sign with two fingers spread',
    tips: 'Fingers are separated into a distinct V shape.'
  },
  W: {
    letter: 'W',
    description: 'Index, middle, and ring fingers spread upright forming a "W" shape.',
    handshape: 'Three middle fingers spread upright',
    tips: 'Thumb holds down the pinky finger.'
  },
  X: {
    letter: 'X',
    description: 'Fist with index finger bent into a hook shape pointing upward.',
    handshape: 'Index finger hooked like a pirate hook',
    tips: 'Bend only the top two joints of the index finger.'
  },
  Y: {
    letter: 'Y',
    description: 'Thumb and pinky finger extended outward; three middle fingers curled into palm.',
    handshape: 'Hang-loose / Shaka sign (thumb + pinky extended)',
    tips: 'Spread thumb and pinky wide while middle fingers stay flat.'
  },
  Z: {
    letter: 'Z',
    description: 'Index finger traces a "Z" pattern in the air in front of chest.',
    handshape: 'Index finger draws Z in the air',
    tips: 'Draw top stroke across, diagonal down-left, and bottom stroke across.'
  }
};
