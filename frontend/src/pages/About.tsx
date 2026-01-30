const About = () => {
  return (
    <section
      className="min-h-[85vh] pt-28 pb-24"
      style={{ backgroundColor: "#F9EFE3" }}
    >
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-20">
          <h1
            className="text-5xl font-extrabold mb-6 tracking-tight"
            style={{ color: "#000000" }}
          >
            About KerMedix
          </h1>

          <p
            className="text-lg max-w-3xl mx-auto"
            style={{ color: "#000000" }}
          >
            A secure digital health record management system dedicated to improving
            healthcare access, continuity, and equity for migrant workers.
          </p>

          <div className="w-20 h-1 mx-auto mt-8 rounded-full" style={{ backgroundColor: "#FFCC33" }} />
        </div>

        <div className="space-y-16">

          {/* Purpose */}
          <section className="bg-white rounded-3xl p-12 border border-black/10">
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: "#000000" }}
            >
              Project Purpose
            </h2>
            <p
              className="leading-relaxed text-base"
              style={{ color: "#402EE6" }}
            >
              Migrant workers form the backbone of Kerala’s workforce, yet many lack
              consistent access to healthcare and medical documentation. KerMedix
              addresses this challenge by enabling a centralized, portable, and secure
              digital health record system that follows workers wherever they go.
            </p>
          </section>

          {/* Why Records */}
          <section className="bg-white rounded-3xl p-12 border border-black/10">
            <h2
              className="text-2xl font-bold mb-10"
              style={{ color: "#000000" }}
            >
              Why Health Records Matter
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                ["Continuity of Care", "Consistent medical history across providers"],
                ["Emergency Access", "Instant access to critical health data"],
                ["Disease Prevention", "Vaccination and preventive care tracking"],
                ["Treatment Compliance", "Follow-ups and medication adherence"],
                ["Legal Documentation", "Insurance and treatment proof"],
              ].map(([title, desc]) => (
                <div
                  key={title}
                  className="p-6 rounded-2xl border"
                  style={{
                    backgroundColor: "#F9EFE3",
                    borderColor: "#FFCC33",
                  }}
                >
                  <h4
                    className="font-semibold mb-2"
                    style={{ color: "#000000" }}
                  >
                    {title}
                  </h4>
                  <p
                    className="text-sm"
                    style={{ color: "#402EE6" }}
                  >
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* SDGs */}
          <section className="bg-white rounded-3xl p-12 border border-black/10">
            <h2
              className="text-2xl font-bold mb-12 text-center"
              style={{ color: "#000000" }}
            >
              Alignment with UN Sustainable Development Goals
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  title: "SDG 3",
                  subtitle: "Good Health & Well-being",
                  desc: "Improving healthcare continuity and access for migrant workers.",
                },
                {
                  title: "SDG 10",
                  subtitle: "Reduced Inequalities",
                  desc: "Ensuring equal healthcare opportunities regardless of social status.",
                },
                {
                  title: "SDG 16",
                  subtitle: "Strong Institutions",
                  desc: "Promoting transparent, accountable healthcare governance.",
                },
              ].map((sdg) => (
                <div
                  key={sdg.title}
                  className="rounded-2xl p-6 text-center border"
                  style={{ borderColor: "#FFCC33" }}
                >
                  <h3
                    className="text-xl font-bold mb-1"
                    style={{ color: "#000000" }}
                  >
                    {sdg.title}
                  </h3>
                  <p
                    className="font-semibold mb-2"
                    style={{ color: "#402EE6" }}
                  >
                    {sdg.subtitle}
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: "#402EE6" }}
                  >
                    {sdg.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits */}
          <section className="bg-white rounded-3xl p-12 border border-black/10">
            <h2
              className="text-2xl font-bold mb-10"
              style={{ color: "#000000" }}
            >
              System Benefits
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                {
                  title: "For Workers",
                  items: [
                    "Secure access to personal health records",
                    "Portability across healthcare providers",
                    "Emergency medical information availability",
                    "Vaccination and check-up reminders",
                  ],
                },
                {
                  title: "For Healthcare Providers",
                  items: [
                    "Complete patient medical history",
                    "Improved diagnostic accuracy",
                    "Reduced redundant testing",
                    "Enhanced treatment outcomes",
                  ],
                },
              ].map((group) => (
                <div key={group.title}>
                  <h4
                    className="font-semibold mb-4"
                    style={{ color: "#000000" }}
                  >
                    {group.title}
                  </h4>
                  <ul
                    className="space-y-3 text-sm"
                    style={{ color: "#402EE6" }}
                  >
                    {group.items.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </section>
  );
};

export default About;
