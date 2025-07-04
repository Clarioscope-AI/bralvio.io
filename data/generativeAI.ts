import { SectionType } from '@/types/generativeAI';
import DataEngineImage from '../assets/enterprise_ai_image/data-engine.webp';
import FoundationModelsImage from '../assets/enterprise_ai_image/foundation-models.webp';
import RlhfImage from '../assets/enterprise_ai_image/rlhf.webp';
import NewFeatureImage from '../assets/enterprise_ai_image/whole-model.webp';

export const sections: SectionType[] = [
    {
    id: 'new-feature',
    title: 'New AI Feature',
    description:
      'Leverage cutting-edge AI capabilities to enhance your enterprise workflows with innovative solutions tailored to your needs.',
    image: NewFeatureImage,
  },
  {
    id: 'fine-tuning',
    title: 'Fine-Tuning and RLHF',
    description:
      'Adapt best-in-class foundation models to your business and your specific data to build sustainable, successful AI programs and data from your enterprise.',
    image: DataEngineImage,
  },
  {
    id: 'foundation-models',
    title: 'Foundation Models',
    description:
      'Bralvio partners or integrates with all of the leading AI models, from open-source to closed-source, such as OpenAI, Google, Meta, Cohere, and more.',
    image: FoundationModelsImage,
  },
  {
    id: 'enterprise-data',
    title: 'Enterprise Data',
    description:
      "Bralvio's Data Engine enables you to integrate your enterprise data into the fold of these models, providing the base for long-term strategic differentiation.",
    image: RlhfImage,
  },
  
];
