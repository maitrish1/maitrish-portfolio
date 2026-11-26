import { ArrowUpRight } from '@/components/shell/Shell'
import { writingHeading, writingPosts } from '@/lib/content'

export default function FolioWriting() {
  return (
    <section className="folio-research" id="publications" aria-labelledby="folio-research-title">
      <div className="folio-section-heading">
        <h2 id="folio-research-title" tabIndex={-1}>
          {writingHeading}
          <span className="folio-count">(08)</span>
        </h2>
        <span className="folio-label folio-scroll-hint">Scroll to explore ↔</span>
      </div>
      <div
        className="folio-publication-track"
        role="region"
        aria-label="Writing. Scroll horizontally or use the arrow keys to explore."
        tabIndex={0}
      >
        {writingPosts.map((post) => (
          <a
            className="folio-publication"
            key={post.url}
            href={post.url}
            target="_blank"
            rel="noreferrer"
          >
            <div className="folio-publication__meta">
              <span className="folio-label">{post.kind}</span>
              <time>{post.date}</time>
            </div>
            <h3>{post.title}</h3>
            <div className="folio-publication__bottom">
              <p>dev.to · {post.readTime}</p>
              <span className="folio-publication__read">
                Read article <ArrowUpRight size={20} />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
