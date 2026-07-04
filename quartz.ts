// quartz.ts
import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"

const config = await loadQuartzConfig()
export default config

export const layout = await loadQuartzLayout({
  byPageType: {
    content: {
      afterBody: [Component.AboutMe()],
    },
  },
})