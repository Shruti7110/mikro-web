import React from "react";

const automationItems = [
  {
    title: "Cell to Module Assembly Line",
    description:
      "Mikro constructs and installs Cell to Module Assembly Line to be integrated into a manufacturing facility. Installation is very fast and production can begin immediately with your customized modules to suit specific production scales.",
    link: "#",
  },
  {
    title: "Cylindrical Cell Battery Pack",
    description:
      "Mikro constructs and installs Cylindrical Cell Battery Pack or as freestanding units to be integrated into an assembly line. Installation is very fast and production can begin immediately with your customized modules to suit specific production scales.",
    link: "#",
  },
  {
    title: "Prismatic Cell Battery Pack",
    description:
      "Mikro constructs and installs Prismatic Cell Battery Pack or as freestanding units to be integrated into an assembly line. Installation is very fast and production can begin immediately with your customized modules to suit specific production scales.",
    link: "#",
  },
  {
    title: "BDU & Inverter Assembly Line",
    description:
      "Mikro constructs and installs assembly lines for both AC–DC and DC–DC inverters as part of EV manufacturing automation.",
    link: "#",
  },
  {
    title: "Motor & Rotor Assembly Line",
    description:
      "We provide solutions for Motor and Rotor Assembly Lines covering AC Induction Motor, BLDC, PMSM, Reluctance, and Interior Permanent Magnet Motors.",
    link: "#",
  },
];

const AutomationLines: React.FC = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      {/* Hero */}
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">
          EV Automation Line — Mikro EV India
        </h1>
        <p className="text-lg text-gray-700">
          Leaders in Line Assembly & Automation Solutions for the EV Industry.
        </p>
      </section>

      {/* Grid of Items */}
      <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-12">
        {automationItems.map((item) => (
          <div
            key={item.title}
            className="border rounded-lg p-6 shadow hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-600 mb-4">{item.description}</p>            
          </div>
        ))}
      </section>

      {/* Battery Cyclers Info */}
      <section className="bg-gray-100 p-6 rounded-lg text-center">
        <h3 className="text-2xl font-semibold mb-2">Battery Cyclers</h3>
        <p className="text-gray-700">
          We are authorized Neware cycler distributors across India. We provide
          installation & calibration of battery cyclers.
        </p>
      </section>
    </main>
  );
};

export default AutomationLines;
