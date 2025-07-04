import { Review } from '@/types/review.types';
import review1 from '@/assets/review/r-1.svg';
import review2 from '@/assets/review/r-2.svg';
import review3 from '@/assets/review/r-3.webp';
import review4 from '@/assets/review/r-4.svg';
import review5 from '@/assets/review/r-5.svg';

export const reviewData: Review[] = [
  {
    text: '"Bralvio\'s medical device testing protocols have significantly improved our validation process. Their attention to regulatory requirements and documentation has streamlined our FDA submission process by nearly 40%."',
    author: 'Dr. Sarah Chen',
    role: 'Director of Regulatory Affairs, Boston Scientific',
    logo: review1,
  },
  {
    text: '"We partnered with Bralvio to develop our next-generation patient monitoring system. Their expertise in medical sensor integration and clinical data management helped us create a solution that not only meets regulatory standards but genuinely improves patient outcomes in post-surgical care."',
    author: 'Michael Johnson',
    role: 'Chief Technology Officer, Medtronic',
    logo: review2,
  },
  {
    text: '"Bralvio\'s clinical data management platform has transformed how we conduct our multi-center trials. The ability to standardize data collection across sites while maintaining compliance with HIPAA and GDPR has been invaluable to our research program."',
    author: 'Dr. Elizabeth Blackwell',
    role: 'Head of Clinical Research, Mayo Clinic',
    logo: review3,
  },
  {
    text: '"As a healthcare startup, navigating the complex regulatory landscape was our biggest challenge. Bralvio\'s comprehensive support throughout the 510(k) clearance process was exceptional. Their team\'s expertise in both technical development and regulatory strategy gave us confidence during a critical phase of our company\'s growth."',
    author: 'Dr. James Wilson',
    role: 'Founder & CEO, NeuraTech Medical',
    logo: review4,
  },
  {
    text: '"The integration of Bralvio\'s remote monitoring platform with our existing hospital systems exceeded our expectations. Patient satisfaction scores have increased by 27%, and our clinical staff reports significant improvements in workflow efficiency. Their understanding of both clinical needs and technical implementation is truly unique in the healthcare technology space."',
    author: 'Dr. Maria Rodriguez',
    role: 'Chief Medical Information Officer, Cleveland Clinic',
    logo: review5,
  },
];