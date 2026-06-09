import React from 'react';
import { Droplet, Activity, BellRing, Settings, ShieldAlert, TriangleAlert } from 'lucide-react';

export const productsData = [
  { 
    name: "Powder Type (ABC)", 
    category: "Fire Extinguishers", 
    img: "/prod_abc.png", 
    desc: "Multi-purpose dry chemical.", 
    icon: <Droplet size={80} />, 
    features: ["Mono Ammonium Phosphate based", "Suitable for Class A, B, C & Electrical", "BIS Approved (IS 15683)", "CE Certified (on demand)", "Rechargeable, brass/nickel valve"] 
  },
  { 
    name: "CO₂ Type", 
    category: "Fire Extinguishers", 
    img: "/prod_co2.png", 
    desc: "Safe for electrical fires.", 
    icon: <Droplet size={80} />, 
    features: ["Colorless, odorless, non-toxic gas", "No residue after discharge", "Rapid fire knockdown", "Seamless steel body", "BIS Approved & CE Certified"] 
  },
  { 
    name: "Foam & Water Type", 
    category: "Fire Extinguishers", 
    img: "/prod_foam_water.png", 
    desc: "For solid and liquid fires.", 
    icon: <Droplet size={80} />, 
    features: ["AFFF foam for Class A & B fires", "Water type for Class A fires", "Spray nozzle for control", "High-quality coating", "Rechargeable with flexible hose"] 
  },
  { 
    name: "Clean Agent (FE-36)", 
    category: "Fire Extinguishers", 
    img: "/prod_clean_agent.png", 
    desc: "Leaves no residue.", 
    icon: <Droplet size={80} />, 
    features: ["Uses FE-36 clean agent", "Zero Ozone Depletion", "Electrically non-conductive", "Protects sensitive equipment", "Unique Gauge Testing System"] 
  },
  { 
    name: "Kitchen Fire Extinguishers", 
    category: "Fire Extinguishers", 
    img: "/prod_kitchen.png", 
    desc: "Specialized for oils/fats.", 
    icon: <Droplet size={80} />, 
    features: ["Designed for cooking oil fires", "Creates stable foam layer", "Safe for kitchen appliances", "Minimal equipment damage", "Effective for high-temp oils"] 
  },
  { 
    name: "D-Class Metal Fire Extinguishers", 
    category: "Fire Extinguishers", 
    img: "/prod_dclass.png", 
    desc: "For combustible metals.", 
    icon: <Droplet size={80} />, 
    features: ["Designed for metal fires", "Keeps operator at safe distance", "Non-dispersing agent", "Controlled discharge", "Durable hose system"] 
  },
  { 
    name: "Digital Addressable Fire Alarm Panels", 
    category: "Fire Alarm Systems", 
    img: "/prod_panel.jpg", 
    desc: "Precision fire locating panels.", 
    icon: <Activity size={80} />, 
    features: ["Microprocessor-based systems", "Digitally addressable zones", "Real-time fire detection", "Reliable and fast alert system", "Integration with detectors"] 
  },
  { 
    name: "Smoke Detectors", 
    category: "Fire Alarm Systems", 
    img: "/prod_smoke_detector.png", 
    desc: "Early warning smoke sensing.", 
    icon: <BellRing size={80} />, 
    features: ["High-sensitivity optical sensing", "Early warning fire detection", "Low power consumption", "LED status indicators", "Easy maintenance"] 
  },
  { 
    name: "Heat Detectors", 
    category: "Fire Alarm Systems", 
    img: "/prod_heat_detector.png", 
    desc: "Triggered by temperature spikes.", 
    icon: <BellRing size={80} />, 
    features: ["Rate-of-rise thermal detection", "Fixed temperature activation", "High reliability in dusty areas", "False alarm prevention", "Industrial-grade durability"] 
  },
  { 
    name: "Manual Call Points", 
    category: "Fire Alarm Systems", 
    img: "/prod_call_point.png", 
    desc: "Manual emergency triggers.", 
    icon: <BellRing size={80} />, 
    features: ["Break-glass or resettable types", "High visibility red casing", "Instant alarm activation", "Simple push operated", "Weather-proof options"] 
  },
  { 
    name: "Gas Release Systems", 
    category: "Fire Alarm Systems", 
    img: "/prod_gas_release.png", 
    desc: "Automated suppression release.", 
    icon: <Settings size={80} />, 
    features: ["Fully automatic operation", "Quick detection and suppression", "No external power required", "Non-toxic & eco-friendly", "Works during power failure"] 
  },
  { 
    name: "Landing Valves", 
    category: "Hydrant & Fire Fighting", 
    img: "/prod_landing_valve.png", 
    desc: "High pressure control valves.", 
    icon: <Settings size={80} />, 
    features: ["High-pressure handling", "Durable gunmetal construction", "Reliable water flow control", "Corrosion-resistant", "Designed for industrial use"] 
  },
  { 
    name: "Fire Hydrants (2-way / 4-way)", 
    category: "Hydrant & Fire Fighting", 
    img: "/prod_hydrant_standpost.png", 
    desc: "High capacity water delivery.", 
    icon: <Settings size={80} />, 
    features: ["Multi-outlet configurations", "High capacity water flow", "Weather-proof construction", "Easy installation", "Durable structural integrity"] 
  },
  { 
    name: "Hose Reel Systems", 
    category: "Hydrant & Fire Fighting", 
    img: "/prod_hose_reel.png", 
    desc: "Rapid deployment water hoses.", 
    icon: <Settings size={80} />, 
    features: ["High-strength polyester jacket", "Heat and abrasion resistant", "Smooth inner lining", "Conforms to international standards", "Easy handling and deployment"] 
  },
  { 
    name: "Foam Monitor Systems", 
    category: "Hydrant & Fire Fighting", 
    img: "/prod_water_monitor.png", 
    desc: "Heavy-duty foam deployment.", 
    icon: <Settings size={80} />, 
    features: ["Heavy-duty foam concentration", "Long-range projection", "Adjustable flow rate", "Corrosion-free nozzles", "Petrochemical application ready"] 
  },
  { 
    name: "Water Monitors", 
    category: "Hydrant & Fire Fighting", 
    img: "/prod_water_monitor_2.png", 
    desc: "High trajectory water streams.", 
    icon: <Settings size={80} />, 
    features: ["High trajectory stream", "360-degree rotation", "Fixed or portable configurations", "Durable steel housing", "Industrial hazard ready"] 
  },
  { 
    name: "Head Protection", 
    category: "Safety Products (PPE)", 
    img: "/prod_helmet.png", 
    desc: "Industrial safety helmets.", 
    icon: <ShieldAlert size={80} />, 
    features: ["High-impact resistance", "Comfortable chin straps", "Ventilated designs", "Industry-grade materials", "Complete safety coverage"] 
  },
  { 
    name: "Eye & Face Protection", 
    category: "Safety Products (PPE)", 
    img: "/prod_goggles.png", 
    desc: "Goggles and face shields.", 
    icon: <ShieldAlert size={80} />, 
    features: ["Anti-scratch and anti-fog", "UV protection", "Wide field of vision", "Chemical splash resistant", "Impact durable"] 
  },
  { 
    name: "Respiratory Protection", 
    category: "Safety Products (PPE)", 
    img: "/prod_respirator.png", 
    desc: "Masks and breathing apparatus.", 
    icon: <ShieldAlert size={80} />, 
    features: ["N95 to full-face respirators", "Self-contained breathing apparatus", "Efficient particulate filtration", "Comfortable prolonged wear", "Toxic gas protection"] 
  },
  { 
    name: "Hand Gloves", 
    category: "Safety Products (PPE)", 
    img: "/prod_chemical_gloves.png", 
    desc: "Heat and chemical resistant.", 
    icon: <ShieldAlert size={80} />, 
    features: ["Cut and abrasion resistant", "High-heat and electrical proof", "Chemical handling safety", "Enhanced grip", "Industrial compliance"] 
  },
  { 
    name: "Safety Shoes", 
    category: "Safety Products (PPE)", 
    img: "/prod_shoes.png", 
    desc: "Reinforced industrial footwear.", 
    icon: <ShieldAlert size={80} />, 
    features: ["Steel-toe reinforcement", "Anti-slip and oil-resistant", "Electrical hazard protection", "Puncture-resistant soles", "Ergonomic arch support"] 
  },
  { 
    name: "Fall Protection Equipment", 
    category: "Safety Products (PPE)", 
    img: "/prod_harness.png", 
    desc: "Harnesses and safety lines.", 
    icon: <ShieldAlert size={80} />, 
    features: ["Full-body safety harnesses", "Shock-absorbing lanyards", "High-tensile strength ropes", "Heavy-duty carabiners", "Roof and scaffold safety"] 
  },
  { 
    name: "Heat Protective Garments", 
    category: "Safety Products (PPE)", 
    img: "/prod_suit.png", 
    desc: "Industrial heat resistant suits.", 
    icon: <ShieldAlert size={80} />, 
    features: ["Aluminized proximity suits", "High thermal insulation", "Fire proximity applications", "Radiant heat protection", "Full-body coverage"] 
  },
  { 
    name: "Traffic Cones", 
    category: "Road Safety Products", 
    img: "/prod_cone.png", 
    desc: "High-visibility markers.", 
    icon: <TriangleAlert size={80} />, 
    features: ["High-visibility reflective bands", "UV-resistant durable body", "Lightweight and weatherproof", "Flexible and impact resistant", "Stackable design"] 
  },
  { 
    name: "Reflective Signs", 
    category: "Road Safety Products", 
    img: "/prod_signs.png", 
    desc: "Glow-in-dark safety signage.", 
    icon: <TriangleAlert size={80} />, 
    features: ["High-intensity retroreflective sheet", "Durable aluminum backing", "Long-lasting performance", "Easy installation", "Multiple hazard symbols"] 
  },
  { 
    name: "Barricades", 
    category: "Road Safety Products", 
    img: "/prod_barricade.png", 
    desc: "Crowd and hazard control.", 
    icon: <TriangleAlert size={80} />, 
    features: ["Interlocking mechanisms", "High-impact plastic construction", "Water/sand fillable", "Reflective safety tapes", "Easily movable"] 
  },
  { 
    name: "Safety Markings", 
    category: "Road Safety Products", 
    img: "/prod_tape.png", 
    desc: "Road and floor safety tapes.", 
    icon: <TriangleAlert size={80} />, 
    features: ["Anti-slip surface", "Strong adhesive backing", "High-contrast hazard colors", "Industrial grade durability", "Weather resistant"] 
  }
];
