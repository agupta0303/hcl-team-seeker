import { Activity, Shield, Heart } from 'lucide-react';

const Card = ({ title, description, icon: Icon }) => {
  return (
    <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
      <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const KeyFeatures = () => {
  const features = [
    {
      title: 'Wellness Tracking',
      description: 'Track your daily health metrics including steps, sleep, water intake, and more. Visualize your progress with intuitive charts and insights.',
      icon: Activity
    },
    {
      title: 'Preventive Care',
      description: 'Access comprehensive information about preventive measures for common diseases, including risk factors, warning signs, and screening recommendations.',
      icon: Shield
    },
    {
      title: 'Health Assessments',
      description: 'Take personalized health assessments to identify potential risks and receive tailored recommendations for a healthier lifestyle.',
      icon: Heart
    }
  ];

  return (
    <section id="features" className="py-24 bg-gray-50/50 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our comprehensive platform provides everything you need to manage your health proactively and stay connected with your care team.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
