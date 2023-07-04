/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["../../../templates/**/*.{html,js}"],
    theme: {
        extend: {
            typography: ({ theme }) => ({
                cyan: {
                    css: {
                        '--tw-prose-body': theme('colors.gray[200]'),
                        '--tw-prose-headings': theme('colors.cyan[600]'),
                        '--tw-prose-lead': theme('colors.cyan[700]'),
                        '--tw-prose-links': theme('colors.cyan[400]'),
                        '--tw-prose-bold': theme('colors.cyan[900]'),
                        '--tw-prose-counters': theme('colors.cyan[600]'),
                        '--tw-prose-bullets': theme('colors.cyan[400]'),
                        '--tw-prose-hr': theme('colors.cyan[300]'),
                        '--tw-prose-quotes': theme('colors.cyan[900]'),
                        '--tw-prose-quote-borders': theme('colors.cyan[300]'),
                        '--tw-prose-captions': theme('colors.cyan[700]'),
                        '--tw-prose-code': theme('colors.cyan[900]'),
                        '--tw-prose-pre-code': theme('colors.cyan[100]'),
                        '--tw-prose-pre-bg': theme('colors.cyan[900]'),
                        '--tw-prose-th-borders': theme('colors.cyan[300]'),
                        '--tw-prose-td-borders': theme('colors.cyan[200]'),
                        '--tw-prose-invert-body': theme('colors.cyan[200]'),
                        '--tw-prose-invert-headings': theme('colors.white'),
                        '--tw-prose-invert-lead': theme('colors.cyan[300]'),
                        '--tw-prose-invert-links': theme('colors.white'),
                        '--tw-prose-invert-bold': theme('colors.white'),
                        '--tw-prose-invert-counters': theme('colors.cyan[400]'),
                        '--tw-prose-invert-bullets': theme('colors.cyan[600]'),
                        '--tw-prose-invert-hr': theme('colors.cyan[700]'),
                        '--tw-prose-invert-quotes': theme('colors.cyan[100]'),
                        '--tw-prose-invert-quote-borders': theme('colors.cyan[700]'),
                        '--tw-prose-invert-captions': theme('colors.cyan[400]'),
                        '--tw-prose-invert-code': theme('colors.white'),
                        '--tw-prose-invert-pre-code': theme('colors.cyan[300]'),
                        '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
                        '--tw-prose-invert-th-borders': theme('colors.cyan[600]'),
                        '--tw-prose-invert-td-borders': theme('colors.cyan[700]'),
                    },
                },
            }),
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
    ],
}