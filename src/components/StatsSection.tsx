import { Scale, Gavel, Trophy, DollarSign } from 'lucide-react';
const stats = [{
  number: "2,500+",
  label: "Cases Handled",
  icon: Gavel
}, {
  number: "98%",
  label: "Success Rate",
  icon: Trophy
}, {
  number: "$50M+",
  label: "Client Recoveries",
  icon: DollarSign
}, {
  number: "25+",
  label: "Years of Excellence",
  icon: Scale
}];
const StatsSection = () => {
  return <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-custom">
        <div className="text-center mb-16 text-white">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Where <span className="opacity-90 text-white">Legal Excellence</span>
            <br />
            Meets Results
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto text-white">
            Join thousands of clients who have achieved successful legal outcomes with our firm
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => <div key={index} className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold mb-2 rounded-none bg-[#0b309e]">{stat.number}</div>
              <div className="text-lg opacity-80">{stat.label}</div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default StatsSection;