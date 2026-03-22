import type { ContentItem } from '../types/content.ts'

export const contents: readonly ContentItem[] = [
  {
    id: 'sample-1',
    title: 'サンプル A',
    category: 'game',
    startYear: 2020,
    startMonth: 1,
    endYear: 2022,
    endMonth: 12,
  },
  {
    id: 'sample-2',
    title: 'サンプル B',
    category: 'game',
    startYear: 2021,
    startMonth: 6,
    ongoing: true,
  },
]
