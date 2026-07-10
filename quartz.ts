import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import * as Component from "./quartz/components"

const config = await loadQuartzConfig()
export default config

export const layout = await loadQuartzLayout({
  defaults: {
    beforeBody: [
      Component.ArticleCover(), // This pulls in your custom banner
      Component.ContentMeta(),
    ],
  },
  byPageType: {
    // This allows you to add the grid specifically to your homepage
    home: {
      afterBody: [
        Component.RecentNotes({
          title: "Latest Music",
          limit: 3,
          filter: (f) => f.slug!.startsWith("music/"),
        }),
        Component.RecentNotes({
          title: "Latest Design Work",
          limit: 3,
          filter: (f) => f.slug!.startsWith("design/"),
        }),
      ],
    },
  },
})