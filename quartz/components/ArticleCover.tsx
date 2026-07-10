import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const ArticleCover: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  const thumbnail = fileData.frontmatter?.thumbnail
  if (!thumbnail) return null
  
  return (
    <div class="article-cover">
      <img src={thumbnail} alt="Cover" />
    </div>
  )
}

export default (() => ArticleCover) satisfies QuartzComponentConstructor