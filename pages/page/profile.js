// pages/company-profile.js
import Head from 'next/head';
import CommonLayout from '../../components/shop/common-layout';
import profile from '../../public/assets/images/tools/profile.jpeg'
import { Media } from 'reactstrap';
const styles = {
  profilePage: {
    lineHeight: '1.8',
    color: '#333', // Darker text color for better contrast
    margin: 0,
    padding: 30,
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
  },
  header: {
    textAlign: 'center',
    padding: '40px 20px',
    background: '#0056b3', // Rich blue background
    color: '#fff', // White text
    position: 'relative',
  },
  headerImage: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    width: '150px',
  },
  headerTitle: {
    fontSize: '3rem',
    margin: '0 0 10px',
    fontWeight: 'bold',
  },
  tagline: {
    fontSize: '1.5rem',
    color: '#dce6f2', // Softer blue for secondary text
  },
  metrics: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    margin: '40px 0',
  },
  metricCard: {
    background: '#fff', // White for contrast
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Modern shadow
    textAlign: 'center',
  },
  metricValue: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#ff6f61', // Coral for attention
  },
  metricLabel: {
    fontSize: '1rem',
    color: '#555', // Secondary text color
  },
  section: {
    padding: '40px 20px',
    margin: '20px 0',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  sectionTitle: {
    fontSize: '24px',
    marginBottom: '15px',
    color: '#0056b3', // Rich blue for section titles
    borderBottom: '3px solid #ff6f61', // Coral underline
    display: 'inline-block',
    paddingBottom: '5px',
  },
  paragraph: {
    fontSize: '16px',
    margin: '15px 0',
    lineHeight: 1.9,
  },
  ctaButton: {
    display: 'inline-block',
    marginTop: '20px',
    padding: '10px 20px',
    background: '#ff6f61', // Coral for CTA
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
    transition: 'background 0.3s',
  },
  ctaButtonHover: {
    background: '#cc594f', // Darker coral for hover effect
  },
  footer: {
    textAlign: 'center',
    padding: '20px',
    background: '#333', // Dark gray footer
    color: '#fff',
    marginTop: '40px',
  },
  footerText: {
    margin: 0,
    fontSize: '14px',
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
     
      <div className="title3">
                <h2 className="title-inner3">Company Profile</h2>
                <div className="line"></div>
              </div>
        <div style={styles.container}>
          {/* <div style={styles.metrics}>
            <div style={styles.metricCard}>
              <p style={styles.metricValue}>1000+</p>
              <p style={styles.metricLabel}>Tools Manufactured</p>
            </div>
            <div style={styles.metricCard}>
              <p style={styles.metricValue}>25+</p>
              <p style={styles.metricLabel}>Export Destinations</p>
            </div>
            <div style={styles.metricCard}>
              <p style={styles.metricValue}>15+</p>
              <p style={styles.metricLabel}>Years of Experience</p>
            </div>
            <div style={styles.metricCard}>
              <p style={styles.metricValue}>ISO</p>
              <p style={styles.metricLabel}>Certified Quality</p>
            </div>
          </div> */}

          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>About Us</h2>
            <p style={styles.paragraph}>
              Iron Grip Tools India is a premier manufacturer and exporter of high-quality hand tools, dedicated to serving global markets with precision, durability, and innovation. Established with a vision to provide world-class tools to industries and professionals, we are proud to be a 100% export-oriented company, catering to clients across North America, Europe, Australia, and other key international markets. Our relentless commitment to excellence has positioned us as a trusted partner for businesses and professionals worldwide.
            </p>
          </section>

          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Our Mission</h2>
            <p style={styles.paragraph}>
              To deliver superior-quality hand tools that empower professionals to achieve precision, efficiency, and safety in their work. We aim to build long-term relationships with our customers by consistently exceeding their expectations through innovation and customer-centric solutions.
            </p>
          </section>

          <section style={styles.section}>
  <h2 style={styles.sectionTitle}>Product Range</h2>
  <p style={styles.paragraph}>
    Our comprehensive range of hand tools includes:
  </p>
  <p style={styles.paragraph}>
    <strong>Wrenches/Spanners:</strong> Adjustable, Combination, Ring, and DOE types.
  </p>
  <p style={styles.paragraph}>
    <strong>Screwdrivers:</strong> A wide range of screwdrivers and screwdriver sets.
  </p>
  <p style={styles.paragraph}>
    <strong>Pliers:</strong> Slip Joint, Needle Nose, Locking, Diagonal Cutting, Lineman, and Water Pump Pliers.
  </p>
  <p style={styles.paragraph}>
    <strong>Hammers:</strong> Claw, Ball Peen, and Sledge hammers.
  </p>
  <p style={styles.paragraph}>
    <strong>Measuring Tools:</strong> Tapes, Calipers, and Squares for precise measurements.
  </p>
  <p style={styles.paragraph}>
    <strong>Pry Bars:</strong> Flat Pry Bars, Crowbars, Wrecking Bars, Nail Puller Bars, Pinch Bars, and Aligning Pry Bars.
  </p>
  <p style={styles.paragraph}>
    <strong>Tool Kits:</strong> Custom tool sets tailored to your needs.
  </p>
  <p style={styles.paragraph}>
    Each product is meticulously designed and manufactured, ensuring optimal performance, ergonomic design, and exceptional durability.
  </p>
</section>


          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Quality Assurance</h2>
            <p style={styles.paragraph}>
              At Iron Grip Tools India, quality is at the heart of everything we do. Our manufacturing processes adhere to international standards, including ISO 9001 and CE certifications. Every product undergoes rigorous testing to ensure it meets the highest benchmarks of safety and performance.
            </p>
          </section>

          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Infrastructure and Capabilities</h2>
            <p style={styles.paragraph}>
              Our state-of-the-art manufacturing facility is equipped with advanced machinery and technology to produce tools of unmatched precision and reliability. With a highly skilled workforce and stringent quality control measures, we ensure that every product leaving our facility upholds our promise of excellence.
            </p>
          </section>

          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Leadership</h2>
            <p style={styles.paragraph}>
              Iron Grip Tools India is spearheaded by a dynamic team of professionals with backgrounds in engineering and management. The founder and owner, an accomplished engineer with extensive experience in manufacturing, brings a deep technical understanding to the company’s operations. Complementing this is a robust management team with expertise in global trade, supply chain management, and customer relations, ensuring seamless service to our international clientele.
            </p>
          </section>

          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Sustainability and Responsibility</h2>
            <p style={styles.paragraph}>
              We are committed to sustainability and ethical business practices. From reducing our environmental footprint through efficient manufacturing processes to supporting local communities, we strive to make a positive impact in everything we do.
            </p>
          </section>

       
        </div>
      </div>
    </CommonLayout>
  );
}
