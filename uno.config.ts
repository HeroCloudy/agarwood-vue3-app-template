import {
  defineConfig,
  presetWind4,
  transformerDirectives,
  transformerVariantGroup,
  presetIcons,
} from 'unocss'

export default defineConfig({
  presets: [
    presetWind4({
      preflights: { reset: true },
    }),
    presetIcons({
      prefix: 'i-',
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],

  transformers: [
    // 启用 @apply 指令支持
    transformerDirectives(),
    // 启用 `hover:(bg-gray-400 text-white)` 类写法
    transformerVariantGroup(),
  ],

  theme: {
    colors: {
      // 品牌与状态色
      primary: 'var(--wm-color-primary)',
      success: 'var(--wm-color-success)',
      warning: 'var(--wm-color-warning)',
      danger: 'var(--wm-color-danger)',
      info: 'var(--wm-color-info)',
      // 文字色
      'text-primary': 'var(--wm-color-text-primary)',
      'text-regular': 'var(--wm-color-text-regular)',
      'text-secondary': 'var(--wm-color-text-secondary)',
      // 背景色
      'bg-page': 'var(--wm-bg-color-page)',
      'bg-base': 'var(--wm-bg-color-base)',
    },
    spacing: {
      xs: 'var(--wm-spacing-xs)',
      sm: 'var(--wm-spacing-sm)',
      md: 'var(--wm-spacing-md)',
      lg: 'var(--wm-spacing-lg)',
      xl: 'var(--wm-spacing-xl)',
      '2xl': 'var(--wm-spacing-2xl)',
    },
    fontSize: {
      xs: 'var(--wm-font-size-xs)',
      sm: 'var(--wm-font-size-sm)',
      base: 'var(--wm-font-size-base)',
      lg: 'var(--wm-font-size-lg)',
      xl: 'var(--wm-font-size-xl)',
      '2xl': 'var(--wm-font-size-2xl)',
      '3xl': 'var(--wm-font-size-3xl)',
    },
    borderRadius: {
      sm: 'var(--wm-border-radius-sm)',
      base: 'var(--wm-border-radius-base)',
      lg: 'var(--wm-border-radius-lg)',
      full: 'var(--wm-border-radius-full)',
    },
  },

  rules: [
    ...['primary', 'success', 'warning', 'danger', 'info'].flatMap((color) => [
      [`bg-${color}-light-3`, { 'background-color': `var(--wm-color-${color}-light-3)` }],
      [`bg-${color}-light-5`, { 'background-color': `var(--wm-color-${color}-light-5)` }],
      [`bg-${color}-light-7`, { 'background-color': `var(--wm-color-${color}-light-7)` }],
      [`bg-${color}-light-9`, { 'background-color': `var(--wm-color-${color}-light-9)` }],
      [`text-${color}-dark-2`, { color: `var(--wm-color-${color}-dark-2)` }],
    ]),
  ],

  shortcuts: {
    // 布局
    'flex-center': 'flex justify-center items-center',
    'flex-col-center': 'flex flex-col justify-center items-center',
  },
})
