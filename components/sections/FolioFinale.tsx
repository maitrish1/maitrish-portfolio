import { ArrowUpRight } from '@/components/shell/Shell'
import { offClockCopy, site } from '@/lib/content'

export default function FolioFinale() {
  return (
    <div className="folio-finale">
      <section className="folio-personal" id="off-clock" aria-labelledby="folio-personal-title">
        <h2 id="folio-personal-title" tabIndex={-1}>
          Off the clock
        </h2>
        <div>
          <p>{offClockCopy}</p>
        </div>
        <img
          className="folio-personal__mark"
          src={site.photo}
          alt={site.name}
          width={445}
          height={445}
        />
      </section>
      <section className="folio-contact" id="contact" aria-labelledby="folio-contact-title">
        <a className="folio-contact__main" href={`mailto:${site.email}`}>
          <h2 id="folio-contact-title" tabIndex={-1}>
            Let’s build.
          </h2>
          <ArrowUpRight size={24} strokeWidth={1.1} />
        </a>
        <div className="folio-contact__links">
          <a className="folio-contact__email" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <a href={site.linkedin} target="_blank" rel="noreferrer">
            LinkedIn <ArrowUpRight size={13} strokeWidth={2} />
          </a>
          <a href={site.github} target="_blank" rel="noreferrer">
            GitHub <ArrowUpRight size={13} strokeWidth={2} />
          </a>
          <a href={site.phoneHref}>
            {site.phone} <ArrowUpRight size={13} strokeWidth={2} />
          </a>
          <a href={site.resume} target="_blank" rel="noreferrer">
            Résumé <ArrowUpRight size={13} strokeWidth={2} />
          </a>
        </div>
      </section>
    </div>
  )
}
