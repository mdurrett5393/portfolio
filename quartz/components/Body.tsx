import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Body: QuartzComponent = ({ children }: QuartzComponentProps) => {
  return (
    <div id="quartz-body">
      {children}
      <footer style={{ padding: "1rem 0", fontSize: "0.85rem", color: "var(--gray)" }}>
        © 2026 Mike Durrett. All rights reserved.
      </footer>
    </div>
  )
}

export default (() => Body) satisfies QuartzComponentConstructor