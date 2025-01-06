import { defineConfigWithTheme } from "vitepress"
import { withPwa } from "@vite-pwa/vitepress"

// configs
import viteConfig from "./theme/configs/vite"
import pwaConfig from "./theme/configs/pwa"
import themeConfig from "./theme/configs/theme"
import markdownitConfig from "./theme/configs/markdownit"

export default withPwa(
	defineConfigWithTheme({
		title: "GlobeMC",
		lang: "zh-CN",
		lastUpdated: true,
		description: "为普通玩家编写的 Minecraft 崩溃分析指南",
		srcDir: "docs",
		cleanUrls: true,

		themeConfig: themeConfig,
		markdown: markdownitConfig,
		vite: viteConfig,
		pwa: pwaConfig,

		rewrites: {
			blog: "blog/",
		},

		sitemap: {
			hostname: "https://crashmc.com",
		},

		head: [
			["link", { rel: "icon", href: "/favicon.ico" }],
			[
				"link",
				{ rel: "apple-touch-icon", href: "/apple-touch-icon-180x180.png" },
			],
			[
				"script",
				{
					async: "",
					src: "https://www.googletagmanager.com/gtag/js?id=G-7FLJW8JEPQ",
				},
			],
			[
				"script",
				{},
				`window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());
				gtag('config', 'G-7FLJW8JEPQ');`,
			],
		],
	}),
)
