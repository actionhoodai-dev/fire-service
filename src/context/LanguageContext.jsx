import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    // Navbar
    nav_home: 'Home',
    nav_about: 'About',
    nav_services: 'Services',
    nav_products: 'Products',
    nav_contact: 'Contact',
    nav_brochure: 'Brochure',
    nav_phone: '+91 99446 77149',
    lang_toggle_label: 'Switch to Tamil',

    // Home
    home_badge: 'Varatha Vinayagar Safety & Fire',
    home_hero_h2: 'Complete',
    home_hero_h2_span: 'Fire Safety',
    home_hero_h2_end: 'Solutions',
    home_hero_p: "Tuticorin's premium partner for Refilling, Servicing & H.P. Testing. We don't just sell equipment; we sell peace of mind.",
    home_btn_consultation: 'Get Consultation',
    home_btn_brochure: 'Download Brochure',

    home_cat_badge: 'Featured Categories',
    home_cat_title: 'Explore Our',
    home_cat_title_span: 'Safety',
    home_cat_title_end: 'Range',

    home_about_badge: 'Welcome to Varatha Vinayagar',
    home_about_h1: 'Your Trusted Partner in',
    home_about_h1_span: 'Safety',
    home_about_p1: 'We supply advanced fire extinguishers, hydrant accessories, personal protective equipment, and industrial safety products based in Tuticorin.',
    home_about_p2: 'Our products strictly follow high-quality standards, guaranteeing durability, and user-friendly design with a strong focus on absolute customer satisfaction.',
    home_about_btn: 'Learn More About Us',

    stat_compliance: 'Safety Compliance',
    stat_experience: 'Years Experience',
    stat_staff: 'Certified Staff',
    stat_sites: 'Active Sites',

    home_process_badge: 'Our Process',
    home_process_title: 'How We',
    home_process_title_span: 'Work',
    step_inspection: 'Inspection',
    step_collection: 'Collection',
    step_execution: 'Execution',
    step_delivery: 'Delivery',
    step_inspection_desc: 'Thorough site assessment and hazard identification.',
    step_collection_desc: 'Safe transport of equipment to our certified facility.',
    step_execution_desc: 'Certified refill and high-pressure testing.',
    step_delivery_desc: 'Final quality check and prompt delivery.',

    home_why_badge: 'Why Us',
    home_why_title: 'Reliability in Every',
    home_why_title_span: 'Second',
    why_compliance: 'Standard Compliance',
    why_compliance_desc: 'Licensed by Industrial Safety Standards for full compliance.',
    why_support: '24/7 Support',
    why_support_desc: 'Round-the-clock emergency response for all safety needs.',
    why_certified: 'Certified Handling',
    why_certified_desc: 'Expert technicians with decades of collective experience.',

    // Services
    services_badge: 'Our Expertise',
    services_h1: 'Complete',
    services_h1_span: 'Safety',
    services_h1_end: 'Services',
    services_intro: 'We provide a comprehensive range of professional fire safety services to keep your environments fully protected.',
    industries_badge: 'Where We Serve',
    industries_title: 'Industries',
    industries_title_span: 'Served',
    cta_title: 'Ready to secure your premises?',
    cta_desc: 'Contact us today for an expert consultation and a tailored safety solution for your industry.',
    cta_btn: 'Book Consultation',

    // Products
    products_badge: 'Our Catalog',
    products_h1: 'Premium Safety',
    products_h1_span: 'Products',
    enquire_now: 'Enquire Now',

    // About
    about_partner_badge: 'Authorized Partners',
    about_partner_title: 'Trusted Brands &',
    about_partner_title_span: 'Certifications',
    about_badge: 'Our Company Profile',
    about_h1: 'Varatha Vinayagar',
    about_h1_span: 'Safety & Fire',
    about_p1: 'We supply fire extinguishers, hydrant accessories, personal protective equipment, and industrial safety products based in Tuticorin.',
    about_p2: 'Our products follow high-quality standards, durability, and user-friendly design with a strong focus on customer satisfaction and fast service delivery.',
    about_check1: 'Strict quality control from design to testing',
    about_check2: 'Advanced technology integration',
    about_check3: 'Skilled professionals and experienced team',
    about_check4: 'Customer-centric service approach',
    about_vision_title: 'Our Vision',
    about_mission_title: 'Our Mission',
    about_quality_title: 'Quality Policy',

    // Contact
    contact_badge: 'Get in Touch',
    contact_h1: 'Contact',
    contact_h1_span: 'Safety',
    contact_h1_end: 'Team',
    contact_phones: 'Phone Numbers',
    contact_email: 'Email',
    contact_email_btn: 'Email Us',
    contact_location: 'Location',
    contact_location_addr: '112Q/3, Muthukrishnapuram 2nd Street, Tuticorin, Tamil Nadu',
    contact_emergency: 'Emergency Service',
    contact_emergency_avail: '24/7 Availability',
    contact_emergency_desc: 'Our team is fully equipped and on standby around the clock for rapid emergency response.',
    contact_form_title: 'Request a Quote',
    contact_name: 'Full Name',
    contact_name_placeholder: 'John Doe',
    contact_phone_label: 'Contact Number',
    contact_phone_placeholder: '+91 00000 00000',
    contact_service: 'Service Required',
    contact_message: 'Message',
    contact_message_placeholder: 'Tell us about your requirements...',
    contact_send: 'Send Message',

    // Footer
    footer_motto: '"Never Trust Fire! Trust Varatha Vinayagar Safety & Fire - Your Structural Integrity Guard."',
    footer_nav: 'Navigation',
    footer_terminals: 'Data Terminals',
    footer_copy: 'VV Safety & Fire. Protocol Status: SECURE',
    footer_tagline: 'Reliability | Integrity | Structural Protection',
  },

  ta: {
    // Navbar
    nav_home: 'முகப்பு',
    nav_about: 'எங்களை பற்றி',
    nav_services: 'சேவைகள்',
    nav_products: 'தயாரிப்புகள்',
    nav_contact: 'தொடர்பு',
    nav_brochure: 'சிறுநூல்',
    nav_phone: '+91 99446 77149',
    lang_toggle_label: 'Switch to English',

    // Home
    home_badge: 'வரத விநாயகர் பாதுகாப்பு & தீ சேவை',
    home_hero_h2: 'முழுமையான',
    home_hero_h2_span: 'தீ பாதுகாப்பு',
    home_hero_h2_end: 'தீர்வுகள்',
    home_hero_p: 'தூத்துக்குடியின் முன்னணி பங்காளி — நிரப்புதல், சேவை & உயர் அழுத்த சோதனை. உபகரணம் மட்டுமல்ல, மன அமைதியும் வழங்குகிறோம்.',
    home_btn_consultation: 'ஆலோசனை பெறுக',
    home_btn_brochure: 'சிறுநூல் பதிவிறக்கம்',

    home_cat_badge: 'சிறப்பு வகைகள்',
    home_cat_title: 'எங்கள்',
    home_cat_title_span: 'பாதுகாப்பு',
    home_cat_title_end: 'வரம்பை ஆராயுங்கள்',

    home_about_badge: 'வரத விநாயகருக்கு வரவேற்கிறோம்',
    home_about_h1: 'உங்கள் நம்பகமான பங்காளி',
    home_about_h1_span: 'பாதுகாப்பில்',
    home_about_p1: 'தூத்துக்குடியை தளமாகக் கொண்டு தீ அணைப்பான்கள், ஹைட்ரன்ட் கூடுதல் பொருட்கள், தனிப்பட்ட பாதுகாப்பு உபகரணங்கள் மற்றும் தொழில்துறை பாதுகாப்பு பொருட்களை வழங்குகிறோம்.',
    home_about_p2: 'எங்கள் பொருட்கள் உயர்தர தரங்களை கண்டிப்பாக பின்பற்றுகின்றன — நீடித்த தன்மை மற்றும் வாடிக்கையாளர் திருப்திக்கு முழு முன்னுரிமை.',
    home_about_btn: 'எங்களை பற்றி மேலும் அறிக',

    stat_compliance: 'பாதுகாப்பு இணக்கம்',
    stat_experience: 'ஆண்டுகள் அனுபவம்',
    stat_staff: 'சான்றளிக்கப்பட்ட பணியாளர்கள்',
    stat_sites: 'செயலில் உள்ள தளங்கள்',

    home_process_badge: 'எங்கள் செயல்முறை',
    home_process_title: 'நாங்கள் எப்படி',
    home_process_title_span: 'செயல்படுகிறோம்',
    step_inspection: 'ஆய்வு',
    step_collection: 'சேகரிப்பு',
    step_execution: 'செயல்படுத்தல்',
    step_delivery: 'விநியோகம்',
    step_inspection_desc: 'முழுமையான தள மதிப்பீடு மற்றும் ஆபத்து அடையாளம்.',
    step_collection_desc: 'சான்றளிக்கப்பட்ட வசதிக்கு உபகரணங்களின் பாதுகாப்பான போக்குவரத்து.',
    step_execution_desc: 'சான்றளிக்கப்பட்ட நிரப்புதல் மற்றும் உயர் அழுத்த சோதனை.',
    step_delivery_desc: 'இறுதி தர சோதனை மற்றும் உடனடி விநியோகம்.',

    home_why_badge: 'ஏன் நாங்கள்',
    home_why_title: 'ஒவ்வொரு நொடியிலும்',
    home_why_title_span: 'நம்பகத்தன்மை',
    why_compliance: 'தர இணக்கம்',
    why_compliance_desc: 'தொழில்துறை பாதுகாப்பு தரங்களால் உரிமம் பெற்றது.',
    why_support: '24/7 ஆதரவு',
    why_support_desc: 'அனைத்து பாதுகாப்பு தேவைகளுக்கும் தொடர்ச்சியான அவசர கால ஆதரவு.',
    why_certified: 'சான்றளிக்கப்பட்ட கையாளுதல்',
    why_certified_desc: 'பல தசாப்தங்கள் அனுபவம் கொண்ட நிபுணர் தொழில்நுட்பவியலாளர்கள்.',

    // Services
    services_badge: 'எங்கள் நிபுணத்துவம்',
    services_h1: 'முழுமையான',
    services_h1_span: 'பாதுகாப்பு',
    services_h1_end: 'சேவைகள்',
    services_intro: 'உங்கள் சூழலை முழுமையாக பாதுகாக்க, நாங்கள் விரிவான தொழில்முறை தீ பாதுகாப்பு சேவைகளை வழங்குகிறோம்.',
    industries_badge: 'நாங்கள் சேவை செய்யும் இடங்கள்',
    industries_title: 'சேவை பெறும்',
    industries_title_span: 'தொழில்கள்',
    cta_title: 'உங்கள் வளாகத்தை பாதுகாக்க தயாரா?',
    cta_desc: 'உங்கள் தொழில்துறைக்கான தனிப்பயன் பாதுகாப்பு தீர்வுக்கு இன்றே தொடர்பு கொள்ளுங்கள்.',
    cta_btn: 'ஆலோசனை பதிவு',

    // Products
    products_badge: 'எங்கள் பட்டியல்',
    products_h1: 'உயரிய பாதுகாப்பு',
    products_h1_span: 'தயாரிப்புகள்',
    enquire_now: 'இப்போது விசாரிக்கவும்',

    // About
    about_partner_badge: 'அங்கீகரிக்கப்பட்ட கூட்டாளிகள்',
    about_partner_title: 'நம்பகமான பிராண்டுகள் &',
    about_partner_title_span: 'சான்றிதழ்கள்',
    about_badge: 'எங்கள் நிறுவன சுயவிவரம்',
    about_h1: 'வரத விநாயகர்',
    about_h1_span: 'பாதுகாப்பு & தீ',
    about_p1: 'தூத்துக்குடியை தளமாகக் கொண்டு தீ அணைப்பான்கள், ஹைட்ரன்ட் கூடுதல் பொருட்கள், தனிப்பட்ட பாதுகாப்பு உபகரணங்கள் வழங்குகிறோம்.',
    about_p2: 'வாடிக்கையாளர் திருப்தி மற்றும் விரைவான சேவை வழங்கலில் கவனம் செலுத்தி உயர்தர தரங்களை பின்பற்றுகிறோம்.',
    about_check1: 'வடிவமைப்பிலிருந்து சோதனை வரை கண்டிப்பான தர கட்டுப்பாடு',
    about_check2: 'மேம்பட்ட தொழில்நுட்ப ஒருங்கிணைப்பு',
    about_check3: 'திறமையான நிபுணர்கள் மற்றும் அனுபவமிக்க குழு',
    about_check4: 'வாடிக்கையாளர் கேந்திர சேவை அணுகுமுறை',
    about_vision_title: 'எங்கள் தொலைநோக்கு',
    about_mission_title: 'எங்கள் நோக்கம்',
    about_quality_title: 'தர கொள்கை',

    // Contact
    contact_badge: 'தொடர்பு கொள்ளுங்கள்',
    contact_h1: 'தொடர்பு கொள்ளுங்கள்',
    contact_h1_span: 'பாதுகாப்பு',
    contact_h1_end: 'குழு',
    contact_phones: 'தொலைபேசி எண்கள்',
    contact_email: 'மின்னஞ்சல்',
    contact_email_btn: 'மின்னஞ்சல் அனுப்புக',
    contact_location: 'இருப்பிடம்',
    contact_location_addr: '112Q/3, முத்துகிருஷ்ணபுரம் 2வது தெரு, தூத்துக்குடி, தமிழ்நாடு',
    contact_emergency: 'அவசர சேவை',
    contact_emergency_avail: '24/7 கிடைக்கிறது',
    contact_emergency_desc: 'விரைவான அவசரகால பதிலுக்கு எங்கள் குழு எப்போதும் தயாராக உள்ளது.',
    contact_form_title: 'விலை கோரிக்கை',
    contact_name: 'முழு பெயர்',
    contact_name_placeholder: 'உங்கள் பெயர்',
    contact_phone_label: 'தொடர்பு எண்',
    contact_phone_placeholder: '+91 00000 00000',
    contact_service: 'தேவையான சேவை',
    contact_message: 'செய்தி',
    contact_message_placeholder: 'உங்கள் தேவைகளை பற்றி கூறுங்கள்...',
    contact_send: 'செய்தி அனுப்பு',

    // Footer
    footer_motto: '"தீயை நம்பாதீர்கள்! வரத விநாயகர் பாதுகாப்பை நம்புங்கள் - உங்கள் கட்டமைப்பு நலன் காவலர்."',
    footer_nav: 'வழிசெலுத்தல்',
    footer_terminals: 'தொடர்பு',
    footer_copy: 'VV பாதுகாப்பு & தீ. நிலை: பாதுகாப்பானது',
    footer_tagline: 'நம்பகத்தன்மை | நேர்மை | கட்டமைப்பு பாதுகாப்பு',
  }
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('en');
  const t = (key) => translations[lang][key] || translations['en'][key] || key;
  const toggleLang = () => setLang(prev => prev === 'en' ? 'ta' : 'en');

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
