import 'server-only'

const dictionaries = {
    en: () => import('./locales/en.json').then((module) => module.default),
    ru: () => import('./locales/ru.json').then((module) => module.default),
    kk: () => import('./locales/kk.json').then((module) => module.default),
}

export const getDictionary = async (locale: string) => {
    // @ts-ignore
    return dictionaries[locale]?.() ?? dictionaries.ru()
}
