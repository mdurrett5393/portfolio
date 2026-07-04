import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export const AboutMe: QuartzComponent = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "2rem", margin: "2rem 0", flexWrap: "wrap" }}>
      <div style={{ flex: "0 0 200px" }}>
        <img src="assets/me.png" style={{ width: "200px", height: "200px", borderRadius: "50%", objectFit: "cover" }} alt="Mike" />
      </div>
      <div style={{ flex: "1" }}>
        <p>👋 <strong>Hey there, I'm Mike</strong>—a veteran musician, professional web designer, and amateur jack of all trades. I have a passion for the intersection of arts and technology...</p>
      </div>
    </div>
  )
}

export default (() => AboutMe) as QuartzComponentConstructor