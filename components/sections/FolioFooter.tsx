import { footer } from '@/lib/content'

// The reference nests this footer inside the blue .folio-finale wrapper.
// page.tsx renders it as a sibling, so re-enter the wrapper here (without
// its 26px top padding) to keep the blue block and hairline continuous.
export default function FolioFooter() {
  return (
    <div className="folio-finale" style={{ paddingTop: 0 }}>
      <footer className="folio-footer">
        <span>{footer.copyright}</span>
        <span>{footer.availability}</span>
      </footer>
    </div>
  )
}
