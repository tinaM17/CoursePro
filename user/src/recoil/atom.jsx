import { atom } from 'recoil'

export const userState = atom({
  key: 'User',
  default: '',
})

export const coursesState = atom({
  key: 'Courses',
  default: [],
})

export const purchaseState = atom({
  key: 'purchases',
  default: [],
})

export const showPurchaseState = atom({
  key: 'purchase',
  default: '',
})

export const courseState = atom({
  key: 'Course',
  default: null,
})

