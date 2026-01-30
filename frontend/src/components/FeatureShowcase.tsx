import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Card, CardContent } from '@/components/ui/card';
import { QrCode, Shield, Heart, Users, Database, Globe } from 'lucide-react';

const FeatureShowcase = () => {
  const visibleElements = useScrollAnimation();

  const features = [
    {
      icon: QrCode,
      title: 'Digital Health ID',
      description: 'Instant access to medical records via QR code scanning',
      color: 'text-foreground',
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'End-to-end encryption ensuring patient privacy',
      color: 'text-foreground',
    },
    {
      icon: Heart,
      title: 'Health Monitoring',
      description: 'Track vaccinations, medications, and health trends',
      color: 'text-foreground',
    },
    {
      icon: Users,
      title: 'Multi-User Access',
      description: 'Workers, doctors, and administrators in one platform',
      color: 'text-foreground',
    },
    {
      icon: Database,
      title: 'Comprehensive Records',
      description: 'Complete medical history with file attachments',
      color: 'text-foreground',
    },
    {
      icon: Globe,
      title: 'Multilingual Support',
      description: 'Available in 5 languages for accessibility',
      color: 'text-foreground',
    },
  ];

  return (
    <section className="relative py-20 bg-background overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div 
          className={`text-center mb-16 fade-in-up ${visibleElements.has('features-header') ? 'visible' : ''}`}
          data-animate="features-header"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive Healthcare Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our platform provides everything needed for effective healthcare management, 
            from digital IDs to comprehensive medical records tracking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={feature.title}
                className={`hover-lift slide-in-up ${visibleElements.has(`feature-${index}`) ? 'visible' : ''}`}
                data-animate={`feature-${index}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className={`float mb-4 ${feature.color}`}>
                    <Icon size={48} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
