export interface Doctor {
  id: number
  name: string
  speciality: string
  experience: number
  gender: string
  reviewsCount: number
  acceptNew: boolean
  address: string
  insurances: string
  telehealth: boolean
  telehealth_available: string
  offline_available: string
  price: number
}
