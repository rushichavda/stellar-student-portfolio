
import { Briefcase, Calendar, ExternalLink } from "lucide-react";

interface ExperienceItemProps {
  title: string;
  company: string;
  duration: string;
  achievements: string[];
  highlight?: string;
  current?: boolean;
}

const ExperienceItem = ({ title, company, duration, achievements, highlight, current }: ExperienceItemProps) => {
  return (
    <div className="glass-card p-6 rounded-xl relative mb-8">
      {current && (
        <div className="absolute -top-3 -right-3 bg-highlight-green px-3 py-1 rounded-full text-xs font-semibold">
          Current
        </div>
      )}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-highlight-blue">{company}</p>
        </div>
        <div className="mt-2 md:mt-0 flex items-center text-gray-400">
          <Calendar size={14} className="mr-1" />
          <span>{duration}</span>
        </div>
      </div>
      
      {highlight && (
        <div className="mb-4 p-3 bg-white/5 rounded-lg text-gray-200 border-l-2 border-highlight-purple">
          {highlight}
        </div>
      )}
      
      <ul className="space-y-2">
        {achievements.map((achievement, index) => (
          <li key={index} className="text-gray-300 flex">
            <span className="text-highlight-purple mr-2">•</span>
            <span>{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "AI Research Intern",
      company: "IBM AI Research",
      duration: "Jun 2024 - Present",
      current: true,
      highlight: "Prestigious American Geophysical Union (AGU), United States of America, My First authored full abstract is under the peer review",
      achievements: [
        "Introduced novel soil moisture estimation, using satellite images by fine-tuning the Prithvi-100, GFM (Geospatial Foundation Model)",
        "Compiled and processed dataset of 3 yrs of satellite images of 40 soil sensors' data of Texas regions with Rasterio and Geedim library",
        "Achieved a test MAE of 0.0357, RMSE of 0.055 in the moisture prediction with U-Net as baseline model using custom loss function"
      ]
    },
    {
      title: "Gen AI for Hardware",
      company: "Harvard University",
      duration: "May 2024 - Jul 2024",
      highlight: "Awarded LOR from Head Prof for exemplary performance",
      achievements: [
        "Developed pipeline to automatically annotate dataset for hardware research corpus (200mn tokens) using few-shot LLM evaluation",
        "Optimized evaluation parameters by formulating custom task in YAML framework, and seamlessly integrated evaluation pipeline",
        "Achieved a 94% F1-Score, by Implementing the cutting-edge LLM models, including GPT - 4, GPT - 4o, Llama3 - 8b and Mistral - 7b"
      ]
    },
    {
      title: "Gen AI Intern",
      company: "Ernst & Youngs (EY)",
      duration: "Jun 2023 - Aug 2023",
      achievements: [
        "Developed the proof of concept for Automatic ESG Reporting using fine-tuned LLM, that assist the client in speeding up reporting",
        "Reduced the LLM cloud hosting cost to 45% using Low-rank Adaptation fine tuning framework, with equivalent response quality",
        "Achieved a 86% BERTScore and 81% correctness in responses compared to gold standards, leading to a reduction in human hours"
      ]
    },
    {
      title: "NLP Intern",
      company: "IntelEhealth",
      duration: "Jun 2023 - Nov 2023",
      achievements: [
        "Built an AI medical assistance system using medical books, can suggest diagnose to patients, implemented on Gradio user interface",
        "Reduced cost by 31%, by utilizing LoRA (Low Rank Adaptation) Framework to fine tune LLaMA 13B using less compute and storage",
        "Improved correctness to 76%, BERTScore 87%, reduce response time by 39%, by using Langchain Agent with GPT-3.5-turbo APIs"
      ]
    },
    {
      title: "Computer Vision Intern",
      company: "Reliance JIO",
      duration: "Jun 2022 - Aug 2022",
      achievements: [
        "Deployed AI-based smart technology to ensure perimeter security measures of venue for large-scale event, worked in a team of 2",
        "Implemented Number plate recognition system using the video feed of vehicle number plates from the entrance of the parking",
        "Enhanced accuracy to 84% and reduced character error rate by utilizing advanced image processing techniques to limit motion blur"
      ]
    },
    {
      title: "Data Science Intern",
      company: "TechnoBrain",
      duration: "Jun 2022 - Oct 2022",
      achievements: [
        "Achieved 78% Intersection over union, in the personalized vegetable recommendation model, improving the customer experience",
        "Trained LightGBM model as recommendation engine, by deriving impactful input features from raw data using statistical data analysis"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-dark-100">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            <span className="text-gradient">Professional Experience</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            My journey through various professional experiences and internships in the field of AI and Data Science.
          </p>
        </div>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={index}
              title={exp.title}
              company={exp.company}
              duration={exp.duration}
              achievements={exp.achievements}
              highlight={exp.highlight}
              current={exp.current}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
