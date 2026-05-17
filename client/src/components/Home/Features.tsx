import { heroSectionData } from "../../assets/assets";

const Features = () => {
  return (
    <section className="bg-white py-5 border border-app-border/80 rounded-xl">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {heroSectionData.hero_features.map((feature, i) => (
            <div key={i} className="flex items-center gap-3 py-3">
              <div className="size-10 rounded-lg bg-app-cream flex-center shrink-0">
                <feature.icon className="size-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-app-green">
                  {feature.title}
                </p>
                <p className="text-xs text-app-text-light">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
