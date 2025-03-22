
import { BookOpen, Award, Star } from "lucide-react";

const Publications = () => {
  return (
    <section id="publications" className="py-20 bg-dark-200">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            <span className="text-gradient">Publications</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            My research work and contributions to the fields of AI, Data Science, and Human Computer Interaction.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Publication 1 */}
          <div className="glass-card p-6 rounded-xl">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-bold text-highlight-blue">
                Classification of Diagnosed Social Media Text Related to Disease Using BERT and LightGBM
              </h3>
              <span className="text-sm text-gray-400">2023</span>
            </div>
            
            <p className="text-gray-300 mb-3 text-sm italic">
              Chavda R., Makwana D., Patel V., Shukla A.
            </p>
            
            <div className="flex items-center mb-4">
              <Award className="text-yellow-500 mr-2" size={18} />
              <p className="text-sm text-gray-300">
                Letter of Recommendation from Director of NIT, Surat for AI research acumen
              </p>
            </div>
            
            <ul className="space-y-2 text-gray-300">
              <li className="flex">
                <Star className="text-yellow-500 mr-2 shrink-0 mt-1" size={16} />
                <p>Prestigious AMIA 23rd Annual Symposium, USA accepted and featured my peer-reviewed full paper as one of top presentations</p>
              </li>
              <li className="flex">
                <Star className="text-yellow-500 mr-2 shrink-0 mt-1" size={16} />
                <p>Pioneered top-performing NLP model in Social Media Mining for Health - 2023 (SMM4H-23) shared task, set new field benchmark</p>
              </li>
              <li className="flex">
                <Star className="text-yellow-500 mr-2 shrink-0 mt-1" size={16} />
                <p>Achieved exceptional performance of 0.94 F1 Score by conceptualizing fine-tuned BERT embedding with LightGBM model pipeline</p>
              </li>
            </ul>
          </div>
          
          {/* Publication 2 */}
          <div className="glass-card p-6 rounded-xl">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-bold text-highlight-purple">
                Continuous Emotional State Modelling | Human Computer Interaction
              </h3>
              <span className="text-sm text-gray-400">2023-2024</span>
            </div>
            
            <p className="text-gray-300 mb-3 text-sm italic">
              Chavda R., Pandey S., Upadhyay A.
            </p>
            
            <div className="flex items-center mb-4">
              <BookOpen className="text-blue-500 mr-2" size={18} />
              <p className="text-sm text-gray-300">
                Full length paper under peer-review in the Proceedings of National Academy of Science, USA
              </p>
            </div>
            
            <ul className="space-y-2 text-gray-300">
              <li className="flex">
                <Star className="text-purple-500 mr-2 shrink-0 mt-1" size={16} />
                <p>Regressively predicted accurate human emotional state, using 9 physiological signals, derived key input features using Neurokit lib</p>
              </li>
              <li className="flex">
                <Star className="text-purple-500 mr-2 shrink-0 mt-1" size={16} />
                <p>Achieved Avg. RMSE of 1.33 across different generalizing test data scenario on Decision Tree Regressor model with early stopping</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
