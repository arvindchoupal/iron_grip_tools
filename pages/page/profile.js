// pages/company-profile.js
import Head from 'next/head';
import CommonLayout from '../../components/shop/common-layout';

const styles = {
  profilePage: {
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    color: '#333',
    margin: 0,
    padding: 0,
  },
  header: {
    textAlign: 'center',
    padding: '20px',
    background: '#F8F8F8',
  },
  headerTitle: {
    fontSize: '2.5rem',
    margin: 0,
  },
  tagline: {
    fontSize: '1.2rem',
    color: '#555',
  },
  section: {
    padding: '40px',
    borderBottom: '1px solid #ddd',
  },
  sectionTitle: {
    fontSize: '19px',
    marginBottom: '10px',
    color: '#222',
    fontWeight:'500'
  },
  paragraph: {
    fontSize: '15px',
    margin: '10px 0',
  },
  list: {
    paddingLeft: '20px',
  },
  listItem: {
    marginBottom: '8px',
  },
  contactAddress: {
    fontStyle: 'normal',
    lineHeight: '1.4',
  },
  contactLink: {
    color: '#007bff',
    textDecoration: 'none',
  },
  contactLinkHover: {
    textDecoration: 'underline',
  },
  footer: {
    textAlign: 'center',
    padding: '10px 20px',
    background: '#222',
    color: '#fff',
  },
  footerText: {
    margin: 0,
    fontSize: '0.9rem',
  },
};

export default function CompanyProfile() {
  return (
    <CommonLayout parent="home" title="Profile">
    <Head>
        <title>Iron Grip Tools India - Company Profile</title>
        <meta name="description" content="Iron Grip Tools India - High-quality hand tools manufacturer and exporter." />
      </Head>
      <div style={styles.profilePage}>
        <header style={styles.header}>
          <h1 style={styles.headerTitle}>Iron Grip Tools India</h1>
        <div style={styles.tagline}>Precision | Durability | Innovation</div>
        </header>

        <section style={styles.section}>
          <div style={styles.sectionTitle}>About Us</div>
        <div style={styles.paragraph}>
            Iron Grip Tools India is a premier manufacturer and exporter of high-quality hand tools, dedicated to serving global markets with precision, durability, and innovation. Established with a vision to provide world-class tools to industries and professionals, we are proud to be a 100% export-oriented company, catering to clients across North America, Europe, Australia, and other key international markets.
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionTitle}>Our Mission</div>
        <div style={styles.paragraph}>
            To deliver superior-quality hand tools that empower professionals to achieve precision, efficiency, and safety in their work. We aim to build long-term relationships with our customers by consistently exceeding their expectations through innovation and customer-centric solutions.
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionTitle}>Product Range</div>
          <ul style={styles.list}>
            <li style={styles.listItem}>Wrenches/Spanners (Adjustable, Combination, Ring and DOE)</li>
            <li style={styles.listItem}>Screwdrivers and Screwdriver Sets</li>
            <li style={styles.listItem}>Pliers (Slip Joint, Needle Nose, Locking, diagonal cutting, lineman and water pump pliers)</li>
            <li style={styles.listItem}>Hammers (Claw, Ball Peen, and Sledge)</li>
            <li style={styles.listItem}>Measuring Tools (Tapes, Calipers, and Squares)</li>
            <li style={styles.listItem}>Pry Bars (Flat Pry Bar, Crowbar, Wrecking Bar, Nail Puller Bar, Pinch Bar, Aligning Pry Bar)</li>
            <li style={styles.listItem}>Tool Kits and Custom Tool Sets</li>
          </ul>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionTitle}>Quality Assurance</div>
        <div style={styles.paragraph}>
            At Iron Grip Tools India, quality is at the heart of everything we do. Our manufacturing processes adhere to international standards, including ISO 9001 and CE certifications. Every product undergoes rigorous testing to ensure it meets the highest benchmarks of safety and performance.
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionTitle}>Infrastructure and Capabilities</div>
        <div style={styles.paragraph}>
            Our state-of-the-art manufacturing facility is equipped with advanced machinery and technology to produce tools of unmatched precision and reliability. With a highly skilled workforce and stringent quality control measures, we ensure that every product leaving our facility upholds our promise of excellence.
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionTitle}>Leadership</div>
        <div style={styles.paragraph}>
            Iron Grip Tools India is spearheaded by a dynamic team of professionals with backgrounds in engineering and management. The founder and owner, an accomplished engineer with extensive experience in manufacturing, brings a deep technical understanding to the company’s operations. Complementing this is a robust management team with expertise in global trade, supply chain management, and customer relations, ensuring seamless service to our international clientele.
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionTitle}>Sustainability and Responsibility</div>
        <div style={styles.paragraph}>
            We are committed to sustainability and ethical business practices. From reducing our environmental footprint through efficient manufacturing processes to supporting local communities, we strive to make a positive impact in everything we do.
          </div>
          <div>
        Partner with Iron Grip Tools India and experience the difference of working with a company committed to precision, quality, and customer success
        </div>
        </section>

    

        <section style={styles.section}>
          <div style={styles.sectionTitle}>Contact Us</div>
          <address style={styles.contactAddress}>
          <div>Iron Grip Tools India</div>
          <div>Dholewal Chowk, Ludhiana, PIN 141003</div>
          <div>Phone: <a href="tel:+917087497599" style={styles.contactLink}>+91 7087497599</a></div>
          <div>Email: <a href="mailto:exports@irongriptools.in" style={styles.contactLink}>exports@irongriptools.in</a></div>
          <div>Website: <a href="https://irongriptools.in" target="_blank" rel="noopener noreferrer" style={styles.contactLink}>https://irongriptools.in</a></div>
          </address>
        </section>

       
      </div>
    </CommonLayout>
  
  );
}
