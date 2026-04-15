const rulesSections = [
  {
    title: '1. मॅचची माहिती (Match Format)',
    items: [
      'प्रत्येक टीमला 12 ओव्हर्स मिळतील',
      '1 ओव्हर = 6 चेंडू',
      'Powerplay: पहिल्या 4 ओव्हर्स',
      'प्रत्येक गोलंदाज जास्तीत जास्त 3 ओव्हर्स टाकू शकतो',
    ],
  },
  {
    title: '2. फलंदाजीचे नियम (Batting Rules)',
    items: [
      'फलंदाज खालील प्रकारे आउट होऊ शकतो: बोल्ड, कॅच, रन आऊट',
      'LBW लागू नाही',
      'नो बॉल आणि वाइड बॉलला एक्स्ट्रा रन दिले जातील',
    ],
  },
  {
    title: '3. गोलंदाजीचे नियम (Bowling Rules)',
    items: [
      'नो बॉल परिस्थिती: पाय क्रीजच्या बाहेर, कमरेच्या वर फुल टॉस, धोकादायक बाऊन्सर, अंपायरला साइड न सांगणे, चेंडू पिचच्या बाहेर पडणे',
      'प्रत्येक नो बॉलवर: +1 एक्स्ट्रा रन आणि पुढचा बॉल फ्री हिट असेल',
      'वाइड बॉल: फलंदाजाच्या पोहोचेबाहेर चेंडू गेला तर +1 रन आणि बॉल पुन्हा टाकावा लागेल',
      'एक गोलंदाज जास्तीत जास्त 3 ओव्हर्स टाकू शकतो',
    ],
  },
  {
    title: '4. फिल्डिंगचे नियम (Fielding Rules)',
    items: [
      'सर्व खेळाडूंनी फेअर प्ले पाळावे',
      'बाउंड्री: 4 रन (जमिनीवरून), 6 रन (हवेतून)',
      'जाणीवपूर्वक अडथळा आणू नये',
    ],
  },
  {
    title: '5. पॉवरप्ले नियम (Powerplay Rules)',
    items: [
      'पहिल्या 4 ओव्हर्स = Powerplay',
      'या वेळेत फक्त 2–3 फिल्डर 30 यार्डच्या बाहेर ठेवता येतील',
    ],
  },
  {
    title: '6. रन आणि स्कोरिंग (Runs & Scoring)',
    items: [
      'रन धाव घेऊन काढले जातील',
      'ओव्हरथ्रो असल्यास अतिरिक्त रन मिळतील',
      'बाउंड्री: 4 = जमिनीवरून, 6 = हवेतून',
    ],
  },
  {
    title: '7. सामान्य नियम (General Rules)',
    items: [
      'अंपायरचा निर्णय अंतिम असेल',
      'सर्वांनी खेळाची भावना जपावी',
      'वाद टाळावेत',
    ],
  },
];

function RulesPatodaPage() {
  return (
    <section className="rules-page">
      <div className="top-nav">
        <div>
          <h1 className="page-title">Rules Patoda(g)</h1>
          <p className="page-intro">गावातील क्रिकेट सामन्याचे नियम.</p>
        </div>
      </div>

      <div className="rules-grid">
        {rulesSections.map((section) => (
          <article key={section.title} className="card rules-card">
            <h2 className="rules-section-title">{section.title}</h2>
            <ul className="rules-list">
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default RulesPatodaPage;
