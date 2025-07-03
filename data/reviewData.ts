import { Review } from '@/types/review.types';
import review1 from '@/assets/review/r-1.svg';
import review2 from '@/assets/review/r-2.svg';
import review3 from '@/assets/review/r-3.webp';
import review4 from '@/assets/review/r-4.svg';
import review5 from '@/assets/review/r-5.svg';

export const reviewData: Review[] = [
  {
    text: '“Scale is doing an amazing job providing high-quality uncontaminated evals, now with code and instruction following!”',
    author: 'Noam Brown',
    role: 'Member of Technical Staff, OpenAI',
    logo: review1,
  },
  {
    text: '“We partnered with Scale AI to work with Enterprises to adopt Llama and train custom models with their own data. We are excited to collectively make Llama the industry standard and bring the benefits of AI to everyone.”',
    author: 'Mark Zuckerberg',
    role: 'Founder and CEO, Meta',
    logo: review2,
  },
  {
    text: '“Great to see Gemini 1.5 pro top the new Scale SEAL leaderboard for adversarial robustness! Congrats to the entire Gemini team...and the AI safety team for leading the charge on building in robustness to our models as a core capability. Thanks to the Scale AI team for doing the vital work to create these rigorous benchmarks, the field needs more great work on topics like this”',
    author: 'Demis Hassabis',
    role: 'CEO, Deepmind',
    logo: review3,
  },
  {
    text: '“Nice, a serious contender to LMSYS in evaluating LLMs has entered the chat: SEAL Leaderboards. LLM evals are improving, but not so long ago their state was very bleak, with qualitative experience very often disagreeing with quantitative rankings. Good evals are very difficult to build...They have to be comprehensive, representative, of high quality, and measure gradient signal, and there are a lot of details to think through and get right before your qualitative and quantitative assessments line up. ...Good evals are unintuitively difficult, highly work-intensive, but quite important, so I\'m happy to see more organizations join the effort to do it well.”',
    author: 'Andrej Karpathy',
    role: 'Founder, EurekaLabsAI',
    logo: review4,
  },
  {
    text: '“We\'re going to need a lot more investment in high-quality evals and benchmarks to help us understand the actual comparative utility of the various models. This new set of private evals and leaderboards from Scale are great to see”',
    author: 'Nat Friedman',
    role: 'Entrepreneur and Investor, and Former CEO of GitHub',
    logo: review5,
  },
];
