import './index.scss';
import SectionHeadingText from '../../commons/SectionHeadingText';
import { useThemeContext } from '../../themes';

const impactCards = [
  {
    type: 'ring',
    before: '30%',
    after: '80%',
    progress: 80,
    label: 'Lighthouse performance uplift',
    description:
      'Dramatically elevated overall Google Lighthouse performance metrics (CLS, LCP, FCP, Speed Index) through targeted optimization.',
    accent: 'green',
  },
  {
    type: 'ring',
    before: '5.0s',
    after: '2.5s',
    progress: 72,
    label: 'Initial page load speed',
    description:
      'Halved initial page load times using advanced caching, gzip/brotli compression, and aggressive code chunking strategies.',
    accent: 'amber',
  },
  {
    type: 'milestone',
    before: 'Zero',
    after: 'Prod',
    label: 'Enterprise delivery',
    description:
      'Architected, built, and deployed an enterprise Backoffice administration portal single-handedly from scratch.',
  },
];

const ImpactRing = ({ before, after, progress, accent, label, description }) => {
  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - (progress / 100) * circumference;

  return (
    <div className="impact-card impact-card-ring">
      <div className="impact-ring-wrap">
        <svg viewBox="0 0 140 140" className="impact-ring" aria-label={`${before} to ${after}`}>
          <circle cx="70" cy="70" r={radius} className="impact-ring-track" />
          <circle
            cx="70"
            cy="70"
            r={radius}
            className={`impact-ring-progress impact-ring-${accent}`}
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: dashOffset,
            }}
          />
        </svg>
        <div className="impact-ring-value">
          <span>{before}</span>
          <span className="impact-arrow">→</span>
          <span>{after}</span>
        </div>
      </div>

      <div className="impact-card-content">
        <h3>{label}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

const MilestoneCard = ({ before, after, label, description }) => (
  <div className="impact-card impact-card-milestone">
    <div className="impact-milestone-path" aria-label="Zero to Production">
      <span className="impact-milestone-before">{before}</span>
      <span className="impact-milestone-line" />
      <span className="impact-milestone-after">{after}</span>
    </div>

    <div className="impact-card-content">
      <h3>{label}</h3>
      <p>{description}</p>
    </div>
  </div>
);

const KeyImpactAchievements = () => {
  const { isDarkTheme } = useThemeContext();

  return (
    <section className={`key-impact-section ${isDarkTheme ? 'ki-dark' : 'ki-light'}`}>
      <SectionHeadingText title='KEY IMPACT & ACHIEVEMENTS' customClassName='key-impact-heading' />

      <div className="impact-grid">
        {impactCards.map((card, index) => {
          if (card.type === 'ring') {
            return <ImpactRing key={index} {...card} />;
          }

          return <MilestoneCard key={index} {...card} />;
        })}
      </div>
    </section>
  );
};

export default KeyImpactAchievements;
