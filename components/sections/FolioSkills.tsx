import { skillCount, skillGroups } from '@/lib/content'

export default function FolioSkills() {
  return (
    <section className="folio-skills" id="skills">
      <div className="folio-skills__heading">
        <h2>Built with.</h2>
        <span className="folio-skills__count">{skillCount} skills</span>
      </div>
      <div className="folio-skills__grid" data-reveal-group>
        {skillGroups.map((group) => (
          <div className="folio-skills__group" key={group.title} data-reveal>
            <h3>{group.title}</h3>
            <div className="folio-skills__items">
              {group.items.map((item) => (
                <span className="folio-skills__item" key={item.label}>
                  <img src={item.icon} alt="" width={13} height={13} loading="lazy" />
                  <span>{item.label}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
