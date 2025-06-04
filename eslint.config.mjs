import { createConfigForNuxt } from '@nuxt/eslint-config'

export default createConfigForNuxt().append({
    rules: {
        'vue/multi-word-component-names': 'off',
        '@typescript-eslint/no-explicit-any': 'warn'
    }
})
