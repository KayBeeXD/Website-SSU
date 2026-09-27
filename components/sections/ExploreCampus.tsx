import React, { useState } from 'react';

export interface ExploreCardItem {
  id: string;
  title: string;
  description?: string;
  ctaText: string;
  ctaHref: string;
  mediaType: 'image' | 'video';
  mediaSrc: string;
  alt: string;
  posterSrc?: string;
}

export interface ExploreCampusProps {
  heading?: string;
  subheading?: string;
  featuredMedia?: ExploreCardItem;
  cards?: ExploreCardItem[];
}

export const defaultFeaturedMedia: ExploreCardItem = {
  id: 'tour-video',
  title: 'Virtual Campus Tour',
  ctaText: 'Take a tour',
  ctaHref: '#campus-tour',
  mediaType: 'image',
  mediaSrc: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80',
  alt: 'Harvard Quadrangle Campus'
};

export const defaultCards: ExploreCardItem[] = [
  {
    id: 'museums-collections',
    title: 'Museums & Collections',
    description: 'Discover our world-renowned museums, historical archives, rare artifacts, and research collections.',
    ctaText: 'Explore all our museums',
    ctaHref: '#museums',
    mediaType: 'image',
    mediaSrc: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80',
    alt: 'Museums & Collections'
  },
  {
    id: 'library-system',
    title: 'Library System',
    description: 'Access millions of volumes, historical manuscripts, quiet study pods, and collaborative research hubs.',
    ctaText: 'Learn about our libraries',
    ctaHref: '#libraries',
    mediaType: 'image',
    mediaSrc: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80',
    alt: 'Central Library System'
  },
  {
    id: 'historic-architecture',
    title: 'Historic Architecture',
    description: 'Experience iconic red-brick architecture, historic quadrangle gates, and vibrant open courtyard spaces.',
    ctaText: 'Visit our historic architecture',
    ctaHref: '#architecture',
    mediaType: 'image',
    mediaSrc: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=800&q=80',
    alt: 'Historic Architecture'
  }
];

export const ExploreCampus: React.FC<ExploreCampusProps> = ({
  heading = 'Explore campus',
  subheading = 'Join our student ambassadors and discover life, labs, and learning across our historic campus quadrangles.',
  featuredMedia = defaultFeaturedMedia,
  cards = defaultCards
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideo = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="explore-campus-section" id="explore-campus">
      <div className="explore-campus-container">
        
        {/* Row 1: Split into two halves */}
        <div className="explore-campus-hero-grid">
          
          {/* Left Column: Heading & Description */}
          <div className="explore-campus-intro">
            <h2 className="explore-campus-title">
              {heading}
            </h2>
            <p className="explore-campus-desc">
              {subheading}
            </p>
          </div>

          {/* Right Column: Landscape Card (aspect ratio ~16:10) */}
          <div className="explore-tour-card">
            <div class="explore-tour-media">
              <img
                src={featuredMedia.mediaSrc}
                alt={featuredMedia.alt}
                className="explore-card-img"
              />

              {/* Bottom Dark Gradient Overlay */}
              <div className="explore-tour-overlay">
                <button
                  onClick={toggleVideo}
                  className="explore-tour-play-btn"
                  aria-label="Take a tour"
                >
                  <span className="play-icon-circle">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  <span className="play-btn-text">
                    {featuredMedia.ctaText}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Balanced 3-Column Grid */}
        <div className="explore-cards-grid">
          {cards.map((card) => (
            <a
              key={card.id}
              href={card.ctaHref}
              className="explore-feature-card"
            >
              {/* Background Media */}
              <div className="explore-card-bg">
                <img
                  src={card.mediaSrc}
                  alt={card.alt}
                  loading="lazy"
                />
              </div>

              {/* Content Pinned to Bottom-Left */}
              <div className="explore-card-content">
                <h3 className="explore-card-title">
                  {card.title}
                </h3>
                
                {card.description && (
                  <p className="explore-card-desc">
                    {card.description}
                  </p>
                )}

                {/* Call-To-Action Element with Circular Arrow Icon */}
                <div className="explore-card-cta">
                  <span className="cta-icon-circle" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </span>
                  <span className="cta-text">{card.ctaText}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExploreCampus;
